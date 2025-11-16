"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileDropzoneProps {
  onDrop: (files: File[]) => void;
  accept?: Record<string, string[]>;
  multiple?: boolean;
}

export function FileDropzone({
  onDrop,
  accept = {
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"],
    "application/pdf": [".pdf"],
  },
  multiple = false,
}: FileDropzoneProps) {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
    multiple,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex-1 border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center cursor-pointer transition-colors",
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      )}
    >
      <input {...getInputProps()} />
      <Upload className="w-16 h-16 text-gray-400 mb-4" />
      <p className="text-lg font-medium text-gray-700 mb-2">
        Drop your file here
      </p>
      <p className="text-sm text-gray-500 mb-4">
        or{" "}
        <span className="text-blue-600 hover:text-blue-700">browse files</span>
      </p>
      <div className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-600">
        JPEG, PNG, PDF
      </div>
    </div>
  );
}
