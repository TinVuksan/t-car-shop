import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import HomePage from './HomePage/HomePage'
export default function App() {
    return (

        
        <>
        <Router>
            <Routes>
                <Route path = "/" element = {<HomePage></HomePage>} />
            </Routes>
        </Router>
        </>
        
    )
}