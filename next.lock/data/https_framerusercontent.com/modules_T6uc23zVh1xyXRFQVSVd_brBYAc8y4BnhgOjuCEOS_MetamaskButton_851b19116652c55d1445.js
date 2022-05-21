import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{useState,useEffect}from"react";import{motion}from"framer-motion";import{addPropertyControls,ControlType,RenderTarget}from"framer";import Metamask from"https://framerusercontent.com/modules/AzMsHJLszmg0itdkUxzc/T3TbhmewsQ1EoCbMH7J4/xKY56huoP.js";// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/
/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ export default function MetamaskButton(props){const{tint,style}=props;const[currAcc,setCurrAcc]=useState();const connectWallet=async()=>{const{ethereum}=window;if(!ethereum||RenderTarget.current()===RenderTarget.canvas){console.log("wrong env");return;}try{const acc=await ethereum.request({method:"eth_requestAccounts"});setCurrAcc(acc[0]);}catch(error){console.log(error);}};useEffect(()=>{},[]);return(/*#__PURE__*/ _jsxs(motion.button,{onClick:connectWallet,style:{...containerStyle},children:[/*#__PURE__*/ _jsx(motion.p,{style:{fontSize:24,fontWeight:"800"},children:currAcc!==null&&currAcc!==void 0?currAcc:"Connect"}),/*#__PURE__*/ _jsx(Metamask,{style:{marginLeft:12}})]}));};MetamaskButton.defaultProps={tint:"#09F"};addPropertyControls(MetamaskButton,{renderItem:{title:"RenderItem",type:ControlType.ComponentInstance},tint:{title:"Tint",type:ControlType.Color}});const containerStyle={cursor:"pointer",border:0,background:"transparent",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"};
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"MetamaskButton","slots":[],"annotations":{"framerSupportedLayoutWidth":"any","framerContractVersion":"1","framerSupportedLayoutHeight":"any"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./MetamaskButton.map