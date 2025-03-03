import '../src/simple-example.js';
import { expect, fixture, html } from '@brightspace-ui/testing';

describe('h5p-lit-simple-example', () => {

	it('renders and image and a message', async() => {
		const elem = await fixture(html`
			<h5p-lit-simple-example 
				image-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDMwYzguMjg0IDAgMTUtNi43MTYgMTUtMTUgMC04LjI4NC02LjcxNi0xNS0xNS0xNUM2LjcxNiAwIDAgNi43MTYgMCAxNWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1Wm0wLTMuMzMzYzYuNDQzIDAgMTEuNjY3LTUuMjI0IDExLjY2Ny0xMS42NjdTMjEuNDQzIDMuMzMzIDE1IDMuMzMzIDMuMzMzIDguNTU3IDMuMzMzIDE1IDguNTU3IDI2LjY2NyAxNSAyNi42NjdaIiBmaWxsPSIjNDk0YzRlIi8+CiAgPHBhdGggZD0iTTE3LjUgNy45MTdhMi41IDIuNSAwIDEgMS01IDAgMi41IDIuNSAwIDAgMSA1IDBaIiBmaWxsPSIjNDk0YzRlIi8+CiAgPHBhdGggZD0iTTIxLjkyNCAxMi4wMTFjLjE4NC0uMTE0LjM5Mi0uMTg4LjU3My0uMzA2YS45MjguOTI4IDAgMCAwLS4zMTctMS42ODUuODczLjg3MyAwIDAgMC0uMzc3LjAyM2MtLjk1My4yMi01LjMyMiAxLjIwNy02LjgwMyAxLjIwNy0xLjQ4MSAwLTUuODUtLjk4OC02LjgwMy0xLjIwN2EuODczLjg3MyAwIDAgMC0uMzc3LS4wMjMuOTI5LjkyOSAwIDAgMC0uMzUgMS42NjJjLjE5Ny4xNDIuNDMuMjMuNjMzLjM2MSAxLjM5NS45MDMgNC40MDggMi4wODIgMy45ODUgMy43N2wtMS43OTYgNi42NDRhMS4wNjUgMS4wNjUgMCAwIDAgMS44OTYuOTI4TDE1IDE4LjMzM2wyLjgxMiA1LjA1MmExLjA2NSAxLjA2NSAwIDAgMCAxLjg5Ni0uOTI4bC0xLjc5Ni02LjY0NGMtLjM4NS0xLjUzOSAyLjcxMy0zLjAwMiA0LjAxMi0zLjgwMloiIGZpbGw9IiM0OTRjNGUiLz4KPC9zdmc+Cg==" 
				image-alt="Accessibility icon"
				message="Accessibility is great!">
			</h5p-lit-simple-example>
		`);
		await expect(elem).to.be.golden();
	});

});
