import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent} from './events/event-details/event-detais.component'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router'
import { CreatEventComponent } from './events/creat-event.component'
import {Error404Component} from './errors/404.component'







@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreatEventComponent,
    Error404Component
    
    
  ],
  providers: [
    EventService,
    ToastrService,
    
    
    {
      provide:'CanDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

 export function checkDirtyState(component:CreatEventComponent){
   if(component.isDirty)
   return window.confirm('ffjwfbwf')
   return true
 }


