import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';




@Component({
  selector: 'app-egerke',
  standalone: true,

  imports: [CommonModule, FormsModule],

  

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


  /*constructor(private http: HttpClient) {}

  submitForm() {
    const selectedOltas = Object.keys(this.formData.oltas).filter(key => this.formData.oltas[key]);
    const apiUrl = `https://balgalazs.moriczcloud.hu/allat/modosit/${this.formData.nev}/${this.formData.eletkor}/${this.formData.fajta}/${this.formData.szin}/${this.formData.nem}/${selectedOltas.join(',')}/${this.formData.chipszam}/${this.formData.bekerulesideje}/${this.formData.kutyamacska}`;


    this.http.post(apiUrl, {}).subscribe(response => {
      console.log('API válasz:', response);
    }, error => {
      console.error('Hiba történt az API hívás során:', error);
    });
  }*/

}
