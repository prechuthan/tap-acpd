import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faExclamation,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export function Error({ error, refetch }) {
  return (
    <div className="text-center">
      <span className="fa-layers mt-8">
        <FontAwesomeIcon
          icon={faCloud}
          className="text-red-400 text-7xl"
          transform="left-8 up-1"
        />
        <FontAwesomeIcon icon={faExclamation} className="text-white text-4xl" />
      </span>
      <p className="text-red-600 mt-5">Error {error.code}</p>

      <button
        className="text-sm rounded-lg drop-shadow-md bg-white mt-5 px-8 py-1"
        onClick={refetch}
      >
        <FontAwesomeIcon icon={faRotateRight} className="text-black" />
        <span className="ml-2">Try again</span>
      </button>
    </div>
  );
}
