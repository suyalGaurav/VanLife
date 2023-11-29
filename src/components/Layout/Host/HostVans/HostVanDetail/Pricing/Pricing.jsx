import React, { useContext } from "react"
import "./pricing.css"
import { useOutletContext } from "react-router-dom"

export default function Pricing() {

    const { vanDetails } = useOutletContext();

    return (
        <div className="host-van-pricing">
            <h1>
                ${vanDetails.price}.00
                <span>/day</span>
            </h1>
        </div>
    )
}