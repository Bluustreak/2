import {Hypo} from './PhysMath';
import {XYdisplacement} from './PhysMath';

export class Dot{
    Xcoord:number;
    Ycoord:number;
    Mass:number;
    Temperature:number;
    Speed:number;
    VelX:number;
    VelY:number;
    Intertia:number;
    TimeDillation:number;

    constructor(Xcoordi, Ycoordi, Massi, Temperaturei, VelXi, VelYi){
        this.Xcoord = Xcoordi;
        this.Ycoord = Ycoordi;
        this.Mass = Massi;
        this.Temperature = Temperaturei;
        this.Speed = Hypo(VelXi, VelYi);
        this.VelX = VelXi;
        this.VelY = VelYi;
        this.Intertia = (Massi * Math.pow(this.Speed, 2)) /2;
        this.TimeDillation = 1;
        }

        Update(World:Dot[], timestep:number)
        {
            //takes in World, loops thorugh all the dots and sums up the total displacement and
            //other properties due to forces for only the object this function is called from
            let totDispX = 0;
            let totDispY = 0;
            
            for (let i = 0; i < World.length; i++)
           {
                if (World[i] !== this)
                {
                    var temp = XYdisplacement(this, World[i], timestep);
                    totDispX += temp[0];
                    totDispY += temp[1];
                }
            }
            this.Xcoord += totDispX;
            this.Ycoord += totDispY;

            this.VelX = totDispX;
            this.VelY = totDispY;

            this.Speed = Hypo(totDispX, totDispY)/timestep;
        }
    
    }
