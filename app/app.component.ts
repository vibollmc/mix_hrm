import { Component, enableProdMode}       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

enableProdMode();

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
	  ROUTER_PROVIDERS,
	  HeroService
	]
})

@RouteConfig([
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	}
])

export class AppComponent {
	title = 'Tour of Heroes';
}