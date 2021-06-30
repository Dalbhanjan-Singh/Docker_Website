function ajax(cmd) {
    document.getElementById("d2").innerHTML = "Command is being Executed, Please wait..."
    var xhr = new XMLHttpRequest();


    xhr.open("GET", "http://192.168.29.34/cgi-bin/docker.py?in1="+cmd, true);

    xhr.send();

    // Output from above url

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("d2").innerHTML = output;
    }


}

function printer(id) {
    var keyword = document.getElementById(id);
    return keyword.value;
}

