import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Commission } from './commission';

describe('Commission', () => {
  let component: Commission;
  let fixture: ComponentFixture<Commission>;

  beforeEach(async () => {
    window.localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [Commission],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps the form invalid until required details and photo are present', () => {
    component.submitRequest();

    expect(component.form.invalid).toBe(true);
    expect(component.submittedRequest).toBeNull();
  });

  it('creates a queue token for a valid local request', () => {
    component.form.setValue({
      name: 'Asha Mehta',
      email: 'asha@example.com',
      mobile: '9876543210',
      address: '12 Paper Street',
      deliveryAddress: 'asha@example.com',
      photoName: 'portrait.jpg',
      message: 'Please keep the smile soft',
    });
    component.imagePreview = 'data:image/jpeg;base64,abc';

    component.submitRequest();

    expect(component.submittedRequest?.tokenId).toMatch(/^AA-SK-\d{8}-001$/);
  });
});
