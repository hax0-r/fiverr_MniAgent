import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Faq from '../Pages/Faq'
import Accordion from '../Pages/Faq'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/faq" element={<Accordion />} />
            </Routes>
        </>
    )
}

export default Router