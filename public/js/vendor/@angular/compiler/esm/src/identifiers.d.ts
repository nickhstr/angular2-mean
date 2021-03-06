import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
export declare class Identifiers {
    static ViewUtils: CompileIdentifierMetadata;
    static AppView: CompileIdentifierMetadata;
    static DebugAppView: CompileIdentifierMetadata;
    static AppElement: CompileIdentifierMetadata;
    static ElementRef: CompileIdentifierMetadata;
    static ViewContainerRef: CompileIdentifierMetadata;
    static ChangeDetectorRef: CompileIdentifierMetadata;
    static RenderComponentType: CompileIdentifierMetadata;
    static QueryList: CompileIdentifierMetadata;
    static TemplateRef: CompileIdentifierMetadata;
    static TemplateRef_: CompileIdentifierMetadata;
    static ValueUnwrapper: CompileIdentifierMetadata;
    static Injector: CompileIdentifierMetadata;
    static ViewEncapsulation: CompileIdentifierMetadata;
    static ViewType: CompileIdentifierMetadata;
    static ChangeDetectionStrategy: CompileIdentifierMetadata;
    static StaticNodeDebugInfo: CompileIdentifierMetadata;
    static DebugContext: CompileIdentifierMetadata;
    static Renderer: CompileIdentifierMetadata;
    static SimpleChange: CompileIdentifierMetadata;
    static uninitialized: CompileIdentifierMetadata;
    static ChangeDetectorState: CompileIdentifierMetadata;
    static checkBinding: CompileIdentifierMetadata;
    static flattenNestedViewRenderNodes: CompileIdentifierMetadata;
    static devModeEqual: CompileIdentifierMetadata;
    static interpolate: CompileIdentifierMetadata;
    static castByValue: CompileIdentifierMetadata;
    static EMPTY_ARRAY: CompileIdentifierMetadata;
    static EMPTY_MAP: CompileIdentifierMetadata;
    static pureProxies: CompileIdentifierMetadata[];
    static SecurityContext: CompileIdentifierMetadata;
}
export declare function identifierToken(identifier: CompileIdentifierMetadata): CompileTokenMetadata;
