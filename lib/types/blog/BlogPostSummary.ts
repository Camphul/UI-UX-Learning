import { DateTime } from '~/lib/rest/types'
import EmbeddedUser from '~/lib/rest/types/user/EmbeddedUser'

export default interface BlogPostSummary {
  id: string,
  author: EmbeddedUser,
  title: String,
  created: DateTime
}
