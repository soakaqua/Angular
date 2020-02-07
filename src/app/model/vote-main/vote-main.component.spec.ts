import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteMainComponent } from './vote-main.component';

describe('VoteMainComponent', () => {
  let component: VoteMainComponent;
  let fixture: ComponentFixture<VoteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
