import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaProdutos = [
    {
      imagem: 'assets/banana.jpg',
      descricao: 'Banana'
    },
    {
      imagem: 'assets/maca.jpg',
      descricao: 'Maçã'
    },
    {
      imagem: 'assets/abacaxi.jpg',
      descricao: 'Abacaxi'
    },
    {
      imagem: 'assets/laranja.jpg',
      descricao: 'Laranja'
    },
  ]
}
