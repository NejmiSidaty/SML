import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersnavComponent } from './usersnav.component';

describe('UsersnavComponent', () => {
  let component: UsersnavComponent;
  let fixture: ComponentFixture<UsersnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
