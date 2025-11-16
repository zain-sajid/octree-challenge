import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileDropzone } from "./file-dropzone";

export function ImageUpload() {
  const handleDrop = (files: File[]) => {
    // TODO: Complete the logic to convert image to LaTeX code
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
            INPUT
          </span>
          <CardTitle className="text-xl">Your Handwritten Notes</CardTitle>
        </div>
        <CardDescription>
          Upload any image containing mathematical expressions
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <FileDropzone onDrop={handleDrop} />
      </CardContent>
    </Card>
  );
}
