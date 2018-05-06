// Rover Object Goes Here
// ======================
var marsRover ={
  name : "rover1",
  direction : "N",
  x : 0,
  y : 0,
  prevX: 0,
  prevY: 0,
  prevDirection : "N",

}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!. current direction: "+rover.direction);
    
  switch (rover.direction){
    case "N":
      rover.prevDirection=rover.direction;
      rover.direction="W";
      break;
    case "S":
      rover.prevDirection=rover.direction;
      rover.direction="E";
      break;
    case "E":
      rover.prevDirection=rover.direction;
      rover.direction="N";
      break;
    case "W":
      rover.prevDirection=rover.direction;
      rover.direction="S";
      break; 
    default:
      console.log("wrong direction :" + rover.direction);
      break;
  }
  console.log("looking "+rover.direction+" - X:"+rover.x+"Y:"+rover.y);
}

function turnRight(rover){
  console.log("turnRight was called!. current direction: "+rover.direction);
  
  switch (rover.direction){
    case "N":
      rover.prevDirection=rover.direction;
      rover.direction="E";
      break;
    case "S":
      rover.prevDirection=rover.direction;
      rover.direction="W";
      break;
    case "E":
      rover.prevDirection=rover.direction;
      rover.direction="S";
      break;
    case "W":
      rover.prevDirection=rover.direction;
      rover.direction="N";
      break; 
    default:
      console.log("wrong direction :" + rover.direction);
      break;
  }
  console.log("looking "+rover.direction+" - X:"+rover.x+"Y:"+rover.y);
}

function moveForward(rover){
  console.log("moveForward was called. direction: "+rover.direction);

  switch (rover.direction){
    case "N":
      rover.prevY=rover.y;
      rover.y--;
      break;
    case "S":
      rover.prevY=rover.y;
      rover.y++;
      break;
    case "E":
      rover.prevX=rover.x;
      rover.x++;
      break;
    case "W":
      rover.prevX=rover.x;  
      rover.x++;
      break; 
    default:
      console.log("wrong direction :" + rover.direction);
      break;
  }
  console.log("looking "+rover.direction+" - X:"+rover.x+"Y:"+rover.y);
}

function route(rover,strRoute){
  console.log(rover);
  console.log(strRoute);

  for( var character in strRoute){
  
    console.log("processing route.  "+strRoute[character]);
  
    switch (strRoute[character]){
      case "l":
        console.log("<");
        turnLeft( rover);
        break;
      case "r":
        console.log(">");
        turnRight(rover);
        break;
      case "f":
        console.log("^");
        moveForward(rover);
        break;
      case "b":
        console.log("coming soon");
        /*moveBackward(rover)*/ 
        break; 
      default:
        console.log("wrong direction: "+strRoute[character]);
        break;
    }
  }
}

function status(rover){
  console.log(rover);
}