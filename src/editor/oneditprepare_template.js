            // Prepare code editor {{field_name}}
            this.editor_{{field_name}} = RED.editor.createEditor({
                id: 'node-input-{{field_name}}-editor',
                mode: 'ace/mode/text',
                value: this.{{field_name}} || "{{{field_default}}}"
            });
            $('#node-input-{{field_name}}-editor').parent().css('position', 'relative');
            $("#node-function-expand-{{field_name}}").on(
                "click", 
                expandButtonClickHandler(
                    this.editor_{{field_name}},
                    '{{field_name}}',
                    '{{{field_label_elm}}}'
                )
            );
            RED.popover.tooltip($("#node-function-expand-{{field_name}}"), RED._("node-red:common.label.expand"));
            let editor_{{field_name}} = this.editor_{{field_name}};
            $("#node-input-format_{{field_name}}").on("change", function () {
                var mod = "ace/mode/" + $("#node-input-format_{{field_name}}").val();
                editor_{{field_name}}.getSession().setMode({
                    path: mod,
                    v: Date.now()
                });
            });
            $('#node-input-format_{{field_name}}').val(this.{{field_name}}_format || '{{editor_format_default}}').trigger('change');
