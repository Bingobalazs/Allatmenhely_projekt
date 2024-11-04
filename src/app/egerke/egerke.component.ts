import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-egerke',
  standalone: true,
<<<<<<< Updated upstream
  imports: [CommonModule, FormsModule],
=======
  imports: [],
>>>>>>> Stashed changes
  templateUrl: './egerke.component.html',
  styleUrl: './egerke.component.css'
})
export class EgerkeComponent {
  formData = {
    nev: '',
    eletkor: null,
    fajta: '',
    szin: '',
    nem: '',
    oltas: {
      AIDS: false,
      Skorbut: false,
      Szex: false
    },
    chipszam: '',
    bekerulesideje: '',
    kutyamacska: ''
  };
<<<<<<< Updated upstream

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

=======
>>>>>>> Stashed changes
}
