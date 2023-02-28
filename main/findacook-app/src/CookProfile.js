import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Badge,
  Form,
  FormControl,
} from "react-bootstrap";
import HamburgNavbar from './components/HamburgNavbar';

function CookProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Name",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, justo euismod egestas tempor, libero libero iaculis purus, quis convallis enim mi ac magna.",
    facebook: "#",
    instagram: "#",
    twitter: "#",
    stars: "4.5",
    reviews: "5",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setProfile({
      ...profile,
      name: event.target.name.value,
      bio: event.target.bio.value,
      facebook: event.target.facebook.value,
      instagram: event.target.instagram.value,
      twitter: event.target.twitter.value,
    });
    setIsEditing(false);
  };

  const [isOpen, setIsOpen] = useState(false);
const [clicksOutside, setClicksOutside] = useState(0);
const navbarRef = React.useRef(null);
const [selectedFile, setSelectedFile] = useState();

const handleClickOutside = event => {
  if (navbarRef.current && !navbarRef.current.contains(event.target)) {
    setClicksOutside(clicksOutside + 1);
  }
};

React.useEffect(() => {
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
});

React.useEffect(() => {
  if (clicksOutside > 0) {
    setIsOpen(false);
    setClicksOutside(0);
  }
}, [clicksOutside]);

const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
};

  return (
    <><HamburgNavbar setIsOpen={setIsOpen}/>
    <Container id="profileBG">
      <Row>
        <Col xs={3}>
          <Image
            id="profileAvater"
            style={{ width: "280px", height: "280px" }}
            src="./images/man.png"
            roundedCircle
          />
        </Col>
        <Col xs={9}>
          {isEditing ? (
            <Form onSubmit={handleSave} id="profileForm">
              <FormControl
                type="text"
                placeholder={profile.name}
                name="name"
                defaultValue={profile.name}
              />
              <br />
              <label>Facebook</label>
              <FormControl
                type="text"
                placeholder={profile.facebook}
                name="facebook"
                defaultValue={profile.facebook}
              />
              <br />
              <label>Instagram</label>
              <FormControl
                type="text"
                placeholder={profile.instagram}
                name="instagram"
                defaultValue={profile.instagram}
              />
              <br />
              <label>Twitter</label>
              <FormControl
                type="text"
                placeholder={profile.twitter}
                name="twitter"
                defaultValue={profile.twitter}
              />
              <br />
              <Badge variant="secondary">{profile.stars} stars</Badge>
              <br />
              <p>Number of Reviews: {profile.reviews}</p>
              <br />
              <FormControl as="textarea" id="profileBio" name="bio" defaultValue={profile.bio} maxLength="300"/>
              <br />
              <Button type="submit">Save</Button>
            </Form>
          ) : (
            <>
            <h1>{profile.name}</h1>
              {profile.facebook && (<><a href={profile.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              {(profile.instagram || profile.twitter) && " | "}</>)}
              {profile.instagram && (<><a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>{profile.twitter && " | "}</>)}
              {profile.twitter && (<a href={profile.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>)}
              <br />
              <Badge variant="secondary">{profile.stars} stars</Badge>
              <br />
              <p>Number of Reviews: {profile.reviews}</p>
              <br />
              <p id="profileBioP">{profile.bio}</p>
              <br />
              <Button id="profileEditBtn" onClick={handleEdit}>EDIT</Button>
            </>
          )}
        </Col>
      </Row>
      <br />
      <hr/>
      <h2 style={{textAlign:"left"}}>Cookbook</h2>
      <Row style={{ display: "flex" }}>
        <div className="card-container">
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Recent Dish</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Chicken Fajitas</Card.Subtitle>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, justo euismod egestas tempor, libero liberoiaculis purus, quis convallis enim mi ac magna.</Card.Text>
                <Card.Link href="#">Learn more</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Recent Dish</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Grilled Salmon</Card.Subtitle>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, justo euismod egestas tempor, libero liberoiaculis purus, quis convallis enim mi ac magna.</Card.Text>
                <Card.Link href="#">Learn more</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Recent Dish</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Beef Stir Fry</Card.Subtitle>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, justo euismod egestas tempor, libero liberoiaculis purus, quis convallis enim mi ac magna.</Card.Text>
                <Card.Link href="#">Learn more</Card.Link>
              </Card.Body>
            </Card>
  	      </Col>
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Recent Dish</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Beef Stir Fry</Card.Subtitle>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, justo euismod egestas tempor, libero liberoiaculis purus, quis convallis enim mi ac magna.</Card.Text>
                <Card.Link href="#">Learn more</Card.Link>
              </Card.Body>
            </Card>
  	      </Col>
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Recent Dish</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Beef Stir Fry</Card.Subtitle>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, justo euismod egestas tempor, libero liberoiaculis purus, quis convallis enim mi ac magna.</Card.Text>
                <Card.Link href="#">Learn more</Card.Link>
              </Card.Body>
            </Card>
  	      </Col>
        </div>
      </Row>
    </Container></>
  );
};
export default CookProfile;

