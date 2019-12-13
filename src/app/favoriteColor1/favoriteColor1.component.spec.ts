/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavoriteColor1Component } from './favoriteColor1.component';

describe('FavoriteColor1Component', () => {
  let component: FavoriteColor1Component;
  let fixture: ComponentFixture<FavoriteColor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteColor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteColor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
