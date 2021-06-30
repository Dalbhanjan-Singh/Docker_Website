function dockercmd(){

var i = document.getElementById("in1").value

var xhr = new XMLHttpRequest();

xhr.open("GET" , "http://192.168.29.34/cgi-bin/docker.py?in1="+i,true);

xhr.send();

xhr.onload = function (){
	var output = xhr.responseText;
	document.getElementById("d1").innerHTML = output;
}

}
