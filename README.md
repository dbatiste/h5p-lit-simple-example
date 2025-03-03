# h5p-lit-simple-example


### Build

```shell
npm run build
```

### Testing

To run the full suite of tests:

```shell
npm test
```

Alternatively, tests can be selectively run:

```shell
# unit tests
npm run test:unit

# aXe accessibility tests
npm run test:axe

# linting
npm run lint:eslint
npm run lint:style
```

**Note:** The axe tests require `prefers-reduced-motion` emulation to be turned on in the dev console if debugging in a local browser.

This repo uses [@brightspace-ui/testing](https://github.com/BrightspaceUI/testing)'s vdiff command to perform visual regression testing:

**Note:** This visual-diff testing is purely local so you must first generate the goldens using `npm run test:vdiff -- --golden`. Normally visual-diff testing would be setup in CI where the offocial goldens would be generated along with a corresponding PR.

```shell
# vdiff
npm run test:vdiff

# re-generate goldens
npm run test:vdiff -- --golden
```
