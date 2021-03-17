import {
	LitElement,
	html,
	customElement,
	PropertyValues,
	query,
	css,
} from 'lit-element';
import { RouterSlot, IRoute } from 'router-slot';
import { flexHostStyles, globalStyles } from './globalStyles';

const routes: Array<IRoute> = [];

@customElement('ori-app')
export default class AppElement extends LitElement {
	@query('router-slot') routerSlotRef!: RouterSlot;

	firstUpdated(props: PropertyValues) {
		super.firstUpdated(props);
		this.routerSlotRef.add(routes);
	}
	render() {
		return html`<div class="app ori-flex">
			<h1>I Work!</h1>
			<router-slot class="ori-flex"></router-slot>
		</div>`;
	}

	static get styles() {
		return [globalStyles, flexHostStyles, css``];
	}
}
