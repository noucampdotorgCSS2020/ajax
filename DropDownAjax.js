var xmlhttp;  // reference to XMLHttpRequest object

window.onload=function(){
	// add code for dropdown box onchange here	
	
}

function getAjaxData()
{	
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function (){
		showAjaxData();
	};

	// add code for Ajax call here
	
	// xmlhttp.open("GET",??????,true);
	// xmlhttp.send();	
}

function showAjaxData()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;		
	}
}
