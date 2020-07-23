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
import * as jsPDF from 'jspdf'



@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.html',
    styleUrls: ['./resultado.scss', '../../styles.css']
})


export class ResultadoComponent implements OnInit {

    // onExportClick(){
    //     const options =  {
    //         filename: "resultados.pdf",
    //         image: { type: 'jpeg'},
    //         html2canvas: { scale: 2},
    //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //     }
    //     const content = document.getElementById('element-to-export');
    //     html2pdf().from(content).set(options).save(); 
    // }   
    
    onExportClick(){
        var element = document.getElementById('element-to-export');
        var opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
        };
        
        html2pdf().from(element).set(opt).save();
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

    resultadoArquetipos0: any = localStorage.getItem("resultadoArquetipos0");
    resultadoArquetipos1: any = localStorage.getItem("resultadoArquetipos1");
    resultadoArquetipos2: any = localStorage.getItem("resultadoArquetipos2");
    resultadoArquetipos3: any = localStorage.getItem("resultadoArquetipos3");

    reemplazar0(){
        if(this.resultadoArquetipos0.includes("Regente") ){
        this.resultadoArquetipos0 = RegenteComponent
        }
        else if(this.resultadoArquetipos0.includes("Mago")){
            this.resultadoArquetipos0 = MagoComponent
        }
        else if(this.resultadoArquetipos0.includes("Cuidador")){
            this.resultadoArquetipos0 = CuidadorComponent
        }
        else {
            this.resultadoArquetipos0 = CreadorComponent
        };
    }

    reemplazar1(){
        if(this.resultadoArquetipos1.includes("Regente") ){
        this.resultadoArquetipos1 = RegenteComponent
        }
        else if(this.resultadoArquetipos1.includes("Mago")){
            this.resultadoArquetipos1 = MagoComponent
        }
        else if(this.resultadoArquetipos1.includes("Cuidador")){
            this.resultadoArquetipos1 = CuidadorComponent
        }
        else {
            this.resultadoArquetipos1 = CreadorComponent
        };
    }

    reemplazar2(){
        if(this.resultadoArquetipos2.includes("Regente") ){
        this.resultadoArquetipos2 = RegenteComponent
        }
        else if(this.resultadoArquetipos2.includes("Mago")){
            this.resultadoArquetipos2 = MagoComponent
        }
        else if(this.resultadoArquetipos2.includes("Cuidador")){
            this.resultadoArquetipos2 = CuidadorComponent
        }
        else {
            this.resultadoArquetipos2 = CreadorComponent
        };
    }

    reemplazar3(){
        if(this.resultadoArquetipos3.includes("Regente") ){
        this.resultadoArquetipos3 = RegenteComponent
        }
        else if(this.resultadoArquetipos3.includes("Mago")){
            this.resultadoArquetipos3 = MagoComponent
        }
        else if(this.resultadoArquetipos3.includes("Cuidador")){
            this.resultadoArquetipos3 = CuidadorComponent
        }
        else {
            this.resultadoArquetipos3 = CreadorComponent
        };
    }

    public ngOnInit() {

        

        var guardado = localStorage.getItem('resultadoGrafico');
        var grafico = JSON.parse(guardado);

        var sombraLocal = localStorage.getItem('resultadoSombra');
        var sombra = JSON.parse(sombraLocal);
        
        this.reemplazar0()
        this.reemplazar1()
        this.reemplazar2()
        this.reemplazar3()
        
        this.primerResultado = this.resultadoArquetipos0
        this.segundoResultado = this.resultadoArquetipos1
        this.tercerResultado = this.resultadoArquetipos2
        this.cuartoResultado = this.resultadoArquetipos3

     this._interactionService.currentMessage.subscribe(message => this.message = message)
     this._interactionService.currentSombraMessage.subscribe(messageSombra => this.messageSombra = messageSombra)


    this.demoradarChartData  = [
        {data: [ grafico[0], grafico[1], grafico[2], grafico[3]], label: 'Habilidades'},
        {data: [ sombra[0], sombra[1], sombra[2], sombra[3]], label: 'Sombras'}
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


