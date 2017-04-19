import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SERVICES } from './services';
import { API_SERVICES } from './api';
import { REST_SERVICES } from './rest';
import { GUARD_SERVICES } from './guards';

@NgModule({
  imports: [
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
