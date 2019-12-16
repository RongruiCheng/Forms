import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-forms',
  templateUrl: './hero-forms.component.html',
  styleUrls: ['./hero-forms.component.css']
})
export class HeroFormsComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  // 添加一个属性
  get showModel() {
    return JSON.stringify(this.model);
  }

  constructor() { }

  ngOnInit() {
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }

}
