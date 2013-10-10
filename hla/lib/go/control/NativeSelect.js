enyo.kind({
	name: "go.NativeSelect",
	published: {
		//* Index of the selected option in the list
		selected: 0
	},
	//* @protected
	kind: "enyo.Control",
	style: "position:relative;",
	classes:"nativeSelect",
	components: [
		{
			tag:"div",
			name: "decoratorNativeSelect",
 			components :[
				{
					name: "label",
					kind: "onyx.Button",
					style:"color:#ffffff;" 
				},
				{
					name: "select",
					kind: "enyo.Select",
					style: 'position: absolute; top: 0; left: 0; background: transparent; color: transparent; border: none; -webkit-appearance: none;',
					onchange: 'selectChange'
				}
			]

		}
		
	],
	handlers: {
		onresize: 'resizeHandler'
	},
	create: function() {
		this.inherited(arguments);
 		this.$.decoratorNativeSelect.addClass(this.classes);
	},

	initComponents: function() {
		this.inherited(arguments);
		 
     },
	rendered: function() {
		this.$.label.addClass(this.classes); 
		if (this.$.label.hasNode()) {
			var bounds = this.$.label.getBounds();

 			this.$.select.setBounds(bounds);
			
		}

		this.$.label.setContent(this.getSelectedLabel());

		//Trick to force IE8 onchange event bubble
		if(enyo.platform.ie == 8){
			this.$.select.setAttribute("onchange", enyo.bubbler);
		}

		this.$.select.selectedChanged();
	},
	getSelected: function() {
		return this.$.select.getSelected();
	},
	setSelected: function(inIndex) {
		this.$.select.setSelected(inIndex);
	},
	//* @public
	//* Returns the value of the selected option.
	getValue: function() {
		return this.$.select.getValue();
	},
	selectChange: function(inSender, inEvent) {
		this.$.label.setContent(this.getSelectedLabel());
	},
	getSelectedLabel: function() {
		if (this.$.select.hasNode()) {
			if (!this.$.select.node[this.$.select.getSelected()]) {
				return null
			}
			return this.$.select.node[this.$.select.getSelected()].innerHTML;
		}
	},
	resizeHandler: function() {
		if (this.$.label.hasNode()) {
			var bounds = this.$.label.getBounds();
			this.$.select.setBounds(bounds);
			
		}
	}
});