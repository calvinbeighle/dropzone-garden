
import FileUpload from '@/components/FileUpload';
import { User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <User className="w-6 h-6 text-black" />
            <h1 className="text-4xl font-medium tracking-tight">
              Gnome
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Drag and drop your files to begin uploading
          </p>
        </div>
        <FileUpload />
      </div>
    </div>
  );
};

export default Index;
