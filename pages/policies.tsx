import React, { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
  backgroundColor: '#f3e6ff', // Light purple background
  color: '#4b0082', // Dark purple text
};

const headingStyle: CSSProperties = {
  textAlign: 'center',
  color: '#4b0082', // Dark purple heading
};

const subHeadingStyle: CSSProperties = {
  textAlign: 'left',
  color: '#6a0dad', // Medium purple subheadings
  marginBottom: '10px',
};

const sectionStyle: CSSProperties = {
  marginBottom: '30px',
};

const textStyle: CSSProperties = {
  textAlign: 'left',
  color: '#4b0082', // Dark purple text
};

const linkStyle: CSSProperties = {
  color: '#1e90ff', // Blue color for links
  textDecoration: 'none',
};

const linkHoverStyle: CSSProperties = {
  ...linkStyle,
  textDecoration: 'underline',
};

const buttonStyle: CSSProperties = {
  display: 'block',
  margin: '20px auto',
  padding: '10px 20px',
  backgroundColor: '#4b0082',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  textAlign: 'center',
};

const Policies: React.FC = () => {
  const handleBackButtonClick = () => {
    window.location.href = '/auth/signup';
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Policies</h1>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Terms and Conditions</h2>
        <p style={textStyle}>
          Please refer to our detailed <a href="https://docs.google.com/document/d/1wYq6CULlAtBdYrcjEVygQ3uYOplqU-kT1wrxguUKHcI/edit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Terms and Conditions</a>.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Privacy Policy</h2>
        <p style={textStyle}>
          You can review our <a href="https://docs.google.com/document/d/1MpaLoEbx5-cmTB3qfbDadhjsuNCkEA2j13H2ZGx3PAk/edit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a> to understand how we handle your data.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Refund Policy</h2>
        <p style={textStyle}>
          Please check our <a href="https://docs.google.com/document/d/1zOrg11NPYSMCxa3KwkOnfPxKRkllzXBdocEQsQN10TM/edit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Refund Policy</a> for details regarding refunds and cancellations.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Contact Us</h2>
        <p style={textStyle}>
          For any inquiries or assistance, feel free to reach out to us at:
        </p>
        <p style={textStyle}>
          <strong>Business Name:</strong> The Humours Hub
          <br />
          <strong>Address:</strong> Junagadh, Gujarat, India, Pin Code: 362001
          <br />
          <strong>Email:</strong> <a href="mailto:shubhammvaghela999@gmail.com" style={linkStyle}>shubhammvaghela999@gmail.com</a>
          <br />
          <strong>Phone:</strong> <a href="tel:+919033195151" style={linkStyle}>+91 90331 95151</a>
        </p>
      </section>

      {/* Back button */}
      <button onClick={handleBackButtonClick} style={buttonStyle}>
        Back to Sign Up
      </button>
    </div>
  );
};

export default Policies;
