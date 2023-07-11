import { AnouncementCardProp } from '@/Components/Card/AnouncementCard'
import { PaymentCardProp } from '@/Components/Card/PayInfoCard'
import { RatingProp } from '@/Containers/_DashboardPages/tab/Home/components/homeRating'

export type PostScreenReq = {
  screen_name: 'Home' | 'Detail'
}
export type PostScreenRes = {
  layout: GetScreenRes_Layout | null
}
export type GetScreenRes_Layout = {
  [key in 'LAYOUT_POSITION_GENERIC_TOP' | 'LAYOUT_POSITION_GENERIC_BOTTOM']?: GetScreenRes_LayoutComponent[]
}
export type GetScreenRes_LayoutComponent = {
  id: number
  type: string
  props: Record<string, AnouncementCardProp | RatingProp | PaymentCardProp | any | null>
  children?: any
}
