import React from 'react'
import us from "rc-picker/es/locale/en_US";
import momentGenerateConfig from 'rc-picker/es/generate/moment'
import {BsCalendar} from 'react-icons/bs'
import Picker from 'rc-picker';
import {Form} from 'react-bootstrap'

const  DatePickers = () => {

  return (
    <div className="my-5 bg-white border p-5">
      <div className="mv-5 py-5">
        <h1>Date picker</h1>
        <hr />
        <Form.Group>
          <Picker
            style={{width: '200px'}}
            generateConfig={momentGenerateConfig}
            locale={us}
            className="form-group"
            allowClear
            suffixIcon={<span><BsCalendar /></span>}
          />
          <label>From</label>
        </Form.Group>
      </div>
    </div>
  );
}

export default DatePickers
