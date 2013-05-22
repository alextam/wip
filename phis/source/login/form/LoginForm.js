enyo.kind({
    name: "LoginForm",
    kind:"Control",
    components:[
        {
            classes:"setWidthFull",
            components:[
                {
                    classes:"setWidth40 centerDiv",
                    components:[
                        {
                            kind:"InputItemControl",
                            classes:"topFormRounded",
                            maxlength:20,
                            placeholder:"Username"
                        },
                        {
                            kind:"InputItemControl",
                            type:"password",
                            classes:"bottomFormRounded",
                            maxlength:20,
                            placeholder:"Password"
                        },
                        { style:"height:30px" },
                        {
                            classes:"setWidthFull cyanButton",
                            kind:"go.StateButton",
                            content:"Submit"
                        } 
                    ]
                } 

            ]
            
            
        }
    ],
    create:function() {
    	this.inherited(arguments);
    }
    
});