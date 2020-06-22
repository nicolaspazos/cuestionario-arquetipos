import  { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InteractionService {


    public invokeEvent:Subject<any> = new Subject();


    private messageSource = new BehaviorSubject([]);
    currentMessage = this.messageSource.asObservable();

    private messageSombraSource = new BehaviorSubject([]);
    currentSombraMessage = this.messageSombraSource.asObservable();



    constructor(){}

    changeMessage(message) {
        this.messageSource.next(message)
    }

    changeMessageSombra(messageSombra) {
        this.messageSombraSource.next(messageSombra)
    }


}