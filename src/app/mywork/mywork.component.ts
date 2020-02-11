import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {
  result: any;

  work = "";
  
  constructor() { }

  ngOnInit() {
    $('.customDate').datepicker({
      language: 'en',
      dateFormat: 'd M, yyyy',
      autoClose: 'true'
    });

  }

  onKeyPress(email){
    console.log(email);
  }

}
