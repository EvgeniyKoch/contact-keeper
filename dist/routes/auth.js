"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// @route  GET api/auth
// @desc   Get logged in user
// @access Private
router.get('/', (req, res) => {
    res.send('Get logged in user');
});
// @route  POST api/auth
// @desc   Auth user & get token
// @access Public
router.post('/', (req, res) => {
    res.send('Log in user');
});
exports.default = router;
//# sourceMappingURL=auth.js.map