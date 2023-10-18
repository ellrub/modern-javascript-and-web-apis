import express, { Router } from 'express';
import { getMovies } from './data/database.js';

const router = Router();
router.use(express.json());

router.get('/helloworld', async (req, res) => {
  const example = {
    message: 'Hello Nerdschool 🎉🎉🎉'
  };
});

router.get("/movie", async (req, res) => {
  const movies = await getMovies()
  res.send(movies)
})

export default router;
