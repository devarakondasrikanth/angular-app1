import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: any = 10;
  serverStatus: any  = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
