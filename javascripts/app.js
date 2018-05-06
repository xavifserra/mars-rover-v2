// Rover Object Goes Here
// ======================
var marsRover =  {
  direction : "N",
  x : 0,
  y : 0,
 travelLog : ["X0Y0"], //posición de salida
}
var board =  [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
];    //tablero de juego

// ======================
// test para probar los límites, direcciones y orientacion en forward y backward
// route(marsRover,"rffffffffffffffrffffffffffffffffffrfffffffffffffffffffffrfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbblbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbblbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbblbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
// con status(marsRover) vemos solo las 80 posiciones del perimetro en travelLog
//======================

function turnLeft(rover){           //giro izquierda
//  console.log("turnLeft was called!. current direction: "+rover.direction);
    
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
//  console.log("looking "+rover.direction+" - X:"+rover.x+"Y:"+rover.y);
}
function turnRight(rover){          //giro derecha
//  console.log("turnRight was called!. current direction: "+rover.direction);
  if (!collision(rover)){ 
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
  // console.log("looking "+rover.direction+" - X:"+rover.x+"Y:"+rover.y);
  }
  else{
    console.log("collision detected");
  }
}

function moveForward(rover){        //desplazamiento hacia adelante
//  console.log("moveForward was called. direction: "+rover.direction);
  if (!collision(rover)){
    switch (rover.direction){
    case "N":
      if (rover.y>0){
        rover.y--;
        rover.travelLog.push('X'+rover.x+'Y'+rover.y);
      }
    break;
    case "S":
      if (rover.y<10){
        rover.y++;
        rover.travelLog.push('X'+rover.x+'Y'+rover.y);
      }
    break;
    case "E":
    if (rover.x<10){
      rover.x++;
      rover.travelLog.push('X'+rover.x+'Y'+rover.y);
    }
    break;
    case "W":  
    if (rover.x>0){
      rover.x--;
      rover.travelLog.push('X'+rover.x+'Y'+rover.y);
    }
    break; 
    default:
      console.log("wrong direction :" + rover.direction);
      break;
    }
    // console.log("looking "+rover.direction+" - X:"+rover.x+"Y:"+rover.y);
  }
  else{
    console.log("collision detected");
  }
}
function moveBackward(rover){       //desplazamiento hacia atrás
  console.log("moveBackward was called. direction: "+rover.direction);
    switch (rover.direction){
    case "N":
      if (rover.y<10){
        rover.y++;
        rover.travelLog.push('X'+rover.x+'Y'+rover.y);
      }
    break;
    case "S":
      if (rover.y>0){
        rover.y--;
        rover.travelLog.push('X'+rover.x+'Y'+rover.y);
      }
    break;
    case "E":
    if (rover.x>0){
      rover.x--;
      rover.travelLog.push('X'+rover.x+'Y'+rover.y);
    }
    break;
    case "W":  
    if (rover.x<10){
      rover.x++;
      rover.travelLog.push('X'+rover.x+'Y'+rover.y);
    }
    break; 
    default:
      console.log("wrong direction :" + rover.direction);
      break;
    }
  console.log("looking "+rover.direction+" - X:"+rover.x+"Y:"+rover.y);
}
function route(rover,strRoute){     //recorridos formato l, r, f, b

  for( var character in strRoute){  
    console.log("processing route.  "+strRoute[character]);

    switch (strRoute[character]){
      case "l":
        turnLeft(rover);
      break;
      case "r":
        turnRight(rover);
      break;
      case "f":
        moveForward(rover);
      break;
      case "b":
        moveBackward(rover);
      break; 
      default:
        console.log("wrong direction: "+strRoute[character]);
      break;
    }
  }
}
function set(rover, xInit, yInit){  //posicionar el rover en cualquier parte del tablero
  if(xInit>0&&xInit<10){
    rover.x=xInit;    
  }
  if(yInit>0&&yInit<10){
    rover.y=yInit;
  }
}
function status(rover){             //presenta en consola el Objeto 
  console.log(rover);
}

function collision(rover){          //detector de colisiones
  return  (board[rover.x],[rover.y]==1)
}

function putObstacle(xCoord, yCoord){ // poner un obstaculo en el tablero
  if ((xCoord>0 && xCoord<10) && (yCoord>0 && yCoord<10)){
    board[xCoord][yCoord]=1;
  }
  else{
    console.log('values 0 to 10')
  }
}

function printBoard(){    //presenta el tablero
  console.log(board);
}