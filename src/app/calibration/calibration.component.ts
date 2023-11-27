import { Component } from '@angular/core';

@Component({
  selector: 'calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss'],
})
export class CalibrationComponent {
  isCalibrating: boolean = false;
  cycle = 0;
  totalCycle = 5;
  dropTime: number = 0;
  timer: any;

  audio = new Audio();

  ngOnInit() {
    this.audio.src = '../../assets/audio/plouf.wav';
    this.audio.load();
  }

  startCalibration() {
    this.isCalibrating = true;
  }

  reaction() {
    this.cycle++;
    if (this.cycle === this.totalCycle) {
      this.stopCalibration();
    }
    this.playPlouf();
  }

  stopCalibration() {
    this.cycle = 0;
    clearInterval(this.timer);
    this.isCalibrating = false;
  }

  playPlouf() {
    this.audio.addEventListener('canplaythrough', () => {
      this.audio.play();
    });
  }
}
