import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', '../../styles.css'],
    animations: [
    ]
})

export class HeaderComponent {  
    onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }

 


      
} 

