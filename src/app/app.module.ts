import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ExemplosPipesComponent} from './components/exemplos-pipes/exemplos-pipes.component';
import {CamelCasePipe} from './pipes/camel-case.pipe';

import pt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {SettingsService} from './services/settings.service';
registerLocaleData(pt, 'pt-BR');

@NgModule({
    declarations: [
        AppComponent,
        ExemplosPipesComponent,
        CamelCasePipe
    ],
    imports: [
        BrowserModule
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
