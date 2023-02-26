// Gets year using Date() and returns the year. This allows the year to change without the user changing it yearly.
function cpyYr(){
  let date = new Date()
  let year = date.getFullYear();
  return year;
}

// adding function for footer text to be called using document.write()
function cpyMsg(){
  let msg = 'All Rights Reserved';
  return msg;
}


// Gets myName through input
function getName(){
  //Defaults name to a blank string
  let userName = "";
  
  // Loops through the prompt if the user does not enter a value AND clicks the okay button
  while (userName === ""){
  userName = prompt("Please Enter Your Name: ");
  }

  // Gives userName the value of "Visitor" if the cancel button is clicked.
  if (userName === null){
    userName = " Visitor";
  }

  return userName;
}

//Ask user if they want a personalized experience
function personalizedExp(){
  let choice = confirm("Do you want a personalized browsing experience?");
  let personalizedName;
  
  console.log(choice);

  //If the user click "Ok", calls getName() to ask for users name
  if (choice === true){
    personalizedName = getName();
  
  // logic if user clicks cancel during choice prompt
  } else {
    alert('No problem!');
    personalizedName = "Visitor";
  }

  // Alert that outputs personalizedName
  alert(`Your are viewing the page as ${personalizedName}.`);


  return personalizedName;
}

// Assigning value to displayName that will be used to document.write the name on top of page and in the .main-top section.
let displayName = personalizedExp();


function getRating(){
  // gets userInput using prompt; converts to integer and stores value in rating and declares star variable with blank string.
  let userInput = prompt("On a scale of 1-5, how would you rate this dessert?");
  let rating = parseInt(userInput);
  let stars = "";

  //Checks if user clicked cancel on prompt; if true, defaults rating to 0;
  if (userInput == null){
    rating = 0;
  } 
  
  //while loop to prompt user to input rating if their entry is anything other than a number. User sees an alert outputs the string entered.
  while (isNaN(rating) && userInput != null){ 
    rating = userInput;
    alert(`You typed "${rating}". That is not a valid response. Please try again!`);
    rating = prompt("On a scale of 1-5, how would you rate this dessert?");
    
  }

  //While loop to continiously prompt user to enter number until it is between 1- 5
  while (rating <= 0 || rating > 5){
    alert(`${rating} is not between 1 and 5. Please try again!`);
    rating = parseInt(prompt("On a scale of 1-5, how would you rate this dessert?"));
  }

  //outputs the number of stars based on what was entered in the rating prompt.
  for(i = 0; i < rating; i++){
    stars += "&starf;"
  }

  return stars;
}

// Functions to rate each item.
function rateCookies(){
  let star = getRating();
  let starSpan = document.getElementById("cookieRating");
  starSpan.innerHTML = star;
}

function rateBoxCake(){
  let star = getRating();
  let starSpan = document.getElementById("cakeRating");
  starSpan.innerHTML = star;
}

function rateIceCream(){
  let star = getRating();
  let starSpan = document.getElementById("iceCreamRating");
  starSpan.innerHTML = star;
}