module rf{
    export interface ITSourceData{
        frames:{[key: string] : IBitmapSourceVO}
        symbols:{[key: string] : IDisplaySymbol}
    }

    export interface IDisplaySymbol{
        width:number;
        height:number;
    }

    export class TSource extends UrlBitmapSource{

        task:LoadTask;
        data:ITSourceData;

        constructor(url:string){
            super(url);
            this.task = new LoadTask();
            this.task.on(EventT.COMPLETE,this.taskCompleteHandler,this);
        }
        

        load() {
            this.status = LoadStates.LOADING;
            let{task,name} = this;
            task.add(RES_PERFIX,name + ".dat",ResType.amf,this.configCompleteHandler,this);
            task.add(RES_PERFIX,name + ".png",ResType.image,this.imageCompelteHandler,this);
        }


        configCompleteHandler(e:EventX){
            this.data = e.data;
        }

        imageCompelteHandler(e:EventX){
            if(e.type == EventT.COMPLETE){
                let bmd = e.data; //BitmapData.fromImageElement(event.data); //event.data;
                this.bmd = bmd;
                this.width = bmd.width;
                this.height = bmd.height;
                this.setArea(BitmapSource.DEFAULT, 0, 0, bmd.width, bmd.height);
            }
        }

        taskCompleteHandler(e:EventX){


            let{frames} = this.data;

            for (const key in frames) {
                const element = frames[key];
                element.source = this;
            }

            let area = this.areas[0];
            area.frames = frames;

            this.status = LoadStates.COMPLETE;
            let{completeFuncs} = this;

            for (let i = 0; i < completeFuncs.length; i++) {
                completeFuncs[i](this);
            }

            completeFuncs.length = 0;

            this.simpleDispatch(EventT.COMPLETE,this);
        }


    }



   

}