enyo.kind({
	name: "Header",
	kind: "onyx.Toolbar",
	layoutKind: "FittableColumnsLayout",
	classes:"std45px reset",
	components: [
		{
			name: "leftWing",
			classes:"headerLeftWing",
			layoutKind: "FittableColumnsLayout"
		},
		{
			tag:"h1",
			classes:"txtAlignCenter headerTextTitle",
			name:"txtHeaderTitle",
			content:"Header",
			fit:true
		},
		{
			name: "rightWing",
			classes:"headerRightWing",
			layoutKind: "FittableColumnsLayout"
		} 

	],
	buttons: [],
	create:function(){
		this.inherited(arguments);
		this.setTitle(this.title);
		if (this.buttons.length > 0){
			this.setButtonControls(this.buttons);
		}
	},
	setTitle:function(title){
		this.title = title;
		this.$.txtHeaderTitle.setContent(title);
	},
	setPickerButton:function(){
		//this.$.btn2.setDataSource(data.location);
		//this.$.btn2.setValue(current data.location);
	},
	hideAllButtons:function(){
		this.$.leftWing.hide();
		this.$.rightWing.hide();
	},
	setButtonControls:function(buttons){
		var i;
		for(i = 0;i < buttons.length;i++){
			this.addButton(buttons[i]);
		}
	},
	addButton:function(button){
		var defaults = {
			kind: "onyx.Button",
			classes:"roundedCorner headerButton",
			content:"",
			disabled: false,
			visible: true,
			event: '',
			position: "left",
			fixed: false
		};
		button = enyo.mixin(defaults, button);
		button.ontap = "handleButtonTapped";

		if (button.position == "left") {
			var wing = this.$.leftWing;
		} else {
			var wing = this.$.rightWing;
		}
		var btn = this.createComponent(button);
		btn.setContainer(wing);
		/*var btn = wing.createComponent(button);
		btn.setParent(this);*/
	},

	handleButtonTapped: function(inSender, inEvent) {
		var btn = inEvent.originator;
		if (btn.event != null){
			if (!btn.event || btn.event == '') {
				this.bubble('onHeaderButtonTapped', inEvent);

				return true;
			}

			this.bubble(btn.event, inEvent);
		}
	}
	

});