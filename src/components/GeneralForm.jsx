import "../styles/GeneralInfoForm.css";

export default function GeneralForm({
  name,
  email,
  phoneNumber,
  setName,
  setEmail,
  setPhoneNumber,
}) {
  return (
    <div className="generalInfoForm form">
      <div className="formRow">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
        />
      </div>
      <div className="formRow"> 
        {" "}
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="test@email.com"
        />
      </div>
      <div className="formRow">
        <label htmlFor="tel">Phone Number:</label>
        <input
          id="tel"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="001 234 567"
        />
      </div>
    </div>
  );
}
