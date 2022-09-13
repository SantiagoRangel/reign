import React, { FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { FilterOptionInterface } from '../../../../interfaces/interfaces'

interface FilterOptionProps {
	option: FilterOptionInterface
	selectedFilter: string
	setSelectedFilter: React.Dispatch<SetStateAction<string>>
	setPageNumber: React.Dispatch<SetStateAction<number>>
}

const OptionDiv = styled.div`
	height: auto;
	display: flex;
	width: 220px;
	&:hover {
		cursor: pointer;
		background-color: #f4f4f4;
		opacity: 0.8;
	}
`

const SelectedOptionDiv = styled.div`
	height: auto;
	display: flex;
	width: 220px;
	background-color: #f4f4f4;
	&:hover {
		cursor: pointer;
		background-color: #f4f4f4;
		opacity: 0.8;
	}
`

const OptionIcon = styled.img`
	width: auto;
	height: 20px;
	padding: 10px;
`
const OptionText = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 0.875rem;
`

const FilterOption: FC<FilterOptionProps> = ({ option, selectedFilter, setSelectedFilter, setPageNumber }) => {
	if (selectedFilter === option.value) {
		return (
			<SelectedOptionDiv>
				<OptionIcon src={option.image} alt={option.value} />
				{option.value === 'angular' ? (
					<OptionText style={{ marginLeft: '5px' }}>{option.title}</OptionText>
				) : (
					<OptionText>{option.title}</OptionText>
				)}
			</SelectedOptionDiv>
		)
	}

	return (
		<OptionDiv
			onClick={() => {
				window.localStorage.setItem('filter', option.value)
				setSelectedFilter(option.value)
				setPageNumber(0)
			}}
		>
			<OptionIcon src={option.image} alt={option.value} />
			{option.value === 'angular' ? (
				<OptionText style={{ marginLeft: '5px' }}>{option.title}</OptionText>
			) : (
				<OptionText>{option.title}</OptionText>
			)}
		</OptionDiv>
	)
}

export default FilterOption
