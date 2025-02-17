import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f(["image"])
    .middleware(async ({ files }) => {
      // Ensure a file exists
      if (!files || files.length === 0) {
        throw new Error("No files uploaded");
      }

      // Grab the first file (assuming single upload)
      const file = files[0];

      // Allow files up to 10MB (10 * 1024 * 1024 bytes)
      if (file.size > 10 * 1024 * 1024) {
        throw new Error("File size exceeds 10MB limit");
      }

      return {}; // ✅ Middleware must return an object
    })
    .onUploadComplete(({ file }) => {
      console.log("Upload complete:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
