import "../styles/GeneralInfoForm.css";

export default function GeneralForm({ generalInfo, setGeneralInfo }) {
  return (
    <>
      <h2>General Information</h2>
      <div className="generalInfoForm form">
        <div className="formRow">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={generalInfo.name}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, name: e.target.value })
            }
            placeholder="Enter your name..."
          />
        </div>
        <div className="formRow">
          {" "}
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={generalInfo.email}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, email: e.target.value })
            }
            placeholder="test@email.com"
          />
        </div>
        <div className="formRow">
          <label htmlFor="tel">Phone Number:</label>
          <input
            id="tel"
            type="tel"
            value={generalInfo.phoneNumber}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value })
            }
            placeholder="001 234 567"
          />
        </div>
      </div>
    </>
  );
}
