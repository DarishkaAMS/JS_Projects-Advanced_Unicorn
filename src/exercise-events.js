// Fix code below. Prepare event handler using emitter. 
// Input is type of event, there are 3 types and 3 messages for each of them:
// "error" : "Error!"
// "success": "OK.Success!"
// "loading": "It's loading..."
// 
// Example 1
// input: "error"
// output: "Error!"
// 
// Example 2
// input: "success"
// output: "OK.Success!"

const Emitter = require("events");
const { emit } = require("process");

function main(eventType) {
  let emitter = new Emitter();
  let message = "";

  // Write your code
  //Solution 1 - with IF
  // emitter.on(eventType, function(){
  //   if (eventType === "error"){
  //     message = "Error!"
  //   } else if (eventType === "success"){
  //     message = "OK.Success!"
  //   } else if (eventType === "loading"){
  //     message = "It's loading..."
  //   }
  // })
  
  //Solution 2 - with 3 emitters
  emitter.on("error", function(){  
    message = "Error!"
  });
  emitter.on("success", function(){  
    message = "OK.Success!"
  });
  emitter.on("loading", function(){  
    message = "It's loading..."
  });


  emitter.emit(eventType);
  return message;
}

module.exports = main;