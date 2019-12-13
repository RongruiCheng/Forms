import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteColor1Component} from './favoriteColor1/favoriteColor1.component';
import { ProfileEditorComponent } from './ProfileEditor/ProfileEditor.component';
import { HeroFormsComponent } from './hero-forms/hero-forms.component';


const routes: Routes = [
  { path: 'favoriteColor', component: FavoriteColor1Component },
  { path: 'reactiveForms', component: ProfileEditorComponent },
  { path: 'heroForms', component: HeroFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
