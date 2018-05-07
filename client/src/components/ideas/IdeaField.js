import React from 'react';

export default ({
  input,
  inputType,
  label,
  options,
  meta: { error, touched }
}) => {
  if (inputType === 'text' || inputType === 'number') {
    return (
      <div className="mv3">
        <label className="db fw6 lh-copy f5">{label}</label>
        <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          {...input} style={{ marginBottom: '5px' }} type={inputType} />
        <div style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  } else if (inputType === 'radio') {
    return (
      <div className="mv3">
        <label className="db fw6 lh-copy f5">{label}</label>
        <p>
          <input
            {...input}
            name="isReadyForComments"
            type={inputType}
            id="yes"
            value="1"
          />
          <label className="db fw6 lh-copy f5" htmlFor="yes">Yes</label>
        </p>
        <p>
          <input
            {...input}
            name="isReadyForComments"
            type={inputType}
            id="no"
            value="0"
          />
          <label className="db fw6 lh-copy f5" htmlFor="no">No</label>
        </p>
        <div style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mv3">
        <label className="db fw6 lh-copy f5">{label}</label>
        <select className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" {...input} name="categoryId">
          {options}
        </select>
        <div style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  }
};
