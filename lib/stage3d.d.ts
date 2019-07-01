declare module rf {
    interface IPANEL_TWEEN_DATA {
        type: string;
        time: number;
        duration?: number;
        lifetime?: number;
        offsetDegree?: number | number[];
        ease?: string;
        from?: number | number[];
        to?: number | number[];
        len?: number | number[];
        degree?: number | number[];
        so?: {
            [key: string]: number;
        };
        eo?: {
            [key: string]: number;
        };
        ef?: string;
        p?: any;
        t?: any;
        sp?: number;
        rt?: boolean;
    }
    interface IPANEL_GLOBAL_CONFIG_BATTLE {
        time: number;
        atk: number[][];
    }
    interface IPANEL_ENERGY {
        max: number;
        recover: number;
        attack: number;
    }
    interface IPANEL_ATTACK {
        cd: number;
        blood: number;
        area: number;
        bscd: number;
        bsblood: number;
    }
    interface IPanel_Global_Config_Data {
        namefontsize: number;
        team_a_pos: {
            [key: number]: number[];
        };
        team_b_pos: {
            [key: number]: number[];
        };
        battle: IPANEL_GLOBAL_CONFIG_BATTLE;
        energy: IPANEL_ENERGY;
        attack: IPANEL_ATTACK;
        atkorder: {
            team_a: {
                [key: number]: number;
            };
            team_b: {
                [key: number]: number;
            };
        };
        bseffect: {
            [key: string]: {
                x: number;
                y: number;
                jiange: number;
                anim: IPANEL_TWEEN_DATA[];
            };
        };
    }
    interface IPanel_Global_Data {
        config: IPanel_Global_Config_Data;
    }
    interface IDemo_Batter_Unit_Data {
        index: number;
        unit: {
            type: string;
            id: number | string;
            level: number;
            moban?: string;
        };
    }
    interface IPanel_Demo_Data {
        map: string;
        team_A: IDemo_Batter_Unit_Data[];
        team_B: IDemo_Batter_Unit_Data[];
    }
    interface IPANEL_Demo_ROOT {
        demo: IPanel_Demo_Data;
    }
    interface IPANEL_FIGHT_FONT_ATTACK {
        type: number;
        add: number;
        dec: number;
        bx: number;
        by: number;
        offset: number;
        prefix: number[];
        unshownum: number;
        tween: IPANEL_TWEEN_DATA[];
    }
    interface IData {
        [key: string]: any;
        [key: number]: any;
    }
    interface ITextureData extends IData {
        key: string;
        url: string;
        mipmap: boolean;
        mag: number;
        mix: number;
        repeat: number;
    }
}
declare module rf {
    var ClientCheck: {
        isClientCheck: boolean;
    };
    var errorPrefix: string;
    interface ThrowError {
        (msg: string, err?: Error, alert?: boolean): void;
        MaxCount?: number;
        errorMsg?: string[];
    }
    var Log: {
        (...msg: any[]): void;
    };
    const ThrowError: ThrowError;
}
declare module Zlib {
    class Inflate {
        constructor(byte: Uint8Array);
        decompress(): Uint8Array;
    }
}
declare function parseInt(s: number, radix?: number): number;
declare function zeroize(value: number | string, length?: number): string;
declare function getDescriptor(descriptor: PropertyDescriptor, enumerable?: boolean, writable?: boolean, configurable?: boolean): PropertyDescriptor;
declare function makeDefDescriptors(descriptors: object, enumerable?: boolean, writable?: boolean, configurable?: boolean): PropertyDescriptorMap;
interface Object {
    clone(): Object;
    copyto(to: Object): any;
    getPropertyDescriptor(property: string): PropertyDescriptor;
    equals(checker: object, ...args: (keyof this)[]): any;
    copyWith<T>(this: T, to: object, ...proNames: (keyof T)[]): void;
    getSpecObject<T>(this: T, ...proNames: (keyof T)[]): object;
}
interface Float32Array {
    x: number;
    y: number;
    z: number;
    w: number;
    update(data32PerVertex: number, offset: number, v: number): void;
    wPoint1(position: number, x: number, y?: number, z?: number, w?: number): void;
    wPoint2(position: number, x: number, y: number, z?: number, w?: number): void;
    wPoint3(position: number, x: number, y: number, z: number, w?: number): void;
    wPoint4(position: number, x: number, y: number, z: number, w: number): void;
    clone(): Float32Array;
}
interface Function {
    isSubClass(testBase: Function): boolean;
}
interface Math {
    clamp(value: number, min: number, max: number): number;
    random2(min: number, max: number): number;
    random3(center: number, delta: number): number;
    DEG_TO_RAD: number;
    RAD_TO_DEG: number;
    PI2: number;
    PI_1_2: number;
}
interface NumberConstructor {
    isSafeInteger(value: number): boolean;
}
interface Number {
    zeroize(length: number): string;
    between(min: number, max: number): boolean;
}
interface String {
    trim(): string;
    substitute(...args: any[]): string;
    substitute(args: any[]): string;
    zeroize(length: number): string;
    hash(): number;
    trueLength(): number;
}
interface StringConstructor {
    zeroize: (value: number, length: number) => string;
    regSubHandler(key: string, handler: {
        (input: any): string;
    }): any;
    subHandler: Readonly<{
        [index: string]: {
            (input: any): string;
        };
    }>;
}
interface Date {
    format(mask: string, local?: boolean): string;
}
declare const enum ArraySort {
    ASC = 0,
    DESC = 1
}
interface ArrayConstructor {
    binaryInsert<T>(partArr: T[], item: T, filter: {
        (tester: T, ...args: any[]): boolean;
    }, ...args: any[]): any;
    SORT_DEFAULT: {
        number: 0;
        string: "";
        boolean: false;
    };
}
interface Array<T> {
    pushOnce(t: T): number;
    remove(t: T): boolean;
    multiSort(kArr: (keyof T)[], dArr?: boolean[] | ArraySort[]): this;
    doSort(key?: keyof T, descend?: boolean | ArraySort): this;
    doSort(descend?: boolean | ArraySort, key?: keyof T): this;
    cloneTo<T>(to: Array<T>): any;
    appendTo<T>(to: Array<T>): any;
}
declare module rf {
    function getQualifiedClassName(value: any): string;
    function getQualifiedSuperclassName(value: any): string;
    function is(instance: any, ref: {
        new (): any;
    }): boolean;
    function toString(instance: any, defaultValue?: string): string;
    function clone(from: any, to?: any): any;
    function properties(target: any, key: string): void;
}
declare module rf {
    interface IOffsetResize {
        stageWidth: number;
        stageHeight: number;
        ox: number;
        oy: number;
        sx: number;
        sy: number;
    }
    var weixin: boolean;
    var worker: Worker;
    let gl: WebGLRenderingContext;
    let pixelRatio: number;
    var sceneWidth: number;
    var sceneHeight: number;
    var windowWidth: number;
    var windowHeight: number;
    var innerWidth: number;
    var innerHeight: number;
    var lockStageArea: boolean;
    var stageWidth: number;
    var stageHeight: number;
    var offsetResize: IOffsetResize;
    var contextMatrix3D: IMatrix3D;
    var contextMatrix2D: IMatrix3D;
    var contextInvMatrix: IMatrix3D;
    var scissorRect: Size;
    var TEMP_RECT: Size;
    var isWindowResized: boolean;
    var max_vc: number;
    let c_white: string;
    let pixelFont: number;
    let pixelScale: number;
    let isMobile: boolean;
    let platform: string;
    let softKeyboard: boolean;
    var ROOT_PERFIX: string;
    var RES_PERFIX: string;
    var CONFIG_PERFIX: string;
    var FILE_ROOT: any;
    const enum DebugDefine {
        CANVAS = "canvas_Event"
    }
    const enum ExtensionDefine {
        JPG = ".jpg",
        PNG = ".png",
        KM = ".km",
        DAT = ".dat",
        P3D = ".p3d",
        PARTICLE = ".pa",
        SKILL = ".sk",
        KF = ".kf",
        ANI = ".ha",
        PAK = ".hp"
    }
    const enum Align {
        TOP_LEFT = 0,
        TOP_CENTER = 1,
        TOP_RIGHT = 2,
        MIDDLE_LEFT = 3,
        MIDDLE_CENTER = 4,
        MIDDLE_RIGHT = 5,
        BOTTOM_LEFT = 6,
        BOTTOM_CENTER = 7,
        BOTTOM_RIGHT = 8
    }
    function isPowerOfTwo(n: number): boolean;
    const enum WebGLConst {
        ONE = 1,
        SRC_ALPHA = 770,
        ONE_MINUS_SRC_ALPHA = 771,
        NONE = 0,
        FRONT = 1028,
        BACK = 1029,
        CLAMP_TO_EDGE = 33071,
        NEAREST = 9728,
        LINEAR = 9729,
        ALWAYS = 519,
        LEQUAL = 515
    }
    function wx_init(): void;
}
declare const rf_v3_identity: number[];
declare const rf_m3_identity: number[];
declare const rf_m2_identity: number[];
declare const rf_m3_temp: Float32Array;
interface IArrayBase {
    clone(): IArrayBase;
    buffer: ArrayBuffer;
    set(array: ArrayLike<number> | IArrayBase, offset?: number): void;
    readonly length: number;
    [n: number]: number;
}
interface IMatrix3D extends IArrayBase {
    m3_identity(from?: ArrayLike<number>): IMatrix3D;
    m3_append(m3: ArrayLike<number> | IArrayBase, prepend?: boolean, from?: ArrayLike<number>): IMatrix3D;
    m3_rotation(degrees: number, axis: IVector3D | number[], prepend?: boolean, from?: ArrayLike<number>): IMatrix3D;
    m3_scale(x: number, y: number, z: number, prepend?: boolean, from?: ArrayLike<number>): IMatrix3D;
    m3_translation(x: number, y: number, z: number, prepend?: boolean, from?: ArrayLike<number>): IMatrix3D;
    m3_invert(from?: ArrayLike<number>, pos?: boolean): IMatrix3D;
    m3_decompose(pos: IVector3D | number[], rot: IVector3D | number[], sca: IVector3D | number[], orientationStyle?: rf.Orientation3D): any;
    m3_recompose(pos: IVector3D | number[], rot: IVector3D | number[], sca: IVector3D | number[], orientationStyle?: rf.Orientation3D): IMatrix3D;
    m3_copyColumnFrom(column: number, vector3D: IVector3D | number[]): any;
    m3_copyColumnTo(column: number, vector3D: IVector3D | number[]): any;
    m3_transformVector(v: IVector3D | number[], result?: IVector3D | number[]): any;
    m3_transformVectors(vin: ArrayLike<number>, vout: Float32Array | number[]): any;
    m3_transformRotation(v: IVector3D | number[], result?: IVector3D | number[]): any;
    m3_getMaxScaleOnAxis(): any;
    m3_toString(scale: number): any;
}
interface IVector3D extends IArrayBase {
    x: number;
    y: number;
    z: number;
    w: number;
    v3_lengthSquared: number;
    v2_length: number;
    v3_length: number;
    v3_add(v: IVector3D | ArrayLike<number>, out?: IVector3D): IVector3D;
    v3_sub(v: IVector3D | ArrayLike<number>, out?: IVector3D): IVector3D;
    v3_scale(v: number): any;
    v4_scale(v: number): any;
    v3_normalize(from?: ArrayLike<number>): any;
    v3_dotProduct(t: ArrayLike<number>): any;
    v3_crossProduct(t: ArrayLike<number>, out?: IVector3D | number[]): any;
    v3_applyMatrix4(e: ArrayLike<number>, out?: IVector3D | number[]): any;
}
interface IMatrixComposeData {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    rotaiton: number;
}
interface IMatrix extends IArrayBase {
    m2_identity(): any;
    m2_append(m2: ArrayLike<number> | IArrayBase, prepend?: boolean, from?: ArrayLike<number>): IMatrix;
    m2_scale(scalex: number, scaley: number): any;
    m2_rotate(angle: number): any;
    m2_transformVector(v: IVector3D | number[], result?: IVector3D | number[]): any;
    m2_decompose(result?: IMatrixComposeData): IMatrixComposeData;
    m2_recompose(value: IMatrixComposeData): IMatrix;
    m2_clone(): IMatrix;
}
interface Float32Array extends IMatrix3D, IMatrix, IVector3D {
}
declare module rf {
    const enum Orientation3D {
        EULER_ANGLES = 0,
        AXIS_ANGLE = 1,
        QUATERNION = 2
    }
    function newMatrix3D(v?: ArrayLike<number> | ArrayBuffer): Float32Array;
    function newMatrix(v?: ArrayLike<number> | ArrayBuffer): Float32Array;
    function newVector3D(x?: ArrayLike<number> | ArrayBuffer | number, y?: number, z?: number, w?: number): Float32Array;
    function matrix2d_clearScale(matrix: IMatrix): void;
    function qua_lerp(qa: IVector3D, qb: IVector3D, t: number, out?: IVector3D): IVector3D;
    function qua_slerp(qa: IVector3D, qb: IVector3D, t: number, out?: IVector3D): IVector3D;
    function pos_lerp(ap: IVector3D, bp: IVector3D, t: number, out?: IVector3D): IVector3D;
}
declare module rf {
    type PosKey = "x" | "y";
    type SizeKey = "width" | "height";
    interface Point2D {
        x: number;
        y: number;
    }
    interface Point3D extends Point2D {
        z: number;
    }
    interface Point3DW extends Point3D {
        w: number;
    }
    interface Size extends Point2D {
        w: number;
        h: number;
    }
    function size_checkIn(l: number, r: number, t: number, b: number, dx: number, dy: number, scale: number): boolean;
    function size_intersection(a: Size, b: Size, c?: Size): Size;
    interface IFrame extends Size {
        ix: number;
        iy: number;
    }
    interface IUVFrame extends IFrame {
        ul: number;
        ur: number;
        vt: number;
        vb: number;
    }
    let rgb_color_temp: IVector3D;
    function hexToCSS(d: number, a?: number): string;
    function toRGB(color: number, out?: IVector3D): IVector3D;
    function toRGBA(color: number, out?: IVector3D): IVector3D;
    function toCSS(color: IVector3D): string;
    class Point {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        readonly length: Number;
    }
    class Rect extends Point {
        w: number;
        h: number;
        constructor(x?: number, y?: number, w?: number, h?: number);
        clone(): Rect;
    }
    let RADIANS_TO_DEGREES: number;
    let DEGREES_TO_RADIANS: number;
    let tempAxeX: IVector3D;
    let tempAxeY: IVector3D;
    let tempAxeZ: IVector3D;
    let X_AXIS: IVector3D;
    let Y_AXIS: IVector3D;
    let Z_AXIS: IVector3D;
    let PI2: number;
    let RAW_DATA_CONTAINER: Float32Array;
    let TEMP_MATRIX3D: IMatrix3D;
    let TEMP_MATRIX2D: IMatrix;
    let TEMP_VECTOR3D: IVector3D;
    let TEMP_MatrixComposeData: IMatrixComposeData;
    interface IFunction {
        func: Function;
        thisobj: any;
    }
    function newCallBackFunction(func: Function, thisobj: any): IFunction;
    function callFunction(func: IFunction): void;
    interface Location {
        latitude: number;
        longitude: number;
    }
    interface LocationConstructor {
        getDist(l1: Location, l2: Location): number;
    }
    var Location: LocationConstructor;
    let EMPTY_POINT2D: Point;
    let EMPTY_POINT2D_2: Point;
    let EMPTY_POINT2D_3: Point;
    function m2dTransform(matrix: ArrayLike<number>, p: number[], out: number[]): void;
}
declare module rf {
    class BitmapData {
        private _rect;
        private _transparent;
        canvas: HTMLCanvasElement;
        _context: CanvasRenderingContext2D;
        readonly context: CanvasRenderingContext2D;
        constructor(width: number, height: number, transparent?: boolean, fillColor?: number);
        static fromImageElement(img: HTMLImageElement): BitmapData;
        readonly width: number;
        readonly height: number;
        readonly rect: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        getImageData(x: number, y: number, w: number, h: number): ImageData;
        copyPixels(sourceBitmapData: BitmapData, sourceRect: Size, destPoint: Point2D): void;
        copyPixels(sourceBitmapData: HTMLImageElement, sourceRect: Size, destPoint: Point2D): void;
        draw(source: BitmapData): void;
        draw(source: HTMLImageElement): void;
        fillRect(x: number, y: number, width: number, height: number, css: string | CanvasGradient | CanvasPattern): void;
    }
    class MaxRectsBinPack {
        static BESTSHORTSIDEFIT: number;
        static BESTLONGSIDEFIT: number;
        static BESTAREAFIT: number;
        static BOTTOMLEFTRULE: number;
        static CONTACTPOINTRULE: number;
        binWidth: number;
        binHeight: number;
        allowRotations: Boolean;
        usedRects: Rect[];
        freeRects: Rect[];
        private score1;
        private score2;
        private bestShortSideFit;
        private bestLongSideFit;
        constructor(width: number, height: number, rotations?: boolean);
        private count;
        insert(width: number, height: number, method?: number): Rect;
        private insert2;
        private placeRect;
        private scoreRect;
        private occupancy;
        private findPositionForNewNodeBottomLeft;
        private findPositionForNewNodeBestShortSideFit;
        private findPositionForNewNodeBestLongSideFit;
        private findPositionForNewNodeBestAreaFit;
        private commonIntervalLength;
        private contactPointScoreNode;
        private findPositionForNewNodeContactPoint;
        private splitFreeNode;
        private pruneFreeList;
        private isContainedIn;
    }
}
declare module rf {
    interface IDisposable {
        dispose(): void;
    }
    type Creator<T> = {
        new (): T;
    } | {
        (): T;
    };
    class ClassFactory<T> {
        private _creator;
        private _props;
        constructor(creator: Creator<T>, props?: Partial<T>);
        get(): any;
    }
    interface IRecyclable {
        onRecycle?: {
            (): any;
        };
        onSpawn?: {
            (): any;
        };
        _insid?: number;
    }
    function pro_copy(to: object, pros: object): void;
    class RecyclablePool<T> {
        private _pool;
        private _max;
        private _creator;
        get(params?: object): T;
        recycle(t: T): void;
        constructor(TCreator: Creator<T>, max?: number);
    }
    type Recyclable<T> = T & {
        recycle(): void;
    };
    function recyclable<T>(clazz: {
        new (): T & {
            _pool?: RecyclablePool<T>;
        };
    }, addInstanceRecycle?: boolean, params?: object): Recyclable<T>;
    function recyclable<T>(clazz: {
        (): T & {
            _pool?: RecyclablePool<T>;
        };
    }, addInstanceRecycle?: boolean, params?: object): Recyclable<T>;
    function singleton<T>(clazz: {
        new (): T;
        _instance?: T;
    }): T;
}
declare module rf {
    class LinkVO implements IRecyclable {
        close: boolean;
        data: any;
        ones?: boolean;
        args: any;
        thisObj: any;
        next: Recyclable<LinkVO>;
        pre: Recyclable<LinkVO>;
        weight: number;
        time: number;
        onRecycle(): void;
        onSpawn(): void;
    }
    class Link {
        last: Recyclable<LinkVO>;
        first: Recyclable<LinkVO>;
        id: string;
        length: number;
        warningMax: number;
        checkSameData: boolean;
        lock: boolean;
        extendparam: any;
        getFrist(): Recyclable<LinkVO>;
        getLast(): Recyclable<LinkVO>;
        getValueLink(value: any, thisObj: object): Recyclable<LinkVO>;
        add(value: any, thisObj?: object, args?: any): Recyclable<LinkVO>;
        addByWeight(value: any, weight: number, thisObj?: object, args?: any): Recyclable<LinkVO>;
        remove(value: any, thisObj?: any): void;
        removeLink(vo: Recyclable<LinkVO>): void;
        clean(): void;
        pop(): any;
        shift(): any;
        exec(f: Function): void;
        onRecycle(): void;
        toString(): string;
        readonly datas: any[];
    }
    interface LinkItem extends IRecyclable {
        __next?: LinkItem;
        __pre?: LinkItem;
    }
}
declare module rf {
    type EventHandler = (event: EventX) => void;
    interface IEventDispatcherX {
        on(type: string | number, listener: Function, thisObject: any, priority?: number, ones?: boolean): void;
        off(type: string | number, listener: Function, thisObject: any): void;
        has?(type: string | number): boolean;
        dispatchEvent(event: EventX): boolean;
        simpleDispatch?(type: string | number, data?: any, bubbles?: boolean): boolean;
    }
    const enum EventT {
        ENTER_FRAME = 1,
        RESIZE = 2,
        FAILED = 3,
        COMPLETE = 4,
        PLAY_COMPLETE = 5,
        MOVE_COMPLETE = 6,
        CAST_COMPLETE = 7,
        NAVIGATION_LOC_COMPLETE = 8,
        CONTEXT3D_CREATE = 9,
        CHANGE = 10,
        CANCEL = 11,
        SCROLL = 12,
        OPEN = 13,
        CLOSE = 14,
        SELECT = 15,
        DISPOSE = 16,
        DATA = 17,
        ERROR = 18,
        PROGRESS = 19,
        IO_ERROR = 20,
        MESSAGE = 21,
        RECYCLE = 22,
        ADD_TO_STAGE = 23,
        REMOVE_FROM_STAGE = 24,
        COMPLETE_LOADED = 25,
        MVC_PANEL_OPEN = 26,
        MVC_PANEL_HIDE = 27,
        PANEL_LOAD_START = 28,
        PANEL_LOAD_END = 29,
        FOCUS_IN = 30
    }
    const enum MouseEventX {
        MouseDown = 50,
        MouseMiddleDown = 51,
        MouseRightDown = 52,
        MouseUp = 53,
        MouseMiddleUp = 54,
        MouseRightUp = 55,
        CLICK = 56,
        RightClick = 57,
        middleClick = 58,
        MouseWheel = 59,
        MouseMove = 60,
        ROLL_UP = 61,
        ROLL_DOWN = 62,
        ROLL_LEFT = 63,
        ROLL_RIGHT = 64
    }
    interface IMouseEventData {
        id: number;
        mouseDownX: number;
        mouseDownY: number;
        x: number;
        y: number;
        ox: number;
        oy: number;
        ctrl: boolean;
        shift: boolean;
        alt: boolean;
        wheel: number;
    }
    class EventX implements IRecyclable {
        static TEMP: EventX;
        type: string | number;
        data: any;
        bubbles: boolean;
        target: IEventDispatcherX;
        currentTarget: IEventDispatcherX;
        stopPropagation: boolean;
        stopImmediatePropagation: boolean;
        constructor(type?: string | number, data?: any, bubbles?: boolean);
        onRecycle(): void;
    }
    class MiniDispatcher implements IEventDispatcherX, IRecyclable {
        mEventListeners: {
            [key: string]: Recyclable<Link>;
        };
        mTarget: IEventDispatcherX;
        constructor(target?: IEventDispatcherX);
        on(type: string | number, listener: Function, thisObject: any, priority?: number, ones?: boolean): void;
        off(type: string | number, listener: Function, thisObject: any): void;
        removeEventListeners(type?: string): void;
        dispatchEvent(event: EventX): boolean;
        simpleDispatch(type: string | number, data?: any, bubbles?: boolean): boolean;
        has(type: string | number): boolean;
        onRecycle(): void;
        addEventListener: (type: string | number, listener: Function, thisObject: any, priority?: number, ones?: boolean) => void;
        removeEventListener: (type: string | number, listener: Function, thisObject: any) => void;
        hasEventListener: (type: string | number) => boolean;
    }
}
declare namespace rf {
    interface IResizeable {
        resize?(width: number, height: number): any;
    }
    interface ITickable {
        update?(now: number, interval: number): any;
    }
    class EngineEvent {
        static VISIBILITY_CHANGE: string;
        static FPS_CHANGE: string;
    }
    interface ITimeMixer {
        now: number;
        interval: number;
        speed: number;
        pause: boolean;
        parent: ITimeMixer;
        childs: ITimeMixer[];
        target: any;
    }
    function newTimeMixer(target: any, now?: number, tm?: ITimeMixer, speed?: number): ITimeMixer;
    function removeTimeMixer(tm: ITimeMixer): void;
    function tm_add(t: ITimeMixer, interval: number): number;
    function tm_set(t: ITimeMixer, now: number): void;
    let nativeMouseX: number;
    let nativeMouseY: number;
    let originMouseX: number;
    let originMouseY: number;
    let nextUpdateTime: number;
    var lastUpdateTime: number;
    var lastUpdateDate: number;
    let frameInterval: number;
    let engineNow: number;
    function getUTCTime(time: number): number;
    function getFormatTime(time: number, format: string, isRaw?: boolean): string;
    function getProxTime(sec: number): string;
    const getT: ({
        (): number;
    });
    const defaultTimeMixer: ITimeMixer;
    function setContextMatrix(width: number, height: number, x: number, y: number): void;
    function defaultResize(width: number, height: number): void;
    let resizeStageSizeFunction: Function;
    class Engine {
        static startTime: number;
        static interval: number;
        static hidden: boolean;
        static hiddenTime: number;
        static fps: number;
        static code: number;
        static ticklink: Link;
        private static resizeLink;
        private static _frameRate;
        private static _nextProfileTime;
        private static _fpsCount;
        private static _codeTime;
        static setDisplayArea(width: number, height: number): void;
        static start(): void;
        static addResize(value: IResizeable): void;
        static removeResize(value: IResizeable): void;
        static resize(width: number, height: number): void;
        static addTick(tick: ITickable): void;
        static removeTick(tick: ITickable): void;
        static update(now: number, interval: number): void;
        static frameRate: number;
        static profile(): void;
    }
    function getTimer(): number;
    class TimerEventX extends EventX {
        static TIMER: string;
        static TIMER_COMPLETE: string;
    }
    class Timer extends MiniDispatcher implements ITickable {
        private _delay;
        private currnetTime;
        repeatCount: number;
        running: Boolean;
        constructor(delay: number, repeatCount?: number);
        delay: number;
        start(): void;
        stop(): void;
        update(now: number, interval: number): void;
    }
    class GTimer {
        link: Link;
        timer: Timer;
        constructor(delay: number);
        timerHandler(event: EventX): void;
        add(func: Function, thisobj: any, args?: any): LinkVO;
        remove(func: Function, thisobj: any): void;
    }
    class GTimerCallLater extends GTimer {
        constructor();
        later(f: Function, thisobj: any, time: number, args?: any, checksame?: boolean): LinkVO;
        add(func: Function, thisobj: any, args?: any, checksame?: boolean): LinkVO;
        remove(func: Function, thisobj: any): void;
        timerHandler(event: EventX): void;
    }
    class TickLink implements ITickable {
        link: Link;
        constructor();
        addTick(tick: ITickable): void;
        removeTick(tick: ITickable): void;
        update(now: number, interval: number): void;
    }
    let gameTick: TickLink;
    let skillTick: TickLink;
    let timerobj: {
        [key: number]: GTimer;
    };
    function getGTimer(time: number): GTimer;
    let time250: GTimer;
    let time500: GTimer;
    let time1000: GTimer;
    let time3000: GTimer;
    let time4000: GTimer;
    let time5000: GTimer;
    let callLater: GTimerCallLater;
}
declare module rf {
    type $CallbackInfo = CallbackInfo<Function>;
    class CallbackInfo<T extends Function> implements IRecyclable {
        callback: T;
        args: any[];
        thisObj: any;
        doRecycle: boolean;
        time: number;
        constructor();
        init(callback: T, thisObj?: any, args?: any[]): void;
        checkHandle(callback: T, thisObj: any): boolean;
        execute(doRecycle?: boolean): any;
        call(...args: any[]): any;
        callAndRecycle(...args: any[]): any;
        onRecycle(): void;
        recycle: {
            (): any;
        };
        static get<T extends Function>(callback: T, thisObj?: any, ...args: any[]): CallbackInfo<Function>;
    }
}
declare module rf {
    interface IBitmapSourceVO extends IUVFrame {
        source: BitmapSource;
        scale: number;
        name: string;
        used: number;
        time: number;
        rw: number;
        rh: number;
    }
    interface IFightSourceVO extends IBitmapSourceVO {
        f_ox: number;
        f_oy: number;
    }
    function refreshUV(vo: IBitmapSourceVO, mw: number, mh: number): void;
    class BitmapSourceArea {
        name: number;
        source: BitmapSource;
        frames: {
            [key: string]: IBitmapSourceVO;
        };
        l: number;
        r: number;
        t: number;
        b: number;
        init(): void;
        getArea(name: string, x: number, y: number, w: number, h: number): IBitmapSourceVO;
        createFrameArea(name: string, frame: IFrame): IBitmapSourceVO;
        getEmptyArea(name: string, sw: number, sh: number): IBitmapSourceVO;
        getUnusedArea(name: string, sw: number, sh: number): IBitmapSourceVO;
    }
    class MixBitmapSourceArea extends BitmapSourceArea {
        maxRect: MaxRectsBinPack;
        init(): void;
        getEmptyArea(name: string, sw: number, sh: number): IBitmapSourceVO;
    }
    class BitmapSource extends MiniDispatcher {
        static DEFAULT: number;
        static PACK: number;
        constructor();
        name: string;
        textureData: ITextureData;
        width: number;
        height: number;
        originU: number;
        originV: number;
        areas: {
            [name: number]: BitmapSourceArea;
        };
        bmd: BitmapData | HTMLImageElement;
        status: LoadStates;
        texture: Texture;
        create(name: string, bmd: BitmapData, pack?: boolean): BitmapSource;
        setArea(name: number, x: number, y: number, w: number, h: number): BitmapSourceArea;
        setSourceVO(name: string, w: number, h: number, area?: number): IBitmapSourceVO;
        getSourceVO(name: string | number, area?: number): IBitmapSourceVO;
        drawimg(img: HTMLImageElement | HTMLCanvasElement | BitmapData, x: number, y: number, w?: number, h?: number): void;
        clearBitmap(vo: IBitmapSourceVO): void;
        clearArea(area?: number): any;
        uploadContext(program: Program3D, variable: string): void;
    }
    class UrlBitmapSource extends BitmapSource {
        completeFuncs: Function[];
        constructor(url: string);
        load(): void;
        loadImageComplete(event: EventX): void;
    }
    let bitmapSources: {
        [key: string]: BitmapSource;
    };
    let componentSource: BitmapSource;
    let textSource: BitmapSource;
    function createBitmapSource(name: string, w: number, h: number, origin?: boolean): BitmapSource;
    function createUrlSource(url: string, extendtion?: ExtensionDefine, complete?: Function, CLS?: {
        new (url: string): UrlBitmapSource;
    }): UrlBitmapSource;
}
declare module rf {
    function inRange(a: any, min: any, max: any): boolean;
    function byte_div(n: any, d: any): number;
    function byte_Error(fatal: any, opt_code_point?: any): number;
    function byte_inflate(data: Uint8Array): Uint8Array;
    function byte_decodeUTF8(data: Uint8Array): string;
    function stringToCodePoints(string: any): any[];
    function byte_encodeUTF8(str: string): Uint8Array;
    class Byte {
        position: number;
        length: number;
        buf: DataView;
        uint8: Uint8Array;
        constructor(buf?: ArrayBuffer);
        setArrayBuffer(buf: ArrayBuffer): void;
        outOfRange(): void;
        readByte(): number;
        writeByte(v: number): void;
        readUint16(littleEndian?: boolean): number;
        writeUint16(v: number, littleEndian?: boolean): void;
        writeInt(v: number): void;
        readUInt(): number;
        writeUInt(v: number): void;
        readDouble(): number;
        readFloat(): number;
        readMultiByte(length: number, charSet?: string): string;
        readByteArray(length?: number): ArrayBuffer;
        writeByteArray(byte: ArrayLike<number>): void;
    }
    const enum AMF3Define {
        UNDEFINED = 0,
        NULL = 1,
        FALSE = 2,
        TRUE = 3,
        INT = 4,
        DOUBLE = 5,
        STRING = 6,
        XMLDOC = 7,
        DATE = 8,
        ARRAY = 9,
        OBJECT = 10,
        XML = 11,
        BYTEARRAY = 12,
        INTVECTOR = 13,
        UINTVECTOR = 14,
        DOUBLEVECTOR = 15,
        OBJECTVECTOR = 16,
        DICTIONARY = 17,
        FLOAT = 253
    }
    class ClassDefine {
        className: string;
        members: string[];
        isExternalizable: boolean;
        isDynamic: boolean;
        constructor(className: string, members: string[]);
    }
    class AMF3Decode extends Byte {
        flags: number;
        ref: any;
        stringsTable: any[];
        objectsTable: any[];
        traitsTable: any[];
        clsNameMap: {};
        MASK: number;
        constructor(buf?: ArrayBuffer);
        clear(): void;
        read29(unsign: boolean): number;
        readInt(): number;
        readString(): string;
        readDate(u29D: number): Date;
        readObjectVector(length: number): any[];
        readArray(length: number): any[];
        readDictionary(length: number): {};
        readObject(): any;
        readByteArray(length: number): ArrayBuffer;
        private _readObject;
        readReferencableObject(marker: number): any;
    }
    class AMF3Encode extends Byte {
        stringsTable: any[];
        objectsTable: any[];
        traitsTable: any[];
        unit8: Uint8Array;
        constructor(buf?: ArrayBuffer);
        clear(): void;
        writeByte(value: number): void;
        writeFloat(value: number): void;
        writeDouble(value: number): void;
        writeString(str: string): void;
        write29(v: number, unsign: boolean): void;
        isRealNum(val: any): boolean;
        writeObject(o: any): void;
        writeArray(arr: any): void;
        writeBytes(buffer: ArrayBuffer): void;
        toUint8Array(): Uint8Array;
        toArrayBuffer(pos?: number): ArrayBuffer;
    }
    function amf_writeObject(obj: object): Uint8Array;
    function amf_readObject(byte: ArrayBuffer | Uint8Array): any;
}
declare module rf {
    type EaseFunction = (t: number, b: number, c: number, d: number, ...args: any[]) => number;
    type TweenUpdateFunction = (tweener: ITweener) => void;
    interface ITweenerItem {
        k: string;
        s: number;
        e: number;
        d: number;
        n?: number;
        ease?: EaseFunction;
    }
    interface ITweener {
        caster: any;
        st: number;
        duration: number;
        l: number;
        tm: ITimeMixer;
        data: ITweenerItem[];
        ease: EaseFunction;
        update: TweenUpdateFunction;
        complete: TweenUpdateFunction;
        thisObj: any;
        completed: boolean;
    }
    function ease_default(t: number, b: number, c: number, d: number): number;
    function ease_quartic_in(t: number, b: number, c: number, d: number): number;
    function ease_quartic_out(t: number, b: number, c: number, d: number): number;
    function ease_quartic_inout(t: number, b: number, c: number, d: number): number;
    function ease_back_in(t: number, b: number, c: number, d: number): number;
    function ease_back_out(t: number, b: number, c: number, d: number): number;
    function ease_back_inout(t: number, b: number, c: number, d: number): number;
    var tween_ease_function: {
        [key: string]: EaseFunction;
    };
    var tweenLink: Link;
    function tweener_createItem(eo: {
        [key: string]: number;
    }, so?: {
        [key: string]: number;
    }, target?: any, data?: ITweenerItem[], tweener?: ITweener): ITweenerItem[];
    function createTweener(eo: {
        [key: string]: number;
    }, duration: number, tm: ITimeMixer, target?: any, ease?: EaseFunction, so?: {
        [key: string]: number;
    }): ITweener;
    function tween_lerp_pro(a: any, b: any, n: number, pro: {
        [key: string]: number;
    }, ease?: EaseFunction): void;
    function tweenTo(eo: {
        [key: string]: number;
    }, duration: number, tm: ITimeMixer, target?: any, ease?: EaseFunction, so?: {
        [key: string]: number;
    }): ITweener;
    function tweenUpdate(): void;
    function tweenEnd(tweener: ITweener): void;
    function tweenStop(tweener: ITweener): void;
    let ScriptTweenIns: {
        [key: string]: {
            new (): STweenBase;
        };
    };
    function scriptTween_play(target: any, data: IPANEL_TWEEN_DATA[], tm: ITimeMixer, mx?: number, my?: number, dtype?: number, property?: any): Recyclable<ScriptTween>;
    function random_number(num: number | number[]): number;
    class STweenBase implements ITickable {
        type: string;
        target: any;
        stween: ScriptTween;
        data: IPANEL_TWEEN_DATA;
        status: LoadStates;
        ease: EaseFunction;
        tweenItems: ITweenerItem[];
        st: number;
        lifeTime: number;
        needupdate: boolean;
        dtype: number;
        mx: number;
        my: number;
        property: any;
        start(): void;
        update(now: number, interval: number): void;
        stop(): void;
        complete(): void;
    }
    class STweenPro extends STweenBase {
        start(): void;
    }
    class STweenLiner extends STweenBase {
        start(): void;
    }
    class ScriptTween extends MiniDispatcher implements ITickable {
        target: any;
        tweens: STweenBase[];
        tm: ITimeMixer;
        play(target: any, data: IPANEL_TWEEN_DATA[], tm: ITimeMixer, mx?: number, my?: number, dtype?: number, property?: any): void;
        playPro(target: any, tm: ITimeMixer, duration: number, to: {
            [key: string]: number;
        }, from?: {
            [key: string]: number;
        }, time?: number): Recyclable<STweenPro>;
        update(now: number, interval: number): void;
        stop(): void;
    }
}
declare module rf {
    const enum SocketEventX {
        OPEN = 65536,
        CLOSE = 65537,
        ERROR = 65538
    }
    class Stream extends EventX {
        data: any;
        len: number;
        toObject(v: any[], pros: string[], to?: object): object;
    }
    class Socket extends MiniDispatcher {
        connected: boolean;
        input: AMF3Decode;
        output: AMF3Encode;
        sendoption: wx.SendSocketMessageOption;
        sendTemp: any[];
        stream: Stream;
        constructor();
        connect(url: string): void;
        close(reason: string): void;
        onOpen(e: any): void;
        onMessage(e: {
            data: ArrayBuffer;
        }): void;
        onClose(e: any): void;
        onError(e: any): void;
        send(code: number, value?: any): void;
    }
    class SocketDecoder {
        socket: Socket;
        constructor(socket: Socket, types: number[]);
        showError(args: any[], type?: number): void;
    }
}
declare module rf {
    class Quaternion {
        x: number;
        y: number;
        z: number;
        w: number;
        constructor(x?: number, y?: number, z?: number, w?: number);
        static lerp(qa: Point3DW, qb: Point3DW, percent: number): Quaternion;
        fromMatrix3D(m: IMatrix3D): this;
        toMatrix3D(target?: IMatrix3D): IMatrix3D;
        fromAxisAngle(axis: Point3DW, angleInRadians: number): void;
        conjugate(): void;
        toString(): string;
    }
}
declare module rf {
    class Ray {
        origin: IVector3D;
        direction: IVector3D;
        constructor(origion?: IVector3D, direction?: IVector3D);
        copyFrom(ray: Ray): Ray;
        at(t: number, target?: IVector3D): IVector3D;
        applyMatrix4(matrix: IMatrix3D): Ray;
        intersectsSphere(sphere: Sphere): boolean;
        distanceSqToPoint(point: IVector3D): number;
        intersectBox(box: IBox, target?: IVector3D): IVector3D;
        static diff: IVector3D;
        static edge1: IVector3D;
        static edge2: IVector3D;
        static normal: IVector3D;
        intersectTriangle(a: IVector3D, b: IVector3D, c: IVector3D, backfaceCulling: boolean, target: IVector3D): IVector3D;
    }
    interface IBox {
        minx: number;
        maxx: number;
        miny: number;
        maxy: number;
        minz: number;
        maxz: number;
    }
}
declare module rf {
    interface IMaterialData extends IData {
        depthMask: boolean;
        passCompareMode: number;
        srcFactor: number;
        dstFactor: number;
        cull: number;
        alphaTest: number;
        diffTex?: ITextureData;
        specularTex?: ITextureData;
        normalTex?: ITextureData;
        emissiveTex?: ITextureData;
    }
    interface IMeshData extends IData {
        vertex: Float32Array;
        index: Uint16Array;
        variables: {
            [key: string]: IVariable;
        };
        numVertices: number;
        numTriangles: number;
        data32PerVertex: number;
        vertexBuffer: VertexBuffer3D;
        indexBuffer: IndexBuffer3D;
        hitarea: HitArea;
        nameLabelY: number;
    }
    interface IBone extends IData {
        inv: IMatrix3D;
        matrix: IMatrix3D;
        sceneTransform: Float32Array;
        name: string;
        index: number;
        parent: IBone;
        children: IBone[];
    }
    interface ISkeletonData extends IData {
        vertex: Float32Array;
        rootBone: IBone;
        root?: IBone;
        data32PerVertex: number;
        numVertices: number;
        boneCount: number;
    }
    interface ISkeletonMeshData extends IData {
        mesh: IMeshData;
        material: IMaterialData;
        skeletonData: ISkeletonData;
        anims: string[];
        inited: boolean;
        skeleton: Skeleton;
        shadowCast: boolean;
        sun: boolean;
    }
    interface ISkeletonMatrixData {
        pos: IVector3D;
        qua: IVector3D;
    }
    interface ISkeletonCalcTarget {
        pos: IVector3D;
        qua: IVector3D;
        mat: IMatrix3D;
        out: IVector3D;
    }
    interface ISkeletonAnimationData extends IData {
        skeleton: Skeleton;
        matrices: Float32Array[];
        boneTransform: {
            [key: string]: IMatrix3D;
        }[];
        boneMatrix3D: {
            [key: string]: ISkeletonMatrixData;
        }[];
        duration: number;
        eDuration: number;
        totalFrame: number;
        name: string;
        frames: {
            [key: string]: Float32Array;
        };
    }
    interface IParticlePropertyData {
        delay: number;
        duration: number;
        index: number;
        startTime: number;
        total: number;
        totalTime: number;
    }
    interface IParticleRuntimeData extends IMeshData {
        props: IParticlePropertyData[];
    }
    interface IParticleSettingData {
        offset: number;
        speed: number;
        pos: IVector3D;
        rot: IVector3D;
    }
    interface IParticleNodeInfo {
        name: string;
        type: number;
        key: string;
        vertexFunction: string;
        fragmentFunction: string;
    }
    interface IParticleTimeNodeInfo extends IParticleNodeInfo {
        usesDuration: boolean;
        usesLooping: boolean;
        usesDelay: boolean;
    }
    interface IParticleFollowNodeInfo extends IParticleNodeInfo {
    }
    interface IParticleScaleNodeInfo extends IParticleNodeInfo {
        scaleType: number;
        usesCycle: boolean;
        usesPhase: boolean;
    }
    interface IParticleSegmentColorNodeInfo extends IParticleNodeInfo {
        usesMul: boolean;
        usesAdd: boolean;
        len: number;
        mul: number;
        add: number;
        data: Float32Array;
    }
    interface IParticleSpriteSheetAnimNodeInfo extends IParticleNodeInfo {
        usesCycle: boolean;
        usesPhase: boolean;
        totalFrames: number;
        colum: number;
        rows: number;
        data: Float32Array;
    }
    interface IParticleData {
        material: IMaterialData;
        mesh: IMeshData;
        runtime: IParticleRuntimeData;
        setting: IParticleSettingData;
        nodes: {
            [key: string]: IParticleNodeInfo;
        };
    }
    interface ISkillEvent {
        type: SkillEventConst;
        time: number;
        key: string;
        next: ISkillEvent;
        pre: ISkillEvent;
        x: number;
        y: number;
        z: number;
        rx: number;
        ry: number;
        rz: number;
        ou: number;
        ov: number;
        su: number;
        sv: number;
        mr: number;
        mg: number;
        mb: number;
        ma: number;
        ar: number;
        ag: number;
        ab: number;
        aa: number;
        fre: number;
        url: string;
        repart: number;
    }
    interface ISkillCreateEvent {
        type: SkillEventConst;
        time: number;
        url: string;
        x: number;
        y: number;
        z: number;
        rx: number;
        ry: number;
        rz: number;
    }
    interface ISkillPointData {
        events: ISkillEvent[];
        creates: ISkillEvent[];
        time: number;
        index: number;
    }
    interface ISkillLineData {
        desc: string;
        duration: number;
        loop: number;
        creates: ISkillCreateEvent[];
        events: ISkillEvent[];
    }
    interface ISkillData {
        duration: number;
        lines: ISkillLineData[];
    }
    const enum SkillEventConst {
        BIND = 0,
        COLOR = 1,
        ROT = 2,
        SCALE = 3,
        POS = 4,
        UV = 5,
        PLAY_ANIM = 6,
        SYNC_POSITION = 7,
        ALPHA = 8,
        BIND_ONCE = 9,
        TRACE = 10,
        EMIT = 11,
        SYNC_ROTATION = 12,
        SOUND = 13,
        COLLISION = 14,
        ROT_CASTER = 15,
        TRANS_CASTER = 16,
        USER_DEFINE = 17,
        LIU_GUANG = 18,
        WARYING = 19,
        LIGHT_RANGE = 20,
        CAMERA_MOVE = 21,
        ALPHA_THRESHOLD = 22,
        PLAY_SKILL = 23,
        SPRING_TRANSLATE = 24,
        ANIMSPEED = 25,
        SWORD_LIGHT = 26,
        LINES = 27,
        SWING_LINES = 28,
        CASTER_SCALE = 29,
        TEXTURE_CHANNEL = 30,
        COLOR_TRANFORM = 31,
        EVENTCOUNT = 32,
        INVALID_CREATE = 255,
        EFFECT_CREATE = 256,
        PARTICLE_CREATE = 257,
        LIGHT_CREATE = 258,
        SKILL_CREATE = 259,
        TEFFECT_CREATE = 260
    }
}
declare module rf {
    let vertex_ui_variable: {
        [key: string]: IVariable;
    };
    let vertex_ui_full_variable: {
        [key: string]: IVariable;
    };
    let vertex_mesh_variable: {
        [key: string]: IVariable;
    };
    let vertex_mesh_full_variable: {
        [key: string]: IVariable;
    };
    let vertex_skeleton_variable: {
        [key: string]: IVariable;
    };
    const EMPTY_MAX_NUMVERTICES: number;
    let empty_float32_pos: Float32Array;
    let empty_float32_normal: Float32Array;
    let empty_float32_tangent: Float32Array;
    let empty_float32_uv: Float32Array;
    let empty_float32_color: Float32Array;
    let empty_uint16_indexs: Uint16Array;
    let empty_float32_object: {
        [key: string]: Float32Array;
    };
    function createGeometry(data: {
        [key: string]: Float32Array;
    }, variables: {
        [key: string]: IVariable;
    }, numVertices: number, result?: Float32Array): Float32Array;
    interface IVariable {
        size: number;
        offset: number;
    }
    class VertexInfo {
        vertex: Float32Array;
        numVertices: number;
        data32PerVertex: number;
        variables: {
            [key: string]: IVariable;
        };
        constructor(value: number | Float32Array, data32PerVertex: number, variables?: {
            [key: string]: IVariable;
        });
        regVariable(variable: string, offset: number, size: number): void;
        readonly debug: {};
    }
    interface IBounding {
        vertex: Float32Array;
        index: Uint16Array;
    }
    class Sphere {
        copyFrom(sphere: Sphere): void;
        change: boolean;
        radius: number;
        center: IVector3D;
        applyMatrix4(matrix: IMatrix3D, result?: Sphere): Sphere;
    }
    class OBB implements IBounding, IBox {
        constructor(bounding?: ArrayLike<number> | ArrayBuffer | number, maxx?: number, miny?: number, maxy?: number, minz?: number, maxz?: number);
        vertex: Float32Array;
        index: Uint16Array;
        static index: Uint16Array;
        change: boolean;
        minx: number;
        maxx: number;
        miny: number;
        maxy: number;
        minz: number;
        maxz: number;
        updateTriangle(): void;
        static updateOBBByGeometry(mesh: GeometryBase, out?: OBB): OBB;
    }
    interface IGeometry {
        vertex: VertexBuffer3D;
        index?: IndexBuffer3D;
    }
    class Temp_Float32Byte implements IRecyclable {
        constructor();
        data: Float32Array;
        data32PerVertex: number;
        numVertices: number;
        position: number;
        onSpawn(): void;
        set(array: ArrayLike<number>, offset?: number): void;
        toArray(): Float32Array;
    }
    function geometry_plane(width: number, height: number, position: number, variables: {
        [key: string]: IVariable;
    }, matrix3D?: IMatrix3D): void;
    class GeometryBase implements IGeometry {
        variables: {
            [key: string]: IVariable;
        };
        vertex: VertexBuffer3D;
        index: IndexBuffer3D;
        data: IMeshData;
        constructor(variables?: {
            [key: string]: IVariable;
        });
        data32PerVertex: number;
        numVertices: number;
        centerPoint: IVector3D;
        numTriangles: number;
        initData(data: IMeshData): void;
        setData(data: IMeshData): void;
        readonly pos: any[];
        readonly uv: any[];
        readonly triangles: any[];
        calculateBoundingSphere(center: IVector3D, out?: Sphere): Sphere;
        uploadContext(camera: Camera, mesh: SceneObject, program: Program3D, now: number, interval: number): IMatrix3D;
    }
    interface ISkeletonJoint {
        index: number;
        name: string;
        inv: Float32Array;
        chind: ISkeletonJoint[];
        parent: ISkeletonJoint;
    }
    class SkeletonGeometry extends GeometryBase {
        skVertex: VertexBuffer3D;
        joints: {
            [key: string]: ISkeletonJoint;
        };
        jointroot: ISkeletonJoint;
    }
    class PlaneGeometry extends GeometryBase {
        create(width?: number, height?: number): this;
    }
    class BoxGeometry extends GeometryBase {
        create(width: number, height: number, depth: number): this;
    }
    class SkyBoxGeometry extends BoxGeometry {
        create(): this;
        uploadContext(camera: Camera, mesh: SceneObject, program: Program3D, now: number, interval: number): IMatrix3D;
    }
    function hsva(h: number, s: number, v: number, a: number): any[];
    class SphereGeometry extends GeometryBase {
        create(row: number, column: number, rad: number, color?: number[]): this;
    }
    class TorusGeomerty extends GeometryBase {
        create(row: number, column: number, irad: number, orad: number): this;
    }
}
declare module rf {
    class Material {
        cull: number;
        srcFactor: number;
        dstFactor: number;
        depthMask: boolean;
        passCompareMode: number;
        alphaTest: number;
        program: Program3D;
        diffTex: ITextureData;
        sun: boolean;
        createProgram(mesh: Mesh): Recyclable<Program3D>;
        initFilters(mesh: Mesh): void;
        setData(data: IMaterialData): void;
        uploadContextSetting(): void;
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
        checkTexs(...args: any[]): boolean;
        getTextUrl(data: ITextureData): string;
    }
    class ShadowMaterial extends Material {
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
        createProgram(mesh: Mesh): Recyclable<Program3D>;
    }
    class SkyBoxMaterial extends Material {
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
        checkTexs(data: any): boolean;
        createProgram(mesh: Mesh): Recyclable<Program3D>;
    }
    class PhongMaterial extends Material {
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
        createProgram(mesh: Mesh): Recyclable<Program3D>;
    }
}
declare module rf {
    interface IShaderCode {
        def: string;
        func: string;
        code: string;
    }
    interface IShaderSetting {
        skey: string;
        useEye?: boolean;
        usePos?: boolean;
        useQua2mat?: boolean;
        useNormal?: boolean;
        useColor?: boolean;
        useShadow?: boolean;
        useInvm?: boolean;
    }
    var IShaderSettingPros: string[];
    function newShaderCode(code: string, def: string, func: string): IShaderCode;
    class Shader {
        init(vertex_render_list: any, frament_render_list: any): void;
        vertex_render_list: (SkillEventConst | FilterConst)[];
        frament_render_list: (SkillEventConst | FilterConst)[];
        createProgram(target: {
            filters: {
                [key: string]: FilterBase;
            };
            shader?: boolean;
        }): Recyclable<Program3D>;
        createVertex2(filters: {
            [key: string]: FilterBase;
        }, setting?: IShaderSetting): string;
        createFragment2(filters: {
            [key: string]: FilterBase;
        }, setting?: IShaderSetting): string;
        static FUNC_QUA2MAT: string;
        static FUNC_SHADOW_ENCODE: string;
        static FUNC_SHADOW_DECODE: string;
        static FUNC_SAT: string;
        static FUNC_DOT_VALUE: string;
    }
}
declare module rf {
    var ROOT: Stage3D & IStage3DCamera;
    interface IMouse {
        mouseEnabled?: boolean;
        mouseChildren?: boolean;
        getObjectByPoint?(dx: number, dy: number, scale: number): DisplayObject;
    }
    interface IRenderOption {
        now: number;
        interval: number;
        rect: Size;
    }
    interface I3DRender extends IRecyclable {
        render?(camera: Camera, option: IRenderOption): void;
        __render_pre?: I3DRender;
        __render_next?: I3DRender;
        __graphics_next?: Sprite;
        $graphics?: Graphics;
        $vcIndex?: number;
        $sourceIndex?: number;
        program?: Program3D;
        changeStatus?: number;
        invSceneTransfrom?: IMatrix3D;
        updateBatchVCData?(refresh: boolean): void;
    }
    const enum DChange {
        trasnform = 1,
        alpha = 2,
        vertex = 4,
        vcdata = 8,
        ct = 16,
        area = 32,
        ca = 64,
        c_all = 80,
        ac = 96,
        ta = 3,
        batch = 12,
        base = 51,
        t_all = 19
    }
    class HitArea {
        allWays: boolean;
        left: number;
        right: number;
        top: number;
        bottom: number;
        front: number;
        back: number;
        clean(): void;
        combine(hitArea: HitArea, x: number, y: number): boolean;
        updateArea(x: number, y: number, z: number): boolean;
        checkIn(x: number, y: number, scale?: number): boolean;
        scale(value: number): void;
        toString(): string;
    }
    class DisplayObject extends MiniDispatcher implements IMouse {
        pool: RecyclablePool<DisplayObject>;
        hitArea: HitArea;
        mouseEnabled: boolean;
        mouseChildren: boolean;
        mousedown: boolean;
        mouseroll: boolean;
        pos: IVector3D;
        rot: IVector3D;
        sca: IVector3D;
        up: IVector3D;
        __childIndex: number;
        _x: number;
        _y: number;
        _z: number;
        w: number;
        h: number;
        _rotationX: number;
        _rotationY: number;
        _rotationZ: number;
        _scaleX: number;
        _scaleY: number;
        _scaleZ: number;
        _alpha: number;
        sceneAlpha: number;
        _visible: boolean;
        status: number;
        pivotZero: boolean;
        pivotPonumber: IVector3D;
        transform: IMatrix3D;
        sceneTransform: IMatrix3D;
        parent: DisplayObjectContainer;
        stage: Stage3D;
        name: string;
        locksize: boolean;
        tween: ScriptTween;
        filters: {
            [key: string]: FilterBase;
        };
        trandom: number;
        constructor();
        setChange(value: number, p?: number, c?: boolean): void;
        visible: boolean;
        alpha: number;
        scaleX: number;
        scaleY: number;
        scaleZ: number;
        rotationX: number;
        rotationY: number;
        rotationZ: number;
        rotation: number;
        x: number;
        y: number;
        z: number;
        setPos(x: number, y: number, z?: number, update?: Boolean): void;
        eulers: IVector3D;
        forwardPos(distance: number, target?: IVector3D): void;
        upPos(distance: number): void;
        rightPos(distance: number): void;
        setRot(rx: number, ry: number, rz: number, update?: Boolean): void;
        setRotRadians(rx: number, ry: number, rz: number, update?: Boolean): void;
        scale: number;
        setSca(sx: number, sy: number, sz: number, update?: Boolean): void;
        setPivotPonumber(x: number, y: number, z: number): void;
        setTransform(matrix: ArrayLike<number>): void;
        updateTransform(): void;
        updateSceneTransform(updateStatus?: number, parentSceneTransform?: IMatrix3D): number;
        updateBatchVCData(): void;
        remove(): void;
        addToStage(): void;
        removeFromStage(): void;
        setSize(width: number, height: number): void;
        protected doResize(): void;
        dispatchEvent(event: EventX): boolean;
        updateHitArea(): void;
        getObjectByPoint(dx: number, dy: number, scale: number): DisplayObject;
        readonly mouseX: number;
        readonly mouseY: number;
        readonly stageX: number;
        readonly stageY: number;
        render(camera: Camera, option: IRenderOption): void;
        lookat(target: IVector3D, upAxis?: IVector3D): void;
        onSpawn(): void;
        readonly shaderKey: string;
        readonly factorKey: string;
    }
}
declare module rf {
    class DisplayObjectContainer extends DisplayObject {
        constructor();
        setChange(value: number, p?: number, c?: boolean): void;
        childrens: DisplayObject[];
        readonly numChildren: number;
        addChild(child: DisplayObject): void;
        addChildAt(child: DisplayObject, index: number): void;
        getChildIndex(child: DisplayObject): number;
        removeChild(child: DisplayObject): void;
        removeAllChild(): void;
        removeFromStage(): void;
        addToStage(): void;
        updateSceneTransform(updateStatus?: number, parentSceneTransform?: IMatrix3D): number;
        updateHitArea(): void;
    }
}
declare module rf {
    class Camera extends DisplayObject {
        len: IMatrix3D;
        far: number;
        originFar: number;
        logDepthFar: number;
        worldTranform: IMatrix3D;
        isPerspectiveCamera: boolean;
        isOrthographicCamera: boolean;
        contextMatrix: IMatrix3D;
        constructor(far?: number, contextMatrix?: IMatrix3D);
        updateSceneTransform(updateStatus?: number): number;
        resize(width: number, height: number): void;
    }
    function CameraUIResize(width: number, height: number, len: IMatrix3D, far: number, originFar: any, camera?: Camera): void;
    function CameraOrthResize(width: number, height: number, len: IMatrix3D, far: number, originFar: any, camera?: Camera): void;
    function Camera3DResize(width: number, height: number, len: IMatrix3D, far: number, originFar: number, camera?: Camera): void;
    function PerspectiveResize(width: number, height: number, len: IMatrix3D, far: number, degree: number, camera?: Camera): void;
}
declare module rf {
    const enum FilterConst {
        BASIC = "basic_",
        NORMAL = "normal_",
        UI = "ui_",
        COLOR = "color_",
        DIFF = "diff_",
        FILL = "fill_",
        UIDIFF = "uidiff_",
        GRAY = "gray_",
        HOLE = "hole_",
        CIRCLE = "circle_",
        BLUR = "blur_",
        MVP = "mvp_",
        MV = "mv_",
        P = "p_",
        DISCARD = "discard_"
    }
    class FilterBase extends STweenBase implements IShaderSetting {
        constructor(type: string);
        readly: boolean;
        disable: boolean;
        skey: string;
        vertex: IShaderCode;
        fragment: IShaderCode;
        updateSetting(setting: IShaderSetting): void;
        createCode(): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
    class BasicFilter extends FilterBase {
        constructor();
    }
    class NormalFilter extends FilterBase {
        constructor();
    }
    class ColorFilter extends FilterBase {
        constructor();
    }
    class MvpFilter extends FilterBase {
        constructor();
    }
    class MvFilter extends FilterBase {
        constructor();
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
    class MpFilter extends FilterBase {
        constructor();
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
    class DiscardFilter extends FilterBase {
        static FRAGMENT: IShaderCode;
        constructor();
    }
    class GrayFilter extends FilterBase {
        static FARGMENT: IShaderCode;
        constructor();
    }
    class HoleFilter extends FilterBase {
        static FARGMENT: IShaderCode;
        constructor();
        pos: IVector3D;
        setConstants(x: number, y: number, len: number, inner: number): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
    class CircleFilter extends FilterBase {
        static FRAGMENT: IShaderCode;
        constructor(x: number, y: number, len: number, inner: number);
        pos: IVector3D;
        setConstants(x: number, y: number, len: number, inner: number): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
    class UIFilter extends FilterBase {
        static VERTEX: IShaderCode;
        constructor();
    }
}
declare module rf {
    let debug_click_button: Sprite;
    abstract class RenderBase extends DisplayObjectContainer implements I3DRender {
        nativeRender: boolean;
        variables: {
            [key: string]: IVariable;
            data32PerVertex?: IVariable;
        };
        material: Material;
        tm: ITimeMixer;
        scrollRect: Size;
        render(camera: Camera, option: IRenderOption): void;
        constructor(variables?: {
            [key: string]: IVariable;
        });
        addToStage(): void;
    }
    class Sprite extends RenderBase {
        __batch: SuperBatchRenderer;
        __batch_render_data: IBatchRenderData;
        source: BitmapSource;
        renderer: I3DRender;
        $graphics: Graphics;
        $batchGeometry: IBatchGeometry;
        $vcIndex: number;
        $sourceIndex: number;
        $vcox: number;
        $vcoy: number;
        $vcos: number;
        pixcheck: boolean;
        shader: boolean;
        mask: Sprite;
        constructor(source?: BitmapSource, variables?: {
            [key: string]: IVariable;
        });
        setScrollRect(w: number, h: number, hStep?: number, vStep?: number, x?: number, y?: number): void;
        addChild(child: DisplayObject): void;
        setMask(color?: number, alpha?: number): void;
        readonly graphics: Graphics;
        setChange(value: number, p?: number, c?: boolean): void;
        render(camera: Camera, option: IRenderOption): void;
        addToStage(): void;
        cleanAll(): void;
        setSize(width: number, height: number): void;
        updateHitArea(): void;
        getObjectByPoint(dx: number, dy: number, scale: number): DisplayObject;
        buttonModel(x: number, y: number, z: number): void;
        _tweener: ITweener;
        private identifier;
        protected pivotMouseDownHandler(event: EventX): void;
        protected pivotMouseUpHandler(event: EventX): void;
        scaleTweenComplete(t: ITweener): void;
        addFilter(filter: FilterBase): void;
        removeFilter(type: FilterConst): void;
        updateSceneTransform(updateStatus?: number, parentSceneTransform?: IMatrix3D): number;
        updateBatchVCData(refresh?: boolean): void;
        removeFromStage(): void;
    }
    class Image extends Sprite {
        url: string;
        drawW: number;
        drawH: number;
        aglin: Align;
        lockkey: string;
        lock_a: number;
        rect: Size;
        constructor(source?: BitmapSource, variables?: {
            [key: string]: IVariable;
        });
        load(url: string, extension?: ExtensionDefine): void;
        onImageComplete(e: EventX): void;
        setSize(_width: number, _height: number): void;
        draw(vo: IBitmapSourceVO): void;
        clean(): void;
        onRecycle(): void;
    }
    interface IGraphicsGeometry extends Size {
        offset: number;
        numVertices: number;
        base: Float32Array;
        matrix: IMatrix;
        vo: IBitmapSourceVO;
        rect: Size;
    }
    function newGraphicsGeometry(matrix?: IMatrix): IGraphicsGeometry;
    interface IBatchGeometry {
        vertex?: VertexInfo;
        vcData?: Float32Array;
        update(position: number, byte: Float32Array): any;
    }
}
declare module rf {
    var editTF: TextField;
    var oldWindowWidth: number;
    var oldWindowHeight: number;
    function showKeyboard(tf: TextField): void;
    function onResizeKeboard(width: number, height: number): void;
    function onKeyboardInput(option: {
        value: string;
    }): void;
    function onKeyboardComplete(option: {
        value: string;
    }): void;
    const enum TextFormatAlign {
        LEFT = "left",
        RIGHT = "right",
        CENTER = "center"
    }
    const enum TextFieldType {
        INPUT = "input",
        DYNAMIC = "dynamic"
    }
    class TextFormat {
        family: string;
        size: number;
        align: string;
        bold: string;
        italic: string;
        stroke: {
            size: number;
            color?: number;
        };
        shadow: {
            color: number;
            blur: number;
            offsetX?: number;
            offsetY?: number;
        };
        gradient: {
            color: number;
            percent?: number;
        }[];
        font: string;
        leading: number;
        init(): TextFormat;
        test(context: CanvasRenderingContext2D, text: string, out: {
            x: number;
            y: number;
        }, scale: number): void;
        draw(context: CanvasRenderingContext2D, text: string, s: Size): void;
        getColorStr(color: number): string;
        clone(format?: TextFormat): TextFormat;
    }
    let defalue_format: TextFormat;
    class TextField extends Sprite {
        html: boolean;
        $text: string;
        format: TextFormat;
        color: number;
        element: HtmlElement;
        gap: number;
        multiline: boolean;
        maxChars: number;
        textHeight: number;
        textWidth: number;
        protected _edit: boolean;
        private _type;
        constructor(source?: BitmapSource);
        init(source?: BitmapSource, format?: TextFormat): void;
        private lines;
        private textLines;
        text: string;
        cleanAll(): void;
        removeChild(child: DisplayObject): void;
        layout(): void;
        getCharSourceVO(char: string, format: TextFormat): IBitmapSourceVO;
        tranfromHtmlElement2CharDefine(html: HtmlElement, width?: number): Recyclable<Line>[];
        type: string;
        protected mouseUpHandler(event: MouseEventX): void;
        private looseEvt;
        private blurHandle;
        removeFromStage(): void;
    }
    class ImageVO {
        x: number;
        y: number;
        w: number;
        h: number;
        tag: string;
        name: string;
        display: Sprite;
        clone(vo?: ImageVO): ImageVO;
        dispose(): void;
    }
    class HtmlElement {
        newline: boolean;
        str: string;
        start: number;
        color: number;
        format: TextFormat;
        underline: boolean;
        image: Sprite;
        imageTag: number;
        w: number;
        h: number;
        pre: HtmlElement;
        next: HtmlElement;
        createAndCopyFormat(last?: HtmlElement, newline?: boolean): HtmlElement;
        clear(): void;
    }
    let emotion: {
        [key: string]: ImageVO;
    };
    let imageCreateFunctions: {
        [key: string]: {
            func: Function;
            thisobj: any;
        };
    };
    function formatHtml(value: string, html: HtmlElement, source: BitmapSource): void;
    class Char implements IRecyclable {
        index: number;
        name: string;
        ox: number;
        sx: number;
        ex: number;
        element: HtmlElement;
        display: IBitmapSourceVO | Sprite;
        w: number;
        h: number;
        onRecycle(): void;
    }
    class Line {
        w: number;
        h: number;
        chars: Recyclable<Char>[];
    }
    class TextLine extends Sprite {
        line: Line;
        renderText(line: Line): void;
    }
    class TextALink extends TextField {
    }
}
declare module rf {
    const enum SymbolConst {
        SYMBOL = 0,
        BITMAP = 1,
        TEXT = 2,
        RECTANGLE = 3
    }
    class Component extends Sprite {
        constructor(source?: BitmapSource);
        scroll: Scroll;
        currentClip: number;
        symbol: IDisplaySymbol;
        sceneMatrix: IMatrix;
        setSymbol(symbol: IDisplaySymbol, matrix?: IMatrix): void;
        gotoAndStop(clip: any, refresh?: Boolean): void;
        setSize(width: number, height: number): void;
        addToStage(): void;
        removeFromStage(): void;
        renderFrameElement(element: IDisplayFrameElement, clean?: Boolean): void;
        protected doResize(): void;
        _selected: boolean;
        selected: boolean;
        doSelected(): void;
        _enabled: boolean;
        enabled: boolean;
        doEnabled(): void;
        _data: {};
        data: {};
        doData(): void;
        refreshData(): void;
        bindComponents(): void;
        awaken(): void;
        sleep(): void;
        setScrollRect(w: number, h: number, hStep?: number, vStep?: number, x?: number, y?: number): Scroll;
        clearScrollRect(): void;
    }
    class Label extends Component {
        txt_label: TextField;
        _label: string;
        label: string;
        _editable: boolean;
        editable: boolean;
        doEditable(): void;
        bindComponents(): void;
        doLabel(): void;
        textResize(): void;
    }
    const enum ComponentConst {
        Component = 0,
        TextField = 1,
        Button = 2,
        CheckBox = 3,
        RadioButton = 4,
        ScrollBar = 5,
        Dele = 6,
        ProgressBar = 7
    }
    let ComponentClass: {
        [type: string]: {
            new (): any;
        };
    };
}
declare module rf {
    interface IListOption {
        offsetX: number;
        offsetY: number;
        itemWidth?: number;
        itemHeight?: number;
        hgap?: number;
        vgap?: number;
        vertical?: boolean;
        columnCount?: number;
        clazz?: {
            new (): Component;
        };
    }
    interface IListRuntime {
        selectedIndex: number;
        first: ListItem & Recyclable<Component>;
        last: ListItem & Recyclable<Component>;
        displayCount: number;
        start: number;
        end: number;
    }
    interface ListItem extends LinkItem {
        data?: {};
        index?: number;
    }
    class List extends Component {
        datas: {}[];
        option: IListOption;
        runtime: IListRuntime;
        caches: (ListItem & Recyclable<Component>)[];
        scroll: Scroll;
        constructor(source: BitmapSource, Clazz: {
            new (): Component;
        }, itemWidth: number, itemHeight: number, hgap?: number, vgap?: number, vertical?: boolean, columnCount?: number, offsetX?: number, offsetY?: number);
        setSize(width: number, height: number): void;
        displayList(data?: {}[]): void;
        scrollXY(x?: number, y?: number): void;
        s_c(e: EventX): void;
        d_c(e: EventX): void;
        clear(): void;
        refreshList(event?: EventX): void;
        addItem(index: number, data: {}): ListItem & Component & {
            recycle(): void;
        };
        removeItem(item: ListItem & Recyclable<Component>): void;
        _selectIndex: number;
        selectIndex: number;
        selectItem: ListItem & Recyclable<Component>;
        itemClickHandler(event: EventX): void;
        remove(): void;
        readonly backward: boolean;
        readonly forward: boolean;
    }
    class DynmList extends List {
        displayList(data?: {}[]): void;
        addItem(index: number, data: {}): ListItem & Component & {
            recycle(): void;
        };
    }
    class TestListItemRender extends Component {
        t: TextField;
        constructor(source?: BitmapSource);
        doData(): void;
    }
}
declare module rf {
    interface IScrollData {
        dlen: number;
        mlen: number;
        pos: number;
        max: number;
    }
    interface IScrollDrager {
        dragDirX: number;
        dragDirY: number;
    }
    class Drager extends MiniDispatcher {
        vStep: number;
        hStep: number;
        vScroll: IScrollData;
        hScroll: IScrollData;
        rect: Size;
        x: number;
        y: number;
        width: number;
        height: number;
        target: RenderBase;
        tweener: ITweener;
        areacheck: boolean;
        updateScroll(scroll: IScrollData, dlen: number, mlen: number): IScrollData;
        setArea(w: number, h: number, width: number, height: number, x?: number, y?: number): this;
        start(): void;
        update(ox: number, oy: number): void;
        end(): void;
        disbind(target: RenderBase): void;
        bind(target: RenderBase, directionX: number, directionY: number): this;
        protected currentDrager: RenderBase & IScrollDrager;
        mouseDownHandler(event: EventX): void;
        mouseUpHandler(event: EventX): void;
        mouseMoveHandler(event: EventX): void;
        refreshScroll(tweener?: ITweener): void;
    }
    class Scroll extends Drager {
        constructor(target: RenderBase);
        resizeHandler(event?: EventX): void;
        resetOrigin(): void;
        scrollxy(x?: number, y?: number): void;
        update(ox: number, oy: number): void;
        end(): void;
        readonly backward: boolean;
        readonly forward: boolean;
    }
}
declare module rf {
    const enum ScrollType {
        H_SCROLL = 0,
        V_SCROLL = 1
    }
    class ScrollBar extends Component {
        btn_up: Button;
        btn_down: Button;
        btn_thumb: Button;
        track: Component;
        step: number;
        bindComponents(): void;
        bindScroll(scroll: Scroll): void;
        setSize(width: number, height: number): void;
        updateThumb(e?: EventX): void;
        mouseWheelHandler(event: EventX): void;
        protected upHandler(event: MouseEventX): void;
        protected downHandler(event: MouseEventX): void;
    }
}
declare module rf {
    class ProgressBar extends Component {
        bar: Sprite;
        txt_label: TextField;
        labelFunc: Function;
        bw: number;
        bh: number;
        usetween: boolean;
        tweenTime: number;
        bindComponents(): void;
        loadbar(barurl: string): void;
        barInit(e?: EventX): void;
        private _tween;
        cur: number;
        max: number;
        dir: boolean;
        _c: number;
        setProgress(cur: number, max: number): void;
        private dc;
        protected doProgress(): void;
        private tweenEnd;
        protected defalutLabelFunc(c: number, t: number): String;
    }
}
declare module rf {
    class Button extends Label {
        bindComponents(): void;
        getObjectByPoint(dx: number, dy: number, scale: number): DisplayObject;
        doEnabled(): void;
        protected clipRefresh(): void;
        addClick(listener: Function, thisObj: any): this;
        icon: Image;
        setface(url: string): void;
        private faceHandler;
        anifont: FontRender;
        ox: number;
        oy: number;
        setAniNum(font: IPANEL_IMAGE_FONT, nums: number[], center?: boolean, ox?: number, oy?: number): void;
        protected u_l(e: EventX): void;
    }
    interface CheckBox {
        on(type: EventT.SELECT | MouseEventX, listener: (e: EventX) => void, thisObject: any, priority?: number): void;
    }
    class CheckBox extends Button {
        doEnabled(): void;
        protected clickHandler(event: EventX): void;
        doSelected(): void;
        protected clipRefresh(): void;
    }
}
declare module rf {
    interface RadioButtonGroup {
        on(type: EventT.CHANGE, listener: (e: EventX) => void, thisObject: any, priority?: number): void;
    }
    class RadioButtonGroup extends MiniDispatcher {
        static groupDict: object;
        static getGroup(name: string, ...args: RadioButton[]): RadioButtonGroup;
        name: String;
        list: RadioButton[];
        selectRadioButton: RadioButton;
        constructor(name: string);
        tab_parent: DisplayObjectContainer;
        tab_index: number;
        setTabmodel(parent: DisplayObjectContainer, index: number, select?: number): void;
        addRadioButton(radioButton: RadioButton): void;
        removeRadioButton(radioButton: RadioButton): void;
        _selectIndex: number;
        selectIndex: number;
        selectItem: RadioButton;
        selectHandler(event: EventX): void;
    }
    interface RadioButton {
        on(type: EventT.SELECT | MouseEventX, listener: (e: EventX) => void, thisObject: any, priority?: number): void;
    }
    class RadioButton extends CheckBox {
        group: RadioButtonGroup;
        cancancle: boolean;
        constructor(source?: BitmapSource);
        bindComponents(): void;
        doSelected(): void;
    }
}
declare module rf {
    class Facade extends MiniDispatcher {
        SINGLETON_MSG: string;
        mediatorMap: {
            [key: string]: Mediator;
        };
        constructor();
        toggle(m: {
            new (): Mediator;
        } | Mediator, type?: number, params?: IOpenOption): Mediator;
        registerEvent(events: {
            [key: string]: EventHandler;
        }, thisobj: any): void;
        removeEvent(event: {
            [key: string]: EventHandler;
        }, thisobj: any): void;
        private togglepanel;
        mediatorCompleteHandler(event: EventX): void;
    }
    let facade: Facade;
    interface IOpenOption {
        panel: string;
        url: string;
        tab: string | number;
    }
    interface IMediatorParmas {
        ox: number;
        oy: number;
        centerFlag: boolean;
        resizeable: boolean;
        haveFight: boolean;
        effParms?: object;
        hasMask?: boolean;
        parentCon?: DisplayObject;
    }
    class Mediator extends MiniDispatcher implements IResizeable {
        eventInterests: {
            [key: string]: EventHandler;
        };
        isReady: boolean;
        name: string;
        weight: number;
        openParams: IOpenOption;
        mediatorParams: IMediatorParmas;
        constructor(name: string);
        panel: Panel;
        setPanel(panel: Panel): void;
        panelClickHandler(event: EventX): void;
        startSync(): boolean;
        preViewCompleteHandler(e: EventX): void;
        awakenAndSleepHandle(e: EventX): void;
        setBindView(isBind: boolean): void;
        mediatorReadyHandle(): void;
        bindEventInterests(): void;
        bindComponents(): void;
        sleep(): void;
        awaken(): void;
        onRemove(): void;
        setMask(alpha?: number, mouseEnable?: boolean): void;
        setParentParams(container: DisplayObject, index?: number): void;
        effParms: {
            show: IPANEL_TWEEN_DATA[];
            hide: IPANEL_TWEEN_DATA[];
        };
        private _alignuse;
        addAlign(item: DisplayObject, align: Align): void;
        addAligns(items: DisplayObject[], align: Align): void;
        protected panelshow(): void;
        protected panelhide(): void;
        resize(width: number, height: number): void;
        protected centerLayout(): void;
        protected childrenLayout(): void;
        back(): number;
        saveParms(): void;
    }
    interface IDisplayIcon {
        id: string | number;
        name: string;
        icon: string;
        bg: string;
    }
    interface IModelIcon extends IDisplayIcon {
        tag: string;
        moduleName: string;
        model: object;
        guid: string | number;
    }
    interface IConditionRuntime extends IModelIcon {
        fromModule: string;
        opera: string;
        value: any;
        pt: string;
        count: number;
        quality: number;
        maxCount: number;
    }
    interface IConfigLimit {
        module: string;
        value: IConditionRuntime[];
        count: IConditionRuntime;
        simple: IConditionRuntime;
    }
    const enum PanelEvent {
        SHOW = "PanelEvent_SHOW",
        HIDE = "PanelEvent_HIDE"
    }
    interface IMaskParams {
        mouseEnable: boolean;
        alpha: number;
    }
    interface IParentParms {
        container: DisplayObject;
        index?: number;
    }
    class Panel extends Component {
        clsName: string;
        mName: string;
        isShow: boolean;
        maskParms: IMaskParams;
        parentParms: IParentParms;
        effParms: {
            show: IPANEL_TWEEN_DATA[];
            hide: IPANEL_TWEEN_DATA[];
        };
        source: PanelSource;
        constructor(uri: string, cls: string);
        render(camera: Camera, option: IRenderOption): void;
        show(container?: any): void;
        load(): PanelSource;
        asyncsourceComplete(e?: EventX): void;
        hide(e?: EventX): void;
        bringTop(e?: EventX): void;
        doEff(): void;
        private tweenHandler;
        private _mask;
        readonly maskcon: Sprite;
    }
    class TEventInteresterDele extends MiniDispatcher {
        eventInterests: {
            [key: string]: EventHandler;
        };
        protected _skin: Component;
        constructor(skin: Component);
        protected bindEventInterests(): void;
        bindComponents(): void;
        setBindView(): void;
        awakenAndSleepHandle(e: EventX): void;
        awaken(): void;
        sleep(): void;
        _data: {};
        data: {};
        doData(): void;
        refreshData(): void;
    }
    class TasyncDele extends Component {
        private m;
        private mname;
        target: Mediator;
        constructor(m: {
            new (): Mediator;
        }, source?: BitmapSource);
        awakenAndSleepHandle(e: EventX): void;
        awaken(): void;
        protected sizeHandler(e?: EventX): void;
    }
    class ItemRender extends Component {
        constructor(uri: string, cls: string);
    }
}
declare module rf {
    interface IDisplayFrameElement {
        type: number;
        name: string;
        rect: any;
        x: number;
        y: number;
        matrix2d: IMatrix;
        libraryItemName: string;
    }
    interface IDisplayTextElement extends IDisplayFrameElement {
        fontRenderingMode: String;
        width: number;
        height: number;
        selectable: boolean;
        text: string;
        filter: any[];
        format: object;
        input: boolean;
        multiline: boolean;
        color: number;
    }
    interface IDisplaySymbol extends IDisplayFrameElement {
        className: String;
        displayClip: number;
        displayFrames: {
            [key: number]: IDisplayFrameElement[];
        };
    }
    interface IExportPanelSource {
        txtwidth: number;
        txtheight: number;
        image: string;
        symbols: IDisplaySymbol[];
        frames: {
            [key: string]: IBitmapSourceVO;
        };
    }
    class PanelSource extends BitmapSource {
        config: IExportPanelSource;
        constructor();
        loadConfigComplete(event: EventX): void;
        loadImageComplete(event: EventX): void;
    }
    function panelSourceLoad(url: string): PanelSource;
    function source_transparent_check(source: PanelSource, vo: IBitmapSourceVO, x: number, y: number): boolean;
}
declare module rf {
    const enum VA {
        pos = "pos",
        normal = "normal",
        tangent = "tangent",
        color = "color",
        uv = "uv",
        index = "index",
        weight = "weight"
    }
    const enum FS {
        diff = "diff",
        SHADOW = "shadow"
    }
    const enum VC {
        m = "m",
        mv = "mv",
        invm = "invm",
        sunmvp = "sunmvp",
        p = "p",
        mvp = "mvp",
        ui = "ui",
        lightDirection = "lightDirection",
        originFar = "originFar",
        logDepthFar = "logDepthFar",
        vc_diff = "vc_diff",
        vc_emissive = "vc_emissive",
        vc_bones = "bones"
    }
    class Buffer3D implements IRecyclable {
        preusetime: number;
        gctime: number;
        readly: boolean;
        constructor();
        awaken(): void;
        sleep(): void;
        onRecycle(): void;
    }
    class Program3D extends Buffer3D {
        program: WebGLProgram;
        private vShader;
        private fShader;
        vertexCode: string;
        fragmentCode: string;
        uniforms: Object;
        attribs: Object;
        setting: IShaderSetting;
        constructor();
        awaken(): boolean;
        dispose(): void;
        recycle(): void;
        private createShader;
    }
    class VertexBuffer3D extends Buffer3D {
        numVertices: number;
        data32PerVertex: number;
        data: VertexInfo;
        buffer: WebGLBuffer;
        constructor();
        recycle(): void;
        awaken(): boolean;
        uploadFromVector(data: number[] | Float32Array | VertexInfo, startVertex?: number, numVertices?: number): void;
        attribarray: object;
        uploadContext(program: Program3D): void;
    }
    class IndexBuffer3D extends Buffer3D {
        numIndices: number;
        data: Uint16Array;
        buffer: WebGLBuffer;
        quadid: number;
        constructor();
        recycle(): void;
        awaken(): boolean;
        uploadFromVector(data: number[] | Uint16Array, startOffset?: number, count?: number): void;
    }
    class Texture extends Buffer3D {
        key: number | string;
        data: ITextureData;
        texture: WebGLTexture;
        width: number;
        height: number;
        pixels: ImageBitmap | ImageData | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement | BitmapData;
        floatData: Uint8Array;
        constructor();
        awaken(): boolean;
        uploadContext(program: Program3D, variable: string): void;
        status: LoadStates;
        load(url?: string): void;
        loadComplete(e: EventX): void;
        recycle(): void;
    }
    class RTTexture extends Texture {
        frameBuffer: WebGLFramebuffer;
        renderBuffer: WebGLRenderbuffer;
        setting: IContext3DSetting;
        cleanBit: number;
        cleanColor: IVector3D;
        awaken(): boolean;
        recycle(): void;
    }
    class CubeTexture extends Texture {
        frameBuffer: WebGLFramebuffer;
        renderBuffer: WebGLRenderbuffer;
        setting: IContext3DSetting;
        files: string[];
        cubePixels: (ImageBitmap | ImageData | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement)[];
        awaken(): boolean;
        uploadContext(program: Program3D, variable: string): void;
        status: LoadStates;
        load(url?: string, type?: string): void;
        loadComplete(e: EventX): void;
        recycle(): void;
    }
}
declare namespace rf {
    let context3D: Context3D;
    const enum Context3DTextureFormat {
        BGRA = "bgra"
    }
    const enum Context3DVertexBufferFormat {
        BYTES_4 = 4,
        FLOAT_1 = 1,
        FLOAT_2 = 2,
        FLOAT_3 = 3,
        FLOAT_4 = 4
    }
    interface IContext3DSetting {
        cull: number;
        depth: boolean;
        logarithmicDepthBuffer: boolean;
        use_logdepth_ext: boolean;
        depthMode: number;
        src: number;
        dst: number;
    }
    class Context3D {
        bufferLink: Link;
        triangles: number;
        dc: number;
        logarithmicDepthBuffer: boolean;
        use_logdepth_ext: boolean;
        setting: IContext3DSetting;
        _clearBit: number;
        render_setting: IContext3DSetting;
        createEmptyContext3DSetting(): IContext3DSetting;
        constructor();
        backBufferWidth: number;
        backBufferHeight: number;
        antiAlias: number;
        texIndex: number;
        configureBackBuffer(width: number, height: number, antiAlias?: number, enableDepthAndStencil?: boolean): void;
        lossScissor(rect: Size): void;
        setScissor(rect: Size, sceneX: number, sceneY: number): {
            x: number;
            y: number;
            w: number;
            h: number;
        };
        clear(red?: number, green?: number, blue?: number, alpha?: number, depth?: number, stencil?: number, mask?: number): void;
        updateSetting(render_setting: IContext3DSetting): void;
        attribarray: {
            [key: string]: boolean;
        };
        createVertexBuffer(data: number[] | Float32Array | VertexInfo, data32PerVertex?: number, startVertex?: number, numVertices?: number, CLS?: {
            new (): VertexBuffer3D;
        }): Recyclable<VertexBuffer3D>;
        indexByte: IndexBuffer3D;
        getIndexByQuad(quadCount: number): IndexBuffer3D;
        createIndexBuffer(data: number[] | Uint16Array | ArrayBuffer): IndexBuffer3D;
        defauleMag: number;
        getTextureData(url: string, mipmap?: boolean, mag?: number, mix?: number, repeat?: number, y?: boolean): ITextureData;
        textureObj: {
            [key: string]: Texture;
        };
        createTexture(key: ITextureData, pixels?: ImageBitmap | ImageData | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement | BitmapData): Texture;
        createEmptyTexture(key: ITextureData, width: number, height: number): Texture;
        createRttTexture(key: ITextureData, width: number, height: number): RTTexture;
        createCubeTexture(key: ITextureData): CubeTexture;
        rttTextures: RTTexture[];
        setRenderToTexture(texture: RTTexture, enableDepthAndStencil?: boolean, antiAlias?: number, surfaceSelector?: number, colorOutputIndex?: number): void;
        setRenderToBackBuffer(): void;
        programs: {
            [key: string]: Recyclable<Program3D>;
        };
        createProgram(vertexCode: string, fragmentCode: string, key?: string): Recyclable<Program3D>;
        setProgramConstantsFromVector(variable: string, data: number | number[] | Float32Array | ArrayLike<number>, format: number, array?: boolean, numstr?: string): void;
        setProgramConstantsFromMatrix(variable: string, rawData: ArrayLike<number>): void;
        cProgram: Program3D;
        setProgram(program: Program3D): 1 | 0 | -1;
        drawTriangles(indexBuffer: IndexBuffer3D, numTriangles: number, setting?: IContext3DSetting, offset?: number): void;
        gc(now: number): void;
        toString(): string;
    }
    function webGLSimpleReport(): Object;
}
declare module rf {
    class Light extends Camera {
        color: number;
        intensity: number;
        lookVector: IVector3D;
        updateSceneTransform(updateStatus?: number, parentSceneTransform?: IMatrix3D): number;
    }
    class DirectionalLight extends Light {
        lightoffset: IVector3D;
        normalsize: Float32Array;
        setDirectional(x: number, y: number, z: number): void;
        setSunOffset(x: number, y: number, z: number): void;
    }
}
declare module rf {
    class SceneObject extends Sprite implements ITickable {
        scene: Scene;
        shadowCast: boolean;
        shadowTarget: boolean;
        shadowMatrix: IMatrix3D;
        geometry: GeometryBase;
        invSceneTransform: IMatrix3D;
        minBoundingBox: OBB;
        boundingSphere: Sphere;
        distance: number;
        screenY: number;
        constructor(variables?: {
            [key: string]: IVariable;
        }, mouseEnabled?: boolean, source?: BitmapSource);
        update(now: number, interval: number): void;
        addChild(child: DisplayObject): void;
        readonly available: boolean;
        addChildAt(child: DisplayObject, index: number): void;
        removeChild(child: DisplayObject): void;
        removeAllChild(): void;
        removeFromStage(): void;
        addToStage(): void;
        renderShadow(sun: Light, p: Program3D, c: Context3D, worldTranform: IMatrix3D, now: number, interval: number): void;
        static sphere: Sphere;
        static ray: Ray;
        raycast(raycaster: Raycaster, intersects?: IIntersectInfo[]): IIntersectInfo[];
    }
    class Scene extends SceneObject {
        sun: DirectionalLight;
        childChange: boolean;
        camera: Camera;
        rayCaster: Raycaster;
        constructor(variables?: {
            [key: string]: IVariable;
        }, mouseEnabled?: boolean);
        render(camera: Camera, option: IRenderOption): void;
        getObjectByPoint(dx: number, dy: number, scale: number): SceneObject;
    }
    class AllActiveSprite extends Sprite {
        constructor(source?: BitmapSource, variables?: {
            [key: string]: IVariable;
        });
    }
    class NoActiveSprite extends Sprite {
        constructor(source?: BitmapSource, variables?: {
            [key: string]: IVariable;
        });
    }
    let scene: Scene;
    let followScene: NoActiveSprite;
    let floorContainer: NoActiveSprite;
    let popContainer: AllActiveSprite;
    let tipContainer: AllActiveSprite;
    interface IStage3DCamera {
        camera: Camera;
        cameraUI: Camera;
        camera2D?: Camera;
        camera3D?: Camera;
        cameraOrth?: Camera;
        cameraPerspective?: Camera;
    }
    class Stage3D extends AllActiveSprite implements IResizeable, IStage3DCamera {
        canvas: HTMLCanvasElement;
        cameraUI: Camera;
        camera2D: Camera;
        camera: Camera;
        renderLink: Link;
        shadow: ShadowEffect;
        constructor();
        names: string[];
        requestContext3D(canvas: HTMLCanvasElement): boolean;
        renderOption: IRenderOption;
        update(now: number, interval: number): void;
        resize(width: number, height: number): void;
        filterRenderList(d: SceneObject, link: Link): void;
        getObjectByPoint(dx: number, dy: number, scale: number): DisplayObject;
    }
    class ShadowEffect {
        w: number;
        h: number;
        rtt: RTTexture;
        m: ShadowMaterial;
        len: IMatrix3D;
        constructor(w: number, h: number);
        render(link: Link, sun: DirectionalLight, now: number, interval: number): void;
    }
    class PassContainer extends RenderBase {
        camera: Camera;
        constructor(variables?: {
            [key: string]: IVariable;
        });
        render(camera: Camera, option: IRenderOption): void;
    }
    class UIContainer extends AllActiveSprite {
        render(camera: Camera, option: IRenderOption): void;
    }
    function getChildrenCount(d: DisplayObjectContainer): number;
}
declare module rf {
    let logging: boolean;
    function log(msg: string): void;
    class AppBase implements ITickable, IResizeable {
        nextGCTime: number;
        gcDelay: number;
        constructor();
        rolldownHandler(event: EventX): void;
        rollupHandler(event: EventX): void;
        init(canvas: HTMLCanvasElement): void;
        initCanvas(canvas: HTMLCanvasElement): void;
        createSource(): void;
        initROOT(): void;
        initContainer(sceneCamera?: Camera, sceneMouse?: boolean): void;
        update(now: number, interval: number): void;
        resize(width: number, height: number): void;
        gcChangeHandler(event: EventX): void;
    }
}
declare module rf {
    var u3d_role: Unit3D;
    var u3d_monster: Monster;
    var unitlist: {
        [key: string]: Unit3D;
    };
    var test_bitmap: BitmapData;
    var test_text: TextField;
    var line3d: Line3D;
    function test_fill(str: string): void;
    class StageDebug extends AppBase {
        map: SnakeMap;
        resize(w: number, h: number): void;
        createSource(): void;
        initROOT(): void;
        init(canvas: HTMLCanvasElement): void;
        testmesh(e?: EventX): void;
        moreItems(e: EventX): void;
        timerTest(): void;
        _time: number;
        randomtxt(): void;
        _isscal: boolean;
        source: PanelSource;
        pcon: Component;
        panel: TestPanel;
        scaleTest(): void;
        panelHandler(e: EventX): void;
        asyncsourceComplete(e?: EventX): void;
        scalHandler(e?: KeyboardEvent): void;
        unitA: ActionActor;
        sy: number;
        map2dTest(): void;
        mouseWheelHandler(event: EventX): void;
        attack(e: KeyboardEvent): void;
        dibiao: Skill;
        moveTest(e: EventX): void;
        mouseWheel3dHandler(event: EventX): void;
        unit3dCamera2DTest(): void;
        unit3dTest(): void;
        initCamera3d(): void;
        rayClickTest(e: EventX): void;
        filterTest(): void;
        superBatchTest(): void;
        kfmtest(): void;
        quaternionTest(): void;
        circleTest(): void;
        testtest(): void;
    }
    var mesh: KFMMesh;
    var testConfig: {
        [key: string]: any;
        map?: {
            [key: string]: IMapData;
        };
    };
    function qua2mat(qua: IVector3D, pos: IVector3D): Float32Array;
    class TestPanel extends Panel {
        txt_time: TextField;
        txt_state: TextField;
        txt_name: TextField;
        constructor();
        create(): void;
        enterHandle(e: EventX): void;
        _time: number;
        runtxt(): void;
    }
}
declare module skill {
    var testskill: {};
}
declare module rf {
    interface IAnimFrame extends IBitmapSourceVO {
        duration: number;
    }
    interface AnimData {
        p: string;
        n: string;
        r: number;
        sx: number;
        sy: number;
        l: number;
        m: number;
        w: number;
        h: number;
        t: number;
        fs: {
            [key: string]: IAnimFrame;
        };
        matrix2d: IMatrix;
        source: Anim2dSource;
    }
    interface PakData {
        v: number;
        on: number;
        oh: number;
        hit: Size;
        sf: {
            [key: string]: number[];
        };
        actions: AnimData[][];
    }
    const enum Anim2DEventX {
        FRAME = 100,
        ATTACK = 101,
        COMPLETE = 102
    }
    class Anim2dSource extends BitmapSource implements ILoaderTask {
        config: AnimData;
        cachefs: {
            [key: string]: IBitmapSourceVO;
        };
        completeFuncs: Function[];
        constructor(url: string);
        load(): void;
        loadConfigComplete(event: EventX): void;
        loadByConfig(data: AnimData): void;
        loadImageComplete(event: EventX): void;
    }
    class Ani extends Sprite {
        constructor(source?: BitmapSource);
        extention: ExtensionDefine;
        url: string;
        config: AnimData;
        cur: number;
        max: number;
        nt: number;
        t: number;
        once: number;
        st: number;
        bindAnis: Link;
        parentAni: Ani;
        lock: number;
        removeTime: number;
        load(url: string | AnimData): Anim2dSource;
        onSouceComplete(e: EventX): void;
        play(source: Anim2dSource): void;
        render(camera: Camera, option: IRenderOption): void;
        renderFrame(frame: number): number;
        lockFrame(frame: number): void;
        addBindAni(ani: Ani): void;
        removeBindAni(ani: Ani): void;
        onceComplete(finish: boolean): void;
        onComplete(t?: any): void;
    }
    class Pak extends Ani {
        static INFO_COMPLETE: string;
        constructor();
        info: PakData;
        action: number;
        faceto: number;
        load(url: string): any;
        pakLoadComplete(event: EventX): void;
        anim(anim: any, faceto: number, tm: ITimeMixer, once?: number, duration?: number, refresh?: boolean): void;
        onComplete(): void;
    }
    function anim_getSource(data: string | AnimData, extendtion?: ExtensionDefine, complete?: Function): Anim2dSource;
    function getAglinPoint(aglin: Align, w: number, h: number): number[];
    function fontRender(g: Graphics, vos: IFightSourceVO[], aglin: Align, gap?: number, rd?: number): void;
}
declare module rf {
    interface IPANEL_IMAGE_FONT {
        uri: string;
        prefix?: {
            [key: string]: number;
        };
    }
    class FontRender extends Component {
        font: IPANEL_IMAGE_FONT;
        asource: Anim2dSource;
        valarr: number[];
        gap: number;
        rd: number;
        constructor(font: IPANEL_IMAGE_FONT, source?: BitmapSource);
        updateVal(arr: number[]): void;
        private draw;
    }
    function img_getAnimvos(key: string, arr: number[], source: BitmapSource, font?: IPANEL_IMAGE_FONT): IFightSourceVO[];
    function copyAniSource(from: Anim2dSource, to: BitmapSource): void;
}
declare module rf {
    class FileReference {
        static CLS: {
            new (path: string): FileReference;
        };
        nativePath: string;
        constructor(path: string);
        join(f: string, t: string): string;
        readonly name: string;
        readonly extname: string;
        readonly exists: boolean;
        isFile(): boolean;
        readonly parent: FileReference;
        read(): any;
        readUTF8(type?: string): string;
        mkdir(path: string): void;
        write(buf: Uint8Array): void;
        writeUTF8(value: string): void;
        copyto(to: FileReference | string): void;
        moveto(to: FileReference | string): void;
        getDirectoryListing(): FileReference[];
        resolvePath(path: string): FileReference;
        getAllFiles(): FileReference[];
    }
}
declare module rf {
    var HTTP_REPOSITORY: {
        [key: string]: Loader;
    };
    type LoaderType = new (perfix: string, url: string) => Loader;
    const enum LoadPriority {
        low = 0,
        middle = 1,
        high = 2,
        max = 3
    }
    const enum LoadStates {
        WAIT = 0,
        LOADING = 1,
        COMPLETE = 2,
        FAILED = 3
    }
    const enum ResType {
        bin = 0,
        amf = 1,
        amf_inflate = 2,
        text = 3,
        sound = 4,
        image = 5
    }
    interface IResHandler {
        complete: EventHandler;
        thisObj: any;
    }
    class Loader extends MiniDispatcher {
        status: LoadStates;
        option: wx.IHttpOption;
        byte: number;
        loadUseTime: number;
        disposeTime: number;
        lastActiveTime: number;
        requstTimes: number;
        data: any;
        url: string;
        perfix: string;
        completeLink: Link;
        constructor(perfix: string, url: string, dataType?: wx.HttpResponseType, method?: wx.HttpMethod);
        accessSync(url: string): boolean;
        initOption(option: wx.IHttpOption): void;
        load(): void;
        doLoad(option: wx.IHttpOption): void;
        complete(res: wx.IHttpData): void;
        getFileByteLength(data: any): number;
        preComplete(res: wx.IHttpData): void;
        formatData(data: string | object | ArrayBuffer): string | object | ArrayBuffer;
    }
    class AMFLoader extends Loader {
        inflate: boolean;
        formatData(data: string | object | ArrayBuffer): any;
    }
    class ImageLoader extends Loader {
        doLoad(option: wx.IHttpOption): void;
        getFileByteLength(data: HTMLImageElement): number;
        onLoaded(e: Event): void;
        onerror(e: Event): void;
    }
    var http_res_max_loader: number;
    var http_current_loader_count: number;
    var http_load_Link: Link;
    var http_loader: {
        [key: number]: LoaderType;
    };
    function loadRes(perfix: string, url: string, complete?: EventHandler, thisObj?: any, type?: ResType | LoaderType, priority?: LoadPriority, disposeTime?: number): Loader;
    function http_load_continue(e?: EventX): void;
    function getFullUrl(url: string, extension?: string): string;
    interface ILoaderTask {
        name?: string;
        data?: any;
        status: LoadStates;
    }
    interface LoadTask {
        on(type: EventT.PROGRESS | EventT.COMPLETE, listener: (e: EventX) => void, thisObject: any, priority?: number): void;
        on(type: string | number, listener: (e: EventX) => void, thisObject: any, priority?: number): void;
    }
    class LoadTask extends MiniDispatcher implements IRecyclable {
        queue: {
            [key: string]: ILoaderTask;
        };
        total: number;
        progress: number;
        add(perfix: string, url: string, type: ResType | LoaderType, complete?: EventHandler, thisObj?: any): Loader;
        addTask(item: ILoaderTask & IEventDispatcherX): void;
        complteHandler(event: EventX): void;
        onRecycle(): void;
    }
    function http_gc(now: number): void;
}
declare module rf {
    const enum Keybord {
        A = 65,
        ALTERNATE = 18,
        AUDIO = 16777239,
        B = 66,
        BACK = 16777238,
        BACKQUOTE = 192,
        BACKSLASH = 220,
        BACKSPACE = 8,
        BLUE = 16777219,
        C = 67,
        CAPS_LOCK = 20,
        CHANNEL_DOWN = 16777221,
        CHANNEL_UP = 16777220,
        COMMA = 188,
        COMMAND = 15,
        CONTROL = 17,
        D = 68,
        DELETE = 46,
        DOWN = 40,
        DVR = 16777241,
        E = 69,
        END = 35,
        ENTER = 13,
        EQUAL = 187,
        ESCAPE = 27,
        EXIT = 16777237,
        F = 70,
        F1 = 112,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        F13 = 124,
        F14 = 125,
        F15 = 126,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        FAST_FORWARD = 16777226,
        G = 71,
        GREEN = 16777217,
        GUIDE = 16777236,
        H = 72,
        HELP = 16777245,
        HOME = 36,
        I = 73,
        INFO = 16777235,
        INPUT = 16777243,
        INSERT = 45,
        J = 74,
        K = 75,
        L = 76,
        LAST = 16777233,
        LEFT = 37,
        LEFTBRACKET = 219,
        LIVE = 16777232,
        M = 77,
        MASTER_SHELL = 16777246,
        MENU = 16777234,
        MINUS = 189,
        N = 78,
        NEXT = 16777230,
        NUMBER_0 = 48,
        NUMBER_1 = 49,
        NUMBER_2 = 50,
        NUMBER_3 = 51,
        NUMBER_4 = 52,
        NUMBER_5 = 53,
        NUMBER_6 = 54,
        NUMBER_7 = 55,
        NUMBER_8 = 56,
        NUMBER_9 = 57,
        NUMPAD = 21,
        NUMPAD_0 = 96,
        NUMPAD_1 = 97,
        NUMPAD_2 = 98,
        NUMPAD_3 = 99,
        NUMPAD_4 = 100,
        NUMPAD_5 = 101,
        NUMPAD_6 = 102,
        NUMPAD_7 = 103,
        NUMPAD_8 = 104,
        NUMPAD_9 = 105,
        NUMPAD_ADD = 107,
        NUMPAD_DECIMAL = 110,
        NUMPAD_DIVIDE = 111,
        NUMPAD_ENTER = 108,
        NUMPAD_MULTIPLY = 106,
        NUMPAD_SUBTRACT = 109,
        O = 79,
        P = 80,
        PAGE_DOWN = 34,
        PAGE_UP = 33,
        PAUSE = 16777224,
        PERIOD = 190,
        PLAY = 16777223,
        PREVIOUS = 16777231,
        Q = 81,
        QUOTE = 222,
        R = 82,
        RECORD = 16777222,
        RED = 16777216,
        REWIND = 16777227,
        RIGHT = 39,
        RIGHTBRACKET = 221,
        S = 83,
        SEARCH = 16777247,
        SEMICOLON = 186,
        SETUP = 16777244,
        SHIFT = 16,
        SKIP_BACKWARD = 16777229,
        SKIP_FORWARD = 16777228,
        SLASH = 191,
        SPACE = 32,
        STOP = 16777225,
        SUBTITLE = 16777240,
        T = 84,
        TAB = 9,
        U = 85,
        UP = 38,
        V = 86,
        VOD = 16777242,
        W = 87,
        X = 88,
        Y = 89,
        YELLOW = 16777218,
        Z = 90
    }
    class KeyManagerV2 extends MiniDispatcher {
        static enabled: Boolean;
        keylist: number[];
        keylimit: number[];
        isClosed: boolean;
        static _defaultMainKey: KeyManagerV2;
        static currentKey: KeyManagerV2;
        constructor(target?: DisplayObject);
        mouseDownHandler(e: MouseEventX): void;
        static resetDefaultMainKey(value?: KeyManagerV2): void;
        static setFocus(focus?: KeyManagerV2): void;
        awaken(): void;
        sleep(): void;
        init(): void;
        onKeyHandle(e: KeyboardEvent): void;
        keyDict: {
            [key: string]: Function;
        };
        keyObj: {
            [key: string]: any;
        };
        currentKeyCode: number;
        doKey(e: KeyboardEvent, keyvalue: number): boolean;
        check(): boolean;
        regKeyDown(key: number, func: Function, thisobj: any, shift?: boolean, ctrl?: boolean, alt?: boolean): void;
        regKeyUp(key: number, func: Function, thisobj: any, shift?: boolean, ctrl?: boolean, alt?: boolean): void;
        removeKeyDown(key: number, func: Function, shift?: boolean, ctrl?: boolean, alt?: boolean): void;
    }
    let mainKey: KeyManagerV2;
}
declare module rf {
    type MessageStruct = [string, number, number] | [string, number, number, string] | [string, number, number, string, any];
    class PBMessage {
        static Enabled: boolean;
        static ThrowErrorEnabled: boolean;
        static StructByName: {
            [index: string]: {
                c?: MessageStruct;
                s?: MessageStruct;
                dto?: MessageStruct;
            };
        };
        static writeMessage(msg: object, type: number | string, side?: string): AMF3Encode;
        private static writeElement;
        static readMessage(amf: AMF3Decode, type: number | string, side: string, len: number): any;
        private static type2WireType;
    }
}
declare module rf {
    class MD5 {
        constructor();
        private hexcase;
        private b64pad;
        hex_md5(s: any): string;
        private b64_md5;
        private any_md5;
        private hex_hmac_md5;
        private b64_hmac_md5;
        private any_hmac_md5;
        private md5_vm_test;
        private rstr_md5;
        private rstr_hmac_md5;
        private rstr2hex;
        private rstr2b64;
        private rstr2any;
        private str2rstr_utf8;
        private str2rstr_utf16le;
        private str2rstr_utf16be;
        private rstr2binl;
        private binl2rstr;
        private binl_md5;
        private md5_cmn;
        private md5_ff;
        private md5_gg;
        private md5_hh;
        private md5_ii;
        private safe_add;
        private bit_rol;
    }
}
declare module rf {
    function debugPanelSource(event: EventX): void;
    function debugCanvas(canvas: HTMLCanvasElement, fullscale?: boolean, ox?: number, oy?: number): void;
    function clickRemoveElement(event: MouseEvent): void;
}
declare module rf {
    class GUIProfile extends Sprite {
        timeTex: TextField;
        fpsTxt: TextField;
        dcTxt: TextField;
        repolyTxt: TextField;
        bufferTex: TextField;
        tweenTex: TextField;
        constructor();
        private bindComponents;
        private createText;
        fpsChangeHandler(event: EventX): void;
    }
}
declare module rf {
    let line_variable: {
        [key: string]: IVariable;
    };
    class Line3DPoint {
        x: number;
        y: number;
        z: number;
        r: number;
        g: number;
        b: number;
        a: number;
        t: number;
        clear(): void;
        clone(): Line3DPoint;
        toRGB(color: number): void;
    }
    class Line3D extends SceneObject {
        constructor();
        private origin;
        private tempVertex;
        points: Line3DPoint[];
        vertexBuffer: VertexBuffer3D;
        program: Program3D;
        data32PerVertex: number;
        numVertices: number;
        triangles: number;
        quad: number;
        clear(): void;
        moveTo(x: number, y: number, z: number, thickness?: number, color?: number, alpha?: number): void;
        lineTo(x: number, y: number, z: number, thickness?: number, color?: number, alpha?: number): void;
        private build;
        end(): void;
        updateSceneTransform(updateStatus?: number, parentSceneTransform?: IMatrix3D): number;
        render(camera: Camera, option: IRenderOption): void;
        protected createProgram(): Program3D;
    }
    class Trident extends Line3D {
        constructor(len?: number, think?: number);
    }
    class LinePlane extends Line3D {
        constructor(len?: number, think?: number, scale?: number);
    }
}
declare module rf {
    class MoveRocker extends Sprite implements IResizeable {
        btn_left: GrapButton;
        btn_right: GrapButton;
        btn_up: GrapButton;
        btn_down: GrapButton;
        c_point: Point2D;
        constructor();
        bindComponents(): void;
        downHandler(e: EventX): void;
        _otherDown: boolean;
        rootdownHandler(e: EventX): void;
        upHandler(e: EventX): void;
        dx: number;
        dy: number;
        _identifier: number;
        moveHandler(e?: EventX): void;
        moveTick(e: EventX): void;
        resize(width: number, height: number): void;
    }
    class SkillRocker extends Sprite {
        btn_one: GrapButton;
        btn_two: GrapButton;
        btn_three: GrapButton;
        btn_four: GrapButton;
        constructor();
        bindComponents(): void;
        skill_click(e: EventX): void;
        resize(width: number, height: number): void;
    }
}
declare module rf {
    function skeleton_debug(): void;
}
declare module rf {
    class GrapButton extends Button {
        constructor();
        bindComponents(): void;
        textResize(): void;
    }
    class TimeDragItem extends Sprite {
        txt_label: TextField;
        constructor();
        bindComponents(): void;
        setData(width: number, height: number, color?: number): void;
        updateVal(val: number): void;
    }
    class TimeBar extends Sprite implements IResizeable, ITickable {
        btn_time: TimeDragItem;
        params: {
            duration: number;
            pixSec: number;
            btnEx: number;
            time: number;
        };
        txts: TextField[];
        btn_play: GrapButton;
        offsetx: number;
        constructor();
        bindComponents(): void;
        targetTm: ITimeMixer;
        setTm(ttm: ITimeMixer): void;
        setData(duration: number, pixSec: number): void;
        draw(): void;
        update(now: number, interval: number): void;
        playHandler(e: EventX): void;
        dirtHandler(e: EventX): void;
        downHandler(e: EventX): void;
        preMouseX: number;
        moveHandler(e: EventX): void;
        upHandler(e: EventX): void;
        updateBtn(tx: number): void;
        createtxt(i: number): TextField;
        reset(): void;
        resize(width: number, height: number): void;
    }
}
declare module rf {
    class AStar {
        map: Map2DSetting;
        xfrom: number;
        yfrom: number;
        xto: number;
        yto: number;
        event: MiniDispatcher;
        openlist: number[][];
        closelist: number[];
        minNode: number[];
        aSurOff: number[][];
        minih: number;
        go(map: Map2DSetting, xfrom: number, yfrom: number, xto: number, yto: number, event?: MiniDispatcher): number[][];
        getPushIndex(wayList: number[][], f: number): number;
        excute(): number;
        getNearest(): any[];
        format(node: any[]): any[];
        merge(ml: Map2DSetting, nearest: number[][]): number[][];
    }
}
declare module rf {
    class Arpg2DCamera extends Camera implements ITickable, IResizeable {
        map: SnakeMap;
        watchTarget: DisplayObject;
        top: number;
        left: number;
        right: number;
        bottom: number;
        init(): void;
        resize(width: number, height: number): void;
        update(now: number, interval: number): void;
    }
}
declare module rf {
    function map_create_data(id: string, pwc: number, phc: number): IMapData;
    interface IMapData {
        gw: number;
        gh: number;
        gew: number;
        geh: number;
        hgew: number;
        hgeh: number;
        w: number;
        h: number;
        pw: number;
        ph: number;
        id: string;
        byte: ArrayBuffer;
        setting: Map2DSetting;
    }
    class SnakeMap extends SceneObject {
        static sourceSize: Point2D;
        gx: number;
        gy: number;
        sw: number;
        sh: number;
        gw: number;
        gh: number;
        data: IMapData;
        perfix: string;
        mapHalo: Sprite;
        mapGrap: Sprite;
        constructor(variables?: {
            [key: string]: IVariable;
        });
        getFull(s: string, len: number): string;
        init(data: IMapData, sceneWidth: number, sceneHeight: number): void;
        render(camera: Camera, option: IRenderOption): void;
        setSize(width: number, height: number): void;
        setviewRect(x: number, y: number): void;
        maploadCompleteHandler(event: EventX): void;
    }
}
declare module rf {
    class Map2DSetting {
        path: Uint8Array;
        w: number;
        h: number;
        data: IMapData;
        alphas: number[];
        constructor(data: IMapData);
        getValue(x: number, y: number): number;
        getWalk(x: number, y: number): number;
        getsafe(x: number, y: number): number;
        getAlpha(x: number, y: number): number;
        setWalk(x: number, y: number, val: number): void;
        setAlpha(x: number, y: number, val: number): void;
        setSafe(x: number, y: number, val: number): void;
    }
}
declare module rf {
    class MapRtt extends SceneObject {
        rtt: RTTexture;
        nativeRender: boolean;
        render(camera: Camera, option: IRenderOption): void;
    }
}
declare module rf {
    type STATE_TRY_STOP = (activeId: number) => number;
    type STATE_STOP = (activeId: number) => void;
    interface IStateRuntimeVO {
        id: StateDefine;
        thisobj: any;
        trystop: STATE_TRY_STOP;
        stop: STATE_STOP;
        active: boolean;
    }
    class StateModel {
        running: {
            [key: number]: IStateRuntimeVO;
        };
        constructor();
        runningList(): any[];
        isRunning(id: StateDefine): boolean;
        check(id: StateDefine): boolean;
        startState(id: StateDefine, thisobj?: any, stop?: STATE_STOP, trystop?: STATE_TRY_STOP): IStateRuntimeVO;
        stopState(id: StateDefine, activeId: StateDefine): void;
        stop(activeId: StateDefine): void;
    }
}
declare module rf {
    const enum StateDefine {
        MOVE = 1,
        CAST = 2,
        ATTACK = 3,
        JUMP = 4,
        RIDE = 5,
        NAVIGATION = 6,
        NAVIGATION_CITY = 7,
        DEAD = 8,
        HIT = 9,
        FOLLOW = 10,
        AUTOFIGHT = 11,
        COUNT = 12
    }
    const enum Ralation {
        FOBIDDEN = 0,
        BREAK = 1,
        ALLOW = 2
    }
    let stateRelation: number[][];
    function state_Setup(): void;
}
declare module rf {
    let RX: number;
    let SY: number;
    let OBJECT2D_SCALE: number;
    const enum SCENE_MODEL {
        MAP2D = 0,
        MAP3D = 1,
        UI = 2,
        CONTIANER = 3
    }
    class MapObject extends SceneObject {
        constructor();
        container: SceneObject;
        sceneModel: SCENE_MODEL;
        setSceneModel(value: SCENE_MODEL): void;
        createContainer(): void;
        rotation: number;
        updateTransform(): void;
        setTransform(matrix: ArrayLike<number>): void;
    }
}
declare module rf {
    class ActorAction extends MiniDispatcher implements ITickable {
        stateID: number;
        actor: ActionActor;
        init(): void;
        check(actor: ActionActor, state: StateModel): boolean;
        start(actor: ActionActor, params?: any): boolean;
        doStart(actor: ActionActor, params?: any): void;
        tryStop(activeID: number): number;
        end(): void;
        stop(activeID: number): void;
        update(now: number, interval: number): void;
        actorSyncPosition(): void;
    }
}
declare module rf {
    const enum UNIT_TITLE_LEVEL {
        CLAN = 0,
        NAME = 1,
        BLOOD = 2,
        EFFECT = 3
    }
    interface IUnitTitleVo {
        level: number;
        dis: DisplayObjectContainer;
        ox: number;
        oy: number;
        width: number;
        height: number;
        hor_dir: number;
        followVo: IUnitTitleVo;
    }
    class ShadowImg extends Image {
        constructor();
    }
    class MsgPop extends Image {
        txt: TextField;
        constructor();
        text: string;
    }
    class TitleUtils {
        textCon: Sprite;
        effCon: Sprite;
        haloCon: Sprite;
        parent: DisplayObjectContainer;
        private txtformat;
        constructor();
        bind(target: DisplayObjectContainer): void;
        init(): void;
        addTxt(): Recyclable<TextField>;
        addImg(): Recyclable<Image>;
        addEff(): Ani;
        addHalo(): Recyclable<ShadowImg>;
        addPop(): Recyclable<MsgPop>;
    }
    class UnitTitle {
        titlevos: IUnitTitleVo[];
        util: TitleUtils;
        x: number;
        y: number;
        private _visible;
        constructor();
        visible: boolean;
        setPos(x: number, y: number): void;
        msgpop: MsgPop;
        popMsg(val: string): void;
        setText(val: string, level: number, color?: number, isfollow?: boolean, hd?: number): void;
        setEff(url: string, level: number, offsetx?: number, offsety?: number, isfollow?: boolean, hd?: number): void;
        setIcon(url: string, level: number, isfollow?: boolean, hd?: number): void;
        addDisplay(dis: DisplayObjectContainer, level: number): void;
        removeLevel(level: number): void;
        changeColor(level: number, color: number): void;
        layout(): void;
        imgHandler(e: EventX): void;
        getTitleVo(level: number, isfollow?: boolean): IUnitTitleVo;
        private doShow;
        dispose(): void;
    }
}
declare module rf {
    class Unit3D extends MapObject {
        guid: number | string;
        nameLabelY: number;
        title: UnitTitle;
        vo: IUnitVO;
        constructor();
        body: KFMMesh;
        setBody(url: string): void;
        initVO(vo?: IUnitVO): void;
        initTitle(): void;
        weapon: KFMMesh;
        setWeapon(url: string): void;
        initialize(e: EventX): void;
    }
    class ActionActor extends Unit3D {
        state: StateModel;
        movespeed: number;
        gx: number;
        gy: number;
        actions: {
            [key: number]: ActorAction;
        };
        guid: number;
        _alive: boolean;
        constructor();
        setText(val: string, color?: number): void;
        halo: Image;
        crateHalo(): void;
        talk(val: string): void;
        playAnim(id: string, refresh?: boolean): void;
        attack(id: string, complete?: Function, thisobj?: any, loop?: false): void;
        defaultAnim: string;
        playDefaultAnim(): void;
        faceto(x: number, y: number, tween?: boolean): void;
        updateXY(x: number, y: number): void;
        getAction<T>(id: StateDefine, c: {
            new (): T;
        }): T;
        walkPixTo(x: number, y: number, autoAnim?: boolean, endtime?: number): void;
        cancleMove(): void;
        castSkill(id: string, tx: number, ty: number): void;
        endCast(e: EventX): void;
        jump(tmid: string, tx: number, ty: number, dislen?: number, duration?: number): void;
        endJump(e: EventX): void;
        hit(dx: number, dy: number, speedxy?: number, speedz?: number, addxy?: number, forcetime?: number): void;
        findPath(x: number, y: number, pix?: boolean): void;
        dead(): void;
        remove(): void;
    }
    interface IUnitVO {
        guid: string | number;
        hp: number;
    }
}
declare module rf {
    class Monster extends ActionActor {
        constructor();
        follow(target: ActionActor): void;
    }
}
declare module rf {
    class AttackAction extends ActorAction {
        constructor();
        actionname: string;
        complete: Function;
        thisobj: any;
        check(actor: ActionActor, state: StateModel): boolean;
        doStart(actor: ActionActor, params?: any): void;
        end(event?: EventX): void;
        stop(activeID: StateDefine): void;
    }
}
declare module rf {
    class FollowAction extends ActorAction {
        static posDic: {
            [key: number]: number;
        };
        static keyDic: {
            [key: number]: number;
        };
        constructor();
        target: ActionActor;
        distance: number;
        min_dis: number;
        max_dis: number;
        check(actor: ActionActor, state: StateModel): boolean;
        doStart(actor: ActionActor, params?: any): void;
        turnface(): void;
        follow(): void;
        findPointCanStand(dir: IVector3D, mx: number, my: number, dx: number, dy: number): number[];
        updateposDic(guid: number, x: number, y: number): void;
        stop(activeID: number): void;
    }
}
declare module rf {
    class ForceVector extends Float32Array {
        constructor();
    }
    class HitForceAction extends ActorAction {
        constructor();
        pos0: IVector3D;
        speed0: IVector3D;
        accelerate0: IVector3D;
        starttime: number;
        t1: number;
        pos1: IVector3D;
        speed1: IVector3D;
        accelerate1: IVector3D;
        t2: number;
        pos2: IVector3D;
        t3: number;
        stopXY: boolean;
        static TransformAcc: number;
        static TransformSpeed: number;
        static g: number;
        static AccelerationOfFriction: number;
        static MaxSpeed: number;
        static t_pos: IVector3D;
        static t_speed: IVector3D;
        reset(actor: ActionActor, dx: number, dy: number, speedxy?: number, speedz?: number, addxy?: number, duration?: number, starttime?: number): void;
        doStart(actor: ActionActor, params?: any): void;
        update(now: number, interval: number): void;
        stop(activeID: StateDefine): void;
    }
}
declare module rf {
    class JumpAction extends ActorAction {
        constructor();
        tx: number;
        ty: number;
        len: number;
        h: number;
        doStart(actor: ActionActor, params?: any): void;
    }
}
declare module rf {
    class MoveAction extends ActorAction {
        constructor();
        check(actor: ActionActor, state: StateModel): boolean;
        tx: number;
        ty: number;
        endtime: number;
        autoAnim: boolean;
        duration: number;
        startTime: number;
        fx: number;
        fy: number;
        dx: number;
        dy: number;
        reach: boolean;
        doStart(actor: ActionActor, params?: any): void;
        update(now: number, interval: number): void;
        stop(stateID: number): void;
    }
}
declare module rf {
    class NavigationCityAction extends ActorAction {
        constructor();
    }
}
declare module rf {
    class NavigationLocalAction extends ActorAction {
        astar: AStar;
        constructor();
        tx: number;
        ty: number;
        endpixx: number;
        endpixy: number;
        path: number[][];
        ctx: number;
        cty: number;
        reach: boolean;
        doStart(actor: ActionActor, params?: any): void;
        nextStep(e?: EventX): void;
        stop(activeID: StateDefine): void;
    }
}
declare module rf {
    const enum IUnitAction {
        STAND = 0,
        WALK = 1,
        RUN = 2,
        DEAD = 3,
        BRON = 4,
        BEATEN = 5,
        JUMP = 6,
        RIDE = 7,
        ROAR = 8,
        HOLD = 9,
        ATTACK = 10,
        SKILL = 11
    }
    interface IControlUnit {
        faceto(value: number): any;
        action(value: number): any;
        addWeapon(url: string): any;
        addWing(url: string): any;
    }
    class MeshUnit extends Sprite implements IControlUnit {
        action(value: number): void;
        faceto(value: number): void;
        addWeapon(url: string): void;
        addWing(url: string): void;
    }
    class PakUnit extends Sprite implements IControlUnit {
        action(value: number): void;
        faceto(value: number): void;
        addWeapon(url: string): void;
        addWing(url: string): void;
    }
    class UnitTmp extends Sprite implements IControlUnit {
        unitRender: IControlUnit;
        action(value: number): void;
        faceto(value: number): void;
        addWeapon(url: string): void;
        addWing(url: string): void;
    }
}
declare module rf {
    var mouse_current: DisplayObject;
    interface IMouseElement {
        target: DisplayObject;
        time: number;
        down: number;
        up: number;
        click: number;
        over?: number;
        out?: number;
    }
    interface ITouchlement {
        target: DisplayObject;
        time: number;
        data: IMouseEventData;
    }
    interface IMouseEventData {
        target: DisplayObject;
        time: number;
        identifier: number;
    }
    class Mouse {
        preMouseTime: number;
        perMoveTime: number;
        preTarget: DisplayObject;
        static currentType: MouseEventX;
        mouseElement: {
            [key: number]: IMouseEventData;
        };
        touchElement: {
            [key: number]: ITouchlement;
        };
        eventData: IMouseEventData;
        updateNativeMouse(x: number, y: number): void;
        init(): void;
        onEvent(identifier: number, screenX: number, screenY: number, event: MouseEventX, ctrlKey?: boolean, shiftKey?: boolean, altKey?: boolean, deltaY?: number): void;
        onTouchStart(data: wx.ITouchEventData): void;
        onTouchEnd(data: wx.ITouchEventData): void;
        onTouchMove(data: wx.ITouchEventData): void;
        onMousewheel(event: WheelEvent): void;
    }
}
declare module rf {
    class TrackballControls {
        object: Camera;
        target: IVector3D;
        mouseSitivity: number;
        distance: number;
        lock: boolean;
        up_axis: IVector3D;
        constructor(object: Camera, up_axis?: IVector3D);
        updateSun(): void;
        tdistance: number;
        tweener: ITweener;
        mouseWheelHandler(event: EventX): void;
        mouseDownHandler(event: EventX): void;
        mouseUpHandler(e: EventX): void;
        mouseMoveHandler(e: EventX): void;
        mouseRightDownHandler(event: EventX): void;
        mouseRightMoveHandler(event: EventX): void;
        mouseRightUpHandler(event: EventX): void;
    }
}
declare module rf {
    class Graphics {
        grometrys: IGraphicsGeometry[];
        target: Sprite;
        byte: Float32Array;
        hitArea: HitArea;
        numVertices: number;
        $batchOffset: number;
        private preNumVertices;
        constructor(target: Sprite, variables: {
            [key: string]: {
                size: number;
                offset: number;
            };
        });
        clear(): void;
        end(): void;
        addPoint(geometry: IGraphicsGeometry, pos: number[], noraml: number[], uv: number[], color: number[], locksize: boolean): void;
        drawRect(x: number, y: number, width: number, height: number, color: number, alpha?: number, matrix?: IMatrix, z?: number): IGraphicsGeometry;
        drawCircle(x: number, y: number, radius: number, vo?: IBitmapSourceVO, uiMatrix?: IMatrix, color?: number, alpha?: number, z?: number): IGraphicsGeometry;
        drawTriangle(x: number, y: number, width: number, height: number, color: number, p2y?: number, alpha?: number, matrix?: IMatrix, z?: number): IGraphicsGeometry;
        setSize(width: number, height: number): void;
        drawScale9Bitmap(x: number, y: number, vo: IBitmapSourceVO, rect: Size, matrix?: IMatrix, geometry?: IGraphicsGeometry, color?: number, alpha?: number, z?: number): IGraphicsGeometry;
        drawBitmap(x: number, y: number, vo: IBitmapSourceVO, matrix?: IMatrix, geometry?: IGraphicsGeometry, color?: number, alpha?: number, z?: number, wpercent?: number, hpercent?: number, dir?: boolean): IGraphicsGeometry;
    }
}
declare module rf {
    class NormalRender implements I3DRender {
        target: Sprite;
        constructor(target: Sprite);
        render(camera: Camera, option: IRenderOption): void;
    }
}
declare module rf {
    class SingleRenderer implements I3DRender, IBatchGeometry {
        target: Sprite;
        vertex: VertexInfo;
        vertexBuffer: VertexBuffer3D;
        quadcount: number;
        program: Program3D;
        depth: boolean;
        depthMode: WebGLConst;
        constructor(target: Sprite);
        update(position: number, byte: Float32Array): void;
        render(camera: Camera, option: IRenderOption): void;
        otherParms(c: Context3D, p: Program3D): void;
        createProgram(): Program3D;
    }
}
declare module rf {
    interface IBatchRenderData extends IRecyclable, I3DRender {
        name: string;
        filters: {
            [key: string]: FilterBase;
        };
        shader?: boolean;
        shaderKey: string;
        factorKey: string;
        first?: I3DRender;
        current?: I3DRender;
        program?: Program3D;
        count?: number;
        cull?: number;
        srcFactor?: number;
        dstFactor?: number;
        depthMask?: boolean;
        passCompareMode?: number;
        offset?: number;
        quad?: number;
        triangles?: number;
        vcData?: Float32Array;
        __render_pre?: IBatchRenderData;
        __render_next?: IBatchRenderData;
        __graphics_next?: Sprite;
    }
    class IBatchSourceData {
    }
    const enum FilterConst {
        MATRIX_UI = "MatrixUI_"
    }
    class MatrixUIFilter extends FilterBase {
        static VERTEX: IShaderCode;
        constructor();
    }
    class SuperBatchRenderer implements I3DRender, IBatchGeometry {
        target: Sprite;
        renderData: IBatchRenderData;
        i3DRender: I3DRender;
        currentRenderData: IBatchRenderData;
        invSceneTransfrom: IMatrix3D;
        vertexBuffer: VertexBuffer3D;
        worldTransform: IMatrix3D;
        length: number;
        sources: BitmapSource[];
        changeStatus: DChange;
        depth: boolean;
        depthMode: WebGLConst;
        srcFactor: WebGLConst;
        dstFactor: WebGLConst;
        cull: WebGLConst;
        constructor(target: Sprite);
        render(camera: Camera, option: IRenderOption): void;
        dc(renderData: IBatchRenderData, worldTransform: IMatrix3D): void;
        cleanBatch(): void;
        createNewRenderData(render: Sprite, factorKey: string): IBatchRenderData;
        copyRenderData(data: IBatchRenderData): IBatchRenderData;
        filterGeo(render: Sprite): void;
        toBatch(): void;
        update(position: number, byte: Float32Array): void;
    }
}
declare module rf {
    class PerspectiveMatrix3D extends Float32Array {
        lookAtLH(eye: Point3DW, at: Point3DW, up: Point3DW): void;
        lookAtRH(eye: Point3DW, at: Point3DW, up: Point3DW): void;
        perspectiveOffCenterLH(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void;
        perspectiveLH(width: number, height: number, zNear: number, zFar: number): void;
        perspectiveFieldOfViewLH(fieldOfViewY: number, aspectRatio: number, zNear: number, zFar: number): void;
        orthoOffCenterLH(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void;
        orthoLH(width: number, height: number, zNear: number, zFar: number): void;
        perspectiveOffCenterRH(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void;
        perspectiveRH(width: number, height: number, zNear: number, zFar: number): void;
        perspectiveFieldOfViewRH(fieldOfViewY: number, aspectRatio: number, zNear: number, zFar: number): void;
        orthoOffCenterRH(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void;
        orthoRH(width: number, height: number, zNear: number, zFar: number): void;
    }
}
declare module gltfloader {
    type ProgressCallback = (xhr: XMLHttpRequest) => void;
    type XMLHttpRequestResponse = any;
    class FileLoader {
        manager: LoadingManager;
        path: string | undefined;
        responseType: XMLHttpRequestResponseType;
        withCredentials: boolean;
        mimeType: string;
        requestHeaders: {
            [k: string]: string;
        };
        private runningRequests;
        constructor(manager: LoadingManager);
        load(url: string, onProgress?: ProgressCallback): Promise<XMLHttpRequestResponse>;
        setRequestHeader(key: string, value: string): this;
    }
}
declare module gltfloader {
    const BINARY_HEADER_MAGIC = "glTF";
    class GLTFBinaryData {
        json: string;
        binaryChunk: Uint8Array;
        constructor(data: ArrayBuffer);
    }
}
declare module gltfloader {
    const GLTF_COMPONENT_TYPE_ARRAYS: {
        [index: number]: any;
    };
    const GLTF_ELEMENTS_PER_TYPE: {
        [index: string]: number;
    };
    class GltfAsset {
        gltf: GlTf;
        glbData: GLTFBinaryData | undefined;
        bufferData: BufferData;
        imageData: ImageData;
        "version": string;
        constructor(gltf: GlTf, baseUri: string, glbData: GLTFBinaryData | undefined, manager?: LoadingManager);
        bufferViewData(index: GlTfId): Promise<Uint8Array>;
        accessorTypedData(index: GlTfId): Promise<any>;
        accessorData(index: GlTfId): Promise<Uint8Array>;
        preFetchAll(): Promise<void[][]>;
    }
    class BufferData {
        asset: GltfAsset;
        baseUri: string;
        manager: LoadingManager;
        loader: FileLoader;
        private bufferCache;
        constructor(asset: GltfAsset, baseUri: string, manager: LoadingManager);
        get(index: GlTfId): Promise<Uint8Array>;
        preFetchAll(): Promise<void[]>;
    }
    class ImageData {
        asset: GltfAsset;
        baseUri: string;
        manager: LoadingManager;
        crossOrigin: string;
        private imageCache;
        constructor(asset: GltfAsset, baseUri: string, manager: LoadingManager);
        get(index: GlTfId): Promise<HTMLImageElement>;
        preFetchAll(): Promise<void[]>;
    }
    function resolveURL(url: string, path: string): string;
}
declare module gltfloader {
    class GltfLoader {
        private manager;
        constructor(manager?: LoadingManager);
        load(url: string, onProgress?: (xhr: XMLHttpRequest) => void): Promise<GltfAsset>;
        loadFromFiles(fileMap: any): Promise<GltfAsset>;
        private parse;
    }
}
declare module gltfloader {
    type GlTfId = number;
    interface AccessorSparseIndices {
        "bufferView": GlTfId;
        "byteOffset"?: number;
        "componentType": 5121 | 5123 | 5125 | number;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface AccessorSparseValues {
        "bufferView": GlTfId;
        "byteOffset"?: number;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface AccessorSparse {
        "count": number;
        "indices": AccessorSparseIndices;
        "values": AccessorSparseValues;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface Accessor {
        "bufferView"?: GlTfId;
        "byteOffset"?: number;
        "componentType": 5120 | 5121 | 5122 | 5123 | 5125 | 5126 | number;
        "normalized"?: boolean;
        "count": number;
        "type": "SCALAR" | "VEC2" | "VEC3" | "VEC4" | "MAT2" | "MAT3" | "MAT4" | string;
        "max"?: number[];
        "min"?: number[];
        "sparse"?: AccessorSparse;
        "name"?: any;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface AnimationChannelTarget {
        "node"?: GlTfId;
        "path": "translation" | "rotation" | "scale" | "weights" | string;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface AnimationChannel {
        "sampler": GlTfId;
        "target": AnimationChannelTarget;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface AnimationSampler {
        "input": GlTfId;
        "interpolation"?: "LINEAR" | "STEP" | "CUBICSPLINE" | string;
        "output": GlTfId;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface Animation {
        "channels": AnimationChannel[];
        "samplers": AnimationSampler[];
        "name"?: any;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface Asset {
        "copyright"?: string;
        "generator"?: string;
        "version": string;
        "minVersion"?: string;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface Buffer {
        "uri"?: string;
        "byteLength": number;
        "name"?: any;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface BufferView {
        "buffer": GlTfId;
        "byteOffset"?: number;
        "byteLength": number;
        "byteStride"?: number;
        "target"?: 34962 | 34963 | number;
        "name"?: any;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface CameraOrthographic {
        "xmag": number;
        "ymag": number;
        "zfar": number;
        "znear": number;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface CameraPerspective {
        "aspectRatio"?: number;
        "yfov": number;
        "zfar"?: number;
        "znear": number;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface Camera {
        "orthographic"?: CameraOrthographic;
        "perspective"?: CameraPerspective;
        "type": "perspective" | "orthographic" | string;
        "name"?: any;
        "extensions"?: any;
        "extras"?: any;
        [k: string]: any;
    }
    interface Image {
        "uri"?: string;
        "mimeType"?: "image/jpeg" | "image/png" | string;
        "bufferView"?: GlTfId;
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface TextureInfo {
        'index': GlTfId;
        'texCoord'?: number;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface MaterialPbrMetallicRoughness {
        'baseColorFactor'?: number[];
        'baseColorTexture'?: TextureInfo;
        'metallicFactor'?: number;
        'roughnessFactor'?: number;
        'metallicRoughnessTexture'?: TextureInfo;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface MaterialNormalTextureInfo {
        'index'?: any;
        'texCoord'?: any;
        'scale'?: number;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface MaterialOcclusionTextureInfo {
        'index'?: any;
        'texCoord'?: any;
        'strength'?: number;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface Material {
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        'pbrMetallicRoughness'?: MaterialPbrMetallicRoughness;
        'normalTexture'?: MaterialNormalTextureInfo;
        'occlusionTexture'?: MaterialOcclusionTextureInfo;
        'emissiveTexture'?: TextureInfo;
        'emissiveFactor'?: number[];
        'alphaMode'?: 'OPAQUE' | 'MASK' | 'BLEND' | string;
        'alphaCutoff'?: number;
        'doubleSided'?: boolean;
        [k: string]: any;
    }
    interface MeshPrimitive {
        'attributes': {
            [k: string]: GlTfId;
        };
        'indices'?: GlTfId;
        'material'?: GlTfId;
        'mode'?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | number;
        'targets'?: {
            [k: string]: GlTfId;
        }[];
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface Mesh {
        'primitives': MeshPrimitive[];
        'weights'?: number[];
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface Node {
        'camera'?: GlTfId;
        'children'?: GlTfId[];
        'skin'?: GlTfId;
        'matrix'?: number[];
        'mesh'?: GlTfId;
        'rotation'?: number[];
        'scale'?: number[];
        'translation'?: number[];
        'weights'?: number[];
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface Sampler {
        'magFilter'?: 9728 | 9729 | number;
        'minFilter'?: 9728 | 9729 | 9984 | 9985 | 9986 | 9987 | number;
        'wrapS'?: 33071 | 33648 | 10497 | number;
        'wrapT'?: 33071 | 33648 | 10497 | number;
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface Scene {
        'nodes'?: GlTfId[];
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface Skin {
        'inverseBindMatrices'?: GlTfId;
        'skeleton'?: GlTfId;
        'joints': GlTfId[];
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface Texture {
        'sampler'?: GlTfId;
        'source'?: GlTfId;
        'name'?: any;
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
    interface GlTf {
        'extensionsUsed'?: string[];
        'extensionsRequired'?: string[];
        'accessors'?: Accessor[];
        'animations'?: Animation[];
        'asset': Asset;
        'buffers'?: Buffer[];
        'bufferViews'?: BufferView[];
        'cameras'?: Camera[];
        'images'?: Image[];
        'materials'?: Material[];
        'meshes'?: Mesh[];
        'nodes'?: Node[];
        'samplers'?: Sampler[];
        'scene'?: GlTfId;
        'scenes'?: Scene[];
        'skins'?: Skin[];
        'textures'?: Texture[];
        'extensions'?: any;
        'extras'?: any;
        [k: string]: any;
    }
}
declare module rf {
    var VERTXT_ATTRIBUTES: string[][];
    var VERTXT_ATTRIBUTES_MAP: {
        [key: string]: string;
    };
    class GLTf2MelonLoader {
        gltfurl: string;
        asset: gltfloader.GltfAsset;
        gltf: gltfloader.GlTf;
        bones: {
            [key: number]: IBone;
        };
        materials: {
            [key: number]: IMaterialData;
        };
        meshdatas: {
            [key: number]: IMeshData;
        };
        skelondatas: {
            [key: number]: ISkeletonData;
        };
        meshAttrBuffers: {
            [key: number]: any;
        };
        load(gltfname?: string): Promise<void>;
        initBones(): Promise<void>;
        loadMeshes(): Promise<void>;
        loadMesh(meshdef: gltfloader.Mesh, i: number): Promise<void>;
        initSkeletonData(): void;
        initSkeletonMeshData(): void;
        loadMaterial(): void;
        parseNode(): void;
    }
}
declare module gltfloader {
    class LoaderUtils {
        static decodeText(array: ArrayLike<number>): string;
        static extractUrlBase(url: string): string;
    }
}
declare module gltfloader {
    type OnStartOnProgressCallback = ((url: string, itemsLoaded: number, itemsTotal: number) => void) | undefined;
    class LoadingManager {
        urlModifier: ((url: string) => string) | undefined;
        onStart: OnStartOnProgressCallback;
        onProgress: OnStartOnProgressCallback;
        onLoad: (() => void) | undefined;
        onError: ((url: string) => void) | undefined;
        private isLoading;
        private itemsLoaded;
        private itemsTotal;
        itemStart(url: string): void;
        itemEnd(url: string): void;
        itemError(url: string): void;
        resolveURL(url: string): string;
    }
}
declare module rf {
    var pass_vertexBuffer: VertexBuffer3D;
    var pass_vertexInfo: VertexInfo;
    var pass_temp_pos: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    var pass_temp_uv: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    var pass_temp_transform: Float32Array;
    function pass_init_mesh(): void;
    function pass_update_mesh(pos?: Size, uv?: Size): void;
    var pass_vertex_code: string;
    var pass_fragment_code: string;
    function pass_dc(tex: Texture, program: Program3D, vertex: VertexBuffer3D, transfrom?: IMatrix3D, quadcount?: number, index?: IndexBuffer3D): void;
    function pass_normal_render(tex: Texture, pos?: Size, uv?: Size, transfrom?: IMatrix3D): void;
    function pass_blur_render2(tex: Texture, blurX: number, blurY: number, pos?: Size, uv?: Size, transfrom?: IMatrix3D): void;
    function pass_outline_render(tex: Texture, pos?: Size, uv?: Size, transfrom?: IMatrix3D): void;
}
declare module rf {
    interface ISkeletonRenderData {
        skeleton: Skeleton;
        matrices: Float32Array;
    }
    class Skeleton extends MiniDispatcher {
        rootBone: IBone;
        defaultMatrices: Float32Array;
        vertex: VertexBuffer3D;
        boneCount: number;
        animations: {
            [key: string]: ISkeletonAnimationData;
        };
        id: string;
        size: number;
        boneTransform: {
            [key: string]: IMatrix3D;
        };
        constructor(config: ISkeletonData, id: string);
        initAnimationData(anim: ISkeletonAnimationData): void;
        createAnimation(): Recyclable<SkeletonAnimation>;
        getMatricesData(anim: ISkeletonAnimationData, frame: number): Float32Array;
        loadAnimationComplete(e: EventX): void;
        mediumpCalcA: ISkeletonCalcTarget;
        mediumpCalcB: ISkeletonCalcTarget;
        tempScale: Float32Array;
        getMediumpMatricesData(anim: SkeletonAnimation, frame: number, n: number, boneTransform: {
            [key: string]: IMatrix3D;
        }, buffer: ArrayBuffer, bonepq: {
            [key: string]: ISKeletonBonePQ;
        }): void;
        mixTransform(am: IMatrix3D, bm: IMatrix3D, n: number, bonepq: ISKeletonBonePQ, matrix?: IMatrix3D): void;
        preBonematrix: {
            [key: string]: Float32Array;
        };
        updateBone(bone: IBone, frames: {
            [key: string]: Float32Array;
        }, frame: number, nextframes: {
            [key: string]: Float32Array;
        }, nextFrame: number, n: number, boneTransform: {
            [key: string]: IMatrix3D;
        }, bonepq: {
            [key: string]: ISKeletonBonePQ;
        }): void;
        updateMatrices(bone: IBone, buffer: ArrayBuffer): void;
    }
    var skeleton_test_n: number;
    interface ISkeletonAnimationRuntime {
        starttime: number;
        data: ISkeletonAnimationData;
        frame: number;
        stoptime?: number;
    }
    interface ISKeletonBonePQ {
        p: IVector3D;
        q: IVector3D;
    }
    class SkeletonAnimation extends MiniDispatcher implements ISkeletonRenderData {
        skeleton: Skeleton;
        matrices: Float32Array;
        tm: ITimeMixer;
        animation: ISkeletonAnimationRuntime;
        preAnimation: ISkeletonAnimationRuntime;
        currentFrame: number;
        totalFrame: number;
        lockFrame: number;
        currentBoneTransfrom: {
            [key: string]: IMatrix3D;
        };
        currentBonePQ: {
            [key: string]: ISKeletonBonePQ;
        };
        mediump: boolean;
        play(animationData: ISkeletonAnimationData, tm: ITimeMixer, mediump?: boolean): void;
        preUploadTime: number;
        preFrame: number;
        uploadContext(camera: Camera, mesh: Mesh, program: Program3D, now: number, interval: number): void;
    }
    const enum FilterConst {
        SKELETON = "skeleton_"
    }
    class SkeletonFilter extends FilterBase {
        static VERTEX: IShaderCode;
        static FRAGMENT: IShaderCode;
        constructor();
    }
}
declare module rf {
    class Mesh extends SceneObject {
        scene: Scene;
        skAnim: SkeletonAnimation;
        skData: ISkeletonRenderData;
        outLineMaterial: OutLineMaterial;
        constructor(variables?: {
            [key: string]: IVariable;
        });
        updateSceneTransform(updateStatus?: number, parentSceneTransform?: IMatrix3D): number;
        renderShadow(sun: Light, p: Program3D, c: Context3D, worldTranform: IMatrix3D, now: number, interval: number): void;
        renderOutLine(camera: Camera, option: IRenderOption): void;
        render(camera: Camera, option: IRenderOption): void;
        onRecycle(): void;
    }
    class KFMMesh extends Mesh {
        id: string;
        kfm: ISkeletonMeshData;
        defaultAnim: string;
        currentAnim: string;
        mediump: boolean;
        constructor(material?: Material, variables?: {
            [key: string]: IVariable;
        });
        load(url: string): void;
        loadCompelte(e: EventX): void;
        setKFM(kfm: ISkeletonMeshData): void;
        removeFromStage(): void;
        calHitarea(): HitArea;
        readonly nameLabelY: number;
        createMaterial(): Material;
        playAnim(name: string, refresh?: boolean): void;
        skeletonAnimLoadComplete(e: EventX): void;
        animationLoadCompleteHandler(e: EventX): void;
        onRecycle(): void;
        boneContainer: {
            [key: string]: SceneObject;
        };
        bindMesh(skeletonName: string, mesh: Sprite): void;
        skinAnimChangeHandler(event: EventX): void;
    }
}
declare module rf {
    var particle_Perfix: string;
    var particle_Texture_Perfix: string;
    var particle_test_now: number;
    class ParticleGeometry extends GeometryBase {
        followData: Float32Array;
        initRuntime(data: IParticleData): void;
        updateFollow(particle: Particle): void;
        uploadContext(camera: Camera, mesh: Particle, program: Program3D, now: number, interval: number): IMatrix3D;
    }
    class Particle extends Mesh {
        url: string;
        data: IParticleData;
        sk_st: number;
        now: number;
        followMatrix3D: IMatrix3D;
        followPos: IVector3D;
        followQua: IVector3D;
        followSca: IVector3D;
        updateSceneTransform(updateStatus: number, parentSceneTransform?: IMatrix3D): number;
        load(url: string): void;
        loadCompelte(e: EventX): void;
        play(data: IParticleData): void;
    }
    const enum P_PARTICLE {
        TIME = "p_time",
        SCALE = "p_scale",
        ROTATION = "p_init_rotation",
        VROTATION = "p_vrotation",
        ROTATION_HEAD = "p_rotation2head",
        POSITION = "p_position",
        FOLLOW = "p_follow",
        VELOCITY = "p_velocity",
        ACCELERITION = "p_accelerition",
        BILLBOARD = "p_billboard",
        SEGMENT_COLOR = "p_segment_color",
        SPRITE_SHEET = "p_sprite_sheet_anim",
        NOW = "now"
    }
    class ParticleMaterial extends Material {
        getTextUrl(data: ITextureData): string;
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
        createProgram(mesh: Mesh): Recyclable<Program3D>;
        timeNode(info: IParticleTimeNodeInfo): string;
        scaleNode(info: IParticleScaleNodeInfo): string;
        followNode(info: IParticleFollowNodeInfo): string;
        segmentColorNode(info: IParticleSegmentColorNodeInfo): string;
        spriteSheetNode(info: IParticleSpriteSheetAnimNodeInfo): string;
    }
    class TestPartilce extends Particle {
        moveTest(tweener?: ITweener): void;
    }
}
declare module rf {
    class Raycaster {
        constructor(far?: number, near?: number);
        ray: Ray;
        near: number;
        far: number;
        setFromCamera(mousex: number, mousey: number, camera: Camera): void;
        intersectObject(object: SceneObject, intersects: IIntersectInfo[], recursive?: boolean): void;
        intersectObjects(arr: DisplayObject[], recursive?: boolean, intersects?: IIntersectInfo[]): IIntersectInfo[];
        static disSort(a: IIntersectInfo, b: IIntersectInfo): number;
    }
    interface IIntersectInfo {
        obj: SceneObject;
        distance: number;
        point: IVector3D;
    }
}
declare module rf {
    var skill_Perfix: string;
    var skill_event_define: {
        [key: string]: {
            new (): EventFilter;
        };
    };
    function skill_setup(): void;
    interface ISkillTarget {
        sk_st?: number;
    }
    class Skill extends MapObject implements ITickable {
        data: ISkillData;
        lines: SkillLine[];
        follow: SceneObject;
        sk_st: number;
        load(url: string): void;
        loadCompelte(e: EventX): void;
        play(data: ISkillData): void;
        reset(): void;
        update(now: number, interval: number): void;
    }
    class SkillLine extends MiniDispatcher implements ITickable {
        skill: Skill;
        data: ISkillLineData;
        closed: boolean;
        runtimes: SceneObject[];
        tm: ITimeMixer;
        loop: number;
        play(data: ISkillLineData, skill: Skill): void;
        addEvents(target: SceneObject, events: ISkillEvent[]): void;
        update(now: number, interval: number): boolean;
        reset(now?: number): void;
        onRecycle(): void;
    }
    class SkillMesh extends KFMMesh {
    }
    class SkillParticle extends Particle {
    }
    class SkillSkill extends Skill {
    }
    class TestSkill extends Skill {
        play(data: ISkillData): void;
        update(now: number, interval: number): void;
    }
}
declare module rf {
    function mesh_cut(mesh: Mesh): CutMesh;
    function mesh_fre_alpha_cut(mesh: Mesh): CutMesh;
    class CutMesh extends Mesh {
        render(camera: Camera, option: IRenderOption): void;
    }
}
declare module rf {
    class SelectMesh extends Mesh {
        static create(mesh: Mesh): void;
    }
}
declare module rf {
    class EventFilter extends FilterBase implements ITickable {
        target: Sprite;
        skillEvent: ISkillEvent;
        currentEvent: ISkillEvent;
        needUpdate: boolean;
        pro: any;
        starttime: number;
        setEvent(event: ISkillEvent, tick?: boolean): void;
        getCurrentEvent(now: number, skillEvent?: ISkillEvent): ISkillEvent;
        reset(): void;
        update(now: number, interval: number): void;
        updatepro(pro: any): void;
        end(): void;
    }
}
declare module rf {
    class ColorTransformFilter extends EventFilter {
        static FRAGMENT: IShaderCode;
        constructor();
        pro: {
            mr: number;
            mg: number;
            mb: number;
            ma: number;
            ar: number;
            ag: number;
            ab: number;
            aa: number;
        };
        mul: IVector3D;
        add: IVector3D;
        updatepro(pro: {
            mr: number;
            mg: number;
            mb: number;
            ma: number;
            ar: number;
            ag: number;
            ab: number;
            aa: number;
        }): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite): void;
        alphaTo(from: number, to: number, durtion: number): void;
        end(): void;
    }
}
declare module rf {
    interface ITexFilterData {
        tex: string;
        color: number;
    }
    class TexFilter extends EventFilter {
        source: BitmapSource;
        texData: ITexFilterData;
        color: IVector3D;
        constructor(target: Sprite, type: string);
        setData(texData: ITexFilterData): void;
        textureLoadComplete(source: BitmapSource): void;
    }
}
declare module rf {
    class DiffFilter extends FilterBase {
        static VERTEX: IShaderCode;
        static FRAGMENT: IShaderCode;
        constructor();
    }
    class UIDiffFilter extends FilterBase {
        static VERTEX: IShaderCode;
        static FRAGMENT: IShaderCode;
        constructor();
    }
    class FillFilter extends FilterBase {
        static FRAGMENT: IShaderCode;
        color: IVector3D;
        constructor(color: number, alpha: number);
        setData(color: number, alpha: number): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
}
declare module rf {
    const enum FilterConst {
        FRESNEL = "fresnel_",
        FRESNEL_ALPHA = "fresnelAlpha_"
    }
    class FresnelFilter extends EventFilter {
        static VERTEX: IShaderCode;
        static FRAGMENT: IShaderCode;
        constructor(type?: FilterConst);
        eye: IVector3D;
        pro: {
            fre: number;
        };
        updatepro(pro: {
            fre: number;
        }): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
        tweenTo(from: number, to: number, durtion: number): void;
        end(): void;
    }
    class FresnelAlphaFilter extends FresnelFilter {
        static VERTEX: IShaderCode;
        static FRAGMENT: IShaderCode;
        constructor(value: number);
        color: IVector3D;
    }
}
declare module rf {
    const enum FilterConst {
        LIU_GUANG = "liuguang_"
    }
    interface ILiuGuangData extends ITexFilterData {
        speed: number;
        scale: number;
        alpha: number;
    }
    class LiuguangFilter extends TexFilter {
        constructor(target: Sprite, data: ILiuGuangData);
        speed: number;
        texData: ILiuGuangData;
        v: IVector3D;
        setData(setting: ILiuGuangData): void;
        textureLoadComplete(source: BitmapSource): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
}
declare module rf {
    class PosFilter extends EventFilter {
        constructor();
        updatepro(pro: {
            x: number;
            y: number;
            z: number;
        }): void;
    }
    class ScaleFilter extends EventFilter {
        constructor();
        updatepro(pro: {
            x: number;
            y: number;
            z: number;
        }): void;
    }
    class RotFilter extends EventFilter {
        constructor();
        updatepro(pro: {
            x: number;
            y: number;
            z: number;
        }): void;
    }
}
declare module rf {
    const enum FilterConst {
        SHADOW = "shadow_"
    }
    class ShadowFilter extends TexFilter {
        target: SceneObject;
        constructor(target: SceneObject);
        v: IVector3D;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
}
declare module rf {
    const enum FilterConst {
        SUN = "sun_"
    }
    class SunFilter extends FilterBase {
        static VERTEX: IShaderCode;
        static FROGMENT: IShaderCode;
        constructor();
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
}
declare module rf {
    class TexChannelFilter extends TexFilter {
        static VERTEX: IShaderCode;
        static FRAGMENT: IShaderCode;
        constructor();
        setEvent(event: ISkillEvent, tick?: boolean): void;
        uv: IVector3D;
        pro: {
            ou: number;
            ov: number;
            su: number;
            sv: number;
        };
        updatepro(pro: {
            ou: number;
            ov: number;
            su: number;
            sv: number;
        }): void;
        textureLoadComplete(source: BitmapSource): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
}
declare module rf {
    class UVAnimFilter extends EventFilter {
        static VERTEX: IShaderCode;
        constructor();
        uv: IVector3D;
        pro: {
            ou: number;
            ov: number;
            su: number;
            sv: number;
        };
        updatepro(pro: {
            ou: number;
            ov: number;
            su: number;
            sv: number;
        }): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
}
declare module rf {
    class BaseMaterial extends Material {
        filters: {
            [key: string]: FilterBase;
        };
        shader?: boolean;
    }
    class ColorMaterial extends Material {
        constructor(color?: number, alpha?: number);
        color: number;
        alpha: number;
        change: boolean;
        setColor(color: number, alpha: number): void;
        setData(data: IMaterialData): void;
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
        initFilters(mesh: Mesh): void;
    }
}
declare module rf {
    const enum FilterConst {
        OUT_LINE = "outline_"
    }
    class OutLineFilter extends FilterBase {
        static VERTEX: IShaderCode;
        constructor();
        alpha: number;
        setData(v: number): void;
        setProgramConstants(context: Context3D, program: Program3D, target?: Sprite, camera?: Camera): void;
    }
    class OutLineMaterial extends BaseMaterial {
        filters: {
            [key: string]: FilterBase;
        };
        shader?: boolean;
        constructor(color: number, alpha: number, skeleton?: boolean);
        setColor(color: number, alpha: number): void;
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
    }
}
declare module rf {
    class StandardMaterial extends Material {
        uploadContext(camera: Camera, mesh: Mesh, now: number, interval: number): boolean;
        createProgram(mesh: Mesh): Program3D;
    }
}
declare module rf {
    class SnakeNode extends Sprite {
        constructor();
        bx: number;
        by: number;
        next: SnakeNode;
        record: ISnakeRecord;
        draw(size?: number, color?: number): void;
        update(): boolean;
    }
    class SnakeTop extends SnakeNode {
        draw(size?: number, color?: number): void;
    }
    interface ISnakeRecord {
        x: number;
        y: number;
        next: ISnakeRecord;
        pre: ISnakeRecord;
    }
    class Snake extends Sprite implements ITickable {
        top: SnakeTop;
        end: SnakeNode;
        nodeLen: number;
        recordFirst: ISnakeRecord;
        recordEnd: ISnakeRecord;
        recordLen: number;
        dx: number;
        dy: number;
        direction: number;
        line: Sprite;
        constructor();
        addNode(): void;
        moveDirection(direction?: number): void;
        record(x: number, y: number): void;
        update(now: number, interval: number): void;
    }
}
