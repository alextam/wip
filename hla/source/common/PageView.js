enyo.kind({
    name: "PageView",
    kind: "Control",
    fit:true,
    nav: Navigator,
    classes:"mainBg",
    style:"position:relative;overflow:hidden",
    components: [
        {
        	kind:"ActionButton",
        	content:"< Back",
        	ontap:"handleTap",
        	classes:"actionButton"
        },
        {
        	name:"btnPhoto06",
        	kind:"PhotoButton",
        	classes:"btn2 static",
            title:"",
            endY:185
        },
        {
        	name:"videoBox",
        	kind:"VideoButton",
        	classes:"video static",
        	title:""
        },
        {
        	name:"txtHeaderTitle",
        	tag:"h1",
        	content:"CEO Message",
        	classes:"standardSeanH1"
        },
        {
        	name:"txtParagraph1",
        	tag:"h2",
        	classes:"textAreaP1",
        	content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. "
        },
        {
        	name:"txtParagraph2",
        	tag:"h2",
        	classes:"textAreaP2",
        	content:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum sipatasum verusist clari-tatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius."
        }
    ],
    handleTap:function(inSender,inEvent) {
    	this.nav.gotoPage("App");
    }
});