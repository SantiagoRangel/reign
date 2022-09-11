import React, { FC } from 'react'
import styled from 'styled-components'
import NewsCard from './news-card'

interface NewsCardsSectionProps {}

const CardsSectionDiv = styled.div`
	display: flex;
	flex-flow: column wrap;
	flex-direction: row;
	justify-content: space-around;
	margin: 0 10vw 0 10vw;
`
const array = [0, 0, 0, 0, 0, 0, 0]

const NewsCardsSection: FC<NewsCardsSectionProps> = () => (
	<CardsSectionDiv>
		{array.map((card, index) => (
			<NewsCard key={index}></NewsCard>
		))}
	</CardsSectionDiv>
)

export default NewsCardsSection
