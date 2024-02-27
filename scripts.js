var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".software");
var month = document.querySelector(".total");
var year = document.querySelector(".hardware");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "software"){
			today.style.display = "block";
		}
		else if(currenttab == "total"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}

	})
})