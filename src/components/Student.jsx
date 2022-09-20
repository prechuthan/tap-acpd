export function Student({ entries }) {
  const studentId = entries[0].student_id;

  const courseIds = entries.map((entry) => entry.course_id).join(", ");

  const calculatedGpa =
    entries
      .map((entry) => entry.course_grade)
      .reduce((prev, current) => prev + current, 0) / entries.length;

  return (
    <div>
      <p>Student</p>
      <h1>{studentId}</h1>
      <p>{courseIds}</p>
      <p>GPA {calculatedGpa.toFixed(1)}</p>
    </div>
  );
}
