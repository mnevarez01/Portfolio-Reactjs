import React from 'react';
import './style.css'
import { Button, TextField } from '@material-ui/core';

const Contact = () => {
  return (
    <>
      <h2>Contact Me:</h2>
      <div className="ContactPage">
        <h3>Please reach out!</h3>

        <form>
          <div className="form-group">
            {/* <label forHTML="exampleFormControlInput1">Name</label> */}
            <TextField fullWidth='true' id="filled-basic" label="Name" variant="filled" />
          </div>
          <hr />
          <div className="form-group">
            {/* <label forHTML="exampleFormControlInput1">Email address</label> */}
            <TextField fullWidth='true' id="filled-basic" label="Email" variant="filled" />
          </div>
          <hr />

          <div className="form-group">
            {/* <label forHTML="exampleFormControlTextarea1">Message</label> */}
            <TextField fullWidth='true' id="filled-basic" label="Leave a Message" variant="filled" multiline="true" />
          </div>
          <Button variant="contained" color="primary">Send</Button>

        </form>

      </div>
    </>
  )
}
export default Contact
