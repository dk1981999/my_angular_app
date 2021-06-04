import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles:[`h3 {
    color: red;
  }`]
})
export class AppComponent {
  serverElement = [{type: 'example', name: 'server'}]
  serverName: string;
  onServerCreated(serverData: {serverName: string}){
  this.serverName = serverData.serverName;
  }
}
