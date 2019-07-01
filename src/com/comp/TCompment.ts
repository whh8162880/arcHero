module rf{
    export const enum TComponentConst{
		Component = 1,
		TextField,
		Button,
		CheckBox,
		RadioButton,
		ScrollBar,
		Dele,
		ProgressBar
    }

    export let TComponentClass:{ [type: string]: { new(): TComponent } } 



    export class TComponent extends Sprite{
        source:TSource;
        constructor(source?:TSource){
			super(source);
        }

        symbol:string;
        currentClip:number|string;

        gotoAndStop(clip:number|string,refresh?:boolean,symbol?:string){

            if(!symbol){
                symbol = this.symbol;
            }

            const{graphics , source,currentClip} = this;

            let symbolData = source.data.symbols[symbol];

			if(!symbolData){
				return;
            }
            
            if(currentClip == clip && !refresh){
				return;
            }

            graphics.clear();

            this.currentClip = clip;
			let elements = symbolData.displayFrames[clip];
			if(undefined == elements)
			{
				graphics.end();
				return;
            }

            let sp:TComponent;
            for (let i = 0; i < elements.length; i++) {
                const ele = elements[i] as IDisplayFrameElement;
                let{type,x,y,rect,id}=ele;
                
				if(TComponentClass.hasOwnProperty(type+""))
				{
                    sp = this[id];
                    if(!sp){
                        sp = recyclable(TComponentClass[type]);
                        sp.name = id;
                        sp.source = source;
                        sp.symbol = ele.libraryItemName;
                        sp.gotoAndStop(0);
                        sp.locksize = true;
                        sp.setPos(x, y);
                        // sp.x = x;
                        // sp.y = y;
                        this.addChild(sp);
                        this[id] = sp;
                    }
                }else if(type == 0){
                    let vo:IBitmapSourceVO = source.getSourceVO(ele.libraryItemName, 0);

                    let mw = source.width;
                    let mh = source.height;

                    // const { x, y, w, h } = vo;
                    // vo.ul = x / mw;
                    // vo.ur = (x + w)/mw;
                    // vo.vt = y / mh;
                    // vo.vb = (y + h) / mh;

                    if(vo) {
                        let{rect,x,y}=ele;
                        if(rect){
                            graphics.drawScale9Bitmap(x,y,vo,rect);
                        }else{
                            graphics.drawBitmap(x,y,vo);
                        }
                    }
                }
            }


            graphics.end();
        }
    }
}