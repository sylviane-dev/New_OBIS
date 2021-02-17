import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-side-bar',
  templateUrl: './profil-side-bar.component.html',
  styleUrls: ['./profil-side-bar.component.css']
})
export class ProfilSideBarComponent implements OnInit {

  /*hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;*/

  constructor(/*calendar: NgbCalendar*/) { 
    /*this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 7);*/
  }
 
  ngOnInit(): void {
    //npm install @ng-bootstrap/ng-bootstrap
  }

  /*onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }*/


}
