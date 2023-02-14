export default async function useFetch(url, parameters) {
  const response = await fetch(url, parameters);
  const data = await response.json();
  return data;
}
