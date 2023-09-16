import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersJsonComponent } from './users.json.component';

describe('UsersJsonComponent', () => {
  let component: UsersJsonComponent;
  let fixture: ComponentFixture<UsersJsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersJsonComponent]
    });
    fixture = TestBed.createComponent(UsersJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
