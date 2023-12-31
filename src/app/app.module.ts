import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {es_ES, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import es_CO from '@angular/common/locales/es';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {INITIAL_STATE, StoreModule} from '@ngrx/store';
import {TranslateModule} from '@ngx-translate/core';
import {TRANSLATE_CONFIG} from '@core/configs/translate.config';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {APP_REDUCERS} from '@state/app.reducer';
import {INITIAL_APP_STATE} from '@state/app.state';
import {APP_EFFECTS} from '@state/app.effect';
import {ProductService} from '@modules/product/services/product.service';
import {ProductFacade} from '@modules/product/facade/product.facade';

registerLocaleData(es_CO);

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(TRANSLATE_CONFIG),
    StoreModule.forRoot(APP_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot(APP_EFFECTS)
  ],
  providers: [
    ProductService,
    ProductFacade,
    { provide: NZ_I18N, useValue: es_ES },
    {
      provide: INITIAL_STATE,
      useValue: INITIAL_APP_STATE
    }
  ]
})
export class AppModule {}
