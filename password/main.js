const { createApp } = Vue

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function generate(length){
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = "1234567890"
    var special = "!\"§$%&/()=?`*'_:;,.-#+\\@€"
    var password = "";

    //letters
    for (var i = 0; i <= length/3; i++) {
        var randomNumber = Math.floor(Math.random() * letters.length);
        password += letters.substring(randomNumber, randomNumber +1);
    }

    //numbers
    for (var i = 0; i <= length/3; i++) {
        var randomNumber = Math.floor(Math.random() * numbers.length);
        password += numbers.substring(randomNumber, randomNumber +1);
    }

    //special characters
    for (var i = 0; i <= length/3; i++) {
        var randomNumber = Math.floor(Math.random() * special.length);
        password += special.substring(randomNumber, randomNumber +1);
    }


    return password.shuffle()
}

createApp({
  data() {
    return {
      password: generate(15)
    }
  }
}).mount("#app")