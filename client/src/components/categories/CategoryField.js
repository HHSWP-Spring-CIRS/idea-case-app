import React from 'react';

export default ({ input, type, label, meta: { error, touched } }) => {
  if (type === 'text' || type === 'number') {
    return (
      <div className="mv3">
        <label className="db fw6 lh-copy f5">{label}</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          {...input} style={{ marginBottom: '5px' }} type={type} />
        <div style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mv3">
        <label className="db fw6 lh-copy f5">{label}</label>
        <p>
          <input {...input} name="isActive" type="radio" id="yes" value="1" />
          <label className="db fw6 lh-copy f5" htmlFor="yes">Yes</label>
        </p>
        <p>
          <input {...input} name="isActive" type="radio" id="no" value="0" />
          <label className="db fw6 lh-copy f5" htmlFor="no">No</label>
        </p>
        <div style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  }
};
