import { Component, inject, computed, signal, model } from '@angular/core';
import { SearchBar } from "../../components/search-bar/search-bar";
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { Monster } from "../../models/monster.model";
import { CommonModule } from '@angular/common';
import { MonsterService } from '../../services/monster/monster';

@Component({
  selector: 'app-monster-list',
  imports: [CommonModule, PlayingCardComponent, SearchBar],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css'
})
export class MonsterList {
  monsters = signal<Monster[]>([]);
  search = model('');
  filteredMonsters = computed(()=>{
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  })

  monsterService = inject(MonsterService);

  constructor(){
    this.monsters.set(this.monsterService.getAll());
  }
  addMonster(){
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }
}
