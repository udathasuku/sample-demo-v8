import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  isVisible = false;
  data:any;

  constructor() { }

  ngOnInit() {
  }

  openDialog(data){
    this.data = data;
    this.isVisible = true;
  }

}