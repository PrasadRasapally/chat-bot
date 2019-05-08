import { Component, OnInit, ViewRef, ViewChild, ElementRef } from '@angular/core';
import Candidates from '../../assets/candidates.json';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {DetailedViewComponent} from './detailed-view/detailed-view.component';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  bsModalRef: BsModalRef;
  candidatesList:any;
  totalCandidatesList: any;
  stepper: number = 6;
  isSearchViewOpened: boolean = false;

  industry: any = "Retail";
  location: any;
  role: any = "Driver";
  availability: any = "< 2 Weeks";
  potential_tc: any = "High";
  
  @ViewChild('candidatesTilesWrapper') candidatesTilesWrapper: ElementRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.candidatesList = Candidates.slice(0, this.stepper);
    this.totalCandidatesList = Candidates;
  }

  getMoreCandidates(){
    this.stepper += 6;
    this.candidatesList = Candidates.slice(0, this.stepper);
    //this.candidatesTilesWrapper.nativeElement.scrollTop(1000);
  }

  sendMail(){
    console.log('mail logic goes here');
  }

  toggleView(flag){
    this.isSearchViewOpened = flag;
  }

  searchcandidates(){
    console.log(this.industry  +" "+ this.location+" "+ this.role+" "+ this.availability+" "+ this.potential_tc);
    let length = this.candidatesList.length;
    this.candidatesList = this.totalCandidatesList.filter(candidate =>
    (this.industry ? candidate.previously_worked_with.indexOf(this.industry) !== -1 : true) &&
    (this.location ? this.location.toLowerCase() === candidate.city.toLowerCase() : true)&&
    (this.role ? this.role === candidate.position : true)&&
    (this.availability ? this.availability === candidate.availability : true)&&
    (this.potential_tc ? this.potential_tc === candidate.tax_credit_status : true));
  }

  selectCandidate(event, candidate){
    console.log(event.target.checked);
    console.log(candidate);
    event.stopPropagation();
  }

  opendetailedView(candidate){
   /* console.log(candidate)
    const candidateData = {
      name: candidate.name,
      previously_worked_with: candidate.previously_worked_with,
      tax_credit_status: candidate.tax_credit_status,
      availability: candidate.availability,
      position: candidate.position,
      city: candidate.city
    }*/
    this.bsModalRef = this.modalService.show(DetailedViewComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = 'Candidate Details';
  }
}
