import express from 'express';

import { getCategories } from '../../repositories/categories.repository';

const router = express.Router();

router.get('/', (req, res, next) => {
    return getCategories()
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
