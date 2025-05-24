const weatherform=document.querySelector('.weatherform');
const cityinput=document.querySelector('.cityinput');
const card=document.querySelector('.card');
const apikey='5e026240a870a9cf9dd5e0c8000144c1';
weatherform.addEventListener('submit', async event=>{
    event.preventDefault();
    const city=cityinput.value;
    if(city){
        try{
            const weatherdata= await getweatherdata(city);
            displayweather(weatherdata);
        }
        catch(error){
            console.error(error);
            displayerror(error);
        }
    }
    else{
        displayerror('please Enter a city');
    }
});
async function getweatherdata(cityy){
    const apiui=`https://api.openweathermap.org/data/2.5/weather?q=${cityy}&appid=${apikey}`;
    const response= await fetch(apiui);
    if(!response.ok){
        throw new Error('could not fetch new data');
    }
    return await response.json();


}
function displayweather(data){
    const {name:city ,main:{temp,humidity}, weather:[{description,id}]}=data;
    card.textContent='';
    card.style.display='flex';
    const citydisplay=document.createElement('h1');
    const tempdisplay=document.createElement('p');
    const humiddisplay=document.createElement('p');
    const decdisplay=document.createElement('p');
    const weatheremoji=document.createElement('p');
    citydisplay.textContent=city;
    tempdisplay.textContent=`${((temp-273.15)*(9/5)+32).toFixed(1)}°F`;
    humiddisplay.textContent=`humidity:${humidity}%`;
    decdisplay.textContent=description;
    weatheremoji.textContent=getemoji(id);
    humiddisplay.classList.add('humiddisplay');
    citydisplay.classList.add('citydisplay');
    tempdisplay.classList.add('tempdisplay');
    decdisplay.classList.add('decdisplay');
    weatheremoji.classList.add('weatheremoji');
    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiddisplay);
    card.appendChild(decdisplay);
    card.appendChild(weatheremoji);


}
function getemoji(emo){
    switch(true){
        case(emo>=200&&emo<300):
            return '⛈';


        case(emo>=500&&emo<600):
            return '🌧';

        case(emo>=600&&emo<700):
            return '❄';

        case(emo>=700&&emo<800):
            return '';

        case(emo===800):
            return '🌞';

        case(emo>=801&&emo<810):
            return '☁';

        default:
            return '❓';
    }
}
function displayerror(message){
    const error = document.createElement('p');
    error.textContent = message;
    error.classList.add('errorcity');
    card.innerHTML = '';
    card.appendChild(error);
    card.style.display = 'flex';
}
