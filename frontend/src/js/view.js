let View = {
    sfx: null,
    viewport: {}
}

View.init = function() {
    this.sfx = Ascii.init()
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


    $.each(objects, function(index, object) {
        textLength = object.label.length;
        console.log(textLength);

        position = {
            left: 0,
            right: 15,
            top: 0,
            bottom: 5,
        }
        config = {
            size: {
                width: 100,
                height: 50,
            }
        }

        packedObjects[packedObjects.length++] = ({
            object: object,
            position: position,
            config: config,
        });
    });

    return packedObjects;
}