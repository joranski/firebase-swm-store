import { Component, OnInit} from '@angular/core';

// main includes
import { SwmService } from './../../../swm.service';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { Category } from './../../../app.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public nav: Observable<any[]>;
  public navRef: AngularFireList<any>;

  constructor(private swmService: SwmService) {}

  ngOnInit() { 
    this.navRef = this.swmService.getNav();
    this.nav = this.navRef.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  openMegaMenu(){
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el) {
        if(el.children.length > 0){
          if(el.children[0].classList.contains('mega-menu')){
            el.classList.add('mega-menu-pane');
          }
        }        
    });
  }

}
