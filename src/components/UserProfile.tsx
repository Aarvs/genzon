import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import FileManagement from './FileManagement';

const UserProfile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="h4" className="flex justify-center !mb-5">List Your Products</Typography>
      <div className="flex justify-center">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Bulk Import" />
          <Tab label="Upload" />
        </Tabs>
      </div>
      <FileManagement activeTab={value}/>
    </div>
  );
};

export default UserProfile;