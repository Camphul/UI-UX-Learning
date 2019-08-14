import DateTime from '../../api/types/DateTime'
import EmbeddedUser from '~/lib/api/types/user/EmbeddedUser'

export default interface BlogPostSummary {
  id: string,
  author: EmbeddedUser,
  title: String,
  created: DateTime
}
