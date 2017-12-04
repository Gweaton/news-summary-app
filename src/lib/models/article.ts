export interface RawArticle {
  id: string;
  webTitle: string;
  webUrl: string;
  fields: {
    headline: string;
    bodyText: string;
    thumbnail: string;
  };
}

export interface Article {
  id: string;
  headline: string;
  url: string;
  content: string;
  thumbnail: string;
}

export function deserialiseArticles(json) {
  return json.response.results.map((rawArticle: RawArticle) => {
    return <Article> {
      id: rawArticle.id,
      headline: rawArticle.fields.headline,
      url: rawArticle.webUrl,
      content: rawArticle.fields.bodyText,
      thumbnail: rawArticle.fields.thumbnail
    };
  });
}
