import {Component} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  escondido : boolean = false;
  tabActive : number = 1;


  nombre : string = 'Nombre';
  profesion : string = 'Profesión';
  mail : string = 'ejemplo@correo.com';



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




