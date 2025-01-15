import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [category, setCategory] = useState('');
  
  const submitHandler = () => {
    const systolicValue = Number(systolic);
    const diastolicValue = Number(diastolic);
  
    if (!systolic || !diastolic || systolicValue <= 0 || diastolicValue <= 0) {
      setCategory("Invalid input. Please enter valid blood pressure values.");
      return;
    }
  
    if (systolicValue < 90 && diastolicValue < 60) {
      setCategory("Very Low (Hypotension): You may need medical evaluation to identify the cause.");
    } else if (systolicValue >= 90 && systolicValue <= 99 && diastolicValue >= 60 && diastolicValue <= 69) {
      setCategory("Slightly Low (Borderline Low): Generally fine, but monitor symptoms if you feel unwell.");
    } else if (systolicValue <= 120 && diastolicValue <= 80) {
      setCategory("Normal: Your blood pressure is within a healthy range. Maintain a healthy lifestyle.");
    } else if (systolicValue >= 121 && systolicValue <= 129 && diastolicValue < 80) {
      setCategory("Elevated: Consider lifestyle changes to prevent hypertension.");
    } else if ((systolicValue >= 130 && systolicValue <= 139) || (diastolicValue >= 81 && diastolicValue <= 89)) {
      setCategory("High (Stage 1 Hypertension): Monitor and consult a healthcare provider.");
    } else if ((systolicValue >= 140 && systolicValue <= 179) || (diastolicValue >= 90 && diastolicValue <= 119)) {
      setCategory("High (Stage 2 Hypertension): Seek medical advice. You may need treatment.");
    } else if (systolicValue >= 180 || diastolicValue >= 120) {
      setCategory("Hypertensive Crisis: Seek immediate medical attention.");
    } else {
      setCategory("Unclassified: Unable to determine category. Consult a healthcare professional.");
    }
  };
  
  

    return (
      <div className="">
        <div className="heartcont">
          <img src="./public/favbg.png" alt="" />
        </div>
        <div className="form-container">
          <div>
            <input type="number" placeholder="Enter Systolic pressure" value={systolic} onChange={(e) => { setSystolic(e.target.value) }} />mmHg
            <input type="number" placeholder="Enter Diastolic pressure" value={diastolic} onChange={(e) => { setDiastolic(e.target.value) }} />mmHg
          </div>
          <button className="test-button" onClick={submitHandler}>Test your Blood Pressure</button>
          <div className="Advice">
               <p>
                  Your Blood pressure is {category}
               </p>
          </div>
        </div>
      </div>
    )

  }

export default App
