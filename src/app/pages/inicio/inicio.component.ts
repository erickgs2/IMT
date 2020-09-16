import { Component, OnInit, Renderer2, OnDestroy  } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router  } from '@angular/router';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy  {

  data : Date = new Date();

  page = 4;
  page1 = 5;
  page2 = 3;
  focus;
  focus1;
  focus2;

  date: {year: number, month: number};
  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;

  constructor(private router: Router, private renderer : Renderer2, config: NgbAccordionConfig) {
      config.closeOthers = true;
      config.type = 'info';
  }
  isWeekend(date: NgbDateStruct) {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
  }

  goToContact(){
    this.router.navigate(['/contacto']);
  }

  ngOnInit() {
    window.scroll(0,0);
    var rellaxHeader = new Rellax('.rellax-header');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('index-page');
  }
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
  }

}
