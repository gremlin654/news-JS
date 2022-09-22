export interface INews {
    author: string;
    description: string;
    publishedAt: string;
    source: { readonly id: string; readonly name: string };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISources {
    name: string;
    id: string;
}

export type Data = {
    status: 'string';
    sources: ISources[] | undefined;
    articles: INews[] | undefined;
    totalResults: number;
};

export type Options<T> = {
    [key: string]: T;
};

export type CallbackFunc<T> = (data: T) => void;

export interface IGetResp<T> {
    endpoint: T;
    options?: Options<T>;
}

export enum REQUEST {
    GET = 'GET',
    error = 'No callback for GET response',
}
export interface IApp {
    start: () => void;
}
