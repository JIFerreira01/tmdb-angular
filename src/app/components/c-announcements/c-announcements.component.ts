import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-announcements',
  templateUrl: './c-announcements.component.html',
  styleUrls: ['./c-announcements.component.css']
})

export class CAnnouncementsComponent {

  @Input() receiveHowAnnouncementShow: string = '';

}
