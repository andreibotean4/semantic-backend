import express from 'express';

import { getCategoryById } from '../../repositories/categories.repository';

const router = express.Router();

router.get('/:id', (req, res, next) => {
    return getCategoryById(req.params.id)
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
