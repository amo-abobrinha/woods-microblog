var m = require('mithril');

var unhide_whisper_modal_cb = function() {
    var modal = document.getElementById('whisper-modal');
    modal.style.display = 'block';
    modal.style.opacity = 1;
};

var whisper_btn = m('button', {
    id: 'whisper-btn', onclick: unhide_whisper_modal_cb}, [
        'Whisper...'
]);

var inc_whisper_modal = m('div', {id: 'whisper-modal', class: 'modal'}, [
    m('div', {class: 'modal-content'}, [
        m('form', {action: '/whisper', method: 'post'},[
            m('textarea', {name: 'content', rows: 3, cols: 60,
                           placeholder: 'What is on your mind?'}),
            m('div', [
                m('button', ['Attach media']),
                m('input', {type: 'submit', value: 'Whisper'})
            ])
        ])
    ])
]);

module.exports = {
    view: function() {
        return [
            inc_whisper_modal,
            whisper_btn
        ];
    }
};
