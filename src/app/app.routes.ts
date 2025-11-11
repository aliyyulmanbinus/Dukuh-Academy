import { Routes } from '@angular/router';
import { ClassOnlineComponent } from './template/class-online/class-online.component';
import { AdminComponent } from './template/admin/admin.component';

//Tempat ganti tampilan
export const routes: Routes = [
    {
        // https://facebook.com/segment_1/segment_2
        path: '',
        component: ClassOnlineComponent
    },
    {
        // https://facebook.com/segment_1/segment_2
        path: 'admin',
        component: AdminComponent
    }
];
