import { LitElement, css, html, customElement } from 'lit-element';
import { flexHostStyles, globalStyles } from '../globalStyles';
import './navbar.component';
import './controlbar.component';

@customElement('ori-discover')
export class DiscoverPage extends LitElement {
	render() {
		return html`<div class="discover ori-flex">
			<ori-navbar></ori-navbar>
			<h3>WOW</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
				quisquam sapiente, aperiam quibusdam veritatis eveniet expedita
				perspiciatis similique illo possimus aliquam beatae sed iure ipsum
				voluptates impedit deleniti harum accusamus? Quisquam consectetur minus
				maiores accusamus neque. Ad assumenda laborum consequatur officia
				architecto fuga. Fugiat ipsum ipsam hic, blanditiis magni laborum!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
				quisquam sapiente, aperiam quibusdam veritatis eveniet expedita
				perspiciatis similique illo possimus aliquam beatae sed iure ipsum
				voluptates impedit deleniti harum accusamus? Quisquam consectetur minus
				maiores accusamus neque. Ad assumenda laborum consequatur officia
				architecto fuga. Fugiat ipsum ipsam hic, blanditiis magni laborum!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
				quisquam sapiente, aperiam quibusdam veritatis eveniet expedita
				perspiciatis similique illo possimus aliquam beatae sed iure ipsum
				voluptates impedit deleniti harum accusamus? Quisquam consectetur minus
				maiores accusamus neque. Ad assumenda laborum consequatur officia
				architecto fuga. Fugiat ipsum ipsam hic, blanditiis magni laborum!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
				quisquam sapiente, aperiam quibusdam veritatis eveniet expedita
				perspiciatis similique illo possimus aliquam beatae sed iure ipsum
				voluptates impedit deleniti harum accusamus? Quisquam consectetur minus
				maiores accusamus neque. Ad assumenda laborum consequatur officia
				architecto fuga. Fugiat ipsum ipsam hic, blanditiis magni laborum!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
				quisquam sapiente, aperiam quibusdam veritatis eveniet expedita
				perspiciatis similique illo possimus aliquam beatae sed iure ipsum
				voluptates impedit deleniti harum accusamus? Quisquam consectetur minus
				maiores accusamus neque. Ad assumenda laborum consequatur officia
				architecto fuga. Fugiat ipsum ipsam hic, blanditiis magni laborum!
			</p>
			<div class="fill"></div>
			<ori-controlbar></ori-controlbar>
		</div>`;
	}

	static get styles() {
		return [globalStyles, flexHostStyles, css``];
	}
}
