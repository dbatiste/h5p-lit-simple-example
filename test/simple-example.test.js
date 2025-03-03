import '../src/simple-example.js';
import { expect, fixture, html, runConstructor } from '@brightspace-ui/testing';

const simpleFixture = html`
	<h5p-lit-simple-example message="A message!">
	</h5p-lit-simple-example>
`;

describe('h5p-lit-simple-example', () => {

	it('should construct', () => {
		runConstructor('h5p-lit-simple-example');
	});

	it('should have the correct message', async() => {
		const elem = await fixture(simpleFixture);
		expect(elem.message).to.equal('A message!');
	});

});
