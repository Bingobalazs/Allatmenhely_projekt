import { Component } from '@angular/core';


@Component({
  selector: 'app-tablazat',
  standalone: true,
  imports: [ApiModule],
  templateUrl: './tablazat.component.html',
  styleUrl: './tablazat.component.css'
})
export class TablazatComponent {
 allatok: any[]=[]; // Tárolja az API-tól kapott adatokat
 
 export class DataService {
  private apiUrl = 'https://balgalazs.moriczcloud.hu/allat/mind'; // Az API URL-je

 constructor(private dataService: TablazatComponent) { }

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

}
