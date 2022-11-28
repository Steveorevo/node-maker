            // Prepare selectbox {{field_name}}
            $("#node-input-{{field_name}}").typedInput({
                types: [
                    {
                        value: "{{field_name}}",
                        {{{selectbox_multiple}}}
                        options: [
{{{field_values}}}
                        ]
                    }
                ]
            });
