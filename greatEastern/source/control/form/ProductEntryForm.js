enyo.kind({
    name: "ProductEntryForm",
    kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
     components:[
		{   
			classes:"setWidthFull inflatePadding marginTop-5px",
			components:[
				{
					tag:"h1",
					content:"Product Entry",
					classes:"formLabelHeader"
				},
				{
					classes:"roundedCorner formContainer",
 					components:[
						{
							name:"cboCalcMethod",
							kind:"PickerItemControl",
							title:"Calculation Method",
							onChangeItem:"handleChange",
							items:[
								{content: "Sum Assured", value:0},
								{content: "Premium Installment", value:1}
							]
						},
						{
							name:"txtSelection0"
						},
						{
							name:"txtSelection1"
						}
						
						
					]
				},
				{	
					classes:"roundedCorner formContainer",
					name:"additionalForm",
					kind:"ProductEntryLowerForm"
				} 
			]
		}
	],
	component0:{
			name:"txtBasicSumAssured",
			kind:"InputItemControl",
			title:"Basic Sum Assured (RM)"
	},
	component1:[
		{
			name:"txtBasicPremium",
			kind:"InputItemControl",
			title:"Basic Premium (RM)" 
		},
		{
			name:"cboPaymentMethodControl",
			kind:"PickerItemControl",
			title:"Payment Method",
			items:[
				{content: "Visa Card", value:0},
				{content: "MasterCard", value:1}
			]			
		}
	],
	create:function(){
		this.inherited(arguments);
	},
	 
	handleChange:function(inSender,inEvent) {
		this.$.txtSelection0.destroyClientControls();
		this.$.txtSelection1.destroyClientControls();
		switch(inEvent.value){
			case 0:
				this.$.txtSelection0.createComponent(this.component0);
				this.$.txtSelection0.render();
			break;

			case 1:
				var i;
				for (i = 0;i < this.component1.length;i++) {
					this.$.txtSelection1.createComponent(this.component1[i]);
					this.$.txtSelection1.render();	
				}
			break;
		}
		
	}
});