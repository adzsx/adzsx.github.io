document.getElementById("reboot").style.display = "none"
document.getElementById("notFound").style.display = "none"
document.getElementById('restart-btn').addEventListener('click', restartServers);

function restartServers() {
    const randomDelay = Math.floor(Math.random() * 10) + 1;
  
    document.getElementById("title").innerHTML = 'restarting the server...';
  
    setTimeout(() => {
      document.getElementById("title").innerHTML = '';
      document.getElementById("reboot").style.display = "none"
      document.getElementById("notFound").style.display = "block"
    }, randomDelay * 1000);
}

function shutdown() {
    localStorage["restart"] = "1"
    let seconds = 5

    const countdownInterval = setInterval(() => {
        if (seconds > 0) {
            document.getElementById('meltdown').innerText = `SERVER SHUTDOWN IN ${seconds} SECONDS`
            seconds--
        } else {
        clearInterval(countdownInterval)
        document.getElementById('meltdown').innerText = 'SERVER SHUTTING DOWN...'

        const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
        setTimeout(() => {
            document.getElementById('meltdown').style.color = '#000000'
            document.getElementById('meltdown').style.backgroundColor = '#000000'
            document.getElementById('meltdown').innerText = ''
            document.getElementById("reboot").style.display = "block"


        setTimeout(() => {
            document.getElementById('meltdown').innerText = ''
        }, 5000)
      }, randomDelay)
    }
  }, 1300)
}

function notFound(){
    document.getElementById("notFound").style.display = "block"
    document.getElementById("reboot").style.display = "none"
    document.getElementById("shutdown").style.display = "none"
}

if (localStorage["restart"] != "0"){
    shutdown()
}else{
    notFound()
}