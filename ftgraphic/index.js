module.exports = {
	name: "ftgraphic",
	description: "fortestingshittthings",
	category: "Basic",
	icon: "image",
	hasEntries: false,
	props: [
		{
			name: "image2",
			description: "Away Team",
			type: "ImageFile"
		},
		{
			name: "image",
			description: "Home Team",
			type: "ImageFile"
		}
	],
	
	vue_template: renderPug(getFile("template.pug").toString()),
	vue_component: getFile("component.js").toString(),
	css: renderStylus(getFile("style.styl").toString())
}
