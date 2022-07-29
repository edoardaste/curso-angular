import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { FirtsComponentComponent } from './components/firts-component/firts-component.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [  
  {path: '', component: FirtsComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'events', component: EventsComponent},
  {path: 'list/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
