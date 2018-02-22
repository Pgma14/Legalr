import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Disclaimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <a onClick={this.toggle}>Disclaimer</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <h3>Please Note</h3>
            <p>
              Legalr.co functions as an educational tool and does not substitute formal legal advise. Consult a legal professional before taking any action based on the content of this database. By using Legalr.co you acknowledge that Legalr is not held responsible
              in the event of any issues, pertaining to law or any other matter, which may arise based on the information presented by the database. You waive any claims against us by using our services. If you reside in a jurisdiction in which your use of
              Legalr would cause us to have violated a law or out of which could arise a claim of action against us, then you are not permitted to use Legalr.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sounds good!</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
