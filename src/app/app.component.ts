import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RockComponent } from './rock/rock.component';
import { ComputeService } from './compute/compute.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('rockInstance') rockInstance!: RockComponent;
  constructor(private computeService: ComputeService) {}
  depth: number = 0;

  depthResult(timeMs: number) {
    const depth = this.computeService.freeFallHeight(timeMs / 1000);
    this.depth = depth;
  }
}
