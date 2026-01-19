import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, Lock } from 'lucide-react';

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      color: 'Space Gray',
      size: 'One Size',
      price: 299,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300'
    },
    {
      id: 2,
      name: 'Minimalist Leather Watch',
      color: 'Tan / Silver',
      size: '42mm',
      price: 150,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300'
    }
  ]);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
          <ShoppingBag className="w-8 h-8 text-[var(--btnColor)]" />
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              {items.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 border-b border-gray-200 last:border-none">

                  {/* Image */}
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-slate-100">
                    <img src={item.image} className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">
                      {item.name}
                    </h3>

                    {/* Color & Size */}
                    <div className="flex gap-3 mt-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 font-medium">
                        🎨 {item.color}
                      </span>
                      <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 font-medium">
                        📏 {item.size}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mt-5">
                      <div className="flex items-center border border-gray-400 rounded-xl overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-slate-100">
                          <Minus size={16} />
                        </button>
                        <span className="px-5 font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-slate-100">
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1 text-rose-500 hover:text-rose-600 font-medium text-sm"
                      >
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-2xl font-black text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-slate-400">
                      ${item.price} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border !border-slate-100 p-6 sticky top-8">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-[var(--btnColor)] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                Proceed to Checkout
              </button>
              <p className="text-md text-slate-400 mt-4 flex items-center justify-center gap-2">
                <Lock className='h-5 w-5' /> Secure SSL Encrypted Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
