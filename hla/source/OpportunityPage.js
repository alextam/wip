enyo.kind({
    name: "OpportunityPage",
    kind: "FittableRows",
    classes:"enyo-fit enyo-unselectable",
    global: go.Global,
    nav: Navigator,
    components: [
       { kind:"ListGraphView" }
    ]
});