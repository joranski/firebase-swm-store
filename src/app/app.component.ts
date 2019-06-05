import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Settings, AppSettings } from './app.settings';

/////////import { SwmService } from './swm.service';
/////////import { AngularFireList } from '@angular/fire/database';
/////////import { Observable } from 'rxjs';
/////////import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  /////////public nav: Observable<any[]>;
  /////////public navRef: AngularFireList<any>;

  public settings: Settings;
  constructor(public appSettings: AppSettings, public router: Router) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh  
    /////////this.navRef = this.swmService.getNav();
    /////////this.nav = this.navRef.snapshotChanges().pipe(
    /////////  map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    /////////);
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })
  }
}
