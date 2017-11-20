export interface RawArticle {
  webTitle: string;
  webUrl: string;
  fields: {
    headline: string;
    body: string;
  };
}

export interface Article {
  headline: string;
  url: string;
  content: string;
}

export function deserialiseArticles(json) {
  return json.response.results.map((rawArticle: RawArticle) => {
    return <Article> {
      headline: rawArticle.fields.headline,
      url: rawArticle.webUrl,
      content: rawArticle.fields.body
    };
  });
}
