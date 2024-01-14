let grid = [
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0]
           ]

let showgrid = [
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0],
            [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0]
           ]


cursorX = 0
cursorY = 0

arraylength = grid[0].length - 1

failed = false


yOffset = 150
xOffsett = 150

bombAmmount = 40
bombsRemaining = bombAmmount
function setup() 
{
  createCanvas(800, 800);
  generateBombs()
  adjecentBombs()
}


function draw() 
{
  background(140);
  drawBoard()
  adjecentBombs()

  //cursor
  push()
  noFill()
  rect(30 * cursorX + xOffsett - 5, 30 * cursorY + yOffset - 15, 20, 20)
  pop()


  push()
  textSize(30)
  fill(255)
  text(bombsRemaining, xOffsett + 200, yOffset - 50)
  pop()
}


function keyPressed()
{
      //cursor movement
      if(keyCode == 87 && cursorY > 0)
      {
        //w
        cursorY -= 1
      }

      if(keyCode == 83 && cursorY < arraylength)
      {
        //s
        cursorY += 1
      }

      if(keyCode == 65 && cursorX > 0)
      {
        //a
        cursorX -= 1
      }

      if(keyCode == 68 && cursorX < arraylength)
      {
        //d
        cursorX += 1
      }

  //uncover squares (enter)
  if(keyCode == 13)
  {
    if(failed == false)
    {
      uncoverSquare(cursorY, cursorX)
    } else {
      reset()
    }


  }


  //flags
  //space
  if(keyCode == 32)
  {
    showgrid[cursorY][cursorX] = 2
    bombsRemaining--
  }
}
