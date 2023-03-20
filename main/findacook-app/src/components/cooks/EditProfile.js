import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCook } from '../../redux/actions/cookActions';
import { getCategories } from "../../redux/actions/categoryActions";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function EditProfile() {
  const { cookId } = useParams();
  console.log("TESTY TEST", cookId);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cook } = useSelector((state) => state.cooks);
  const { categories } = useSelector((state) => state.categories);

  const [profile_picture, setProfile_picture] = useState(null);
  const [cook_first_name, setCook_first_name] = useState("");
  const [cook_last_name, setCook_last_name] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [description, setDescription] = useState("");



  useEffect(() => {
    if (!cook) {
      dispatch(getCook(cookId));
      dispatch(getCategories());
    } else {
      setProfile_picture(cook.profile_picture);
      setCook_first_name(cook.cook_first_name);
      setCook_last_name(cook.cook_last_name);
      setSpecialties(cook.specialties);
      setDescription(cook.description);
    }
  }, [dispatch, cookId, cook]);

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    setProfile_picture(image);
  };

  const handleCookSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profile_picture', profile_picture);
    formData.append('cook_first_name', cook_first_name);
    formData.append('cook_last_name', cook_last_name);
    formData.append('specialties', specialties);
    formData.append('description', description);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    await axios.put(`/api/cook/${cookId}`, formData, config)
        .then(res => {
            console.log('Successfully updated cook:', res);
            navigate('/cookdashboard')
        }).catch(err => {
            console.log(err);
        })
  };


  return (
      <>
<Fragment>
<div className="food-form-container">
<div>
            <div className="">

              <form
                className="cook-update-form"
                onSubmit={handleCookSubmit}
                // method="POST"
                encType="multipart/form-data"
              >
                <div className="">
                  <h5 className="cook-update-form-h5">Update Personal Information</h5>
                  {/* <button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button> */}
                </div>
                <div className="">
                  <Fragment>
                    <div className="group">
                      <input
                        type="file"
                        className="form-input"
                        name="profile_picture"
                        accept="images/*"
                        // hidden
                        onChange={handleImageUpload}
                      />
                    </div>

                    {profile_picture && profile_picture.name ? (
                      <span className="badge badge-secondary">
                        {profile_picture.name}
                      </span>
                    ) : profile_picture ? (
                      <img
                        className="img-thumbnail"
                        style={{
                          width: "120px",
                          height: "80px",
                        }}
                        src={`/uploads/${profile_picture}`}
                        alt="Profile Picture"
                      />
                    ) : null}

                    <div className="group">
                      <input
                        type="text"
                        className="form-input"
                        name="cook_first_name"
                        value={cook_first_name}
                        onChange={(e) => setCook_first_name(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>First Name</label>
                    </div>

                    <div className="group">
                      <input
                        type="text"
                        className="form-input"
                        name="cook_last_name"
                        value={cook_last_name}
                        onChange={(e) => setCook_last_name(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Last Name</label>
                    </div>

                    <div className="group">
                      <textarea
                        type="textarea"
                        className="form-input"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Description</label>
                    </div>


                    <div className="group">
                      <div className="form-row">
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="specialties"
                            value={specialties}
                            onChange={(e) => setSpecialties(e.target.value)}
                          >
                            <option>Choose One...</option>
                            {categories &&
                              categories.map((c) => (
                                <option key={c._id} value={c._id}>
                                  {c.category_name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>

                  </Fragment>
                </div>

                {/* TODO: ADD CATEGORY OPTION... */}
                <button type="submit" className="cook-form-footer-button">
                  Submit
                </button>
              </form>

              </div>
              </div>
</div>
</Fragment>








      
      
      </>


  );
}

export default EditProfile;