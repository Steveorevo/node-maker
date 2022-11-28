            // Prepare button group {{field_name}}
            $(".{{field_name}}").on("click", function () {
                $(".{{field_name}}").removeClass("selected");
                $(this).addClass("selected");
                $('#node-input-{{field_name}}').val($(this).val());
            });
            $('button.{{field_name}}[value="' + $('#node-input-{{field_name}}').val() + '"]').addClass("selected");
