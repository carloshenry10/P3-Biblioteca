import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosReservadosComponent } from './livros-reservados.component';

describe('LivrosReservadosComponent', () => {
  let component: LivrosReservadosComponent;
  let fixture: ComponentFixture<LivrosReservadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosReservadosComponent]
    });
    fixture = TestBed.createComponent(LivrosReservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
