import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTileComponent } from './candidate-tile.component';

describe('CandidateTileComponent', () => {
  let component: CandidateTileComponent;
  let fixture: ComponentFixture<CandidateTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
