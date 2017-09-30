import { TestBed, async } from '@angular/core/testing';

import { AccordionComponent } from './accordion';

describe('accordion', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccordionComponent
      ],
    }).compileComponents();
  }));

  it('should create AccordionComponent', async(() => {
    const fixture = TestBed.createComponent(AccordionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
