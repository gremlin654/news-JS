import ChangeTheme from '../button/changeDarkLight';
import AppController from '../controller/controller';
import { Data, IApp } from '../types/utils';
import { AppView } from '../view/appView';
class App implements IApp {
    readonly controller: AppController;
    readonly view: AppView;
    readonly changeBtn: ChangeTheme;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.changeBtn = new ChangeTheme();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: Pick<Data, 'articles'>) => this.view.drawNews(data))
        );
        this.controller.getSources((data: Pick<Data, 'sources'>) => this.view.drawSources(data));
        this.changeBtn.changeDarkLight();
    }
}

export default App;
