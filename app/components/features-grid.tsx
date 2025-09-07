import { Card } from "./card"
import * as Icons from "./icons";
import Image from "next/image"

export function FeaturesGrid({ dict } : { dict: Record<string, string> | undefined }) {
  return (
    <div className="flex gap-4 flex-col lg:flex-row">
      <Card className="p-3 w-full rounded-3xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              {/* <Image src={"/wp_tg.jpg"} width={100} height={100} alt="whatsapp" className="rounded-full object-cover" /> */}
              <Icons.Message className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold">{dict?.monorepo_title}</h2>
          </div>
          <p className="ml-14 mr-4 text-lg leading-relaxed text-neutral-500 font-medium">
            {dict?.monorepo_desc}
          </p>
        </div>
      </Card>

      <Card className="p-3 w-full rounded-3xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Icons.Voice className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold">{dict?.i18n_title}</h2>
          </div>
          <p className=" ml-14 mr-4 mt-1 text-lg leading-relaxed text-neutral-500 font-medium">
            {dict?.i18n_desc}
          </p>
        </div>
      </Card>

      <Card className="p-3 w-full rounded-3xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Icons.ShieldCheck className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold">{dict?.nextauth_title}</h2>
          </div>
          <p className="ml-14 mr-4 mt-1 text-lg leading-relaxed text-neutral-500 font-medium">
            {dict?.nextauth_desc}
          </p>
        </div>
      </Card>
    </div>
  )
}
