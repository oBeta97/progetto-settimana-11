import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyMain from './components/MyMain';
import MusicPlayer from './components/MusicPlayer';
import {  Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import MyMainTopLinks from './components/MyMainTopLinks';
import AlbumSection from './components/AlbumSection';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <aside>
              <MyNav />
            </aside>
          </Col>

          <Col xs={12} md={9} className='offset-md-3 mainPage'>
            <main>
              <MyMainTopLinks />
              <Routes>
                <Route path='/' element={<MyMain />} />
                <Route path='/search/:searchString' element={<SearchPage />} />
                <Route path='/playlist' element={<AlbumSection cardNumber={100} playlist={true} />} />
                <Route path='/preferite' element={<AlbumSection cardNumber={100} preferite={true} />} />
              </Routes>
            </main>
          </Col>
        </Row>
      </Container>
      <MusicPlayer />
    </>

  );
}

export default App;
