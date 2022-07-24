import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BoatComponent } from './boat/boat.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CardComponent, BoatComponent],
  exports: [CardComponent, BoatComponent],
})
export class GameBoardComponents {}
