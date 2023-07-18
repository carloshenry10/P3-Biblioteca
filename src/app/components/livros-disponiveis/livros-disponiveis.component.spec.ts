import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDisponiveisComponent } from './livros-disponiveis.component';

describe('LivrosDisponiveisComponent', () => {
  let component: LivrosDisponiveisComponent;
  let fixture: ComponentFixture<LivrosDisponiveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosDisponiveisComponent]
    });
    fixture = TestBed.createComponent(LivrosDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
