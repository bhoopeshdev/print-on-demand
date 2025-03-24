"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: "Travel Backpack Pro",
    price: 129.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Comfort Neck Pillow",
    price: 29.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Portable Water Filter",
    price: 39.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function ShoppingCartOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg md:hidden"
        aria-label="Open cart"
      >
        <ShoppingBag className="h-6 w-6" />
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
          {cartItems.length}
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transform bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Cart Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag className="mb-4 h-16 w-16 text-gray-300" />
            <p className="mb-6 text-lg font-medium text-gray-500">Your cart is empty</p>
            <Button onClick={() => setIsOpen(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="mb-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      <div className="mt-2 flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <p className="mt-2 text-right font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold">${calculateSubtotal().toFixed(2)}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
            </div>

            <div className="space-y-3">
              <Button className="w-full">Checkout</Button>
              <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  )
}