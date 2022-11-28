
/**
 * Expand behavior for code editor 
 */
function expandButtonClickHandler(editor, fieldName, fieldLabelElm) {
    $('#node-function-expand-' + fieldName).click(function() {
        setTimeout(function() {
            $('ul.red-ui-tray-breadcrumbs li:nth-child(2)').html(fieldLabelElm);
        }, 500);
    });
    return function (e) {
        e.preventDefault();
        var value = editor.getValue();
        editor.saveView(`inside function-expandButtonClickHandler ${editor.__stateId}`);
        RED.editor.editJavaScript(
            {
                value: value,
                width: "Infinity",
                stateId: editor.__stateId,
                mode: "ace/mode/" + $('#node-input-format_' + fieldName).val(),
                focus: true,
                cancel: function () {
                    setTimeout(function () {
                        editor.focus();
                    }, 250);
                },
                complete: function (v, cursor) {
                    editor.setValue(v, -1);
                    setTimeout(function () {
                        editor.restoreView();
                        editor.focus();
                    }, 250);
                }
            }
        );
    }
}
