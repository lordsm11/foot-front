import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchsComponent } from './matchs/matchs.component';
import { FootRestService } from './service/foot-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    MatchsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'teams', pathMatch: 'full' },
      { path: 'teams', component: TeamsComponent },
      { path: 'matchs', component: MatchsComponent },
      { path: 'matchs/team/:team', component: MatchsComponent },
      { path: 'matchs/group/:group', component: MatchsComponent }
    ])
  ],
  providers: [FootRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
