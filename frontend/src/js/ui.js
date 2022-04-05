Ignis.ui.test = function() {
    Ignis.View.clear();

    var objects = [
        {
            id: 1,
            type: 'default',
            label: 'label 1',
        },
        {
            id: 2,
            type: 'default',
            label: 'label 2',
        }
    ];
    Ignis.View.render(objects);
}

/*
- -- - - - - - - - - - - - - - - - - - - -
- - - - - [ ----------- ] - - - - - -
- - - - - [    label 1  ] - - - - - -
- - - - - [ ----------- ] - - - - - -
- - - - - - - - - - - - - - - - - - - - -
 */