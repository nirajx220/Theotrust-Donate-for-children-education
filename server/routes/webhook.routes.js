import express from 'express';
const router = express.Router();

// Stripe webhook endpoint (use raw body parser)
router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  // Add your Stripe webhook logic here
  res.json({ received: true });
});

export default router;