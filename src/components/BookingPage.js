import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingPage.css';
import Modal from 'react-modal';

const BookingPage = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedItems, setSelectedItems] = useState({
    chairs: [],
    tables: [],
    umbrellas: [],
    bars: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleCheckboxChange = (category, itemName) => {
    setSelectedItems((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (updatedSelected[category].includes(itemName)) {
        updatedSelected[category] = updatedSelected[category].filter(
          (item) => item !== itemName
        );
      } else {
        updatedSelected[category] = [...updatedSelected[category], itemName];
      }
      return updatedSelected;
    });
  };

  const handleConfirmBooking = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDayClick = (date) => {
    if(selectedDates.includes(date)) {
        setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
        setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="booking-container">
        <div className='booking-title'>
      <h1>Book Rentals</h1>
        </div>
      <div className="calendar">
        <h2>Select Date:</h2>
        <Calendar 
        onChange={handleDayClick} 
        value={selectedDates}
        tileClassName={({ date }) =>
        selectedDates.includes(date) ? 'selected' : null
        }
         />
      </div>
      <div className="rental-items">
        <h2>Select Rental Items:</h2>
        <div className="rental-category">
          <h3>Chairs</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('chairs', 'Plastic Chairs')}
            />
            Plastic Chairs
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('chairs', 'Metal Chairs')}
            />
            Metal Chairs
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('chairs', 'Garden Chairs')}
            />
            Garden Chairs
          </label>
        </div>
        <div className="rental-category">
          <h3>Tables</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('tables', 'Picnic Table')}
            />
            Picnic Table
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('tables', 'Wood Tables')}
            />
            Wood Tables
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('tables', 'White Foldable Tables')}
            />
            White Foldable Tables
          </label>
        </div>
        <div className="rental-category">
          <h3>Umbrellas</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('umbrellas', 'Fringe Umbrellas')}
            />
            Fringe Umbrellas
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('umbrellas', 'Picnic Umbrellas')}
            />
            Picnic Umbrellas
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('umbrellas', 'Beach Umbrellas')}
            />
            Beach Umbrellas
          </label>
        </div>
        <div className="rental-category">
          <h3>Bars</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('bars', 'Large Wood Bar')}
            />
            Large Wood Bar
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('bars', 'Lemonade Stand Bar')}
            />
            Lemonade Stand Bar
          </label>
        </div>
      </div>
      <button className="confirm-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Booking Confirmation</h2>
        <div>
        <p>Selected Dates:</p>
        <ul>
            {selectedDates.map((date) => (
                <li key={date.toString()}>{date.toDateString()}</li>
                ))}
        </ul>
                </div>
                <div>

        <p>Selected Items:</p>
        <ul>
          {Object.entries(selectedItems).map(([category, items]) => (
              <li key={category}>
              <strong>{category}:</strong> {items.join(', ')}
            </li>
          ))}
        </ul>
          </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
      
    </div>
  );
};

export default BookingPage;
