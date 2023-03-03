import React from "react";
import Footer from "./components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";

const CompleteForm = () => {
    const { categories } = useSelector(state => state.categories);
  return (
    <>
      <nav className="thing1">
        <div className="formLogo">
          <a href="/">
            <img src="./images/logo-new-edit-01.png" />
          </a>
        </div>
      </nav>
      {/* <nav className="thing2">
        <div className="personal-info-text">
          <h1>Personal Information</h1>
        </div>
      </nav> */}



      <div className="personal-form-body">
        <main className="personal-form-container">
        <section className="personal-form-section">
        <form action="" className="personal-form">
        <label>Hazard Analysis and Critical Control Points (HAACP) Certification</label>
        <input type="file" placeholder="Hazard Analysis and Critical Control Points (HAACP) Certification" /> <br />
        <label>Munual Handling Certification</label>
        <input type="file" placeholder="Munual Handling Certification" /> 
        <label for="insurance">Insurance</label>
        <input type="file" id="insurance" name="insurance" placeholder="Insurance" /> <br />
        <label for="other">Other</label>
        <input type="file" id="other" name="other" placeholder="Other" /> <br />


        <label>What is your speciality?</label>
        <select 
                      className="form-control"
                      name='category'>
                        <option>Choose One...</option>
                        {categories &&
                          categories.map((c) => (
                            <option key={c._id} value={c._id}>
                              {c.category_name}
                            </option>
                          ))}
                      </select>


        <textarea name="" id="" cols="30" rows="10" placeholder="Why do you want to become a cook?"></textarea>


        {/* <input type="text" placeholder="Your last name"> <br>
        <input type="email" placeholder="Your email address"> <br>
        <input type="tel" placeholder="+234567890"> <br>
        <input type="text" placeholder="Your country"> <br>
        <input type="text" placeholder="Your startup sector"> <br>
        <input type="text" placeholder="Your startup stage"> <br>
        <input type="text" placeholder="Team size"> <br>
        <textarea name="" id="" cols="30" rows="10" placeholder="In not more than 350 words, tell us what your startup does and problems it aims to solve"></textarea>
        <input id="button" type="button" value="APPLY"> */}
      </form>
        </section>
        </main>
      </div>

      {/* <div className="personal-form-container">
        <section className="personal-form-body">
          <form>
            <div className="form-control text">
              <label>
                Hazard Analysis and Critical Control Points (HAACP)
                Certification
              </label>
              <input class="personal-info-input" type="file" />
            </div>

            <div className="form-control text">
              <label>
                Munual Handling Certification
              </label>
              <input class="personal-info-input" type="file" />
            </div>

            <div className="form-control text">
              <label>
                Insurance
              </label>
              <input class="personal-info-input" type="file" />
            </div>

            <div className="form-control text">
              <label>
                Other
              </label>
              <input class="personal-info-input" type="file" />
            </div>

            <div id="textarea-container">
            <textarea placeholder="Why do you want to be a cook?"></textarea>
            </div>
          </form>
        </section>
      </div> */}

      <Footer />
    </>
  );
};

export default CompleteForm;
