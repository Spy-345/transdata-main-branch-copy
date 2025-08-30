import { render } from "@react-email/render";
import { CustomerConfirmationEmail } from "../emails/CustomerConfirmationEmail";

export async function renderCustomerConfirmationEmail(data: {
  name: string;
  email: string;
  organization?: string;
  contact?: string;
  message: string;
}) {
  return await render(
    CustomerConfirmationEmail({
      name: data.name,
      email: data.email,
      organization: data.organization,
      contact: data.contact,
      message: data.message,
    })
  );
}

export async function sendCustomerConfirmationEmail(
  transporter: any,
  customerData: {
    name: string;
    email: string;
    organization?: string;
    contact?: string;
    message: string;
  }
) {
  const htmlContent = await renderCustomerConfirmationEmail(customerData);

  const mailOptions = {
    from: `"TransDataNexus" <${process.env.EMAIL_USER}>`,
    to: customerData.email,
    subject:
      "Thank you for contacting TransDataNexus - We've received your inquiry",
    html: htmlContent,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log(
      "Customer confirmation email sent successfully:",
      result.envelope
    );
    return result;
  } catch (error) {
    console.error("Failed to send customer confirmation email:", error);
    throw error;
  }
}
