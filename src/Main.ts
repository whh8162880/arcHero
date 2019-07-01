module rf{

    export const enum ExtensionDefine {
        NONE = ""
    }

    export class Main extends AppBase{

        init(canvas: HTMLCanvasElement): void{
            super.init(canvas);

            Engine.setDisplayArea(640,1080)

            // ROOT.addChild(singleton(GUIProfile));

            context3D.defauleMag = WebGLConst.LINEAR;

            RES_PERFIX = "./assets/";

            TComponentClass = {
                1 : TComponent
            }

            createUrlSource("ui/map/map",ExtensionDefine.NONE,this.mapLoadCompleteHandler.bind(this),TSource);
        }

        mapLoadCompleteHandler(source:TSource){

            let sp = new TComponent(source);
            sp.symbol = "Map";
            sp.gotoAndStop(0);

            // let{graphics} = sp;

            // graphics.clear();
            // graphics.drawBitmap(0,0,source.data.frames["edge-up #28219"]);
            // graphics.end();

            ROOT.addChild(sp);

        }
    }
}