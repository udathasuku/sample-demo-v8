import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailsViewComponent } from '../details-view/details-view.component';

@Component({
  selector: 'grid-new',
  templateUrl: './grid-new.component.html',
  styleUrls: ['./grid-new.component.css']
})
export class GridNewComponent implements OnInit {

  cols: any[];
  rowData: any[];
  @ViewChild('detailsView', {static: false}) detailsView:DetailsViewComponent;


  constructor() { }

  ngOnInit() {

    this.cols = [
      { headerName: 'Name', field: 'name', width: 175 },
      { headerName: 'School', field: 'school', width: 170 },
      { headerName: 'Major', field: 'major', width: 100 },
      { headerName: 'Minor', field: 'minor', width: 100 },
      { headerName: 'Abroad Country', field: 'abroadCountry', width: 150 },
      { headerName: 'Matching Score', field: 'matchingScore', width: 150 },
      { headerName: 'Details', field: 'details', width: 150 }]

    this.rowData = [
      { name: 'Traveller 1', school: 'XYZ school', major: 'Math', minor: 'Science', abroadCountry: 'Sweden', languageProficiency: 'English', departureDate: 'Mar 1 2020', arrivalDate: 'Mar 20 2020', homeState: 'CA', matched: true, matchingScore: 30 },
      { name: 'Traveller 2', school: 'ABC school', major: 'Math', minor: 'Science', abroadCountry: 'Sweden', languageProficiency: 'English', departureDate: 'Mar 1 2020', arrivalDate: 'Mar 20 2020', homeState: 'CA', matched: true, matchingScore: 20 },
      { name: 'Traveller 3', school: 'ABC school', major: 'Math', minor: 'Science', abroadCountry: 'Sweden', languageProficiency: 'English', departureDate: 'Mar 1 2020', arrivalDate: 'Mar 20 2020', homeState: 'CA', matched: false, matchingScore: 0 },
      { name: 'Traveller 4', school: 'ABC school', major: 'Math', minor: 'Science', abroadCountry: 'Sweden', languageProficiency: 'English', departureDate: 'Mar 1 2020', arrivalDate: 'Mar 20 2020', homeState: 'CA', matched: false, matchingScore: 0 },
      { name: 'Traveller 5', school: 'ABC school', major: 'Math', minor: 'Science', abroadCountry: 'Sweden', languageProficiency: 'English', departureDate: 'Mar 1 2020', arrivalDate: 'Mar 20 2020', homeState: 'CA', matched: false, matchingScore: 0 }
    ];

  }

  onView(data) {
    console.log(data);
    this.detailsView.openDialog(data);
  }

}