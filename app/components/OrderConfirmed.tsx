"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import giphy from "@/public/giphy.webp";
import Link from "next/link";
import { useCartStore } from "@/store";
import { useEffect } from "react";

export default function OrderConfirmed() {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);
  const checkoutOrder = () => {
    setTimeout(() => {
      cartStore.setCheckout("cart");
    }, 1000);
    cartStore.toggleCart();
  };
  return (
    <motion.div
      className="flex items-center justify-center my-12"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="p-12 rounded-md text-center">
        <h1 className="text-xl font-medium">Your order has Been Placed 🚀</h1>
        <h2 className="text-sm my-4">Check your email for the Receipt</h2>
        <Image src={giphy} alt="Cards for Mars webp file" className="py-8" />
        <div className="flex items-center justify-center">
          <Link href={"/dashboard"}>
            <button onClick={checkoutOrder} className="font-medium">
              Check Your Order
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
