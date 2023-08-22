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
