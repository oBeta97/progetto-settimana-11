import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyMain from './components/MyMain';
import MusicPlayer from './components/MusicPlayer';
import {  Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import MyMainTopLinks from './components/MyMainTopLinks';

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
