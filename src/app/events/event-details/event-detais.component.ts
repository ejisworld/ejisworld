import { Component } from '@angular/core'
import{ EventService } from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'
@Component({
templateUrl: '/event-details.component.html',
styles:[`
.container{
padding-left: 200px;
padding-right: 200px;
}
.event-image{
height: 1000px;
}
`]

})


export class EventDetailsComponent {
event: any
    constructor(private eventService:EventService, private route:ActivatedRoute){

    }
    ngOnInt(){
        this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}