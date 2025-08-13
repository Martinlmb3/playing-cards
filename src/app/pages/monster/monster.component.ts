import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MonsterType } from '../../utils/monster.utils';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { MonsterService } from '../../services/monster/monster';
import { Monster } from '../../models/monster.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monster',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    PlayingCardComponent
  ],
  standalone:true,
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})

export class MonsterComponent implements OnInit, OnDestroy{
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;
  private MonsterService = inject(MonsterService);
  monsterId = -1;
  monsterTypes = Object.values(MonsterType);
  formGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    type: new FormControl(MonsterType.ELECTRIC, [Validators.required]),
    hp: new FormControl(0,[Validators.required, Validators.min(1), Validators.max(200)]),
    figureCaption: new FormControl('',[Validators.required]),
    attackName: new FormControl('',[Validators.required]),
    attackStrength: new FormControl('',[Validators.required, Validators.min(1), Validators.max(200)]),
    attackDescription: new FormControl('',[Validators.required])
  });
  monster: Monster = Object.assign(new Monster(), this.formGroup.value);
  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data => {
      this.monster =  Object.assign(new Monster(), data);
    })
    this.routeSubscription = this.route.params.subscribe(params =>{
      if(params['monster']){
        this.monsterId = parseInt(params['monster']);
        const monsterFound = this.MonsterService.get(this.monsterId);
        if(monsterFound){
          this.monster = monsterFound;
          this.formGroup.patchValue(this.monster);
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.formValuesSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }

  submit(event:Event){
    event.preventDefault();
    if(this.monsterId === -1){
      this.MonsterService?.add(this.monster)
    }else{
      this.monster.id = this.monsterId;
      this.MonsterService.update(this.monster);
    }
    this.navigateBack();
  }
  isFieldValid(field: keyof typeof this.formGroup.controls) {
    const control = this.formGroup.get(field as string);
    return control?.invalid && (control.dirty || control.touched);
  }
  navigateBack(){
    this.router.navigate(['/home']);
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input?.files && input.files.length) {
      const [file] = input.files;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string,
        });
      };
    }
  }
  // Ajoute cette méthode pour afficher le nom du fichier
  getFileName(): string {
    const imageValue = this.formGroup.get('image')?.value;
    if (imageValue && typeof imageValue === 'string' && imageValue.length > 0) {
      // Extraire le nom du fichier de l'URL ou du chemin
      const parts = imageValue.split(/[\\\/]/);
      return parts[parts.length - 1];
    }
    return '';
  }
}
