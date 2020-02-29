import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoEncuestasPage } from './ingreso-encuestas.page';

describe('IngresoEncuestasPage', () => {
  let component: IngresoEncuestasPage;
  let fixture: ComponentFixture<IngresoEncuestasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoEncuestasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoEncuestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
