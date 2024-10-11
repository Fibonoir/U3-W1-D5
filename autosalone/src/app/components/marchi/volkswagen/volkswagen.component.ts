import { Component } from '@angular/core';
import { cars } from '../../../../../public/cars';
import { iAuto } from '../../../interfaces/i-auto';

@Component({
  selector: 'app-volkswagen',
  templateUrl: './volkswagen.component.html',
  styleUrl: './volkswagen.component.scss'
})
export class VolkswagenComponent {
  volkArr!: iAuto[]

  ngOnInit(){
    this.volkArr = cars.filter(car => car.brand.toLocaleLowerCase() === "volkswagen")
    console.log(this.volkArr);

  }
}

