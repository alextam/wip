enyo.kind({
    name: "ProductEntryLowerForm",
    kind: "Control",
    components: [
        {
			name:"cboTOAControl",
			kind:"PickerItemControl",
			title:"Term of Assurance",
			items:[
				{content: "20", value:20, active:true},
				{content: "30", value:30},
				{content: "40", value:40},
				{content: "50", value:50}
			]			
		},
		{
			name:"cboPremiumPaymentControl",
			kind:"PickerItemControl",
			title:"Premium Payment Term",
			items:[
				{content: "20", value:20, active:true},
				{content: "30", value:30},
				{content: "40", value:40},
				{content: "50", value:50}
			]			
		},
		{
			tag:"h1",
			classes:"headerWithinForm",
			content:"Cash Bonus/Survival Benefits Options"
		},
		{
			name:"cboSurvivalBenefitOptionControl",
			kind:"PickerItemLabelEndControl",
			title:"Survival Benefit Option",
			endLabel:"Cash Withdrawal",
			items:[
				{content: "1", value:1, active:true},
				{content: "2", value:2},
				{content: "3", value:3},
				{content: "4", value:4},
				{content: "5", value:5}
			]			
		},
		{
			name:"cboCashBonusOptionControl",
			kind:"PickerItemLabelEndControl",
			title:"Cash Bonus Option",
			endLabel:"Cash Withdrawal",
			items:[
				{content: "1", value:1, active:true},
				{content: "2", value:2},
				{content: "3", value:3},
				{content: "4", value:4},
				{content: "5", value:5}
			]			
		}
    ]
});