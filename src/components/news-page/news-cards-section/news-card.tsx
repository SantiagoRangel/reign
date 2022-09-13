import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as HeartFilled } from '../../../assets/heartFilled.svg'
import { ReactComponent as HeartNoFilled } from '../../../assets/heartNoFilled.svg'
import { ReactComponent as Clock } from '../../../assets/clock.svg'
import FlexBox from '../../basics/FlexBox'
import { StoryInterface } from '../../../interfaces/interfaces'

interface NewsCardProps {
	story: StoryInterface
	lastCardRef?: any
	selectedSection: number
}

const CardDiv = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid #979797;
	border-radius: 5px;
	padding: 0;
	margin-bottom: -10px;
	width: 40%;
	@media (max-width: 600px) {
		width: 100%;
		margin: auto;
	}
	&:hover {
		opacity: 0.5;
	}
`

const InfoDiv = styled.a`
	padding: 17px;
	width: 100%;
	&:hover {
		cursor: pointer;
	}
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
	padding-top: 4px;
	&:hover {
		cursor: pointer;
	}
`

const StyledTime = styled.div`
	font-size: 10px;
	color: #767676;
	font-family: 'Roboto', sans-serif;
	margin: 2px 0 0 5px;
`

const StyledContent = styled.div`
	font-size: 13px;
	color: #6b6b6b;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	margin: 5px 0 0px 0px;
	letter-spacing: 0.25px;
`

const getTimeAgo = (date: number) => {
	let timeAgo = ''
	const currentDate = Date.now() / 1000
	const dateDifference = currentDate - date
	const days = Math.floor(dateDifference / (3600 * 24))
	const hours = Math.floor((dateDifference % (3600 * 24)) / 3600)
	let daysSrtring = ''
	let hoursString = ''
	if (days > 1) {
		daysSrtring = `${days} days`
	} else if (days === 1) {
		daysSrtring = `${days} day`
	}
	if (hours > 1) {
		hoursString = `${hours} hours`
	} else if (hours === 1) {
		hoursString = `${hours} hour`
	}
	if (days && hours) {
		timeAgo = `${daysSrtring} and ${hoursString}`
	} else if (days && !hours) {
		timeAgo = `${daysSrtring}`
	} else if (!days && hours) {
		timeAgo = `${hoursString}`
	} else if (!days && !hours) {
		return 'just now'
	}
	return timeAgo + ' ago'
}

const NewsCard: FC<NewsCardProps> = ({ story, lastCardRef, selectedSection }) => {
	const [isFavorite, setIsFavorite] = useState<boolean>(false)
	const toggleFavorite = () => {
		const favoritesRaw = window.localStorage.getItem('favorites')
		if (!favoritesRaw) {
			const newFavorites = [story]
			window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
			setIsFavorite(true)
		} else {
			const favoritesList = JSON.parse(favoritesRaw)
			if (!isFavorite) {
				favoritesList.push(story)
				setIsFavorite(true)
			} else {
				const idArray = favoritesList.map((tempStory: StoryInterface) => tempStory.story_id)
				const index = idArray.indexOf(story.story_id)

				if (index > -1) {
					favoritesList.splice(index, 1)
				}
				setIsFavorite(false)
			}
			window.localStorage.setItem('favorites', JSON.stringify(favoritesList))
		}
	}

	useEffect(() => {
		const favoritesRaw = window.localStorage.getItem('favorites')
		if (favoritesRaw) {
			const favoritesList = JSON.parse(favoritesRaw)

			const idArray = favoritesList.map((tempStory: StoryInterface) => tempStory.story_id)
			if (idArray.includes(story.story_id)) {
				setIsFavorite(true)
			} else {
				setIsFavorite(false)
			}
		}
	}, [selectedSection, story.story_id])

	return (
		<>
			<CardDiv ref={lastCardRef}>
				<InfoDiv href={story.story_url} target='_blank'>
					<FlexBox>
						<Clock />
						<StyledTime>
							{getTimeAgo(story.created_at_i)} by {story.author}
						</StyledTime>
					</FlexBox>
					<StyledContent>{story.story_title}</StyledContent>
				</InfoDiv>

				<FavoriteDiv>
					<HeartDiv onClick={() => toggleFavorite()}>{isFavorite ? <HeartFilled /> : <HeartNoFilled />}</HeartDiv>
				</FavoriteDiv>
			</CardDiv>
		</>
	)
}

export default NewsCard
