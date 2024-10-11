import { Component, OnInit } from '@angular/core';
import { iAuto } from '../../interfaces/i-auto';
import { cars } from '../../../../public/cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shuffledArr!: iAuto[];

  ngOnInit() {
    this.shuffledArr = this.shuffle(cars);
    console.log(this.shuffledArr);

  }

  shuffle(array: iAuto[]): iAuto[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
