import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicAddComponent } from './mechanic-add.component';

describe('MechanicAddComponent', () => {
  let component: MechanicAddComponent;
  let fixture: ComponentFixture<MechanicAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
