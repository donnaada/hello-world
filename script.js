let myName;
let year = 2023;

  if (confirm("Want to provide your name for a more personalized experience?","") ){

    myName = prompt("What is your name?");

    if (myName !== "" && myName !== null){
      alert("Hello " + myName +" :)");
      // visitorName.innerHTML = `Hi ${myName},`;
      document.write("You are viewing the page as " + myName);
    } else {
      alert("No problem :) We are still happy to have you here.")
      myName = "Guest";
      // visitorName.innerHTML = `Hi Guest,`;
      document.write('<span style="text-align:center; padding-right:5px;">If you would like for your name to be visible, simply refresh the page :)</span>')

    }
      
  } else {
    myName = "Guest";
    alert("No problem :)")
    document.write('<span style="text-align:center; padding-right:5px;">If you would like for your name to be visible, simply refresh the page :)</span>')
  }

