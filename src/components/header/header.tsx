import React, { FC } from 'react'
import styled from 'styled-components'

interface HeaderProps {}

const HeaderDiv = styled.div`
	width: 100%;
	box-shadow: 5px 0px 4px #dbdbdb;
	padding: 2.75rem 0 2.75rem 7.3rem;
	@media (max-width: 600px) {
		padding: 0;
	}
`
const HeaderText = styled.p`
	font-size: 1.75rem;
	color: #3b3b3b;
	margin: 0;
	font-family: 'Baskervville', serif;
	@media (max-width: 600px) {
		padding-top: 2rem;
		padding-bottom: 2rem;
		text-align: center;
	}
`

const Header: FC<HeaderProps> = () => (
	<HeaderDiv>
		<HeaderText>HACKER NEWS</HeaderText>
	</HeaderDiv>
)

export default Header
