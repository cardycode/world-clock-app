function updateTime() {
  //berlin

  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTime.format("dddd, MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss[<span class='APM'>] A [</span>]"
    );
  }
  //sydney

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss[<span class='APM'>] A [</span>]"
    );
  }
  //vancouver

  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");
    vancouverDateElement.innerHTML = vancouverTime.format("dddd, MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "h:mm:ss[<span class='APM'>] A [</span>]"
    );
  }
}

function updateCity(event) {
  let timeZone = event.target.value;
  let cityName = timeZone.split("/")[1];
  let cityTime = moment().tz(timeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<a id = "all-city" href="index.html"> All cities</a><div
          class="city"
          id=""
        >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss[<span class='APM'>] A [</span>]"
          )}</div>
          
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#citySelect");
citySelectElement.addEventListener("change", updateCity);
