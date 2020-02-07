import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpClientsServicesComponent } from './tp-clients-services.component';

describe('TpClientsServicesComponent', () => {
  let component: TpClientsServicesComponent;
  let fixture: ComponentFixture<TpClientsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpClientsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpClientsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
