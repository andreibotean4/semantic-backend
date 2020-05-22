import express from 'express';
import joi from 'joi';

import { validateBodySchema } from '../../middlewares/validation.middleware';

import { createCategory } from '../../repositories/categories.repository';

const schema = {
    title: joi.string().required()
};


const router = express.Router();

router.post('/', validateBodySchema(schema), (req, res, next) => {
    return createCategory(req.body.title)
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
