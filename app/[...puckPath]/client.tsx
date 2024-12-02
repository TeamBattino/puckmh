"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import config from "@config/page.config";

export function Client({ data }: { data: Data }) {
  return <Render config={config} data={data} />;
}
