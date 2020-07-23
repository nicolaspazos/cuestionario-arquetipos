import { Component, Input, OnInit, OnDestroy, Inject, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Router, RouterModule, Routes } from  '@angular/router';
import { InteractionService } from "../stepper/interaction.service"
import { DOCUMENT } from  '@angular/common'
import * as $ from 'jquery' 

@Component ({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css', '../../styles.css'],
})

export class FormularioComponent implements OnDestroy, OnInit  {
    constructor(
        private _interactionService: InteractionService, public router: Router
        ) {}

    verResultados(event) {
        this.router.navigate(['/', 'respuestas'])
    }
    
    nombre: string = ''

    setValue(){
        console.log(this.nombre)
    };

 ngOnInit(){
    var load = 0;
        
    document.getElementById('gform').onload = function(){
        /*Execute on every reload on iFrame*/
        console.log('heheheheh')
        load++;
        if(load > 1) {
            /*Second reload is a submit*/
            console.log('lelelelele');
            window.location.replace("http://localhost:4200/respuestas");
        }
    }
 }


    ngOnDestroy() {
        this.nombre = this.nombre
        console.log(this.nombre)
        localStorage.setItem('myName', this.nombre);
        
      }
    
  

} 