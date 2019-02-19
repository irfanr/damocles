import { ITask } from 'app/shared/model/task.model';

export interface IProject {
    id?: number;
    code?: string;
    name?: string;
    tasks?: ITask[];
}

export class Project implements IProject {
    constructor(public id?: number, public code?: string, public name?: string, public tasks?: ITask[]) {}
}
