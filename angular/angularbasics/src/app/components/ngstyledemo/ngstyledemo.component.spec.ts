import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyledemoComponent } from './ngstyledemo.component';

describe('NgstyledemoComponent', () => {
  let component: NgstyledemoComponent;
  let fixture: ComponentFixture<NgstyledemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyledemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
