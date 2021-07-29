"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const nock = require("nock");
const pickup_request_body_1 = require("../types/pickup-request.body");
const pickup_request_test_data_1 = require("./test_data/pickup-request.test.data");
describe('Pickup Request test', function () {
    beforeEach(() => {
        nock('https://wsbexpress.dhl.com/rest/sndpt')
            .post('/PickupRequest')
            .reply(200, pickup_request_test_data_1.getTestPickupResponse());
    });
    it('should receive pickup code', function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const dhl = new __1.default({ username: 'testuser', password: 'testpsw' }, true);
            const resp = yield dhl.sendPickupRequest(new pickup_request_body_1.PickupRequestBody(pickup_request_test_data_1.getTestPickupRequest()));
            expect(resp.pickUpResponse).toHaveProperty('dispatchConfirmationNumber');
            expect((_a = resp.pickUpResponse) === null || _a === void 0 ? void 0 : _a.dispatchConfirmationNumber).not.toBeNull();
        });
    });
});
