            // Prepare radio group {{radio_group}}
            let v = $('#node-input-{{radio_group}}').val();
            $('input[name="{{radio_group}}"]').attr('checked', false);
            $('#{{radio_group}}-' + v).attr('checked', true);
