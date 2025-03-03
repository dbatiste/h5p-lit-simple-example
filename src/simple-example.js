import { css, html, LitElement, nothing } from 'lit';

const tagName = 'h5p-lit-simple-example';

class SimpleExample extends LitElement {

	static get properties() {
		return {
			/**
			 * ACCESSIBILITY: Alt text for the image. Decorative if not provided.
			 * @type {string}
			 */
			imageAlt: { type: String, attribute: 'image-alt' },
			/**
			 * Image source path
			 * @type {string}
			 */
			imageSrc: { type: String, attribute: 'image-src' },
			/**
			 * Additional message
			 * @type {string}
			 */
			message: { type: String }
		};
	}

	static get styles() {
		return css`
			:host {
				display: block;
			}
			img {
				display: block;
			}
			.message {
				font-size: 0.7rem;
			}
		`;
	}

	constructor() {
		super();
		this.imageAlt = '';
	}

	render() {
		return html`
			<img src="${this.imageSrc}" aria-hidden="true" alt="${this.imageAlt}">
			${this.message ? html`<div class="message">${this.message}</div>` : nothing}
		`;
	}

}

if (!customElements.get(tagName)) {
	customElements.define(tagName, SimpleExample);
}
