import { Component } from '@angular/core';
import { cars } from '../../../../public/cars';
import { iAuto } from '../../interfaces/i-auto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  bmwArray!: iAuto[];
  volkswagenArray!: iAuto[];
  audiArray!: iAuto[];
  isMenuOpen:boolean = false;
  items: any;

  ngOnInit() {
    console.log(cars);
    this.bmwArray = cars.filter(car => car.brand.toLocaleLowerCase() === "bmw");
    this.volkswagenArray = cars.filter(car => car.brand.toLocaleLowerCase() === "volkswagen");
    this.audiArray = cars.filter(car => car.brand.toLocaleLowerCase() === "audi");
    console.log(this.bmwArray);
    console.log(this.volkswagenArray);
    console.log(this.audiArray);
  }
}
