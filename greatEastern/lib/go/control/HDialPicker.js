// Depends go.IconButton 
enyo.kind({
    name: "go.HDialPicker",
    kind: "Control",
    index: 0,
    indexLen : 0,
    title:"",
    titleClass:"",    
    buttonClass:"",
    itemArray:[],
    layoutKind: "FittableColumnsLayout",
    published: {
        readOnly: false
    },
    components: [
        {
            tag:"div",
            name:"titleDivControl",
            classes:"setWidth40 hidden",
            components:[ 
                {
                    tag:"div",
                    name:"titleControl",
                    classes:"smallCaption",
                    style:"display:table-cell;vertical-align: middle;",
                    content:"Set Title..."                             
                } 
            ]
        },
        {
            tag:"div",
            name:"hDialPickerControl",
            classes:"setWidth60",
            style:"height:40px;padding:5px;font-weight:bold",
            layoutKind: "FittableColumnsLayout",
            components:[
                {
                    tag:"div",
                    components:[
                        {
                            kind:"go.IconButton",
                            name:"btnLeft",
                            icon:"icon-chevron-left",
                            ontap:"handleBtn",
                            style:"height:40px"
                        }
                    ]
                },
                {
                    content:" ",
                    fit:true,
                    name:"txtItemName",
                    allowHtml:true,
                    classes:"truncate",
                    style:"padding:5px;font-size:0.94em;line-height:30px;text-align:center" 
                },
                {
                    tag:"div",
                    components:[
                        {
                            kind:"go.IconButton",
                            name:"btnRight",
                            icon:"icon-chevron-right",
                            ontap:"handleBtn",
                            style:"height:40px"
                        }
                    ]
                }
            ]
        }
    ],
    create:function(inSender,inEvent){
        this.inherited(arguments);
        if (this.buttonClass != ""){
            this.setButtonClass(this.buttonClass);
        }
        if (this.title == ""){
            this.$.titleDivControl.addClass("hidden");
            this.$.hDialPickerControl.removeClass("setWidth60");
            this.$.hDialPickerControl.addClass("setWidthFull");
            this.$.hDialPickerControl.reflow();
        } else {
            this.setTitle(this.title);
        }
        if (this.titleClass != ""){
            this.$.titleControl.addClass(this.titleClass);
        }
        if (this.itemArray.length){
            var index = this.index;
            this.setupItem(this.itemArray);
            this.index = index;
            this.changeItem(false);
        }

        this.readOnlyChanged();
    },
    setTitle: function(title){
        this.title = title;
        this.$.titleControl.setContent(this.title);
        this.$.hDialPickerControl.removeClass("setWidthFull");
        this.$.titleDivControl.removeClass("hidden");
        this.$.hDialPickerControl.addClass("setWidth60");
        this.$.hDialPickerControl.reflow();
    },
    
    setupItem:function(itemArray){
        this.itemArray = itemArray;
        this.indexLen  = itemArray.length - 1;
        this.index = 0;
        this.changeItem(false);
    },
    setButtonClass:function(className){
        this.$.btnLeft.addClass(className);
        this.$.btnRight.addClass(className);
    },
    getSelected:function(){
        return this.itemArray[this.index];
    },
    getIndex:function(){
        return this.index;
    },
    setIndex:function(value, fireEvent){
        if ( parseInt(value,10) > this.itemArray.length ){
            enyo.warn("Invalid Index");
            return;
        }

        if (value == this.index) {
            return;
        }

        this.index = value;


        this.changeItem(fireEvent);
    },
    getValue: function() {
        return this.itemArray[this.index].value;
    },
    changeItem:function(fireEvent){
        if (fireEvent === undefined) {
            fireEvent = true;
        }

        if (this.itemArray.length === 0) {
            this.$.txtItemName.setContent('<span class="grayOut">---</span>');
        } else {
            try {
                this.$.txtItemName.setContent( this.itemArray[this.index].label );
            }
            catch(e) {
                enyo.error("Error in HDialPicker : " + e.message);
            }
        }

        if (fireEvent) {
            this.bubble('onchange');
        }
    },
    nextItem:function(){
        if (this.index == this.indexLen ){
            return;
        }

        this.index++;
        this.changeItem();
    },
    prevItem:function(){
        if (this.index == 0 ){
            return;
        }

        this.index--;
        this.changeItem();
    },
    readOnlyChanged: function() {
        this.$.btnLeft.setDisabled(this.readOnly);
        this.$.btnRight.setDisabled(this.readOnly);
        if (this.readOnly){
            this.$.btnLeft.addClass("hidden");
            this.$.btnRight.addClass("hidden");
            this.$.hDialPickerControl.reflow();
        } else {
            this.$.btnLeft.removeClass("hidden");
            this.$.btnRight.removeClass("hidden");
            this.$.hDialPickerControl.reflow();
            
        }
    },
    handleBtn:function(inSender,inEvent){
        if (this.indexLen != 0){
            if(inSender.name == "btnRight"){
                this.nextItem();
            } else {
                this.prevItem();
            }
        }
    }
});