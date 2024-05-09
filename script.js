const button = document.getElementById('button');
button.addEventListener("click",takeData);


function takeData (){
const input = document.getElementById('input');
if(input.value==""){
	alert("Anmol is pro");
}
else{
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input.value}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '63ea7abcd1mshd9dafe91c839162p19e965jsn27d9380717f6',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url,options)
	.then(response=> response.json())
	.then(output => chommu(output))
	
	document.querySelector('.top').style.display="none";
	
	 function chommu(a){
		console.log(a);
		const temp=document.getElementById('temp');
		const tempImg = document.getElementById('temp-img');
		temp.innerHTML=a.temp+"°C";
		document.querySelector('#bottem').style.display="flex";
		document.getElementById('wind').innerHTML=a.wind_speed+"km";
		document.getElementById('humidity').innerHTML=a.humidity+"%";
            if (a.temp > 30) {	
                tempImg.src="sun.png";
				tempImg.style.width="100px";
				document.getElementById('container').style.backgroundImage= "url('flat illustrator desert.jpg')";
				document.getElementById('container').style.backgroundPosition="center";
				document.getElementById('container').style.backgroundSize="cover";
				document.getElementById('main-box').style.backgroundImage= "url('body bakground.jpg')";
				document.getElementById('main-box').style.backgroundPosition="center";
            } else if (a.temp > 15) {
                tempImg.src = 'cloudy.png';
				tempImg.style.width="100px";
				document.getElementById('container').style.backgroundImage= "url('download.jpg')";
				document.getElementById('container').style.backgroundPosition="center";
				document.getElementById('container').style.backgroundSize="cover";
				document.getElementById('main-box').style.backgroundImage= "url('pexels-oandremoura-22710595.jpg')";
				document.getElementById('main-box').style.backgroundPosition="center";
				document.getElementById('humidity').style.color="white";
				
            } else {
                tempImg.src = 'cold_weather_image.jpg';
            }

	 }
}
}
