type Image = {
	original: string;
	thumbnail: string;
};
export type ContentType = {
	tabs: string[];
	imagesByTab: { tab: string; images: Image[] }[];
};
