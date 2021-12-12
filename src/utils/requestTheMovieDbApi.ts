import config from "src/config";

const { apiUrl } = config;
const apiKey = "09ddde9260c791abe3d1f93343772459";

const parseQueryParameters = (queryParameters: Record<string, any> = {}) => {
  let parsedQueryParameters = "";
  const entries = Object.entries(queryParameters);
};
const requestTheMovieDbApi = (request: any) => {
  const { queryParameters, endpoint } = request;
  const parsedQueryParameters = parseQueryParameters(queryParameters);
  return fetch(`${apiUrl}?api_key=${apiKey}&${parsedQueryParameters}`);
};

export default requestTheMovieDbApi;
