import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Faq from '../Pages/Faq'
import About from '../Pages/About'
import Feature from '../Pages/Feature'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/features" element={<Feature />} />
            </Routes>
        </>
    )
}

export default Router