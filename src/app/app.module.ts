import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlaygroundComponent } from './playground/playground.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { RouterModule, type Routes } from '@angular/router';

// FCC-ee
import { CldComponent } from './detectors/fccee-cld/cld.component';
import { IdeaComponent } from './detectors/fccee-idea/idea.component';
import { AllegroComponent } from './detectors/fccee-allegro/allegro.component';
// FCC-hh
import { FcchhBaselineComponent } from './detectors/fcchh-baseline/fcchh-baseline.component';
// Custom detector geometries
import { CustomAllegroComponent } from './detectors/custom-fccee-allegro/custom-allegro.component';
import { CustomCldComponent } from './detectors/custom-fccee-cld/custom-cld.component';
import { CustomIdeaComponent } from './detectors/custom-fccee-idea/custom-idea.component';
import { CustomFcchhBaselineComponent } from './detectors/custom-fcchh-baseline/custom-fcchh-baseline.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'fccee-cld/:option-version', component: CldComponent },
  { path: 'fccee-idea/:option-version', component: IdeaComponent },
  { path: 'fccee-allegro/:option-version', component: AllegroComponent },
  { path: 'fcchh-baseline', component: FcchhBaselineComponent },
  { path: 'custom/fccee-allegro', component: CustomAllegroComponent },
  { path: 'custom/fccee-cld', component: CustomCldComponent },
  { path: 'custom/fccee-idea', component: CustomIdeaComponent },
  { path: 'custom/fcchh-baseline', component: CustomFcchhBaselineComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CldComponent,
    IdeaComponent,
    AllegroComponent,
    FcchhBaselineComponent,
    CustomAllegroComponent,
    CustomCldComponent,
    CustomIdeaComponent,
    CustomFcchhBaselineComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
