```javascript
// pages/aboutSolution.js
import {use} from 'react';

export default function About(){
    const data = use('/api/data');
    if(!data.data){
        return <h2>Loading...</h2>
    }else{
        return (
            <div><h2>About Page</h2>
            <p>Data from API: {data.data.message}</p>
            </div>
        );
    }
}
```