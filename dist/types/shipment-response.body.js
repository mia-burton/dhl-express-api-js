"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentResponseBody = void 0;
class ShipmentResponseBody {
    constructor(dhlBodyResponse) {
        this.shipmentResponse = this.parse(dhlBodyResponse).shipmentResponse;
    }
    parse(dhlBodyResponse) {
        return JSON.parse(dhlBodyResponse, function (_key, value) {
            if (value && typeof value === 'object') {
                var replacement = {};
                for (var v in value) {
                    if (Object.hasOwnProperty.call(value, v)) {
                        if (v.charAt(0) == '@') {
                            replacement[v.substring(1)] = value[v];
                            continue;
                        }
                        replacement[v && v.charAt(0).toLowerCase() + v.substring(1)] = value[v];
                    }
                }
                return replacement;
            }
            return value;
        });
    }
}
exports.ShipmentResponseBody = ShipmentResponseBody;
