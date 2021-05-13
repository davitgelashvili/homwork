import React, {useState, useEffect} from 'react';
import Article from '../components/article/article'

function Data(){
    const [items, setItems] = useState([]);

    useEffect(async () => {
        const fetchFn = await fetch(
          'http://fakeapi.jsonparseronline.com/posts?fbclid=IwAR2zKDbsKQbWCOuMzCKkJaHy42E19pP6vpbqBoSA-N_T7sOWn1eNrvfqewo',
        );
        const result = await fetchFn.json();
     
        setItems(result);
    });

    let data = items.map(
        item=> <Article key={item.id} item={item}/>
    )

    return (
        <div className="row">
            {data}
        </div>
    )
}

export default Data