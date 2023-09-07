import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { CatalogComponent } from './catalog.component';

import { LoginService } from '../login/login.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CatalogComponent]
    });
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check movie list', () => {
    let loginService= fixture.debugElement.injector.get(LoginService)
    loginService.logged=true
    const element:DebugElement[]=fixture.debugElement.queryAll(By.css('.card1'));
    fixture.detectChanges();
    console.log(loginService.logged)
    expect(element.length).toEqual(20)
  });
});
