function adjecentBombs(){
      //adjecent bombs
  for(let i = 0; i < grid.length; i++)
  {
    for(let j = 0; j < grid[i].length; j++)
    {
      if(grid[i][j] != "B")
      {
        var adjbmb = 0

        if(i > 0){
          if(grid[i - 1][j - 1] == "B")
          {
            adjbmb++
          }
          if(grid[i - 1][j] == "B")
          {
            adjbmb++
          }
          if(grid[i - 1][j + 1] == "B")
          {
            adjbmb++
          }
        } 
        
        if(j > 0)
          {
            if(grid[i][j - 1] == "B")
            {
              adjbmb++
            }
            if(grid[i][j + 1] == "B")
            {
              adjbmb++
            }
          }
        
          if(i < arraylength)
          {
            if(grid[i + 1][j - 1] == "B")
            {
              adjbmb++
            }
            if(grid[i + 1][j] == "B")
            {
              adjbmb++
            }
            if(grid[i + 1][j + 1] == "B")
            {
              adjbmb++
            }
          }
        grid[i][j] = adjbmb
      }
    }
  }
}


function drawBoard(){
    for(let i = 0; i < grid.length; i++)
    {
      for(let j = 0; j < grid[i].length; j++)
      {
        //coloring
        if(grid[i][j] == 0)
        {
          fill(240)
        }
        if(grid[i][j] == 1)
        {
          fill(0, 0, 220)
        }
        if(grid[i][j] == 2)
        {
          fill(0, 220, 0)
        }
        if(grid[i][j] == 3)
        {
          fill(220, 0, 0)
        }
        if(grid[i][j] == 4)
        {
          fill(50)
        }
        if(grid[i][j] == 5)
        {
          fill(110, 87, 53)
        }
        if(grid[i][j] == 6)
        {
          fill(69, 11, 74)
        }
        if(grid[i][j] == 7)
        {
          fill(220)
        }
        if(grid[i][j] == 8)
        {
          fill(100)
        }
        if(grid[i][j] == "B")
        {
          fill(0)
        }
  
  
        if(showgrid[i][j] == 1)
        {
          push()
            fill(240)
            noStroke()
            rect(30 * j + xOffsett - 4, 30 * i + yOffset - 14, 19.5, 19.5)
          pop()
        text(grid[i][j], 30 * j + xOffsett, 30 * i + yOffset)
        //print(grid[i[j]])
        }
        if(showgrid[i][j] == 2)
        {
          push()
          fill(255, 0, 0)
          rect(30 * j + xOffsett - 5, 30 * i + yOffset - 15, 20, 20)
          pop()
        }

        push()
        noFill()
        stroke(60)
        rect(i * 30 + xOffsett - 6, j * 30 + yOffset - 15, 20, 20)
        pop()
      }
    }
}

function uncoverSquare(y, x)
{
  showgrid[y][x] = 1;

    if(grid[y][x] == 0)
    {
      if(y > 0)
      {
        if(grid[y - 1][x + 1] != "B")
        {
          showgrid[y - 1][x + 1] = 1
        }
        if(grid[y - 1][x] != "B")
        {
          showgrid[y - 1][x] = 1
        }
        if(grid[y - 1][x - 1] != "B")
        {
          showgrid[y - 1][x - 1] = 1
        }
      }
        if(grid[y][x + 1] != "B")
        {
          showgrid[y][x + 1] = 1
        }
        if(grid[y][x - 1] != "B")
        {
          showgrid[y][x - 1] = 1
        }

      if(y < arraylength)
      {
        if(grid[y + 1][x + 1] != "B")
        {
          showgrid[y + 1][x + 1] = 1
        }
        if(grid[y + 1][x] != "B")
        {
          showgrid[y + 1][x] = 1
        }
        if(grid[y + 1][x - 1] != "B")
        {
          showgrid[y + 1][x - 1] = 1
        }
      }
    }
    if(grid[y][x] == "B")
    {
      failed = true
      for(let i = 0; i < grid.length; i++)
      {
        for(let j = 0; j < arraylength; j++)
        {
          if(grid[i][j] == "B")
          {
            showgrid[i][j] = 1
          }
        }
      }
    }
}

function generateBombs()
{
  for(let i = 0; i < grid.length; i++)
  {
    for(let j = 0; j < arraylength; j++)
    {
      grid[i][j] = 0
    }
  }
  for(let i = 0; i < bombAmmount; i++)
  {
    grid[round(random(arraylength))][round(random(arraylength))] = "B"
  }
}

function reset()
{
  failed = false
  bombsRemaining = bombAmmount
  generateBombs()

  for(let i = 0; i < showgrid.length; i++)
  {
    for(let j = 0; j < arraylength; j++)
    {
      showgrid[i][j] = 0
    }
  }
}