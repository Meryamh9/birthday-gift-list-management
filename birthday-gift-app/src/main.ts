import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environments.development';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
if (environment.production) {
  enableProdMode();
}


// Register the service worker
if ('serviceWorker' in navigator && environment.production) {
  navigator.serviceWorker.register('/ngsw-worker.js');
}