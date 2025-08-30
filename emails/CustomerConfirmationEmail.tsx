import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface CustomerConfirmationEmailProps {
  name: string;
  email: string;
  organization?: string;
  contact?: string;
  message: string;
}

export function CustomerConfirmationEmail({
  name,
  email,
  organization,
  contact,
  message,
}: CustomerConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for contacting TransDataNexus - We've received your inquiry
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src='https://transdatanexus.com/logo.webp'
              width='180'
              height='40'
              alt='TransDataNexus'
              style={logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Thank You for Contacting Us!</Heading>

            <Text style={text}>Dear {name},</Text>

            <Text style={text}>
              Thank you for reaching out to TransDataNexus. We have successfully
              received your inquiry and our team is excited to assist you with
              your pharmaceutical trade data needs.
            </Text>

            <Text style={text}>Here's a summary of your inquiry:</Text>

            {/* Inquiry Summary */}
            <Section style={summaryBox}>
              <Row>
                <Column style={summaryLabel}>
                  <Text style={labelText}>Name:</Text>
                </Column>
                <Column style={summaryValue}>
                  <Text style={valueText}>{name}</Text>
                </Column>
              </Row>

              <Row>
                <Column style={summaryLabel}>
                  <Text style={labelText}>Email:</Text>
                </Column>
                <Column style={summaryValue}>
                  <Text style={valueText}>{email}</Text>
                </Column>
              </Row>

              {organization && (
                <Row>
                  <Column style={summaryLabel}>
                    <Text style={labelText}>Organization:</Text>
                  </Column>
                  <Column style={summaryValue}>
                    <Text style={valueText}>{organization}</Text>
                  </Column>
                </Row>
              )}

              {contact && (
                <Row>
                  <Column style={summaryLabel}>
                    <Text style={labelText}>Contact:</Text>
                  </Column>
                  <Column style={summaryValue}>
                    <Text style={valueText}>{contact}</Text>
                  </Column>
                </Row>
              )}

              <Row>
                <Column style={summaryLabel}>
                  <Text style={labelText}>Message:</Text>
                </Column>
                <Column style={summaryValue}>
                  <Text style={valueText}>{message}</Text>
                </Column>
              </Row>
            </Section>

            <Text style={text}>
              <strong>What happens next?</strong>
            </Text>

            <Text style={text}>
              Our expert team will review your inquiry and get back to you
              within <strong>24 hours</strong> during business hours (Monday to
              Friday, 9:00 AM - 6:00 PM IST). We'll provide you with detailed
              information about how TransDataNexus can help you with:
            </Text>

            <Section style={featuresList}>
              <Text style={featureItem}>
                📊 Advanced pharmaceutical trade data analytics
              </Text>
              <Text style={featureItem}>
                🤖 AI-powered market insights and predictions
              </Text>
              <Text style={featureItem}>
                🌍 Global trade flow visualization and mapping
              </Text>
              <Text style={featureItem}>
                📈 Real-time market intelligence and reporting
              </Text>
              <Text style={featureItem}>
                🎯 Customized solutions for your specific needs
              </Text>
            </Section>

            <Text style={text}>
              If you have any urgent questions or need immediate assistance,
              please don't hesitate to call us at{" "}
              <strong>+91-9595078788</strong> or email us at{" "}
              <strong>komal@transdatanexus.com.</strong>
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Best regards,
              <br />
              The TransDataNexus Team
            </Text>

            <Text style={footerLinks}>
              <Link href='https://transdatanexus.com' style={link}>
                Website
              </Link>{" "}
              •{" "}
              <Link
                href='https://transdatanexus.com/privacy-policy'
                style={link}
              >
                Privacy Policy
              </Link>{" "}
              •{" "}
              <Link
                href='https://transdatanexus.com/terms-and-conditions'
                style={link}
              >
                Terms & Conditions
              </Link>
            </Text>

            <Text style={footerNote}>
              This email was sent to {email} in response to your inquiry on our
              website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  padding: "24px 40px",
  textAlign: "center" as const,
  borderBottom: "1px solid #e5e7eb",
};

const logo = {
  margin: "0 auto",
};

const content = {
  padding: "40px",
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const summaryBox = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "20px",
  margin: "24px 0",
};

const summaryLabel = {
  width: "30%",
  paddingRight: "12px",
};

const summaryValue = {
  width: "70%",
};

const labelText = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const valueText = {
  color: "#1f2937",
  fontSize: "14px",
  margin: "0",
};

const featuresList = {
  margin: "24px 0",
};

const featureItem = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "8px 0",
  paddingLeft: "0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "40px 0",
};

const footer = {
  padding: "0 40px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 16px 0",
};

const footerLinks = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0 0 8px 0",
};

const link = {
  color: "#3b82f6",
  textDecoration: "underline",
};

const footerNote = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0",
};
