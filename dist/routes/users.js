"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// @route  POST api/users
// @desc   Register a user
// @access Public
router.post('/', (req, res) => {
    res.send('Register a user');
});
exports.default = router;
//# sourceMappingURL=users.js.map