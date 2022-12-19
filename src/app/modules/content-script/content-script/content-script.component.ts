import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-script',
  templateUrl: './content-script.component.html',
  styleUrls: ['./content-script.component.scss']
})
export class ContentScriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      console.log('Hello From Angular!!!');
    }, 500)
  }

}
