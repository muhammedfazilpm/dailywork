import React, { useEffect } from 'react'
import { useRazorpay } from "react-razorpay";

export const PaymentGateway = ({ orderGenerated, setRazorpayResponse }) => {    
    const { error, isLoading, Razorpay } = useRazorpay();
    const openPayment = async () => {
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            amount: orderGenerated?.amount,
            currency: orderGenerated?.currency,
            name: "Kooliapp",
            description: `Payment for get Contact '`,
            order_id: orderGenerated?.id, 
            handler: async (response) => {
                setRazorpayResponse(response)
            },
    
        }
        console.log(options,"options")
        if (Razorpay) {
            try {
                const razorpayInstance = new Razorpay(options);
                razorpayInstance.open();
            } catch (error) {
                console.error("Razorpay open error:", error);
            }

        }
    }

    useEffect(() => {
        if (orderGenerated?.id) {
            openPayment()
        }
    }, [orderGenerated,isLoading,error])

    return null

}
