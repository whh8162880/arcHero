module rf{

    export const enum ExtensionDefine {
        NONE = ""
    }

    export class Main extends AppBase{

        init(canvas: HTMLCanvasElement): void{
            super.init(canvas);
            ROOT.addChild(singleton(GUIProfile));


            RES_PERFIX = "./assets/";

            createUrlSource("ui/map/map",ExtensionDefine.NONE,this.mapLoadCompleteHandler.bind(this),TSource);
        }

        mapLoadCompleteHandler(source:TSource){

            let sp = new Sprite(source);

            let{graphics} = sp;

            graphics.clear();
            graphics.drawBitmap(0,0,source.data.frames["edge-up #28219"]);
            graphics.end();

            ROOT.addChild(sp);

        }
    }
}