import React from 'react';
import './styles.css'

const BoutonRenvoi = (props) => {
    let composant  = props.composant;
    let newClasse  = props.newClasse;
    let function1 = props.function1;
    let visu = props.visu;
    return (
        <button id="boutton" className={newClasse} onClick={function1} style={{display:visu}}>
            {composant}
        </button>
    );
};

export default BoutonRenvoi;