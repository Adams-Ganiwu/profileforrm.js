import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileCard'

function App() {

    const [allprofiles, setAllprofiles] = useState([
        {
            firstname: "Gamson",
            lastname: "Alhaji",
            email: "Gamson@gmail.com",
            phone:"0540604084"
        }
    ])

    const updateallprofiles = (profiles) => {
        let arr = allprofiles;
        arr.push(profile)
        setAllprofiles([...arr])
    };

    return (
      <>
      <div className='app'>
          <h1>Our profile maker</h1>
      </div>
            <ProfileForm submit={updateallprofiles} />
            <hr />
            <div className='list'>
                {allProfiles.map((person, index) => (
                    <ProfileCard key={index} card={person} />
                ))}

            </div>
            </>
  )
}

export default App

