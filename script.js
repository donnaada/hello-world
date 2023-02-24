// Gets myName through input
function getName(){
  let userName = "";
  while (userName === "" || userName === null){
  userName = prompt("Please Enter Your Name: ");
  }
  return userName;
}

//Ask user if they want a personalized experience
function personalizedExp(){
  let choice = confirm("Do you want a personalized browsing experience?");
  let personalizedName;
  
  console.log(choice);

  if (choice === true){
    personalizedName = getName();
    
  } else {
    alert('No problem!');
    personalizedName = "Visitor";
  }

  alert('Your are viewing the page as ' + personalizedName);


  return personalizedName;
}

let displayName = personalizedExp();

function cpyYr(){
  let year = 2023;
  return year;
}

function cpyMsg(){
  let msg = 'All Rights Reserved';
  return msg;
}
