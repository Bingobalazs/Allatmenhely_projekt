import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule, NgForOf} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-tablazat',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './tablazat.component.html',
  styleUrl: './tablazat.component.css'
})

export class TablazatComponent implements OnInit{
  allatok:any=[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://balgalazs.moriczcloud.hu/allat/mind')
      .subscribe({
        next: (tartalom: any) => {
          console.log(tartalom);
          this.allatok = tartalom;
        },
        error: (error) => {
          console.error('Hiba történt:', error);
        }
      });
  }
  deleteAnimal(id: number) : void {
    fetch(`https://balgalazs.moriczcloud.hu/allat/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Sikeres törlés után frissítjük a listát
          this.ngOnInit();
          console.log('Állat sikeresen törölve!');
        } else {
          console.error('Hiba történt a törlés során!');
        }
      })
      .catch(error => {
        console.error('Hiba történt:', error);
      });

  }

}
