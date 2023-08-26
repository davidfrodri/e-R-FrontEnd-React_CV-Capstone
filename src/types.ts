// Expertise / Experience
export interface JobInfo {
	company: string
	job: string
	description: string
}

export interface JobData {
	date: string
	info: JobInfo
}

export interface JobDataArray extends Array<JobData> {}

// Form Skills
export interface FormSkills {
    name: string
    range: number
}


// Education
export interface EducationData {
	title: string;
	date: string;
	description: string;
}
