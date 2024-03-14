import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() fruit: { imagem: string, descricao: string } | undefined;
  // @Output() nomeProdutoAlterado = new EventEmitter<any>;

  // alteracaoProduto() {
  //   this.nomeProdutoAlterado.emit();
  // }
  
  // produto = 'Banana';
  // valor = '2,20';
}
