import React, { useState } from 'react';
import Container from './Container';
import styled from 'styled-components';

const SearchComponent = styled.div`
position: fixed;
height: 60px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

input{
    height: 40px;
    width: 400px;
    font-size: 20px;
    padding: 6px 8px;
    margin-right: 8px;
}

button{
    padding: 6px 12px;
    font-size: 24px;
    background: #b1772d;
    color: #000;
    border: none;
    outline: none;
    border-radius: 5px;
}
`

const DispComponent = styled.div`
height: 500px;
width: 100%;
`
const Add = () => {
    let TMDB= '0749b3f8e9dae5252e80c80796a4805e'
    const [query, setQuery] = useState("");
    const [movies, setMovie] = useState([]);

    
    
    const handleChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(resp => resp.json()).then((dt) =>
            {
                if(!dt.error){
                    setMovie(dt.movies)
                }
                else {
                    setMovie([])
                }
            }
        )
    }

    return (
        <div>
            <Container>
                <SearchComponent>
                    <input type="text" name="" id="" 
                    placeholder='Search movie'
                    value={query}
                    onChange={handleChange}/>

                </SearchComponent>
                <DispComponent>
                    {
                        movies.length > 0 && (
                            <ul className='movies'>
                                {
                                    movies.map(movie => (
                                        <li>{movie.title}</li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </DispComponent>
            </Container>
        </div>
    )
}

export default Add
