import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';
import { getCupones } from './action';
import Cupon from './cupon.cmpt'


const mapState = (state) => {
    return {
    cupones: state.cup.cupones
}
}

const mapDispatch = (dispatch) => {
    return {
       fetchCupones: ( callback)=>{
            dispatch(getCupones( callback));
        },
        
    };
}

   


class App extends Component {
  constructor(props){
        super(props);
       
    }

   componentWillMount = () => {
     this.props.fetchCupones(function(){})
     }


  render() {
    return (
      <div className="App">
        <header className="App-header">
      
          <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">Welcome Jess2223, thanks for joining.</a>
          <a href="#" className="cross" aria-label="Close Account Info Modal Box">&times;</a>

        </header>
        <div className="body">
             <h1> {this.props.cupones.bonuses ? this.props.cupones.bonuses.length : ""} BONUSES FOR YOU TO USE NOW </h1>
          <div className="wrapper">
              <div></div>
                <div className="wrapper-cupones">
                {
                  this.props.cupones.bonuses &&
                  this.props.cupones.bonuses.map((bonuses)=>{
              return(
                 <Cupon bonuses={bonuses}/>
                )
             })
                }
              </div>
              <div></div>
         </div>
        </div>
        <div className="body">
             <h1> {this.props.cupones.offers ? this.props.cupones.offers.length : ""} BONUSES FOR YOU TO USE NOW </h1>
          <div className="wrapper">
              <div></div>
                <div className="wrapper-cupones">
                {
                  this.props.cupones.offers &&
                  this.props.cupones.offers.map((offers)=>{
              return(
                 <Cupon offers={offers}/>
                )
             })
                }
              </div>
              <div></div>
         </div>
        </div>
        <div className="body">
             
          <div className="wrapper-blocked">
              <div></div>
                <div className="blocked">
                {
                  this.props.cupones.blocked &&
                  this.props.cupones.blocked.map((blocked)=>{
              return(
                 <Cupon blocked={blocked}/>
                )
             })
                }
                <div className="extra"></div>
              </div>
              <div></div>
         </div>
        </div>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(App);
