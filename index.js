// document.querySelector("button").addEventListener("click", handleClick);
/*sauthi pehla to find karse ae button ne pachi
aena andar apde event listener ne add kari daisu...
su karvanu 6e aema ke aene click karva par handle-click vado function ne call kari dese
*/
/*()--> nathi lagata karan ke jyare lagadisu tyare to ae simple function j bani jase ... */
// it is the passing the function in order to get it called

// function handleClick() {
//   alert("I got clicked !");
//

/*--------------------------------------------------------------- */
// anonyms function ne pan call kari sakai 6e-->
// document.querySelectorAll("button").addEventListener("click",function () {
//     alert("I got clicked !");
//   } );

/* ----------------------------------------*/
/*badha query selectors mate add kari do ne  */
// const box = document.querySelectorAll(".drum");
// for (let i = 0; i < box.length; i++) {
//   box[i].addEventListener("click", function () {
//     // alert("I got clicked !");
//     // var audio = new Audio("sounds/tom-1.mp3");
//     // audio.play();
//     var buttonInnerHtml=this.innerHTML;
//     this.style.color = white;
//     switch (buttonInnerHtml) {
//       case "w":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         console.log("0");

//         // code block
//         break;
//       case "a":
//         var kickBass = new Audio("sounds/kick-bass.mp3");
//         kickBass.play();
//         console.log("1");

//         break;
//       case "s":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         console.log("2");

//         break;
//       case "d":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         console.log("3");

//         break;
//       case "j":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         console.log("4");

//         break;
//       case "l":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         console.log("5");

//         break;
//       case "l":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         console.log("6 ");

//         break;

//       default:
//         console.log("hello it is not working ");
//         // code block
//     }
//   });
// }

var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {
      case "w":
        var s1 = new Audio("sounds/crash.mp3");
        s1.play();
        break;
      case "a":
        var s2 = new Audio("sounds/kick-bass.mp3");
        s2.play();
        break;
      case "s":
        var s3 = new Audio("sounds/snare.mp3");
        s3.play();
        break;
      case "d":
        var s4 = new Audio("sounds/tom-1.mp3");
        s4.play();
        break;
      case "j":
        var s5 = new Audio("sounds/tom-2.mp3");
        s5.play();
        break;
      case "k":
        var s6 = new Audio("sounds/tom-3.mp3");
        s6.play();
        break;
      case "l":
        var s7 = new Audio("sounds/tom-4.mp3");
        s7.play();
        break;
      default:
        prompt("Nahi vage sound ");
    }
  });
}

/*keypress mate su karvu joie --> badha eventListner na attributes are the lower case  */
// addEventListener("keypress", function (event) {
//   // alert("Key was pressed");
//   console.log(event);
// });

document.onkeydown = function (e) {
  // console.log('key down');
  // console.log(e);
  // alert("hellow -- > "+e.key)
  var char = e.key;
  switch (char) {
    case "w":
      // alert("hellow -- > "+e.key)
      var s1 = new Audio("sounds/crash.mp3");
      s1.play();
      break;
    case "a":
      var s2 = new Audio("sounds/kick-bass.mp3");
      s2.play();
      break;
    case "s":
      var s3 = new Audio("sounds/snare.mp3");
      s3.play();
      break;
    case "d":
      var s4 = new Audio("sounds/tom-1.mp3");
      s4.play();
      break;
    case "j":
      var s5 = new Audio("sounds/tom-2.mp3");
      s5.play();
      break;
    case "k":
      var s6 = new Audio("sounds/tom-3.mp3");
      s6.play();
      break;
    case "l":
      var s7 = new Audio("sounds/tom-4.mp3");
      s7.play();
      break;
    default:
      alert("Nahi vage sound ");
  }
};

function anotherAddEventListener(typeOfEvent, callBack) {
  // detect event code...
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeyPress: 2,
  };
  if (eventThatHappened.eventType == typeOfEvent) {
    callBack(eventThatHappened);
  }
}

/* */
anotherAddEventListener("keypress", function (event) {
  console.log(event);
});

/* */
function anotherAddEventListener2(typeOfEvent, callBack) {
  // typeOfEvent=
  var eventThatHappened2 = {
    eventType: "keypress",
    key: "p",
    durationOfKeyPress: 2,
  };

  if (eventThatHappened2.eventType == typeOfEvent) {
    callBack(eventThatHappened2);
  }
}

/*--------------------------to change and mess around the websites with friends --------------------------------- */
/*40.innerHTML="gungun script " */

/* 141.adding properties to the object*/
const houseKeeper1 = {
  fname: " Kinnari",
  lname: " Yogesh",
  age: 50,
  companyWorking: "Gungun City",
  happyToClean: ["washroom", "bathroom", "kitchen"],
};

/*factory that constructs a series of persons --> constructor function*/
function bellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.clean = function () {
    alert("Cleaning in progress!!");
  };
}

/*button as well as clicks par su thase --> animation :)  */
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  },100)
}
