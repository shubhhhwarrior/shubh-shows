import React from 'react';

const Policies: React.FC = () => {
  // Inline styles
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const subHeadingStyle = {
    borderBottom: '2px solid #007BFF',
    paddingBottom: '5px',
    marginBottom: '10px',
    color: '#007BFF',
  };

  const paragraphStyle = {
    margin: '10px 0',
    color: '#555',
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Policies</h1>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Terms and Conditions</h2>
        <p style={paragraphStyle}>
          Please refer to our detailed <a href="https://docs.google.com/document/d/1wYq6CULlAtBdYrcjEVygQ3uYOplqU-kT1wrxguUKHcI/edit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Terms and Conditions</a>.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Privacy Policy</h2>
        <p style={paragraphStyle}>
          You can review our <a href="https://docs.google.com/document/d/1MpaLoEbx5-cmTB3qfbDadhjsuNCkEA2j13H2ZGx3PAk/edit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a> to understand how we handle your data.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Refund Policy</h2>
        <p style={paragraphStyle}>
          Please check our <a href="https://docs.google.com/document/d/1zOrg11NPYSMCxa3KwkOnfPxKRkllzXBdocEQsQN10TM/edit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Refund Policy</a> for details regarding refunds and cancellations.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Contact Us</h2>
        <p style={paragraphStyle}>
          For any inquiries or assistance, feel free to reach out to us at:
        </p>
        <p style={paragraphStyle}>
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
