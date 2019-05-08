import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'candidate-tile',
  templateUrl: './candidate-tile.component.html',
  styleUrls: ['./candidate-tile.component.scss']
})
export class CandidateTileComponent implements OnInit {

  @Input()
  candidate: any;

  constructor() { }

  ngOnInit() {
  }

}
