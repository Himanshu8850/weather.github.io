const city = document.getElementsByTagName('input')[0];
const but = document.getElementsByTagName('button')[0];
const cityspace = document.querySelector('.city');
const g = document.getElementsByTagName('img');
const h = document.getElementsByTagName('h4');
ha1 = h[0];
ha2 = h[1];
const container = document.getElementsByClassName('container')[0];
let data = "";
const we = document.getElementsByClassName("weather")[0];
const desc = document.getElementsByClassName("desc")[0];

const weathfind = async () => {

    cityspace.innerHTML = "Place : " + city.value;
    const web = "https://api.openweathermap.org/data/2.5/weather?q=";
    const key = "&appid=80a693d2d2c32bcd3687c080871eda2f";
    const cityweb = city.value;
    const res = await fetch(web + cityweb + key);
    const dat = await res.json();
    data = dat;
    city.value = "";
    desc.innerHTML = data.weather[0].description;
    ha1.innerHTML = Math.round(data.wind.speed) + " km/hr";
    ha2.innerHTML = Math.round(data.main.humidity) + "%";
    container.style.maxHeight = "600px";
    we.style.display = "block";
    const cond = data.weather[0].main.toLowerCase();
    g[0].src = `./images/${cond}.png`;
};
city.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        cityspace.innerHTML = city.value;
        weathfind();
    };
});
but.addEventListener('click', () => {
    cityspace.innerHTML = city.value;
    weathfind();
});
