import { Component } from '@angular/core';
import { iAuto } from '../../../interfaces/i-auto';
import { cars } from '../../../../../public/cars';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrl: './bmw.component.scss'
})
export class BmwComponent {
  bmwArr!: iAuto[]

  ngOnInit(){
    this.bmwArr = cars.filter(car => car.brand.toLocaleLowerCase() === "bmw")
    console.log(this.bmwArr);

  }
}
