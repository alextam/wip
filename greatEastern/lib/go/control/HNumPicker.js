// Depends go.IconButton 
enyo.kind({
    name: "go.HNumPicker",
    kind: "Control",
    maxCap: 99,
    minCap: 1,
    buttonClass:"",
    components: [
        {
            tag:"div",
            layoutKind: "FittableColumnsLayout",
            style:"height:40px;padding:5px;font-weight:bold",
            components:[
                {
                    tag:"div",
                    components:[
                        {
                            kind:"go.IconButton",
                            name:"btnMinus",
                            icon:"icon-minus",
                            ontap:"handleBtn",
                            style:"height:40px"
                        }
                    ]
                },
                {
                    fit:true,
                    content:"0",
                    name:"txtItemNumber",
                    allowHtml:true,
                    classes:"truncate",
                    style:"padding:5px;font-size:1em;line-height:30px;text-align:center" 
                },
                {
                    tag:"div",
                    components:[
                        {
                            kind:"go.IconButton",
                            name:"btnPlus",
                            icon:"icon-plus",
                            ontap:"handleBtn",
                            style:"height:40px"
                        }
                    ]
                }
            ]
        }
       
    ],
    create:function(inSender,inEvent){
        console.log("NNumPicker init");
        this.inherited(arguments);
        if (this.buttonClass != ""){
            this.setButtonClass(this.buttonClass);
        }
    },
   
    setButtonClass:function(className){
        this.$.btnPlus.addClass(className);
        this.$.btnMinus.addClass(className);
    },
    getValue:function(){
        return parseInt( this.$.txtItemNumber.content , 10 );
    },
    setValue:function(value){
        var innerValue = parseInt(value,10);
        if (!isNaN(innerValue)){
            this.changeItem(value);  
        } else {
            enyo.warn("Please setValue an integer");
        }
          
    },
    changeItem:function(value){
        
        try {
            this.$.txtItemNumber.setContent( value );
            this.bubble("onchange");
        }
        catch(e) {
            console.log("Error in HNumPicker : " + e.message);
        }
    },
    plusItem:function(){
        this.contentNum = parseInt( this.$.txtItemNumber.content,10 );
        this.contentNum++;
        if (this.contentNum > this.maxCap ){
            this.contentNum = this.maxCap;
        }
        this.changeItem(this.contentNum);
    },
    minusItem:function(){
        this.contentNum = parseInt( this.$.txtItemNumber.content,10 );
        this.contentNum--;
        if (this.contentNum < this.minCap ){
            this.contentNum = this.minCap;
        } 
        this.changeItem(this.contentNum);
    },
    handleBtn:function(inSender,inEvent){
        if (this.indexLen != 0){
            if(inSender.name == "btnPlus"){
                this.plusItem();
            } else {
                this.minusItem();
            }
        }
    }
});