import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorregistraionComponent } from './vendorregistraion.component';

describe('VendorregistraionComponent', () => {
  let component: VendorregistraionComponent;
  let fixture: ComponentFixture<VendorregistraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorregistraionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorregistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
