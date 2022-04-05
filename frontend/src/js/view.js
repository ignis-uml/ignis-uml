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

    packedObjects['rows'] = [];


    $.each(objects, function(index, object) {
        textLength = object.label.length;
        console.log(textLength);

        position = {}
        config = {}

        packedObjects['level-1'][] = ({
            object: object,
            position: position,
            config: config,
        });
    });
}