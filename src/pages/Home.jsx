import HeroBanner from "../components/home/HeroBanner";
import QuickServices from "../components/home/QuickServices";
import HomeSpecialities from "../components/home/HomeSpecialities";

import WhyAkeso from "../components/home/WhyAkeso";
import CostComparison from "../components/home/CostComparison";
import TeleVisits from "../components/home/TeleVisits";
import PostOpWellness from "../components/home/PostOpWellness";
import FounderWords from "../components/home/FounderWords";
import BecomePartner from "../components/home/BecomePartner";
import WhyAkesoIndia from "../components/home/WhyAkesoIndia";

export default function Home({
  onOpenAuth,
}) {
  return (
    <>
      <HeroBanner
        onOpenAuth={onOpenAuth}
      />

      <QuickServices />

      <HomeSpecialities />

      <WhyAkeso />
<WhyAkesoIndia />
      <CostComparison />

      <TeleVisits />

      <PostOpWellness />

      <FounderWords />

      <BecomePartner />
    </>
  );
}