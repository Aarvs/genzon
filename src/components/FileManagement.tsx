import React from 'react';
import BulkImport from './BulkImport';
import Upload from './Upload';

interface FileManagementProps {
  activeTab: number;
}

const FileManagement: React.FC<FileManagementProps> = ({ activeTab }) => {
    return (
      <div className="flex justify-center items-center m-4 overflow-x-hidden">
        <div className="border-2 border-blue-500 p-2 rounded-md inline-block max-w-full">
          {activeTab === 0 && <BulkImport />}
          {activeTab === 1 && <Upload />}
        </div>
      </div>
    );
};

export default FileManagement;

