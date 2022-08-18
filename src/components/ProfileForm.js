import React, {useState} from 'react'

function ProfileForm({submit}) {
    const [profile, setProfiles] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
    });
    const handler = (event) => {
        setProfiles((prev) => ({
            ...prev,
            [event.Target.name]: event.currentTarget.value
        })); 
        
    }
    const handleForm = (e) => {
        e.preventDefault();
        submitEvent(profile)
    }
    }
    


  return (
      <div> className="formContainer">
          <h3>Profile Form</h3>
        
              
                  <legend>Bio data</legend>
                  <div className="name">
                      <label>First Name
                          <input name="firstname" value=
                              {profile.firstname} type="text" onChange={handler} />
                    
                      </label>
                  </div>
                  
                  <div className="name">
                      <label>Email
                          <input name="phone" value=
                              {profile.phone} type="tel" onChange={handler}/>
                      </label>
      
                  </div>
                  
  )


export default ProfileForm 
