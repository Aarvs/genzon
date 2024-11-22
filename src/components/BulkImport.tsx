import React from 'react';

const BulkImport = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle file upload logic
    }
  };

  return (
    <div>
      <h2 className="flex justify-center m-3">Add PDFs or CSV File</h2>
      <div className="flex justify-center ml-36">
        <input type="file" accept=".pdf,.csv" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default BulkImport;