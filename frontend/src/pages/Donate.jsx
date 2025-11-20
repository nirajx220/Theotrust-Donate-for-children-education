import React, { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckOut from '../components/donation/StripeCheckOut';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Donate = () => {
  const [amount, setAmount] = useState(50);

  const donationAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Make a Donation</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Choose Your Donation Amount</h2>
        
        <div className="grid grid-cols-5 gap-4 mb-6">
          {donationAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`py-3 px-4 rounded-lg font-semibold transition ${
                amount === amt
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ${amt}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Custom Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>

        <Elements stripe={stripePromise}>
          <StripeCheckOut amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default Donate;