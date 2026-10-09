import {
  ArrowRight,
  Globe2,
  Handshake,
  HeartHandshake,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function BecomePartner() {
  return (
    <section className="bg-[#eef6f5] py-16 md:py-20">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-7 lg:px-10">

        <div
          className="
            grid
            overflow-hidden
            rounded-[26px]
            bg-[#064B50]
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E6B956]">
              Collaborate With Us
            </p>

            <h2 className="mt-3 text-[31px] font-semibold text-white md:text-[40px]">
              Become an Akeso Partner
            </h2>

            <p className="mt-5 max-w-[650px] text-[16px] leading-7 text-white/75">
              Join our international healthcare
              network and help connect patients with
              trusted medical care in India.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <PartnerPoint
                icon={Handshake}
                title="Meaningful Collaboration"
                text="Help patients navigate their healthcare journey with a trusted support network."
              />

              <PartnerPoint
                icon={Globe2}
                title="Global Network"
                text="Connect patients from across the world with coordinated healthcare support."
              />

              <PartnerPoint
                icon={HeartHandshake}
                title="End-to-End Support"
                text="Akeso coordinates consultations, treatment planning, travel and recovery support."
              />
            </div>

            <Link
              to="/become-a-partner"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#C8942E]
                px-6
                py-3
                text-[15px]
                font-semibold
                text-white
                hover:bg-[#A9781F]
              "
            >
              Become a Partner

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          <div
            className="
              flex
              min-h-[320px]
              items-center
              justify-center
              border-t
              border-white/10
              bg-white/[0.06]
              p-8
              lg:border-l
              lg:border-t-0
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C8942E]/40
                  bg-[#C8942E]/10
                "
              >
                <Globe2
                  size={35}
                  className="text-[#E6B956]"
                />
              </div>

              <p className="mt-6 text-[23px] font-semibold leading-8 text-white">
                Better Healthcare Access
                <br />
                Across Borders
              </p>

              <p className="mt-3 text-[16px] text-white/80">
                Healing Beyond Borders.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function PartnerPoint({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="flex gap-3">
      <Icon
        size={21}
        className="mt-1 shrink-0 text-[#E6B956]"
      />

      <div>
        <h3 className="text-[17px] font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-[15px] leading-5 text-white/85">
          {text}
        </p>
      </div>
    </div>
  );
}