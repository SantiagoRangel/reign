export interface FetchedStoryInterface {
	author?: string
	story_title?: string
	story_url?: string
	created_at_i?: number
	objectID?: string
}

export interface StoryInterface {
	author: string
	story_title: string
	story_url: string
	created_at_i: number
	story_id: string
}

export interface SectionInterface {
	title: string
	id: number
}

export interface FilterOptionInterface {
	title: string
	value: string
	image: string
}

export const sections = {
	all: 1,
	myFaves: 2,
}
