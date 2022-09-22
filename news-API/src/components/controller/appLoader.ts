import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '596cdc785f88456ab27ebdb84c0dc373', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
