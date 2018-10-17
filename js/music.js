

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
var audio1 = new Audio('/Users/binbin/Documents/buzzin/songs/HoodViolation.mp3');
var audio2 = new Audio('/Users/binbin/Documents/buzzin/songs/Know.mp3');
var audio3 = new Audio('/Users/binbin/Documents/buzzin/songs/JohnQ.mp3');
var audio4 = new Audio('/Users/binbin/Documents/buzzin/songs/TooHard.mp3');
var audio5 = new Audio('/Users/binbin/Documents/buzzin/songs/BustDown.mp3');
var audio6 = new Audio('/Users/binbin/Documents/buzzin/songs/BirthdayCover.mp3');

// HoodViolation
$(function() {
    $('#play1').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_play.png)');
        audio1.play();
        spin();
    });
    $('#pause1').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_pause.png)');
        audio1.pause();
        $('#record').stop();
    });
    
})
audio1.addEventListener('timeupdate',function(){ 
    var position = audio1.currentTime / audio1.duration;
    fill.style.width = position * 100 +'%';
});

//Know
$(function() {
    $('#play2').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_play.png)');
        audio2.play();
        spin();
    });
    $('#pause2').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_pause.png)');
        audio2.pause();
        $('#record').stop();
    });
})
audio2.addEventListener('timeupdate',function(){ 
    var position = audio2.currentTime / audio2.duration;
    fill.style.width = position * 100 +'%';
});

// JohnQ
$(function() {
    $('#play3').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_play.png)');
        audio3.play();
        spin();
    });
    $('#pause3').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_pause.png)');
        audio3.pause();
        $('#record').stop();
    });
})
audio3.addEventListener('timeupdate',function(){ 
    var position = audio3.currentTime / audio3.duration;
    fill.style.width = position * 100 +'%';
});

// TooHard
$(function() {
    $('#play4').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_play.png)');
        audio4.play();
        spin();
    });
    $('#pause4').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_pause.png)');
        audio4.pause();
        $('#record').stop();
    });
})
audio4.addEventListener('timeupdate',function(){ 
    var position = audio4.currentTime / audio4.duration;
    fill.style.width = position * 100 +'%';
});

// BustDown
$(function() {
    $('#play5').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_play.png)');
        audio5.play();
        spin();
    });
    $('#pause5').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_pause.png)');
        audio5.pause();
        $('#record').stop();
    });
})
audio5.addEventListener('timeupdate',function(){ 
    var position = audio5.currentTime / audio5.duration;
    fill.style.width = position * 100 +'%';
});

// BirthdayCover
$(function() {
    $('#play6').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_play.png)');
        audio6.play();
        spin();
    });
    $('#pause6').click(function() {
        $(this).css('background-image', 'url(/Users/binbin/Documents/buzzin/img/icons_pause.png)');
        audio6.pause();
        $('#record').stop();
    });
})
audio6.addEventListener('timeupdate',function(){ 
    var position = audio6.currentTime / audio6.duration;
    fill.style.width = position * 100 +'%';
});

function spin() {
    $('#record').animate(
        {deg: 10800 },
        {duration: 60000,
        step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }}
    );
}

    