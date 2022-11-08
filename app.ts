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

let timestep = 1;
let runSim = true;
let count = 0;
while (runSim)
{
	for(let i = 0; i<World.length; i++)
	{
		World[i].Update(World, timestep);
	}
    //draw the dots
    //DrawingTools.DrawDots(World, count++);

    console.log("X:" + World[0].Xcoord + " Y:" + World[0].Ycoord + " Speed: "+ World[0].Speed);

}