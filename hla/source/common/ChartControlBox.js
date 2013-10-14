enyo.kind({
    name: "ChartControlBox",
    kind: "Control",
    classes:"boxBg",
    components: [
        {
			layoutKind: "FittableColumnsLayout",
			style:"height:40px;margin-bottom:5px",
			components:[
				{
					fit:true,
					kind:"TapChangeButton",
					name:"policyPerMonth",
					onChanged:"handleDataChanged",
					data:[
						{ content:"4" },
						{ content:"6" },
						{ content:"8" },
						{ content:"10" }
					]
				},
				{
					tag:"h5",
					classes:"h5Content",
					content:"Policy sales per month"
				}
			]	
        },
        {
			layoutKind: "FittableColumnsLayout",
			style:"height:40px;margin-bottom:5px",
			components:[
				{
					fit:true,
					kind:"TapChangeButton",
					name:"monthlyPremium",
					onChanged:"handleDataChanged",
					data:[
						{ content:"250" },
						{ content:"300" },
						{ content:"500" },
						{ content:"1000" },
						{ content:"200" }
					]
				},
				{
					tag:"h5",
					classes:"h5Content",
					content:"Monthly Premium per policy RM"
				}
			]	
        },
        {
			layoutKind: "FittableColumnsLayout",
			style:"height:40px",
			components:[
				{
					fit:true,
					kind:"TapChangeButton",
					name:"annualBusinessGrowth",
					onChanged:"handleDataChanged",
					data:[
						{ content:"10" },
						{ content:"15" },
						{ content:"20" },
						{ content:"35" },
						{ content:"0" }
					]
				},
				{
					tag:"h5",
					classes:"h5Content",
					content:"% Annual Business Growth"
				}
				
			]	
        }
    ],
    getValue:function(){
    	var payLoad = {};
    	payLoad.annualGrowth = this.$.annualBusinessGrowth.getValue();
    	payLoad.monthlyPremium = this.$.monthlyPremium.getValue();
    	payLoad.policyPerMonth = this.$.policyPerMonth.getValue();
    	return payLoad;
    },
    handleDataChanged:function(inSender,inEvent) {
    	this.bubble("onDataChanged",{data:{annualGrowth:this.$.annualBusinessGrowth.getValue(),monthlyPremium:this.$.monthlyPremium.getValue(),policyPerMonth:this.$.policyPerMonth.getValue()}});
    }
});

/*
Policy sales per month	
Monthly Premium per policy RM	
% Annual Business Growth
*/