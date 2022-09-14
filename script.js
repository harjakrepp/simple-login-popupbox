//Copyright 2022 ©harjakrepp - All Right Reserved
//safe? NOPE. Just inspect, you'll find out the password right away
//Login Popup, created by harjakrepp

function loginBox(){
	var nameUser = prompt('Your Name');
	var userID = prompt('Your ID');
	//add ID in line 9 (userID == your ID)
	if(userID == 17465){
		var userPW = prompt('Your Password');
		//add Password in line 12 (userPW == your Password)
		if (userPW == 2005){
			//if the ID & Password is successful, it will display this
			alert('Welcome ' + nameUser + ' you have an Admin Access Control');
			//link goal
			document.getElementById("linkToAdminPage").innerHTML = "https://harjakrepp.is-a.dev/admin-page/user1/harjakrepp";
		} else{
			//if the Password is wrong, it will display this
			alert('Invalid Password');
		}
	} else{
		//if the ID is wrong, it will display this
		alert('Invalid ID');
	}
}

function copyright(){
	var copyright = alert('2022 harjakrepp - All Right Reserved');
	var credits = alert('Thanks to Web Programming UNPAS for the tutorials'); 
}