import { Component, Input, OnInit } from '@angular/core';
import { Card } from '@app/gameboard/types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit() {
    console.log(this.card);
  }

  flip() {
    this.card.flipped = !this.card.flipped;
  }
}
