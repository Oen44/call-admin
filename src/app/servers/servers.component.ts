import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

class Server {
  constructor(public id: number, public name: string, public type: string) { }
}

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  servers = Array<Server>();
  selected: Server = new Server(0, "test", "");

  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 25; i++) {
      this.servers.push(
        new Server(i, "Only DeDust2", "CS 1.6")
      );
    }
  }

  selectServer(server_Id: number) {
    this.selected = this.servers.find(s => s.id == server_Id);
    setTimeout(() => { this.deleteSwal.show() }, 50);
  }

  deleteServer() {
    console.log("Delete");
  }

}
