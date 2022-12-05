import { of } from "rxjs";
import { JobService } from "./job.service";

export class FakeJobServiceModuleBuilder {
    build() {
        const fakeJobService = jasmine.createSpyObj('JobService', ['getJobDetail', 'getSkills', 'getJobList', 'fetchJobList', 'getSelectedJobId', 'selectJobId'], { jobList$: of([]), jobDetail$: of(undefined) });
        fakeJobService.getSkills.and.returnValue([]);
        fakeJobService.getJobDetail.and.returnValue(of({}));
        fakeJobService.getJobList.and.returnValue(of([]));

        return {
            provide: JobService,
            useValue: fakeJobService
        }
    }
}
