import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Facts from './components/Facts';
import FavImages from './components/FavImages';
import NavBar from './components/NavBar';
import {Switch, Route} from 'react-router-dom';
import Axios from 'axios';

function App() {
    const [facts, setFacts] = useState(facts)
    const [catFact, setCatFact] = useState('')
    const [image, setImage] = useState({ url: '', width: 0, height: 0})

    useEffect(()=>{
        getFacts()
    })

    getFacts = () =>{
        axios.get("getfacts")
        .then(response=>{
            console.log(response.data)
            setFacts(response.data)
        }, () =>console.log(facts))
        .catch(err=>console.log(err))
    }
    
    return(
        <div>
            <Navbar />
            <div className= 'content-container'>
                <Switch>
                    <Route exact path= '/' component ={Home} />
                    <Route path ='/facts' component ={Facts} />
                    <Route path ='/image' component={FavImages} />
                </Switch>
            </div>
        </div>
    );
}
export default App