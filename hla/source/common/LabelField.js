enyo.kind({
    name: "LabelField",
    kind: "Control",
    util: go.Utils,
    components: [
        {
            tag:"div",
            classes:"seperatorBarDiv",
            components:[
                {
                    tag:"h1",
                    name:"txtLabel",
                    content:"Set Label..."
                }
            ]
        },
        {
            layoutKind: "FittableColumnsLayout",
            classes:"contentBarDiv",
            components:[
            	{
            		tag:"h2",
            		name:"labelField1",
            		classes:"labels",
            		content:"Set Title"
            	},
            	{
            		tag:"h2",
            		classes:"data",
            		name:"txtField1",
            		content:"..."
            	}
            ]    
        },
        {
            layoutKind: "FittableColumnsLayout",
            classes:"contentBarDiv",
            components:[
            	{
            		tag:"h2",
            		name:"labelField2",
            		classes:"labels",
            		content:"Set Title"
            	},
            	{
            		tag:"h2",
            		classes:"data",
            		name:"txtField2",
            		content:"..."
            	}
            ]    
        },
        {
            layoutKind: "FittableColumnsLayout",
            classes:"contentBarDiv",
            components:[
            	{
            		tag:"h2",
            		name:"labelField3",
            		classes:"labels",
            		content:"Set Title"
            	},
            	{
            		tag:"h2",
            		classes:"data",
            		name:"txtField3",
            		content:"..."
            	}
            ]    
        },
        {
            layoutKind: "FittableColumnsLayout",
            classes:"contentBarDiv",
            components:[
            	{
            		tag:"h2",
            		name:"labelField4",
            		classes:"labels",
            		content:"Set Title"
            	},
            	{
            		tag:"h2",
            		classes:"data",
            		name:"txtField4",
            		content:"..."
            	}
            ]    
        },
        {
            layoutKind: "FittableColumnsLayout",
            classes:"contentBarDiv",
            components:[
            	{
            		tag:"h2",
            		name:"labelField5",
            		classes:"labels",
            		content:"Set Title"
            	},
            	{
            		tag:"h2",
            		classes:"data",
            		name:"txtField5",
            		content:"..."
            	}
            ]    
        },
        {
            layoutKind: "FittableColumnsLayout",
            classes:"contentBarDiv",
            components:[
            	{
            		tag:"h2",
            		name:"labelField6",
            		classes:"labels address",
            		content:"Set Title"
            	},
            	{
            		tag:"h2",
            		classes:"data address",
            		name:"txtField6",
            		content:"..."
            	}
            ]    
        }
       
    ],
    published:{
        data:null,
        label:null
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
            this.dataChanged();
        }
        if(this.label != null) {
        	this.labelChanged();
        }
        this.$.labelField1.setContent("Contact No.");
        this.$.labelField2.setContent("Occupation");
        this.$.labelField3.setContent("Education");
        this.$.labelField4.setContent("Email");
        this.$.labelField5.setContent("Income");
        this.$.labelField6.setContent("Address");
    },
    labelChanged: function() {
    	this.$.txtLabel.setContent(this.label);
    },
    dataChanged: function() {
    	this.$.txtField1.setContent(this.data.contactno);
    	this.$.txtField2.setContent(this.data.occupation);
    	this.$.txtField3.setContent(this.data.education);
    	this.$.txtField4.setContent(this.data.email);
    	this.$.txtField5.setContent(this.util.formatNumber(this.data.income, 2));
    	this.$.txtField6.setContent(this.data.address);
    }

});