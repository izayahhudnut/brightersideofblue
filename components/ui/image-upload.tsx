import React, { useState, useRef, useEffect } from "react";
import ReactCrop, { Crop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { UploadButton } from "@uploadthing/react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
}

export function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (uploadedImage && imageRef.current) {
      const { width, height } = imageRef.current;
      setCrop(makeAspectCrop(centerCrop({ unit: "%", width: 100 }, width, height), 16 / 9, width, height));
    }
  }, [uploadedImage]);

  const onCropComplete = async () => {
    if (!imageRef.current || !crop) return;

    const canvas = document.createElement("canvas");
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.drawImage(
      imageRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      onImageUpload(uploadedImage!);
      setIsDialogOpen(false);
    });
  };

  return (
    <div className="space-y-4">
      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res?.[0]) {
            setUploadedImage(res[0].url);
            setIsDialogOpen(true);
          }
        }}
        onUploadError={(error: Error) => {
          console.error(error);
        }}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-zinc-900 text-white rounded-lg shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Crop Image</DialogTitle>
          </DialogHeader>
          {uploadedImage && (
            <div className="space-y-4">
              <ReactCrop
                crop={crop ?? undefined}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                aspect={16 / 9}
              >
                <Image
                  ref={imageRef}
                  crossOrigin="anonymous"
                  src={uploadedImage}
                  alt="Upload"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </ReactCrop>
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  className="border border-zinc-500 text-zinc-400 hover:bg-zinc-700 transition"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={onCropComplete} 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-md transition"
                >
                  Confirm Crop
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
