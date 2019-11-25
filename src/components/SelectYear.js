
import React, { Component } from 'react';


class SelectYear extends Component {

    render() {
        let minOffset = 0, maxOffset = 60;
        let thisYear = (new Date()).getFullYear() - 18;
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
    
        const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
        return(
            <div className="form-group">
                <select 
                    className="form-control custom-select"
                    value={this.props.value}
                    onChange={this.props.action}
                    name={this.props.name} 
                    required={this.props.required}        
                >
                    <option value="">{this.props.placeholder}</option>
                    {yearList}
                </select>
            </div>
        );
    }
}
export default SelectYear;