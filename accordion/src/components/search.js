import React , {useState , useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term,setTerm] = useState('programming');
    const [debounced,setdebouncedTerm] =useState(term);
    const [results,setResults]=useState([]);


    console.log('i run with every render');

    console.log('results',results);

   useEffect(() => {
        const timerID = setTimeout(() => {
                setdebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerID);
        }
    },[term]);

    useEffect(()=>{
        const search = async () => {
            const {data}   =   await axios.get('https://en.wikipedia.org/w/api.php',{
                    params: {
                        action :'query',
                        list:'search',
                        origin:'*',
                        format:'json',
                        srsearch:debounced
                    }
                });

                setResults(data.query.search);
           }

           search();

    },[debounced])

    // useEffect( () => {

        // console.log('initial render or term was changed');
        // if(term && !results.length) {

        //        search();

        //    } else
        //     {
        //     const timeoutId = setTimeout(() => {
        //         if(term) {
        //             search();
        //         }
        //       }, 500);
    
        //       return () => {
        //           clearTimeout(timeoutId)
        //       }
        //    }

    
           
        //  axios.get('adnajfaj').then(res =>{
        //        console.log('res',res)
        //    })
    
    // } ,[term ,results.length])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span 
                    dangerouslySetInnerHTML={{__html:result.snippet}}>
                    </span>
                  
                </div>
            </div>
        );
    })


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                    className="input"
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;