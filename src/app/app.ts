import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToggleSwitchModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isDarkModeSetted = signal<boolean>(false);
  iconClass = computed(() => 
    `!text-xs pi ${this.isDarkModeSetted() ? 'pi-moon' : ''}`
  );

  changeToDarkMode(event: any) {
    document.body.classList.toggle('dark-theme');
  }
}
