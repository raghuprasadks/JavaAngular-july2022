import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingdemoComponent } from './databindingdemo.component';

describe('DatabindingdemoComponent', () => {
  let component: DatabindingdemoComponent;
  let fixture: ComponentFixture<DatabindingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
