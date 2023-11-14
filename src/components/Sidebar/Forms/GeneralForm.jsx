import '../../../styles/GeneralInfoForm.css';
import { generalInfo } from '../../../utils/signals';

export default function GeneralForm() {
  return (
    <>
      <h2>General Information</h2>
      <div className="generalInfoForm form">
        <div className="formRow">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={generalInfo.value.name}
            onInput={(e) => {
              generalInfo.value = {
                ...generalInfo.value,
                name: e.target.value,
              };
            }}
            placeholder="Enter your name..."
          />
        </div>
        <div className="formRow">
          {' '}
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={generalInfo.value.email}
            onChange={(e) =>
              (generalInfo.value = {
                ...generalInfo.value,
                email: e.target.value,
              })
            }
            placeholder="test@email.com"
          />
        </div>
        <div className="formRow">
          <label htmlFor="tel">Phone Number:</label>
          <input
            id="tel"
            type="tel"
            value={generalInfo.value.phoneNumber}
            onChange={(e) =>
              (generalInfo.value = {
                ...generalInfo.value,
                phoneNumber: e.target.value,
              })
            }
            placeholder="001 234 567"
          />
        </div>
      </div>
    </>
  );
}
