import { type FormSkills, type EducationData } from "../types"

export const fetchSkillsService = async (): Promise<FormSkills[]> => {
  const response = await fetch('/api/skills')
  const data = await response.json()
  return data
}

export const fetchEducation = async (): Promise<EducationData[]> => {
  const response = await fetch('/api/educations');
  if (!response.ok) {
	  throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};