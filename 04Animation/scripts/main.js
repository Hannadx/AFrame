

// // changing individual properties with code and using setInterval
 var rotationSpeed =0.01;
 var rotationSpeed2 =0.02;
 var myOtherBox = document.getElementById('myOtherBox');
 var myBox = document.getElementById('myBox');

function spin(){
	myOtherBox.object3D.rotation.x += -rotationSpeed;
	myOtherBox.object3D.rotation.y += 10*rotationSpeed;
	myOtherBox.object3D.rotation.z += 5*rotationSpeed;


	myBox.object3D.rotation.x += -2*-rotationSpeed;
	myBox.object3D.rotation.y += 3*rotationSpeed;
	myBox.object3D.rotation.z += -6*rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

 setInterval(spin, 16); //equivalent to 60 fps
