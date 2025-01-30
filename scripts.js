const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://ip-geo-location.p.rapidapi.com/ip/23.123.12.11?format=json&language=en"
);
xhr.withCredentials(true);
xhr.setRequestHeader(
  "x-rapidapi-key",
  "d193cb7ffcmshfa1b9b0ce1f640fp1affc0jsn4740b843d824"
);
xhr.setRequestHeader("x-rapidapi-host", "ip-geo-location.p.rapidapi.com");
xhr.addEventListener =
  ("readystatechange",
  function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        if (xhr.getResponseHeader("Content-Type") === "application/json") {
          document.getElementById("Geo").innerHTML = JSON.parse(
            xhr.responseText
          );
        }
      }
    }
  });
xhr.send();
