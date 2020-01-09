"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// @route  GET api/contacts
// @desc   Get all users contact
// @access Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});
// @route  POST api/contacts
// @desc   Add new contact
// @access Private
router.post('/', (req, res) => {
    res.send('Add contact');
});
// @route  PUT api/contacts/:id'
// @desc   Update contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});
// @route  DELETE api/contacts/:id'
// @desc   Delete contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});
exports.default = router;
//# sourceMappingURL=contacts.js.map