//import logo from './logo.svg';
import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import './App.css';
import Header from './components/Header';

function App() {

    const [movies, setMovies] = useState([]);

   const getMovies = async () => {
    try{
        const {data} = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies")
      setMovies(data); 

     /*  const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed');
    console.log(response.data);     
    return response.data; */
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
    /*  */
   }

   useEffect( ()=>{
    getMovies();
   }, [])

  return (
    <div className='App'>
      <Header />
       <main className='main'>
        {
        movies && movies.length >0 && movies.map( movie => 
          <MovieCard key={movie.id} movie={movie}  />
        )
        }
       </main>
      
       
      

      {/* <p title="Hi">Tooltip</p>
      <a href={"https://www.youtube.com/shorts/IL4Q6mUo6T8"} download>Download</a>
      <p contenteditable="true" > You can edit me </p>
      <marquee direction="right" scrollamount="10" >Hai, how are you? </marquee> */}
   
    </div>
  );
}

export default App;
