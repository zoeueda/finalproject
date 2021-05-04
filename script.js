let body = document.getElementsByTagName("body");

let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

inputElement.addEventListener("keydown", function(event){
		if (event.key == "Enter"){
			console.log(inputElement.value);

			let name = inputElement.value;

			inputElement.value = "";

			for (let i=0; i < name.length; i++) {
				console.log(i); 
				let letter = name[i];
				console.log(letter);


				if (["a", "b", "c"].includes(letter)){
					body.style.backgroundColor= "red";
					// let gradient= "linear-gradient(-45deg, #ffd973)"
				}

				if (["d","e","f"].includes(letter)){
					
				}

				if (["g","h","i"].includes(letter)){
				}

				if (["j","k","l"].includes(letter)){
				}

				if (["m","n","o"].includes(letter)){
				}

				if (["p","q","r"].includes(letter)){

				}

				if (["s","t","u"].includes(letter)){
				}

				if (["w","x"].includes(letter)){
				}

				if (["y","z"].includes(letter)){
				}

			}
		}

	});

//circles 



// function checkKeyPress(key){
// 	if(key.keyCode =="65"){
// 		setBackgroundColor('red');
// 	}
// }

// document.addEventListener("keydown", function(event)
// {
// 	console.log(event);
// 	console.log("what did we just press:")
// 	console.log(event.key)


// }
