// generate a lookup tabe with sin values
// this sim uses double, so try keeping all values below 1
import {Dot} from './Dot';

// A list of dots, the entire simulation collection
//let World = [];

//hardcoded testDots
var dot1 = new Dot(-1, 0, 1, 1, 0, -0.001);
var dot2 = new Dot(0, 0, 1000000, 1, 0, 0);
let World = [dot1, dot2];
//World.Add(new Dot(-10, 0, 100000, 1, 0, -0.02));

//good to haves
let timestep = 1;
let count = 0;

//set up the canvas to draw the dots on
const canvas = document.getElementById('#canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//the main simulation loop
for (let i = 0; i<10; i++)
{
	for(let i = 0; i<World.length; i++)
	{
		World[i].Update(World, timestep);
	}
    //draw the dots
    //DrawingTools.DrawDots(World, count++);

    console.log("X:" + World[0].Xcoord + " Y:" + World[0].Ycoord + " Speed: "+ World[0].Speed);
}



function DrawDot(ctx, x, y, radius, fill, stroke, strokeWidth) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
  }

export function DrawAllDots(ctx)
{
    for(let i = 0; i< World.length; i++)
    {
        DrawDot(ctx, World[i].Xcoord, World[i].Ycoord, 5, false, 1,1);
    }
}
/*
export function DrawAllDots(World:Dot[])
{
    for(let i = 0; i< World.length, i++)
    {
        DrawDot(, World[i].Xcoord, World[i].Ycoord, true, false, 1);
    }
}
*/