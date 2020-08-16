"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HiveCell = /** @class */ (function () {
    function HiveCell(objectSpecs) {
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
    return HiveCell;
}());
exports.default = HiveCell;
