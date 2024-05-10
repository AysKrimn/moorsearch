import { useState } from 'react'
import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'


export default function DatePick() {

    const [date, setDate] = useState(null)
    const [disabledState, setDisabledState] = useState(true)


    const handleOperation = (e) => {

        
        setDate()
        setDisabledState(false)
    }

    return (


        <>

        <div className='row mt-4'>


            <h4>
            Free Financial Consultation

            </h4>

            <p>
            Check out our availability and book the date and time that works for you    
            </p>        


            <div className="d-flex">
                     <p>  <b>  Select a date and time  </b> </p>
            </div>
            

            <div className="col-12 col-md-6">

    
                        <DtPicker
                        placeholder={"Open Calendar"}
                        type='single'
                        local='en'
                        withTime
                        showTimeInput
                        todayBtn

                        onChange={handleOperation}
                        
                        />

            </div>


            <div className="col-12 col-md-6">

                <button type='button' disabled={disabledState} style={{borderRadius: 0}} className='btn btn-dark w-100 p-0'>Submit</button>

            </div>
        </div>

        </>
  )
}
