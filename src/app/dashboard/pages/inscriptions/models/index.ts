import { Course } from '../../courses/models';
import { Student } from '../../students/models';

export interface Inscriptions {
  id: number;
  courseId: number;
  studentId: number;
  student?: Student;
  course?: Course;
}
