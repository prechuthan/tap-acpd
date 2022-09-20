import { Student } from "./Student";

const api_data = [
  {
    student_id: "1902003",
    course_id: "CS103",
    course_year: "2021",
    course_grade: 4.0,
  },
  {
    student_id: "1902003",
    course_id: "CS102",
    course_year: "2021",
    course_grade: 5.0,
  },
  {
    student_id: "1902003",
    course_id: "CS104",
    course_year: "2021",
    course_grade: 2.2,
  },
];

function GradeTracker() {
  return (
    <div className="GradeTracker">
      <Student entries={api_data} />
    </div>
  );
}

export default GradeTracker;
