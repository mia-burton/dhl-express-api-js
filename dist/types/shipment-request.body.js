"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentRequestBody = void 0;
class ShipmentRequestBody {
    constructor(shipmentRequest) {
        this.shipmentRequest = shipmentRequest;
    }
    toDHLBody() {
        return JSON.stringify(this, function (_key, value) {
            if (value && typeof value === 'object') {
                var replacement = {};
                for (var v in value) {
                    if (Object.hasOwnProperty.call(value, v)) {
                        if (v == 'number') {
                            replacement['@number'] = value[v];
                            continue;
                        }
                        replacement[v && v.charAt(0).toUpperCase() + v.substring(1)] = value[v];
                    }
                }
                return replacement;
            }
            return value;
        });
    }
}
exports.ShipmentRequestBody = ShipmentRequestBody;
