'use strict'

let username = prompt("what is your name ")
console.log(username);
alert(" welcome " + username);

// ques1
let ask1 = prompt("would you want to know who i am (yes,no) ?").toLowerCase()
while (ask1 !== "yes" && ask1 !== "no") {
    ask1 = prompt("please enter your answer(yes,no)").toLowerCase();
}
if (ask1 === "yes") {
    alert("your welcome");
    
} else if (ask1 === "no") {
    alert("thank you");
}

// ques2
let ask2 = prompt("pizza is my favorite food?").toUpperCase()
while (ask2 !== "YES" && ask2 !== "NO") {
    ask2 = prompt("pizza is my favorite food?").toUpperCase();

}
if (ask2 === "YES") {
    alert("you are right");
    // score =score + 1
} else if (ask2 === "NO") {
    alert("sorry its wrong");
}

//  ques3
let ask3 = prompt("do i have a pet?").toLowerCase()
while (ask3 !== "yes" && ask3 !== "no") {
    ask3 = prompt("do i have a pet?").toLowerCase();
}
if (ask3 === "yes") {
    alert("correct");
    // score =score + 1
} else if (ask3 === "no") {
    alert("wrong");
}

// ques4
let ask4 = prompt("i prefer watching tv than reading book?").toLowerCase()
while (ask4 !== "yes" && ask4 !== "no") {
    ask4 = prompt("i prefer watching tv than reading book?").toLowerCase();
}
if (ask4 === "yes") {
    alert("wrong i dont like watching tv");

} else if (ask4 === "no") {
    alert("yes i prefer reading book");
    // score =score + 1
}

// ques5
let ask5 = prompt("do i like chocolate?").toLowerCase()
while (ask5 !== "yes" && ask5 !== "no") {
    ask5 = prompt("do i like chocolate?").toLowerCase();
}
if (ask5 === "yes") {
    alert("yes i like chocolate");
    // score =score + 1
} else if (ask5 === "no") {
    alert("oops this is wrong");
}

// ques6

for (let i = 0; i < 4; i++) {
    let ask6 = Number(prompt("how many sibling do i have?"))
    if (ask6 === 3) {
        alert("this is right")
        // score =score + 1
        break;

    } else if (ask6 < 4) {
        alert("too low")
        
    } else {
        alert("too high")
       
    }
}

// ques7
let cats = ["za3tar", "tofe", "motche", "soshi"];
for (let i = 0; i <=6; i++) {
    let ask7 = prompt(" guess my cats name?").toLowerCase();
    if (cats.includes(ask7)) {
     
        alert ("yes this is one of them")
        score =score + 1
        break;
    }
 else  {
     alert("wrong")
 
 }}alert("your score is="+ score)

































































