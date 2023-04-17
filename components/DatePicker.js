import React from 'react';

const DatePicker = ({ id, min, max, value, onChange }) => {
  return (
    <input
      type="month"
      id={id}
      min={min}
      max={max}
      value={value ? value : ""}
      onChange={onChange}
    />
  );
};

export default DatePicker;
