enyo.kind({
	name: "Service",
	kind: "go.WebService",
    global:go.Global,
    getClientele: function() {
        var data = [
            {
                name:"Michelle Tan Wei Ling",
                contactno:"0126630232",
                education:"Degree",
                income:80000,
                photo:"p0.png",
                occupation:"Teacher",
                rating:5,
                address:"",
                postcode:"",
                email:"michelle_88@hotmail.com",
                goal:"Travel around the world"
            },
            {
                name:"Micheal Jacobson",
                contactno:"0126630335",
                education:"Degree",
                income:62000,
                photo:"p1.png",
                occupation:"Teacher",
                rating:2,
                address:"",
                postcode:"",
                email:"mic_1997@hotmail.com",
                goal:"Escape the rat race!"
            },
            {
                name:"Mohd. Khalid bin Mohd. Rasdi",
                contactno:"0126620222",
                education:"Diploma",
                income:60000,
                photo:"p2.png",
                occupation:"IT Executives",
                rating:1,
                address:"",
                postcode:"",
                email:"mkhalid23@gomobileapp.com",
                goal:"Buying my dreamhouse in Ampang EcoPark."
            },
            {
                name:"Mohd Khairy bin Saifuddin",
                contactno:"0104620222",
                education:"Diploma",
                income:60000,
                photo:"p6.png",
                occupation:"Web Developer",
                rating:2,
                address:"",
                postcode:"",
                email:"raizen23@gomobileapp.com",
                goal:"Start my own business."
            },
            {
                name:"Alice Chong Wei Sze",
                contactno:"0115620112",
                education:"Diploma",
                income:70000,
                photo:"p3.png",
                occupation:"Bank Officer",
                rating:4,
                address:"",
                postcode:"",
                email:"alicechong_1990@gmail.com",
                goal:"Own a 2nd hand car dealer business."
            },
            {
                name:"Murali a/l Muthusamy",
                contactno:"0104620110",
                education:"High School",
                income:30000,
                photo:"p10.png",
                occupation:"Security Officer",
                rating:4,
                address:"",
                postcode:"",
                email:"matomaman@securebrothers.com",
                goal:"Better income."
            },
            {
                name:"Guster Lee Ming Hoi",
                contactno:"0135620112",
                education:"Master Degree",
                income:90000,
                photo:"p5.png",
                occupation:"Real Estate Agent",
                rating:3,
                address:"",
                postcode:"",
                email:"gusterBman@outlook.com",
                goal:"Become a CEO!"
            },
            {
                name:"Suzanna Abdul Rahim",
                contactno:"0135620112",
                education:"Degree",
                income:50000,
                photo:"p4.png",
                occupation:"Technical Writer",
                rating:5,
                address:"",
                postcode:"",
                email:"katnissjaySz@gmail.com",
                goal:"To become a Technopreneur someday!"
            },
            {
                name:"Susan Lancaster",
                contactno:"0135620100",
                education:"Degree",
                income:75000,
                photo:"p7.png",
                occupation:"Senior Editor",
                rating:0,
                address:"",
                postcode:"",
                email:"littleponny81@gmail.com",
                goal:"Own my own farmhouse in Scotland"
            }
        ];
        return this.resolveDfd(data,100);
    },
	getSearchResult: function(field, param) {
        var dfd = new Deferred();
	       	
        var taffyData = TAFFY(this.getLocalData());
        var query = {};
        query[field] = {is:param.toUpperCase()};
        console.log(query);
        console.log(taffyData().get());
        return this.resolveDfd(taffyData(query).get());
	},
    getTags:function() {
        var localTagData = this.global.getLocal("TOPMARK.TOYOTA.TAGS");
        return this.resolveDfd(localTagData);
    },
    loadPriceGuide:function() {
        console.log("Installing Price Data...");
        var priceGuide = [
            {
                model:"NISSAN",
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
    usersData:function() {
        var fullData = [
            {
                id:1,
                name:"Mohd Shafiq bin Fairuz",
                photo:"p1.jpg",
                vote:3
            },
            {
                id:2,
                name:"Albert Tan Beng Chong",
                photo:"p2.jpg",
                vote:2
            },
            {
                id:3,
                name:"Mogan Raju a/l Ratnam",
                photo:"photo02.jpg",
                vote:1
            },
            {
                id:4,
                name:"Ivy Lim Chong Mei",
                photo:"p3.jpg",
                vote:1
            },
            {
                id:5,
                name:"Janice Tan Mei Sim",
                photo:"photo08.jpg",
                vote:0
            }
        ];
        return this.resolveDfd(fullData);
    },
    initData:function() {
        console.log("Installing Sample Data...");
        var fullData = [
           
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
            //return;
        } else {
            this.global.storeLocal("TOPMARK.TOYOTA",fullData);
        }

        var localTagData = this.global.getLocal("TOPMARK.TOYOTA.TAGS");
        var tags = [
            {
                uniqueId:"10000000",
                note:"Dented...Previous accident...",
                top:42,
                left:137
            },
            {
                uniqueId:"20000000",
                note:"Windscreen Replaced 2011",
                top:164,
                left:199
            },
            {
                uniqueId:"30000000",
                note:"Alignment Problem...",
                top:275,
                left:139
            }
        ];
        if (localTagData != null){
            //return;
        } else {
            this.global.storeLocal("TOPMARK.TOYOTA.TAGS",tags);
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
    },
    saveTagRecord: function(payLoad) {
        var localData = this.global.getLocal("TOPMARK.TOYOTA.TAGS");
        var taffyDB = TAFFY(localData);
        taffyDB.insert(payLoad);
        
        this.global.storeLocal("TOPMARK.TOYOTA.TAGS",taffyDB().get());
        return this.resolveDfd({error:0});
    }
});