import React, { useState } from "react";
import "./Form.css";

const skillsList = ["React", "JavaScript", "CSS", "HTML"];

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
    const [skills, setSkills] = useState([]);
      const [isFormFilled, setIsFormFilled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
    if (e.target.value !== "") {
      setSkills([...skills, e.target.value]);
      setSelectedSkill("");
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    const newSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(newSkills);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
         setIsSubmitted(true);
      console.log({ name, email, password, skills });
         setName("");
    setEmail("");
    setPassword("");
    setSelectedSkill("");
    setSkills([]);
    setIsFormFilled(false);
      
  };
  const isButtonDisabled = !name || !email || !password || skills.length === 0;

  const handleFormChange = () => {
    setIsFormFilled(name !== "" && email !== "" && password !== "" && skills.length > 0);
  }
  return (
    <form onSubmit={handleSubmit} onChange={handleFormChange}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-input"
        />
      </div>
      <div>
        
              <div className="skills-container">
                  <label htmlFor="skills">Skills:</label>
          <select
            id="skills"
            value={selectedSkill}
            onChange={handleSkillChange}
            className="form-input"
          >
            <option value="">--Select a skill--</option>
            {skillsList.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
        <div className="selected-skills ">
          {skills.map((skill) => (
            <div key={skill} className="selected-skill">
              {skill}
              <button
                onClick={() => handleSkillRemove(skill)}
                className="remove-button"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <button type="submit"  disabled={isButtonDisabled}  className={`submit-button ${isButtonDisabled ? 'disabled' : ''}`}>
       CLAIM YOUR FREE TRIAL
          </button>
          {isSubmitted && <p>Form submitted successfully!</p>}
{isFormFilled && <p>Please review your information and submit.</p>}
    </form>
  );
};

export default Form;





