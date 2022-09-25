import axios from "axios";
import { useQuery } from "react-query";
import { Student } from "./Student";
import { Loading } from "./Loading";

const API_URL =
  "https://quanmgx57hjiqicdxgo2vzebqq0tghim.lambda-url.ap-southeast-1.on.aws/";

function GradeTracker() {
  // Setup useQuery with API fetch timeout of 3secs + max. 2 retries
  const { isLoading, error, data } = useQuery(
    ["studentGrades"],
    () => axios(API_URL, { timeout: 3000 }),
    {
      retry: 2,
    }
  );

  // Handle error response from API
  if (error) {
    console.log(`error: {error}`);
    return <span>ERROR</span>;
  }

  // Handing loading while API is being fetched
  if (isLoading) {
    return <Loading />;
  }

  // Clean API data by grouping entries of the same student together
  // Sort is performed first to arrange by accending student_id
  const cleanedApiData = data.data
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 place-content-evenly">
      {studentList}
    </div>
  );
}

export default GradeTracker;
