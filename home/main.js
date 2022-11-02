var button = document.getElementById("search-btn")
var input = document.getElementById("search-inp")

button.onclick = function () {
    var value = input.value
    while(value.charAt(0) === " "){
        value = value.substring(1)
    }

    var query = "https://startpage.com/search?query="
    var full = query + value.replace(" ", "+")
    location.href = full
}

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      var value = input.value
      while(value.charAt(0) === " "){
          value = value.substring(1)
      }
  
      var query = "https://startpage.com/search?query="
      var full = query + value.replace(" ", "+")
      location.href = full
    }
  }); 