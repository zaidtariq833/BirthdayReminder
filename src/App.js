import { useState } from 'react';
import './App.css';
import Data from './Data';
import './index.css'
import List from './List';
import ShowList from './ShowList';

function App() {
    const [people, setPeople] = useState(Data)
    const [showPeople, setShowPeople] = useState([])
  return (
    <>
    <main>
        <section className='container'>
        <h3>{showPeople.length} Birthdays Today</h3>
        <List people = {people}/>
        <ShowList showPeople = {showPeople}/>
        <button className='button__app' onClick={() => setPeople([])}> Click here</button>
        <button className='button__app' onClick={() => setShowPeople(Data)}> Show Birthdays</button>
        </section>
    </main>
    </>
  );
}

export default App;
