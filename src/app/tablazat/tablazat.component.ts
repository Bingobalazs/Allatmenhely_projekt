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
    this.http.get(`https://balgalazs.moriczcloud.hu/allat/delete/${id}`, {}).subscribe((response:any) => {


      alert('API response:'+ response.message);
      console.log('API response:', response.message);
    });

  }

  Edit() : void
  {

  }

  toggleEditMode(item: any) {
    item.editMode = !item.editMode;
  }

  //Ez kell neked
  saveChanges(allat: any) {

    this.http.get(`https://balgalazs.moriczcloud.hu/allat/modosit/${allat.id}/${allat.nev}/${allat.eletkor}/${allat.fajta}/${allat.szin}/${allat.nem}/${allat.oltas}/${allat.chipszam}/${allat.bekerulesideje}/${allat.kutyamacska}`, {}).subscribe((response:any) => {


      alert('API response:'+ response.message);
      console.log('API response:', response.message);
    });

    //
          console.log('Módosított adat:', allat.nev);
  }
  updateValue(item: any, event: Event) {
    item.nev = (event.target as HTMLInputElement).value;
  }
  updateField(item: any, field: string, event: Event) {
    item[field] = (event.target as HTMLInputElement).value;
  }

}
