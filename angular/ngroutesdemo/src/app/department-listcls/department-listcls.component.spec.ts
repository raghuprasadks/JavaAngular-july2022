import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListclsComponent } from './department-listcls.component';

describe('DepartmentListclsComponent', () => {
  let component: DepartmentListclsComponent;
  let fixture: ComponentFixture<DepartmentListclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentListclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
