var shoppingList = [];
addbutton.onclick = addToList;

//Function to add items to array

function addToList() {
		var newItem = document.getElementById('item').value;
		var newPrice = parseFloat(document.getElementById('price').value);
			
		
		if (newItem === "") {
			alert("Please enter an item");
		}
		
		else if (isNaN(newPrice)) {
			alert("The price must be a number");
		}
		
		else {
			var obj = {
				item: newItem,
				price: newPrice
			};
			shoppingList.push(obj);
			var printList = document.createElement('p');
			printList.innerHTML = newItem + ":     $" + newPrice.toFixed(2);
			document.getElementById('list').appendChild(printList);
		}

		//Get total cost
		var totalCost = 0;
		for(var i = 0; i < shoppingList.length; i++) {
			totalCost += shoppingList[i].price;
		};

		//Put total cost into the html document
		document.getElementById('total').innerHTML = "Total: " + "$" + totalCost.toFixed(2);
	

		//clear the value in the txt field
		document.getElementById('item').value = "";
		document.getElementById('price').value = "";
	
};
















