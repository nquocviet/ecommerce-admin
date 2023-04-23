import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { TeamEntity } from '@/types/team'

export const useTeamMembers = () => {
	return useSWR<TeamEntity[]>('/api/staticdata?type=team', fetcher)
}
