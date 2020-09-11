import{ Component } from '@angular/core'

import { Router } from '@angular/router'

@Component({
   
    template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-5">
       <h3>Creat new event form here</h3>
       <br>
       <br>
       <button type="submit" class="bnt bnt-primary">Submit</button>
       <button type="button" class="bnt bnt-primary" (click)="cancel()">cancel</button>
    </div>
    `
})

export class CreatEventComponent{

    isDirty:boolean = true
    constructor(private router:Router){
      

    }
    cancel(){
        this.router.navigate(['/events'])
}
}
