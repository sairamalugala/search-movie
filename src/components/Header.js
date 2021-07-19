import React, {useState} from 'react';

const Header = (props)=>{
    const [ movieName, setMovieName ] = useState("");
    return (
        <div className="navbar navbar-expand-md navbar-dark bg-dark mb-4" role="navigation">
            <div className="col-md-8">
                <p style={{color:'white'}}>Movie Library</p>
            </div>
            <div className="col-md-4">
                <form className=" form-inline mt-2 mt-md-0 " onSubmit={(event)=>{
                    event.preventDefault();
                    props.onMovieSearch(movieName);
                    setMovieName("");
                }}>
                    <input 
                        className="form-control mr-sm-2 " 
                        value={movieName}  
                        type="text " 
                        onChange={(event)=>{
                            setMovieName(event.target.value);
                        }}
                        placeholder="Search " 
                        aria-label="Search "
                    />
                    <button 
                        className="btn btn-outline-success my-2 my-sm-0 " 
                        type="submit "
                    >Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;