import { Component, OnInit } from '@angular/core';
declare var jquery: any; declare var $: any;
@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
  title = 'This is Main Detail';
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });
  }
  SelectParts(event) {
    console.log('select parts ', event);
  }
}
