export interface CuratedContentPage {
	slug: string;
	h1: string;
	intro: string;
	description: string;
	sections: {
		title: string;
		description: string;
		toolRoutes: string[];
	}[];
	faqs: {
		question: string;
		answer: string;
	}[];
	relatedSlugs: string[];
}

export const curatedPages: CuratedContentPage[] = [];
