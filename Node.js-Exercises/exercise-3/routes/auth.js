import express from 'express';
import { login, register } from '../controllers/authController.js';
import { protect } from '../middlewares/auth.js';



const router = express.Router();

// Register
router.post('/register', register);
// login
router.post('/login', login);
// protected route
router.get('/profile', protect, (req, res)=> {
    res.json(req.user)
})


export default router;