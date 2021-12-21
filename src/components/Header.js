import React, { useState, useEffect } from 'react';
// import menuLinksData from './data/menu_links.json'
import axios from './axios';

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);


  const loadMenuLinksData = async() => {    

    // Query the API Gateway
   /* const resp = await fetch('https://a6lnno41t7.execute-api.us-east-1.amazonaws.com/Production/menu_links');
    let jsonData = await resp.json();  

    // Assign response data to our state variable
    setMenuLinksData(jsonData);*/
  
  }

  const fetchData = async() => {    

    axios.get('menu_links').then(res => {   
     setMenuLinksData(res.data);
  
  })
}

  useEffect(() => {
    // Load the menu links data from the API Gateway
   
    loadMenuLinksData();

   
    //if [] run once when th erow loads and dot run again
    //if [movies] run evry time movies changes

   /* async function fetchData(){
       const request = await axios.get('menu_links');
      console.log(request);
      return request;
  }*/
    fetchData();
 
  }, []);

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>iT &#38;bOOSTs </h1>
          <h2>C#, ASP.NET, Elasticsearch, Kibana, Azure, React, Vue, Angular, </h2>
          <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
          <ul>
            {
              menuLinksData.map((link) =>
                <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
              )
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;