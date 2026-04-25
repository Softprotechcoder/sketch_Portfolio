import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio } from './portfolio';

describe('Portfolio', () => {
  let component: Portfolio;
  let fixture: ComponentFixture<Portfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters sketches by selected category', () => {
    component.selectCategory('Portrait');

    expect(component.filteredSketches.every((sketch) => sketch.category === 'Portrait')).toBe(true);
  });
});
