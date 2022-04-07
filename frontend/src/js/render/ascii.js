let Ascii = {
    objects: [],

}

Ascii.init = function() {
    return this;
}

Ascii.addBox = function(x) {
    return ' ---- ';
}

Ascii.render = function(objects, viewport) {
    // console.log(viewport);
    // console.log(objects);
    Ascii.objects = objects;
    var txt = '';
    // $.each(objects, function(index, object) {
    //     txt += Ascii.addBox(object);
    // });
    var chars = viewport.width / 9;
    var lines = viewport.height / 16;

    for(line = 0; line <= lines; line++) {
        for(char = 0; char <= chars; char++) {
            txt += Ascii.getCharAtPosition(line, char);
        }
        txt += "\n";
    }

    viewport.ref.val(txt);
}

Ascii.getCharAtPosition = function(line, char) {
    //console.log(line, char);
    // if (line == 1 && (char >= 4 && char <= 10)) {
    //     return '-';
    // }
    var o = Ascii.intersectObject(line, char);
   
    if (o != false) {
        return Ascii.getCharAtPositionForObject(line, char, object);
    }

    return ',';
}

Ascii.intersectObject = function(line, char) {
    var objects = Ascii.objects;
    for (var i = 0; i <= objects.length -1; i++) {//$.each(, function(index, object) {
        object = objects[i];
        var config = object.config;
        var position = object.position;
        if (line >= position.top && line <= position.bottom) {
            // intersect by line
            if (char >= position.left && char <= position.right) {
                // intersect by col
                return object;
            }
        }
    };

    return false;
}

Ascii.getCharAtPositionForObject = function(line, char, object) {
    //console.log(line);
    var config = object.config;
    var position = object.position;
    if (line ==  position.top) {
        if (char == position.left) {
            return "\u250C";
        }

        if (char == position.right) {
            return "\u2510";
        }

        if (char > position.left ) {
            return "\u2500";
        }
    }

    if (line == position.bottom) {
        if (char == position.left) {
            return "\u2514";
        }

        if (char == position.right) {
            return "\u2518";
        }

        if (char > position.left ) {
            return "\u2500";
        }
    }

    if (char == position.left) {
        return "\u2502";
    }

    if (char == position.right) {
        return "\u2502";
    }

    if (line == 2 && char > position.left ) {
        if (char <= object.object.label.length) {
            return object.object.label.charAt(char - 1);
        }
        return " ";
    }

    if (char > position.left ) {
        return " ";
    }



    return "*";
}