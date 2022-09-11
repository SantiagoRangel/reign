import React, { FC } from 'react'
import styled from 'styled-components'

interface SectionSelectorTabProps {
	title: string
}

const TabDiv = styled.div`
	margin-top: 10vh;
	padding: 5px;
	border: 1px solid #c1c1c1;
	width: 80px;
	display: flex;
	justify-content: center;
	color: #6b6b6b;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	margin-left: -1px;
	&:hover {
		cursor: pointer;
		border: 1px solid #1797ff;
		color: #1797ff;
	}
`

const SectionSelectorTab: FC<SectionSelectorTabProps> = (title) => {
	console.log(title)
	return <TabDiv className='selectorTabDiv'>{title.title}</TabDiv>
}

export default SectionSelectorTab
