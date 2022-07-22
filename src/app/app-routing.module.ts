import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './Departements/departement/departement.component';
import { RegionComponent } from './Regions/region/region.component';

const routes: Routes = [
  {path:'', component: RegionComponent},
  {path: 'Departements', component: DepartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
