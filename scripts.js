var tabs = document.querySelectorAll(".lboard_tabs ul li");
var task1 = document.querySelector(".task1");
var task2 = document.querySelector(".task2");
var task3 = document.querySelector(".task3");
var total = document.querySelector(".total");
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

		if(currenttab == "task1"){
			task1.style.display = "block";
		}
		else if(currenttab == "task2"){
			task2.style.display = "block";
		}
		else if(currenttab == "task3"){
			task3.style.display = "block";
		}
		else{
			total.style.display = "block";
		}

	})
})