function getH(sn){ 
	xmlhttp= new XMLHttpRequest()
	pagedata = $id("p"+(sn-1)).getAttribute("data-page");
	resu.push(pagedata);
	var ti = 0;

	enfurl = "?f=" + $id("Url").value + "&img=" + pagedata + "&isMobile=" + $id("IsMobi").value + "&readLimit=" + $id("ReadLimit").value + "&sn=" + sn + "&furl=" + $id("Furl").value;
	xmlhttp.open("GET", pathName() + "/GetPage" + enfurl, true); xmlhttp.send(); 

	ti++; sn++;
	xmlhttp.onreadystatechange = function () { if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {  
		pagedata=JSON.parse(xmlhttp.responseText).NextPage;
		resu.push(pagedata);
		var enfurl; if ($id("VID") != null) { enfurl = "?f=" + $id("Url").value + "&img=" + pagedata + "&isMobile=" + $id("IsMobi").value + "&vid=" + $id("VID").value + "&dk=" + $id("Dk").value + "&ver=" + $id("Ver").value + "&sn=" + sn; } else { enfurl = "?f=" + $id("Url").value + "&img=" + pagedata + "&isMobile=" + $id("IsMobi").value + "&readLimit=" + $id("ReadLimit").value + "&sn=" + sn + "&furl=" + $id("Furl").value; }
		sn++; xmlhttp.open("GET", pathName() + "/GetPage" + enfurl, true); xmlhttp.send(); 
	}
}
}
