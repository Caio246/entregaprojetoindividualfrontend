/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-anonymous-default-export */
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Pages/Main/Main'
import './Home.css'


export default () => {
  return (

    <div className='home'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}