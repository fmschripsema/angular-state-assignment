import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() id!: number;
  @Input() userId!: number;

  flipped: boolean = false;

  flipTile(): void {
    this.flipped = !this.flipped;
  }
}
