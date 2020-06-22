import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Router } from  '@angular/router';
import { InteractionService } from "../stepper/interaction.service"


@Component ({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css', '../../styles.css'],
})

export class FormularioComponent implements OnDestroy {

    constructor(private _interactionService: InteractionService, private router: Router) {}

    verResultados(event) {
        this.router.navigate(['/', 'respuestas'])
    }

    nombre: string = ''

    setValue(){
        console.log(this.nombre)
    }
    
    
    ngOnDestroy() {
        this.nombre = this.nombre
        console.log(this.nombre)
        localStorage.setItem('myName', this.nombre);
        
      }
    
  

} 