var m = require('mithril');
var whisper_btn = require('./whisper_btn');
var root = document.body;

m.render(root, [
    m(whisper_btn)
]);

//FIXME: workaround
window.onclick = function(event) {
    var modal = document.getElementById('whisper-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
