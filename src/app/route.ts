import { Card } from "@/components/Card"
import { ImageResponse } from "@vercel/og"
import { loadFont } from "@/libs/load-fonts"

export const runtime = "edge"
export const fetchCache = "force-cache"

export const GET = async () => {
  return new ImageResponse(Card(), {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "NotoSansJP",
        data: await loadFont(),
        style: "normal",
      },
    ],
  })
}
