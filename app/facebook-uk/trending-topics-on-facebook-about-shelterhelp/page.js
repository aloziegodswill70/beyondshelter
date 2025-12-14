// File: app/facebook-uk/trending-topics-on-facebook-about-shelterhelp/page.js

import TrendingTopicsClient from "./TrendingTopicsClient";

export const metadata = {
  title: "Trending Topics on Facebook About Shelter Help | Beyond Shelter UK",
  description:
    "Discover trending Facebook topics and conversations about shelter help, homelessness support and community housing initiatives in the UK — compiled by Beyond Shelter UK.",
};

export default function Page() {
  return <TrendingTopicsClient />;
}
