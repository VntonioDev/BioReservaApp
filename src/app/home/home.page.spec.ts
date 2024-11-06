import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { HomePage } from './home.page'; // Asegúrate de ajustar el nombre del archivo de tu componente

describe('HomePage', () => {
  let componente: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()], // Importa los módulos de Ionic
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente HomePage', () => {
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

  it('debería tener un campo de entrada para el correo', () => {
    const campoCorreo = fixture.debugElement.query(By.css('ion-input[placeholder="Correo"]'));
    expect(campoCorreo).toBeTruthy(); // Verifica que el campo de entrada para el correo está presente
    expect(campoCorreo.attributes['placeholder']).toBe('Correo'); // Verifica que el placeholder es "Correo"
  });

  it('debería tener un campo de entrada para la contraseña', () => {
    const campoContraseña = fixture.debugElement.query(By.css('ion-input[placeholder="Contraseña"]'));
    expect(campoContraseña).toBeTruthy(); // Verifica que el campo de entrada para la contraseña está presente
    expect(campoContraseña.attributes['placeholder']).toBe('Contraseña'); // Verifica que el placeholder es "Contraseña"
  });

  it('debería tener un enlace para "Olvidé mi contraseña"', () => {
    const enlaceOlvido = fixture.debugElement.nativeElement.querySelector('.links-container a');
    expect(enlaceOlvido).toBeTruthy(); // Verifica que el enlace está presente
    expect(enlaceOlvido.textContent).toContain('Olvidé mi contraseña'); // Verifica que el texto del enlace es correcto
  });

  it('debería tener un botón "Admin"', () => {
    const botonAdmin = fixture.debugElement.nativeElement.querySelector('.links-container button');
    expect(botonAdmin).toBeTruthy(); // Verifica que el botón de admin está presente
    expect(botonAdmin.textContent).toContain('Admin'); // Verifica que el texto del botón es correcto
  });

  it('debería tener un botón para iniciar sesión', () => {
    const botonIniciarSesion = fixture.debugElement.nativeElement.querySelector('ion-button.login-button');
    expect(botonIniciarSesion).toBeTruthy(); // Verifica que el botón de iniciar sesión está presente
    expect(botonIniciarSesion.textContent).toContain('Iniciar Sesión'); // Verifica que el texto del botón es correcto
  });

  it('debería llamar a la función login cuando se haga clic en el botón de iniciar sesión', () => {
    spyOn(componente, 'login'); // Espía la función login
    const botonIniciarSesion = fixture.debugElement.nativeElement.querySelector('ion-button.login-button');
    botonIniciarSesion.click(); // Simula un clic en el botón

    expect(componente.login).toHaveBeenCalled(); // Verifica que se ha llamado a la función login
  });

  it('debería llamar a la función admin cuando se haga clic en el botón de admin', () => {
    spyOn(componente, 'admin'); // Espía la función admin
    const botonAdmin = fixture.debugElement.nativeElement.querySelector('.links-container button');
    botonAdmin.click(); // Simula un clic en el botón

    expect(componente.admin).toHaveBeenCalled(); // Verifica que se ha llamado a la función admin
  });
});

