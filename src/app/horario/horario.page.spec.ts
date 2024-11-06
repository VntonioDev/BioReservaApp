import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { HorarioPage } from './horario.page'; // Asegúrate de ajustar el nombre del archivo de tu componente

describe('HorarioPage', () => {
  let componente: HorarioPage;
  let fixture: ComponentFixture<HorarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorarioPage],
      imports: [IonicModule.forRoot()], // Importa los módulos de Ionic
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioPage);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente HorarioPage', () => {
    expect(componente).toBeTruthy();
  });

  it('debería renderizar el título "Horario"', () => {
    const titulo = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(titulo.textContent).toContain('Horario'); // Verifica que el título es correcto
  });

  it('debería mostrar la información del usuario', () => {
    const avatar = fixture.debugElement.query(By.css('ion-avatar img')).nativeElement;
    const nombreUsuario = fixture.debugElement.query(By.css('h2')).nativeElement;
    const semana = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(avatar).toBeTruthy(); // Verifica que el avatar está presente
    expect(avatar.src).toContain('assets/avatar.png'); // Verifica que la ruta del avatar es correcta
    expect(nombreUsuario.textContent).toContain('Juan Perez'); // Verifica que el nombre del usuario es correcto
    expect(semana.textContent).toContain('Semana 30-08-2024'); // Verifica que la semana es correcta
  });

  it('debería mostrar la lista de horarios', () => {
    const listaItems = fixture.debugElement.queryAll(By.css('ion-list ion-item'));
    expect(listaItems.length).toBe(5); // Verifica que hay 5 ítems en la lista de horarios

    const turnos = [
      'Turno de 08:00 AM a 15:00 PM',
      'Turno de 15:00 PM a 20:00 PM', // Corrige '15:00 AM' a '15:00 PM'
      'Turno de 08:00 AM a 15:00 PM',
      'Turno de 08:00 AM a 20:00 PM',
      'Turno de 08:00 AM a 15:00 PM',
    ];

    listaItems.forEach((item, index) => {
      expect(item.query(By.css('ion-label')).nativeElement.textContent).toContain(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'][index]); // Verifica que el día de la semana es correcto
      expect(item.query(By.css('ion-note')).nativeElement.textContent).toContain(turnos[index]); // Verifica que el turno es correcto
    });
  });

  it('debería mostrar la barra de navegación en el pie de página', () => {
    const footer = fixture.debugElement.query(By.css('ion-footer')).nativeElement;
    expect(footer).toBeTruthy(); // Verifica que el pie de página está presente
  });

  it('debería tener los botones de navegación correctos', () => {
    const tabButtons = fixture.debugElement.queryAll(By.css('ion-tab-button'));
    expect(tabButtons.length).toBe(3); // Verifica que hay 3 botones en la barra de navegación

    const labels = ['Basureros a cargo', 'Perfil', 'Opciones'];
    const icons = ['trash-outline', 'person-outline', 'settings-outline'];

    tabButtons.forEach((button, index) => {
      expect(button.query(By.css('ion-label')).nativeElement.textContent).toContain(labels[index]); // Verifica que el texto de cada botón es correcto
      expect(button.query(By.css('ion-icon')).nativeElement.getAttribute('name')).toBe(icons[index]); // Verifica que el icono de cada botón es correcto
    });
  });
});
