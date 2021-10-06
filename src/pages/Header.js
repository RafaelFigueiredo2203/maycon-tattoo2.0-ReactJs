import React from 'react';
import '../styles/princ.scss';


export function Header(){
  return(
    <div>
      <header className="headerapp">
        <h1>Maycon Tattoo Studio</h1>
      <nav class="nav">
										
										<ul class="nav-list" id="menu">
											<li><a  href="https://rafaelfigueiredo2203.github.io/maycon-tattoo2.0/#/">Home</a></li>
											<li><a  href="https://rafaelfigueiredo2203.github.io/maycon-tattoo2.0/#/Info" >Informações</a></li>
											<li><a href="https://rafaelfigueiredo2203.github.io/maycon-tattoo2.0/#/Galery" >Galeria</a></li>
											<li><a href="https://rafaelfigueiredo2203.github.io/maycon-tattoo2.0/#/Contact" >Contato</a></li>
										</ul>
									</nav>
      </header>

     
    </div>

  );
}