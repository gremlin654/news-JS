import { Data, Options, IGetResp, CallbackFunc, REQUEST } from './../types/utils';

class Loader {
    readonly baseLink: string;
    readonly options: Options<string>;

    constructor(baseLink: string, options: Options<string>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: IGetResp<string>,
        callback: CallbackFunc<Data> = (): void => {
            console.error(REQUEST.error);
        }
    ): void {
        this.load(REQUEST.GET, endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options<string>, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load(method: string, endpoint: string, callback: CallbackFunc<Data>, options: Options<string> = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json() as Promise<Data>)
            .then((data: Data) => callback(data))
            .catch((err: PromiseRejectedResult) => console.error(err));
    }
}

export default Loader;
