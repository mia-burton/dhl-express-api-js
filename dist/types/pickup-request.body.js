"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupRequestBody = void 0;
class PickupRequestBody {
    constructor(pickUpRequest) {
        this.pickUpRequest = pickUpRequest;
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
exports.PickupRequestBody = PickupRequestBody;
