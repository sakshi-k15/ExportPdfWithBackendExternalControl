import 'zone.js';

import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app';

(async () => {
  const app = await createApplication(appConfig);

  const appElement = createCustomElement(AppComponent, { injector: app.injector });

  if (!customElements.get('exportpdf-widget')) {
    customElements.define('exportpdf-widget', appElement);
  }
})();
