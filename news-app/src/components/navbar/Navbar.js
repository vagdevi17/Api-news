import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Make API call with searchQuery using fetch or axios
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=5ccb716a41d742d3888b6c52dbd13407`
      );
      const data = await response.json();
      setSearchResults(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
             <a className="navbar-brand" href="#">
                My News-App
             </a>
             <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
             >
             <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                       <a className="nav-link active" aria-current="page" href="#">
                          Home
                       </a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">
                         About
                       </a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">
                         News
                       </a>
                     </li>
                </ul>
        
      
      
                <form className="d-flex align-items-center" onSubmit={handleSearch}>
                 <input
                   className="form-control me-2"
                   type="search"
                   placeholder="Search"
                   aria-label="Search"
                   value={searchQuery}
                   onChange={handleChange}
                 />
                 <button className="btn btn-outline-success" type="submit">
                   Search
                 </button>
                </form>
             </div>
        </div>
             
         
      {/* Display search results */}
      <div className="search-results">
        {/* Display search results */}
        {searchResults.map((article) => (
          <div className="article-card" key={article.id}>
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Article" />
            )}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
      
    </nav>
  );
};

export default Navbar;
