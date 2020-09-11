
import { Component,OnInit } from '@angular/core';
import { bindNodeCallback } from 'rxjs';
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'


declare let toastr
@Component({
 

  template: `
  <div>
    <h1>up coming event</h1>
    <hr />
    <div class="row">
      <div  *ngFor="let event of events"  class="col-md-4">
        
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>

  </div>
 
  `

})
export class EventsListComponent implements OnInit {
  events:any
  constructor(private eventService:EventService, private toastr:ToastrService){
    this.events=this.eventService.getEvents()

    }
    ngOnInit(){
      this.eventService.getEvents().subscribe(events=> {this.events=events})
    }
    handleThumbnailClick(eventName){
      this.toastr.sucess(eventName)
    }
  }


