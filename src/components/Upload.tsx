import React from 'react';

const Upload = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("Selected files:", files);
      // Handle file upload logic here (e.g., sending to server)
    }
  };

  return (
    <div>
      <h2 className="flex justify-center m-3">Add Image or Video</h2>
      <div className="flex justify-center ml-36">
        <input type="file" accept="image/jpeg,image/png,video/*" multiple onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default Upload;