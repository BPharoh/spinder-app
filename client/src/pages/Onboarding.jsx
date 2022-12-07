import React, { useState } from "react";
import '../styles/onboard.css';


const Onboarding = () => {

  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    age: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    location: "",
    about: "",
    importance: "",
    credits: "",
    mood: "",
    matches: [],
    url: "",
    eras: new Map(),
  })

  const handleSubmit = () => {
    console.log('submitted')
  }
  const handleChange = (e, position) => {
    console.log('e', e)
    const value = e.target.type === 'checkbox' ?  e.target.checked :  e.target.value
    const name = e.target.name
    console.log('value' + value, 'name' + name)

    const newEras = name.eras.map((item, index) =>
      index === position ? !item : item );
      console.log("newEras", newEras)

    setFormData((prevState) => ({
      ...prevState, 
      [name] : value
    }))
  }

  console.log(formData)

  return (
<>

    <div className="form-cont">
    <h2>Create an account</h2>
    <form className="form" action="" onSubmit={handleSubmit}>
    <section className="left-form">
      <div>

        <label htmlFor="first_name">Name</label>
        <input type="text" name="first_name" id="first_name" required={true} value={formData.first_name} onChange={handleChange} />

      </div>
      <div>
        <label>Birthday</label>

        <div className="radio">

        <input type="number" name="dob_day" id="dob_day" placeholder="DD" required={true} value={formData.dob_day} onChange={handleChange} />

        <input type="number" name="dob_month" id="dob_month" placeholder="MM" required={true} value={formData.dob_month} onChange={handleChange} />

        <input type="number" name="dob_year" id="dob_year" placeholder="YYYY" required={true} value={formData.dob_year} onChange={handleChange} />

      </div>
    </div>

      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" required={true} value={formData.age} placeholder="Age" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location" required={true} value={formData.location} placeholder="Location" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="about">Short introduction</label>
        <textarea maxLength="200" name="about" id="about" required={true} value={formData.about} placeholder="Tell about yourself" onChange={handleChange} ></textarea>
      </div>



      <small>Gender</small>

      <div className="radio">

        <input type="radio" id="man-gender-identity" name="gender_identity" value="man" onChange={handleChange} checked={formData.gender_identity === 'man'}/>
        <label htmlFor="man-gender-identity">Male</label>
       
        <input type="radio" id="woman-gender-identity" name="gender_identity" value="woman" onChange={handleChange} checked={formData.gender_identity === 'woman'}/>
        <label htmlFor="woman-gender-identity">Female</label>
      
        <input type="radio" id="other-gender-identity" name="gender_identity" value="other" onChange={handleChange} checked={formData.gender_identity === 'other'}/>
        <label htmlFor="other-gender-identity">Other</label>

        </div>

        <label htmlFor="show-gender">Show gender on my profile</label>
        <input type="checkbox" id="show-gender" name="show_gender" onChange={handleChange} checked={formData.show_gender}/>

        <small>Interested in</small>

      <div className="radio">

      <input type="radio" id="man-gender-interest" name="gender_interest" value="man" onChange={handleChange} checked={formData.gender_interest === 'man'}/>
        <label htmlFor="man-gender-interest">Male</label>
       
        <input type="radio" id="woman-gender-interest" name="gender_interest" value="woman" onChange={handleChange} checked={formData.gender_interest === 'woman'}/>
        <label htmlFor="woman-gender-interest">Female</label>
      
        <input type="radio" id="everyone-gender-interest" name="gender_interest" value="everyone" onChange={handleChange} checked={formData.gender_interest === 'everyone'}/>
        <label htmlFor="everyone-gender-interest">Everyone</label>
        
        </div>

        <div>
        <label htmlFor="url">Profile Photo</label>
        <input type="url" name="url" id="url" onChange={handleChange} required={true} />
        <div className="photo-container">
       {/* {formData.url && <img src={formData.url} alt="profile pic preview"/>}  */}
        </div>
        </div>

      </section>

      <section className="right-form">

      
        <label>Lyrics or melody, which is more important to you?</label>

        <div className="radio1">
        <input type="radio" name="importance" id="lyrics" value="lyrics" onChange={handleChange} checked={formData.importance === 'lyrics'}/>
        <label htmlFor="lyrics">Lyrics</label>
        <input type="radio" name="importance" id="melody" value="melody"  onChange={handleChange} checked={formData.importance === 'melody'}/>
        <label htmlFor="melody">Melody</label>
        <input type="radio" name="importance" id="both" value="both"  onChange={handleChange} checked={formData.importance === 'both'}/>
        <label htmlFor="both">Both</label>
      </div>
        

      <div>
        <label htmlFor="credits">In the movie of your life, which song plays at the end credits?</label>
        <input type="text" name="credits" id="credits" required={true} value={formData.credits} placeholder="Tell about yourself" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="mood">Let's get spicy! Song to get you into the mood?</label>
        <input type="text" name="mood" id="mood" required={true} value={formData.mood} placeholder="Tell about yourself" onChange={handleChange}/>
      </div>

      <small>What are your favorite eras of music?</small>

      <div className="eras">

      <div>

      <div>
        <input type="checkbox" name="eras" id="50s" value="50s" onChange={handleChange} checked={formData.eras === '50s'}/>
        <label htmlFor="50s">50s</label>
      </div>
      
      <div>
        <input type="checkbox" name="eras" id="60s" value="60s" onChange={handleChange} checked={formData.eras === '60s'}/>
        <label htmlFor="60s">60s</label>
      </div>

      <div>
        <input type="checkbox"  name="eras" id="70s" value="70s" onChange={handleChange} checked={formData.eras === '70s'}/>
        <label htmlFor="70s">70s</label>
      </div>
     
      <div>
      <input type="checkbox" name="eras" id="80s" value="80s" onChange={handleChange} checked={formData.eras === '80s'}/>
      <label htmlFor="80s">80s</label>
      </div>

      </div>

      <div>

      <div>
        <input type="checkbox" name="eras" id="90s" value="90s" onChange={handleChange} checked={formData.eras === '90s'}/>
        <label htmlFor="90s">90s</label>
      </div>

      <div>
        <input type="checkbox" name="eras" id="00s" value="00s" onChange={handleChange} checked={formData.eras === '00s'}/>
        <label htmlFor="00s">00s</label>
      </div>

      <div>
        <input type="checkbox" name="eras" id="10s" value="10s" onChange={handleChange} checked={formData.eras === '10s'} />
        <label htmlFor="10s">10s</label>
      </div>
      </div>
      </div>
      <button type="submit">Submit</button>
      </section>
    
      

      </form>

      </div>


    </>

  )
};

export default Onboarding;
