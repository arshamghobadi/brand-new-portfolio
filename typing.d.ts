export interface Skill {
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

export interface Project {
  id: number;
  title: string;
  demo: string;
  SourceCode: string;
  description: string;
}

export interface DBDataExp {
  dataExp: WorkExperienceType[];
}
export interface DBDataSkill {
  data: Skill[];
}
export interface DBDataOroject {
  projectsData: Project[];
}
