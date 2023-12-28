import "./photos.css"
import { useOutletContext } from "react-router-dom"

export default function Photos() {

    const { vanDetails } = useOutletContext();

    return (
        <div className="host-van-photos">
            <img src={vanDetails.imageUrl} alt="van-image" />
        </div>
    )
}