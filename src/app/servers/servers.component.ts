 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector : '[app-servers]'
  //selector : '.app-servers'
  /* Pour le selecteur, on peut définir un attribut [app-servers] ou une classe .app-servers.
     Dans la vue, au lieu d'appeler <app-servers></app-servers>, on va appeler <div app-servers></div> ou <div class="app-servers"></div>
  */
  templateUrl: './servers.component.html',
  //On peut utiliser template : et balancer le html directement dedans, avec les back ticks pour du code sur +ieurs lignes
  styleUrls: ['./servers.component.css']
  //On peut utiliser styles : [` h3 { color : blue }`] et définir le style direct dans le component
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverName = 'testServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
  }

  ngOnInit() {
  }

  //le on au nommage montre que l'action vient du template, d'une interaction de l'utilisateur
  onCreateServer() {
    this.serverCreationStatus ='Server "'+ this.serverName +'" was created !';
    this.serverCreated = true;
  }

  //'event : Event' veut dire qu'on passe une variable event de type Event.
  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    // Ici on informe  typescript que l'élément event est un Input, donc value a bien un sens dans ce contexte
  }

}
