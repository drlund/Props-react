import React from 'react';
import ReactDOM from 'react-dom';
// import Multi, {BoaTarde} from './components/Multiplos';
// import Saudacao from './components/Saudacao';
import Pai from './components/Pai';
import Filho from './components/Filho';

ReactDOM.render(
    <div>
        {/* <Saudacao nome="Patrícia" tipo="Bom dia" /> */}
        <Pai nome= 'Paulo' sobreNome='Pereira'>
            <Filho nome="João" sobreNome='Pereira' />
            <Filho nome="Pedro" sobreNome='Pereira' />
            <Filho nome="Ana" sobreNome='Pereira' />
        </Pai>
    </div>
    // <div>
    //     <Multi.BoaNoite nome = "Paulo"/>
    //     <BoaTarde nome = "João" />
    // </div>,
 
,document.getElementById('root'));