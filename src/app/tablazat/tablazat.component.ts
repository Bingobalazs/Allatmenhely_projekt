import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tablazat',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './tablazat.component.html',
  styleUrl: './tablazat.component.css'
})
export class TablazatComponent implements OnInit{
  allatok:any=[];
  ngOnInit():void {
    fetch("https://balgalazs.moriczcloud.hu/allat/mind")
      .then((res) => res.json())
      .then((tartalom) => {
        this.allatok=tartalom;
      })
  }
  deleteAnimal(id: number) {
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
