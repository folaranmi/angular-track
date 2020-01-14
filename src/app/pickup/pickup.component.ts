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
    serverStatus: string = 'offline';
    servers = ["Server 1", "Server 2", "Server 3"];

    constructor() {

        setTimeout( () => {
            this.allowNewServer = false;
        },2000);

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    onCreateServer(){
        this.serverCreated = true;
        this.serverCreationstatus = "A Server have been created";
        this.servers.push(this.serverName);
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}