let Ascii = {

}

Ascii.init = function() {
    return this;
}

Ascii.addBox = function(x) {
    return ' ---- ';
}

Ascii.render = function(objects, viewport) {
    console.log(viewport);
    var txt = '';
    // $.each(objects, function(index, object) {
    //     txt += Ascii.addBox(object);
    // });
    var chars = viewport.width / 9;
    var lines = viewport.height / 16;

    for(line = 0; line <= lines; line++) {
        for(char = 0; char <= chars; char++) {
            txt += '.';
        }
        txt += "\n";
    }

    viewport.ref.val(txt);
}