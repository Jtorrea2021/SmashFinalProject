$( document ).ready(function() {
    console.log( "ready!" );

    $('#summaryPikachu').on('click', function(e) {
      console.log('button was clicked')
      $('#pikachuModal').modal('show');
    });

    $('#summaryLittleMac').on('click', function(e) {
      console.log('button was clicked')
      $('#littleMacModal').modal('show');
    });

    $('#summarySonic').on('click', function(e) {
      console.log('button was clicked')
      $('#sonicModal').modal('show');
    });

});
