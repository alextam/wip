enyo.kind({
    name: "CategorySTRDrawer",
    kind: "Control",
    classes:"categoryDrawer",
    components: [
        {
        	tag:"div",
        	name:"txtCategoryDrawer",
            classes:"buttonDrawer",
        	content: "Set Title...",
            ontap:"handleCategoryDrawer"
        },
        {
            name:"itemDrawer",
            kind: "enyo.Drawer",
            open:false, 
            animated: true, 
            components: [
                {
                    name:"slideMoreContent",
                    classes:"drawerContent",
                    kind:"STRMoreContent" 
                }
            ]
        }
    ],
    published:{
        title:null,
        isOpen:false,
        question:null,
        isDisabled:false
    },
    handlers:{
        onUpdateSlider0:"",
        onUpdateSlider1:""
    },
    create: function() {
        this.inherited(arguments);
        this.titleChanged();
        this.isDisabledChanged();
    },

    questionChanged:function(){
        this.$.slideMoreContent.setSliderData(this.question);
    },
    isDisabledChanged:function() {
        if (this.isDisabled) {
            this.$.txtCategoryDrawer.setClasses("buttonDrawer disabled");
            this.setIsOpen(false);
        } else {
            this.$.txtCategoryDrawer.setClasses("buttonDrawer");
            this.setIsOpen(true);
        }
    },
    isOpenChanged:function() {
         this.$.itemDrawer.setOpen(this.isOpen);
    },
    handleCategoryDrawer:function(inSender,inEvent) {
        if(!this.isDisabled) {
            this.$.itemDrawer.setOpen(!this.$.itemDrawer.open);
        }
    },    
    titleChanged:function() {
    	this.$.txtCategoryDrawer.setContent(this.title);
    }
});