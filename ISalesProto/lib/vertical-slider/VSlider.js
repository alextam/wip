/**
 An implementation of vertical Onyx slider.

 [All code is courtesy of tjordan and Roy Sutton](http://stackoverflow.com/questions/16560608/enyo-js-vertical-sliders).
 I only slightly tweaked the CSS.
 */
enyo.kind({
    name: "onyx.VSlider",
    kind: "onyx.Slider",
    classes: "vertical-slider",
    //* @protected
    dragstart: function(inSender, inEvent) {
        if (inEvent.vertical) {
            inEvent.preventDefault();
            this.dragging = true;
            return true;
        }
    },
    //* @protected
    updateBarPosition: function(inPercent) {
        this.$.bar.applyStyle("top", (100-inPercent) + "%");
        this.$.bar.applyStyle("height", inPercent + "%");
    },
    //* @protected
    updateKnobPosition: function(inPercent) {
        this.$.knob.applyStyle("top", (100-inPercent) + "%");
    },
    //* @protected
    calcKnobPosition: function(inEvent) {
        var y = inEvent.clientY - this.hasNode().getBoundingClientRect().top;
        return this.max - (y / this.getBounds().height) * (this.max - this.min);
    }
});