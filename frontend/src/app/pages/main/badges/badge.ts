import { BadgeLink } from './badgeLink';

export class Badge {
  id: number
  name: string
  thumb: string
  description: string
  bigImage: string
  links: BadgeLink[]
  tags: string
  features: Array<string>
}
