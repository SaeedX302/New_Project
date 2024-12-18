import { Upload } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Upload className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-bold">MovieShare</span>
    </div>
  );
}