import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare function getSex(): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'allatmenhely';
}
