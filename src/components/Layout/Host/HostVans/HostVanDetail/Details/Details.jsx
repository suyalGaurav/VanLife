import "./details.css"
import { useOutletContext } from "react-router-dom"

export default function Details() {
    const { vanDetails } = useOutletContext();

    return (
        <div className="host-van-detail">
            <p>
                <span>Name: </span>
                {vanDetails.name}
            </p>
            <p>
                <span>Category: </span>
                {vanDetails.type}
            </p>
            <p>
                <span>Description: </span>
                {vanDetails.description}
            </p>
            <p>
                <span>Visibility: </span>
                {vanDetails.visibility}
            </p>
        </div>
    )
}