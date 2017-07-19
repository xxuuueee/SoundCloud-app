/* 1. Search the song*/
var UI = {};
var soundCloudAPI = {};


var search = document.querySelector('.input-search');
var submit = document.querySelector('.js-submit');
var reset = document.querySelector('#reset');
		
reset.addEventListener('click',function(){
	soundCloudAPI.removeSavedPlaylist();
		});

search.addEventListener('keyup', function(e){
	if(e.which==13){
		UI.enterPress(search.value);
	}
})

submit.addEventListener('click', function(){
	UI.SubmitClick(search.value);
})



UI.enterPress = function(searchVal){

	soundCloudAPI.getTrack(searchVal);
};



UI.SubmitClick = function(searchVal){
	soundCloudAPI.getTrack(searchVal);

};










soundCloudAPI.init = function() {
	SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

};

soundCloudAPI.init();



/* 2. query soundcloud api*/

soundCloudAPI.getTrack = function(inputValue){
	// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: inputValue
}).then(function(tracks) {
  console.log(tracks);
 
  soundCloudAPI.deleteSearch();
  soundCloudAPI.renderCards(tracks);
});



};

/* deletes past searches*/
soundCloudAPI.deleteSearch = function(){
	var searchResults = document.querySelector(".search-results");

	searchResults.innerHTML="";
}


/* 3. display the cards*/
soundCloudAPI.renderCards = function(tracks){
	
	var searchResults = document.querySelector(".search-results");


	tracks.forEach(function(track){
		

		/*cards*/
		var card = document.createElement('div');
		card.classList.add("card");
		

		

		/*images*/
		var imageDiv = document.createElement('div');
		imageDiv.classList.add('image');

		var image_img = document.createElement('img');
		image_img.classList.add("image-img");
		image_img.src = track.artwork_url || 'javascript/images.jpeg';
		

		
		
		/*content*/
		var content = document.createElement('div');
		content.classList.add("content");

		var header = document.createElement('div');
		header.classList.add("header");


		header.innerHTML = "<a href=\"" + track.permalink_url + "\" target='_blank'> \"" + track.title + "\" </a>";

		/*button*/
		var button = document.createElement('div');
		button.classList.add("ui", "bottom", "attached", "button", "js-button");
		button.innerHTML = "<i class='add icon'></i> <span>Add to playlist</span>";
		button.addEventListener('click', function(){
			soundCloudAPI.addToPlaylist(track);
			});

		

		/*appending childs*/
		searchResults.appendChild(card);
		searchResults.appendChild(reset);
		card.appendChild(imageDiv);
		imageDiv.appendChild(image_img);
		card.appendChild(content);
		content.appendChild(header);
		card.appendChild(button);

	});


	
	
}


/* 4. add to playlist and play*/
soundCloudAPI.addToPlaylist = function(track){
	SC.oEmbed(track.permalink_url, {
    			auto_play: false
				}).then(function(embed){
  		var playlist = document.querySelector(".js-playlist");
	

	var box = document.createElement('div');
	box.innerHTML = embed.html;
	playlist.appendChild(box);

	//playlist.insertBefore(box, playlist.firstChild);
	localStorage.setItem("key", playlist.innerHTML);



});
			
	
};		
var playlist = document.querySelector(".js-playlist");
playlist.innerHTML = localStorage.getItem("key");

soundCloudAPI.removeSavedPlaylist = function(){

	playlist.innerHTML= localStorage.clear();
};



