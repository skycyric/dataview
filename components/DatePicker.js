import React, { useEffect } from 'react';

const DatePicker = ({ id, min, max, value, onChange }) => {
  useEffect(() => {
    const dateInput = document.getElementById(id);
    if (min) {
      dateInput.setAttribute("min", min);
    }
    if (max) {
      dateInput.setAttribute("max", max);
    }
  }, [id, min, max]);

  return (
    <input
      type="month"
      id={id}
      value={value ? value : ""}
      onChange={onChange}
    />
  );
};

export default DatePicker;
