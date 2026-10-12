import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create transporter for Office365/Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.OFFICE365_EMAIL,
        pass: process.env.OFFICE365_PASSWORD
      }
    });

    // Email to you (admin)
    await transporter.sendMail({
      from: process.env.OFFICE365_EMAIL,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service of Interest:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.OFFICE365_EMAIL,
      to: email,
      subject: 'We received your message - Projects Path',
      html: `
        <h2>Thank you for contacting Projects Path</h2>
        <p>Dear ${escapeHtml(name)},</p>
        <p>We have received your message and our team will respond within 24 business hours.</p>
        <p>Best regards,<br>Projects Path Team</p>
      `
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      error: 'Failed to send email. Check: Office365 credentials, SMTP port, TLS settings.',
      details: error.message,
      code: error.code
    });
  }
}

// Simple HTML escape function
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
