/* CURRENTLY IN: styles/main.css */
html, body {
	height: 100%;
	width: 100%;
	min-height: 100%;
	background: linear-gradient(to right, #4AC29A, #BDFFF3);

}




#soundcloud-player .col {

	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
}

#soundcloud-player .col-left {
	width: 20%;
	height: 100%;
	background-color: #4AC29A;
	
	overflow: auto;

	position: fixed;
	left: 0;
	top: 0;

	min-width: 200px;
	z-index: 1;
}

#title h1{
	
	font-family: 'Permanent Marker', cursive;

	letter-spacing:2px;
	font-size: 9vw;
	padding-left: 20%;
	position:center;
	
}

#soundcloud-player #reset{
	margin-top: 5%;
	width: 20%;
	font-family: 'Permanent Marker', cursive;
	background-color:#c2185b;
	color:white;

	

	
	
}

#soundcloud-player .col-right {
	
	width: 100%;
	height: 100%;
	
	overflow: auto;

	position: fixed;
	left: 0;
	top: 0;

	box-sizing: border-box;
	padding-left: 20%;
}

#soundcloud-player .main {

	box-sizing: border-box;
	padding: 30px;
	margin: 30px;
	margin-top: 0%;
}

#soundcloud-player .input {
	width: 100%;
}

#soundcloud-player .input-search {
	width: 100%;
	display: block;
	font-family: 'Permanent Marker', cursive;
}

#soundcloud-player .search.icon {
	pointer-events: initial;
	cursor: pointer;
}

#soundcloud-player .search-results {
	justify-content: center;
    margin-top: 30px;
}
