import React , {useEffect} from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Recent() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, [])
    return (
      <div className="recent" data-aos="fade-up">
    Recent
      </div>
    );
  }
  
  