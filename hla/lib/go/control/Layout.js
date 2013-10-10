enyo.kind({
	name: 'go.Layout',
	create: function() {
		this.inherited(arguments);

		if (this.contentPage) {
			if (typeof this.contentPage == 'string') {
				this.$.contentControl.createComponent({kind: this.contentPage});	
			} else {
				this.$.contentControl.addControl(this.contentPage);
			}
		}
	}
});