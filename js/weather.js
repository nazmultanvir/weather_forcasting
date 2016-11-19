	
   var api_url= "https://api.wunderground.com/api/587de3d5e203a550/conditions/q/BD/"   
   
   
   
	//Dhaka weather json 
	var weather_dhaka = new XMLHttpRequest();
	var dhaka ="Dhaka.json"
	weather_dhaka.open("GET",api_url+dhaka, false);
	weather_dhaka.send(null);
	var r_dhaka = JSON.parse(weather_dhaka.response);
	var temp_dhaka = r_dhaka.current_observation.temp_c + "&#176;C";
	var icon_dhaka = r_dhaka.current_observation.icon_url;
	document.getElementById("temp_dhaka").innerHTML = temp_dhaka;
	document.getElementById("icon_dhaka").src = icon_dhaka;
	
	
	//Khulna weather json 
	var weather_khulna = new XMLHttpRequest();
	var khulna ="khulna.json"
	weather_khulna.open("GET",api_url+khulna, false);
	weather_khulna.send(null);
	var r_khulna = JSON.parse(weather_khulna.response);
	var temp_khulna = r_khulna.current_observation.temp_c + "&#176;C" + "</br>";
	var icon_khulna = r_khulna.current_observation.icon_url;
	document.getElementById("temp_khulna").innerHTML = temp_khulna;
	document.getElementById("icon_khulna").src = icon_khulna;

	//chittagong weather json 
	var weather_chittagong = new XMLHttpRequest();
	var chittagong ="chittagong.json"
	weather_chittagong.open("GET",api_url+chittagong, false);
	weather_chittagong.send(null);
	var r_chittagong = JSON.parse(weather_chittagong.response);
	var temp_chittagong = r_chittagong.current_observation.temp_c + "&#176;C" + "</br>";
	var icon_chittagong = r_chittagong.current_observation.icon_url;
	document.getElementById("temp_chittagong").innerHTML = temp_chittagong;
	document.getElementById("icon_chittagong").src = icon_chittagong;



	//Barisal weather json 
	var weather_Barisal = new XMLHttpRequest();
	var Barisal ="Barisal.json"
	weather_Barisal.open("GET",api_url+Barisal, false);
	weather_Barisal.send(null);
	var r_Barisal = JSON.parse(weather_Barisal.response);
	var temp_Barisal = r_Barisal.current_observation.temp_c + "&#176;C" + "</br>";
	var icon_Barisal = r_Barisal.current_observation.icon_url;
	document.getElementById("temp_Barisal").innerHTML = temp_Barisal;
	document.getElementById("icon_Barisal").src = icon_Barisal;



	//rajshahi weather json 
	var weather_rajshahi = new XMLHttpRequest();
	var rajshahi ="rajshahi.json"
	weather_rajshahi.open("GET",api_url+rajshahi, false);
	weather_rajshahi.send(null);
	var r_rajshahi = JSON.parse(weather_rajshahi.response);
	var temp_rajshahi = r_rajshahi.current_observation.temp_c + "&#176;C" + "</br>";
	var icon_rajshahi = r_rajshahi.current_observation.icon_url;
	document.getElementById("temp_rajshahi").innerHTML = temp_rajshahi;
	document.getElementById("icon_rajshahi").src = icon_rajshahi;

//sylhet weather json 
	var weather_sylhet = new XMLHttpRequest();
	var sylhet ="Dhaka.json"
	weather_sylhet.open("GET",api_url+sylhet, false);
	weather_sylhet.send(null);
	var r_sylhet = JSON.parse(weather_sylhet.response);
	var temp_sylhet = r_sylhet.current_observation.temp_c + "&#176;C" + "</br>";
	var icon_sylhet = r_sylhet.current_observation.icon_url;
	document.getElementById("temp_sylhet").innerHTML = temp_sylhet;
	document.getElementById("icon_sylhet").src = icon_sylhet;