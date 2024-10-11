import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AudiComponent } from './components/marchi/audi/audi.component';
import { BmwComponent } from './components/marchi/bmw/bmw.component';
import { VolkswagenComponent } from './components/marchi/volkswagen/volkswagen.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "bmw",
    component: BmwComponent
  },
  {
    path: "volkswagen",
    component: VolkswagenComponent
  },
  {
    path: "audi",
    component: AudiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
