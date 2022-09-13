import React, { FC, useRef, useCallback, SetStateAction } from 'react'
import styled from 'styled-components'
import FlexBox from '../../basics/FlexBox'
import { sections, StoryInterface } from '../../../interfaces/interfaces'
import NewsCard from './news-card'

interface NewsCardsSectionProps {
	data: StoryInterface[]
	loading: boolean
	setPageNumber: React.Dispatch<SetStateAction<number>>
	hasMore: boolean
	selectedSection: number
}

const CardsSectionDiv = styled(FlexBox)`
	margin: 0 10vw 0 10vw;
	flex-direction: row;
	justify-content: space-evenly;
	gap: 3rem;
	flex-wrap: wrap;
	padding-bottom: 100px;
	@media (max-width: 600px) {
		flex-direction: row;
		padding-top: 140px;
	}
`

const NewsCardsSection: FC<NewsCardsSectionProps> = ({
	data,
	loading,
	setPageNumber,
	hasMore,
	selectedSection,
}) => {
	const observer = useRef<any>()
	const lastCardElementRef = useCallback(
		(node: any) => {
			if (loading || selectedSection === sections.myFaves) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setPageNumber((prevNumber) => prevNumber + 1)
				}
			})
			if (node) observer.current.observe(node)
		},
		[loading, selectedSection, setPageNumber]
	)

	return (
		<CardsSectionDiv>
			{data.map((story, index) => {
				return index + 1 === data.length ? (
					<NewsCard
						key={index}
						story={story}
						lastCardRef={lastCardElementRef}
						selectedSection={selectedSection}
					></NewsCard>
				) : (
					<NewsCard key={index} story={story} selectedSection={selectedSection}></NewsCard>
				)
			})}
		</CardsSectionDiv>
	)
}

export default NewsCardsSection
