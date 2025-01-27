import React from 'react';

const mockOrders = [
  {
    id: '1234',
    date: '2024-01-20',
    status: 'Delivered',
    total: 299.99,
    items: [
      {
        id: 1,
        name: 'Classic Suit',
        quantity: 1,
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: '1235',
    date: '2024-01-15',
    status: 'Processing',
    total: 528.98,
    items: [
      {
        id: 2,
        name: 'Evening Dress',
        quantity: 1,
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        name: 'Casual Blazer',
        quantity: 1,
        price: 228.99,
        image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80'
      }
    ]
  }
];

const Orders = () => {
  return (
    <div className="pt-24 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">
          Your Orders
        </h1>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white shadow-lg p-6">
              <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">Placed on {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-amber-800">${order.total.toFixed(2)}</p>
                  <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                    order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-gray-900">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="text-amber-800 hover:text-amber-700">
                  View Order Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;