import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CandidatesComponent } from './candidates.component';
import { CandidateTileComponent } from './candidate-tile/candidate-tile.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {ChatDialogComponent} from './chat-dialog/chat-dialog.component';
import {ChatService} from './chat-dialog/chat.service';

@NgModule({
  declarations: [
    CandidatesComponent,
    CandidateTileComponent,
    DetailedViewComponent,
    ChatDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers:[ChatService],
  entryComponents: [DetailedViewComponent]
})
export class CandidatesModule { }
