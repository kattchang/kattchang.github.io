
     (function() {

        var quotes = $(".words");
        var quoteIndex = -1;

        function showNextQuote() {
            ++quoteIndex;
            quotes.eq(quoteIndex % quotes.length)
                .fadeIn(2000)
                .delay(2000)
                .fadeOut(2000, showNextQuote);
        }

        showNextQuote();

    })();

    var textToShow = ['Im a huge fan of Studio Ghibli movies, especially My Neighbor Totoro and Howls Moving Castle.', 'I draw inspiration from the realms of Tumblr. ', 'People-watching is something I enjoy doing when Im at cafes, restaurants, and parks.', 'Ever since I visited a beach in Taiwan with millions of holes in the sand, I realized I have trypophobia.']
    $(document).ready(function() {
        $("#funfact").html(textToShow[Math.floor(Math.random()*textToShow.length)]);
    });

        

    $(document).ready(function(){
        $("imghover").hover(function(){
            $(this).css("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "pink");
        });
    });
