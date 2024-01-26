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
    tarjetaCuadrada: true,
  }

  campos = {
    profesion: true,
    email: true,
    movil: true,
    empresa: true,
    facebook: true,
    twitter: true,
    linkedin: true,
    instagram: true,
    youtube: true,
    web:true,
  }


  constructor() {
  }


  pulsado() {
    this.escondido = !this.escondido;
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



