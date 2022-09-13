import React, { FC, useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Filter from './filter/filter'
import NewsCardsSection from './news-cards-section/news-cards-section'
import SectionSelector from './section-selector/section-selector'
import angularImage from '../../assets/angular.png'
import reactImage from '../../assets/react.png'
import vueImage from '../../assets/vue.png'
import { FilterOptionInterface, StoryInterface } from '../../interfaces/interfaces'
import { sections } from '../../interfaces/interfaces'

const FETCH_URL = '/search_by_date?query='

interface NewsPageProps {}

const optionsArray: FilterOptionInterface[] = [
	{ title: 'Angular', value: 'angular', image: angularImage },
	{ title: 'Reactjs', value: 'reactjs', image: reactImage },
	{ title: 'Vuejs', value: 'vuejs', image: vueImage },
]

const storageFilter = window.localStorage.getItem('filter')
const NewsPage: FC<NewsPageProps> = () => {
	const [pageNumber, setPageNumber] = useState<number>(0)
	const [selectedSection, setSelectedSection] = useState<number>(sections.all)
	const [favoriteStories, setFavoriteStories] = useState<StoryInterface[]>([])
	const [selectedFilter, setSelectedFilter] = useState<string>(storageFilter ? storageFilter : 'reactjs')
	const { data, loading, error, hasMore } = useFetch(
		FETCH_URL + selectedFilter + '&page=' + pageNumber,
		pageNumber,
		selectedFilter
	)

	useEffect(() => {
		if (selectedSection === sections.myFaves) {
			const favorites = window.localStorage.getItem('favorites')
			if (favorites) {
				setFavoriteStories(JSON.parse(favorites))
			}
		}
	}, [selectedSection])

	return (
		<>
			{data && !error && (
				<>
					<SectionSelector setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
					{selectedSection === sections.all && (
						<Filter
							optionsArray={optionsArray}
							setSelectedFilter={setSelectedFilter}
							selectedFilter={selectedFilter}
							setPageNumber={setPageNumber}
						/>
					)}
					<NewsCardsSection
						data={selectedSection === sections.all ? data : favoriteStories}
						loading={loading}
						setPageNumber={setPageNumber}
						hasMore={hasMore}
						selectedSection={selectedSection}
					/>
				</>
			)}
			{error && <h1>Error fetching data</h1>}
		</>
	)
}

export default NewsPage
