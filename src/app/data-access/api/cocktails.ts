import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  AlcoholicApiResponse,
  CategoryApiResponse,
  Cocktail,
  CocktailApiResponse,
  CocktailFilter,
  CocktailFilterAPIResponse,
  CocktailFiltersIdEnum,
  CocktailsSearchType,
  GlassApiResponse,
  IngredientApiResponse
} from '../interfaces';
import { catchError, map, Observable, throwError } from 'rxjs';
import { processCocktail, processCocktailByFilter } from '../mappers';
import { filter } from '../interfaces/filter.interface';
import { processFilter } from '../mappers/filter-mapper';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  private http = inject(HttpClient);

  public getCocktailsByLetterOrName(text: string): Observable<Cocktail[]> {
    const url = this.buildCocktailsByLetterOrNameUrl(text);

    return this.http
      .get<CocktailApiResponse>(
        url
      )
      .pipe(
        map((resp: CocktailApiResponse) => {
          const cocktails: Cocktail[] = resp.drinks
            ? resp.drinks.map(
              (drink) => processCocktail(drink)
            )
            : [];
          return cocktails;
        }),
        catchError(this.handleError)
    );
  }

  public getCocktailsByFilter(filter: CocktailFilter): Observable<Cocktail[]>{
    let url = '';
    switch(filter.id){
      case CocktailFiltersIdEnum.Glass: url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${filter.name}`;
                                        break;
      case CocktailFiltersIdEnum.Category: url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.name}`;
                                        break;
      case CocktailFiltersIdEnum.Ingredient: url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter.name}`;
                                        break;
      default: url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter.name}`;
                                        break;
    }
    return this.http
      .get<CocktailFilterAPIResponse>(
         url
      )
      .pipe(
        map((resp: CocktailFilterAPIResponse) => {
          const cocktails: Cocktail[] = resp.drinks
            ? resp.drinks.map(
              (drink) => processCocktailByFilter(drink)
            )
            : [];
          return cocktails;
        }),
        catchError(this.handleError)
    );
  }

  public getIngredientsFilterItems(): Observable<filter[]> {
    return this.http
      .get<IngredientApiResponse>(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
      )
      .pipe(
        map((resp: IngredientApiResponse) => {
          return processFilter(CocktailFiltersIdEnum.Ingredient, resp);
        }),
        catchError(this.handleError)
    );
  }

  public getAlcoholicFilterItems(): Observable<filter[]> {
    return this.http
      .get<AlcoholicApiResponse>(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
      )
      .pipe(
        map((resp: AlcoholicApiResponse) => {
          return processFilter(CocktailFiltersIdEnum.Alcoholic, resp);
        }),
        catchError(this.handleError)
    );
  }

  public getGlassesFilterItems(): Observable<filter[]> {
    return this.http
      .get<GlassApiResponse>(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
      )
      .pipe(
        map((resp: GlassApiResponse) => {
          return processFilter(CocktailFiltersIdEnum.Glass, resp);
        }),
        catchError(this.handleError)
    );
  }

  public getCategoriesFilterItems(): Observable<filter[]> {
    return this.http
      .get<CategoryApiResponse>(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      )
      .pipe(
        map((resp: CategoryApiResponse) => {
          return processFilter(CocktailFiltersIdEnum.Category, resp);
        }),
        catchError(this.handleError)
    );
  }

  public getRandomCocktail(): Observable<Cocktail> {
    return this.http
      .get<CocktailApiResponse>(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      )
      .pipe(
        map((resp: CocktailApiResponse) => {
          const cocktail: Cocktail = processCocktail(resp.drinks![0]);
          return cocktail;
        }),
        catchError(this.handleError)
    );
  }

  public getCocktailDetail(id: number): Observable<Cocktail>{
    return this.http
      .get<CocktailApiResponse>(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(
        map((resp: CocktailApiResponse) => {
          return processCocktail(resp.drinks![0]);
        }),
        catchError(this.handleError)
    );
  }

  private buildCocktailsByLetterOrNameUrl(text: string): string {
    const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
    const searchParam = text.length === 1 ? CocktailsSearchType.BY_FIRST_LETTER : CocktailsSearchType.BY_NAME;
    return `${BASE_URL}?${searchParam}=${encodeURIComponent(text)}`;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('An error occured:', error.error);
    } else {
      console.log(`Backend returned code ${error.status}, body:`, error.error);
    }

    const errorMessage = error.error ?? 'An error ocurred';

    return throwError(() => new Error(errorMessage));
  }


}
