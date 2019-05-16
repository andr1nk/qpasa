import React from 'react'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { thisExpression } from '@babel/types';


export default function Locationcheckbox(props) {
  console.log(props)
  return (
    <React.Fragment>
      {/* <li>
        <div className="filter-form-wrapper">
          <div className="custom-control custom-checkbox" id="filter-location-box">
            <input name={props._id} type="checkbox" className="custom-control-input" id={props._id} value={props._id} />
            <label className="custom-control-label" htmlFor={props._id} >{props.location.name}</label>
          </div>
        </div>
      </li> */}
      <Checkbox value={props.name}/>
    </React.Fragment>
  )
}
