let View = {
    sfx: null,
    viewport: {}
}

View.init = function() {
    this.sfx = Ascii.init()
    this.grid = AsciiGrid.init()
    this.viewport.ref = Ignis.refs.view;
    return this;
}

View.clear = function() {
    View.viewport.ref.val('');
}
View.rescanViewport = function() {
    View.viewport.width = $(View.viewport.ref).width();
    View.viewport.height = $(View.viewport.ref).height();
}

View.render = function(objects) {
    View.rescanViewport();
    packedObjects = View.packObjects(objects)
    View.sfx.render(packedObjects, View.viewport);
}

View.packObjects = function(objects) {
    var packedObjects = {};

    // packedObjects['rows'] = [];
    packedObjects= [];

    let self = this;
    $.each(objects, function(index, object) {
        config = {
            // size: {
            //     width: 100,
            //     height: 50,
            // }
        }

        packedObjects[packedObjects.length++] = ({
            object: object,
            position: self.grid.configurePosition(object, index),
            config: config,
        });
    });

    return packedObjects;
}