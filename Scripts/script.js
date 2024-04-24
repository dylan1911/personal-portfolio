/*
	Student Name: Dylan Mcfaddin
	File Name: script.js
	Date: 4/15/24
*/

	//Hamburger menu Function
	function hamburger() {
		var menu = document.getElementById("menu-links");
		if (menu.style.display === "block"){
			menu.style.display = "none";
		} else {
			 menu.style.display = "block";
		}
	}