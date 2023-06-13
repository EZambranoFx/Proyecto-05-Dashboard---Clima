(function () {
  let URL = "";
  fetch(
    "https://api.open-meteo.com/v1/gfs?latitude=-2.14&longitude=-79.97&hourly=temperature_2m&daily=sunrise&timezone=auto"
  )
    .then((response) => response.json())
    .then((data) => {
        let timezone=data["timezone"]
        let timezoneHTML=document.getElementById("timezone")
        timezoneHTML.textContent=timezone

        let timezone_abbreviation=data["timezone_abbreviation"]
        let timezone_abbreviationHTML=document.getElementById("timezone_abbreviation")
        timezone_abbreviationHTML.textContent=timezone_abbreviation

        let elevation=data["elevation"]
        let elevationHTML=document.getElementById("elevation")
        elevationHTML.textContent=elevation

        let longitude=data["longitude"]
        let latitude=data["latitude"]
        let locationHTML=document.getElementById("location")
        locationHTML.textContent=latitude+", "+longitude

        let generationtime_ms=data["generationtime_ms"]
        let generationtime_msHTML=document.getElementById("generationtime_ms")
        generationtime_msHTML.textContent="Generated in "+generationtime_ms+" ms"
      /*console.log(data);*/
    })
    .catch(console.error);
})();
