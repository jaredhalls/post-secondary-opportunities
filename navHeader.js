// Importing code from navHeader.html
  function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText;
  }

load("navHeader.html", document.getElementById("runNavHeader"));
