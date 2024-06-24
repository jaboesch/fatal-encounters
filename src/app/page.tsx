"use client";

import { generateScene, generateSceneAssets } from "@/engines";
import { Move, Sequence } from "@/types";
import { generateTxHash } from "@/utilities";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Page = () => {
  const [txHash, setTxHash] = useState(generateTxHash());
  const [scene, setScene] = useState<Sequence[]>([]);

  useEffect(() => {
    setScene(generateScene({ txHash, numSequences: 20 }));
  }, [txHash]);

  const refreshScene = () => {
    setTxHash(generateTxHash());
  };

  const sceneAssets = generateSceneAssets(scene);

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-5xl mx-auto">
      <div className="flex flex-col w-full gap-4 items-center">
        {sceneAssets.map((sceneAsset, index) => (
          <>
            {!!index && <div className="w-full max-w-[800px] h-[1px] bg-gray-200" />}
            <div
              className="flex flex-row max-w-[800px] items-center w-full"
              key={`asset-${index}`}
            >
              <div className="pr-5">
                <p className="text-lg font-mono">{index + 1}</p>
              </div>
              <div className="flex flex-col gap-1 mr-2 w-full justify-start items-start">
                <p className="font-serif">
                  <span className="font-bold">
                    {sceneAsset.script.attackCharacter}
                  </span>
                  :&nbsp;
                  {sceneAsset.script.attackScriptLine}
                </p>
                <p className="font-serif">
                  <span className="font-bold">
                    {sceneAsset.script.defenseCharacter}
                  </span>
                  :&nbsp;
                  {sceneAsset.script.defenseScriptLine}
                </p>
              </div>
              <img
                className={clsx(
                  "size-[50px] relative inline z-10",
                  sceneAsset.mediaLeft.zIndex
                )}
                src={sceneAsset.mediaLeft.filename}
              />
              <img
                className={clsx(
                  "size-[50px] transform scale-x-[-1] relative inline",
                  sceneAsset.mediaRight.zIndex,
                  sceneAsset.mediaRight.margin
                )}
                src={sceneAsset.mediaRight.filename}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
