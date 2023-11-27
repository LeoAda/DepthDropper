import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: ' timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  @Output() runRockAnimation: EventEmitter<void> = new EventEmitter();
  @Output() stopRockAnimation: EventEmitter<void> = new EventEmitter();
  @Output() fallTime: EventEmitter<number> = new EventEmitter();
  isFalling: boolean = false;
  dropTime: number = 0;
  timer: any;

  dropRock() {
    this.runRockAnimation.emit();
    this.dropTime = 0;
    this.isFalling = true;
    this.startTimer();
  }

  stopRock() {
    this.stopRockAnimation.emit();
    this.fallTime.emit(this.dropTime);
    clearInterval(this.timer);
    this.isFalling = false;
  }

  startTimer() {
    const startTime = Date.now();
    this.timer = setInterval(() => {
      this.dropTime = Date.now() - startTime;
    });
  }
}
