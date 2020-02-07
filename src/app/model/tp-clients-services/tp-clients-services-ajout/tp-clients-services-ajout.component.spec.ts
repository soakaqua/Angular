import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpClientsServicesAjoutComponent } from './tp-clients-services-ajout.component';

describe('TpClientsServicesAjoutComponent', () => {
  let component: TpClientsServicesAjoutComponent;
  let fixture: ComponentFixture<TpClientsServicesAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpClientsServicesAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpClientsServicesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
