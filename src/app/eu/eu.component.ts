import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  
  eu = {
    nome: 'Samuel Felipe Mosquera Erazo',
    idade : 32,
    cidade : 'Cali e Rio de Janeiro',
    pet : 'Gato',
    petNome : 'Russo, Pantera',
    chapa : 'Sombra, Sam, Samuka',
    profissao : 'Desenvolvedor',
    comida : 'Sopa de Tomate',
    musica : 'Pacifico, Bebop, Salsa',
    frase : 'Animum debes mutare, non caelum...',
    cite : 'Séneca',
    imageSource : "https://pbs.twimg.com/profile_images/1321094137819635720/ZB0bzwXv_400x400.jpg"
  }

  segundos(): number { return this.eu.idade * 3.154e+7 }

  constructor() { }

  ngOnInit(): void {

  }

}
