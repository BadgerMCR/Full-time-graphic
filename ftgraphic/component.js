// Receives the widget, widgetModule and entries as props.
export default {
	computed: {
		imageUrl1: function() {
			return "/mediafiles/" + this.widget.props.image2
		},
		imageUrl2: function() {
			return "/mediafiles/" + this.widget.props.image
		}
	}
}
