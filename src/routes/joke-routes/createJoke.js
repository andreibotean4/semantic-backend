import express from 'express';
import joi from 'joi';

import { validateBodySchema } from '../../middlewares/validation.middleware';

import { createJoke } from '../../repositories/jokes.repository';

const schema = {
    description: joi.string().required(),
    title: joi.string().optional(),
    categoryId: joi.string().required()
};


const router = express.Router();

router.post('/', validateBodySchema(schema), (req, res, next) => {
    return createJoke(req.body.description, req.body.title, req.body.categoryId)
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
