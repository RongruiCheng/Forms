import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-favoriteColor1',
  templateUrl: './favoriteColor1.component.html',
  styleUrls: ['./favoriteColor1.component.css']
})
export class FavoriteColor1Component implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }
  update() {
    // FormControl 提供了一个 setValue() 方法，它会修改这个表单控件的值
    this.name.setValue('nancy');
  }
}
