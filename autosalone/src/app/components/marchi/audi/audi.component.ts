import { Component } from '@angular/core';
import { cars } from '../../../../../public/cars';
import { iAuto } from '../../../interfaces/i-auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  audiArr!: iAuto[]

  ngOnInit(){
    this.audiArr = cars.filter(car => car.brand.toLocaleLowerCase() === "audi")
    console.log(this.audiArr);

  }
}
