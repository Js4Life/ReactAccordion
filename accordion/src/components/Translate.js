// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        label:'Afrikans',
        value:'af'
    },{
        label:'Arabic',
        value:'ar'
    },{
        label:'Hindi',
        value:'hi'
    }
];

const Translate = () => {

    const [language,setLanguage] = useState(options[0]);
    const [text,settext]=useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
            <input value={text} onChange={(e)=> settext(e.target.value)}/>
            </div>
            <Dropdown 
            label="Select a Language"
            selected = {language}
            onSelectChange = {setLanguage}
            options={options}/>
        </div>
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language} />
        </div>
    )
}

export default Translate;