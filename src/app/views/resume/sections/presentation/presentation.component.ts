import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslatePipe } from '@ngx-translate/core';

import { HighlightPipe } from '@pipes/highlight.pipe';
import { LangService } from '@services/lang.service';

import { LanguageOption } from '@interfaces/lang.interfaces';
import { LangSelectorComponent } from '@app/core/components/lang-selector/lang-selector.component';

@Component({
  selector: 'presentation-section',
  standalone: true,
  imports: [
    CommonModule,
    HighlightPipe,
    TranslatePipe,
    FormsModule,
    LangSelectorComponent,
  ],
  templateUrl: './presentation.component.html',
  styles: ``,
})
export class PresentationComponent {
  showCV() {
    window.open('assets/docs/Hoja de Vida CV - Misael Gómez.pdf', '_blank');
  }
}
