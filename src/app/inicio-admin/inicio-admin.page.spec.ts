import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { InicioAdminPage } from './inicio-admin.page'; // Asegúrate de ajustar el nombre del archivo de tu componente

describe('InicioAdminPage', () => {
  let componente: InicioAdminPage;
  let fixture: ComponentFixture<InicioAdminPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioAdminPage],
      imports: [IonicModule.forRoot()], // Importa los módulos de Ionic
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAdminPage);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente InicioAdminPage', () => {
    expect(componente).toBeTruthy();
  });

  it('debería renderizar el título de la aplicación', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector('ion-title');
    expect(titulo.textContent).toContain('ReservaApp'); // Verifica que el título es correcto
  });

  it('debería mostrar el logo correctamente', () => {
    const logo = fixture.debugElement.nativeElement.querySelector('img.logo');
    expect(logo).toBeTruthy(); // Verifica que el logo está presente
    expect(logo.src).toContain('assets/icon/Logo.png'); // Verifica que la ruta del logo es correcta
  });

  it('debería renderizar el nombre "Reserva Los Pozones"', () => {
    const nombreReserva = fixture.debugElement.nativeElement.querySelector('h2');
    expect(nombreReserva.textContent).toContain('Reserva Los Pozones'); // Verifica que el nombre de la reserva es correcto
  });

  it('debería tener un campo de entrada para el ID', () => {
    const campoID = fixture.debugElement.query(By.css('ion-input.input'));
    expect(campoID).toBeTruthy(); // Verifica que el campo de entrada para el ID está presente
    expect(campoID.attributes['placeholder']).toBe('ID'); // Verifica que el placeholder es "ID"
  });

  it('debería tener un botón para iniciar sesión', () => {
    const botonIniciarSesion = fixture.debugElement.nativeElement.querySelector('ion-button.login-button');
    expect(botonIniciarSesion).toBeTruthy(); // Verifica que el botón de iniciar sesión está presente
    expect(botonIniciarSesion.textContent).toContain('Iniciar Sesión'); // Verifica que el texto del botón es correcto
  });

  it('debería llamar a la función PerAdmin cuando se haga clic en el botón de iniciar sesión', () => {
    spyOn(componente, 'PerAdmin'); // Espía la función PerAdmin
    const botonIniciarSesion = fixture.debugElement.nativeElement.querySelector('ion-button.login-button');
    botonIniciarSesion.click(); // Simula un clic en el botón

    expect(componente.PerAdmin).toHaveBeenCalled(); // Verifica que se ha llamado a la función PerAdmin
  });
});
