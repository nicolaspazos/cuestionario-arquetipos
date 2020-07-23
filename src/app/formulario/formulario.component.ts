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

export class FormularioComponent implements  OnInit  {
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
            console.log('load es igual a ' + load)
            load++;
            if(load > 1) {
                /*Second reload is a submit*/
                // window.location.replace("");
                console.log('load es igual a ' + load)
                localStorage.setItem('load', JSON.stringify(load));
            }
        }
    
    
        this.kek()
    
     }
        public kek () {
            var loaded = parseInt(localStorage.getItem("load"));
            console.log(loaded)
            if (loaded > 1){
            this.router.navigate(['/', 'respuestas'])
            var load = 0 
            localStorage.setItem('load', JSON.stringify(load));
    
            }
            setTimeout(()=>{    
                this.kek();
           }, 3000);
        
        }

} 