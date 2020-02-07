import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscBoldComponent } from './asc-bold.component';

describe('AscBoldComponent', () => {
  let component: AscBoldComponent;
  let fixture: ComponentFixture<AscBoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscBoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscBoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
