const xhr = new XMLHttpRequest();
document.getElementById("entry").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let ip = document.getElementById("entry").value;
    xhr.open("GET", `http://ip-api.com/json/${ip}`);
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          if (
            xhr.getResponseHeader("Content-Type").includes("application/json")
          ) {
            document.getElementById("Geo").innerHTML = xhr.responseText;
          } else {
            document.getElementById("Geo").innerHTML = JSON.parse(
              xhr.responseText
            );
          }
        } else {
          console.log(xhr.responseText);
        }
      }
    });
    xhr.send();
    document.getElementById("entry").value = "";
  }
});
