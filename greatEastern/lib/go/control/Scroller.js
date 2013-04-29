enyo.kind({
	name: 'go.Scroller',
	kind: enyo.Scroller,
	events: {
		onFocus: ''
	},
	handlers: {
		onFocus: 'setFocus'
	},
	setFocus: function(inSender, inEvent) {
		if(enyo.platform.android){
			var focusOn = inEvent.originator;

			if (focusOn === this) {
				return;
			}

			var pos = enyo.dom.calcNodePosition(focusOn.hasNode(), this.hasNode());
			var _this = this;
			this.threshold = 60;
			setTimeout(function(){
				_this.setScrollTop(pos.top-_this.threshold);
			},0);
			
			this.doFocus();

			return true;
		}
	},
	scrub:function(){
		var _this = this;
		_this.setScrollTop(1);
		setTimeout(function(){
			_this.setScrollTop(0);
		},0);
	}
});