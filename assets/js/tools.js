!function() {
  function fillEmail() {
      $(".email").html(decode('<n uers="znvygb:yrbaneq.ebhffry@tznvy.pbz">yrbaneq.ebhffry@tznvy.pbz</n>'));
  };

  function decode(s){
    return s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
  };

  function yourThings() {
  	var things = [ 	"idea",
  					"drawing", 
  					"video game", 
  					"theater play", 
  					"movie script",
  					"haircut",
  					"chair",
  					"installation",
  					"piece",
  					"boyfriend",
  					"girlfriend",
  					"passion",
  					"crazy thought",
  					"dog",
  					"cat",
  					"book",
  					"story",
  					"favorite thing",
  					"artwork",
  					"big thing",
  					"job",
  					"video",
  					"movie",
  					"website",
  					"app",
  					"sculpture",
  					"painting",
  					"house",
  					"studio",
  					"musical instruments",
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
  					"backyard",
  					"pool",
  					"design",
  					"drawing",
  					"bicycle",
  					"diet",
  					"discovery",
  					"plans",
  					"project",
  					"spiritual practice",
  					"collaboration",
  					"festival",
  					"masterplan",
  					"podcast" ];
  	// $(".your-thing").html(things[0]);
  	
  	// METHOD 1
  	// setTimeout(() => {  $(".your-thing").html(things[1]); }, 1000);
  	// setTimeout(() => {  $(".your-thing").html(things[2]); }, 2000);

  	// METHOD 2
  	sleep(5000).then(() => { shuffle(things); });

  	async function shuffle(array) {  		
  		while(true){
  			array.sort(() => Math.random() - 0.5);

	  		for (var i = array.length - 1; i >= 0; i--) {
	  			$(".your-thing").html(things[i]);
	  			await sleep(1000);
	  		}
	  	}
  	}
  }

  $(document).ready(function(){
    fillEmail();
    yourThings();
  })
}();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

