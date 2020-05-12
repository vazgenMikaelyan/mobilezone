jQuery(document).ready(function($) {
    $(".index").find('li').each(function() {
        $(this).tooltip({
            content: $(this).children('span').text(),
            position: {
                my: "center bottom-10",
                at: "center top",
                using: function(position, feedback) {
                    $(this).css(position);
                    $("<div>")
                            .addClass("arrow")
                            .addClass(feedback.vertical)
                            .addClass(feedback.horizontal)
                            .appendTo(this);
                }
            }
        });
    });

    $(".open_packages").click(function() {
        $(this).hide();
        $(this).parents('.packages_options').find('.close_packages').show();
        $(this).parents('.packages_options').children('table').show();
    });

    $(".close_packages").click(function() {
        $(this).hide();
        $(this).parents('.packages_options').find('.open_packages').show();
        $(this).parents('.packages_options').children('table').hide();
    });

    $(".startdata").children('input').datepicker({
        changeMonth: false,
        numberOfMonths: 1,
        gotoCurrent: true,
        showAnim: "slideDown",
        firstDay: 1,
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        beforeShow: function(input, inst) {
            if ($('#ui-datepicker-div').hasClass("ui-datepicker-endData")) {
                $('#ui-datepicker-div').removeClass("ui-datepicker-endData");
            }
            $('#ui-datepicker-div').addClass("ui-datepicker-startData");
            var calendrier = inst.dpDiv;
            var top = $(this).offset().top + $(this).outerHeight() + 10;
            var left = $(this).offset().left;
            setTimeout(function() {
                calendrier.css({'top': top, 'left': left});
            }, 10);
        },
        onClose: function(selectedDate) {
            $(".endData").datepicker("option", "minDate", selectedDate);
        }
    });
    $(".endData").children('input').datepicker({
        changeMonth: false,
        numberOfMonths: 1,
        gotoCurrent: true,
        showAnim: "slideDown",
        firstDay: 1,
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        beforeShow: function(input, inst) {
            if ($('#ui-datepicker-div').hasClass("ui-datepicker-startData")) {
                $('#ui-datepicker-div').removeClass("ui-datepicker-startData");
            }
            $('#ui-datepicker-div').addClass("ui-datepicker-endData");
            var calendrier = inst.dpDiv;
            var top = $(this).offset().top + $(this).outerHeight() + 10;
            var left = $(this).offset().left;
            setTimeout(function() {
                calendrier.css({'top': top, 'left': left});
            }, 10);
        },
        onClose: function(selectedDate) {
            $(".startdata").datepicker("option", "maxDate", selectedDate);
        }
    });




    $("#save_continue_block > button").click(function(e) {
        e.preventDefault();
        //  e.stopPropagation();

   
        $("#ui-login-dialog").dialog({
            width: 570,
            modal: true,
            resizable: false,
            dialogClass: 'ui-forgot-passw',

        });
    });
    $(".login > a").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('clicked');
        $(this).parent().children('div').toggle();
        
        $("#dialog").dialog({
            width: 570,
            heigth: 500,
            resizable: false,
            modal: true,
            dialogClass: 'ui-forgot-passw',
            beforeClose: function(event, ui) {
                $("#forg").hide();
            }
        });
    });

    $("#faqs").children('li').each(function() {
        $(this).click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').children('div').slideUp();
            }
            else {
                $(this).addClass('active').children('div').slideDown();
            }

            if ($(this).siblings().hasClass('active')) {
                $(this).siblings().removeClass('active').children('div').slideUp();
                // $(this).siblings().children('div').slideDown();
            }
        });
    });
    if ($('#about_us').length) {
        $('#about_us').jScrollPane({
            hideFocus:true,
            showArrows: true,
            stickToBottom: true,
            verticalArrowPositions: 'os'
        });
    }
    $("#about_redme").click(function(e) {
        e.preventDefault();

        
        $("#ui-about-dialog ").show().dialog({
            width: 780,
            height:700,
            modal: true,
            resizable: false,
            dialogClass: 'ui-forgot-passw ui-redme',
            beforeClose: function(event, ui) {
                $("#forg").hide();
            }
        }).children('div').jScrollPane({
            hideFocus:true,
            showArrows: true,
            scrollbarWidth:20,
            stickToBottom: true,
            verticalArrowPositions: 'os'
        });
    });    
});