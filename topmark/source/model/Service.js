enyo.kind({
	name: "Service",
	kind: "go.WebService",
    global:go.Global,
	getSearchResult: function(field, param) {
        var dfd = new Deferred();
	       	
        var taffyData = TAFFY(this.getLocalData());
        var query = {};
        query[field] = {is:param};
        console.log(query);
        console.log(taffyData().get());
        return this.resolveDfd(taffyData(query).get());
	},
    loadPriceGuide:function() {
        console.log("Installing Price Data...");
        var priceGuide = [
            {
                model:"TOYOTA",
                year:"2000",
                price:"RM 12,000 - RM 13,000"
            },
            {
                model:"PROTON SAGA",
                year:"2001",
                price:"RM 10,000 - RM 12,000"
            },
            {
                model:"HONDA",
                year:"2005",
                price:"RM 23,500 - RM 24,500"
            },
            {
                model:"DAIHATSU EX",
                year:"2005",
                price:"RM 20,000 - RM 22,000"
            }
        ];
        return this.resolveDfd(priceGuide);
    },
    initData:function() {
        console.log("Installing Sample Data...");
        var fullData = [
            //"vechicleno":"KDU 9665",
            //"chassis":"CH00100",
            //"engineno":"EN99911",
            //"registrationdate":"09-09-2009",
            //"type":"Private",
            //"model":"PROTON WIRA",
            //"descripton":"Fully furnished, full accessories, new car stereo",
            //"year":"2009
            {
                vehicleno:"WWW 1234",
                chassis:"SGDT001SW121227",
                engineno:"FD1234HE", 
                registrationdate:"23-09-2013",
                type:"Private", 
                model:"Toyota",
                description:"Quite new... Leather seats",
                year:"2013" 
            },
            {
                vehicleno:"BAMBEE 8888",
                chassis:"GGDT001SD101226",
                engineno:"MIT123HT", 
                registrationdate:"12-01-2011",
                type:"Commercial", 
                model:"Proton Saga", 
                description:"Full accessories included", 
                year:"2011" 
            },
            {
                vehicleno:"PUTRAJAYA 2468",
                chassis:"XGDT001SW101225",
                engineno:"HON999CHT", 
                registrationdate:"08-05-1999",
                type:"Commercial", 
                model:"Honda", 
                description:"Minor accident at the bumper. Condition and milage still good...", 
                year:"1999" 
            }
        ];
        var localData = this.global.getLocal("TOPMARK.TOYOTA");
        if (localData != null){
            return;
        } else {
            this.global.storeLocal("TOPMARK.TOYOTA",fullData);
        }
    },
    getLocalData: function() {
        var localData = this.global.getLocal("TOPMARK.TOYOTA");
        return localData;  
    },
    updateRecord: function(id, payLoad) {

    },
    saveRecord: function(payLoad) {
        var localData = this.global.getLocal("TOPMARK.TOYOTA");
        var taffyDB = TAFFY(localData);
        taffyDB.insert(payLoad);
        
        this.global.storeLocal("TOPMARK.TOYOTA",taffyDB().get());
        return this.resolveDfd({error:0});
    }
});