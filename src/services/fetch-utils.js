import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function addToMovieSearchList(movie) {
  const response = await client
    .from('movie-search')
    .insert(movie);

  return checkError(response);
}

export async function getMovieSearchList() {
  const response = await client
    .from('movie-search')
    .select()
    .order('id');

  return checkError(response);
}

export async function sawMovie(id) {
  const response = await client
    .from('movie-search')
    .update({ saw: true })
    .match({ id })
    .single();

  return checkError(response);
}

export async function searchMovies(query) {
  const response = await fetch(`/.netlify/functions/movies-endpoint?searchQuery=${query}`);

  const json = await response.json();

  return json.data.results;
}