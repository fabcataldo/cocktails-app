import { Component, OnInit, output, signal } from '@angular/core';
import { Language } from '../../../data-access/interfaces';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktail-instructions-language',
  imports: [FormsModule, SelectModule],
  templateUrl: './cocktail-instructions-language.html',
  styleUrl: './cocktail-instructions-language.scss'
})
export class CocktailInstructionsLanguage implements OnInit {
  public availableLanguagues = signal<Array<any>>([]);
  public onLanguageSelected = output<string>();
  public languageSelected: string | null = null; 

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
      'EN': 'us',
      'ES': 'es',
      'DE': 'de', 
      'FR': 'fr',
      'IT': 'it',
      'ZH-HANS': 'cn',
      'ZH-HANT': 'tw'
    };

    this.availableLanguagues.set(
      Object.values(Language).map(lang => ({
        label: languageLabels[lang] || lang,
        value: lang,
        code: languageToCountry[lang]
      }))
    );

  }

  onLanguagueSelected(event: any){
    this.onLanguageSelected.emit(event.value);
  }

}
