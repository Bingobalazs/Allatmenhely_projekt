import { Routes } from '@angular/router';
import { EgerkeComponent } from './egerke/egerke.component';
import { TablazatComponent } from './tablazat/tablazat.component';

export const routes: Routes = [
    {path: 'egerke', component: EgerkeComponent},
    {path: "tablazat", component: TablazatComponent}
];
