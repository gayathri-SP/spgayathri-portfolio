$(jQuery).ready(function () {
    $(".menu").click(function () {
        $('.nav-menu').removeClass('active');
    });
    $(".close").click(function () {
        $('.nav-menu').addClass('active');
    });

    $('#Email-add').hide();
    $('#first').hide();
    $('#subject').hide();


    var firstname = "";
    $("#first-name").on("focusin", function () {
        $('#first').hide();
    });
    $("#first-name").on("focusout", function () {
        firstname = $(this).val();
        if (firstname === "") {
            $('#first').show();
        }
        else {
            $('#first').hide();
        }
    });
    $("#email").on("focusin", function () {
        $('#Email-add').hide();
        $("#email").on("focusout", function () {
            $('#Email-add').show();
        });
    });
    $("#email").on("keyup", function () {
        firstname = $(this).val();
        var TestEmailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (TestEmailPattern.test(input)) {
            $("#Email-add").hide();
        }
        else {
            $("#Email-add").show();
        }
    });


    var subject = "";
    $("#sub").on("focusin", function () {
        $('#subject').hide();
    });
    $("#sub").on("focusout", function () {
        subject = $(this).val();
        if (subject === "") {
            $('#subject').show();
        }
        else {
            $('#subject').hide();
        }
    });


});