import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtteremComponent } from './etterem/etterem.component';
import { RendelesekComponent } from './rendelesek/rendelesek.component';

const routes: Routes = [
  {path:"etterem" , component:EtteremComponent},
  {path:"rendelesek" , component:RendelesekComponent},
  {path: "**", component:EtteremComponent},
  {path: "", component:EtteremComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
