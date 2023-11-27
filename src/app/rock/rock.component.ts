import { Component, Input } from '@angular/core';

@Component({
  selector: 'rock',
  templateUrl: './rock.component.html',
})
export class RockComponent {
  @Input() width: string = '100px';
  @Input() height: string = '100px';
  @Input() color: string = '#000000';
  rotation: number = 0;
  rotationSpeed: number = 1;
  interval: any;

  rotateRockAnimation() {
    this.interval = setInterval(() => {
      this.rotation += 1;
    }, this.rotationSpeed);
  }

  stopRockAnimation() {
    clearInterval(this.interval);
  }
}
