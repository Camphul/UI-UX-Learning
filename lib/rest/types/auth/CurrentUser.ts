import { DateTime } from '~/lib/rest/types'

interface Role {
  name: string
  privilges: string[]
}

export default interface User {
  id: string
  username: string
  email: string
  roles: Role[]
  created: DateTime
  lastSeen: DateTime
  locked: boolean
  enabled: boolean
  expired: boolean
  credentialsExpired: boolean
}
