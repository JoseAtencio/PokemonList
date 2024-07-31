interface RootInitNav {
    loading: string;
    home: string;
    list: string;
    detail: string;
}

interface Plantilla {
    plantilla: string;
}

interface IRouteStack {
    RootInitNav: RootInitNav;
    RootDev:Plantilla;
}

interface ScrollState {
    scrollYRedux: number,
    scrollingIsUp: boolean,
    scrollingFinished: boolean,
    scrollingIsDown: boolean,
}

type Theme = 'light' | 'dark';

export {
    IRouteStack,
    ScrollState,
    Theme
}
