$(function () {

  var navMain = $("#navbarContent");

  var nb = $(".navbar-brand");

  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });

  nb.on("click", function () {
    navMain.collapse('hide');
  });

});












jQuery(document).ready(function () {

  $( "#proposed_date" ).datepicker();

  jQuery('#bappt').click(function (e) {
    e.preventDefault();


    var name = $("#name").val();
    if (name == "") {
      // alert("Name not Filled")
      sweetAlert('Error', 'Kindly fill your name', 'error');
      return false;
    }
    var email = $("#email").val();
    if (email == "") {
      sweetAlert('Error', 'Your email is empty', 'error');
      return false;
    }
    var phone = $("#phone").val();
    if (phone == "") {
      sweetAlert('Error', 'Enter your Phone number', 'error');
      return false;
    }

    var proposed_date = $("#proposed_date").val();
    if (proposed_date == "") {
      sweetAlert('Error', 'Enter a valid date', 'error');
      return false;
    }
    if (new Date(proposed_date) === NaN) {
      sweetAlert('Error', 'Enter a valid date', 'error');
      return false;
    }


    var subject = $("#subject").val();
    if (subject == "") {
      sweetAlert('Error', 'You forgot to enter the subject', 'error');
      return false;
    }

    var message = $("#message").val();
    if (message == "") {
      sweetAlert('Error', 'Kindly enter a brief message', 'error');
      return false;
    }



    jQuery.ajax({

      type: 'POST',
      url: "sendemail.php",
      data: {
        name: jQuery('#name').val(),
        email: jQuery('#email').val(),
        subject: jQuery('#subject').val(),
        phone: jQuery('#phone').val(),
        proposed_date: jQuery('#proposed_date').val(),
        message: jQuery('#message').val(),

      },
      success: function (result) {


        jQuery('#name').val("")
        jQuery('#email').val("")
        jQuery('#subject').val("")
        jQuery('#message').val("")
        jQuery('#phone').val("")
        jQuery('#proposed_date').val("")


        sweetAlert('Success', 'Your appointment Request sent successfully, you will receive communication from us soon', 'success');
      },
      error: function (jqXHR, textStatus, errorThrown) { 

        sweetAlert('Error', 'Your appointment had a error, please try again', 'error');
        window.location.reload()
      }

    });
  });












  $(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });








  // var typed = $(".typed");

  // $(function() {
  //   typed.typed({
  //     strings: ["DENTAL CENTER."],
  //     typeSpeed: 100,
  //     loop: true,
  //   });
  // });


  var typed = new Typed('.typed', {
    strings: ["ULTIMATE DENTAL CENTER."],
    typeSpeed: 100,
    loop: true,
  });

var typed1 = new Typed('.typed1', {
    strings: ["ULTIMATE DENTAL CENTER."],
    typeSpeed: 100,
    loop: true,
  });

var typed2= new Typed('.typed2', {
    strings: ["ULTIMATE DENTAL CENTER."],
    typeSpeed: 100,
    loop: true,
  });





     wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    // document.getElementById('moar').onclick = function() {
    //   var section = document.createElement('section');
    //   section.className = 'section--purple wow fadeInDown';
    //   this.parentNode.insertBefore(section, this);
    // };

});