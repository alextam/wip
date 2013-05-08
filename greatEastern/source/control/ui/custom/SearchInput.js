enyo.kind({
    name: "SearchInput",
    kind: "Control",
    components: [
        {
			layoutKind: "FittableColumnsLayout",
            components:[
	            {
	                kind: "onyx.InputDecorator",
					classes:"appInputForm inset resetCorner",
	                fit:true,
					components: [
						{
							layoutKind: "FittableColumnsLayout",
							classes:"setWidthFull marginTop-5px",
							components:[
								{
									classes: "formDecoratorButton icon icon-search"
								},
								{
									kind: "onyx.Input",
									name: "txtInput",
									value: "",
									placeholder:"Search Filter...",
									fit:true,
									onchange:"inputChanged",
									onkeyup:"inputChanged"
								},
								{
									ontap:"handleRemoveInput",
									classes: "formDecoratorButton icon icon-remove"
								}
							]
					    }
					]
				}
            ]
        }
    ],
    handleRemoveInput:function(inSender,inEvent) {
    	this.$.txtInput.setValue("");
    },
    inputChanged :function(inSender,inEvent) {
    	this.bubble( "onSearch", inSender);
    }

});