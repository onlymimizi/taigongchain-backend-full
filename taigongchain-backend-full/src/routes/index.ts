import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './user';
import nftRoutes from './nft';
import logRoutes from './log';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/nft', nftRoutes);
router.use('/logs', logRoutes);

export default router;