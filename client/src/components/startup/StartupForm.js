import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { addStartup } from "../../actions/startup";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const StartupForm = ({ addStartup, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    stage: "",
    profit: "",
    bio: "",
    founder: "",
    founded: "",
    fOrb: "",
    address: "",
    registrationNumber: "",
  });

  let {
    name,
    website,
    stage,
    profit,
    founded,
    bio,
    fOrb,
    address,
    registrationNumber,
    founder,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addStartup(formData, history);
  };

  return (
    <div>
      <h2>Fill out the Form. Each field is required</h2>
      <br />
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter the name of the company"
            value={name}
            name="name"
            onChange={(e) => onChange(e)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicString">
          <Form.Label>Website or App Link</Form.Label>
          <Form.Control
            type="string"
            placeholder="Website"
            value={website}
            name="website"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicString">
          <Form.Label>Name of the Founder</Form.Label>
          <Form.Control
            type="string"
            placeholder="Founder's Name"
            value={founder}
            name="founder"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Stage</Form.Label>
          <Form.Control
            required
            value={stage}
            name="stage"
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
            onChange={(e) => onChange(e)}
          >
            <option value="0">Choose...</option>
            <option value="1">Ideation</option>
            <option value="2">Validation</option>
            <option value="3">Early Traction</option>
            <option value="3">Scaling</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Profit Earned till Now?</Form.Label>
          <Form.Control
            required
            value={profit}
            name="profit"
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
            onChange={(e) => onChange(e)}
          >
            <option value="0">Choose...</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Funded or BootStrapped</Form.Label>
          <Form.Control
            required
            value={fOrb}
            name="fOrb"
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
            onChange={(e) => onChange(e)}
          >
            <option value="0">Choose...</option>
            <option value="1">Funded</option>
            <option value="2">BootStrapped</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Select Date</Form.Label>
          <Form.Control
          required
            type="date"
            name="founded"
            placeholder="Foundation Date"
            value={founded}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicString">
          <Form.Label>City and State of your Startup</Form.Label>
          <Form.Control
          required
            type="string"
            placeholder="Address"
            value={address}
            name="address"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicString">
          <Form.Label>Something about your Startup</Form.Label>
          <Form.Control
            type="string"
            placeholder="About"
            value={bio}
            name="bio"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicString">
          <Form.Label>Registartion Number of your Startup</Form.Label>
          <Form.Control
            type="string"
            placeholder="Registartion"
            value={registrationNumber}
            name="registrationNumber"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="login-back btn btn-secondary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

StartupForm.propTypes = {};

export default withRouter(connect(null, { addStartup })(StartupForm));
