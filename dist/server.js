"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = express_1.default();
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to the ContactKeeper API!" });
});
app.use('/api/users', routes_1.users);
app.use('/api/auth', routes_1.auth);
app.use('/api/contacts', routes_1.contacts);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=server.js.map