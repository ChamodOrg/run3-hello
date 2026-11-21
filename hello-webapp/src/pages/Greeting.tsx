import { Box, Typography } from "@wso2/oxygen-ui";

// Fixed message: a constant, no network call, no interaction.
const GREETING = "Hello, World!";

export default function Greeting() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Typography variant="h1" component="h1">
        {GREETING}
      </Typography>
    </Box>
  );
}
