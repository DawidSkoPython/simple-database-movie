import apiKey from "src/apiKey";
import config from "src/config";

const { apiUrl } = config;

const parseQueryParameters = (queryParameters: Record<string, any> = {}) => {
  let parsedQueryParameters = "";
  const entries = Object.entries(queryParameters);
  // ("entries: ", entries);

  entries.forEach((entry: [string, string]) => {
    const [name, value] = entry;
    parsedQueryParameters = parsedQueryParameters.concat(name, "=", value, "&");
    // ("parsedQueryParameters 123:", parsedQueryParameters);
  });
  return parsedQueryParameters;
  // entries.forEach
};
const requestTheMovieDbApi = (request: any) => {
  // ("is it hereee?");
  const { queryParameters, endpoint } = request;
  // ("queryParameters: ", queryParameters, endpoint);
  const parsedQueryParameters = parseQueryParameters(queryParameters);
  // ("parsedQueryParameters: ", parsedQueryParameters);
  return fetch(
    `${apiUrl}${endpoint}?api_key=${apiKey}&${parsedQueryParameters}`
  );
};

export default requestTheMovieDbApi;
