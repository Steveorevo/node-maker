            // Prepare editableList for {{rgroup_name}}
            $("#node-input-{{rgroup_name}}-container").css('height', '{{rgroup_height}}px').editableList({
                addItem: function (container, i, opt) {
                    let repeatingFields = {{{rgroup_details}}};
                    let html = $('#rgroup-{{rgroup_name}}-template').html();
                    repeatingFields.forEach(function(rf) {
                        let fniType = "{{rgroup_name}}" + rf.field_name + "Type" + String(i).padStart(3, '0');
                        html = html.replaceAll('id="node-input-' + rf.field_name + "Type" + '"', 'id="node-input-' + fniType + '"');
                        let fni = "{{rgroup_name}}" + rf.field_name + String(i).padStart(3, '0');
                        html = html.replaceAll('id="node-input-' + rf.field_name + '"', 'id="node-input-' + fni + '"');
                        html = html.replaceAll('for="node-input-' + rf.field_name + '"', 'for="node-input-' + fni + '"');
                        container.html(html);
                    });
                    repeatingFields.forEach(function (rf) {
                        let fni = "{{rgroup_name}}" + rf.field_name + String(i).padStart(3, '0');
                        if (rf.field_types != '') {
                            let fniType = "{{rgroup_name}}" + rf.field_name + "Type" + String(i).padStart(3, '0');
                            $("#node-input-" + fni).typedInput({
                                type: rf.field_default_type,
                                types: rf.field_types,
                                typeField: "#node-input-" + fniType
                            });
                        }else if(rf.hasOwnProperty('field_min')) {
                            $("#node-input-" + fni).spinner({ min: rf.field_min, max: rf.field_max });
                        }

                        // Restore entry
                        if (Object.keys(opt).length != 0) {
                            if ($("#node-input-" + fni).attr('type') == 'hidden') {
                                $("#node-input-" + fni).typedInput('type', opt[rf.field_name + 'Type']);
                                $("#node-input-" + fni).typedInput('value', opt[rf.field_name]);
                            }else{
                                if ($("#node-input-" + fni).attr('type') == 'checkbox') {
                                    $("#node-input-" + fni).prop('checked', opt[rf.field_name]);
                                }else{
                                    $("#node-input-" + fni).val(opt[rf.field_name]);
                                }
                            }
                        }else{
                            if ($("#node-input-" + fni).attr('type') == 'hidden') {
                                $("#node-input-" + fni).typedInput('value', rf.field_default);
                            } else {
                                if ($("#node-input-" + fni).attr('type') != 'checkbox') {
                                    $("#node-input-" + fni).val(rf.field_default);
                                }
                            }
                        }
                    });
                },
                // sortItems: function (items) {
                //    
                // },
                sortable: {{rgroup_sortable}},
                removable: true
            });

            // Load prior editableList data for {{rgroup_name}}
            if (this.{{rgroup_name}}) {
                this.{{rgroup_name}}.forEach(function (m) {
                    $('#node-input-{{rgroup_name}}-container').editableList('addItem', m);
                });
            }
