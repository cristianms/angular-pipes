import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ExemplosPipesComponent} from './components/exemplos-pipes/exemplos-pipes.component';
import {CamelCasePipe} from './pipes/camel-case.pipe';

import pt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {SettingsService} from './services/settings.service';
import { FiltroArrayPipe } from './pipes/filtro-array.pipe';
import {FormsModule} from '@angular/forms';
import { FiltroArrayImpuroPipe } from './pipes/filtro-array-impuro.pipe';
registerLocaleData(pt, 'pt-BR');

@NgModule({
    declarations: [
        AppComponent,
        ExemplosPipesComponent,
        CamelCasePipe,
        FiltroArrayPipe,
        FiltroArrayImpuroPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        /*
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        }
        */
        SettingsService,
        {
            provide: LOCALE_ID,
            deps: [SettingsService],
            useFactory: (settingsService) => settingsService.getLocale()
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
