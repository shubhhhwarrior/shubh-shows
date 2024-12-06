import React, { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
};

const headingStyle: CSSProperties = {
  textAlign: 'center',
  color: '#333',
};

const subHeadingStyle: CSSProperties = {
  textAlign: 'left',
  color: '#555',
};

const sectionStyle: CSSProperties = {
  marginBottom: '20px',
};

const textStyle: CSSProperties = {
  textAlign: 'left',
  color: '#000',
};

const Policies: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Policies</h1>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Terms and Conditions</h2>
        <p style={textStyle}>
          Please refer to our detailed <a href="https://docs.google.com/document/d/1wYq6CULlAtBdYrcjEVygQ3uYOplqU-kT1wrxguUKHcI/edit" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Privacy Policy</h2>
        <p style={textStyle}>
          You can review our <a href="https://docs.google.com/document/d/1MpaLoEbx5-cmTB3qfbDadhjsuNCkEA2j13H2ZGx3PAk/edit" target="_blank" rel="noopener noreferrer">Privacy Policy</a> to understand how we handle your data.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Refund Policy</h2>
        <p style={textStyle}>
          Please check our <a href="https://docs.google.com/document/d/1zOrg11NPYSMCxa3KwkOnfPxKRkllzXBdocEQsQN10TM/edit" target="_blank" rel="noopener noreferrer">Refund Policy</a> for details regarding refunds and cancellations.
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
          <strong>Email:</strong> shubhammvaghela999@gmail.com
          <br />
          <strong>Phone:</strong> +91 90331 95151
        </p>
      </section>
    </div>
  );
};

export default Policies;
