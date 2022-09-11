import React, { FC } from 'react'
import styled from 'styled-components'
import SectionSelectorTab from './section-selector-tab'

interface SectionSelectorProps {}

const SelectorDiv = styled.div`
	display: flex;
	justify-content: center;
	.selectorTabDiv:first-child {
		border-radius: 3px 0 0 3px;
	}
	.selectorTabDiv:last-child {
		border-radius: 0 3px 3px 0;
	}
`

const sectionArray = ['All', 'My faves']
const SectionSelector: FC<SectionSelectorProps> = () => (
	<SelectorDiv>
		{sectionArray.map((section, index) => (
			<SectionSelectorTab key={index} title={section} />
		))}
	</SelectorDiv>
)

export default SectionSelector
