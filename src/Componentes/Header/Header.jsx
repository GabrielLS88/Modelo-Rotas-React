import React, { useState } from 'react';
import './Header.css';

function Header() {
  return (
    <div className='bodyHeader'>
      <div className="blocoMenu">
        <div className="blocoLinks">
          <a id='linksMenu' href="/home">Inicio</a>
          <a id='linksMenu' href="/home">Historico</a>
          <a id='linksMenu' href="/home">Vendas</a>
          <a id='linksMenu' href="/home">Clientes</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
