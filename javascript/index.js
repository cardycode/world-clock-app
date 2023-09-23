function updateTime() {
  // current

  let currentElement = document.querySelector("#current");
  if (currentElement) {
    let currentDateElement = currentElement.querySelector(".date");
    let currentTimeElement = currentElement.querySelector(".time");
    let currentNameElement = currentElement.querySelector(".current-h2");
    let currentTimeZone = moment.tz.guess();
    let currentTime = moment.tz(currentTimeZone);
    let currentName = currentTimeZone.replace("_", " ").split("/")[1];
    currentNameElement.innerHTML = currentName;
    currentDateElement.innerHTML = currentTime.format("dddd, MMMM Do YYYY");
    currentTimeElement.innerHTML = currentTime.format(
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
  setInterval(function () {
    let timeZone = event.target.value;
    if (timeZone === "current") {
      timeZone = moment.tz.guess();
    }
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(timeZone);
    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = `<a id = "all-city" href="/">Back</a><div
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
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#citySelect");
citySelectElement.addEventListener("change", updateCity);
