import { VALID_MOVE_TREE } from "@/constants";
import { traverseTree } from "@/utilities";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const all = traverseTree(VALID_MOVE_TREE);
  const allStrings = all.map((a) => a.join("-"));
  return <pre className="mx-auto">{JSON.stringify(allStrings, null, 2)}</pre>;
};

export default Page;
