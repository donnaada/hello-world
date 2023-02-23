// Gets myName through input
function getName(){
  // let userName = "";
  // while (userName === "" || userName === null){
  // userName = prompt("Please Enter Your Name: ");
  // }

  let userName = prompt("Please Enter Your Name: ");
  return userName;

  // while (userName === "" || userName === null){
  // userName = prompt("Please Enter Your Name: ");
  // }
  // return userName;
}

//Ask user if they want a personalized experience
function personalizedExp(){
  let choice = confirm("Do you want a personalized browsing experience?");
  let personalizedName;

  console.log(choice);

  //if user wants personalized experience (clicked okay)
  if (choice === true){
    
    personalizedName = getName();

    //Check if personalizedName from getName() is blank
    if (personalizedName === ""){
      alert ("You didnt enter a name. Please try again");
      getName();

    //Check if personalizedName from getName() is null (cancel was clicked)
    } else if (personalizedName === null){
      alert ("Uh-oh! Looks like you changed your mind");

      let tryAgain = confirm("Did you want to try again?");

      if (tryAgain === true){
        personalizedName = getName();

        if (personalizedName === null || personalizedName === ""){
          personalizedName = "Visitor"
        }
        
      } else {
        personalizedName = "Visitor";
        // alert("3No problem, you'll be viewing as a " + personalizedName);
      }

    //Check if personalizedName from getName() had a value
    } else {
      console.log('Hi ' + personalizedName + " :)");
    }

   

  //User clicked Cancel
  } else {
    personalizedName = "Visitor";
    alert('Not a problem!');
  }

  alert("You are entering the site as " + personalizedName);
  

  return personalizedName;
}

let displayName = personalizedExp();

function cpyYr(){
  let year = '2023';
  return year;
}

function cpyMsg(){
  let msg = 'All Rights Reserved';
  return msg;
}
