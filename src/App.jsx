import './app.css'
import Header from './assets/Header/Header'
import Section1 from './assets/Section 1/Section1'
import Section2 from './assets/Section 2/Section2'
import Footer from './assets/Footer/Footer'
import Contact from './assets/Contact/Contact'
export default ()=>{
  return(
  <>
  <Header/>
    <main>
      <Section1/>
      <Section2/>
      <Contact/>
    </main>
  <Footer/>
  </>
)}