import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title= "NETFLIX ORIGINALS" fetchURL= {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title= "TRENDING NOW" fetchURL= {requests.fetchTrending}/>
      <Row title= "Top Rated" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
