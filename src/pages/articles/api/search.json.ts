import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  // CORRECTO: Usamos searchParams para obtener el parámetro 'query' de la URL.
  const query: string | null = url.searchParams.get('query');

  // Handle if query is not present
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: 'Query param is missing',
      }),
      {
        status: 400, // Bad request
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  const allBlogArticles: CollectionEntry<'blog'>[] = await getCollection(
    'blog'
  );

  // Filter articles based on query
  const Results = allBlogArticles.filter((article) => {
    // Como ya comprobamos que 'query' no es null, podemos usarlo directamente.
    // Además, el toLowerCase() debe aplicarse al 'query' una sola vez si lo vas a usar repetidamente.
    const lowerCaseQuery = query.toLowerCase();

    const titleMatch: boolean = article.data.title
      .toLowerCase()
      .includes(lowerCaseQuery);

    const bodyMatch: boolean = article.body
      .toLowerCase()
      .includes(lowerCaseQuery);

    const slugMatch: boolean = article.slug
      .toLowerCase()
      .includes(lowerCaseQuery);

    return titleMatch || bodyMatch || slugMatch;
  });

  return new Response(JSON.stringify(Results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};