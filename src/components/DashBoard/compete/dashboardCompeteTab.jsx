import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DashBoardCompeteCard from './dashboardCompeteCard';
import NoDetail from '../common/noDetail';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function DashBoardCompeteTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Active" {...a11yProps(0)} />
        <Tab label="Compteted" {...a11yProps(1)} />
        <Tab label="Hosted" {...a11yProps(2)} />
        <Tab label="Community" {...a11yProps(3)} />
        <Tab label="Bookmarks" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DashBoardCompeteCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NoDetail />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NoDetail />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NoDetail />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NoDetail />
      </TabPanel>
    </div>
  );
}
