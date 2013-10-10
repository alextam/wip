enyo.kind({
    name: "PanelButton",
    kind: "Control",
    components: [
        {
            name:"triggerButton",
            kind: "Button",
            ontap:"handleBtnSlider",
            style:"background:#e1e1e1;width:60px;",
            classes:"std45px setWidthFull reset borderless",
            components:[
                { 
                    name:"indicatorButton", 
                    classes:"panelSliderButton txtAlignLeft icon icon-circle-arrow-right" 
                }
               
            ]
        }
    ],
    changeMode:function(value){
        if(value){
            this.$.indicatorButton.setClasses("panelSliderButton txtAlignLeft icon icon-circle-arrow-right");
        } else {
            this.$.indicatorButton.setClasses("panelSliderButton txtAlignRight icon icon-circle-arrow-left");
        }
    }
});