import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotyVoteComponent } from './goty-vote.component';

describe('GotyComponent', () => {
  let component: GotyVoteComponent;
  let fixture: ComponentFixture<GotyVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotyVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotyVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
