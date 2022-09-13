import React, { FC, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as DownArrow } from '../../../assets/down.svg'
import { FilterOptionInterface } from '../../../interfaces/interfaces'
import FilterOption from './filter-option/filter-option'

interface FilterProps {
	optionsArray: FilterOptionInterface[]
	selectedFilter: string
	setSelectedFilter: React.Dispatch<SetStateAction<string>>
	setPageNumber: React.Dispatch<SetStateAction<number>>
}

const Main = styled.div`
	margin: 0 0 50px 170px;
	@media (max-width: 600px) {
		display: flex;
		justify-content: center;
		margin: -30px 0 30px 0;
	}
`

const FilterDiv = styled.div`
	border-radius: 4px;
	height: auto;
	border: solid 1px #2e2e2e;
	padding: 7px 10px;
	max-width: 200px;
	display: flex;
	justify-content: space-between;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 600px) {
		width: 140px;
	}
`
const FilterText = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 0.875rem;
	margin: 0;
`

const OptionsDiv = styled.div`
	height: auto;
	max-width: 220px;
	box-shadow: 0 2px 2px 0 #dad8d8;
	display: block;
	position: absolute;
	background-color: white;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 600px) {
		margin-top: 33px;
	}
`

const Filter: FC<FilterProps> = ({ optionsArray, setSelectedFilter, selectedFilter, setPageNumber }) => {
	const [clicked, setClicked] = useState<boolean>(false)
	return (
		<Main>
			<FilterDiv onClick={() => setClicked((prevState) => !prevState)}>
				<FilterText>Select your news</FilterText>
				<DownArrow width={'10px'} />
			</FilterDiv>
			{clicked && (
				<OptionsDiv>
					{optionsArray.map((option, index) => (
						<FilterOption
							key={index}
							option={option}
							setSelectedFilter={setSelectedFilter}
							selectedFilter={selectedFilter}
							setPageNumber={setPageNumber}
						></FilterOption>
					))}
				</OptionsDiv>
			)}
		</Main>
	)
}

export default Filter
