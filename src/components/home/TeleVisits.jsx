import {
  ArrowRight,
  FileText,
  Video,
  Stethoscope,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function TeleVisits() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-7 lg:px-10">

        <div
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-[#dce7e6]
            bg-[#f3f8f7]
          "
        >
          <div className="grid lg:grid-cols-2">

            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#B78124]">
                Virtual Care
              </p>

              <h2 className="mt-3 text-[31px] font-semibold text-[#064B50] md:text-[39px]">
                TeleVisits
              </h2>

              <p className="mt-4 max-w-[570px] text-[15px] leading-7 text-[#292a2a]">
                Connect with suitable medical specialists
                remotely before planning your treatment
                journey to India.
              </p>

              <div className="mt-8 space-y-4">
                <TeleItem
                  icon={FileText}
                  title="Share Medical Reports"
                  text="Send available reports, scans and medical history for review."
                />

                <TeleItem
                  icon={Stethoscope}
                  title="Specialist Review"
                  text="Your case can be matched with an appropriate specialist."
                />

                <TeleItem
                  icon={Video}
                  title="Online Consultation"
                  text="Discuss treatment options remotely before making travel decisions."
                />
              </div>

              <Link
                to="/services/televisits"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-[#064B50]
                  px-6
                  py-3
                  text-[14px]
                  font-semibold
                  text-white
                  hover:bg-[#0B6268]
                "
              >
                Explore TeleVisits

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
                min-h-[340px]
                items-center
                justify-center
                bg-[#064B50]
                p-10
              "
            >
              <div className="text-center">
                <div
                  className="
                    mx-auto
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                  "
                >
                  <Video
                    size={43}
                    className="text-[#E6B956]"
                  />
                </div>

                <h3 className="mt-6 text-[25px] font-semibold text-white">
                  Care Starts Before You Travel
                </h3>

                <p className="mx-auto mt-3 max-w-[380px] text-[16px] leading-6 text-white/90">
                  Begin your healthcare journey with
                  convenient remote consultation and
                  coordinated support.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function TeleItem({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="flex gap-4">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-white
          text-[#B78124]
          shadow-sm
        "
      >
        <Icon size={20} />
      </div>

      <div>
        <h3 className="text-[16px] font-semibold text-[#064B50]">
          {title}
        </h3>

        <p className="mt-1 text-[15px] leading-6 text-black">
          {text}
        </p>
      </div>
    </div>
  );
}