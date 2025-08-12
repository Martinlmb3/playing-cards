import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // Tu peux ajouter ici d'autres providers si nécessaire
  ]
})
.catch((err) => console.error(err));
