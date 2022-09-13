import { useEffect, useState } from 'react'
import axios from 'axios'
import { FetchedStoryInterface, StoryInterface } from '../interfaces/interfaces'

export default function useFetch(url: string, pageNumber: number, selectedFilter: string) {
	const [data, setData] = useState<Array<any>>([])
	const [error, setError] = useState<any>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [hasMore, setHasMore] = useState<boolean>(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await axios.get(process.env.REACT_APP_BASE_URL + url)
				const filteredData: FetchedStoryInterface[] = response.data.hits.filter(
					(story: FetchedStoryInterface) =>
						story.author && story.story_title && story.story_url && story.created_at_i
				)
				const mappedData: StoryInterface[] = filteredData.map((story) => {
					const filteredStory: StoryInterface = {
						author: story.author!,
						story_title: story.story_title!,
						story_url: story.story_url!,
						created_at_i: story.created_at_i!,
						story_id: story.objectID!.toString(),
					}
					return filteredStory
				})
				setData((prevData: Array<any>) => {
					return prevData.concat(mappedData)
				})
				setHasMore(response.data.hits > 0)
			} catch (err: any) {
				setError(err)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [url, pageNumber])

	useEffect(() => {
		setData([])
	}, [selectedFilter])

	return { data, error, loading, hasMore }
}
