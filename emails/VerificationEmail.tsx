import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
  Container,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      {/* Email Preview */}
      <Preview>Your verification code is {otp}</Preview>

      <Section style={styles.body}>
        <Container style={styles.card}>
          <Row>
            <Heading as="h2" style={styles.heading}>
              Hello {username},
            </Heading>
          </Row>

          <Row>
            <Text style={styles.text}>
              Thanks for registering! Please use the following verification code
              to complete your signup.
            </Text>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Text style={styles.otp}>{otp}</Text>
          </Row>

          <Row>
            <Text style={styles.text}>
              If you didn't request the code, please ignore this email.
            </Text>
          </Row>

          {/* Optional button */}
          {/* <Row style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              href={`http://localhost:3000/verify/${username}`}
              style={styles.button}
            >
              Verify Account
            </Button>
          </Row> */}

          <Row>
            <Text style={styles.footer}>
              Cheers, <br /> The Team 🚀
            </Text>
          </Row>
        </Container>
      </Section>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f4f6f8",
    padding: "30px 0",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  text: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.5",
    margin: "10px 0",
  },
  otp: {
    display: "inline-block",
    backgroundColor: "#eaf4ff",
    color: "#1d4ed8",
    fontSize: "26px",
    fontWeight: "700",
    letterSpacing: "4px",
    padding: "12px 24px",
    borderRadius: "8px",
    margin: "20px 0",
    textAlign: "center" as const,
  },
  button: {
    backgroundColor: "#1d4ed8",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
  footer: {
    fontSize: "13px",
    color: "#888",
    marginTop: "30px",
  },
};
