import {Dot} from './Dot';
let G = 6.67 * Math.pow(10, -11);
let c = 299792458;

export function Hypo(a:number, b:number):number{
        return Math.sqrt(a*a+b*b);
}
export function  TimeDil(dot:Dot): number
        {
            // this returns a scalar for time dillation rather than an individual value for the dot's speed,
            // this scalar can then be applied to the sppeed if wanted
            let result = 1/(Math.sqrt(1-(Math.pow(dot.Speed,2) / Math.pow(c,2))));
            return result;
        }
export function DotDistance(a:Dot, b:Dot):number
{
        // this takes in the dot objects for simplicity, rather than their locations
        let dx = a.Xcoord - b.Xcoord;
        let dy = a.Ycoord - b.Ycoord;
        return Hypo(dx, dy);
}
export function XYdisplacement(a:Dot, b:Dot,timestep:number):[number, number]
        {
            // Note for later: if you reference dot a and b, you can ajust their values at once, instead of doing it one at a time, saving 2x the performance

            //gets the force and resulting acceleration due the two masses involved
            let force = (G * a.Mass * b.Mass)/Math.pow(DotDistance(a,b),2);

            // here is also where you should add any extra forces that repells
            //this one acts as a collider
            //force -= 1*(G * a.Mass * b.Mass)/Math.Pow(DotDistance(a, b), 5);

            let acc = force / a.Mass;
            //acc *= TimeDil(a); // too activate lorentz scaling to the speed

            //these differences are used in the propotions of acceleration in X vs Y, VS dist
            let dx = b.Xcoord - a.Xcoord;
            let dy = b.Ycoord - a.Ycoord;
            let dist = Hypo(dx, dy);
            let AccX = acc*(dx/dist);
            let AccY = acc*(dy/dist);
            //directionality of acceleration is kept due to local calculation of dx and dy
            //NOTE; at first I did acc*Math.Cos(dx/dist), but dx already exists!

            //s = ut + (1/2)at^2, the equation for displacement due to acceleration
            let sx = a.VelX * timestep + (0.5) * AccX * Math.pow(timestep, 2);
            let sy = a.VelY * timestep + (0.5) * AccY * Math.pow(timestep, 2);

            return [sx, sy];
        }