$(document).ready(function(){
    // Modals
    $('#loginBtn').click(function(){
      $('#loginModal').modal('show')
    })
    $('#reserveBtn').click(function(){
      $('#reserveModal').modal('show')
    })
    $("#loginBtn").click(function(){      
        $('#loginModal').modal('toggle');
    });
    $("#closebutton").click(function(){
        $('#loginModal').modal('hide');
    });
    $("#cancelbutton").click(function(){
        $('#loginModal').modal('hide');
    });
    $("#Reservebutton").click(function(){      
        $('#ReserveModal').modal('toggle');
    });
    $("#ReserveCancelButton").click(function(){
        $('#ReserveModal').modal('hide');
    });
    $("#ReserveCancelButtonDown").click(function(){
        $('#ReserveModal').modal('hide');
    });
    // Carousel
    $("#mycarousel").carousel( {
      interval: 1000
    })
    $("#carouselButton").click(function(){
      if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
      }
      else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
      }
    });
  });