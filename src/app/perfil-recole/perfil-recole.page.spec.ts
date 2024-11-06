import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilRecolePage } from './perfil-recole.page';

describe('PerfilRecolePage', () => {
  let component: PerfilRecolePage;
  let fixture: ComponentFixture<PerfilRecolePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRecolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
