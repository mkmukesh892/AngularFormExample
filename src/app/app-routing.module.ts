import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailComponent} from './email/email.component';
import {ReactiveApproachComponent} from './reactive-approach/reactive-approach.component';
import { DecisionEngineComponent } from './decision-engine/decision-engine.component';

const routes: Routes = [
  {path: '', redirectTo: '/email', pathMatch: 'full'},
  {path: 'email', component: EmailComponent},
  {path: 'reactive-approach', component: ReactiveApproachComponent},
  {path: 'decision-engine', component: DecisionEngineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
