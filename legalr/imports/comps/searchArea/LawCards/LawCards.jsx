import React, {Component} from 'react';

import './LawCards.css';

export class FreedomOfInformation extends Component {
  render () {
    return (
      <div className="wrimagecard wrimagecard-topimage">
          <div className="wrimagecard-topimage_header" id="FreedomOfInformationBackground">
            <center>
              <i className="fa fa-info" id="FreedomOfInformationIcon">
              </i>
            </center>
          </div>

          <div className="wrimagecard-topimage_title text-center" id="FreedomofInformationBottom">
            <h5>Freedom of Information</h5>
          </div>
      </div>
    )
  }
}

export class CryptoCurrency extends Component {
  render () {
    return (
      <div className="wrimagecard wrimagecard-topimage">

        <div className="wrimagecard-topimage_header" id="CryptoCurrencyBackground">
          <center>
            <i className="fa fa-btc" id="CryptoCurrencyIcon">
            </i>
          </center>
        </div>
        <div className="wrimagecard-topimage_title text-center" id="CryptoCurrencyBottom">
          <h5>Crypto</h5>
        </div>

      </div>
    )
  }
}

export class Privacy extends Component {
  render () {
    return (
      <div className="wrimagecard wrimagecard-topimage">
        <div className="wrimagecard-topimage_header" id="PrivacyBackground">
          <center><i className="fa fa-user-secret" id="PrivacyIcon"> </i></center>
        </div>
        <div className="wrimagecard-topimage_title text-center" id="PrivacyBottom">
          <h5>Privacy</h5>
        </div>
      </div>
    )
  }
}

export class Immigration extends Component {
  render () {
    return (
        <div className="wrimagecard wrimagecard-topimage">

          <div className="wrimagecard-topimage_header" id="ImmigrationBackground">
            <center><i className="fa fa-users" id="ImmigrationIcon"> </i></center>
          </div>
          <div className="wrimagecard-topimage_title text-center" id="ImmigrationBottom">
            <h5>Immigration</h5>
          </div>
        </div>
    )
  }
}

export class Firearms extends Component {
  render () {
    return (
        <div className="wrimagecard wrimagecard-topimage">
        <div className="wrimagecard-topimage_header" id="FirearmsBackground">
            <center><i className="fa fa-shield " id="FirearmsIcon"> </i></center>
          </div>
          <div className="wrimagecard-topimage_title text-center" id="FirearmsBottom">
            <h5>Firearms</h5>
          </div>
        </div>
    )
  }
}

export class Cannabis extends Component {
  render () {
    return (
        <div className="wrimagecard wrimagecard-topimage">

          <div className="wrimagecard-topimage_header" id="CannabisBackground">
            <center><i className="fa fa-pagelines" id="CannabisIcon"> </i></center>
          </div>
          <div className="wrimagecard-topimage_title text-center" id="CannabisBottom">
            <h5>Cannabis</h5>
          </div>

        </div>

    )
  }
}

export class Taxes extends Component {
  render () {
    return (
      <div className="wrimagecard wrimagecard-topimage">

        <div className="wrimagecard-topimage_header" id="TaxesBackground">
          <center><i className="fa fa-money " id="TaxesIcon"></i></center>
        </div>
        <div className="wrimagecard-topimage_title text-center" id="TaxesBottom">
          <h5>Taxes</h5>
        </div>

      </div>

    )
  }
}

export class SmallBusiness extends Component {
  render () {
    return (
      <div className="wrimagecard wrimagecard-topimage">

        <div className="wrimagecard-topimage_header" id="SmallBusinessBackground">
          <center><i className="fa fa-briefcase" id="SmallBusinessIcon"> </i></center>
        </div>
        <div className="wrimagecard-topimage_title text-center" id="SmallBusinessBottom">
          <h5>Small Business</h5>
        </div>


      </div>

    )
  }
}
