import { Component, Input} from '@angular/core'
@Component({
    selector: 'event-thumbnail' ,
    template: `
   
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
    <div [style.color]="event.date === '9:00 am' ? '#003300' : '#bbb'" [ngSwitch]="event.date">date:{{event.date}}
    <span *ngSwitchCase="'9:00 am'">elearly to rise</span>
    <span *ngSwitchCase="'10:00 am'">late to bed</span>
    </div>
    <div>id:{{event.id}}</div>
    <div>image:{{event.imageUrl}}</div>
    <div *ngIf="event?.onlineUrl">onlineurl:{{onlineUrl}}

    <div>location:{{event.location.city}},{{event.location.country}}</div>
    
    
    </div>
    
    `,
    styles:[` 
    .see{color: #003300 !important;}
    .thumbnail{min-height: 210px;}
    .pad-left{margin-left:10px;}
    .well div{color:#bbb;}
     `]
})
export class EventThumbnailComponent{
 @Input() event: any
 
     
     
    
 
}