
var rover = {
  name: "Rover1",
  direction: "N",
  x: 4,
  y: 4,
  travelLog: [[4,4]]
  };
  



  function turnLeft(){
    switch (rover.direction) {
      case "N":
      rover.direction = "W";
      break;
      case "E":
      rover.direction = "N";
      break;
      case "S":
      rover.direction = "E";
      break;
      case "W":
      rover.direction = "S";
      break;  
    }
    console.log("turnLeft was called!");
  }


  function turnRight(){
    switch (rover.direction) {
      case "N":
      rover.direction = "E";
      break;
      case "E":
      rover.direction = "S";
      break;
      case "S":
      rover.direction = "W";
      break;
      case "W":
      rover.direction = "N";
      break;  
    }
    console.log("turnRight was called!");
  }


function moveForward(){

  var prevX = rover.x;
  var prevY = rover.y;


  if(rover.direction =="E"){
    rover.x+=1;
  }
  else if(rover.direction =="S"){
    rover.y-=1;
  }
  else if(rover.direction=="W"){
    rover.x-=1;
  }
  else if(rover.direction=="N"){
    rover.y+=1;
  }

  rover.travelLog.push([prevX, prevY]);

  console.log("Rover just moved forward. The new position is " +rover.travelLog[rover[travelLog.length]])
}

function moveBackward(){

  var prevX = rover.x;
  var prevY = rover.y;


  if(rover.direction =="E"){
    rover.x-=1;
  }
  else if(rover.direction =="S"){
    rover.y+=1;
  }
  else if(rover.direction=="W"){
    rover.x+=1;
  }
  else if(rover.direction=="N"){
    rover.y-=1;
  }

  rover.travelLog.push([prevX, prevY]);

  console.log(rover.travelLog)
}


function commands(command, rovermovement) {
  for (var i=0; i<command.length; i++){

    switch (command[i]) {
      case "f":
      moveForward(rovermovement);
      break;
      case "b":
      moveBackward(rovermovement);
      break;
      case "r":
      turnRight(rovermovement);
      break;
      case "l":
      turnLeft(rovermovement);
      break;
      default:
      console.log("you must enter a valid command(l, r or f)");
      break;
    }
  } 
  console.log(rovermovement);
}


