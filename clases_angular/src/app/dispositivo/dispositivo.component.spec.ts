import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoComponent } from './dispositivo.component';

describe('DispositivoComponent', () => {
  let component: DispositivoComponent;
  let fixture: ComponentFixture<DispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
