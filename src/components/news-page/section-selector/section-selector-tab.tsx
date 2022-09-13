import React, { FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { SectionInterface } from '../../../interfaces/interfaces'

interface SectionSelectorTabProps {
	section: SectionInterface
	selectedSection: number
	setSelectedSection: React.Dispatch<SetStateAction<number>>
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
const SelectedTabDiv = styled.div`
	margin-top: 10vh;
	padding: 5px;
	width: 80px;
	display: flex;
	justify-content: center;
	border: 1px solid #1797ff;
	color: #1797ff;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	margin-left: -1px;
	&:hover {
		cursor: pointer;
	}
`

const SectionSelectorTab: FC<SectionSelectorTabProps> = ({ section, selectedSection, setSelectedSection }) => {
	const handleClick = () => {
		if (selectedSection === section.id) return
		setSelectedSection(section.id)
	}
	return selectedSection === section.id ? (
		<SelectedTabDiv
			className='selectorTabDiv'
			onClick={() => {
				handleClick()
			}}
		>
			{section.title}
		</SelectedTabDiv>
	) : (
		<TabDiv
			className='selectorTabDiv'
			onClick={() => {
				handleClick()
			}}
		>
			{section.title}
		</TabDiv>
	)
}

export default SectionSelectorTab
