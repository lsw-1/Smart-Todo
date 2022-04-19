import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (34a0b35)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,SVG,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"J0Kr_8YOD":{"hover":true},"rr5wmjO28":{"hover":true}};const cycleOrder=["J0Kr_8YOD","rr5wmjO28"];const variantClassNames={"J0Kr_8YOD":"framer-v-18fls5","rr5wmjO28":"framer-v-1iop3tk"};const humanReadableVariantMap={"WalletConnect":"J0Kr_8YOD","MetaMask":"rr5wmjO28"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style:externalStyle={},className,width,height,layoutId,variant:outerVariant="J0Kr_8YOD",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"J0Kr_8YOD",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const variantProps=React.useMemo(()=>({"rr5wmjO28":{"J0Kr_8YOD":{"data-framer-name":"MetaMask","__contentWrapperStyle":{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"}},"CTJungc8N":{"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"62\" height=\"38\"><svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"position:absolute;width:62px;height:38px;overflow:visible;display:block;transform:translate(0px, 0px)\"><path d=\"M 12.697 7.447 C 22.805 -2.389 39.195 -2.389 49.303 7.447 L 50.519 8.631 C 50.762 8.865 50.898 9.186 50.898 9.522 C 50.898 9.857 50.762 10.178 50.519 10.412 L 46.358 14.462 C 46.103 14.708 45.698 14.708 45.443 14.462 L 43.768 12.833 C 36.717 5.971 25.283 5.971 18.232 12.833 L 16.439 14.577 C 16.184 14.823 15.778 14.823 15.524 14.577 L 11.362 10.528 C 11.12 10.294 10.983 9.973 10.983 9.637 C 10.983 9.302 11.12 8.98 11.362 8.747 L 12.697 7.447 Z M 57.909 15.822 L 61.613 19.427 C 61.855 19.66 61.992 19.982 61.992 20.317 C 61.992 20.653 61.855 20.974 61.613 21.207 L 44.912 37.46 C 44.407 37.951 43.588 37.951 43.082 37.46 L 31.229 25.925 C 31.102 25.802 30.899 25.802 30.771 25.925 L 18.918 37.46 C 18.413 37.952 17.593 37.952 17.088 37.46 L 0.387 21.207 C 0.145 20.974 0.008 20.653 0.008 20.317 C 0.008 19.981 0.145 19.66 0.387 19.426 L 4.091 15.822 C 4.596 15.33 5.415 15.33 5.921 15.822 L 17.774 27.357 C 17.902 27.48 18.104 27.48 18.232 27.357 L 30.084 15.822 C 30.59 15.331 31.409 15.33 31.915 15.822 L 43.768 27.357 C 43.896 27.48 44.098 27.48 44.226 27.357 L 56.079 15.822 C 56.585 15.331 57.404 15.331 57.909 15.822 Z\" fill=\"rgb(59,153,252)\"></path></svg></svg>","svgContentId":1818977465}},"rr5wmjO28-hover":{"CTJungc8N":{"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"62\" height=\"38\"><svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"position:absolute;width:62px;height:38px;overflow:visible;display:block;transform:translate(0px, 0px)\"><path d=\"M 12.697 7.447 C 22.805 -2.389 39.195 -2.389 49.303 7.447 L 50.519 8.631 C 50.762 8.865 50.898 9.186 50.898 9.522 C 50.898 9.857 50.762 10.178 50.519 10.412 L 46.358 14.462 C 46.103 14.708 45.698 14.708 45.443 14.462 L 43.768 12.833 C 36.717 5.971 25.283 5.971 18.232 12.833 L 16.439 14.577 C 16.184 14.823 15.778 14.823 15.524 14.577 L 11.362 10.528 C 11.12 10.294 10.983 9.973 10.983 9.637 C 10.983 9.302 11.12 8.98 11.362 8.747 L 12.697 7.447 Z M 57.909 15.822 L 61.613 19.427 C 61.855 19.66 61.992 19.982 61.992 20.317 C 61.992 20.653 61.855 20.974 61.613 21.207 L 44.912 37.46 C 44.407 37.951 43.588 37.951 43.082 37.46 L 31.229 25.925 C 31.102 25.802 30.899 25.802 30.771 25.925 L 18.918 37.46 C 18.413 37.952 17.593 37.952 17.088 37.46 L 0.387 21.207 C 0.145 20.974 0.008 20.653 0.008 20.317 C 0.008 19.981 0.145 19.66 0.387 19.426 L 4.091 15.822 C 4.596 15.33 5.415 15.33 5.921 15.822 L 17.774 27.357 C 17.902 27.48 18.104 27.48 18.232 27.357 L 30.084 15.822 C 30.59 15.331 31.409 15.33 31.915 15.822 L 43.768 27.357 C 43.896 27.48 44.098 27.48 44.226 27.357 L 56.079 15.822 C 56.585 15.331 57.404 15.331 57.909 15.822 Z\" fill=\"rgb(59,153,252)\"></path></svg></svg>","svgContentId":1818977465}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="rr5wmjO28")return true;return false;};const isDisplayed2=()=>{if(baseVariant==="rr5wmjO28")return false;return true;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-kliIb",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsxs(Stack,{...restProps,layoutId:"J0Kr_8YOD",className:cx("framer-18fls5",className),style:{"borderBottomLeftRadius":18,"borderBottomRightRadius":18,"borderTopRightRadius":18,"borderTopLeftRadius":18,"backgroundColor":"rgb(255, 255, 255)",...style},direction:"vertical",distribution:"center",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"25px 13px 25px 13px"},center:false,"data-framer-name":"WalletConnect",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("J0Kr_8YOD"),variants:{"J0Kr_8YOD-hover":{"backgroundColor":"rgb(222, 222, 222)"},"rr5wmjO28-hover":{"backgroundColor":"rgb(222, 222, 222)"}},children:[isDisplayed1()&&/*#__PURE__*/ _jsx(SVG,{style:{},withExternalLayout:true,intrinsicHeight:33,intrinsicWidth:172,layoutId:"Gv8SHz7pH",className:"framer-fyhet1",fill:"black","data-framer-name":"mm_logo",svg:"<svg width=\"172\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M151.256 16.64c-.884-.583-1.858-.998-2.78-1.516-.598-.337-1.235-.635-1.754-1.063-.884-.725-.702-2.15.221-2.772 1.325-.882 3.52-.39 3.754 1.412 0 .039.039.065.078.065h2.001c.052 0 .091-.04.078-.091-.104-1.244-.585-2.28-1.468-2.941-.845-.635-1.806-.972-2.833-.972-5.287 0-5.768 5.585-2.923 7.347.325.207 3.118 1.606 4.106 2.215.987.61 1.299 1.724.87 2.605-.39.803-1.403 1.36-2.416 1.296-1.105-.065-1.962-.661-2.261-1.594a2.82 2.82 0 0 1-.078-.635.084.084 0 0 0-.078-.078h-2.169c-.039 0-.078.04-.078.078 0 1.568.39 2.436 1.455 3.227 1 .751 2.091 1.062 3.222 1.062 2.962 0 4.495-1.672 4.806-3.408.273-1.697-.233-3.226-1.753-4.237ZM57.057 9.047h-2.014a.088.088 0 0 0-.078.052l-1.78 5.857a.081.081 0 0 1-.155 0l-1.78-5.857c-.013-.04-.04-.052-.078-.052h-3.313a.084.084 0 0 0-.078.078v14.953c0 .039.04.078.078.078h2.17c.039 0 .078-.04.078-.078V12.714c0-.09.13-.104.156-.026l1.792 5.896.13.414c.013.04.04.052.078.052h1.663a.088.088 0 0 0 .078-.052l.13-.414 1.793-5.896c.026-.09.156-.065.156.026v11.364c0 .039.039.078.078.078h2.17c.038 0 .077-.04.077-.078V9.125a.083.083 0 0 0-.078-.078h-1.273Zm60.98 0a.088.088 0 0 0-.078.052l-1.779 5.857a.081.081 0 0 1-.156 0l-1.78-5.857c-.013-.04-.039-.052-.078-.052h-3.3a.084.084 0 0 0-.078.078v14.953c0 .039.039.078.078.078h2.17c.039 0 .078-.04.078-.078V12.714c0-.09.13-.104.156-.026l1.792 5.896.13.414c.013.04.039.052.078.052h1.663a.088.088 0 0 0 .078-.052l.13-.414 1.793-5.896c.026-.09.156-.065.156.026v11.364c0 .039.039.078.078.078h2.169c.039 0 .078-.04.078-.078V9.125a.083.083 0 0 0-.078-.078h-3.3Zm-27.983 0h-10.25a.084.084 0 0 0-.078.078v1.866c0 .038.04.077.078.077h3.963v13.01c0 .039.038.078.078.078h2.169c.039 0 .078-.04.078-.078v-13.01h3.962a.084.084 0 0 0 .078-.077V9.125c0-.04-.026-.078-.078-.078Zm12.797 15.108h1.974a.082.082 0 0 0 .078-.103l-4.079-15.005c-.013-.04-.039-.052-.078-.052h-2.832a.088.088 0 0 0-.078.052l-4.08 15.005a.084.084 0 0 0 .079.103h1.975a.088.088 0 0 0 .078-.051l1.182-4.367c.013-.039.039-.052.078-.052h4.365c.039 0 .065.026.078.052l1.182 4.367c.013.026.052.051.078.051Zm-5.184-6.608 1.585-5.844a.081.081 0 0 1 .156 0l1.585 5.844c.013.052-.026.104-.078.104h-3.17c-.052 0-.09-.052-.078-.104Zm38.857 6.608h1.974a.082.082 0 0 0 .078-.103l-4.079-15.005c-.013-.04-.039-.052-.078-.052h-2.832a.088.088 0 0 0-.078.052l-4.079 15.005a.082.082 0 0 0 .078.103h1.975a.088.088 0 0 0 .078-.051l1.182-4.367c.013-.039.039-.052.078-.052h4.365c.039 0 .065.026.078.052l1.182 4.367a.088.088 0 0 0 .078.051Zm-5.184-6.608 1.585-5.844a.081.081 0 0 1 .156 0l1.585 5.844c.013.052-.026.104-.078.104h-3.17c-.052 0-.091-.052-.078-.104ZM67.216 21.94V17.3c0-.038.039-.077.078-.077h5.781a.084.084 0 0 0 .078-.078V15.28a.083.083 0 0 0-.078-.078h-5.781c-.039 0-.078-.04-.078-.078v-3.965c0-.039.039-.078.078-.078h6.574c.038 0 .078-.039.078-.077V9.138c0-.04-.04-.078-.078-.078h-8.899a.083.083 0 0 0-.078.078v14.94c0 .039.039.078.078.078h9.171c.04 0 .078-.04.078-.078v-1.97a.084.084 0 0 0-.078-.078h-6.859c-.039-.012-.065-.038-.065-.09Zm103.864 2.086-7.509-7.736a.079.079 0 0 1 0-.103l6.756-6.998a.075.075 0 0 0-.052-.13h-2.767c-.026 0-.039.014-.052.027l-5.729 5.934a.075.075 0 0 1-.13-.051V9.137a.083.083 0 0 0-.078-.078h-2.17a.084.084 0 0 0-.078.078V24.09c0 .039.039.078.078.078h2.17c.039 0 .078-.04.078-.078v-6.583c0-.064.091-.103.13-.052l6.495 6.687a.099.099 0 0 0 .052.026h2.767c.052-.013.091-.104.039-.143Z\" fill=\"#161616\"/><path d=\"m32.958 1-13.134 9.718 2.443-5.727L32.958 1Z\" fill=\"#E17726\" stroke=\"#E17726\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m2.663 1 13.017 9.809-2.325-5.818L2.663 1ZM28.23 23.533l-3.495 5.339 7.483 2.06 2.143-7.282-6.132-.117Zm-26.957.117 2.13 7.282 7.47-2.06-3.481-5.339-6.12.117Z\" fill=\"#E27625\" stroke=\"#E27625\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.47 14.515 8.392 17.65l7.405.337-.247-7.97-5.08 4.497Zm14.68 0-5.157-4.587-.169 8.06 7.405-.337-2.079-3.136ZM10.873 28.872l4.482-2.164-3.858-3.006-.624 5.17Zm9.393-2.164 4.469 2.164-.61-5.17-3.86 3.006Z\" fill=\"#E27625\" stroke=\"#E27625\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m24.735 28.872-4.47-2.164.365 2.903-.04 1.23 4.145-1.969Zm-13.862 0 4.158 1.97-.027-1.231.351-2.903-4.482 2.164Z\" fill=\"#D5BFB2\" stroke=\"#D5BFB2\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m15.108 21.784-3.715-1.088 2.624-1.205 1.091 2.293Zm5.405 0 1.091-2.293 2.637 1.205-3.728 1.088Z\" fill=\"#233447\" stroke=\"#233447\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m10.873 28.872.65-5.339-4.131.117 3.481 5.222Zm13.225-5.339.637 5.339 3.494-5.222-4.13-.117Zm3.131-5.883-7.405.338.688 3.796 1.092-2.293 2.637 1.205 2.988-3.045Zm-15.836 3.046 2.624-1.205 1.091 2.293.689-3.796-7.405-.337 3 3.045Z\" fill=\"#CC6228\" stroke=\"#CC6228\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m8.392 17.65 3.105 6.052-.104-3.006-3-3.045Zm15.849 3.046-.117 3.006 3.105-6.051-2.988 3.045Zm-8.444-2.708-.688 3.796.87 4.483.195-5.908-.377-2.372Zm4.027 0-.364 2.358.182 5.921.87-4.483-.688-3.796Z\" fill=\"#E27525\" stroke=\"#E27525\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m20.513 21.784-.87 4.484.623.44 3.858-3.006.117-3.006-3.728 1.088Zm-9.12-1.088.104 3.006 3.858 3.006.624-.44-.87-4.484-3.716-1.088Z\" fill=\"#F5841F\" stroke=\"#F5841F\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m20.59 30.842.04-1.231-.338-.285h-4.963l-.325.285.027 1.23-4.158-1.969 1.455 1.192 2.95 2.035h5.053l2.962-2.035 1.442-1.192-4.144 1.97Z\" fill=\"#C0AC9D\" stroke=\"#C0AC9D\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m20.266 26.708-.624-.44H15.98l-.624.44-.35 2.903.324-.285h4.963l.338.285-.364-2.903Z\" fill=\"#161616\" stroke=\"#161616\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M33.517 11.353 34.62 5.99 32.958 1l-12.692 9.394 4.885 4.12 6.898 2.01 1.52-1.776-.663-.48 1.053-.958-.806-.622 1.052-.804-.688-.53ZM1 5.989l1.117 5.364-.714.531 1.065.804-.805.622 1.052.959-.663.48 1.52 1.774 6.899-2.008 4.884-4.12L2.663 1 1 5.989Z\" fill=\"#763E1A\" stroke=\"#763E1A\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m32.049 16.523-6.898-2.008 2.078 3.136-3.105 6.05 4.106-.05h6.131l-2.312-7.128ZM10.47 14.515l-6.898 2.008-2.3 7.127h6.12l4.105.052-3.105-6.051 2.078-3.136Zm9.354 3.473.442-7.594 2-5.403h-8.911l2 5.403.442 7.594.169 2.384.013 5.896h3.663l.013-5.896.17-2.384Z\" fill=\"#F5841F\" stroke=\"#F5841F\" stroke-width=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("Gv8SHz7pH")}),isDisplayed2()&&/*#__PURE__*/ _jsx(SVG,{layout:"position",style:{},layoutId:"CTJungc8N",className:"framer-7bsd0r",opacity:1,radius:0,withExternalLayout:true,svgContentId:805130146,svg:"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"62\" height=\"38\"><svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"position:absolute;width:62px;height:38px;overflow:visible;display:block;transform:translate(0px, 0px)\"><path d=\"M 12.697 7.447 C 22.805 -2.389 39.195 -2.389 49.303 7.447 L 50.519 8.631 C 50.762 8.865 50.898 9.186 50.898 9.522 C 50.898 9.857 50.762 10.178 50.519 10.412 L 46.358 14.462 C 46.103 14.708 45.698 14.708 45.443 14.462 L 43.768 12.833 C 36.717 5.971 25.283 5.971 18.232 12.833 L 16.439 14.577 C 16.184 14.823 15.778 14.823 15.524 14.577 L 11.362 10.528 C 11.12 10.294 10.983 9.973 10.983 9.637 C 10.983 9.302 11.12 8.98 11.362 8.747 L 12.697 7.447 Z M 57.909 15.822 L 61.613 19.427 C 61.855 19.66 61.992 19.982 61.992 20.317 C 61.992 20.653 61.855 20.974 61.613 21.207 L 44.912 37.46 C 44.407 37.951 43.588 37.951 43.082 37.46 L 31.229 25.925 C 31.102 25.802 30.899 25.802 30.771 25.925 L 18.918 37.46 C 18.413 37.952 17.593 37.952 17.088 37.46 L 0.387 21.207 C 0.145 20.974 0.008 20.653 0.008 20.317 C 0.008 19.981 0.145 19.66 0.387 19.426 L 4.091 15.822 C 4.596 15.33 5.415 15.33 5.921 15.822 L 17.774 27.357 C 17.902 27.48 18.104 27.48 18.232 27.357 L 30.084 15.822 C 30.59 15.331 31.409 15.33 31.915 15.822 L 43.768 27.357 C 43.896 27.48 44.098 27.48 44.226 27.357 L 56.079 15.822 C 56.585 15.331 57.404 15.331 57.909 15.822 Z\" fill=\"rgb(59,153,252)\"></path></svg></svg>",background:null,"data-framer-name":"walletconnect_logo",transition:transition,layoutDependency:layoutDependency,...addVariantProps("CTJungc8N")})]})})}));});const css=[".framer-kliIb [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-kliIb * { box-sizing: border-box; }",".framer-kliIb .framer-18fls5 { position: relative; overflow: hidden; width: 88px; height: 88px; }",".framer-kliIb .framer-fyhet1 { position: relative; width: 66px; height: var(--framer-aspect-ratio-supported, 36px); flex: none; aspect-ratio: 5.212121212121212 / 1; }",".framer-kliIb .framer-7bsd0r { position: relative; width: 62px; height: 38px; flex: none; }",".framer-kliIb.framer-v-18fls5 .framer-18fls5, .framer-kliIb.framer-v-1iop3tk .framer-18fls5 { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 88
 * @framerIntrinsicWidth 88
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "rr5wmjO28": {"layout": ["fixed", "fixed"]}, "dmLFBA0cv": {"layout": ["fixed", "fixed"]}, "q5YUHlxsI": {"layout": ["fixed", "fixed"]}}}
 */ const FramerBiwGIk62a=withCSS(Component,css);export default FramerBiwGIk62a;FramerBiwGIk62a.displayName="ConnectButton";FramerBiwGIk62a.defaultProps={"width":88,"height":88};addPropertyControls(FramerBiwGIk62a,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["J0Kr_8YOD","rr5wmjO28"],"optionTitles":["WalletConnect","MetaMask"]}});addFonts(FramerBiwGIk62a,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerBiwGIk62a","slots":[],"annotations":{"framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"rr5wmjO28\": {\"layout\": [\"fixed\", \"fixed\"]}, \"dmLFBA0cv\": {\"layout\": [\"fixed\", \"fixed\"]}, \"q5YUHlxsI\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicWidth":"88","framerIntrinsicHeight":"88","framerContractVersion":"1"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./BiwGIk62a.map