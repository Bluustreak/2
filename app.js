"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawAllDots = void 0;
// generate a lookup tabe with sin values
// this sim uses double, so try keeping all values below 1
var Dot_1 = require("./Dot");
// A list of dots, the entire simulation collection
//let World = [];
//hardcoded testDots
var dot1 = new Dot_1.Dot(-1, 0, 1, 1, 0, -0.001);
var dot2 = new Dot_1.Dot(0, 0, 1000000, 1, 0, 0);
var World = [dot1, dot2];
//World.Add(new Dot(-10, 0, 100000, 1, 0, -0.02));
//good to haves
var timestep = 1;
var count = 0;
//set up the canvas to draw the dots on
var canvas = document.getElementById('#canvas');
var ctx = canvas.getContext('2d');
//the main simulation loop
for (var i = 0; i < 10; i++) {
    for (var i_1 = 0; i_1 < World.length; i_1++) {
        World[i_1].Update(World, timestep);
    }
    //draw the dots
    //DrawingTools.DrawDots(World, count++);
    console.log("X:" + World[0].Xcoord + " Y:" + World[0].Ycoord + " Speed: " + World[0].Speed);
}
function DrawDot(ctx, x, y, radius, fill, stroke, strokeWidth) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
    }
    if (stroke) {
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}
function DrawAllDots(ctx) {
    for (var i = 0; i < World.length; i++) {
        DrawDot(ctx, World[i].Xcoord, World[i].Ycoord, 5, false, 1, 1);
    }
}
exports.DrawAllDots = DrawAllDots;
/*
export function DrawAllDots(World:Dot[])
{
    for(let i = 0; i< World.length, i++)
    {
        DrawDot(, World[i].Xcoord, World[i].Ycoord, true, false, 1);
    }
}
*/ 
