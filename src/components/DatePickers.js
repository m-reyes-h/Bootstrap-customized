import React from 'react'
import us from "rc-picker/es/locale/en_US";
import momentGenerateConfig from 'rc-picker/es/generate/moment'
import Picker from 'rc-picker';

const  DatePickers = () => {

  return (
    <div className="my-5 py-5">
      <Picker
        style={{width: '200px'}}
        generateConfig={momentGenerateConfig}
        locale={us}
        allowClear
        className="form-group"
      />
    </div>
  );
}

export default DatePickers
