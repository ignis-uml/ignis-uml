let AsciiGrid = {}

AsciiGrid.init = function() {
    return this;
}

AsciiGrid.configurePosition = function(object, iteration) {
    textLength = object.label.length;

    return {
        left: iteration + textLength + 2,
        right: iteration + textLength + 2,
        top: 0,
        bottom: 4,
    }
}
