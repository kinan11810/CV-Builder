// src/services/aiService.ts

import { Experience } from "../types/cv.types"

export const generateExperienceDescription = async (
  data: Experience
): Promise<string> => {
  
  // حالياً mock AI
  return `
Worked as ${data.jobTitle} at ${data.company} in ${data.location}.
Responsible for delivering results in the ${data.industry} industry.
`
}
