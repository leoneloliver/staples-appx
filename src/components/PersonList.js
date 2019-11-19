import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
// import axios from '../axios';
import axios from 'axios';

class PersonList extends Component {

  state = {
    persons: [],
    
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render(){
    const { t } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="card mt-5">
            <div className="card-header">List</div>
            <div className="card-body">
              <ul>
                { this.state.persons.map(person => <li>{t('hello.label')} - {person.name}</li>)}
              </ul>
              
            </div>
            <div className="card-footer text-center"><button type="button" className="btn btn-danger">Click</button></div>

          </div>

        </div>
        
      </React.Fragment>
      
     
    )
  };
};

export default withTranslation()(PersonList);