import React from 'react'
import Header from './components/header/header'
import styled from 'styled-components'
import NewsPage from './components/news-page/news-page'

const AppDiv = styled.div`
	min-height: 100vh;
	min-width: 100vw;
`

function App() {
	return (
		<AppDiv className='App'>
			<Header />
			<NewsPage />
		</AppDiv>
	)
}

export default App
