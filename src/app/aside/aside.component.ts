import {Component} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  escondido: boolean = true;
  tabActive: number = 1;

  persona = {
    nombre: 'Nombre',
    profesion: 'Profesión',
    mail: 'ejemplo@correo.com',
    movil: '123456789',
    empresa: 'Empresa',
    web: 'www.web.com',
  }
  social = {
    facebook: 'facebook',
    twitter: 'twitter',
    linkedin: 'linkedin',
    instagram: 'instagram',
  }
  estilo = {
    color1: '#ffffff',
    color2: '#f0f0f0',
    color3: '#212529',
  }

  opcionesImagen = [
    { id: 'imagenRadio1', etiqueta: 'Horizontal' },
    { id: 'imagenRadio2', etiqueta: 'Vertical' },
    { id: 'imagenRadio3', etiqueta: 'Cuadrada' }
  ];


  constructor() {
  }

  pulsado($event) {
    this.escondido = !this.escondido;
    console.log('Mi evento', $event);
  }

  tabSelect(tab: string) {
    switch (tab) {
      case 'estilo':
        console.log('estilo');
        this.tabActive = 1;
        break;

      case 'opciones':
        console.log('opciones');
        this.tabActive = 2;
        break;

      case 'info':
        console.log('info');
        this.tabActive = 3;
        break;

      case 'social':
        console.log('social');
        this.tabActive = 4;
        break;
    }
  }

}




