enyo.kind({
	name: 'go.Focusable',
	kind: enyo.Control,
	kindClasses: '',
	style:"height:0px;margin:0px;padding:0px;width:0px",
	events: {
		onFocus: ''
	},
	focus: function() {
		this.doFocus();
	}
});