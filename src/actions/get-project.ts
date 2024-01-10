import { biography } from "~/lib/config";
import { type Project } from "~/types";

/**
 * Find a project by its id
 * @param {string} id - The id of the project
 * @returns {Project} - The project if found, null otherwise
 */
const getProject = (projectId: string): Project | null =>
  biography.portfolioProjects.find((project) => project.id === projectId) ?? null;

export default getProject;
