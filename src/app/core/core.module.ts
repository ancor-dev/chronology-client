import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

import { SERVICES } from './services';
import { API_SERVICES } from './api';
import { REST_SERVICES } from './rest';
import { GUARD_SERVICES } from './guards';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ Http ],
      }
    }),
  ],
  exports: [
  ],
  providers: [
    ...SERVICES,
    ...REST_SERVICES,
    ...API_SERVICES,
    ...GUARD_SERVICES,
  ],
})
export class CoreModule {

  public constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
