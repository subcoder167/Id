import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Upload from './upload'
// import SignUp from './components/signup.component'
function App() {




  return (

          <Router>

            {/* <Routes> */}
            {/* <Route exact path="/" element={<Login />} /> */}
            {/* <Route path="/sign-in" element={<Login />} /> */}
            {/* <Route path="/sign-up" element={<SignUp />} /> */}


            {/* <Route index element={<Login />} /> */}
            {/* <Route path="/upload" element={<Upload />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}


            {/* </Routes> */}

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>



          </Router>

  )
}
export default App