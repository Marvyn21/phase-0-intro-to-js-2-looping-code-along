// Code your solutions in this file
function writeCards(names) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  

  function countDown(num){
    let i = num;
    while(i >= 0){
        console.log(i);
        i--;
    }
  }

  countDown();