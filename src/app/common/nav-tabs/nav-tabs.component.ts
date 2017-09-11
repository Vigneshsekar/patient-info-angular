import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {

  constructor() { }
  tabOne = "Patients' directory"
  tabTwo = "Make an entry"
  tabThree = "App Info"

  ngOnInit() {
  }

}
