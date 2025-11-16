"use client";

import { ImageUpload } from "@/components/image-upload";
import { CodeOutput } from "@/components/code-output";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Image to LaTeX Converter
          </h1>
          <p className="text-xl text-gray-600">
            Convert images of handwritten math and equations to LaTeX code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <ImageUpload />
          <CodeOutput />
        </div>
      </div>
    </div>
  );
}
