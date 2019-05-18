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

    $('#summaryMario').on('click', function(e) {
      console.log('button was clicked')
      $('#marioModal').modal('show');
    });

    $('#summarySheik').on('click', function(e) {
      console.log('button was clicked')
      $('#sheikModal').modal('show');
    });

    $('#summaryBayonetta').on('click', function(e) {
      console.log('button was clicked')
      $('#bayonettaModal').modal('show');
    });

    $('#summaryDonkeyKong').on('click', function(e) {
      console.log('button was clicked')
      $('#donkeyKongModal').modal('show');
    });

    $('#summaryGanondorf').on('click', function(e) {
      console.log('button was clicked')
      $('#ganondorfModal').modal('show');
    });

    $('#summaryKingKRool').on('click', function(e) {
      console.log('button was clicked')
      $('#kingKRoolModal').modal('show');
    });

    $('#summaryYoungLink').on('click', function(e) {
      console.log('button was clicked')
      $('#youngLinkModal').modal('show');
    });

    $('#summarySnake').on('click', function(e) {
      console.log('button was clicked')
      $('#snakeModal').modal('show');
    });

    $('#summarySimon').on('click', function(e) {
      console.log('button was clicked')
      $('#simonModal').modal('show');
    });

    $('#summaryMarth').on('click', function(e) {
      console.log('button was clicked')
      $('#marthModal').modal('show');
    });

    $('#summaryOlimar').on('click', function(e) {
      console.log('button was clicked')
      $('#olimarModal').modal('show');
    });

    $('#summaryCloud').on('click', function(e) {
      console.log('button was clicked')
      $('#cloudModal').modal('show');
    });

    $('#summaryYoshi').on('click', function(e) {
      console.log('button was clicked')
      $('#yoshiModal').modal('show');
    });

    $('#summaryJigglypuff').on('click', function(e) {
      console.log('button was clicked')
      $('#jigglypuffModal').modal('show');
    });

    $('#summaryPirahnaPlant').on('click', function(e) {
      console.log('button was clicked')
      $('#pirahnaPlantModal').modal('show');
    });

    $('#summaryPokemonTrainer').on('click', function(e) {
      console.log('button was clicked')
      $('#pokemonTrainerModal').modal('show');
    });

    $('#summaryShulk').on('click', function(e) {
      console.log('button was clicked')
      $('#shulkModal').modal('show');
    });

    $('#summaryJoker').on('click', function(e) {
      console.log('button was clicked')
      $('#jokerModal').modal('show');
    });

    $('#choosePikachu').on('click', function(e) {
      console.log('button was clicked')
      const character = $(e.target)[0].dataset.name
      const imgURL = $(`img#${character}`)[0].src
      $.ajax({
        method: "POST",
        url: `/user/set-character`,
        data: {
          character: character,
          imgURL: imgURL,
        }
      }).done(function(response) {
        console.log(response)
        window.location = '/home'
      });
    });

});
