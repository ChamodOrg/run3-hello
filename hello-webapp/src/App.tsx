import { Box } from "@wso2/oxygen-ui";

// Public app: no sign-in, no route guard. Pages are added per feature.
export default function App() {
  return <Box component="main" sx={{ minHeight: "100vh", p: 2 }} />;
}
