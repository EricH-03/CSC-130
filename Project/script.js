function greeting() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pcode = document.getElementById("pcode").value;
  let borls = document.querySelector('input[name="borl"]:checked').value;
  let hives = document.getElementById("num").value;

  if (name.length === 0 || email.length === 0 || pcode.length === 0 || hives.length === 0) {
    alert("You didn't enter your information in all the boxes");
  } else {
    alert("Your name: " + name + ", your email: " + email +", you are a: "+ borls + ", your postal code: " + pcode + ", and the fact that you want/have: " + hives +" hives" +" has all been entered!" );
	window.location.reload();
	alert("Thank you for your help! We will get back to you as soon as possible! You will now be taken back to the home page");
	window.location.href = "Eric_Project.html";
  }
}