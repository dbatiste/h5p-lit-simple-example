import './simple-example.js';

class Adapter extends H5P.EventDispatcher {

	/**
	 * @constructor
	 *
	 * @param {object} params Parameters passed by the editor.
	 * @param {number} contentId Content's id.
	 * @param {object} [extras] Saved state, metadata, etc.
	 */
	constructor(params, contentId) {
		super();
		this.#contentId = contentId;
		this.#params = params;
	}

	/**
	 * Attach library to wrapper.
	 *
	 * @param {jQuery} $wrapper Content's container.
	 */
	attach($wrapper) {
		const wrapper = $wrapper[0];

		const elem = document.createElement('h5p-lit-simple-example');
		elem.imageSrc = H5P.getPath(this.#params.image.path, this.#contentId);
		elem.imageAlt = this.#params.imageAlt;
		elem.message = this.#params.message;
		wrapper.appendChild(elem);
	}

	#contentId;
	#params;

}

// Load library
window.H5P = window.H5P || {};
window.H5P.LitSimpleExample = Adapter;
