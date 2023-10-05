export interface SkillType {
  id: number;
  name: string;
  progress: number;
}

export interface WorkExperienceType {
  id: number;
  title: string;
  company: string;
  start: number;
  end: number;
  url: string;
  summry: string[];
}

export interface ProjectType {
  id: number;
  title: string;
  demo: string;
  SourceCode: string;
  technology: string[];
}

export interface DBDataExp {
  dataExp: WorkExperienceType[];
  data: Skill[];
  projectsData: Project[];
}
