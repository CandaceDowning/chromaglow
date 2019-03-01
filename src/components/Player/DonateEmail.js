import React, { Component } from 'react';
import DonateChart from './DonateChart'
import { connect } from "react-redux";
import { updateScore, getPlayer } from "../../ducks/reducer";


class DonateEmail extends Component {

    constructor(props){
        super(props)

        this.state = {
            donated: false,
            poor: false
        }
    }

    donate = () =>{

        //checks if the player has a hi_score and updates state accordingly
        if(this.props.player.score > 0){
        this.props.updateScore(this.props.player.id, 0).then(this.props.getPlayer());
        this.setState({donated: true});            
        }

        if(this.props.player.score === 0){
            this.setState({donated: true, poor: true})
        }

    }


    render(){
        return(
            <div className="donation">

                <h1 className="donate-title">SPACE ORPHANS GUILD</h1>
                
                
               <div className="chart-text-box">
                
                <div className="donate-head" >                   
                    <h2 className="chart-title" >OUR TOP FIVE DONORS</h2>
                    <div className='donate-chart'><DonateChart /></div>
                    <h2 className="donate-subtitle" >JOIN OUR TOP DONORS RING AND BECOME A PART OF SOMETHING SPECIAL TODAY!</h2>
                    <button className="donatebtn" onClick={this.donate}>DONATE</button>
                </div>


                <div className='donate-box'>
                {!this.state.donated && !this.state.poor?

                
                <div className='donate-text'>
                    <p>ACROSS THE KNOWN UNIVERSE WE SUPPORT THE ORPHANS OF THE CLASH BY PROVIDING THE BASIC NEEDS OF DAILY LIFE. </p>
                    <p>HELP THE SPACE ORPHANS GUILD TODAY FIND EACH CHILD A NEW HOME. </p>
                    <p>IF YOU ACT NOW YOU CAN PARTICIPATE IN OUR MOST RECENT AND EXCITING PROGRAM TO TEACH THE ORPHANS SKILLS THAT THEY WILL VALUE FOR LIFE. DONATE YOUR SALVAGE TODAY AND WE WILL SEND YOU A COST EFFECTIVE CREW MEMBER TO HELP YOU IN THE CLASH AND HELP GET REVENGE ON THE ENEMY THAT TOOK THESE ORPHANS PARENTS. A GREAT OPPORTUNITY FOR THE CHILDREN AND FOR YOU! MAKE IT TO THE TOP DONOR RING TODAY AND RECIEVE A PERMANENT CREWMEMBER FROM OUR GRADUATING CLASS!</p> 
                </div>
                

               
                : this.state.donated && !this.state.poor ?
                
                <div className='donate-text'> 
                    <p>THANK YOU FOR YOUR DONATION.</p> 
                    <p>YOUR CREWMEMBER WILL BE ARRIVING ON THE NEXT TRANSPORT!</p>
                </div>
                
                : 

                <div className='donate-text'>YOU HAVE NO SALVAGE TO DONATE. GET BACK OUT THERE AND CLASH!</div>
            }
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { updateScore, getPlayer }
)(DonateEmail);