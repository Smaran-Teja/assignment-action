import { AutograderFeedback } from '../../api/adminServiceSchemas.js';
import { OverlayPawtograderConfig, PawtograderConfig } from '../types.js';
import { Grader } from './Grader.js';
export declare class OverlayGrader extends Grader<OverlayPawtograderConfig> {
    private gradingDir;
    private builder;
    constructor(solutionDir: string, submissionDir: string, config: PawtograderConfig, gradingDir: string, regressionTestJob?: number);
    copyStudentFiles(whichFiles: 'files' | 'testFiles'): Promise<void>;
    private copyArtifactToTemp;
    resetSolutionFiles(): Promise<void>;
    private gradePart;
    private gradeGradedUnit;
    grade(): Promise<AutograderFeedback>;
}
