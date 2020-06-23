import { Component, OnInit, ViewChild, ElementRef, OnDestroy,   } from '@angular/core';
import { InteractionService } from "../stepper/interaction.service";
import { CuidadorComponent } from "./cuidador/cuidador";
import { RegenteComponent } from "./regente/regente";
import { MagoComponent } from "./mago/mago";
import { CreadorComponent } from "./creador/creador";
import { FormularioComponent } from '../formulario/formulario.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as html2pdf from 'html2pdf.js'



@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.html',
    styleUrls: ['./resultado.css', '../../styles.css']
})


export class ResultadoComponent implements OnInit {

    onExportClick(){
        const options =  {
            filename: "our_file.pdf",
            image: { type: 'jpeg'},
            html2canvas: { scale: 2},
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
        }

        const content: Element = document.getElementById('element-to-export');

        html2pdf().from(content).set(options).save();
        
    }    

    message: Array<number>;
    messageSombra: Array<number>;
    nombre = localStorage.getItem('myName');
    public demoradarChartData: any;

    subscription: Subscription

    constructor (
        private _interactionService: InteractionService,
        private forComponent: FormularioComponent,
        private router: Router){}
    
    public resultadoRespuestas:  any =  [];
    public graficoFinal:  any =  [];
    
    renderFinal: any; 
    executed  = false;

    public primerResultado = '';
    public segundoResultado = '';
    public tercerResultado = '';
    public cuartoResultado = '';   

    public ngOnInit(): void {

        this._interactionService.invokeEvent.subscribe((value) => {
            this.resultadoRespuestas = value;
       });
     

       this.renderFinal = function render() {
        if(this.resultadoRespuestas == false){
            window.setTimeout(render, 4100);
        } else  {

            
            this.primerResultado = this.resultadoRespuestas[0];
        console.log(this.resultadoRespuestas[0])
         
   
           this.segundoResultado = this.resultadoRespuestas[1];
         console.log(this.resultadoRespuestas[1])
       
   
         this.tercerResultado = this.resultadoRespuestas[2];
         console.log(this.resultadoRespuestas[2])
   
         this.cuartoResultado = this.resultadoRespuestas[3];
       console.log(this.resultadoRespuestas[3])
        }
     }

     this._interactionService.currentMessage.subscribe(message => this.message = message)
     this._interactionService.currentSombraMessage.subscribe(messageSombra => this.messageSombra = messageSombra)

        
        
        this.demoradarChartData  = [
            {data: [this.message[0], this.message[1], this.message[2], this.message[3]], label: 'Habilidades'},
            {data: [ this.messageSombra[0], this.messageSombra[1], this.messageSombra[2], this.messageSombra[3]], label: 'Sombras'}
        ];
    
    }

    check (item){
    if(item && item.length  > 0 && this.executed == false){
        
        this.renderFinal();
        console.log('skrt')
        this.executed = true
        }
    }

    public demoradarChartLabels:string[] = [ 'Creador', 'Cuidador', 'Mago', 'Regente'];

    public radarChartType:string = 'radar';

    public chartColors: Array<any> = [
        { // first color
          backgroundColor: 'rgba(255, 255, 255, 0.277)',
          borderColor: '#EE7516',
          pointBackgroundColor: '#EE7516',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#EE7516'
        },
        { // second color
          backgroundColor: 'rgba(255, 255, 255, 0.877)',
          borderColor: '#70BED3',
          pointBackgroundColor: '#70BED3',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#70BED3'
        }];
       
        
}


