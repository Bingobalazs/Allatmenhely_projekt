import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EgerkeComponent} from './egerke/egerke.component';
import {TablazatComponent} from './tablazat/tablazat.component';

declare function getSex(): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EgerkeComponent, TablazatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'allatmenhely';
}
