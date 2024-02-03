const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001; // or any other port you prefer

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  try {
    // destructuring the request body
    const { email, firstName, lastName, company, phone } = req.body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., "gmail" or use your SMTP settings
      auth: {
        user: "airaptorx@gmail.com", // your email
        pass: "mflghlmggbmrjqot", // your app password
      },
    });

    // Email content
    const mailOptions = {
      from: "airaptorx@gmail.com",
      to: "pvemuri@panoplia.io", // recipient's email
      subject: `Demo Request : ${firstName} ${lastName}`,
      html: `
        <p>Corporate Email: ${email}</p>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Company: ${company}</p>
        <p>Phone: ${phone}</p>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
