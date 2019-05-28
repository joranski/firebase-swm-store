import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Settings, AppSettings } from './app.settings';
import { SwmService } from './swm.service';
import { tap, map } from 'rxjs/operators';

import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  nav: any;

  public settings: Settings;
  constructor(public appSettings: AppSettings, private swmService: SwmService, public router: Router) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh  
    this.nav = this.swmService.getNav().snapshotChanges().pipe(
    ).subscribe(data => {
      console.log(data);
      data.map(test => { console.log("Map: ", test.payload.key, test.payload.toJSON()); })
      
    });




  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })
  }
}
