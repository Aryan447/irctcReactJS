import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/SearchBtn.css'

export default function SearchBtn() {
  const [FromInput, setFromInput] = useState('');
  const [ToInput, setToInput] = useState('');
  const [DateInput, setDateInput] = useState('');
  const [QuotaInput, setQuotaInput] = useState('');

  const searchNavigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    searchNavigate(`/trainsearch?FromInput=${FromInput}&ToInput=${ToInput}&DateInput=${DateInput}&QuotaInput=${QuotaInput}`);

  }

  return (
    <>
    <form onSubmit={handleSubmit}>

    <input className="FromInput" type="text" name="FromInput" placeholder="From" value={FromInput} onChange={(e) => setFromInput(e.target.value)} />
    <input className="ToInput" type="text" placeholder="To" value={ToInput} onChange={(e) => setToInput(e.target.value)} />
    <input className="DateInput" type="date" value={DateInput} onChange={(e) => setDateInput(e.target.value)}/>

    <input className="QuotaInput" type="text" list="quotaNames" placeholder='Quota' value={QuotaInput} onChange={(e) => setQuotaInput(e.target.value)}/>
    <datalist id="quotaNames">
      <option value="General"/>
      <option value="Tatkal"/>
      <option value="Premium Tatkal"/>
      <option value="Ladies"/>
    </datalist>
    <input className="SubmitBtn" type="submit" value="Search Trains" />
    </form>
    </>
  )
}