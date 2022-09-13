import React, { FC, SetStateAction } from 'react'
import styled from 'styled-components'
import FlexBox from '../../basics/FlexBox'
import { SectionInterface } from '../../../interfaces/interfaces'
import SectionSelectorTab from './section-selector-tab'

interface SectionSelectorProps {
	setSelectedSection: React.Dispatch<SetStateAction<number>>
	selectedSection: number
}

const SelectorDiv = styled(FlexBox)`
	margin-bottom: 100px;
	justify-content: center;
	.selectorTabDiv:first-child {
		border-radius: 3px 0 0 3px;
	}
	.selectorTabDiv:last-child {
		border-radius: 0 3px 3px 0;
	}
`

const sectionArray: SectionInterface[] = [
	{ title: 'All', id: 1 },
	{ title: 'My faves', id: 2 },
]
const SectionSelector: FC<SectionSelectorProps> = ({ setSelectedSection, selectedSection }) => (
	<SelectorDiv>
		{sectionArray.map((section) => (
			<SectionSelectorTab
				key={section.id}
				section={section}
				selectedSection={selectedSection}
				setSelectedSection={setSelectedSection}
			></SectionSelectorTab>
		))}
	</SelectorDiv>
)

export default SectionSelector
