enyo.kind({
    name: "ESig",
    kind: "Control",
    components: [
        {
        	tag:"h1",
        	classes:"headerRed",
        	content:"E-Signature"
        },
        {
        	style:"height:15px"
        },
        {
        	style:"width:708px;height:250px;border:1px solid #ccc",
            name:"drawBoard",
            kind:"DrawBoard"
        }
    ]
});