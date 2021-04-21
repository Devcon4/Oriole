import {
	LitElement,
	html,
	customElement,
	PropertyValues,
	query,
	css,
} from 'lit-element';
import { RouterSlot, IRoute, queryParentRouterSlot } from 'router-slot';
import { flexHostStyles, globalStyles } from './globalStyles';
import './components/controlbar.component';

const routes: Array<IRoute> = [
	{
		path: 'dashboard',
		component: async () =>
			(await import('./components/dashboard.page')).DashboardPage,
	},
	{
		path: 'discover',
		component: async () =>
			await (await import('./components/discover.page')).DiscoverPage,
	},
	{
		path: '**',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
];

@customElement('ori-app')
export class AppElement extends LitElement {
	@query('router-slot') $routerSlot!: RouterSlot;

	get data() {
		return queryParentRouterSlot(this);
	}

	firstUpdated(props: PropertyValues) {
		super.firstUpdated(props);
		this.$routerSlot.add(routes);
	}
	render() {
		return html`<div class="app ori-flex">
			<h1 class="text">I Work still!</h1>
			<router-slot class="ori-flex"></router-slot>
		</div>`;
	}
	static get styles() {
		return [globalStyles, flexHostStyles, css``];
	}
}
