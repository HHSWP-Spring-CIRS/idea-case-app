import React from 'react'

export default ({ input, label, meta: { error, touched } }) => (
  <div className="mv3">
    <label className="db fw6 lh-copy f5">{label}</label>
    <input 
      className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      {...input} style={{ marginBottom: '5px' }} />
    <div style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
)
