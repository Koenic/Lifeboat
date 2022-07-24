import { Component, Input, OnInit } from '@angular/core';
import { Card } from '@app/gameboard/types/card';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss'],
})
export class BoatComponent implements OnInit {
  @Input() characters: Card[];

  constructor() {}

  ngOnInit() {}
}
