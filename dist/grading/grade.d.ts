import { AutograderFeedback } from '../api/adminServiceSchemas.js';
import { PawtograderConfig } from './types.js';
import { GradleGrader } from './graders/GradleGrader.js';
export declare function makeGrader(config: PawtograderConfig, solutionDir: string, submissionDir: string, regressionTestJob?: number): Promise<GradleGrader>;
export default function grade(solutionDir: string, submissionDir: string, regressionTestJob?: number): Promise<AutograderFeedback>;
