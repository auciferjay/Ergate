document.addEventListener('DOMContentLoaded', function() {
    var $ = function(id) { return document.getElementById(id); }
	
	var Viewer = {
		$LoginLayer:$('LoginLayer'),
		init : function() {
			Viewer.$LoginLayer.style.display = "none";
			if ( window.localStorage ) {
				if ( window.localStorage.getItem("token") ) {
					Viewer.$LoginLayer.style.display = "none";
				} else {
					Viewer.$LoginLayer.style.display = "";
				}
			}
			$('Submit').onclick = function() {
				Viewer.login();
			}
		},
		login : function() {
			var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if ( xmlhttp.readyState == 4 ) {// 4 = "loaded"
						if ( xmlhttp.status == 200 ) {// 200 = OK
							// ...our code here...
						} else {
							//alert("Problem retrieving XML data");
						}
					}
				};
				xmlhttp.open("POST", "http://localhost/login?name=000", true);
				xmlhttp.send("name="+$('UserName').value+"&pswd="+$('PassWord').value);
		},
		logout : function() {
			var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if ( xmlhttp.readyState == 4 ) {// 4 = "loaded"
						if ( xmlhttp.status == 200 ) {// 200 = OK
							// ...our code here...
						} else {
							//alert("Problem retrieving XML data");
						}
					}
				};
				xmlhttp.open("GET", "http://localhost/logout", true);
				xmlhttp.send(null);
		}
	}
	Viewer.init();
});