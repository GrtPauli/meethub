import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "MeetHub Video",
  description: _package.description,
  installed: !!process.env.DAILY_API_KEY,
  type: "daily_video",
  variant: "conferencing",
  url: "https://daily.co",
  categories: ["conferencing"],
  logo: "icon.svg",
  publisher: "MeetHub",
  category: "conferencing",
  slug: "daily-video",
  title: "MeetHub Video",
  isGlobal: true,
  email: "meethub.dev@gmail.com",
  appData: {
    location: {
      linkType: "dynamic",
      type: "integrations:daily",
      label: "MeetHub Video",
    },
  },
  key: { apikey: process.env.DAILY_API_KEY },
  dirName: "dailyvideo",
} as AppMeta;

export default metadata;
