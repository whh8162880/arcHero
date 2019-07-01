module rf{

    export const enum ExtensionDefine {
        NONE = ""
    }

    export class Main extends AppBase{

        init(canvas: HTMLCanvasElement): void{
            super.init(canvas);
            ROOT.addChild(singleton(GUIProfile));


            RES_PERFIX = "./assets/";

            createUrlSource("ui/map/map",ExtensionDefine.NONE,undefined,TSource);
        }
    }
}