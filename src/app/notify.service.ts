import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  getPNotify() {
    PNotifyButtons;
    PNotify.defaults.styling = 'bootstrap4';
    PNotify.defaults.icons = 'fontawesome5';
    return PNotify;
  }
}
