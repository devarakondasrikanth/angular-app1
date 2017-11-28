import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: any = false;
  serverCreationStatus: any = 'No server was created....!';
  serverName: any = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

    onCreateServer() {
      this.serverCreationStatus = 'Server was created...!Name is '+this.serverName;
    }

  onUpdateServer(event: any) {
    this.serverName = event.target.value;
    console.log(this.serverName);
  }
}
