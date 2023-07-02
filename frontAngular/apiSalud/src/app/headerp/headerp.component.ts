import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headerp',
  templateUrl: './headerp.component.html',
  styleUrls: ['./headerp.component.css']
})
export class HeaderpComponent {
  @Input() mostrar: boolean = false;
}
