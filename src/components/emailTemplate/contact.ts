export const contactEmailTemplate = ({
  name,
  email,
  phone,
  location,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  message: string;
}) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Contact Form Submission</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        padding: 20px;
        color: #333;
      }
      .container {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        max-width: 600px;
        margin: auto;
      }
      .field {
        margin-bottom: 15px;
      }
      .label {
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
      }
      .value {
        color: #555;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>📩 New Contact Form Submission</h2>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${email}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${phone || "N/A"}</span>
      </div>
      <div class="field">
        <span class="label">Location:</span>
        <span class="value">${location || "N/A"}</span>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <span class="value">${message}</span>
      </div>
    </div>
  </body>
</html>
`;
