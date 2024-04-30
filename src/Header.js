import React from 'react';
import teddy from './icons8-teddy-bear-48.png';
import photo from './photo1.png';
import invi from './invi.png';
import desc from './desc.png'

const Header = () => {
  return (
    <div className='wish'>
        
      <p className='fwish'>Wishing you all the best</p>

      <p className='farewish'>Farewell <br/>&nbsp;Dear! <img className='teddy' src={teddy} alt="Teddy Bear" /></p>
     
     <img className='photo' src={photo}/><br/>
     <img className='photo2' src={invi}/><br/>
     <img className="photo3" src={desc}/>
    </div>
  )
}

export default Header