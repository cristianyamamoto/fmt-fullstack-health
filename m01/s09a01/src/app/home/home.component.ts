import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  inputPesquisa: string | undefined;
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
  listaProdutosFiltrada = this.listaProdutos;

  pesquisar() {
    if(!this.inputPesquisa) {
      this.listaProdutosFiltrada = this.listaProdutos;
    } else {
      this.listaProdutosFiltrada = this.listaProdutos.filter(produto => produto.descricao == this.inputPesquisa);
    }
  }
  
}
