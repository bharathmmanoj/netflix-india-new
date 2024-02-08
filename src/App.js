import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  
  return (
    <div>
      <Nav/>
      <Banner fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title="netflixOriginal" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="TopRated" fetchurl={requests.fetchTopRated}/>
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchurl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
