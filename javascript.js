function getName(firstName, lastName) {
  //cyclomatic complexity always starts from 1
  if (firstName && lastName) { //if operator, +1
    return firstName + ' ' + lastName;
  } else if (firstName) { // +1
    return firstName;
  } else if (lastName) { // +1
    return lastName;
  } else if (!firstName && !lastName) { // +1
    return 'stranger';
  }
  //total complexity is 5
}


function getNameOrFallback(name, fallback) {
  //complexity starts from 1
  return name || fallback; //|| operator, +1
  //total complexity is 2
}

function getNameRefactored(firstName, lastName) {
  //complexity starts from 1
  let name = '';
  if (firstName) { //if operator, +1
    name = firstName;
  }
  if (lastName) { // +1
    name += ' ' + lastName;
  }
  //even though complexity for getNameOrFallback is 2, it doesn't add up to complexity of current function
  return getNameOrFallback(name.trim(), 'stranger');
  //total complexity is 3
}



function getMarkupForError(error) {
  switch (error) {
  case 'validation-error':
    //...
    break;
  case 'network-error':
    //...
    break;
  case 'server-error':
    //...
    break;
  //... more cases
  default:
    //...handle unknown error
    break;
  }
  //arbitrary complex
}




function getMarkupForErrorWithElse(error) {
  if (error === 'validation-error') {/*...*/}
  else if (error === 'network-error') {/*...*/}
  else if (error === 'server-error') {/*...*/}
  //...more conditions
  else {/*...handle unknown error*/}
  //arbitrary complex
}


function getMarkupForError(error) {
  let errorTypeToMarkupMap = {
    'validation-error': function () {/*...*/},
    'network-error': function () {/*...*/},
    'server-error': function () {/*...*/}
  };
  if (errorTypeToMarkupMap.hasOwnProperty(error)) {
    return errorTypeToMarkupMap[error];
  }
  /*...handle unknown error*/
  //total complexity of this function will be 2
}


