import { IProject } from 'app/shared/model/project.model';

export interface ITask {
    id?: number;
    code?: string;
    name?: string;
    project?: IProject;
}

export class Task implements ITask {
    constructor(public id?: number, public code?: string, public name?: string, public project?: IProject) {}
}
