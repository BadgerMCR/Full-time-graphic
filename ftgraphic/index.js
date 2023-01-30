module.exports = {
	name: "ftgraphic",
	description: "fortestingshittthings",
	category: "Basic",
	icon: "image",
	hasEntries: true,
	props: [
		{
			name: "image",
			description: "Home Team",
			type: "ImageFile"
		},
		{
			name: "image2",
			description: "Away Team",
			type: "ImageFile"
		}
	],
	entry_props: [

		{
			name: "hn",
			description: "Home Team",
			type: "String"
		},
		{
			name: "an",
			description: "Away Team",
			type: "String"
		},
		{
			name: "score1",
			description: "score 1",
			type: "String"
		},
		{
			name: "score2",
			description: "score 2",
			type: "String"
		},
	],
	
	vue_template: renderPug(getFile("template.pug").toString()),
	vue_component: getFile("component.js").toString(),
	css: renderStylus(getFile("style.styl").toString())
}
