import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel } from "./components/TabPanel/index.jsx";
import { Todos } from "./components/Todos/index.jsx";
import { Users } from "./components/Users/index.jsx";
import { Photos } from "./components/Photos/index.jsx";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Todos" />
          <Tab label="Users" />
          <Tab label="Photos" />
        </Tabs>
      </Box>
      <Box sx={{ overflow: "hidden" }}>
        <TabPanel value={value} tabKey={0}>
          <Todos />
        </TabPanel>
        <TabPanel value={value} tabKey={1}>
          <Users />
        </TabPanel>
        <TabPanel value={value} tabKey={2}>
          <Photos />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default App;
