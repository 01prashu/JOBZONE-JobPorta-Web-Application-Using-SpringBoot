
import { MantineProvider } from '@mantine/core';
import HomePage from './component/Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import FindJobPage from './component/Pages/FindJobPage';
import Header from './component/Header/Header';
import '@mantine/core/styles.css';

import Footer from './component/Footer/Footer';
import { dark } from '@mui/material/styles/createPalette';
import FindTalent from './component/Pages/FindTalent';
import TalentProfile from './component/Pages/Talentprofile';
function App() {
  

  return (
    <MantineProvider defaultColorScheme='dark'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/find-jobs' element={<FindJobPage/>}/>
          <Route path='/find-talent' element={<FindTalent/>} />
          <Route path='/talent-profile' element={<TalentProfile/>} />
          <Route path="*" element={<HomePage/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
