import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsUserComponent } from './carts-user.component';

describe('CartsUserComponent', () => {
  let component: CartsUserComponent;
  let fixture: ComponentFixture<CartsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
