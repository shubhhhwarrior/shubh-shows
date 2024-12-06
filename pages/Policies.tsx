import React from 'react';

const Policies: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Policies</h1>

      <section>
        <h2>Terms and Conditions</h2>
        <p>
          Please refer to our detailed <a href="https://docs.google.com/document/d/1wYq6CULlAtBdYrcjEVygQ3uYOplqU-kT1wrxguUKHcI/edit" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
        </p>
      </section>

      <section>
        <h2>Privacy Policy</h2>
        <p>
          You can review our <a href="https://docs.google.com/document/d/1MpaLoEbx5-cmTB3qfbDadhjsuNCkEA2j13H2ZGx3PAk/edit" target="_blank" rel="noopener noreferrer">Privacy Policy</a> to understand how we handle your data.
        </p>
      </section>

      <section>
        <h2>Refund Policy</h2>
        <p>
          Please check our <a href="https://docs.google.com/document/d/1zOrg11NPYSMCxa3KwkOnfPxKRkllzXBdocEQsQN10TM/edit" target="_blank" rel="noopener noreferrer">Refund Policy</a> for details regarding refunds and cancellations.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          For any inquiries or assistance, feel free to reach out to us at:
        </p>
        <p>
          <strong>Business Name:</strong> The humours hub
          <br />
          <strong>Address:</strong> Junagadh,Gujrat, India.
          <br />
          <strong>Email:</strong> shubhammvaghela999@gmail.com
          <br />
          <strong>Phone:</strong> +919033195151
        </p>
      </section>
    </div>
  );
};

export default Policies;
