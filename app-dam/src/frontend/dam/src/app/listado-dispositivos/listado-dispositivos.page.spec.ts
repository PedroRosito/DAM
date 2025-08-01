import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoDispositivosPage } from './listado-dispositivos.page';

describe('ListadoDispositivosPage', () => {
  let component: ListadoDispositivosPage;
  let fixture: ComponentFixture<ListadoDispositivosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDispositivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
