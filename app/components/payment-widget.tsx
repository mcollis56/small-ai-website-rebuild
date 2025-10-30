
'use client';

import { useState } from 'react';
import { CreditCard, X, Lock } from 'lucide-react';

interface PaymentWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    price: number;
    duration: string;
    format: string;
  };
}

const PaymentWidget: React.FC<PaymentWidgetProps> = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    billingAddress: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would integrate with Stripe
    alert(`Payment processing for ${service.title} - $${service.price}... (Demo - would integrate with Stripe)`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <CreditCard className="text-[#FFE36E]" size={24} />
            <h3 className="text-xl font-bold text-[#0D0D0D]">Payment</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
            aria-label="Close payment modal"
          >
            <X size={24} className="text-gray-600 group-hover:text-[#0D0D0D]" />
          </button>
        </div>

        {/* Service Summary */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <h4 className="font-semibold text-[#0D0D0D] mb-2">{service.title}</h4>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Duration: {service.duration}</span>
            <span>Format: {service.format}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-[#0D0D0D]">Total: ${service.price}</span>
            <div className="flex items-center space-x-1 text-green-600">
              <Lock size={16} />
              <span className="text-sm">Secure</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE36E]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE36E]"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE36E]"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE36E]"
                  placeholder="123"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE36E]"
                placeholder="John Doe"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0D0D0D] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#0D0D0D]/90 transition-colors flex items-center justify-center space-x-2 mt-6"
          >
            <CreditCard size={18} />
            <span>Complete Payment - ${service.price}</span>
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your payment information is secure and encrypted. This is a demo - no actual payment will be processed.
          </p>
        </form>
      </div>
    </div>
  );
};

export default PaymentWidget;
