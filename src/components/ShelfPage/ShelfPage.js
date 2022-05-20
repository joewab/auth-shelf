import React from 'react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {
  const [newThing, setNewThing] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_THING',
      payload: { 
        newThing,
        newImageUrl
      }
    })
    setNewThing('');
    setNewImageUrl('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add a thing"
          value={newThing}
          onChange={(e) => { setNewThing(e.target.value) }}></input>
          <input
          placeholder="add a url"
          value={newImageUrl}
          onChange={(e) => { setNewImageUrl(e.target.value) }}></input>
        <button>Submit!</button>
      </form>
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>
      </div>
    </>


function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelfReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF',
    });
  }, []);

  return (
    <div className='container'>
      <h2>Shelf</h2>
      <ul>
        {shelf.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.image_url} />
              {item.description}
            </li>
          );
        })}
      </ul>
    </div>

  );
}

export default ShelfPage;



// Jack Lund  9:21 AM
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'

// function ThingsForm() {
//   const [newThing, setNewThing] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch({
//       type: 'CREATE_THING',
//       payload: { newThing }
//     })
//     setNewThing('');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="add a thing"
//         value={newThing}
//         onChange={(e) => {setNewThing(e.target.value)}}></input>
//       <button>Submit!</button>
//     </form>
//   );
// }


// export default ThingsForm;
