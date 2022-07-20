import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylenclassComponent } from './stylenclass.component';

describe('StylenclassComponent', () => {
  let component: StylenclassComponent;
  let fixture: ComponentFixture<StylenclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylenclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylenclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
