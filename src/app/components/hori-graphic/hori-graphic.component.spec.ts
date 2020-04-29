import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriGraphicComponent } from './hori-graphic.component';

describe('HoriGraphicComponent', () => {
  let component: HoriGraphicComponent;
  let fixture: ComponentFixture<HoriGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoriGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoriGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
