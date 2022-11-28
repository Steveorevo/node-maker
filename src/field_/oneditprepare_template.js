            // Prepare field {{field_name}}
            $("#node-input-{{field_name}}").typedInput({
                type: "{{{field_default_type}}}",
                types: {{{field_types_s}}},
                typeField: "#node-input-{{field_name}}Type"
            });
