function getFormvalue() {
    //Write your code here
	const fname = document.getElementById("fname");
	const lname = document.getElementById("lname");
	const submit = document.getElementById("submit");
	fname.value = "Rishabh";
	lname.value = "Pant";
	alert(fname.value + lname.value);

}
