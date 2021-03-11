import {Component, HostListener, OnInit} from '@angular/core';
import {Item} from '../models/item';
import {GameService} from '../../services/game.service';

const colorMap: { [k: number]: string } = {
  2: '#626567',
  4: '#424949',
  8: '#7e5109',
  16: '#196f3d',
  32: '#138d75',
  64: '#154360',
  128: '#9b59b6',
  256: '#78281f',
  512: '#c0392b',
  1024: '#7d6608',
  2048: '#45b69d'
};

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  keyEventCodeMap: { [type: string]: string } = {
    ArrowRight: 'right',
    ArrowLeft: 'left',
    ArrowUp: 'up',
    ArrowDown: 'down',
  };

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
  }

  getStyles(item: Item): { [p: string]: string } {
    const top = (item.row * 110 - 100) + 'px';
    const left = (item.col * 110 - 100) + 'px';
    return {top, left, 'background-color': colorMap[item.value] || 'black'};
  }

  @HostListener('window:keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if (this.keyEventCodeMap[event.code]) {
      this.gameService[this.keyEventCodeMap[event.code]]();
    }
  }

}
