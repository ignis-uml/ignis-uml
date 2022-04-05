let Ignis = {
    refs: {},
    ui: {},
    View: null,
}

Ignis.refs.init = function() {
    Ignis.refs.view = $('#ignis-view');
    Ignis.refs.editor = $('#ignis-editor');
}

Ignis.configure = function() {
    Ignis.View = View.init()
}

Ignis.init = function() {
    Ignis.refs.init();
    Ignis.configure();
    Ignis.ui.test();
}

