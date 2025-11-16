import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CodeOutput() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">
            OUTPUT
          </span>
          <CardTitle className="text-xl">LaTeX Code</CardTitle>
        </div>
        <CardDescription>Ready to copy into any LaTeX editor</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="border-b mb-4">
          <button className="px-4 py-2 text-sm font-medium border-b-2 border-gray-900 text-gray-900">
            &lt;/&gt; Code
          </button>
        </div>
        {/* Display the generated LaTeX code in a editor here */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 font-mono text-sm min-h-[300px]">
          <span className="text-gray-400">Output will appear here...</span>
        </div>
      </CardContent>
    </Card>
  );
}
