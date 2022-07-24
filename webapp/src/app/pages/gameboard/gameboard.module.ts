import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameboardPageRoutingModule } from './gameboard-routing.module';

import { GameboardPage } from './gameboard.page';
import { SharedComponents } from '@app/shared/components/index.module';
import { GameBoardComponents } from '@app/gameboard/components/index.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameboardPageRoutingModule,
    SharedComponents,
    GameBoardComponents,
  ],
  declarations: [GameboardPage],
})
export class GameboardPageModule {}
