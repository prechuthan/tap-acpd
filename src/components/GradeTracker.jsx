import { Student } from "./Student";

const simpleApiData = [
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

const mixApiData = [
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
    student_id: "1902002",
    course_id: "CS101",
    course_year: "2021",
    course_grade: 3.0,
  },
  {
    student_id: "1902003",
    course_id: "CS104",
    course_year: "2021",
    course_grade: 2.2,
  },
  {
    student_id: "1902002",
    course_id: "CS102",
    course_year: "2021",
    course_grade: 5.0,
  },
];

// Clean API data by grouping entries of the same student together
// Sort is performed first to arrange by accending student_id
const cleanedApiData = mixApiData
  .sort((prev, current) => prev.student_id - current.student_id)
  .reduce((group, entry) => {
    const { student_id: studentId } = entry;
    group[studentId] = group[studentId] ?? [];
    group[studentId].push(entry);
    return group;
  }, {});

// Build Student components from API data
const studentList = Object.keys(cleanedApiData).map((studentId) => {
  const studentEntries = cleanedApiData[studentId];
  return <Student entries={studentEntries} key={studentId} />;
});

function GradeTracker() {
  return <div className="GradeTracker">{studentList}</div>;
}

export default GradeTracker;
