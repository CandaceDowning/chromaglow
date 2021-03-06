import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class ClashEnd extends Component {
  render() {
    return (
      <div>
        <h1 className="end">Salvage: <br></br>{this.props.salvage}</h1>

        <div className="dash">
          <div className="leftbtn">
            <Link to="/games">
              <button className="btn1"/>
            </Link>
          </div>

          <div className="btn-key-screen">
            <div className="key-box">
              <div className="key-holder">
                <div className="btn1-key key" />
                <p>SURRENDER</p>
              </div>
              <div className="key-holder">
                <div className="btn2-key key" />
                <p>BACK TO BASE</p>
              </div>
              <div className="key-holder">
                <div className="btn3-key key" />
                <p />
              </div>
              <div className="key-holder">
                <div className="btn4-key key" />
                <p />
              </div>
            </div>
          </div>

          <div className="rigthbtn">
            <div >
              <Link to="/games">
                <button className="btn2" onClick={()=>this.props.end()} />
              </Link>
            </div>

            <div className="bottombtn">
              <button className="btn3" />
              <button className="btn4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
