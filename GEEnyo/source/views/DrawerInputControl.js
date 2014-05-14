enyo.kind({
    name: "DrawerInputControl",
    kind: "Control",
   	layoutKind: "FittableColumnsLayout",
    components: [
        { kind:"DrawerInputLeft" },
        { style:"width:50px"},
        { kind:"DrawerDatePicker" }
    ]
});