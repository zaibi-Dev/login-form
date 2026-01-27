function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let emailError =document.getElementById("emailError");
    let passError=document.getElementById("passError");
    let successMsj=document.getElementById("successMsj")
     emailError.innerText = "";
     passError.innerText = "";
     successMsg.innerText = "Not success";

     if (email === "") {
    emailError.innerText = "Email is required,plese entered";
    return;
  }

  if (!email.includes("@")) {
    emailError.innerText = "Invalid email";
    return;
  }
     if(password===""){
        passError.innerText="password is required";
        return;
     }
    if (password.length <6 )

        {
    passError.innerText="minimum 6 characters";
    return;
        }
    successMsg.innerText="login successfull";

}