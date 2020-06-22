import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatFormFieldModule } from  "@angular/material/form-field"
import { MatInputModule } from '@angular/material/input';


import { LandingComponent } from './landing/landing.component'
import { StepperComponent } from './stepper/stepper.component'
import { ResultadoComponent } from './respuestas/resultado'
import { MagoComponent } from './respuestas/mago/mago'
import { RegenteComponent } from './respuestas/regente/regente'
import { CuidadorComponent } from './respuestas/cuidador/cuidador'
import { CreadorComponent } from './respuestas/creador/creador'
import  { FormularioComponent }  from  './formulario/formulario.component'
import { AppModule } from './app.module';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'preguntas', component: StepperComponent },
  {path: 'respuestas', component: ResultadoComponent },
  {path: 'mago', component: MagoComponent },
  {path: 'regente', component: RegenteComponent },
  {path: 'cuidador', component: CuidadorComponent },
  {path: 'creador', component: CreadorComponent },
  {path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
