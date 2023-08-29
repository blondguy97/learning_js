module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {

		"linebreak-style": [
			"error",
			"windows"
		],
	
		"semi": [
			"warn",
			"always"
		],

	}
};
