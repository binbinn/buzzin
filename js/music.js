// Menu-toggle button

$(document).ready(function() {
    $(".nav-icon").click(function() {
          $(".nav-icon").toggleClass('active');
          $("nav ul").toggleClass('showing');
    })
})

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

//music

//I:songs
//O:play songs, change icon, bar&time as current value

//list all the songs
// var songArr = ['/Users/binbin/Documents/buzzin/songs/BirthdayCover.mp3', '/Users/binbin/Documents/buzzin/songs/BustDown.mp3', '/Users/binbin/Documents/buzzin/songs/HoodViolation.mp3', '/Users/binbin/Documents/buzzin/songs/JohnQ.mp3', '/Users/binbin/Documents/buzzin/songs/Know.mp3', '/Users/binbin/Documents/buzzin/songs/TooHard.mp3'];

// var songTitle = document.getElementById("songTitle");
// var fillBar = document.getElementById("fill");

// var song = new Audio();
// var currentSong = 0;

// window.onload = playSong;


//user press the play button
    //play the first song
    //change icon to pause
    // $(function() {
    //     $('#play').click(function() {
    //       $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_pause.png)');
    //     });
    //   })
    //song title on Demo
    //moving bar
    //change current time

//user press the pause button
    //pause the song
    //change icon to play

//user press the song title
    //play the song
    //change icon to pause
    //song title on Demo
    //moving bar
    //change current time


    
    
    // function playOrPauseSong() {
    //     if(song.paused) {
    //         song.play();
    //         $("#play img").attr("src","/Users/binbin/Documents/buzzin/img/icons_pause.png");
    //     }
    //     else{
    //         song.pause();
    //         $("#play img").attr("src","/Users/binbin/Documents/buzzin/img/icons_play.png");
    //     }
    // }
    
    // var song = new Audio();
    // var currentSong = 0;
    
    // funtion playSong() {
        //     song.src = songs[currentSong];
        //     songTitle.textContent = songs[currentSong];
        //     song.play();
        // }
        
    // song.addEventListener()