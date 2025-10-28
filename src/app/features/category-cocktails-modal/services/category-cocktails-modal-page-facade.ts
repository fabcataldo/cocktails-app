import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import { CocktailsFacade } from '../../../data-access/states/cocktails/cocktails.facade';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { Cocktail, CocktailFilter, CocktailFiltersIdEnum } from '../../../data-access/interfaces';
import { CategoryCocktailsModal } from '../category-cocktails-modal';
import { CocktailFacade } from '../../../data-access/states/cocktail/cocktail.facade';
import { Router } from '@angular/router';

@Injectable()
export class CategoryCocktailsModalPageFacade implements OnDestroy {
  private cocktailsFacade = inject(CocktailsFacade);
  private dialogService = inject(DialogService);
  private cocktailFacade = inject(CocktailFacade);
  public router = inject(Router);

  public cocktailsByFilter = signal<Cocktail[] | null>(null);
  public selectedCocktailsCategory = signal<boolean>(false);
  
  public currentCocktailsCategory = '';
  public categoryCocktailsModalRef: DynamicDialogRef | undefined = undefined;
  private subs = new Subscription();  

  ngOnDestroy(): void {
    if(this.categoryCocktailsModalRef){
      this.categoryCocktailsModalRef.destroy();
    }    
    this.subs.unsubscribe();
  }

  init() {
    this.cocktailsFacade.init();
    this.cocktailFacade.init();

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

    this.subs.add(
      this.cocktailsFacade.selectedCocktailsCategory$.subscribe(data => {
        if(data){
          this.selectedCocktailsCategory.set(true);
        } else {
          this.selectedCocktailsCategory.set(false);
        }
      })
    )
  }

  //TODO: quedó mejor... pero ahora, si abro el modal y veo el detalle
  //de un cocktail en la pág del listado, luego desde en la pag de detalle
  //abro el modal, veo el detalle de uno, y no cambia
  //y viceversa
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

    console.log('this.categoryCocktailsModalRef')
    console.log(this.categoryCocktailsModalRef)
    if(this.categoryCocktailsModalRef){
      this.subs.add(
        this.categoryCocktailsModalRef.onClose.subscribe(resp => {
          console.log('resp')
          console.log(resp)
          if(resp) {
            const realCocktailId = Number(resp);
            this.cocktailFacade.setCocktailId(realCocktailId);
            this.cocktailFacade.getCocktail(realCocktailId);
          }
        })
      );
    }
    
  }

  prepareCategoryCocktailsModal(category: string) {
    this.selectCocktailsCategory(category!);
    this.getCocktailsByFilter(
      {
        id: CocktailFiltersIdEnum.Category,
        name: category
      }
    );
  }
  
  private getCocktailsByFilter(filter: CocktailFilter){
    this.cocktailsFacade.getCocktailsByFilter(filter);
  }

  private selectCocktailsCategory(category: string){
    this.cocktailsFacade.selectCocktailsCategory(category); 
    
  }

}
