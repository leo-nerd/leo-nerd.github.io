!function() {

  $(document).ready(function(){
    // noWidow();
    fillEmail();
    yourThings();
  })
}();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function noWidow() {
    $("p,a,b").each(function() {
      var wordArray = $(this).text().split(" ");
      if (wordArray.length > 1) {
        wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
        wordArray.pop();
        $(this).html(wordArray.join(" "));
      }
    });
  }

  function fillEmail() {
      $(".email").html(decode('<n uers="znvygb:uryyb@yrbaneqebhffry.pbz">uryyb@yrbaneqebhffry.pbz</n>'));
  };

  function decode(s){
    return s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
  };

  function yourThings() {
    var things = [  "idea",
            "drawing", 
            "artist friend",
            "video game", 
            "theater play", 
            "movie script",
            "haircut",
            "installation",
            "piece",
            "boyfriend",
            "girlfriend",
            "crazy thought",
            "book",
            "story",
            "favorite thing",
            "artwork",
            "big thing",
            "job",
            "diet",
            "video",
            "movie",
            "website",
            "app",
            "sculpture",
            "painting",
            "house",
            "studio",
            "musical instrument",
            "dance performance",
            "light show",
            "conference",
            "exhibition",
            "research",
            "record",
            "release",
            "sound",
            "building",
            "space",
            "soundtrack",
            "party",
            "design",
            "bicycle",
            "discovery",
            "breakthrough",
            "plans",
            "spiritual practice",
            "collaboration",
            "festival",
            "masterplan",
            "podcast" ];

    sleep(5000).then(() => { shuffle(); });

    async function shuffle() {      
      while(true){
        things.sort(() => Math.random() - 0.5);

        for (var i = Math.floor(things.length/2) - 1; i >= 0; i--) {
          $(".your-thing").html(things[i]);
          await sleep(300);
        }

        $(".your-thing").html("project");
        await sleep(5000);
      }
    }
  };
