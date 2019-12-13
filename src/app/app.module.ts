import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteColor1Component } from './favoriteColor1/favoriteColor1.component';
import { ProfileEditorComponent } from './ProfileEditor/ProfileEditor.component';
import { HeroFormsComponent } from './hero-forms/hero-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
   declarations: [
      AppComponent,
      FavoriteColor1Component,
      ProfileEditorComponent,
      HeroFormsComponent,
      DynamicFormComponent,
      DynamicFormQuestionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
