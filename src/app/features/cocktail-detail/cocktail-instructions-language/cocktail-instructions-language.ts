import { Component, OnInit, output, signal } from '@angular/core';
import { Language } from '../../../data-access/interfaces';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-cocktail-instructions-language',
  imports: [SelectModule],
  templateUrl: './cocktail-instructions-language.html',
  styleUrl: './cocktail-instructions-language.scss'
})
export class CocktailInstructionsLanguage implements OnInit {
  public availableLanguagues = signal<Array<any>>([]);
  public languageSelected: string | undefined;
  public onLanguageSelected = output<string>();

  ngOnInit(): void {
    const languageLabels: Record<string, string> = {
      'EN': 'English',
      'ES': 'Español', 
      'DE': 'Deutsch',
      'FR': 'Français',
      'IT': 'Italiano',
      'ZH-HANS': '简体中文',
      'ZH-HANT': '繁體中文'
    };
    const languageToCountry: Record<string, string> = {
      'EN': 'us',  // o 'gb' para Reino Unido
      'ES': 'es',
      'DE': 'de', 
      'FR': 'fr',
      'IT': 'it',
      'ZH-HANS': 'cn',
      'ZH-HANT': 'tw'  // o 'hk' para Hong Kong
    };

    this.availableLanguagues.set(
      Object.values(Language).map(lang => ({
        label: languageLabels[lang] || lang,
        value: lang,
        code: languageToCountry[lang]
      }))
    );
    
    console.log(this.availableLanguagues())
  }

  onLanguagueSelected(event: any){
    this.onLanguageSelected.emit(event.value);
  }

}
