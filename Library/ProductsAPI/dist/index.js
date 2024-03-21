"use strict";
// index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./models/db"));
const ProductRouter_1 = __importDefault(require("./routers/ProductRouter"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Connect to database
(0, db_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/products', ProductRouter_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
