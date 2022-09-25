export function Student({ entries }) {
  const studentId = entries[0].student_id;

  const courseIds = entries.map((entry) => entry.course_id).join(", ");

  //   GPA calculated by getting an average grade
  const calculatedGpa =
    entries
      .map((entry) => entry.course_grade)
      .reduce((prev, current) => prev + current, 0) / entries.length;

  return (
    <div className="w-48 h-48 mx-auto p-4 text-xs rounded-lg drop-shadow-md bg-white">
      <p>student</p>
      <h1 className="text-4xl font-medium">{studentId}</h1>
      <p className="h-12">{courseIds}</p>
      <p className="text-right mt-4">
        GPA{" "}
        <span className="text-4xl font-medium">{calculatedGpa.toFixed(1)}</span>
      </p>
    </div>
  );
}
