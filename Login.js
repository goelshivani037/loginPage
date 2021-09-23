function signin()
  {
    var myname = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(myname =='')
    {
      alert("please enter your email address.");
      return false;
    }
    else if(!filter.test(myname))
    {
      alert("Please enter valid email address");
      return false;
    }
    else if(pass=='')
    {
      alert("Enter your password");
      return false;
    }
    else if(pass.length < 16)
    {
      alert("Password length should be 16.");
      return false;
    }
    else
    {
      alert('Welcome to the website');
    }
}