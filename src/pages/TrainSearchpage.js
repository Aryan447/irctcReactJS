import React from 'react'
import { useLocation } from 'react-router-dom';
import AvailTrain from '../components/AvailTrain';
import Navbar from '../components/Navbar';

export default function TrainSearchpage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const FromInput = searchParams.get('FromInput');
  const ToInput = searchParams.get('ToInput');
  const DateInput = searchParams.get('DateInput');
  const QuotaInput = searchParams.get('QuotaInput');
  

  return (
    <>
    <Navbar Link1={'/login'} Text1={'Login'} Link2={'/'} Text2={'Home'} Link3={'/contact'} Text3={'Contact'}/>
    <br/>
    <h1>Results:</h1>
    <h3>{FromInput} &#8594; {ToInput}, {DateInput}, {QuotaInput}</h3>

    <h2>Available Trains:</h2>
    <AvailTrain TrainName={'Shatabdi'} TrainNo={'120001'} DepTime={'10:00'} ArrTime={'11:00'} Duration={'1Hour'} trainClass={'CC'} trainQuota={QuotaInput} trainFare={'1000rs'}/>
    <hr/>
    <br/>
    <AvailTrain TrainName={'Rajdhani'} TrainNo={'150007'} DepTime={'10:20'} ArrTime={'11:15'} Duration={'55Min'} trainClass={'CC'} trainQuota={QuotaInput} trainFare={'1200rs'}/>
    <hr/>
    </>
  )
}
