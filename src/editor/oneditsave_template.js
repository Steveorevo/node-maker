            // Save code editor {{field_name}}
            this.{{field_name}}_format = $('#node-input-format_{{field_name}}').val();
            this.{{field_name}} = this.editor_{{field_name}}.getValue();
            this.editor_{{field_name}}.destroy();
            delete this.editor_{{field_name}};
