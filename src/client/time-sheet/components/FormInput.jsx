import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ submitNewSheet }) => {
  const [timeSheet, setTimeSheet] = useState({
    date: new Date(),
    timeSlots: [],
    volunteer: { name: '', id: '' }, // Assuming Volunteer has these properties
    isConfirmed: false,
    isPaid: false,
    notes: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTimeSheet(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleVolunteerChange = (event) => {
    const { name, value } = event.target;
    setTimeSheet(prevState => ({
      ...prevState,
      volunteer: {
        ...prevState.volunteer,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewSheet(timeSheet);
    // Reset form after submission
    setTimeSheet({
      date: new Date(),
      timeSlots: [],
      volunteer: { name: '', id: '' },
      isConfirmed: false,
      isPaid: false,
      notes: '',
    });
  };

  return (
      <div className="formBlock">
        <form onSubmit={handleSubmit}>
          <div>
            <span>Add Time Sheet</span>
          </div>
          <div>
            <input
                type="date"
                name="date"
                onChange={handleChange}
                value={timeSheet.date.toISOString().split('T')[0]}
                required
            />
            <input
                name="name"
                onChange={handleVolunteerChange}
                value={timeSheet.volunteer.name}
                placeholder="Volunteer Name"
                required
            />
            <input
                name="id"
                onChange={handleVolunteerChange}
                value={timeSheet.volunteer.id}
                placeholder="Volunteer ID"
                required
            />
            <textarea
                name="notes"
                onChange={handleChange}
                value={timeSheet.notes}
                placeholder="Notes"
            />
            <div>
              <label>
                <input
                    type="checkbox"
                    name="isConfirmed"
                    checked={timeSheet.isConfirmed}
                    onChange={(e) => setTimeSheet(prev => ({ ...prev, isConfirmed: e.target.checked }))}
                />
                Confirmed
              </label>
            </div>
            <div>
              <label>
                <input
                    type="checkbox"
                    name="isPaid"
                    checked={timeSheet.isPaid}
                    onChange={(e) => setTimeSheet(prev => ({ ...prev, isPaid: e.target.checked }))}
                />
                Paid
              </label>
            </div>
            <button className="submit" type="submit">
              Add Time Sheet
            </button>
          </div>
        </form>
      </div>
  );
};

FormInput.propTypes = {
  submitNewSheet: PropTypes.func.isRequired,
};

export default FormInput;
