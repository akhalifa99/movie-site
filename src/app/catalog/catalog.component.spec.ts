import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { CatalogComponent } from './catalog.component';

import { LoginService } from '../login/login.service';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Movie } from '../models/movie';
import { TopratedService } from './toprated.service';

const movie:Movie={
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      genre_ids: [
        18,
        80
      ],
      id: 238,
      original_language: "en",
      original_title: "The Godfather",
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 116.589,
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
      title: "The Godfather",
      video: false,
      vote_average: 8.7,
      vote_count: 18594
    }
  ],
  total_pages: 573,
  total_results: 11457
}

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  // const mock={
  //   getTopRated: jasmine.createSpy('getTopRated').and.returnValue(Promise.resolve(movie))
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CatalogComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
    
    component.showTopRated
    const element:DebugElement[]=fixture.debugElement.queryAll(By.css('.container'));
    fixture.detectChanges();  
    expect(element.length).toEqual(1)
    
    
    
  });
});
