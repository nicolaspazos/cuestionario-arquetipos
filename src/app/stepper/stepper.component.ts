import { Component, NgModule, Injectable, OnInit, EventEmitter,  Output, ɵCodegenComponentFactoryResolver, OnDestroy } from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { InteractionService } from './interaction.service'
import { CuidadorComponent } from "../respuestas/cuidador/cuidador";
import { RegenteComponent } from "../respuestas/regente/regente";
import { MagoComponent } from "../respuestas/mago/mago";
import { CreadorComponent } from "../respuestas/creador/creador";

import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss', '../../styles.css'],
    providers: [{provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }}]})

@Injectable()
export class StepperComponent implements OnInit, OnDestroy {

    
    regente: any = 0;
    mago: any = 0;
    cuidador: any = 0;
    creador: any = 0;

    regenteSombra = 0;
    magoSombra  = 0;
    cuidadorSombra =  0;
    creadorSombra = 0;

    message: Array<number>;
    resultadoGrafico: any;
    resultadoSombra: any;
    resultadoArquetipos: any;

    constructor(private _interactionService: InteractionService, private router: Router) {}
  

    Reg1(){
        if(this.regente <= 38){
            this.regente = this.regente + 2;
        }
    }
    Reg2(){
        if(this.regente <= 36){
            this.regente = this.regente + 4;
        }
    }
    RegSombra1(){
        if(this.regenteSombra <= 6){
            this.regenteSombra = this.regenteSombra + 2;
        }
    }
    RegSombra2(){
        if(this.regenteSombra <= 4){
            this.regenteSombra = this.regenteSombra + 4;
        }
    }

    Mag1(){
        if(this.mago <= 38){
            this.mago = this.mago + 2;
        }
    }
    Mag2(){
        if(this.mago <= 36){
            this.mago = this.mago + 4;
        }
    }
    MagSombra1(){
        if(this.magoSombra <= 6){
            this.magoSombra = this.magoSombra + 2;
        }
    }
    MagSombra2(){
        if(this.magoSombra <= 4){
            this.magoSombra = this.magoSombra + 4;
        }
    }

    Cui1(){
        if(this.cuidador <= 38){
            this.cuidador = this.cuidador + 2;
        }
    }
    Cui2(){
        if(this.cuidador <= 36){
            this.cuidador = this.cuidador + 4;
        }
    }
    CuiSombra1(){
        if(this.cuidadorSombra <= 6){
            this.cuidadorSombra = this.cuidadorSombra + 2;
        }
    }
    CuiSombra2(){
        if(this.cuidadorSombra <= 4){
            this.cuidadorSombra = this.cuidadorSombra + 4;
        }
    }

    Cre1(){
        if(this.creador <= 38){
            this.creador = this.creador + 2;
        }
    }
    Cre2(){
        if(this.creador <= 36){
            this.creador = this.creador + 4;
        }
    }
    CreSombra1(){
        if(this.creadorSombra <= 6){
            this.creadorSombra = this.creadorSombra + 2;
        }
    }
    CreSombra2(){
        if(this.creadorSombra <= 4){
            this.creadorSombra = this.creadorSombra + 4;
        }
    }

     

    terminarTest(event) {

        this.resultadoGrafico = [this.creador, this.cuidador, this.mago, this.regente ];
        this.resultadoSombra  =  [this.creadorSombra, this.cuidadorSombra, this.magoSombra, this.regenteSombra]

        this.resultadoArquetipos = [this.mago, this.regente, this.cuidador, this.creador ];
        this.resultadoArquetipos.sort( function(a,b) { return b - a; } );

        console.log(this.resultadoArquetipos)

        

        var indexMago = this.resultadoArquetipos.indexOf(this.mago);
        if (~indexMago) {
            this.resultadoArquetipos[indexMago] = 'MagoComponent';
        }

        var indexRegente = this.resultadoArquetipos.indexOf(this.regente);
        if (~indexRegente) {
            this.resultadoArquetipos[indexRegente] = 'RegenteComponent';
        }

        var indexCuidador = this.resultadoArquetipos.indexOf(this.cuidador);
        if (~indexCuidador) {
            this.resultadoArquetipos[indexCuidador] = 'CuidadorComponent';
        }

        var indexCreador = this.resultadoArquetipos.indexOf(this.creador);
        if (~indexCreador) {
            this.resultadoArquetipos[indexCreador] = 'CreadorComponent';
        }

        this.router.navigate(['/', 'formulario'])

     

        setInterval(()=>{
            this.resultadoArquetipos.push(this.resultadoArquetipos);
            this._interactionService.invokeEvent.next(this.resultadoArquetipos);
        }, 5000);


        this._interactionService.changeMessage(this.resultadoGrafico);
        this._interactionService.changeMessageSombra(this.resultadoSombra);
        
    }

    

    ngOnInit(){
        this._interactionService.currentMessage.subscribe(message => this.message = message)
    }

    ngOnDestroy() {
        localStorage.setItem('regente', this.regente);
        localStorage.setItem('creador', this.creador);
        localStorage.setItem('cuidador', this.cuidador);
        localStorage.setItem('mago', this.mago);
        localStorage.setItem('resultadoGrafico', JSON.stringify(this.resultadoGrafico));
        localStorage.setItem('resultadoSombra', JSON.stringify(this.resultadoSombra));
        localStorage.setItem('resultadoArquetipos0', JSON.stringify(this.resultadoArquetipos[0]));
        localStorage.setItem('resultadoArquetipos1', JSON.stringify(this.resultadoArquetipos[1]));
        localStorage.setItem('resultadoArquetipos2', JSON.stringify(this.resultadoArquetipos[2]));
        localStorage.setItem('resultadoArquetipos3', JSON.stringify(this.resultadoArquetipos[3]));
      }

    
    // @Output() resultadoArquetipos = []
}



