enyo.kind({
    name: "DrawerDatePicker",
    kind: "Control",
    components: [
        {
        	tag:"h1",
        	classes:"headerTxt",
        	content:"Maturity Date"
        },
        {
        	name:"txtDateInput",
        	kind:"Input",
        	classes:"dateInput",
        	attributes:{
        		type:"date"
        	}
        }
    ],
    published:{
        value:null		
    },
    valueChanged:function(){
    	this.$.txtDateInput.setValue(this.value);
    }
});