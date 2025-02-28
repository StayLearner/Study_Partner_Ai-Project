"use client"
import VantaBackground from "@/app/course/[courseId]/_components/VantaGlobeBackground";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";



function Upgrade() {

const OnCheckoutClick=async() => {
  const result=await axios.post('/api/payment/checkout',{
    priceId:process.env.RAZOR_PRICE_ID_MONTHLY
  });

  console.log(result.data);
  
}


  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
    <VantaBackground/>
      <h2 className="font-medium text-3xl">Plans</h2>
      <p className="text-gray-600">
        Update your plan to generate unlimited courses for your exam
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center">
        {/* Free Plan Card */}
        <div className="rounded-2xl p-6 shadow-md border border-gray-300  backdrop-blur-md">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Free</h2>
            <p className="text-3xl font-semibold">0$ <span className="text-sm">/month</span></p>
          </div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✓ 5 Course Generate</li>
            <li>✓ Limited Support</li>
            <li>✓ Email Support</li>
            <li>✓ Help Center Access</li>
          </ul>
          <div className="mt-6 text-center">
            <p className="text-blue-600 font-medium">Current Plan</p>
          </div>
        </div>

        {/* Monthly Plan Card */}
        <div className="rounded-2xl p-6 shadow-md border border-gray-300  backdrop-blur-md">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Monthly</h2>
            <p className="text-3xl font-semibold">9.99$ <span className="text-sm">/Monthly</span></p>
          </div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✓ Unlimited Course Generate</li>
            <li>✓ Unlimited Flashcard, Quiz</li>
            <li>✓ Email Support</li>
            <li>✓ Help Center Access</li>
          </ul>
          <div className="mt-6 text-center">
            <Button 
            onClick={OnCheckoutClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
