import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
  standalone: true,
  templateUrl: './egerke.component.html',
  styleUrl: './egerke.component.css',
  selector: 'app-egerke',


  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class EgerkeComponent {
  animalForm: FormGroup;
  selectedOltasok: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.animalForm = this.fb.group({
      nev: [''],
      eletkor: [''],
      fajta: [''],
      szin: [''],
      nem: [''],
      oltas1: [''],
      oltas2: [''],
      oltas3: [''],
      chipszam: [''],
      bekerulesideje: [''],
      kutyamacska: ['']
    });



  }


  onSubmit() {
    const formData = this.animalForm.value;

  console.log(this.selectedOltasok)
    if (formData.oltas1=="" && formData.oltas2=="" && formData.oltas3=="") this.selectedOltasok="Nincs,"
    if(formData.oltas1!="") this.selectedOltasok+="Aids,"
    if(formData.oltas2!="") this.selectedOltasok+="Skorbut,"
    if(formData.oltas3!="") this.selectedOltasok+="Szex,"

    this.selectedOltasok = this.selectedOltasok.substring(0, this.selectedOltasok.length - 1);
    // API endpoint összeállítása az űrlap adataival
    const apiUrl = `https://balgalazs.moriczcloud.hu/allat/beir/${formData.nev}/${formData.eletkor}/${formData.fajta}/${formData.szin}/${formData.nem}/${this.selectedOltasok}/${formData.chipszam}/${formData.bekerulesideje}/${formData.kutyamacska}`;
    this.selectedOltasok = "";
    // API hívás
    this.http.get(apiUrl, {}).subscribe((response:any) => {


      alert('API response:'+ response.message);
      console.log('API response:', response.message);
    });
  }
}
