import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatStepperModule } from '@angular/material/stepper'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule, } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { StepperComponent } from './stepper/stepper.component'
import { LandingComponent } from './landing/landing.component'
import { ResultadoComponent } from './respuestas/resultado';
import { CuidadorComponent } from './respuestas/cuidador/cuidador';
import { RegenteComponent } from './respuestas/regente/regente';
import { MagoComponent } from './respuestas/mago/mago';
import { CreadorComponent } from './respuestas/creador/creador';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component'
import { InteractionService } from './stepper/interaction.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepperComponent,
    LandingComponent,
    ResultadoComponent,
    CuidadorComponent,
    RegenteComponent, 
    MagoComponent, 
    CreadorComponent,
    FooterComponent,
    FormularioComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatStepperModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ChartsModule,
    

  ],
  entryComponents: [ 
    CuidadorComponent,
    RegenteComponent, 
    MagoComponent, 
    CreadorComponent 
  ],
  providers: [
    InteractionService,
    FormularioComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
