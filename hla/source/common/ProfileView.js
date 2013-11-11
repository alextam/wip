enyo.kind({
    name: "ProfileView",
    kind: "Control",
    components: [
        {
            style:"height:10px"
        },
        {
            name:"actualView",
            components:[
                {
                    tag:"div",
                    classes:"toolBarDiv",
                    components:[
                        {
                            tag:"h1",
                            name:"txtName",
                            classes:"contentHeader",
                            content:"Set Name..."
                        }
                    ]
                },
                {
                    classes:"contentBoxDiv",
                    components:[
                        {   
                            name:"chatBox",
                            kind:"UserChatBubble"
                        },
                        {
                            name:"txtFieldContacts",
                            label:"Contact Information",
                            kind:"LabelField"
                        },
                        {
                            name:"ratingSelector",
                            kind:"RatingSelector"
                        }
                    ]
                }
            ]
        },
        {
            name:"emptyView",
            style:"text-align:center;width:100%;margin-top:13em;",
            components:[
                {
                    style:"font-size:15em;margin-bottom:5px !important;",
                    classes:"icon-list emptyContent" 
                },
                {
                    tag:"h1",
                    classes:"emptyContent",
                    content:"Please select a record from the left"
                }
            ]
        }
       
    ],
    published:{
        data:null        
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
            this.dataChanged();
            this.$.actualView.show();
            this.$.emptyView.hide();
        } else {
            this.$.actualView.hide();
            this.$.emptyView.show();
        }
    },
    dataChanged: function() {
        this.$.actualView.show();
        this.$.emptyView.hide();
        this.$.txtName.setContent(this.data.name);
        this.$.chatBox.setData(this.data);
        this.$.txtFieldContacts.setData(this.data);
    }
});