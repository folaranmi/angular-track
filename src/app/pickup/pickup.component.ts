import { Component } from '@angular/core';

@Component({
    selector: 'app-pickup',
    templateUrl: './pickup.component.html',
    styleUrls: ['./pickup.component.css']
})

export class PickupComponent {

    name = "Just a time to the great stuff";
    allowNewServer = true;
    serverCreationstatus = "No server created";
    serverName = "Testserver";
    serverCreated = false;

    constructor() {

        setTimeout( () => {
            this.allowNewServer = false;
        },2000);
    }

    onCreateServer(){
        this.serverCreated = true;
        this.serverCreationstatus = "A Server have been created";
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}