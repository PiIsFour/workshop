module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': ['@typescript-eslint'],
	'rules': {
		'semi': 'off',
		'@typescript-eslint/semi': ['error', 'never'],
		'indent': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 1 }],
		'prefer-template': 'error',
		'quotes': ['error', 'single'],
		'operator-linebreak': ['error', 'before'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-style': ['error', 'last'],
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
		'space-in-parens': ['error', 'never'],
		'padded-blocks': ['error', 'never'],
		'key-spacing': ['error', { 'mode': 'strict' }],
		'no-trailing-spaces': 'error',

		// 'linebreak-style': ['error', 'unix'],
		'curly': 'error',
		'dot-location': ['error', 'property'],
		'eqeqeq': 'error',
		'no-multi-spaces': 'error',
		'no-useless-return': 'error',
		'array-bracket-newline': ['error', { 'multiline': true }],
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': ['error', 'consistent'],
		'block-spacing': 'error',
		'brace-style': 'error',
		'computed-property-spacing': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'keyword-spacing': [
			'error', {
				'overrides': {
					'if': { 'after': false },
					'for': { 'after': false },
					'while': { 'after': false },
				},
			},
		],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'new-parens': 'error',
		'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
		'no-lonely-if': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
		'one-var': ['error', 'never'],
		'prefer-object-spread': 'error',
		'prefer-destructuring': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'switch-colon-spacing': 'error',
		'arrow-spacing': 'error',
		'generator-star-spacing': ['error', { 'before': true, 'after': false }],
		'yield-star-spacing': ['error', 'before'],
		'no-var': 'error',
		'prefer-const': ['error', { 'destructuring': 'all' }],
		'rest-spread-spacing': ['error', 'never'],
		'template-curly-spacing': ['error', 'always'],
	},
}
