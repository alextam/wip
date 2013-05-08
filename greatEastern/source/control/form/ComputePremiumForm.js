enyo.kind({
    name: "ComputePremiumForm",
    kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
    components: [
        {
        	kind:"onyx.Button",
        	content: "Test",
        	ontap:"handleTest"
        }
    ],
    handleTest:function(inSender,inEvent) {
    	new SearchIndexViewControl().renderInto(document.body);
    }
});