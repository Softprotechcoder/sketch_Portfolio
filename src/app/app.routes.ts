import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Commission } from './commission/commission';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: '' , 
        component : Home
    },
    {
        path : 'home',
        component: Home
    },
    {
        path : 'portfolio',
        component: Portfolio
    },
    {
        path : 'commission',
        component: Commission
    },
    {
        path : 'about',
        component : About
    }
];
