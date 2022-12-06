import React from "react";
import '../styles/onboard.css';


const Onboarding = () => {

  const handleSubmit = () => {
    console.log('submitted')
  }
  const handleChange = () => {
    console.log('changed')
  }
  return (
<>

    <div className="form-cont">
    <h2>Create an account</h2>
    <form className="form" action="" onSubmit={handleSubmit}>
    <section className="left-form">
      <div>

        <label htmlFor="first_name">Name</label>
        <input type="text" name="first_name" id="first_name" required={true} value={""} onChange={handleChange} />

      </div>
      <div>
        <label>Birthday</label>

        <div className="radio">

        <input type="number" name="dob_day" id="dob_day" placeholder="DD" required={true} value={""} onChange={handleChange} />

        <input type="number" name="dob_month" id="dob_month" placeholder="MM" required={true} value={""} onChange={handleChange} />

        <input type="number" name="dob_year" id="dob_year" placeholder="YYYY" required={true} value={""} onChange={handleChange} />

      </div>
    </div>

      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location"/>
      </div>

      <div>
        <label htmlFor="about">Short introduction</label>
        <textarea maxlength="200" name="about" id="about" required={true} value={""} placeholder="Tell about yourself" onChange={handleChange} ></textarea>
      </div>



      <small>Gender</small>

      <div className="radio">

        <input type="radio" id="man-gender-identity" name="gender_identity" value="man" onChange={handleChange} checked={false}/>
        <label for="man-gender-identity">Male</label>
       
        <input type="radio" id="woman-gender-identity" name="gender_identity" value="woman" onChange={handleChange} checked={false}/>
        <label for="woman-gender-identity">Female</label>
      
        <input type="radio" id="other-gender-identity" name="gender_identity" value="other" onChange={handleChange} checked={false}/>
        <label for="other-gender-identity">Other</label>

        </div>

        <label htmlFor="show-gender">Show gender on my profile</label>
        <input type="checkbox" id="show-gender" name="show_gender" onChange={handleChange} checked={false}/>

        <small>Interested in</small>

      <div className="radio">

      <input type="radio" id="man-gender-interest" name="gender_interest" value="man" onChange={handleChange} checked={false}/>
        <label for="man-gender-interest">Male</label>
       
        <input type="radio" id="woman-gender-interest" name="gender_interest" value="woman" onChange={handleChange} checked={false}/>
        <label for="woman-gender-interest">Female</label>
      
        <input type="radio" id="everyone-gender-interest" name="gender_interest" value="everyone" onChange={handleChange} checked={false}/>
        <label for="everyone-gender-interest">Everyone</label>
        
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

      
        <label htmlFor="q1">Lyrics or melody, which is more important to you?</label>

        <div className="radio1">
        <input type="radio" name="lyrics" id="lyrics" value="lyrics" />
        <label htmlFor="lyrics">Lyrics</label>
        <input type="radio" name="melody" id="melody" value="melody" />
        <label htmlFor="melody">Melody</label>
        <input type="radio" name="" id="both" value="both" />
        <label htmlFor="both">Both</label>
      </div>
        

      <div>
        <label htmlFor="q2">In the movie of your life, which song plays at the end credits?</label>
        <input type="text" name="q2" id="q2"/>
      </div>

      <div>
        <label htmlFor="q3">Let's get spicy! Song to get you into the mood?</label>
        <input type="text" name="q3" id="q3"/>
      </div>

      <small>What are your favorite eras of music?</small>

      <div className="eras">

      <div>

      <div>
        <input type="checkbox" name="" id="50s" value="50s" />
        <label htmlFor="50s">50s</label>
      </div>
      
      <div>
        <input type="checkbox" name="" id="60s" value="60s" />
        <label htmlFor="60s">60s</label>
      </div>

      <div>
        <input type="checkbox" name="" id="70s" value="70s" />
        <label htmlFor="70s">70s</label>
      </div>
     
      <div>
      <input type="checkbox" name="" id="80s" value="80s" />
      <label htmlFor="80s">80s</label>
      </div>

      </div>

      <div>

      <div>
        <input type="checkbox" name="" id="90s" value="90s" />
        <label htmlFor="90s">90s</label>
      </div>

      <div>
        <input type="checkbox" name="" id="00s" value="00s" />
        <label htmlFor="00s">00s</label>
      </div>

      <div>
        <input type="checkbox" name="" id="10s" value="10s" />
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
