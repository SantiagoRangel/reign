import React, { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface NewsCardProps {}

const CardDiv = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid #6b6b6b;
	border-radius: 5px;
	max-width: 450px;
	padding: 0;
	margin-bottom: 20px;
`
const InfoDiv = styled.div`
	max-width: 80%;
`
const FavoriteDiv = styled.div`
	max-width: 20%;
	background-color: #f3f3f3;
	display: flex;
	padding-left: 20px;
	padding-right: 20px;
	border-radius: 0 4px 4px 0;
`
const HeartDiv = styled.div`
	margin: auto;
	font-size: 20px;
`

const StyledTime = styled.div`
	font-size: 10px;
	color: #c1c1c1;
	font-family: 'Roboto', sans-serif;
	margin: 5px 0 5px 10px;
`

const StyledContent = styled.div`
	font-size: 13px;
	color: #6b6b6b;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	margin: 5px 0 5px 10px;
`
const NewsCard: FC<NewsCardProps> = () => (
	<CardDiv>
		<InfoDiv>
			<StyledTime>1 hour ago by author</StyledTime>
			<StyledContent>Realize for React for Visualizing State flow and component hierarchy</StyledContent>
		</InfoDiv>

		<FavoriteDiv>
			<HeartDiv>
				<FontAwesomeIcon icon={faHeart} color='#cf0000' />
			</HeartDiv>
		</FavoriteDiv>
	</CardDiv>
)

export default NewsCard
