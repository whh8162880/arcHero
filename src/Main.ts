module rf{

    export class Main extends AppBase{

        init(canvas: HTMLCanvasElement): void{
            super.init(canvas);
            ROOT.addChild(singleton(GUIProfile));
        }
    }
}