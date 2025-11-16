# Image to LaTeX Converter - Octree Challenge

This is a challenge project for Octree: an Image to LaTeX Converter built with [Next.js](https://nextjs.org). The application allows users to upload images of handwritten mathematical expressions and convert them to clean LaTeX code.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Acceptance Criteria

- Create API endpoint/server action to convert images to LaTeX using OpenAI API
- Add loading/processing states when the code is being generated
- Display the generated LaTeX code in a editor on the right panel
- Organize code into reusable components and utilities wherever possible

## Submission

- Submit your solution in a new **private** repo and inviting: `zain-sajid` and `basilysf1709` as collaborators
- Optional: Open a PR showing your changes in the new repo

## Additional Info

- You can check out: https://tools.useoctree.com/tools/math-to-latex to see a live example for inspiration.
- Feel free to use AI tools to complete the task.

## Tech Stack

- **Framework**: Next.js 16
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **File Upload**: react-dropzone
- **Icons**: lucide-react
