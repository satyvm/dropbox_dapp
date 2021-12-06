import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box2.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/itzsatya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={box} width="30" height="30" className="align-top" alt="logo" />
          DStorage
        </a>
        {/* <ul className="navbar-nav px-3">
          <b className='text-white'>{"Account: "}{this.props.account}</b>
        </ul> */}
         <ul className="navbar-nav px-3">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {"Account: "}{this.props.account ? this.props.account.substring(0,5) : "lol"}...{this.props.account ? this.props.account.substring(38,42) : "lol"}
              </a>
            </small>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;