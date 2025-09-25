import { Component, inject, model, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CocktailDetailPageFacade } from './services/cocktail-detail-page-facade';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Instructions, Language } from '../../data-access/interfaces';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cocktail-detail',
  imports: [TableModule, ButtonModule, CommonModule],
  templateUrl: './cocktail-detail.html',
  styleUrl: './cocktail-detail.scss',
  providers: [CocktailDetailPageFacade]
})
export class CocktailDetail implements OnInit {
  private route = inject(ActivatedRoute);
  public pageFacade = inject(CocktailDetailPageFacade);
  private readonly destroyRef = takeUntilDestroyed();
  public languague = model(false);

  public availableLanguagues = Language;

  ngOnInit(): void {   
    this.pageFacade.init();
    this.route.params
      .pipe(this.destroyRef)
      .subscribe({
        next: (params:any) => {
          const realId = Number(params['id']);
          this.pageFacade.setCocktailId(realId);
          this.pageFacade.getCocktail(realId);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  onLanguagueChange(language: string) {
    this.pageFacade.changePageLanguague(language);
  }

}
