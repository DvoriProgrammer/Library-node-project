// routers/BookRouter.ts

import express from 'express';
import * as BookController from '../controllers/BookController';

const router = express.Router();

router.post('/', BookController.createBook);
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.put('/:id', BookController.updateBookById);
router.delete('/:id', BookController.deleteBookById);

export default router;
