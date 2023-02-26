import React from 'react'
import trainIcon from '../images/trainIcon.png'
import './styles/AvailTrain.css'

export default function AvailTrain(props) {
    return (
        <>
            <div className="trainList">
                {/* <img src={trainIcon} alt="Train Icon" width="3%" height="3%" /> */}
                <h3>TrainName</h3>
                <h3>Train Number</h3>
                <h3>Departure Time</h3>
                <h3>Arrival Time</h3>
                <h3>Duration</h3>
                <h3>Class</h3>
                <h3>Quota</h3>
                <h3>Fare</h3>
                <h3>Book</h3>
            </div>
            <div className="trainDetails">
                <h3>{props.TrainName}</h3>
                <h3>{props.TrainNo}</h3>
                <h3>{props.DepTime}</h3>
                <h3>{props.ArrTime}</h3>
                <h3>{props.Duration}</h3>
                <h3>{props.trainClass}</h3>
                <h3>{props.trainQuota}</h3>
                <h3>{props.trainFare}</h3>
                <button>Book</button>
            </div>
        </>
    )
}
