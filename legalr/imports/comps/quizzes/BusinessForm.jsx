import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class BusinessForm extends Component {
  render () {
    return (
    <div>
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12">
            <TextField
             id="password-input"
             label="Company Name"
             className="textinput"
             type="text"
             autoComplete="current-password"
             margin="normal"
           />
          </Col>
          <Col md="12" sm="12" xs="12">
            <TextField
             id="password-input"
             label="Password"
             className="textinput"
             autoComplete="current-password"
             margin="normal"
           />
          </Col>
          <Col md="12" sm="12" xs="12">
            <TextField
             id="password-input"
             label="Password"
             className="textinput"
             autoComplete="current-password"
             margin="normal"
           />
          </Col>
        </Row>
      </Container>

</div>
    )
  }

}

BusinessForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessForm);
