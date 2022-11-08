"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = void 0;
var PhysMath_1 = require("./PhysMath");
var PhysMath_2 = require("./PhysMath");
var Dot = /** @class */ (function () {
    function Dot(Xcoordi, Ycoordi, Massi, Temperaturei, VelXi, VelYi) {
        this.Xcoord = Xcoordi;
        this.Ycoord = Ycoordi;
        this.Mass = Massi;
        this.Temperature = Temperaturei;
        this.Speed = (0, PhysMath_1.Hypo)(VelXi, VelYi);
        this.VelX = VelXi;
        this.VelY = VelYi;
        this.Intertia = (Massi * Math.pow(this.Speed, 2)) / 2;
        this.TimeDillation = 1;
    }
    Dot.prototype.Update = function (World, timestep) {
        //takes in World, loops thorugh all the dots and sums up the total displacement and
        //other properties due to forces for only the object this function is called from
        var totDispX = 0;
        var totDispY = 0;
        for (var i = 0; i < World.length; i++) {
            if (World[i] !== this) {
                var temp = (0, PhysMath_2.XYdisplacement)(this, World[i], timestep);
                totDispX += temp[0];
                totDispY += temp[1];
            }
        }
        this.Xcoord += totDispX;
        this.Ycoord += totDispY;
        this.VelX = totDispX;
        this.VelY = totDispY;
        this.Speed = (0, PhysMath_1.Hypo)(totDispX, totDispY) / timestep;
    };
    return Dot;
}());
exports.Dot = Dot;
