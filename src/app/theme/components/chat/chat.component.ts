import { Component } from '@angular/core';
import { Settings, AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  public showChat:boolean = false;
  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    console.log('Width: ' + innerWidth);
    console.log('Height: ' + innerHeight);
  }

  public changeTheme(theme){
    this.settings.theme = theme;       
  } 
}
