import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablazat',
  standalone: true,
  imports: [],
  templateUrl: './tablazat.component.html',
  styleUrl: './tablazat.component.css'
})
export class TablazatComponent {

<<<<<<< Updated upstream
 allatok: any[]=[]; // Tárolja az API-tól kapott adatokat

 fetch('https://balgalazs.moriczcloud.hu/allat/mind')
      .then(response => response.json())
      .then(json => console.log(json))
 
 //port class DataService {
  //private apiUrl = 'https://balgalazs.moriczcloud.hu/allat/mind'; // Az API URL-je

  

  //constructor(private dataService: TablazatComponent) { }
  

 ngOnInit(): void {
   // Az API adatainak lekérése a komponens inicializálásakor
   this.dataService.getAllatok().subscribe(
     (data) => {
       this.allatok = data;
     },
     (error) => {
       console.error('Hiba az adatok lekérésekor:', error);
     }
   );
 }

  getAllatok(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
=======
>>>>>>> Stashed changes

}
