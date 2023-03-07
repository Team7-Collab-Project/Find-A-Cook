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
          <h2>Personal Information</h2>
        <form action="" className="personal-form">
        <label>Hazard Analysis and Critical Control Points (HAACP) Certification</label>
        <input type="file" placeholder="Hazard Analysis and Critical Control Points (HAACP) Certification" /> <br />
        <label>Munual Handling Certification</label>
        <input type="file" placeholder="Munual Handling Certification" /> 
        <label for="insurance">Insurance</label>
        <input type="file" id="insurance" name="insurance" placeholder="Insurance" /> <br />
        <p>Don't have insurance? <a href="https://cookinsurance.cc/">Get insured today!</a></p>
        <label for="other">Other</label>
        <input type="file" id="other" name="other" placeholder="Other" /> <br />


        {/* TODO: GARDA VETTING + DISTANCE OPTION */}

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
        <a href="/submit"><button className="applicationBtn">Apply</button></a>

      </form>
        </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default CompleteForm;
