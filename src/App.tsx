import React from 'react'
import NewsCardsSection from './components/news-cards-section/news-cards-section'
import SectionSelector from './components/section-selector/section-selector'

function App() {
	return (
		<div className='App'>
			<SectionSelector />
			<br />
			<br />
			<br />
			<br /> <br /> <br />
			<NewsCardsSection />
		</div>
	)
}

export default App
