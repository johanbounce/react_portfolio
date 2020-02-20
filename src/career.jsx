import React, { Component } from "react";
import axios from "axios";
import CareerCard from "./CareerCard";
import { UndrawDashboard } from "react-undraw-illustrations";

class Career extends Component {
    state = {
        career: []
      };
      componentDidMount() {
        axios.get('./src/data/career.json')
          .then(response => {
            this.setState({
              career: response.data
            })
          })
      }
    
      render() {
        const career = this.state.career;
        let careerList;
    
        if (career.length > 0) {
            careerList = career.map(career => {
              return (
                <div id={'career-' + career.id} key={career.id}>
                  <CareerCard career={career} />
                </div>
              );
            });
          }
    
        return (
          <div style={{margin: 80}} className="ui main container">
            <div className="ui main container">
            <div className="ui stackable four column grid">
              <div className="column">
                <h1 className="ui header">My Websites</h1>
                <p>
                  These are the websites that I have owned and operated in my carreer this far. Hopefully, one day I will 
                </p>
              </div>
            </div>
            <div className="ui stackable one column grid">{careerList}</div>
          </div>
        </div>
        );
      }
    }
  
  export default Career;