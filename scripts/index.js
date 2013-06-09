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
		}
		
		login : function() {
			
		}
		
		logout : function() {
			
		}
	}
	Viewer.init();
});