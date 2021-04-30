
'use strict';

let score = 0;
let username = prompt('what is your name ');
console.log(username);
alert(' welcome ' + username);

// ques1

function knowMe() {
  let ask1 = prompt('would you want to know who i am (yes,no) ?').toLowerCase();
  while (ask1 !== 'yes' && ask1 !== 'no'&& ask1 !== 'y' && ask1 !== 'n') {
    ask1 = prompt('please enter your answer(yes,no)').toLowerCase();
  }
  if (ask1 === 'yes') {
    // console.log ('yes');
    alert('your welcome');
    score++;

  } else if (ask1 === 'no') {
    alert('thank you');
  }
}
knowMe();


// ques2
function food() {
  let ask2 = prompt('pizza is my favorite food?').toUpperCase();
  while (ask2 !== 'YES' && ask2 !== 'NO'&& ask2 !== 'Y' && ask2 !== 'N') {
    ask2 = prompt('pizza is my favorite food?').toUpperCase();

  }
  if (ask2 === 'YES'|| ask2 === 'Y') {
    // console.log('you are right');
    alert('you are right');
    score++;
  } else if (ask2 === 'NO'|| ask2 === 'N') {
    alert('sorry its wrong');
  }
}
food();

//  ques3
function pets() {
  let ask3 = prompt('do i have a pet?').toLowerCase();
  while (ask3 !== 'yes' && ask3 !== 'no'&& ask3 !== 'y' && ask3 !== 'n') {
    ask3 = prompt('do i have a pet?').toLowerCase();
  }
  if (ask3 === 'yes'|| ask3 === 'y') {
    // console.log('correct');
    alert('correct');
    score++;
  } else if (ask3 === 'no'|| ask3 === 'n') {
    alert('wrong');
  }
}
pets();

// ques4
function book() {
  let ask4 = prompt('i prefer watching tv than reading book?').toLowerCase();
  while (ask4 !== 'yes' && ask4 !== 'no'&& ask4 !== 'y' && ask4 !== 'n') {
    ask4 = prompt('i prefer watching tv than reading book?').toLowerCase();
  }
  if (ask4 === 'yes'||ask4 === 'y') {
    // console.log('wrong i dont like watching tv');
    alert('wrong i dont like watching tv');

  } else if (ask4 === 'no'||ask4 === 'no') {
    alert('yes i prefer reading book');
    score++;
  }
}
book();

// ques5
function chocolate() {
  let ask5 = prompt('do i like chocolate?').toLowerCase();
  while (ask5 !== 'yes' && ask5 !== 'no'&& ask5 !== 'y' && ask5 !== 'n'){
    ask5 = prompt('do i like chocolate?').toLowerCase();
  }
  if ((ask5 === 'yes')||(ask5 === 'y') ) {
    // console.log('yes i like chocolate');
    alert('yes i like chocolate');
    score++;
  } else if (ask5 === 'no') {
    alert('oops this is wrong');
  }
}
chocolate();

// ques6
function sibling() {
  for (let i = 0; i < 4; i++) {
    let ask6 = Number(prompt('how many sibling do i have?'));
    if (ask6 === 3) {
      // console.log('this is right');
      alert('this is right');
      score++;
      break;

    } else if (ask6 < 4) {
      alert('too low');
      // console.log ('too low');
    } else {
      alert('too high');

    }
  }
  alert('the right answer is 3');
}
sibling();


// ques7
function catName() {
  let cats = ['za3tar', 'tofe', 'motche', 'soshi'];
  for (let i = 0; i < 6; i++) {
    let ask7 = prompt(' guess my cats name?').toLowerCase();
    if (cats.includes(ask7)) {
      // console.log('yes this is one of them');
      alert('yes this is one of them');
      score++;
      break;
    }
    else {
      alert(' wrong,you still have '+ (5-i) +' attempts ');
      // alert(` wrong,you still have ${5-i} attempts `);


    }
  }
  alert (cats);
}
catName();
alert('your score is= ' + score);
alert('good job , see you !');
































































