"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hive = /** @class */ (function () {
    function Hive(objectSpecs, cells) {
        if (cells) {
            this.cells = cells;
        }
        else {
            this.cells = [];
        }
        if (objectSpecs) {
            this.objectSpecs = objectSpecs;
        }
        else {
            this.objectSpecs = {
                hollowInside: false,
                material: "Polylactid acid",
                numOfAngles: 6,
            };
        }
    }
    Hive.prototype.addCell = function (cell) {
        this.cells.push(cell);
    };
    return Hive;
}());
exports.default = Hive;
