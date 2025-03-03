import { addExtensions, litConfig, setDirectoryConfigs, testingConfig } from 'eslint-config-brightspace';

export default [
	{
		ignores: ['dist']
	},
	...setDirectoryConfigs(
		addExtensions(litConfig, ['.js', '.html']),
		{ '**/test': testingConfig }
	),
	{
		languageOptions: {
			globals: {
				H5P: false
			}
		}
	}
];
