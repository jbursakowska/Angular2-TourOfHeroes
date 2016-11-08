import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();  //initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.
platform.bootstrapModule(AppModule);
