import { Course } from '../../courses/models';
import { User } from '../../users/models';

export interface Inscriptions {
  id: number;
  courseId: number;
  userId: number;
  user?: User;
  course?: Course;
}
