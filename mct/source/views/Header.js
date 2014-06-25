enyo.kind({
    name: "Header",
    classes:"myToolBar",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	style:"width:50%",
            components:[
                {
                    tag:"div",
                    classes:"mct-logo"
                }
            ]
        },
        {
        	style:"width:50%",
            components:[
                {
                    classes:"e-registration"
                }
            ]
        }
    ]
});