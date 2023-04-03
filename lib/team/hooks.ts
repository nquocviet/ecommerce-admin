import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useTeamMembers = () => {
	return useSWR('/api/staticdata?type=team', fetcher)
}
