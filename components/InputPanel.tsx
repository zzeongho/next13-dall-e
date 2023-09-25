"use client";
import React, { useState } from "react";
import { UserInputs } from "./UserInputs";
import Image from "next/image";
import { ImagePreview } from "./ImagePreview";

export const InputPanel = () => {
  const [userInputs, setUserInputs] = useState({
    title: "",
    tag: "",
    description: "",
  });

  const [imageUrl, setImageUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBJdp0XKowOVT5dvHuc8tvARQ8P6y6atAaA&usqp=CAU"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {};

  const handleShareImage = () => {};

  const handleDownloadImage = () => {};
  return (
    <div className="mt-40">
      {/* userInputs */}
      <UserInputs
        handleSubmit={handleSubmit}
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        isLoading={isLoading}
      />

      {/* image Preview */}
      <ImagePreview imageUrl={imageUrl} isLoading={isLoading} />
      {/* <Image /> */}
      {imageUrl !== "" && (
        <div className="flex gap-2 mt-2">
          <button
            disabled={imageUrl === ""}
            className="btn flex-1 disabled:cursor-not-allowed"
            onClick={handleShareImage}
          >
            {isLoading ? "Shareing..." : "Share"}
          </button>
          <button
            disabled={imageUrl === ""}
            className="btn flex-1 disabled:cursor-not-allowed"
            onClick={handleDownloadImage}
          >
            Download
          </button>
        </div>
      )}
      {/* Buttons Shareing and download */}
    </div>
  );
};
