enyo.kind({
    name: "CategoryDrawer",
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
                    kind:"MoreContent" 
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
    },
   
    questionChanged:function(){
        this.$.slideMoreContent.setSliderData(this.question);
    },
    isDisabledChanged:function() {
        this.$.txtCategoryDrawer.setClasses("buttonDrawer disabled");
    },
    isOpenChanged:function() {
         this.$.itemDrawer.setOpen(true);
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