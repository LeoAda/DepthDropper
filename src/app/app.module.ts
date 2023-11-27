import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalibrationComponent } from './calibration/calibration.component';
import { TimerComponent } from './timer/timer.component';
import { MatIconModule } from '@angular/material/icon';
import { RockComponent } from './rock/rock.component';

@NgModule({
  declarations: [
    AppComponent,
    CalibrationComponent,
    TimerComponent,
    RockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
