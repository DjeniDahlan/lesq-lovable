
import React from 'react';
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  label: string;
  accept?: string;
  onFileSelect: (file: File) => void;
  selectedFile?: File;
  onRemove: () => void;
}

export function FileUpload({
  label,
  accept = ".pdf,.doc,.docx",
  onFileSelect,
  selectedFile,
  onRemove
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
      />
      {!selectedFile ? (
        <Button
          type="button"
          variant="outline"
          onClick={handleClick}
          className="w-full h-32 flex flex-col items-center justify-center gap-2"
        >
          <Upload className="h-6 w-6" />
          <span>{label}</span>
        </Button>
      ) : (
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <span className="truncate">{selectedFile.name}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
