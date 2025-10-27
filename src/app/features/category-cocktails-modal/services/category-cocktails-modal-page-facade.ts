import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import { CocktailsFacade } from '../../../data-access/states/cocktails/cocktails.facade';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, Subscription } from 'rxjs';
import { Cocktail } from '../../../data-access/interfaces';
import { CategoryCocktailsModal } from '../category-cocktails-modal';

@Injectable()
export class CategoryCocktailsModalPageFacade implements OnDestroy {
  private cocktailsFacade = inject(CocktailsFacade);
  private dialogService = inject(DialogService);

  public currentCocktailsCategory = '';
  public categoryCocktailsModalRef: DynamicDialogRef | undefined = undefined;
  private subs = new Subscription();
  public cocktailsByFilter = signal<Cocktail[] | null>(null);
  public isModalRefSetted = new Subject<boolean>();

  ngOnDestroy(): void {
    if(this.categoryCocktailsModalRef){
      this.categoryCocktailsModalRef.destroy();
    }    
    this.subs.unsubscribe();
  }

  init() {
    this.cocktailsFacade.init();

    this.subs = this.cocktailsFacade.selectedCocktailsCategory$.subscribe(data => {
      if (data) {
        this.currentCocktailsCategory = data;
      }
    });

    this.subs.add(
      this.cocktailsFacade.cocktailsByFilter$!.subscribe(data => {
      if(data){
        this.cocktailsByFilter.set(data);

        if(data && data.length) {
          this.showCategoryCocktailsModal(
            this.currentCocktailsCategory,
            data
          );
        }
      }
    }));
  }

  private showCategoryCocktailsModal(
    category: string,
    extraData?: any
  ) {
    
    this.categoryCocktailsModalRef = this.dialogService.open(CategoryCocktailsModal, {
        header: `Cocktails of "${category}" Category`,
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
        closable: true,
        closeOnEscape: true,
        dismissableMask: true,
        data: extraData ?? {}
    })!;
    this.isModalRefSetted.next(true);
  }
}
