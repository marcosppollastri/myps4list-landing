import { Component, OnInit } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  faGamepad;
  constructor() { }

  ngOnInit() {
    this.faGamepad = faGamepad;
  }

}
