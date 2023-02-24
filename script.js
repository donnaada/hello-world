function cpyYr(){
  let date = new Date()
  let year = date.getFullYear();
  return year;
}

function cpyMsg(){
  let msg = 'All Rights Reserved';
  return msg;
}


// Gets myName through input
function getName(){
  let userName = "";
  while (userName === ""){
  userName = prompt("Please Enter Your Name: ");
  }
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

  if (choice === true){
    personalizedName = getName();
    
  } else {
    alert('No problem!');
    personalizedName = "Visitor";
  }

  alert(`Your are viewing the page as ${personalizedName}.`);


  return personalizedName;
}

let displayName = personalizedExp();


function getRating(){
  let rating = parseInt(prompt("On a scale of 1-5, how would you rate this dessert?"));
  let stars = "";

  if (isNaN(rating)){
    alert(`${rating} is not a number`);
  }else if(rating < 0 || rating > 5){
    alert(`${rating} is not between 1-5`);
  } else {
    for(i = 0; i < rating; i++){
      stars += "&starf;"
    }
  }
  return stars;
}

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