import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore, StoreModule } from '@ngrx/store';
import { rootReducer } from './app/state/root.reducer';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			StoreModule.forRoot(rootReducer, {}),
			StoreDevtoolsModule.instrument({
				name: 'PRES',
				logOnly: false,
				autoPause: true,
			}),
			HttpClientModule
		),
		provideAnimations(),
		provideStore(),
		provideStoreDevtools({
			maxAge: 25,
			logOnly: !isDevMode(),
		}),
	],
});
