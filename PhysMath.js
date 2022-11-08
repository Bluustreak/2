"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XYdisplacement = exports.DotDistance = exports.TimeDil = exports.Hypo = void 0;
var G = 6.67 * Math.pow(10, -11);
var c = 299792458;
function Hypo(a, b) {
    return Math.sqrt(a * a + b * b);
}
exports.Hypo = Hypo;
function TimeDil(dot) {
    // this returns a scalar for time dillation rather than an individual value for the dot's speed,
    // this scalar can then be applied to the sppeed if wanted
    var result = 1 / (Math.sqrt(1 - (Math.pow(dot.Speed, 2) / Math.pow(c, 2))));
    return result;
}
exports.TimeDil = TimeDil;
function DotDistance(a, b) {
    // this takes in the dot objects for simplicity, rather than their locations
    var dx = a.Xcoord - b.Xcoord;
    var dy = a.Ycoord - b.Ycoord;
    return Hypo(dx, dy);
}
exports.DotDistance = DotDistance;
function XYdisplacement(a, b, timestep) {
    // Note for later: if you reference dot a and b, you can ajust their values at once, instead of doing it one at a time, saving 2x the performance
    //gets the force and resulting acceleration due the two masses involved
    var force = (G * a.Mass * b.Mass) / Math.pow(DotDistance(a, b), 2);
    // here is also where you should add any extra forces that repells
    //this one acts as a collider
    //force -= 1*(G * a.Mass * b.Mass)/Math.Pow(DotDistance(a, b), 5);
    var acc = force / a.Mass;
    //acc *= TimeDil(a); // too activate lorentz scaling to the speed
    //these differences are used in the propotions of acceleration in X vs Y, VS dist
    var dx = b.Xcoord - a.Xcoord;
    var dy = b.Ycoord - a.Ycoord;
    var dist = Hypo(dx, dy);
    var AccX = acc * (dx / dist);
    var AccY = acc * (dy / dist);
    //directionality of acceleration is kept due to local calculation of dx and dy
    //NOTE; at first I did acc*Math.Cos(dx/dist), but dx already exists!
    //s = ut + (1/2)at^2, the equation for displacement due to acceleration
    var sx = a.VelX * timestep + (0.5) * AccX * Math.pow(timestep, 2);
    var sy = a.VelY * timestep + (0.5) * AccY * Math.pow(timestep, 2);
    return [sx, sy];
}
exports.XYdisplacement = XYdisplacement;
