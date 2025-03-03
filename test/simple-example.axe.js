import '../src/simple-example.js';
import { expect, fixture, html } from '@brightspace-ui/testing';

describe('h5p-lit-simple-example', () => {

	it('passes aXe tests', async() => {
		const el = await fixture(html`<h5p-lit-simple-example message="A message!"></h5p-lit-simple-example>`);
		await expect(el).to.be.accessible();
	});

});
