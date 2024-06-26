import React,{useState, useEffect} from 'react'
import '../../styles/clock.css'

const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDown = ()=> {
        const destination = new Date('May 24, 2024').getTime()
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000*60*60*24))

            const hours = Math.floor(different % (1000*60*60*24) / (1000*60*60));

            const minutes = Math.floor(different % (1000*60*60) / (1000*60));
            
            const seconds = Math.floor(different % (1000*60) / 1000);
            
            if(destination < 0){
                clearInterval(interval.current);
            }
            else
            {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        });
    };
    useEffect(()=>
        countDown()
    )
  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
        <div className="clock__data text-white d-flex align-items-center gap-3">
            <div className='text-center'>
                <h2 className='fs-3 mb-2'>{days}</h2>
                <h5 className='fs-5'>Дни</h5>
            </div>
            <span className='fs-3'>:</span>
        </div>

        <div className="clock__data text-white d-flex align-items-center gap-3">
            <div className='text-center'>
                <h2 className='fs-3 mb-2'>{hours}</h2>
                <h5 className='fs-5'>Часове</h5>
            </div>
            <span className='fs-3'>:</span>
        </div>

        <div className="clock__data text-white d-flex align-items-center gap-3">
            <div className='text-center'>
                <h2 className='fs-3 mb-2'>{minutes}</h2>
                <h5 className='fs-5'>Минути</h5>
            </div>
            <span className='fs-3'>:</span>
        </div>

        <div className="clock__data text-white d-flex align-items-center gap-3">
            <div className='text-center'>
                <h2 className='fs-3 mb-2'>{seconds}</h2>
                <h5 className='fs-5'>Секунди</h5>
            </div>
        </div>
    </div>
  )
}

export default Clock