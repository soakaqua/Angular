import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteVoteComponent } from './vote-vote.component';

describe('VoteVoteComponent', () => {
  let component: VoteVoteComponent;
  let fixture: ComponentFixture<VoteVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
