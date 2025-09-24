import { Routes } from '@angular/router';
import { CocktailsList } from './features/cocktails-list/cocktails-list';
import { CocktailDetail } from './features/cocktail-detail/cocktail-detail';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
    { path: '', component: CocktailsList },
    { path: 'detail/:id', component: CocktailDetail},
    { path: 'not-found', component: NotFound },
    { path: '**', redirectTo: '/not-found' },
];
