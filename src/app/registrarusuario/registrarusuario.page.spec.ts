import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RegistrarusuarioPage } from './registrarusuario.page';

describe('RegistrarusuarioPage ', () => {
  let component: RegistrarusuarioPage;
  let fixture: ComponentFixture<RegistrarusuarioPage >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarusuarioPage],
      imports: [IonicModule.forRoot(), FormsModule] // Importa IonicModule y FormsModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios en el DOM
  });

  it('debería crear el componente RegistrarUsuarioPage', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el encabezado con el título "Registrar Usuario"', () => {
    const tituloEncabezado = fixture.debugElement.nativeElement.querySelector('ion-title');
    expect(tituloEncabezado.textContent).toContain('Registrar Usuario');
  });

  it('debería renderizar todos los campos de entrada con los placeholders correctos', () => {
    const campoNombre = fixture.debugElement.query(By.css('ion-input[placeholder="Nombre"]'));
    const campoApellido = fixture.debugElement.query(By.css('ion-input[placeholder="Apellido"]'));
    const campoRut = fixture.debugElement.query(By.css('ion-input[placeholder="Rut"]'));
    const campoCorreo = fixture.debugElement.query(By.css('ion-input[placeholder="Correo"]'));
    const campoTelefono = fixture.debugElement.query(By.css('ion-input[placeholder="Teléfono"]'));

    expect(campoNombre).toBeTruthy();  // Verifica que el campo "Nombre" está presente
    expect(campoApellido).toBeTruthy();  // Verifica que el campo "Apellido" está presente
    expect(campoRut).toBeTruthy();  // Verifica que el campo "Rut" está presente
    expect(campoCorreo).toBeTruthy();  // Verifica que el campo "Correo" está presente
    expect(campoTelefono).toBeTruthy();  // Verifica que el campo "Teléfono" está presente
  });

  it('debería renderizar el botón "Registrar"', () => {
    const botonRegistrar = fixture.debugElement.nativeElement.querySelector('ion-button');
    expect(botonRegistrar.textContent).toContain('Registrar');
  });

  it('debería renderizar el footer con las pestañas Perfil y Opciones', () => {
    const pestañaPerfil = fixture.debugElement.nativeElement.querySelector('ion-tab-button[tab="perfil"]');
    const pestañaOpciones = fixture.debugElement.nativeElement.querySelector('ion-tab-button[tab="opciones"]');

    expect(pestañaPerfil).toBeTruthy(); // Verifica que la pestaña "Perfil" está presente
    expect(pestañaOpciones).toBeTruthy(); // Verifica que la pestaña "Opciones" está presente
  });
});
