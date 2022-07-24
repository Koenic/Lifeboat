import { Component, OnInit } from '@angular/core';
import { Card } from '@app/gameboard/types/card';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.page.html',
  styleUrls: ['./gameboard.page.scss'],
})
export class GameboardPage implements OnInit {
  public characters: Card[] = [
    {
      name: 'first-mate',
      frontImage: 'assets/cards/characters/first-mate.webp',
      backImage: 'assets/cards/characters/cardBack.webp',
      type: 'character',
      altText: 'First mate',
      flipped: true,
    },
    {
      name: 'first-mate',
      frontImage: 'assets/cards/characters/first-mate.webp',
      backImage: 'assets/cards/characters/cardBack.webp',
      type: 'character',
      altText: 'First mate',
      flipped: false,
    },
    {
      name: 'first-mate',
      frontImage: 'assets/cards/characters/first-mate.webp',
      backImage: 'assets/cards/characters/cardBack.webp',
      type: 'character',
      altText: 'First mate',
      flipped: false,
    },
    {
      name: 'first-mate',
      frontImage: 'assets/cards/characters/first-mate.webp',
      backImage: 'assets/cards/characters/cardBack.webp',
      type: 'character',
      altText: 'First mate',
      flipped: false,
    },
    {
      name: 'first-mate',
      frontImage: 'assets/cards/characters/first-mate.webp',
      backImage: 'assets/cards/characters/cardBack.webp',
      type: 'character',
      altText: 'First mate',
      flipped: false,
    },
    {
      name: 'first-mate',
      frontImage: 'assets/cards/characters/first-mate.webp',
      backImage: 'assets/cards/characters/cardBack.webp',
      type: 'character',
      altText: 'First mate',
      flipped: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
