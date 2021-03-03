import React, { useEffect, useState } from 'react'
import './styles.scss'
let FrequenrCard = ({ item }) => {
    let [unfolded, setUnfolded] = useState(false);

    return (
        <>
            <div onClick={() => setUnfolded(!unfolded)} className="frequent-card"><i className={`${unfolded ? "frequent-card-paragraph-icon-rotate" : ""} fas fa-chevron-right icon-transition`}></i>{item.question}</div>
            <p className={`frequent-card-paragraph ${unfolded ? "" : "frequent-card-paragraph-hidden"}`}>{item.response}</p>
        </>
    )
}
export default FrequenrCard