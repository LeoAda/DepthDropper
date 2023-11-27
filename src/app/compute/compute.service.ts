import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComputeService {
  constructor() {}

  freeFallHeight(time: number): number {
    // Time in seconds
    // Height in meters
    const g = 9.806;
    return (g * time ** 2) / 2;
  }
}
