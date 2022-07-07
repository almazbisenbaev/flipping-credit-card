$(document).ready(function(){

    $(".card-number-input").keyup(function () {
        if (this.value.length == this.maxLength) {
          var nextInput = parseInt($(this).index(".card-number-input")) + 1;
          $(".card-number-input").eq(nextInput).focus(); 
        }
    });
  
    $(".card-number-input").eq(3).keyup(function () {
      if (this.value.length == this.maxLength) {
        $('.card-date-input').eq(0).focus();
      }
    }); 
    
    $(".card-date-input").keyup(function () {
      if (this.value.length == this.maxLength) {
        var nextInput = parseInt($(this).index(".card-date-input")) + 1;
        $(".card-date-input").eq(nextInput).focus(); 
      }
    });
    
    $(".card-date-input").eq(1).keyup(function () {
      if (this.value.length == this.maxLength) {
        $('.card').addClass('flipped');
        $('.card-cvc-input').eq(0).focus(); 
      }
    }); 
    
    $('#btn-back').on('click', function(){
      $('.card').removeClass('flipped');
      $('.card-number-input').eq(0).focus();
    });
  
});
