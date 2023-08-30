;(function(){function _get(){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(arguments.length<3?target:receiver);}return desc.value;};}return _get.apply(this,arguments);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableRest();}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function _construct(Parent,args,Class){if(_isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".markdown-body .octicon{display:inline-block;fill:currentColor;vertical-align:text-bottom}.markdown-body .anchor{float:left;line-height:1;margin-left:-20px;padding-right:4px}.markdown-body .anchor:focus{outline:none}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:#1b1f23;vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:\" \";display:inline-block;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E\")}.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;font-size:16px;line-height:1.5;word-wrap:break-word}.markdown-body details{display:block}.markdown-body summary{display:list-item}.markdown-body a{background-color:initial}.markdown-body a:active,.markdown-body a:hover{outline-width:0}.markdown-body strong{font-weight:inherit;font-weight:bolder}.markdown-body h1{font-size:2em;margin:.67em 0}.markdown-body img{border-style:none}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:monospace,monospace;font-size:1em}.markdown-body hr{box-sizing:initial;height:0;overflow:visible}.markdown-body input{font:inherit;margin:0}.markdown-body input{overflow:visible}.markdown-body [type=checkbox]{box-sizing:border-box;padding:0}.markdown-body *{box-sizing:border-box}.markdown-body input{font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body a{color:#0366d6;text-decoration:none}.markdown-body a:hover{text-decoration:underline}.markdown-body strong{font-weight:600}.markdown-body hr{height:0;margin:15px 0;overflow:hidden;background:transparent;border:0;border-bottom:1px solid #dfe2e5}.markdown-body hr:after,.markdown-body hr:before{display:table;content:\"\"}.markdown-body hr:after{clear:both}.markdown-body table{border-spacing:0;border-collapse:collapse}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:1px solid #d1d5da;border-radius:3px;box-shadow:inset 0 -1px #d1d5da}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:0;margin-bottom:0}.markdown-body h1{font-size:32px}.markdown-body h1,.markdown-body h2{font-weight:600}.markdown-body h2{font-size:24px}.markdown-body h3{font-size:20px}.markdown-body h3,.markdown-body h4{font-weight:600}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:14px}.markdown-body h5,.markdown-body h6{font-weight:600}.markdown-body h6{font-size:12px}.markdown-body p{margin-top:0;margin-bottom:10px}.markdown-body blockquote{margin:0}.markdown-body ol,.markdown-body ul{padding-left:0;margin-top:0;margin-bottom:0}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code,.markdown-body pre{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:16px}.markdown-body pre{margin-top:0;margin-bottom:0}.markdown-body input::-webkit-inner-spin-button,.markdown-body input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none;appearance:none}.markdown-body :checked+.radio-label{position:relative;z-index:1;border-color:#0366d6}.markdown-body .border{border:1px solid #e1e4e8!important}.markdown-body .border-0{border:0!important}.markdown-body .border-bottom{border-bottom:1px solid #e1e4e8!important}.markdown-body .rounded-1{border-radius:3px!important}.markdown-body .bg-white{background-color:#fff!important}.markdown-body .bg-gray-light{background-color:#fafbfc!important}.markdown-body .text-gray-light{color:#6a737d!important}.markdown-body .mb-0{margin-bottom:0!important}.markdown-body .my-2{margin-top:8px!important;margin-bottom:8px!important}.markdown-body .pl-0{padding-left:0!important}.markdown-body .py-0{padding-top:0!important;padding-bottom:0!important}.markdown-body .pl-1{padding-left:4px!important}.markdown-body .pl-2{padding-left:8px!important}.markdown-body .py-2{padding-top:8px!important;padding-bottom:8px!important}.markdown-body .pl-3,.markdown-body .px-3{padding-left:16px!important}.markdown-body .px-3{padding-right:16px!important}.markdown-body .pl-4{padding-left:24px!important}.markdown-body .pl-5{padding-left:32px!important}.markdown-body .pl-6{padding-left:40px!important}.markdown-body .f6{font-size:12px!important}.markdown-body .lh-condensed{line-height:1.25!important}.markdown-body .text-bold{font-weight:600!important}.markdown-body .pl-c{color:#6a737d}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#005cc5}.markdown-body .pl-e,.markdown-body .pl-en{color:#6f42c1}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:#24292e}.markdown-body .pl-ent{color:#22863a}.markdown-body .pl-k{color:#d73a49}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:#032f62}.markdown-body .pl-smw,.markdown-body .pl-v{color:#e36209}.markdown-body .pl-bu{color:#b31d28}.markdown-body .pl-ii{color:#fafbfc;background-color:#b31d28}.markdown-body .pl-c2{color:#fafbfc;background-color:#d73a49}.markdown-body .pl-c2:before{content:\"^M\"}.markdown-body .pl-sr .pl-cce{font-weight:700;color:#22863a}.markdown-body .pl-ml{color:#735c0f}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{font-weight:700;color:#005cc5}.markdown-body .pl-mi{font-style:italic;color:#24292e}.markdown-body .pl-mb{font-weight:700;color:#24292e}.markdown-body .pl-md{color:#b31d28;background-color:#ffeef0}.markdown-body .pl-mi1{color:#22863a;background-color:#f0fff4}.markdown-body .pl-mc{color:#e36209;background-color:#ffebda}.markdown-body .pl-mi2{color:#f6f8fa;background-color:#005cc5}.markdown-body .pl-mdr{font-weight:700;color:#6f42c1}.markdown-body .pl-ba{color:#586069}.markdown-body .pl-sg{color:#959da5}.markdown-body .pl-corl{text-decoration:underline;color:#032f62}.markdown-body .mb-0{margin-bottom:0!important}.markdown-body .my-2{margin-bottom:8px!important}.markdown-body .my-2{margin-top:8px!important}.markdown-body .pl-0{padding-left:0!important}.markdown-body .py-0{padding-top:0!important;padding-bottom:0!important}.markdown-body .pl-1{padding-left:4px!important}.markdown-body .pl-2{padding-left:8px!important}.markdown-body .py-2{padding-top:8px!important;padding-bottom:8px!important}.markdown-body .pl-3{padding-left:16px!important}.markdown-body .pl-4{padding-left:24px!important}.markdown-body .pl-5{padding-left:32px!important}.markdown-body .pl-6{padding-left:40px!important}.markdown-body .pl-7{padding-left:48px!important}.markdown-body .pl-8{padding-left:64px!important}.markdown-body .pl-9{padding-left:80px!important}.markdown-body .pl-10{padding-left:96px!important}.markdown-body .pl-11{padding-left:112px!important}.markdown-body .pl-12{padding-left:128px!important}.markdown-body hr{border-bottom-color:#eee}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:1px solid #d1d5da;border-radius:3px;box-shadow:inset 0 -1px #d1d5da}.markdown-body:after,.markdown-body:before{display:table;content:\"\"}.markdown-body:after{clear:both}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body blockquote,.markdown-body details,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body hr{height:.25em;padding:0;margin:24px 0;background-color:#e1e4e8;border:0}.markdown-body blockquote{padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}.markdown-body h1{font-size:2em}.markdown-body h1,.markdown-body h2{padding-bottom:.3em;border-bottom:1px solid #eaecef}.markdown-body h2{font-size:1.5em}.markdown-body h3{font-size:1.25em}.markdown-body h4{font-size:1em}.markdown-body h5{font-size:.875em}.markdown-body h6{font-size:.85em;color:#6a737d}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li{word-wrap:break-all}.markdown-body li>p{margin-top:16px}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:600}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body table{display:block;width:100%;overflow:auto}.markdown-body table th{font-weight:600}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #dfe2e5}.markdown-body table tr{background-color:#fff;border-top:1px solid #c6cbd1}.markdown-body table tr:nth-child(2n){background-color:#f6f8fa}.markdown-body img{max-width:100%;box-sizing:initial}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body code{padding:.2em .4em;margin:0;font-size:85%;background-color:rgba(27,31,35,.05);border-radius:3px}.markdown-body pre{word-wrap:normal}.markdown-body pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{padding:16px;overflow:auto;font-size:90%;line-height:1.45;background-color:#f6f8fa;border-radius:3px}.markdown-body pre code{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:initial;border:0}.markdown-body .commit-tease-sha{display:inline-block;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:90%;color:#444d56}.markdown-body .full-commit .btn-outline:not(:disabled):hover{color:#005cc5;border-color:#005cc5}.markdown-body .blob-wrapper{overflow-x:auto;overflow-y:hidden}.markdown-body .blob-wrapper-embedded{max-height:240px;overflow-y:auto}.markdown-body .blob-num{width:1%;min-width:50px;padding-right:10px;padding-left:10px;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:12px;line-height:20px;color:rgba(27,31,35,.3);text-align:right;white-space:nowrap;vertical-align:top;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-body .blob-num:hover{color:rgba(27,31,35,.6)}.markdown-body .blob-num:before{content:attr(data-line-number)}.markdown-body .blob-code{position:relative;padding-right:10px;padding-left:10px;line-height:20px;vertical-align:top}.markdown-body .blob-code-inner{overflow:visible;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:12px;color:#24292e;word-wrap:normal;white-space:pre}.markdown-body .pl-token.active,.markdown-body .pl-token:hover{cursor:pointer;background:#ffea7f}.markdown-body .tab-size[data-tab-size=\"1\"]{-moz-tab-size:1;tab-size:1}.markdown-body .tab-size[data-tab-size=\"2\"]{-moz-tab-size:2;tab-size:2}.markdown-body .tab-size[data-tab-size=\"3\"]{-moz-tab-size:3;tab-size:3}.markdown-body .tab-size[data-tab-size=\"4\"]{-moz-tab-size:4;tab-size:4}.markdown-body .tab-size[data-tab-size=\"5\"]{-moz-tab-size:5;tab-size:5}.markdown-body .tab-size[data-tab-size=\"6\"]{-moz-tab-size:6;tab-size:6}.markdown-body .tab-size[data-tab-size=\"7\"]{-moz-tab-size:7;tab-size:7}.markdown-body .tab-size[data-tab-size=\"8\"]{-moz-tab-size:8;tab-size:8}.markdown-body .tab-size[data-tab-size=\"9\"]{-moz-tab-size:9;tab-size:9}.markdown-body .tab-size[data-tab-size=\"10\"]{-moz-tab-size:10;tab-size:10}.markdown-body .tab-size[data-tab-size=\"11\"]{-moz-tab-size:11;tab-size:11}.markdown-body .tab-size[data-tab-size=\"12\"]{-moz-tab-size:12;tab-size:12}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item input{margin:0 .2em .25em -1.6em;vertical-align:middle}.chakra-ui-dark .markdown-body{color:#f3f4f6}.chakra-ui-dark .markdown-body a{color:#0284c7}.chakra-ui-dark .markdown-body hr{border-bottom:1px solid #21262d;border-bottom-color:#21262d;background-color:#30363d}.chakra-ui-dark .markdown-body kbd{color:#b1bac4;background-color:#0d1117;border:1px solid #6e7681;box-shadow:inset 0 -1px #6e7681}.chakra-ui-dark .markdown-body :checked+.radio-label{border-color:rgba(56,139,253,.4)}.chakra-ui-dark .markdown-body .border{border:1px solid #30363d!important}.chakra-ui-dark .markdown-body .border-bottom{border-bottom:1px solid #30363d!important}.chakra-ui-dark .markdown-body .bg-white,.chakra-ui-dark .markdown-body .bg-gray-light{background-color:#0d1117!important}.chakra-ui-dark .markdown-body .text-gray-light{color:#8b949e!important}.chakra-ui-dark .markdown-body .pl-c{color:#8b949e}.chakra-ui-dark .markdown-body .pl-c1,.chakra-ui-dark .markdown-body .pl-s .pl-v{color:#79c0ff}.chakra-ui-dark .markdown-body .pl-e,.chakra-ui-dark .markdown-body .pl-en{color:#d2a8ff}.chakra-ui-dark .markdown-body .pl-s .pl-s1,.chakra-ui-dark .markdown-body .pl-smi{color:#c9d1d9}.chakra-ui-dark .markdown-body .pl-ent{color:#7ee787}.chakra-ui-dark .markdown-body .pl-k{color:#ff7b72}.chakra-ui-dark .markdown-body .pl-pds,.chakra-ui-dark .markdown-body .pl-s,.chakra-ui-dark .markdown-body .pl-s .pl-pse .pl-s1,.chakra-ui-dark .markdown-body .pl-sr,.chakra-ui-dark .markdown-body .pl-sr .pl-cce,.chakra-ui-dark .markdown-body .pl-sr .pl-sra,.chakra-ui-dark .markdown-body .pl-sr .pl-sre{color:#a5d6ff}.chakra-ui-dark .markdown-body .pl-smw,.chakra-ui-dark .markdown-body .pl-v{color:#ffa657}.chakra-ui-dark .markdown-body .pl-bu{color:#f85149}.chakra-ui-dark .markdown-body .pl-ii{color:#f0f6fc;background-color:#8e1519}.chakra-ui-dark .markdown-body .pl-c2{color:#f0f6fc;background-color:#b62324}.chakra-ui-dark .markdown-body .pl-sr .pl-cce{color:#7ee787}.chakra-ui-dark .markdown-body .pl-ml{color:#f2cc60}.chakra-ui-dark .markdown-body .pl-mh,.chakra-ui-dark .markdown-body .pl-mh .pl-en,.chakra-ui-dark .markdown-body .pl-ms{color:#1f6feb}.chakra-ui-dark .markdown-body .pl-mi,.chakra-ui-dark .markdown-body .pl-mb{color:#c9d1d9}.chakra-ui-dark .markdown-body .pl-md{color:#ffdcd7;background-color:#67060c}.chakra-ui-dark .markdown-body .pl-mi1{color:#aff5b4;background-color:#033a16}.chakra-ui-dark .markdown-body .pl-mc{color:#ffdfb6;background-color:#5a1e02}.chakra-ui-dark .markdown-body .pl-mi2{color:#c9d1d9;background-color:#1158c7}.chakra-ui-dark .markdown-body .pl-mdr{color:#d2a8ff}.chakra-ui-dark .markdown-body .pl-ba{color:#8b949e}.chakra-ui-dark .markdown-body .pl-sg{color:#484f58}.chakra-ui-dark .markdown-body .pl-corl{color:#a5d6ff}.chakra-ui-dark .markdown-body blockquote{color:#8b949e;border-left:.25em solid #3b434b}.chakra-ui-dark .markdown-body h1,.chakra-ui-dark .markdown-body h2{border-bottom:1px solid #21262d}.chakra-ui-dark .markdown-body h6{color:#8b949e}.chakra-ui-dark .markdown-body table td,.chakra-ui-dark .markdown-body table th{border:1px solid #3b434b}.chakra-ui-dark .markdown-body table tr{background-color:#0d1117;border-top:1px solid #272c32}.chakra-ui-dark .markdown-body table tr:nth-child(2n){background-color:#161b22}.chakra-ui-dark .markdown-body .highlight pre,.chakra-ui-dark .markdown-body pre{background-color:#1f1f22}.chakra-ui-dark .markdown-body .commit-tease-sha{color:#b1bac4}.chakra-ui-dark .markdown-body .blob-num{color:rgba(240,246,252,.3)}.chakra-ui-dark .markdown-body .blob-num:hover{color:rgba(240,246,252,.6)}.chakra-ui-dark .markdown-body .blob-code-inner{color:#c9d1d9}.hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.chakra-ui-dark .hljs{color:rgba(255,255,255,.92)}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.chakra-ui-dark .hljs-keyword,.chakra-ui-dark .hljs-selector-tag,.chakra-ui-dark .hljs-subst{color:rgba(255,255,255,.92)}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.chakra-ui-dark .hljs-doctag,.chakra-ui-dark .hljs-string{color:#fc8181}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.chakra-ui-dark .hljs-section,.chakra-ui-dark .hljs-selector-id,.chakra-ui-dark .hljs-title{color:#f56565}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.chakra-ui-dark .hljs-class .hljs-title,.chakra-ui-dark .hljs-type{color:#9f7aea}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.chakra-ui-dark .hljs-attribute,.chakra-ui-dark .hljs-name,.chakra-ui-dark .hljs-tag{color:#63b3ed}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.chakra-ui-dark .hljs-built_in,.chakra-ui-dark .hljs-builtin-name{color:#00c5ff}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}\n";document.head.appendChild(__vite_style__);System.register(['./vendor-legacy.3b66e508.js','./index-legacy.f3370094.js'],function(exports){'use strict';var react$1,React,Box,useToast,useTranslation,useColorModeValue,htoast,Center,reactSpinners,IconButton,Tooltip,Link,Link$1,Icon,useColorMode,Menu,MenuButton,MenuList,MenuItem,Stack,__glob_4_0,__glob_4_1,__glob_4_2;return{setters:[function(module){react$1=module.r;React=module.R;Box=module.l;useToast=module.u;useTranslation=module.h;useColorModeValue=module.k;htoast=module.a1;Center=module.C;reactSpinners=module.a;IconButton=module.a2;Tooltip=module.p;Link=module.x;Link$1=module.L;Icon=module.q;useColorMode=module.a3;Menu=module.a4;MenuButton=module.a5;MenuList=module.a6;MenuItem=module.a7;Stack=module.a8;},function(module){__glob_4_0=module.a;__glob_4_1=module.b;__glob_4_2=module.c;}],execute:function execute(){var _document$,_flowInitial,_flow,_string,_text$,_NS$3$HTML,_NS$3$MATHML,_NS$3$SVG,_html$SPECIAL_ELEMENT,_EXITS_FOREIGN_CONTEN,_INSERTION_MODE_RESET,_TEMPLATE_INSERTION_M,_INITIAL_MODE,_BEFORE_HTML_MODE,_BEFORE_HEAD_MODE,_IN_HEAD_MODE,_IN_HEAD_NO_SCRIPT_MO,_AFTER_HEAD_MODE,_IN_BODY_MODE,_TEXT_MODE,_IN_TABLE_MODE,_IN_TABLE_TEXT_MODE,_IN_CAPTION_MODE,_IN_COLUMN_GROUP_MODE,_IN_TABLE_BODY_MODE,_IN_ROW_MODE,_IN_CELL_MODE,_IN_SELECT_MODE,_IN_SELECT_IN_TABLE_M,_IN_TEMPLATE_MODE,_AFTER_BODY_MODE,_IN_FRAMESET_MODE,_AFTER_FRAMESET_MODE,_AFTER_AFTER_BODY_MOD,_AFTER_AFTER_FRAMESET,_TOKEN_HANDLERS;exports({A:MdCached,B:BsFillArrowDownCircleFill,D:DiAndroid,E:BsGearFill,F:FaListUl,G:GenIcon,H:MdStorage,J:MdKeyboardArrowRight,K:BsCaretDownFill,L:BsCaretRightFill,N:MdDriveFileMove,P:FiCopy,Q:MdDeleteForever,R:useLocalStorage,S:BsCardList,T:MdDeleteSweep,c:BsFillArrowUpCircleFill,d:BsFillGridFill,f:BsFillFileEarmarkMinusFill,h:BsFillFileEarmarkImageFill,j:BsFillFileEarmarkFontFill,k:BsFillFileEarmarkMusicFill,l:BsFillFileEarmarkPlayFill,m:BsFileEarmarkWordFill,n:BsFillFileEarmarkExcelFill,o:BsFillFileEarmarkPptFill,p:BsFillFileEarmarkPdfFill,q:BsApple,r:BsWindows,s:BsFillFileEarmarkZipFill,t:FaDatabase,u:BsFillMarkdownFill,v:FaBook,w:FaCompactDisc,y:FiMenu,z:DiGithubAlt});var axios$3={exports:{}};var bind$2=function bind(fn,thisArg){return function wrap(){var args=new Array(arguments.length);for(var i=0;i<args.length;i++){args[i]=arguments[i];}return fn.apply(thisArg,args);};};var bind$1=bind$2;// utils is a library of generic helper functions non-specific to axios
var toString$1=Object.prototype.toString;/**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */function isArray$1(val){return Array.isArray(val);}/**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */function isUndefined(val){return typeof val==='undefined';}/**
       * Determine if a value is a Buffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Buffer, otherwise false
       */function isBuffer$1(val){return val!==null&&!isUndefined(val)&&val.constructor!==null&&!isUndefined(val.constructor)&&typeof val.constructor.isBuffer==='function'&&val.constructor.isBuffer(val);}/**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */function isArrayBuffer(val){return toString$1.call(val)==='[object ArrayBuffer]';}/**
       * Determine if a value is a FormData
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */function isFormData(val){return toString$1.call(val)==='[object FormData]';}/**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */function isArrayBufferView(val){var result;if(typeof ArrayBuffer!=='undefined'&&ArrayBuffer.isView){result=ArrayBuffer.isView(val);}else{result=val&&val.buffer&&isArrayBuffer(val.buffer);}return result;}/**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */function isString(val){return typeof val==='string';}/**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */function isNumber(val){return typeof val==='number';}/**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */function isObject(val){return val!==null&&_typeof(val)==='object';}/**
       * Determine if a value is a plain Object
       *
       * @param {Object} val The value to test
       * @return {boolean} True if value is a plain Object, otherwise false
       */function isPlainObject$2(val){if(toString$1.call(val)!=='[object Object]'){return false;}var prototype=Object.getPrototypeOf(val);return prototype===null||prototype===Object.prototype;}/**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */function isDate(val){return toString$1.call(val)==='[object Date]';}/**
       * Determine if a value is a File
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */function isFile$1(val){return toString$1.call(val)==='[object File]';}/**
       * Determine if a value is a Blob
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */function isBlob(val){return toString$1.call(val)==='[object Blob]';}/**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */function isFunction(val){return toString$1.call(val)==='[object Function]';}/**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */function isStream(val){return isObject(val)&&isFunction(val.pipe);}/**
       * Determine if a value is a URLSearchParams object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */function isURLSearchParams(val){return toString$1.call(val)==='[object URLSearchParams]';}/**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */function trim$1(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,'');}/**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       * nativescript
       *  navigator.product -> 'NativeScript' or 'NS'
       */function isStandardBrowserEnv(){if(typeof navigator!=='undefined'&&(navigator.product==='ReactNative'||navigator.product==='NativeScript'||navigator.product==='NS')){return false;}return typeof window!=='undefined'&&typeof document!=='undefined';}/**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */function forEach(obj,fn){// Don't bother if no value provided
if(obj===null||typeof obj==='undefined'){return;}// Force an array if not already something iterable
if(_typeof(obj)!=='object'){/*eslint no-param-reassign:0*/obj=[obj];}if(isArray$1(obj)){// Iterate over array values
for(var i=0,l=obj.length;i<l;i++){fn.call(null,obj[i],i,obj);}}else{// Iterate over object keys
for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){fn.call(null,obj[key],key,obj);}}}}/**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */function/* obj1, obj2, obj3, ... */merge$1(){var result={};function assignValue(val,key){if(isPlainObject$2(result[key])&&isPlainObject$2(val)){result[key]=merge$1(result[key],val);}else if(isPlainObject$2(val)){result[key]=merge$1({},val);}else if(isArray$1(val)){result[key]=val.slice();}else{result[key]=val;}}for(var i=0,l=arguments.length;i<l;i++){forEach(arguments[i],assignValue);}return result;}/**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */function extend$1(a,b,thisArg){forEach(b,function assignValue(val,key){if(thisArg&&typeof val==='function'){a[key]=bind$1(val,thisArg);}else{a[key]=val;}});return a;}/**
       * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
       *
       * @param {string} content with BOM
       * @return {string} content value without BOM
       */function stripBOM(content){if(content.charCodeAt(0)===0xFEFF){content=content.slice(1);}return content;}var utils$e={isArray:isArray$1,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer$1,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isPlainObject:isPlainObject$2,isUndefined:isUndefined,isDate:isDate,isFile:isFile$1,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge$1,extend:extend$1,trim:trim$1,stripBOM:stripBOM};var utils$d=utils$e;function encode$1(val){return encodeURIComponent(val).replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']');}/**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */var buildURL$2=function buildURL(url,params,paramsSerializer){/*eslint no-param-reassign:0*/if(!params){return url;}var serializedParams;if(paramsSerializer){serializedParams=paramsSerializer(params);}else if(utils$d.isURLSearchParams(params)){serializedParams=params.toString();}else{var parts=[];utils$d.forEach(params,function serialize(val,key){if(val===null||typeof val==='undefined'){return;}if(utils$d.isArray(val)){key=key+'[]';}else{val=[val];}utils$d.forEach(val,function parseValue(v){if(utils$d.isDate(v)){v=v.toISOString();}else if(utils$d.isObject(v)){v=JSON.stringify(v);}parts.push(encode$1(key)+'='+encode$1(v));});});serializedParams=parts.join('&');}if(serializedParams){var hashmarkIndex=url.indexOf('#');if(hashmarkIndex!==-1){url=url.slice(0,hashmarkIndex);}url+=(url.indexOf('?')===-1?'?':'&')+serializedParams;}return url;};var utils$c=utils$e;function InterceptorManager$1(){this.handlers=[];}/**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */InterceptorManager$1.prototype.use=function use(fulfilled,rejected,options){this.handlers.push({fulfilled:fulfilled,rejected:rejected,synchronous:options?options.synchronous:false,runWhen:options?options.runWhen:null});return this.handlers.length-1;};/**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */InterceptorManager$1.prototype.eject=function eject(id){if(this.handlers[id]){this.handlers[id]=null;}};/**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */InterceptorManager$1.prototype.forEach=function forEach(fn){utils$c.forEach(this.handlers,function forEachHandler(h){if(h!==null){fn(h);}});};var InterceptorManager_1=InterceptorManager$1;var utils$b=utils$e;var normalizeHeaderName$1=function normalizeHeaderName(headers,normalizedName){utils$b.forEach(headers,function processHeader(value,name){if(name!==normalizedName&&name.toUpperCase()===normalizedName.toUpperCase()){headers[normalizedName]=value;delete headers[name];}});};/**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */var enhanceError$2=function enhanceError(error,config,code,request,response){error.config=config;if(code){error.code=code;}error.request=request;error.response=response;error.isAxiosError=true;error.toJSON=function toJSON(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null};};return error;};var transitional={silentJSONParsing:true,forcedJSONParsing:true,clarifyTimeoutError:false};var enhanceError$1=enhanceError$2;/**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */var createError$2=function createError(message,config,code,request,response){var error=new Error(message);return enhanceError$1(error,config,code,request,response);};var createError$1=createError$2;/**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */var settle$1=function settle(resolve,reject,response){var validateStatus=response.config.validateStatus;if(!response.status||!validateStatus||validateStatus(response.status)){resolve(response);}else{reject(createError$1('Request failed with status code '+response.status,response.config,null,response.request,response));}};var utils$a=utils$e;var cookies$1=utils$a.isStandardBrowserEnv()?// Standard browser envs support document.cookie
function standardBrowserEnv(){return{write:function write(name,value,expires,path,domain,secure){var cookie=[];cookie.push(name+'='+encodeURIComponent(value));if(utils$a.isNumber(expires)){cookie.push('expires='+new Date(expires).toGMTString());}if(utils$a.isString(path)){cookie.push('path='+path);}if(utils$a.isString(domain)){cookie.push('domain='+domain);}if(secure===true){cookie.push('secure');}document.cookie=cookie.join('; ');},read:function read(name){var match=document.cookie.match(new RegExp('(^|;\\s*)('+name+')=([^;]*)'));return match?decodeURIComponent(match[3]):null;},remove:function remove(name){this.write(name,'',Date.now()-86400000);}};}():// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return{write:function write(){},read:function read(){return null;},remove:function remove(){}};}();/**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */var isAbsoluteURL$1=function isAbsoluteURL(url){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);};/**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */var combineURLs$1=function combineURLs(baseURL,relativeURL){return relativeURL?baseURL.replace(/\/+$/,'')+'/'+relativeURL.replace(/^\/+/,''):baseURL;};var isAbsoluteURL=isAbsoluteURL$1;var combineURLs=combineURLs$1;/**
       * Creates a new URL by combining the baseURL with the requestedURL,
       * only when the requestedURL is not already an absolute URL.
       * If the requestURL is absolute, this function returns the requestedURL untouched.
       *
       * @param {string} baseURL The base URL
       * @param {string} requestedURL Absolute or relative URL to combine
       * @returns {string} The combined full path
       */var buildFullPath$1=function buildFullPath(baseURL,requestedURL){if(baseURL&&!isAbsoluteURL(requestedURL)){return combineURLs(baseURL,requestedURL);}return requestedURL;};var utils$9=utils$e;// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf=['age','authorization','content-length','content-type','etag','expires','from','host','if-modified-since','if-unmodified-since','last-modified','location','max-forwards','proxy-authorization','referer','retry-after','user-agent'];/**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */var parseHeaders$1=function parseHeaders(headers){var parsed={};var key;var val;var i;if(!headers){return parsed;}utils$9.forEach(headers.split('\n'),function parser(line){i=line.indexOf(':');key=utils$9.trim(line.substr(0,i)).toLowerCase();val=utils$9.trim(line.substr(i+1));if(key){if(parsed[key]&&ignoreDuplicateOf.indexOf(key)>=0){return;}if(key==='set-cookie'){parsed[key]=(parsed[key]?parsed[key]:[]).concat([val]);}else{parsed[key]=parsed[key]?parsed[key]+', '+val:val;}}});return parsed;};var utils$8=utils$e;var isURLSameOrigin$1=utils$8.isStandardBrowserEnv()?// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv(){var msie=/(msie|trident)/i.test(navigator.userAgent);var urlParsingNode=document.createElement('a');var originURL;/**
          * Parse a URL to discover it's components
          *
          * @param {String} url The URL to be parsed
          * @returns {Object}
          */function resolveURL(url){var href=url;if(msie){// IE needs attribute set twice to normalize properties
urlParsingNode.setAttribute('href',href);href=urlParsingNode.href;}urlParsingNode.setAttribute('href',href);// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return{href:urlParsingNode.href,protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,''):'',host:urlParsingNode.host,search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,''):'',hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,''):'',hostname:urlParsingNode.hostname,port:urlParsingNode.port,pathname:urlParsingNode.pathname.charAt(0)==='/'?urlParsingNode.pathname:'/'+urlParsingNode.pathname};}originURL=resolveURL(window.location.href);/**
          * Determine if a URL shares the same origin as the current location
          *
          * @param {String} requestURL The URL to test
          * @returns {boolean} True if URL shares the same origin, otherwise false
          */return function isURLSameOrigin(requestURL){var parsed=utils$8.isString(requestURL)?resolveURL(requestURL):requestURL;return parsed.protocol===originURL.protocol&&parsed.host===originURL.host;};}():// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return function isURLSameOrigin(){return true;};}();/**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */function Cancel$3(message){this.message=message;}Cancel$3.prototype.toString=function toString(){return'Cancel'+(this.message?': '+this.message:'');};Cancel$3.prototype.__CANCEL__=true;var Cancel_1=Cancel$3;var utils$7=utils$e;var settle=settle$1;var cookies=cookies$1;var buildURL$1=buildURL$2;var buildFullPath=buildFullPath$1;var parseHeaders=parseHeaders$1;var isURLSameOrigin=isURLSameOrigin$1;var createError=createError$2;var transitionalDefaults$1=transitional;var Cancel$2=Cancel_1;var xhr=function xhrAdapter(config){return new Promise(function dispatchXhrRequest(resolve,reject){var requestData=config.data;var requestHeaders=config.headers;var responseType=config.responseType;var onCanceled;function done(){if(config.cancelToken){config.cancelToken.unsubscribe(onCanceled);}if(config.signal){config.signal.removeEventListener('abort',onCanceled);}}if(utils$7.isFormData(requestData)){delete requestHeaders['Content-Type'];// Let the browser set it
}var request=new XMLHttpRequest();// HTTP basic authentication
if(config.auth){var username=config.auth.username||'';var password=config.auth.password?unescape(encodeURIComponent(config.auth.password)):'';requestHeaders.Authorization='Basic '+btoa(username+':'+password);}var fullPath=buildFullPath(config.baseURL,config.url);request.open(config.method.toUpperCase(),buildURL$1(fullPath,config.params,config.paramsSerializer),true);// Set the request timeout in MS
request.timeout=config.timeout;function onloadend(){if(!request){return;}// Prepare the response
var responseHeaders='getAllResponseHeaders'in request?parseHeaders(request.getAllResponseHeaders()):null;var responseData=!responseType||responseType==='text'||responseType==='json'?request.responseText:request.response;var response={data:responseData,status:request.status,statusText:request.statusText,headers:responseHeaders,config:config,request:request};settle(function _resolve(value){resolve(value);done();},function _reject(err){reject(err);done();},response);// Clean up request
request=null;}if('onloadend'in request){// Use onloadend if available
request.onloadend=onloadend;}else{// Listen for ready state to emulate onloadend
request.onreadystatechange=function handleLoad(){if(!request||request.readyState!==4){return;}// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
if(request.status===0&&!(request.responseURL&&request.responseURL.indexOf('file:')===0)){return;}// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(onloadend);};}// Handle browser request cancellation (as opposed to a manual cancellation)
request.onabort=function handleAbort(){if(!request){return;}reject(createError('Request aborted',config,'ECONNABORTED',request));// Clean up request
request=null;};// Handle low level network errors
request.onerror=function handleError(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
reject(createError('Network Error',config,null,request));// Clean up request
request=null;};// Handle timeout
request.ontimeout=function handleTimeout(){var timeoutErrorMessage=config.timeout?'timeout of '+config.timeout+'ms exceeded':'timeout exceeded';var transitional=config.transitional||transitionalDefaults$1;if(config.timeoutErrorMessage){timeoutErrorMessage=config.timeoutErrorMessage;}reject(createError(timeoutErrorMessage,config,transitional.clarifyTimeoutError?'ETIMEDOUT':'ECONNABORTED',request));// Clean up request
request=null;};// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(utils$7.isStandardBrowserEnv()){// Add xsrf header
var xsrfValue=(config.withCredentials||isURLSameOrigin(fullPath))&&config.xsrfCookieName?cookies.read(config.xsrfCookieName):undefined;if(xsrfValue){requestHeaders[config.xsrfHeaderName]=xsrfValue;}}// Add headers to the request
if('setRequestHeader'in request){utils$7.forEach(requestHeaders,function setRequestHeader(val,key){if(typeof requestData==='undefined'&&key.toLowerCase()==='content-type'){// Remove Content-Type if data is undefined
delete requestHeaders[key];}else{// Otherwise add header to the request
request.setRequestHeader(key,val);}});}// Add withCredentials to request if needed
if(!utils$7.isUndefined(config.withCredentials)){request.withCredentials=!!config.withCredentials;}// Add responseType to request if needed
if(responseType&&responseType!=='json'){request.responseType=config.responseType;}// Handle progress if needed
if(typeof config.onDownloadProgress==='function'){request.addEventListener('progress',config.onDownloadProgress);}// Not all browsers support upload events
if(typeof config.onUploadProgress==='function'&&request.upload){request.upload.addEventListener('progress',config.onUploadProgress);}if(config.cancelToken||config.signal){// Handle cancellation
// eslint-disable-next-line func-names
onCanceled=function onCanceled(cancel){if(!request){return;}reject(!cancel||cancel&&cancel.type?new Cancel$2('canceled'):cancel);request.abort();request=null;};config.cancelToken&&config.cancelToken.subscribe(onCanceled);if(config.signal){config.signal.aborted?onCanceled():config.signal.addEventListener('abort',onCanceled);}}if(!requestData){requestData=null;}// Send the request
request.send(requestData);});};var utils$6=utils$e;var normalizeHeaderName=normalizeHeaderName$1;var enhanceError=enhanceError$2;var transitionalDefaults=transitional;var DEFAULT_CONTENT_TYPE={'Content-Type':'application/x-www-form-urlencoded'};function setContentTypeIfUnset(headers,value){if(!utils$6.isUndefined(headers)&&utils$6.isUndefined(headers['Content-Type'])){headers['Content-Type']=value;}}function getDefaultAdapter(){var adapter;if(typeof XMLHttpRequest!=='undefined'){// For browsers use XHR adapter
adapter=xhr;}else if(typeof process!=='undefined'&&Object.prototype.toString.call(process)==='[object process]'){// For node use HTTP adapter
adapter=xhr;}return adapter;}function stringifySafely(rawValue,parser,encoder){if(utils$6.isString(rawValue)){try{(parser||JSON.parse)(rawValue);return utils$6.trim(rawValue);}catch(e){if(e.name!=='SyntaxError'){throw e;}}}return(encoder||JSON.stringify)(rawValue);}var defaults$3={transitional:transitionalDefaults,adapter:getDefaultAdapter(),transformRequest:[function transformRequest(data,headers){normalizeHeaderName(headers,'Accept');normalizeHeaderName(headers,'Content-Type');if(utils$6.isFormData(data)||utils$6.isArrayBuffer(data)||utils$6.isBuffer(data)||utils$6.isStream(data)||utils$6.isFile(data)||utils$6.isBlob(data)){return data;}if(utils$6.isArrayBufferView(data)){return data.buffer;}if(utils$6.isURLSearchParams(data)){setContentTypeIfUnset(headers,'application/x-www-form-urlencoded;charset=utf-8');return data.toString();}if(utils$6.isObject(data)||headers&&headers['Content-Type']==='application/json'){setContentTypeIfUnset(headers,'application/json');return stringifySafely(data);}return data;}],transformResponse:[function transformResponse(data){var transitional=this.transitional||defaults$3.transitional;var silentJSONParsing=transitional&&transitional.silentJSONParsing;var forcedJSONParsing=transitional&&transitional.forcedJSONParsing;var strictJSONParsing=!silentJSONParsing&&this.responseType==='json';if(strictJSONParsing||forcedJSONParsing&&utils$6.isString(data)&&data.length){try{return JSON.parse(data);}catch(e){if(strictJSONParsing){if(e.name==='SyntaxError'){throw enhanceError(e,this,'E_JSON_PARSE');}throw e;}}}return data;}],/**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,maxBodyLength:-1,validateStatus:function validateStatus(status){return status>=200&&status<300;},headers:{common:{'Accept':'application/json, text/plain, */*'}}};utils$6.forEach(['delete','get','head'],function forEachMethodNoData(method){defaults$3.headers[method]={};});utils$6.forEach(['post','put','patch'],function forEachMethodWithData(method){defaults$3.headers[method]=utils$6.merge(DEFAULT_CONTENT_TYPE);});var defaults_1=defaults$3;var utils$5=utils$e;var defaults$2=defaults_1;/**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */var transformData$1=function transformData(data,headers,fns){var context=this||defaults$2;/*eslint no-param-reassign:0*/utils$5.forEach(fns,function transform(fn){data=fn.call(context,data,headers);});return data;};var isCancel$1=function isCancel(value){return!!(value&&value.__CANCEL__);};var utils$4=utils$e;var transformData=transformData$1;var isCancel=isCancel$1;var defaults$1=defaults_1;var Cancel$1=Cancel_1;/**
       * Throws a `Cancel` if cancellation has been requested.
       */function throwIfCancellationRequested(config){if(config.cancelToken){config.cancelToken.throwIfRequested();}if(config.signal&&config.signal.aborted){throw new Cancel$1('canceled');}}/**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */var dispatchRequest$1=function dispatchRequest(config){throwIfCancellationRequested(config);// Ensure headers exist
config.headers=config.headers||{};// Transform request data
config.data=transformData.call(config,config.data,config.headers,config.transformRequest);// Flatten headers
config.headers=utils$4.merge(config.headers.common||{},config.headers[config.method]||{},config.headers);utils$4.forEach(['delete','get','head','post','put','patch','common'],function cleanHeaderConfig(method){delete config.headers[method];});var adapter=config.adapter||defaults$1.adapter;return adapter(config).then(function onAdapterResolution(response){throwIfCancellationRequested(config);// Transform response data
response.data=transformData.call(config,response.data,response.headers,config.transformResponse);return response;},function onAdapterRejection(reason){if(!isCancel(reason)){throwIfCancellationRequested(config);// Transform response data
if(reason&&reason.response){reason.response.data=transformData.call(config,reason.response.data,reason.response.headers,config.transformResponse);}}return Promise.reject(reason);});};var utils$3=utils$e;/**
       * Config-specific merge-function which creates a new config-object
       * by merging two configuration objects together.
       *
       * @param {Object} config1
       * @param {Object} config2
       * @returns {Object} New object resulting from merging config2 to config1
       */var mergeConfig$2=function mergeConfig(config1,config2){// eslint-disable-next-line no-param-reassign
config2=config2||{};var config={};function getMergedValue(target,source){if(utils$3.isPlainObject(target)&&utils$3.isPlainObject(source)){return utils$3.merge(target,source);}else if(utils$3.isPlainObject(source)){return utils$3.merge({},source);}else if(utils$3.isArray(source)){return source.slice();}return source;}// eslint-disable-next-line consistent-return
function mergeDeepProperties(prop){if(!utils$3.isUndefined(config2[prop])){return getMergedValue(config1[prop],config2[prop]);}else if(!utils$3.isUndefined(config1[prop])){return getMergedValue(undefined,config1[prop]);}}// eslint-disable-next-line consistent-return
function valueFromConfig2(prop){if(!utils$3.isUndefined(config2[prop])){return getMergedValue(undefined,config2[prop]);}}// eslint-disable-next-line consistent-return
function defaultToConfig2(prop){if(!utils$3.isUndefined(config2[prop])){return getMergedValue(undefined,config2[prop]);}else if(!utils$3.isUndefined(config1[prop])){return getMergedValue(undefined,config1[prop]);}}// eslint-disable-next-line consistent-return
function mergeDirectKeys(prop){if(prop in config2){return getMergedValue(config1[prop],config2[prop]);}else if(prop in config1){return getMergedValue(undefined,config1[prop]);}}var mergeMap={'url':valueFromConfig2,'method':valueFromConfig2,'data':valueFromConfig2,'baseURL':defaultToConfig2,'transformRequest':defaultToConfig2,'transformResponse':defaultToConfig2,'paramsSerializer':defaultToConfig2,'timeout':defaultToConfig2,'timeoutMessage':defaultToConfig2,'withCredentials':defaultToConfig2,'adapter':defaultToConfig2,'responseType':defaultToConfig2,'xsrfCookieName':defaultToConfig2,'xsrfHeaderName':defaultToConfig2,'onUploadProgress':defaultToConfig2,'onDownloadProgress':defaultToConfig2,'decompress':defaultToConfig2,'maxContentLength':defaultToConfig2,'maxBodyLength':defaultToConfig2,'transport':defaultToConfig2,'httpAgent':defaultToConfig2,'httpsAgent':defaultToConfig2,'cancelToken':defaultToConfig2,'socketPath':defaultToConfig2,'responseEncoding':defaultToConfig2,'validateStatus':mergeDirectKeys};utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)),function computeConfigValue(prop){var merge=mergeMap[prop]||mergeDeepProperties;var configValue=merge(prop);utils$3.isUndefined(configValue)&&merge!==mergeDirectKeys||(config[prop]=configValue);});return config;};var data={"version":"0.26.1"};var VERSION=data.version;var validators$1={};// eslint-disable-next-line func-names
['object','boolean','number','function','string','symbol'].forEach(function(type,i){validators$1[type]=function validator(thing){return _typeof(thing)===type||'a'+(i<1?'n ':' ')+type;};});var deprecatedWarnings={};/**
       * Transitional option validator
       * @param {function|boolean?} validator - set to false if the transitional option has been removed
       * @param {string?} version - deprecated version / removed since version
       * @param {string?} message - some message with additional info
       * @returns {function}
       */validators$1.transitional=function transitional(validator,version,message){function formatMessage(opt,desc){return'[Axios v'+VERSION+'] Transitional option \''+opt+'\''+desc+(message?'. '+message:'');}// eslint-disable-next-line func-names
return function(value,opt,opts){if(validator===false){throw new Error(formatMessage(opt,' has been removed'+(version?' in '+version:'')));}if(version&&!deprecatedWarnings[opt]){deprecatedWarnings[opt]=true;// eslint-disable-next-line no-console
console.warn(formatMessage(opt,' has been deprecated since v'+version+' and will be removed in the near future'));}return validator?validator(value,opt,opts):true;};};/**
       * Assert object's properties type
       * @param {object} options
       * @param {object} schema
       * @param {boolean?} allowUnknown
       */function assertOptions(options,schema,allowUnknown){if(_typeof(options)!=='object'){throw new TypeError('options must be an object');}var keys=Object.keys(options);var i=keys.length;while(i-->0){var opt=keys[i];var validator=schema[opt];if(validator){var value=options[opt];var result=value===undefined||validator(value,opt,options);if(result!==true){throw new TypeError('option '+opt+' must be '+result);}continue;}if(allowUnknown!==true){throw Error('Unknown option '+opt);}}}var validator$1={assertOptions:assertOptions,validators:validators$1};var utils$2=utils$e;var buildURL=buildURL$2;var InterceptorManager=InterceptorManager_1;var dispatchRequest=dispatchRequest$1;var mergeConfig$1=mergeConfig$2;var validator=validator$1;var validators=validator.validators;/**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */function Axios$1(instanceConfig){this.defaults=instanceConfig;this.interceptors={request:new InterceptorManager(),response:new InterceptorManager()};}/**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */Axios$1.prototype.request=function request(configOrUrl,config){/*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
if(typeof configOrUrl==='string'){config=config||{};config.url=configOrUrl;}else{config=configOrUrl||{};}config=mergeConfig$1(this.defaults,config);// Set config.method
if(config.method){config.method=config.method.toLowerCase();}else if(this.defaults.method){config.method=this.defaults.method.toLowerCase();}else{config.method='get';}var transitional=config.transitional;if(transitional!==undefined){validator.assertOptions(transitional,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},false);}// filter out skipped interceptors
var requestInterceptorChain=[];var synchronousRequestInterceptors=true;this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor){if(typeof interceptor.runWhen==='function'&&interceptor.runWhen(config)===false){return;}synchronousRequestInterceptors=synchronousRequestInterceptors&&interceptor.synchronous;requestInterceptorChain.unshift(interceptor.fulfilled,interceptor.rejected);});var responseInterceptorChain=[];this.interceptors.response.forEach(function pushResponseInterceptors(interceptor){responseInterceptorChain.push(interceptor.fulfilled,interceptor.rejected);});var promise;if(!synchronousRequestInterceptors){var chain=[dispatchRequest,undefined];Array.prototype.unshift.apply(chain,requestInterceptorChain);chain=chain.concat(responseInterceptorChain);promise=Promise.resolve(config);while(chain.length){promise=promise.then(chain.shift(),chain.shift());}return promise;}var newConfig=config;while(requestInterceptorChain.length){var onFulfilled=requestInterceptorChain.shift();var onRejected=requestInterceptorChain.shift();try{newConfig=onFulfilled(newConfig);}catch(error){onRejected(error);break;}}try{promise=dispatchRequest(newConfig);}catch(error){return Promise.reject(error);}while(responseInterceptorChain.length){promise=promise.then(responseInterceptorChain.shift(),responseInterceptorChain.shift());}return promise;};Axios$1.prototype.getUri=function getUri(config){config=mergeConfig$1(this.defaults,config);return buildURL(config.url,config.params,config.paramsSerializer).replace(/^\?/,'');};// Provide aliases for supported request methods
utils$2.forEach(['delete','get','head','options'],function forEachMethodNoData(method){/*eslint func-names:0*/Axios$1.prototype[method]=function(url,config){return this.request(mergeConfig$1(config||{},{method:method,url:url,data:(config||{}).data}));};});utils$2.forEach(['post','put','patch'],function forEachMethodWithData(method){/*eslint func-names:0*/Axios$1.prototype[method]=function(url,data,config){return this.request(mergeConfig$1(config||{},{method:method,url:url,data:data}));};});var Axios_1=Axios$1;var Cancel=Cancel_1;/**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */function CancelToken(executor){if(typeof executor!=='function'){throw new TypeError('executor must be a function.');}var resolvePromise;this.promise=new Promise(function promiseExecutor(resolve){resolvePromise=resolve;});var token=this;// eslint-disable-next-line func-names
this.promise.then(function(cancel){if(!token._listeners)return;var i;var l=token._listeners.length;for(i=0;i<l;i++){token._listeners[i](cancel);}token._listeners=null;});// eslint-disable-next-line func-names
this.promise.then=function(onfulfilled){var _resolve;// eslint-disable-next-line func-names
var promise=new Promise(function(resolve){token.subscribe(resolve);_resolve=resolve;}).then(onfulfilled);promise.cancel=function reject(){token.unsubscribe(_resolve);};return promise;};executor(function cancel(message){if(token.reason){// Cancellation has already been requested
return;}token.reason=new Cancel(message);resolvePromise(token.reason);});}/**
       * Throws a `Cancel` if cancellation has been requested.
       */CancelToken.prototype.throwIfRequested=function throwIfRequested(){if(this.reason){throw this.reason;}};/**
       * Subscribe to the cancel signal
       */CancelToken.prototype.subscribe=function subscribe(listener){if(this.reason){listener(this.reason);return;}if(this._listeners){this._listeners.push(listener);}else{this._listeners=[listener];}};/**
       * Unsubscribe from the cancel signal
       */CancelToken.prototype.unsubscribe=function unsubscribe(listener){if(!this._listeners){return;}var index=this._listeners.indexOf(listener);if(index!==-1){this._listeners.splice(index,1);}};/**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */CancelToken.source=function source(){var cancel;var token=new CancelToken(function executor(c){cancel=c;});return{token:token,cancel:cancel};};var CancelToken_1=CancelToken;/**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */var spread=function spread(callback){return function wrap(arr){return callback.apply(null,arr);};};var utils$1=utils$e;/**
       * Determines whether the payload is an error thrown by Axios
       *
       * @param {*} payload The value to test
       * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
       */var isAxiosError=function isAxiosError(payload){return utils$1.isObject(payload)&&payload.isAxiosError===true;};var utils=utils$e;var bind=bind$2;var Axios=Axios_1;var mergeConfig=mergeConfig$2;var defaults=defaults_1;/**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */function createInstance(defaultConfig){var context=new Axios(defaultConfig);var instance=bind(Axios.prototype.request,context);// Copy axios.prototype to instance
utils.extend(instance,Axios.prototype,context);// Copy context to instance
utils.extend(instance,context);// Factory for creating new instances
instance.create=function create(instanceConfig){return createInstance(mergeConfig(defaultConfig,instanceConfig));};return instance;}// Create the default instance to be exported
var axios$2=createInstance(defaults);// Expose Axios class to allow class inheritance
axios$2.Axios=Axios;// Expose Cancel & CancelToken
axios$2.Cancel=Cancel_1;axios$2.CancelToken=CancelToken_1;axios$2.isCancel=isCancel$1;axios$2.VERSION=data.version;// Expose all/spread
axios$2.all=function all(promises){return Promise.all(promises);};axios$2.spread=spread;// Expose isAxiosError
axios$2.isAxiosError=isAxiosError;axios$3.exports=axios$2;// Allow use of default import syntax in TypeScript
axios$3.exports.default=axios$2;var axios=axios$3.exports;var axios$1=exports('a',axios);var api$1="/";if(window.ALIST.api){api$1=window.ALIST.api;}if(localStorage.getItem("API_SERVER")){api$1=localStorage.getItem("API_SERVER");}var instance$1=exports('i',axios$1.create({baseURL:api$1+"api/public/",headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:false}));instance$1.interceptors.request.use(function(config){return config;},function(error){console.log("Error: "+error.message);return Promise.reject(error);});instance$1.interceptors.response.use(function(response){return response;},function(error){console.log(error);if(!error.response||error.response.data.meta==void 0){return Promise.reject(error);}return error.response.data;});instance$1.defaults.headers.common["Authorization"]=localStorage.getItem("admin-token")||"";var md5={};/*

      TypeScript Md5
      ==============

      Based on work by
      * Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
      * André Cruz: https://github.com/satazor/SparkMD5
      * Raymond Hill: https://github.com/gorhill/yamd5.js

      Effectively a TypeScrypt re-write of Raymond Hill JS Library

      The MIT License (MIT)

      Copyright (C) 2014 Raymond Hill

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.



                  DO WHAT YOU WANT TO PUBLIC LICENSE
                          Version 2, December 2004

       Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

       Everyone is permitted to copy and distribute verbatim or modified
       copies of this license document, and changing it is allowed as long
       as the name is changed.

                  DO WHAT YOU WANT TO PUBLIC LICENSE
         TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

        0. You just DO WHAT YOU WANT TO.


      */Object.defineProperty(md5,"__esModule",{value:true});var Md5=/** @class */function(){function Md5(){this._dataLength=0;this._bufferLength=0;this._state=new Int32Array(4);this._buffer=new ArrayBuffer(68);this._buffer8=new Uint8Array(this._buffer,0,68);this._buffer32=new Uint32Array(this._buffer,0,17);this.start();}Md5.hashStr=function(str,raw){if(raw===void 0){raw=false;}return this.onePassHasher.start().appendStr(str).end(raw);};Md5.hashAsciiStr=function(str,raw){if(raw===void 0){raw=false;}return this.onePassHasher.start().appendAsciiStr(str).end(raw);};Md5._hex=function(x){var hc=Md5.hexChars;var ho=Md5.hexOut;var n;var offset;var j;var i;for(i=0;i<4;i+=1){offset=i*8;n=x[i];for(j=0;j<8;j+=2){ho[offset+1+j]=hc.charAt(n&0x0F);n>>>=4;ho[offset+0+j]=hc.charAt(n&0x0F);n>>>=4;}}return ho.join('');};Md5._md5cycle=function(x,k){var a=x[0];var b=x[1];var c=x[2];var d=x[3];// ff()
a+=(b&c|~b&d)+k[0]-680876936|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[1]-389564586|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[2]+606105819|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[3]-1044525330|0;b=(b<<22|b>>>10)+c|0;a+=(b&c|~b&d)+k[4]-176418897|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[5]+1200080426|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[6]-1473231341|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[7]-45705983|0;b=(b<<22|b>>>10)+c|0;a+=(b&c|~b&d)+k[8]+1770035416|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[9]-1958414417|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[10]-42063|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[11]-1990404162|0;b=(b<<22|b>>>10)+c|0;a+=(b&c|~b&d)+k[12]+1804603682|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[13]-40341101|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[14]-1502002290|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[15]+1236535329|0;b=(b<<22|b>>>10)+c|0;// gg()
a+=(b&d|c&~d)+k[1]-165796510|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[6]-1069501632|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[11]+643717713|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[0]-373897302|0;b=(b<<20|b>>>12)+c|0;a+=(b&d|c&~d)+k[5]-701558691|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[10]+38016083|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[15]-660478335|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[4]-405537848|0;b=(b<<20|b>>>12)+c|0;a+=(b&d|c&~d)+k[9]+568446438|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[14]-1019803690|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[3]-187363961|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[8]+1163531501|0;b=(b<<20|b>>>12)+c|0;a+=(b&d|c&~d)+k[13]-1444681467|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[2]-51403784|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[7]+1735328473|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[12]-1926607734|0;b=(b<<20|b>>>12)+c|0;// hh()
a+=(b^c^d)+k[5]-378558|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[8]-2022574463|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[11]+1839030562|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[14]-35309556|0;b=(b<<23|b>>>9)+c|0;a+=(b^c^d)+k[1]-1530992060|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[4]+1272893353|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[7]-155497632|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[10]-1094730640|0;b=(b<<23|b>>>9)+c|0;a+=(b^c^d)+k[13]+681279174|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[0]-358537222|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[3]-722521979|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[6]+76029189|0;b=(b<<23|b>>>9)+c|0;a+=(b^c^d)+k[9]-640364487|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[12]-421815835|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[15]+530742520|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[2]-995338651|0;b=(b<<23|b>>>9)+c|0;// ii()
a+=(c^(b|~d))+k[0]-198630844|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[7]+1126891415|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[14]-1416354905|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[5]-57434055|0;b=(b<<21|b>>>11)+c|0;a+=(c^(b|~d))+k[12]+1700485571|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[3]-1894986606|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[10]-1051523|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[1]-2054922799|0;b=(b<<21|b>>>11)+c|0;a+=(c^(b|~d))+k[8]+1873313359|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[15]-30611744|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[6]-1560198380|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[13]+1309151649|0;b=(b<<21|b>>>11)+c|0;a+=(c^(b|~d))+k[4]-145523070|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[11]-1120210379|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[2]+718787259|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[9]-343485551|0;b=(b<<21|b>>>11)+c|0;x[0]=a+x[0]|0;x[1]=b+x[1]|0;x[2]=c+x[2]|0;x[3]=d+x[3]|0;};Md5.prototype.start=function(){this._dataLength=0;this._bufferLength=0;this._state.set(Md5.stateIdentity);return this;};// Char to code point to to array conversion:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
Md5.prototype.appendStr=function(str){var buf8=this._buffer8;var buf32=this._buffer32;var bufLen=this._bufferLength;var code;var i;for(i=0;i<str.length;i+=1){code=str.charCodeAt(i);if(code<128){buf8[bufLen++]=code;}else if(code<0x800){buf8[bufLen++]=(code>>>6)+0xC0;buf8[bufLen++]=code&0x3F|0x80;}else if(code<0xD800||code>0xDBFF){buf8[bufLen++]=(code>>>12)+0xE0;buf8[bufLen++]=code>>>6&0x3F|0x80;buf8[bufLen++]=code&0x3F|0x80;}else{code=(code-0xD800)*0x400+(str.charCodeAt(++i)-0xDC00)+0x10000;if(code>0x10FFFF){throw new Error('Unicode standard supports code points up to U+10FFFF');}buf8[bufLen++]=(code>>>18)+0xF0;buf8[bufLen++]=code>>>12&0x3F|0x80;buf8[bufLen++]=code>>>6&0x3F|0x80;buf8[bufLen++]=code&0x3F|0x80;}if(bufLen>=64){this._dataLength+=64;Md5._md5cycle(this._state,buf32);bufLen-=64;buf32[0]=buf32[16];}}this._bufferLength=bufLen;return this;};Md5.prototype.appendAsciiStr=function(str){var buf8=this._buffer8;var buf32=this._buffer32;var bufLen=this._bufferLength;var i;var j=0;for(;;){i=Math.min(str.length-j,64-bufLen);while(i--){buf8[bufLen++]=str.charCodeAt(j++);}if(bufLen<64){break;}this._dataLength+=64;Md5._md5cycle(this._state,buf32);bufLen=0;}this._bufferLength=bufLen;return this;};Md5.prototype.appendByteArray=function(input){var buf8=this._buffer8;var buf32=this._buffer32;var bufLen=this._bufferLength;var i;var j=0;for(;;){i=Math.min(input.length-j,64-bufLen);while(i--){buf8[bufLen++]=input[j++];}if(bufLen<64){break;}this._dataLength+=64;Md5._md5cycle(this._state,buf32);bufLen=0;}this._bufferLength=bufLen;return this;};Md5.prototype.getState=function(){var s=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[s[0],s[1],s[2],s[3]]};};Md5.prototype.setState=function(state){var buf=state.buffer;var x=state.state;var s=this._state;var i;this._dataLength=state.length;this._bufferLength=state.buflen;s[0]=x[0];s[1]=x[1];s[2]=x[2];s[3]=x[3];for(i=0;i<buf.length;i+=1){this._buffer8[i]=buf.charCodeAt(i);}};Md5.prototype.end=function(raw){if(raw===void 0){raw=false;}var bufLen=this._bufferLength;var buf8=this._buffer8;var buf32=this._buffer32;var i=(bufLen>>2)+1;this._dataLength+=bufLen;var dataBitsLen=this._dataLength*8;buf8[bufLen]=0x80;buf8[bufLen+1]=buf8[bufLen+2]=buf8[bufLen+3]=0;buf32.set(Md5.buffer32Identity.subarray(i),i);if(bufLen>55){Md5._md5cycle(this._state,buf32);buf32.set(Md5.buffer32Identity);}// Do the final computation based on the tail and length
// Beware that the final length may not fit in 32 bits so we take care of that
if(dataBitsLen<=0xFFFFFFFF){buf32[14]=dataBitsLen;}else{var matches=dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);if(matches===null){return;}var lo=parseInt(matches[2],16);var hi=parseInt(matches[1],16)||0;buf32[14]=lo;buf32[15]=hi;}Md5._md5cycle(this._state,buf32);return raw?this._state:Md5._hex(this._state);};// Private Static Variables
Md5.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]);Md5.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);Md5.hexChars='0123456789abcdef';Md5.hexOut=[];// Permanent instance is to use for one-call hashing
Md5.onePassHasher=new Md5();return Md5;}();var Md5_1=exports('M',md5.Md5=Md5);if(Md5.hashStr('hello')!=='5d41402abc4b2a76b9719d911017c592'){throw new Error('Md5 self test failed.');}var api="/";if(window.ALIST.api){api=window.ALIST.api;}if(localStorage.getItem("API_SERVER")){api=localStorage.getItem("API_SERVER");}var instance=axios$1.create({baseURL:api+"api/admin/",headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:false});instance.interceptors.request.use(function(config){return config;},function(error){console.log("Error: "+error.message);return Promise.reject(error);});instance.interceptors.response.use(function(response){return response;},function(error){console.log(error);if(!error.response||error.response.data.meta==void 0){return Promise.reject(error);}return error.response.data;});instance.defaults.headers.common["Authorization"]=localStorage.getItem("admin-token")||"";var changeToken=exports('C',function(password){var token="";if(password){token=Md5_1.hashStr("https://github.com/Xhofe/alist-".concat(password));}instance.defaults.headers.common["Authorization"]=token;instance$1.defaults.headers.common["Authorization"]=token;localStorage.setItem("admin-token",token);});var admin=exports('b',instance);function useLocalStorage(key,initialValue){var _react$1$exports$useS=react$1.exports.useState(function(){try{var item=window.localStorage.getItem(key);return item?JSON.parse(item):initialValue;}catch(error){console.log(error);return initialValue;}}),_react$1$exports$useS2=_slicedToArray(_react$1$exports$useS,2),storedValue=_react$1$exports$useS2[0],setStoredValue=_react$1$exports$useS2[1];var setValue=function setValue(value){try{var valueToStore=value instanceof Function?value(storedValue):value;setStoredValue(valueToStore);window.localStorage.setItem(key,JSON.stringify(valueToStore));}catch(error){console.log(error);}};return[storedValue,setValue];}var protocols=['http','https','mailto','tel'];/**
       * @param {string} uri
       * @returns {string}
       */function uriTransformer(uri){var url=(uri||'').trim();var first=url.charAt(0);if(first==='#'||first==='/'){return url;}var colon=url.indexOf(':');if(colon===-1){return url;}var index=-1;while(++index<protocols.length){var protocol=protocols[index];if(colon===protocol.length&&url.slice(0,protocol.length).toLowerCase()===protocol){return url;}}index=url.indexOf('?');if(index!==-1&&colon>index){return url;}index=url.indexOf('#');if(index!==-1&&colon>index){return url;}// eslint-disable-next-line no-script-url
return'javascript:void(0)';}/*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */var isBuffer=function isBuffer(obj){return obj!=null&&obj.constructor!=null&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj);};/**
       * @typedef {import('unist').Point} Point
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Position} Position
       * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
       */ /**
       * Stringify one point, a position (start and end points), or a node’s
       * positional information.
       *
       * @param {Node|NodeLike|Position|Point|null} [value]
       * @returns {string}
       */function stringifyPosition(value){// Nothing.
if(!value||_typeof(value)!=='object'){return'';}// Node.
if('position'in value||'type'in value){return position$1(value.position);}// Position.
if('start'in value||'end'in value){return position$1(value);}// Point.
if('line'in value||'column'in value){return point$2(value);}// ?
return'';}/**
       * @param {Point|undefined} point
       * @returns {string}
       */function point$2(point){return index(point&&point.line)+':'+index(point&&point.column);}/**
       * @param {Position|undefined} pos
       * @returns {string}
       */function position$1(pos){return point$2(pos&&pos.start)+'-'+point$2(pos&&pos.end);}/**
       * @param {number|undefined} value
       * @returns {number}
       */function index(value){return value&&typeof value==='number'?value:1;}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Position} Position
       * @typedef {import('unist').Point} Point
       * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
       */var VFileMessage=/*#__PURE__*/function(_Error){_inherits(VFileMessage,_Error);var _super=_createSuper(VFileMessage);/**
         * Constructor of a message for `reason` at `place` from `origin`.
         * When an error is passed in as `reason`, copies the `stack`.
         *
         * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
         * @param {Node|NodeLike|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
         * @param {string} [origin] Place in code the message originates from (`string`, optional).
         */function VFileMessage(reason,place,origin){var _this;_classCallCheck(this,VFileMessage);/** @type {[string|null, string|null]} */var parts=[null,null];/** @type {Position} */var position={// @ts-expect-error: we always follows the structure of `position`.
start:{line:null,column:null},// @ts-expect-error: "
end:{line:null,column:null}};_this=_super.call(this);if(typeof place==='string'){origin=place;place=undefined;}if(typeof origin==='string'){var _index=origin.indexOf(':');if(_index===-1){parts[1]=origin;}else{parts[0]=origin.slice(0,_index);parts[1]=origin.slice(_index+1);}}if(place){// Node.
if('type'in place||'position'in place){if(place.position){position=place.position;}}// Position.
else if('start'in place||'end'in place){position=place;}// Point.
else if('line'in place||'column'in place){position.start=place;}}// Fields from `Error`
_this.name=stringifyPosition(place)||'1:1';_this.message=_typeof(reason)==='object'?reason.message:reason;_this.stack=_typeof(reason)==='object'?reason.stack:'';/**
           * Reason for message.
           * @type {string}
           */_this.reason=_this.message;/**
           * If true, marks associated file as no longer processable.
           * @type {boolean?}
           */ // eslint-disable-next-line no-unused-expressions
_this.fatal;/**
           * Starting line of error.
           * @type {number?}
           */_this.line=position.start.line;/**
           * Starting column of error.
           * @type {number?}
           */_this.column=position.start.column;/**
           * Namespace of warning.
           * @type {string?}
           */_this.source=parts[0];/**
           * Category of message.
           * @type {string?}
           */_this.ruleId=parts[1];/**
           * Full range information, when available.
           * Has start and end properties, both set to an object with line and column, set to number?.
           * @type {Position?}
           */_this.position=position;// The following fields are “well known”.
// Not standard.
// Feel free to add other non-standard fields to your messages.
/* eslint-disable no-unused-expressions */ /**
           * You can use this to specify the source value that’s being reported, which
           * is deemed incorrect.
           * @type {string?}
           */_this.actual;/**
           * You can use this to suggest values that should be used instead of
           * `actual`, one or more values that are deemed as acceptable.
           * @type {Array<string>?}
           */_this.expected;/**
           * You may add a file property with a path of a file (used throughout the VFile ecosystem).
           * @type {string?}
           */_this.file;/**
           * You may add a url property with a link to documentation for the message.
           * @type {string?}
           */_this.url;/**
           * You may add a note property with a long form description of the message (supported by vfile-reporter).
           * @type {string?}
           */_this.note;/* eslint-enable no-unused-expressions */return _this;}return _createClass(VFileMessage);}(/*#__PURE__*/_wrapNativeSuper(Error));VFileMessage.prototype.file='';VFileMessage.prototype.name='';VFileMessage.prototype.reason='';VFileMessage.prototype.message='';VFileMessage.prototype.stack='';VFileMessage.prototype.fatal=null;VFileMessage.prototype.column=null;VFileMessage.prototype.line=null;VFileMessage.prototype.source=null;VFileMessage.prototype.ruleId=null;VFileMessage.prototype.position=null;// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var path$1={basename:basename,dirname:dirname,extname:extname,join:join,sep:'/'};/* eslint-disable max-depth, complexity */ /**
       * @param {string} path
       * @param {string} [ext]
       * @returns {string}
       */function basename(path,ext){if(ext!==undefined&&typeof ext!=='string'){throw new TypeError('"ext" argument must be a string');}assertPath$1(path);var start=0;var end=-1;var index=path.length;/** @type {boolean|undefined} */var seenNonSlash;if(ext===undefined||ext.length===0||ext.length>path.length){while(index--){if(path.charCodeAt(index)===47/* `/` */){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now.
if(seenNonSlash){start=index+1;break;}}else if(end<0){// We saw the first non-path separator, mark this as the end of our
// path component.
seenNonSlash=true;end=index+1;}}return end<0?'':path.slice(start,end);}if(ext===path){return'';}var firstNonSlashEnd=-1;var extIndex=ext.length-1;while(index--){if(path.charCodeAt(index)===47/* `/` */){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now.
if(seenNonSlash){start=index+1;break;}}else{if(firstNonSlashEnd<0){// We saw the first non-path separator, remember this index in case
// we need it if the extension ends up not matching.
seenNonSlash=true;firstNonSlashEnd=index+1;}if(extIndex>-1){// Try to match the explicit extension.
if(path.charCodeAt(index)===ext.charCodeAt(extIndex--)){if(extIndex<0){// We matched the extension, so mark this as the end of our path
// component
end=index;}}else{// Extension does not match, so our result is the entire path
// component
extIndex=-1;end=firstNonSlashEnd;}}}}if(start===end){end=firstNonSlashEnd;}else if(end<0){end=path.length;}return path.slice(start,end);}/**
       * @param {string} path
       * @returns {string}
       */function dirname(path){assertPath$1(path);if(path.length===0){return'.';}var end=-1;var index=path.length;/** @type {boolean|undefined} */var unmatchedSlash;// Prefix `--` is important to not run on `0`.
while(--index){if(path.charCodeAt(index)===47/* `/` */){if(unmatchedSlash){end=index;break;}}else if(!unmatchedSlash){// We saw the first non-path separator
unmatchedSlash=true;}}return end<0?path.charCodeAt(0)===47/* `/` */?'/':'.':end===1&&path.charCodeAt(0)===47/* `/` */?'//':path.slice(0,end);}/**
       * @param {string} path
       * @returns {string}
       */function extname(path){assertPath$1(path);var index=path.length;var end=-1;var startPart=0;var startDot=-1;// Track the state of characters (if any) we see before our first dot and
// after any path separator we find.
var preDotState=0;/** @type {boolean|undefined} */var unmatchedSlash;while(index--){var _code=path.charCodeAt(index);if(_code===47/* `/` */){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now.
if(unmatchedSlash){startPart=index+1;break;}continue;}if(end<0){// We saw the first non-path separator, mark this as the end of our
// extension.
unmatchedSlash=true;end=index+1;}if(_code===46/* `.` */){// If this is our first dot, mark it as the start of our extension.
if(startDot<0){startDot=index;}else if(preDotState!==1){preDotState=1;}}else if(startDot>-1){// We saw a non-dot and non-path separator before our dot, so we should
// have a good chance at having a non-empty extension.
preDotState=-1;}}if(startDot<0||end<0||// We saw a non-dot character immediately before the dot.
preDotState===0||// The (right-most) trimmed path component is exactly `..`.
preDotState===1&&startDot===end-1&&startDot===startPart+1){return'';}return path.slice(startDot,end);}/**
       * @param {Array<string>} segments
       * @returns {string}
       */function join(){var index=-1;/** @type {string|undefined} */var joined;for(var _len=arguments.length,segments=new Array(_len),_key=0;_key<_len;_key++){segments[_key]=arguments[_key];}while(++index<segments.length){assertPath$1(segments[index]);if(segments[index]){joined=joined===undefined?segments[index]:joined+'/'+segments[index];}}return joined===undefined?'.':normalize$1(joined);}/**
       * Note: `normalize` is not exposed as `path.normalize`, so some code is
       * manually removed from it.
       *
       * @param {string} path
       * @returns {string}
       */function normalize$1(path){assertPath$1(path);var absolute=path.charCodeAt(0)===47;/* `/` */ // Normalize the path according to POSIX rules.
var value=normalizeString(path,!absolute);if(value.length===0&&!absolute){value='.';}if(value.length>0&&path.charCodeAt(path.length-1)===47/* / */){value+='/';}return absolute?'/'+value:value;}/**
       * Resolve `.` and `..` elements in a path with directory names.
       *
       * @param {string} path
       * @param {boolean} allowAboveRoot
       * @returns {string}
       */function normalizeString(path,allowAboveRoot){var result='';var lastSegmentLength=0;var lastSlash=-1;var dots=0;var index=-1;/** @type {number|undefined} */var code;/** @type {number} */var lastSlashIndex;while(++index<=path.length){if(index<path.length){code=path.charCodeAt(index);}else if(code===47/* `/` */){break;}else{code=47;/* `/` */}if(code===47/* `/` */){if(lastSlash===index-1||dots===1);else if(lastSlash!==index-1&&dots===2){if(result.length<2||lastSegmentLength!==2||result.charCodeAt(result.length-1)!==46/* `.` */||result.charCodeAt(result.length-2)!==46/* `.` */){if(result.length>2){lastSlashIndex=result.lastIndexOf('/');if(lastSlashIndex!==result.length-1){if(lastSlashIndex<0){result='';lastSegmentLength=0;}else{result=result.slice(0,lastSlashIndex);lastSegmentLength=result.length-1-result.lastIndexOf('/');}lastSlash=index;dots=0;continue;}}else if(result.length>0){result='';lastSegmentLength=0;lastSlash=index;dots=0;continue;}}if(allowAboveRoot){result=result.length>0?result+'/..':'..';lastSegmentLength=2;}}else{if(result.length>0){result+='/'+path.slice(lastSlash+1,index);}else{result=path.slice(lastSlash+1,index);}lastSegmentLength=index-lastSlash-1;}lastSlash=index;dots=0;}else if(code===46/* `.` */&&dots>-1){dots++;}else{dots=-1;}}return result;}/**
       * @param {string} path
       */function assertPath$1(path){if(typeof path!=='string'){throw new TypeError('Path must be a string. Received '+JSON.stringify(path));}}/* eslint-enable max-depth, complexity */ // Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
var proc={cwd:cwd};function cwd(){return'/';}/**
       * @typedef URL
       * @property {string} hash
       * @property {string} host
       * @property {string} hostname
       * @property {string} href
       * @property {string} origin
       * @property {string} password
       * @property {string} pathname
       * @property {string} port
       * @property {string} protocol
       * @property {string} search
       * @property {any} searchParams
       * @property {string} username
       * @property {() => string} toString
       * @property {() => string} toJSON
       */ /**
       * @param {unknown} fileURLOrPath
       * @returns {fileURLOrPath is URL}
       */ // From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function isUrl(fileURLOrPath){return fileURLOrPath!==null&&_typeof(fileURLOrPath)==='object'&&// @ts-expect-error: indexable.
fileURLOrPath.href&&// @ts-expect-error: indexable.
fileURLOrPath.origin;}/// <reference lib="dom" />
// See: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js>
/**
       * @param {string|URL} path
       */function urlToPath(path){if(typeof path==='string'){path=new URL(path);}else if(!isUrl(path)){/** @type {NodeJS.ErrnoException} */var _error=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+path+'`');_error.code='ERR_INVALID_ARG_TYPE';throw _error;}if(path.protocol!=='file:'){/** @type {NodeJS.ErrnoException} */var _error2=new TypeError('The URL must be of scheme file');_error2.code='ERR_INVALID_URL_SCHEME';throw _error2;}return getPathFromURLPosix(path);}/**
       * @param {URL} url
       */function getPathFromURLPosix(url){if(url.hostname!==''){/** @type {NodeJS.ErrnoException} */var _error3=new TypeError('File URL host must be "localhost" or empty on darwin');_error3.code='ERR_INVALID_FILE_URL_HOST';throw _error3;}var pathname=url.pathname;var index=-1;while(++index<pathname.length){if(pathname.charCodeAt(index)===37/* `%` */&&pathname.charCodeAt(index+1)===50/* `2` */){var third=pathname.charCodeAt(index+2);if(third===70/* `F` */||third===102/* `f` */){/** @type {NodeJS.ErrnoException} */var _error4=new TypeError('File URL path must not include encoded / characters');_error4.code='ERR_INVALID_FILE_URL_PATH';throw _error4;}}}return decodeURIComponent(pathname);}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Position} Position
       * @typedef {import('unist').Point} Point
       * @typedef {Record<string, unknown> & {type: string, position?: Position|undefined}} NodeLike
       * @typedef {import('./minurl.shared.js').URL} URL
       * @typedef {import('..').VFileData} VFileData
       * @typedef {import('..').VFileValue} VFileValue
       *
       * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'base64url'|'latin1'|'binary'|'hex'} BufferEncoding
       *   Encodings supported by the buffer class.
       *   This is a copy of the typing from Node, copied to prevent Node globals from
       *   being needed.
       *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/90a4ec8/types/node/buffer.d.ts#L170>
       *
       * @typedef {VFileValue|VFileOptions|VFile|URL} VFileCompatible
       *   Things that can be passed to the constructor.
       *
       * @typedef VFileCoreOptions
       * @property {VFileValue} [value]
       * @property {string} [cwd]
       * @property {Array<string>} [history]
       * @property {string|URL} [path]
       * @property {string} [basename]
       * @property {string} [stem]
       * @property {string} [extname]
       * @property {string} [dirname]
       * @property {VFileData} [data]
       *
       * @typedef Map
       *   Raw source map, see:
       *   <https://github.com/mozilla/source-map/blob/58819f0/source-map.d.ts#L15-L23>.
       * @property {number} version
       * @property {Array<string>} sources
       * @property {Array<string>} names
       * @property {string|undefined} [sourceRoot]
       * @property {Array<string>|undefined} [sourcesContent]
       * @property {string} mappings
       * @property {string} file
       *
       * @typedef {{[key: string]: unknown} & VFileCoreOptions} VFileOptions
       *   Configuration: a bunch of keys that will be shallow copied over to the new
       *   file.
       *
       * @typedef {Record<string, unknown>} VFileReporterSettings
       * @typedef {<T = VFileReporterSettings>(files: Array<VFile>, options: T) => string} VFileReporter
       */ // Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order=['history','path','basename','stem','extname','dirname'];var VFile=/*#__PURE__*/function(){/**
         * Create a new virtual file.
         *
         * If `options` is `string` or `Buffer`, treats it as `{value: options}`.
         * If `options` is a `VFile`, shallow copies its data over to the new file.
         * All other given fields are set on the newly created `VFile`.
         *
         * Path related properties are set in the following order (least specific to
         * most specific): `history`, `path`, `basename`, `stem`, `extname`,
         * `dirname`.
         *
         * It’s not possible to set either `dirname` or `extname` without setting
         * either `history`, `path`, `basename`, or `stem` as well.
         *
         * @param {VFileCompatible} [value]
         */function VFile(value){_classCallCheck(this,VFile);/** @type {VFileOptions} */var options;if(!value){options={};}else if(typeof value==='string'||isBuffer(value)){// @ts-expect-error Looks like a buffer.
options={value:value};}else if(isUrl(value)){options={path:value};}else{// @ts-expect-error Looks like file or options.
options=value;}/**
           * Place to store custom information.
           * It’s OK to store custom data directly on the file, moving it to `data`
           * gives a little more privacy.
           * @type {VFileData}
           */this.data={};/**
           * List of messages associated with the file.
           * @type {Array<VFileMessage>}
           */this.messages=[];/**
           * List of file paths the file moved between.
           * @type {Array<string>}
           */this.history=[];/**
           * Base of `path`.
           * Defaults to `process.cwd()` (`/` in browsers).
           * @type {string}
           */this.cwd=proc.cwd();/* eslint-disable no-unused-expressions */ /**
           * Raw value.
           * @type {VFileValue}
           */this.value;// The below are non-standard, they are “well-known”.
// As in, used in several tools.
/**
           * Whether a file was saved to disk.
           * This is used by vfile reporters.
           * @type {boolean}
           */this.stored;/**
           * Sometimes files have a non-string representation.
           * This can be stored in the `result` field.
           * One example is when turning markdown into React nodes.
           * This is used by unified to store non-string results.
           * @type {unknown}
           */this.result;/**
           * Sometimes files have a source map associated with them.
           * This can be stored in the `map` field.
           * This should be a `RawSourceMap` type from the `source-map` module.
           * @type {Map|undefined}
           */this.map;/* eslint-enable no-unused-expressions */ // Set path related properties in the correct order.
var index=-1;while(++index<order.length){var _prop=order[index];// Note: we specifically use `in` instead of `hasOwnProperty` to accept
// `vfile`s too.
if(_prop in options&&options[_prop]!==undefined){// @ts-expect-error: TS is confused by the different types for `history`.
this[_prop]=_prop==='history'?_toConsumableArray(options[_prop]):options[_prop];}}/** @type {string} */var prop;// Set non-path related properties.
for(prop in options){// @ts-expect-error: fine to set other things.
if(!order.includes(prop))this[prop]=options[prop];}}/**
         * Access full path (`~/index.min.js`).
         *
         * @returns {string}
         */_createClass(VFile,[{key:"path",get:function get(){return this.history[this.history.length-1];}/**
         * Set full path (`~/index.min.js`).
         * Cannot be nullified.
         *
         * @param {string|URL} path
         */,set:function set(path){if(isUrl(path)){path=urlToPath(path);}assertNonEmpty(path,'path');if(this.path!==path){this.history.push(path);}}/**
         * Access parent path (`~`).
         */},{key:"dirname",get:function get(){return typeof this.path==='string'?path$1.dirname(this.path):undefined;}/**
         * Set parent path (`~`).
         * Cannot be set if there's no `path` yet.
         */,set:function set(dirname){assertPath(this.basename,'dirname');this.path=path$1.join(dirname||'',this.basename);}/**
         * Access basename (including extname) (`index.min.js`).
         */},{key:"basename",get:function get(){return typeof this.path==='string'?path$1.basename(this.path):undefined;}/**
         * Set basename (`index.min.js`).
         * Cannot contain path separators.
         * Cannot be nullified either (use `file.path = file.dirname` instead).
         */,set:function set(basename){assertNonEmpty(basename,'basename');assertPart(basename,'basename');this.path=path$1.join(this.dirname||'',basename);}/**
         * Access extname (including dot) (`.js`).
         */},{key:"extname",get:function get(){return typeof this.path==='string'?path$1.extname(this.path):undefined;}/**
         * Set extname (including dot) (`.js`).
         * Cannot be set if there's no `path` yet and cannot contain path separators.
         */,set:function set(extname){assertPart(extname,'extname');assertPath(this.dirname,'extname');if(extname){if(extname.charCodeAt(0)!==46/* `.` */){throw new Error('`extname` must start with `.`');}if(extname.includes('.',1)){throw new Error('`extname` cannot contain multiple dots');}}this.path=path$1.join(this.dirname,this.stem+(extname||''));}/**
         * Access stem (w/o extname) (`index.min`).
         */},{key:"stem",get:function get(){return typeof this.path==='string'?path$1.basename(this.path,this.extname):undefined;}/**
         * Set stem (w/o extname) (`index.min`).
         * Cannot be nullified, and cannot contain path separators.
         */,set:function set(stem){assertNonEmpty(stem,'stem');assertPart(stem,'stem');this.path=path$1.join(this.dirname||'',stem+(this.extname||''));}/**
         * Serialize the file.
         *
         * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
         * @returns {string}
         */},{key:"toString",value:function toString(encoding){return(this.value||'').toString(encoding);}/**
         * Create a message and associates it w/ the file.
         *
         * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
         * @param {Node|NodeLike|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
         * @param {string} [origin] Place in code the message originates from (`string`, optional).
         * @returns {VFileMessage}
         */},{key:"message",value:function message(reason,place,origin){var message=new VFileMessage(reason,place,origin);if(this.path){message.name=this.path+':'+message.name;message.file=this.path;}message.fatal=false;this.messages.push(message);return message;}/**
         * Info: create a message, associate it with the file, and mark the fatality
         * as `null`.
         * Calls `message()` internally.
         *
         * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
         * @param {Node|NodeLike|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
         * @param {string} [origin] Place in code the message originates from (`string`, optional).
         * @returns {VFileMessage}
         */},{key:"info",value:function info(reason,place,origin){var message=this.message(reason,place,origin);message.fatal=null;return message;}/**
         * Fail: create a message, associate it with the file, mark the fatality as
         * `true`.
         * Note: fatal errors mean a file is no longer processable.
         * Calls `message()` internally.
         *
         * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
         * @param {Node|NodeLike|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
         * @param {string} [origin] Place in code the message originates from (`string`, optional).
         * @returns {never}
         */},{key:"fail",value:function fail(reason,place,origin){var message=this.message(reason,place,origin);message.fatal=true;throw message;}}]);return VFile;}();/**
       * Assert that `part` is not a path (as in, does not contain `path.sep`).
       *
       * @param {string|undefined} part
       * @param {string} name
       * @returns {void}
       */function assertPart(part,name){if(part&&part.includes(path$1.sep)){throw new Error('`'+name+'` cannot be a path: did not expect `'+path$1.sep+'`');}}/**
       * Assert that `part` is not empty.
       *
       * @param {string|undefined} part
       * @param {string} name
       * @returns {asserts part is string}
       */function assertNonEmpty(part,name){if(!part){throw new Error('`'+name+'` cannot be empty');}}/**
       * Assert `path` exists.
       *
       * @param {string|undefined} path
       * @param {string} name
       * @returns {asserts path is string}
       */function assertPath(path,name){if(!path){throw new Error('Setting `'+name+'` requires `path` to be set too');}}/**
       * Throw a given error.
       *
       * @param {Error|null|undefined} [error]
       *   Maybe error.
       * @returns {asserts error is null|undefined}
       */function bail(error){if(error){throw error;}}var hasOwn=Object.prototype.hasOwnProperty;var toStr=Object.prototype.toString;var defineProperty=Object.defineProperty;var gOPD=Object.getOwnPropertyDescriptor;var isArray=function isArray(arr){if(typeof Array.isArray==='function'){return Array.isArray(arr);}return toStr.call(arr)==='[object Array]';};var isPlainObject$1=function isPlainObject(obj){if(!obj||toStr.call(obj)!=='[object Object]'){return false;}var hasOwnConstructor=hasOwn.call(obj,'constructor');var hasIsPrototypeOf=obj.constructor&&obj.constructor.prototype&&hasOwn.call(obj.constructor.prototype,'isPrototypeOf');// Not own constructor property must be Object
if(obj.constructor&&!hasOwnConstructor&&!hasIsPrototypeOf){return false;}// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
var key;for(key in obj){/**/}return typeof key==='undefined'||hasOwn.call(obj,key);};// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty=function setProperty(target,options){if(defineProperty&&options.name==='__proto__'){defineProperty(target,options.name,{enumerable:true,configurable:true,value:options.newValue,writable:true});}else{target[options.name]=options.newValue;}};// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty=function getProperty(obj,name){if(name==='__proto__'){if(!hasOwn.call(obj,name)){return void 0;}else if(gOPD){// In early versions of node, obj['__proto__'] is buggy when obj has
// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
return gOPD(obj,name).value;}}return obj[name];};var extend=function extend(){var options,name,src,copy,copyIsArray,clone;var target=arguments[0];var i=1;var length=arguments.length;var deep=false;// Handle a deep copy situation
if(typeof target==='boolean'){deep=target;target=arguments[1]||{};// skip the boolean and the target
i=2;}if(target==null||_typeof(target)!=='object'&&typeof target!=='function'){target={};}for(;i<length;++i){options=arguments[i];// Only deal with non-null/undefined values
if(options!=null){// Extend the base object
for(name in options){src=getProperty(target,name);copy=getProperty(options,name);// Prevent never-ending loop
if(target!==copy){// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(isPlainObject$1(copy)||(copyIsArray=isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&isArray(src)?src:[];}else{clone=src&&isPlainObject$1(src)?src:{};}// Never move original objects, clone them
setProperty(target,{name:name,newValue:extend(deep,clone,copy)});// Don't bring in undefined values
}else if(typeof copy!=='undefined'){setProperty(target,{name:name,newValue:copy});}}}}}// Return the modified object
return target;};function isPlainObject(value){if(Object.prototype.toString.call(value)!=='[object Object]'){return false;}var prototype=Object.getPrototypeOf(value);return prototype===null||prototype===Object.prototype;}/**
       * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
       * @typedef {(...input: Array<any>) => any} Middleware
       *
       * @typedef {(...input: Array<any>) => void} Run
       *   Call all middleware.
       * @typedef {(fn: Middleware) => Pipeline} Use
       *   Add `fn` (middleware) to the list.
       * @typedef {{run: Run, use: Use}} Pipeline
       *   Middleware.
       */ /**
       * Create new middleware.
       *
       * @returns {Pipeline}
       */function trough(){/** @type {Array<Middleware>} */var fns=[];/** @type {Pipeline} */var pipeline={run:run,use:use};return pipeline;/** @type {Run} */function run(){for(var _len2=arguments.length,values=new Array(_len2),_key2=0;_key2<_len2;_key2++){values[_key2]=arguments[_key2];}var middlewareIndex=-1;/** @type {Callback} */var callback=values.pop();if(typeof callback!=='function'){throw new TypeError('Expected function as last argument, not '+callback);}next.apply(void 0,[null].concat(_toConsumableArray(values)));/**
           * Run the next `fn`, or we’re done.
           *
           * @param {Error|null|undefined} error
           * @param {Array<any>} output
           */function next(error){var fn=fns[++middlewareIndex];var index=-1;if(error){callback(error);return;}// Copy non-nullish input into values.
for(var _len3=arguments.length,output=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){output[_key3-1]=arguments[_key3];}while(++index<values.length){if(output[index]===null||output[index]===undefined){output[index]=values[index];}}// Save the newly created `output` for the next call.
values=output;// Next or done.
if(fn){wrap$1(fn,next).apply(void 0,output);}else{callback.apply(void 0,[null].concat(output));}}}/** @type {Use} */function use(middelware){if(typeof middelware!=='function'){throw new TypeError('Expected `middelware` to be a function, not '+middelware);}fns.push(middelware);return pipeline;}}/**
       * Wrap `middleware`.
       * Can be sync or async; return a promise, receive a callback, or return new
       * values and errors.
       *
       * @param {Middleware} middleware
       * @param {Callback} callback
       */function wrap$1(middleware,callback){/** @type {boolean} */var called;return wrapped;/**
         * Call `middleware`.
         * @this {any}
         * @param {Array<any>} parameters
         * @returns {void}
         */function wrapped(){for(var _len4=arguments.length,parameters=new Array(_len4),_key4=0;_key4<_len4;_key4++){parameters[_key4]=arguments[_key4];}var fnExpectsCallback=middleware.length>parameters.length;/** @type {any} */var result;if(fnExpectsCallback){parameters.push(done);}try{result=middleware.apply(this,parameters);}catch(error){var exception=/** @type {Error} */error;// Well, this is quite the pickle.
// `middleware` received a callback and called it synchronously, but that
// threw an error.
// The only thing left to do is to throw the thing instead.
if(fnExpectsCallback&&called){throw exception;}return done(exception);}if(!fnExpectsCallback){if(result instanceof Promise){result.then(then,done);}else if(result instanceof Error){done(result);}else{then(result);}}}/**
         * Call `callback`, only once.
         * @type {Callback}
         */function done(error){if(!called){called=true;for(var _len5=arguments.length,output=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){output[_key5-1]=arguments[_key5];}callback.apply(void 0,[error].concat(output));}}/**
         * Call `done` with one value.
         *
         * @param {any} [value]
         */function then(value){done(null,value);}}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('vfile').VFileCompatible} VFileCompatible
       * @typedef {import('vfile').VFileValue} VFileValue
       * @typedef {import('..').Processor} Processor
       * @typedef {import('..').Plugin} Plugin
       * @typedef {import('..').Preset} Preset
       * @typedef {import('..').Pluggable} Pluggable
       * @typedef {import('..').PluggableList} PluggableList
       * @typedef {import('..').Transformer} Transformer
       * @typedef {import('..').Parser} Parser
       * @typedef {import('..').Compiler} Compiler
       * @typedef {import('..').RunCallback} RunCallback
       * @typedef {import('..').ProcessCallback} ProcessCallback
       *
       * @typedef Context
       * @property {Node} tree
       * @property {VFile} file
       */ // Expose a frozen processor.
var unified=base().freeze();var own$f={}.hasOwnProperty;// Function to create the first processor.
/**
       * @returns {Processor}
       */function base(){var transformers=trough();/** @type {Processor['attachers']} */var attachers=[];/** @type {Record<string, unknown>} */var namespace={};/** @type {boolean|undefined} */var frozen;var freezeIndex=-1;// Data management.
// @ts-expect-error: overloads are handled.
processor.data=data;processor.Parser=undefined;processor.Compiler=undefined;// Lock.
processor.freeze=freeze;// Plugins.
processor.attachers=attachers;// @ts-expect-error: overloads are handled.
processor.use=use;// API.
processor.parse=parse;processor.stringify=stringify;// @ts-expect-error: overloads are handled.
processor.run=run;processor.runSync=runSync;// @ts-expect-error: overloads are handled.
processor.process=process;processor.processSync=processSync;// Expose.
return processor;// Create a new processor based on the processor in the current scope.
/** @type {Processor} */function processor(){var destination=base();var index=-1;while(++index<attachers.length){destination.use.apply(destination,_toConsumableArray(attachers[index]));}destination.data(extend(true,{},namespace));return destination;}/**
         * @param {string|Record<string, unknown>} [key]
         * @param {unknown} [value]
         * @returns {unknown}
         */function data(key,value){if(typeof key==='string'){// Set `key`.
if(arguments.length===2){assertUnfrozen('data',frozen);namespace[key]=value;return processor;}// Get `key`.
return own$f.call(namespace,key)&&namespace[key]||null;}// Set space.
if(key){assertUnfrozen('data',frozen);namespace=key;return processor;}// Get space.
return namespace;}/** @type {Processor['freeze']} */function freeze(){if(frozen){return processor;}while(++freezeIndex<attachers.length){var _attachers$freezeInde=_toArray(attachers[freezeIndex]),attacher=_attachers$freezeInde[0],options=_attachers$freezeInde.slice(1);if(options[0]===false){continue;}if(options[0]===true){options[0]=undefined;}/** @type {Transformer|void} */var transformer=attacher.call.apply(attacher,[processor].concat(_toConsumableArray(options)));if(typeof transformer==='function'){transformers.use(transformer);}}frozen=true;freezeIndex=Number.POSITIVE_INFINITY;return processor;}/**
         * @param {Pluggable|null|undefined} [value]
         * @param {...unknown} options
         * @returns {Processor}
         */function use(value){for(var _len6=arguments.length,options=new Array(_len6>1?_len6-1:0),_key6=1;_key6<_len6;_key6++){options[_key6-1]=arguments[_key6];}/** @type {Record<string, unknown>|undefined} */var settings;assertUnfrozen('use',frozen);if(value===null||value===undefined);else if(typeof value==='function'){addPlugin.apply(void 0,[value].concat(options));}else if(_typeof(value)==='object'){if(Array.isArray(value)){addList(value);}else{addPreset(value);}}else{throw new TypeError('Expected usable value, not `'+value+'`');}if(settings){namespace.settings=Object.assign(namespace.settings||{},settings);}return processor;/**
           * @param {import('..').Pluggable<unknown[]>} value
           * @returns {void}
           */function add(value){if(typeof value==='function'){addPlugin(value);}else if(_typeof(value)==='object'){if(Array.isArray(value)){var _value=_toArray(value),plugin=_value[0],_options=_value.slice(1);addPlugin.apply(void 0,[plugin].concat(_toConsumableArray(_options)));}else{addPreset(value);}}else{throw new TypeError('Expected usable value, not `'+value+'`');}}/**
           * @param {Preset} result
           * @returns {void}
           */function addPreset(result){addList(result.plugins);if(result.settings){settings=Object.assign(settings||{},result.settings);}}/**
           * @param {PluggableList|null|undefined} [plugins]
           * @returns {void}
           */function addList(plugins){var index=-1;if(plugins===null||plugins===undefined);else if(Array.isArray(plugins)){while(++index<plugins.length){var thing=plugins[index];add(thing);}}else{throw new TypeError('Expected a list of plugins, not `'+plugins+'`');}}/**
           * @param {Plugin} plugin
           * @param {...unknown} [value]
           * @returns {void}
           */function addPlugin(plugin,value){var index=-1;/** @type {Processor['attachers'][number]|undefined} */var entry;while(++index<attachers.length){if(attachers[index][0]===plugin){entry=attachers[index];break;}}if(entry){if(isPlainObject(entry[1])&&isPlainObject(value)){value=extend(true,entry[1],value);}entry[1]=value;}else{// @ts-expect-error: fine.
attachers.push(Array.prototype.slice.call(arguments));}}}/** @type {Processor['parse']} */function parse(doc){processor.freeze();var file=vfile(doc);var Parser=processor.Parser;assertParser('parse',Parser);if(newable(Parser,'parse')){// @ts-expect-error: `newable` checks this.
return new Parser(String(file),file).parse();}// @ts-expect-error: `newable` checks this.
return Parser(String(file),file);// eslint-disable-line new-cap
}/** @type {Processor['stringify']} */function stringify(node,doc){processor.freeze();var file=vfile(doc);var Compiler=processor.Compiler;assertCompiler('stringify',Compiler);assertNode(node);if(newable(Compiler,'compile')){// @ts-expect-error: `newable` checks this.
return new Compiler(node,file).compile();}// @ts-expect-error: `newable` checks this.
return Compiler(node,file);// eslint-disable-line new-cap
}/**
         * @param {Node} node
         * @param {VFileCompatible|RunCallback} [doc]
         * @param {RunCallback} [callback]
         * @returns {Promise<Node>|void}
         */function run(node,doc,callback){assertNode(node);processor.freeze();if(!callback&&typeof doc==='function'){callback=doc;doc=undefined;}if(!callback){return new Promise(executor);}executor(null,callback);/**
           * @param {null|((node: Node) => void)} resolve
           * @param {(error: Error) => void} reject
           * @returns {void}
           */function executor(resolve,reject){// @ts-expect-error: `doc` can’t be a callback anymore, we checked.
transformers.run(node,vfile(doc),done);/**
             * @param {Error|null} error
             * @param {Node} tree
             * @param {VFile} file
             * @returns {void}
             */function done(error,tree,file){tree=tree||node;if(error){reject(error);}else if(resolve){resolve(tree);}else{// @ts-expect-error: `callback` is defined if `resolve` is not.
callback(null,tree,file);}}}}/** @type {Processor['runSync']} */function runSync(node,file){/** @type {Node|undefined} */var result;/** @type {boolean|undefined} */var complete;processor.run(node,file,done);assertDone('runSync','run',complete);// @ts-expect-error: we either bailed on an error or have a tree.
return result;/**
           * @param {Error|null} [error]
           * @param {Node} [tree]
           * @returns {void}
           */function done(error,tree){bail(error);result=tree;complete=true;}}/**
         * @param {VFileCompatible} doc
         * @param {ProcessCallback} [callback]
         * @returns {Promise<VFile>|undefined}
         */function process(doc,callback){processor.freeze();assertParser('process',processor.Parser);assertCompiler('process',processor.Compiler);if(!callback){return new Promise(executor);}executor(null,callback);/**
           * @param {null|((file: VFile) => void)} resolve
           * @param {(error?: Error|null|undefined) => void} reject
           * @returns {void}
           */function executor(resolve,reject){var file=vfile(doc);processor.run(processor.parse(file),file,function(error,tree,file){if(error||!tree||!file){done(error);}else{/** @type {unknown} */var result=processor.stringify(tree,file);if(result===undefined||result===null);else if(looksLikeAVFileValue(result)){file.value=result;}else{file.result=result;}done(error,file);}});/**
             * @param {Error|null|undefined} [error]
             * @param {VFile|undefined} [file]
             * @returns {void}
             */function done(error,file){if(error||!file){reject(error);}else if(resolve){resolve(file);}else{// @ts-expect-error: `callback` is defined if `resolve` is not.
callback(null,file);}}}}/** @type {Processor['processSync']} */function processSync(doc){/** @type {boolean|undefined} */var complete;processor.freeze();assertParser('processSync',processor.Parser);assertCompiler('processSync',processor.Compiler);var file=vfile(doc);processor.process(file,done);assertDone('processSync','process',complete);return file;/**
           * @param {Error|null|undefined} [error]
           * @returns {void}
           */function done(error){complete=true;bail(error);}}}/**
       * Check if `value` is a constructor.
       *
       * @param {unknown} value
       * @param {string} name
       * @returns {boolean}
       */function newable(value,name){return typeof value==='function'&&// Prototypes do exist.
// type-coverage:ignore-next-line
value.prototype&&(// A function with keys in its prototype is probably a constructor.
// Classes’ prototype methods are not enumerable, so we check if some value
// exists in the prototype.
// type-coverage:ignore-next-line
keys(value.prototype)||name in value.prototype);}/**
       * Check if `value` is an object with keys.
       *
       * @param {Record<string, unknown>} value
       * @returns {boolean}
       */function keys(value){/** @type {string} */var key;for(key in value){if(own$f.call(value,key)){return true;}}return false;}/**
       * Assert a parser is available.
       *
       * @param {string} name
       * @param {unknown} value
       * @returns {asserts value is Parser}
       */function assertParser(name,value){if(typeof value!=='function'){throw new TypeError('Cannot `'+name+'` without `Parser`');}}/**
       * Assert a compiler is available.
       *
       * @param {string} name
       * @param {unknown} value
       * @returns {asserts value is Compiler}
       */function assertCompiler(name,value){if(typeof value!=='function'){throw new TypeError('Cannot `'+name+'` without `Compiler`');}}/**
       * Assert the processor is not frozen.
       *
       * @param {string} name
       * @param {unknown} frozen
       * @returns {asserts frozen is false}
       */function assertUnfrozen(name,frozen){if(frozen){throw new Error('Cannot call `'+name+'` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');}}/**
       * Assert `node` is a unist node.
       *
       * @param {unknown} node
       * @returns {asserts node is Node}
       */function assertNode(node){// `isPlainObj` unfortunately uses `any` instead of `unknown`.
// type-coverage:ignore-next-line
if(!isPlainObject(node)||typeof node.type!=='string'){throw new TypeError('Expected node, got `'+node+'`');// Fine.
}}/**
       * Assert that `complete` is `true`.
       *
       * @param {string} name
       * @param {string} asyncName
       * @param {unknown} complete
       * @returns {asserts complete is true}
       */function assertDone(name,asyncName,complete){if(!complete){throw new Error('`'+name+'` finished async. Use `'+asyncName+'` instead');}}/**
       * @param {VFileCompatible} [value]
       * @returns {VFile}
       */function vfile(value){return looksLikeAVFile(value)?value:new VFile(value);}/**
       * @param {VFileCompatible} [value]
       * @returns {value is VFile}
       */function looksLikeAVFile(value){return Boolean(value&&_typeof(value)==='object'&&'message'in value&&'messages'in value);}/**
       * @param {unknown} [value]
       * @returns {value is VFileValue}
       */function looksLikeAVFileValue(value){return typeof value==='string'||isBuffer(value);}/**
       * @typedef Options
       * @property {boolean} [includeImageAlt=true]
       */ /**
       * Get the text content of a node.
       * Prefer the node’s plain-text fields, otherwise serialize its children,
       * and if the given value is an array, serialize the nodes in it.
       *
       * @param {unknown} node
       * @param {Options} [options]
       * @returns {string}
       */function toString(node,options){var _ref=options||{},_ref$includeImageAlt=_ref.includeImageAlt,includeImageAlt=_ref$includeImageAlt===void 0?true:_ref$includeImageAlt;return one$2(node,includeImageAlt);}/**
       * @param {unknown} node
       * @param {boolean} includeImageAlt
       * @returns {string}
       */function one$2(node,includeImageAlt){return node&&_typeof(node)==='object'&&(// @ts-ignore looks like a literal.
node.value||(// @ts-ignore looks like an image.
includeImageAlt?node.alt:'')||// @ts-ignore looks like a parent.
'children'in node&&all$2(node.children,includeImageAlt)||Array.isArray(node)&&all$2(node,includeImageAlt))||'';}/**
       * @param {Array.<unknown>} values
       * @param {boolean} includeImageAlt
       * @returns {string}
       */function all$2(values,includeImageAlt){/** @type {Array.<string>} */var result=[];var index=-1;while(++index<values.length){result[index]=one$2(values[index],includeImageAlt);}return result.join('');}/**
       * Like `Array#splice`, but smarter for giant arrays.
       *
       * `Array#splice` takes all items to be inserted as individual argument which
       * causes a stack overflow in V8 when trying to insert 100k items for instance.
       *
       * Otherwise, this does not return the removed items, and takes `items` as an
       * array instead of rest parameters.
       *
       * @template {unknown} T
       * @param {T[]} list
       * @param {number} start
       * @param {number} remove
       * @param {T[]} items
       * @returns {void}
       */function splice(list,start,remove,items){var end=list.length;var chunkStart=0;/** @type {unknown[]} */var parameters;// Make start between zero and `end` (included).
if(start<0){start=-start>end?0:end+start;}else{start=start>end?end:start;}remove=remove>0?remove:0;// No need to chunk the items if there’s only a couple (10k) items.
if(items.length<10000){parameters=Array.from(items);parameters.unshift(start,remove)// @ts-expect-error Hush, it’s fine.
;[].splice.apply(list,parameters);}else{// Delete `remove` items starting from `start`
if(remove)[].splice.apply(list,[start,remove]);// Insert the items in chunks to not cause stack overflows.
while(chunkStart<items.length){parameters=items.slice(chunkStart,chunkStart+10000);parameters.unshift(start,0)// @ts-expect-error Hush, it’s fine.
;[].splice.apply(list,parameters);chunkStart+=10000;start+=10000;}}}/**
       * Append `items` (an array) at the end of `list` (another array).
       * When `list` was empty, returns `items` instead.
       *
       * This prevents a potentially expensive operation when `list` is empty,
       * and adds items in batches to prevent V8 from hanging.
       *
       * @template {unknown} T
       * @param {T[]} list
       * @param {T[]} items
       * @returns {T[]}
       */function push(list,items){if(list.length>0){splice(list,list.length,0,items);return list;}return items;}/**
       * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
       * @typedef {import('micromark-util-types').Extension} Extension
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
       */var hasOwnProperty={}.hasOwnProperty;/**
       * Combine several syntax extensions into one.
       *
       * @param {Extension[]} extensions List of syntax extensions.
       * @returns {NormalizedExtension} A single combined extension.
       */function combineExtensions(extensions){/** @type {NormalizedExtension} */var all={};var index=-1;while(++index<extensions.length){syntaxExtension(all,extensions[index]);}return all;}/**
       * Merge `extension` into `all`.
       *
       * @param {NormalizedExtension} all Extension to merge into.
       * @param {Extension} extension Extension to merge.
       * @returns {void}
       */function syntaxExtension(all,extension){/** @type {string} */var hook;for(hook in extension){var maybe=hasOwnProperty.call(all,hook)?all[hook]:undefined;var left=maybe||(all[hook]={});var right=extension[hook];/** @type {string} */var _code2=void 0;for(_code2 in right){if(!hasOwnProperty.call(left,_code2))left[_code2]=[];var value=right[_code2];constructs(// @ts-expect-error Looks like a list.
left[_code2],Array.isArray(value)?value:value?[value]:[]);}}}/**
       * Merge `list` into `existing` (both lists of constructs).
       * Mutates `existing`.
       *
       * @param {unknown[]} existing
       * @param {unknown[]} list
       * @returns {void}
       */function constructs(existing,list){var index=-1;/** @type {unknown[]} */var before=[];while(++index<list.length){(list[index].add==='after'?existing:before).push(list[index]);}splice(existing,0,0,before);}// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
var unicodePunctuationRegex=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;/**
       * @typedef {import('micromark-util-types').Code} Code
       */ /**
       * Check whether the character code represents an ASCII alpha (`a` through `z`,
       * case insensitive).
       *
       * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
       *
       * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
       * to U+005A (`Z`).
       *
       * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
       * to U+007A (`z`).
       */var asciiAlpha=regexCheck(/[A-Za-z]/);/**
       * Check whether the character code represents an ASCII digit (`0` through `9`).
       *
       * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
       * U+0039 (`9`).
       */var asciiDigit=regexCheck(/\d/);/**
       * Check whether the character code represents an ASCII hex digit (`a` through
       * `f`, case insensitive, or `0` through `9`).
       *
       * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
       * digit, or an ASCII lower hex digit.
       *
       * An **ASCII upper hex digit** is a character in the inclusive range U+0041
       * (`A`) to U+0046 (`F`).
       *
       * An **ASCII lower hex digit** is a character in the inclusive range U+0061
       * (`a`) to U+0066 (`f`).
       */var asciiHexDigit=regexCheck(/[\dA-Fa-f]/);/**
       * Check whether the character code represents an ASCII alphanumeric (`a`
       * through `z`, case insensitive, or `0` through `9`).
       *
       * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
       * (see `asciiAlpha`).
       */var asciiAlphanumeric=regexCheck(/[\dA-Za-z]/);/**
       * Check whether the character code represents ASCII punctuation.
       *
       * An **ASCII punctuation** is a character in the inclusive ranges U+0021
       * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
       * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
       * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
       */var asciiPunctuation=regexCheck(/[!-/:-@[-`{-~]/);/**
       * Check whether the character code represents an ASCII atext.
       *
       * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
       * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
       * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
       * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
       * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
       * (`{`) to U+007E TILDE (`~`).
       *
       * See:
       * **\[RFC5322]**:
       * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
       * P. Resnick.
       * IETF.
       */var asciiAtext=regexCheck(/[#-'*+\--9=?A-Z^-~]/);/**
       * Check whether a character code is an ASCII control character.
       *
       * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
       * to U+001F (US), or U+007F (DEL).
       *
       * @param {Code} code
       * @returns {code is number}
       */function asciiControl(code){return(// Special whitespace codes (which have negative values), C0 and Control
// character DEL
code!==null&&(code<32||code===127));}/**
       * Check whether a character code is a markdown line ending (see
       * `markdownLineEnding`) or markdown space (see `markdownSpace`).
       *
       * @param {Code} code
       * @returns {code is number}
       */function markdownLineEndingOrSpace(code){return code!==null&&(code<0||code===32);}/**
       * Check whether a character code is a markdown line ending.
       *
       * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
       * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
       *
       * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
       * RETURN (CR) are replaced by these virtual characters depending on whether
       * they occurred together.
       *
       * @param {Code} code
       * @returns {code is number}
       */function markdownLineEnding(code){return code!==null&&code<-2;}/**
       * Check whether a character code is a markdown space.
       *
       * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
       * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
       *
       * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
       * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
       * SPACE (VS) characters, depending on the column at which the tab occurred.
       *
       * @param {Code} code
       * @returns {code is number}
       */function markdownSpace(code){return code===-2||code===-1||code===32;}/**
       * Check whether the character code represents Unicode whitespace.
       *
       * Note that this does handle micromark specific markdown whitespace characters.
       * See `markdownLineEndingOrSpace` to check that.
       *
       * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
       * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
       * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
       *
       * See:
       * **\[UNICODE]**:
       * [The Unicode Standard](https://www.unicode.org/versions/).
       * Unicode Consortium.
       */var unicodeWhitespace=regexCheck(/\s/);/**
       * Check whether the character code represents Unicode punctuation.
       *
       * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
       * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
       * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
       * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
       * punctuation (see `asciiPunctuation`).
       *
       * See:
       * **\[UNICODE]**:
       * [The Unicode Standard](https://www.unicode.org/versions/).
       * Unicode Consortium.
       */ // Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.
var unicodePunctuation=regexCheck(unicodePunctuationRegex);/**
       * Create a code check from a regex.
       *
       * @param {RegExp} regex
       * @returns {(code: Code) => code is number}
       */function regexCheck(regex){return check;/**
         * Check whether a code matches the bound regex.
         *
         * @param {Code} code Character code
         * @returns {code is number} Whether the character code matches the bound regex
         */function check(code){return code!==null&&regex.test(String.fromCharCode(code));}}/**
       * @typedef {import('micromark-util-types').Effects} Effects
       * @typedef {import('micromark-util-types').State} State
       */ /**
       * @param {Effects} effects
       * @param {State} ok
       * @param {string} type
       * @param {number} [max=Infinity]
       * @returns {State}
       */function factorySpace(effects,ok,type,max){var limit=max?max-1:Number.POSITIVE_INFINITY;var size=0;return start;/** @type {State} */function start(code){if(markdownSpace(code)){effects.enter(type);return prefix(code);}return ok(code);}/** @type {State} */function prefix(code){if(markdownSpace(code)&&size++<limit){effects.consume(code);return prefix;}effects.exit(type);return ok(code);}}/**
       * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
       * @typedef {import('micromark-util-types').Initializer} Initializer
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {InitialConstruct} */var content$1={tokenize:initializeContent};/** @type {Initializer} */function initializeContent(effects){var contentStart=effects.attempt(this.parser.constructs.contentInitial,afterContentStartConstruct,paragraphInitial);/** @type {Token} */var previous;return contentStart;/** @type {State} */function afterContentStartConstruct(code){if(code===null){effects.consume(code);return;}effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return factorySpace(effects,contentStart,'linePrefix');}/** @type {State} */function paragraphInitial(code){effects.enter('paragraph');return lineStart(code);}/** @type {State} */function lineStart(code){var token=effects.enter('chunkText',{contentType:'text',previous:previous});if(previous){previous.next=token;}previous=token;return data(code);}/** @type {State} */function data(code){if(code===null){effects.exit('chunkText');effects.exit('paragraph');effects.consume(code);return;}if(markdownLineEnding(code)){effects.consume(code);effects.exit('chunkText');return lineStart;}// Data.
effects.consume(code);return data;}}/**
       * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
       * @typedef {import('micromark-util-types').Initializer} Initializer
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Point} Point
       */ /** @type {InitialConstruct} */var document$2={tokenize:initializeDocument};/** @type {Construct} */var containerConstruct={tokenize:tokenizeContainer};/** @type {Initializer} */function initializeDocument(effects){var self=this;/** @type {StackItem[]} */var stack=[];var continued=0;/** @type {TokenizeContext|undefined} */var childFlow;/** @type {Token|undefined} */var childToken;/** @type {number} */var lineStartOffset;return start;/** @type {State} */function start(code){// First we iterate through the open blocks, starting with the root
// document, and descending through last children down to the last open
// block.
// Each block imposes a condition that the line must satisfy if the block is
// to remain open.
// For example, a block quote requires a `>` character.
// A paragraph requires a non-blank line.
// In this phase we may match all or just some of the open blocks.
// But we cannot close unmatched blocks yet, because we may have a lazy
// continuation line.
if(continued<stack.length){var item=stack[continued];self.containerState=item[1];return effects.attempt(item[0].continuation,documentContinue,checkNewContainers)(code);}// Done.
return checkNewContainers(code);}/** @type {State} */function documentContinue(code){continued++;// Note: this field is called `_closeFlow` but it also closes containers.
// Perhaps a good idea to rename it but it’s already used in the wild by
// extensions.
if(self.containerState._closeFlow){self.containerState._closeFlow=undefined;if(childFlow){closeFlow();}// Note: this algorithm for moving events around is similar to the
// algorithm when dealing with lazy lines in `writeToChild`.
var indexBeforeExits=self.events.length;var indexBeforeFlow=indexBeforeExits;/** @type {Point|undefined} */var _point;// Find the flow chunk.
while(indexBeforeFlow--){if(self.events[indexBeforeFlow][0]==='exit'&&self.events[indexBeforeFlow][1].type==='chunkFlow'){_point=self.events[indexBeforeFlow][1].end;break;}}exitContainers(continued);// Fix positions.
var _index2=indexBeforeExits;while(_index2<self.events.length){self.events[_index2][1].end=Object.assign({},_point);_index2++;}// Inject the exits earlier (they’re still also at the end).
splice(self.events,indexBeforeFlow+1,0,self.events.slice(indexBeforeExits));// Discard the duplicate exits.
self.events.length=_index2;return checkNewContainers(code);}return start(code);}/** @type {State} */function checkNewContainers(code){// Next, after consuming the continuation markers for existing blocks, we
// look for new block starts (e.g. `>` for a block quote).
// If we encounter a new block start, we close any blocks unmatched in
// step 1 before creating the new block as a child of the last matched
// block.
if(continued===stack.length){// No need to `check` whether there’s a container, of `exitContainers`
// would be moot.
// We can instead immediately `attempt` to parse one.
if(!childFlow){return documentContinued(code);}// If we have concrete content, such as block HTML or fenced code,
// we can’t have containers “pierce” into them, so we can immediately
// start.
if(childFlow.currentConstruct&&childFlow.currentConstruct.concrete){return flowStart(code);}// If we do have flow, it could still be a blank line,
// but we’d be interrupting it w/ a new container if there’s a current
// construct.
self.interrupt=Boolean(childFlow.currentConstruct&&!childFlow._gfmTableDynamicInterruptHack);}// Check if there is a new container.
self.containerState={};return effects.check(containerConstruct,thereIsANewContainer,thereIsNoNewContainer)(code);}/** @type {State} */function thereIsANewContainer(code){if(childFlow)closeFlow();exitContainers(continued);return documentContinued(code);}/** @type {State} */function thereIsNoNewContainer(code){self.parser.lazy[self.now().line]=continued!==stack.length;lineStartOffset=self.now().offset;return flowStart(code);}/** @type {State} */function documentContinued(code){// Try new containers.
self.containerState={};return effects.attempt(containerConstruct,containerContinue,flowStart)(code);}/** @type {State} */function containerContinue(code){continued++;stack.push([self.currentConstruct,self.containerState]);// Try another.
return documentContinued(code);}/** @type {State} */function flowStart(code){if(code===null){if(childFlow)closeFlow();exitContainers(0);effects.consume(code);return;}childFlow=childFlow||self.parser.flow(self.now());effects.enter('chunkFlow',{contentType:'flow',previous:childToken,_tokenizer:childFlow});return flowContinue(code);}/** @type {State} */function flowContinue(code){if(code===null){writeToChild(effects.exit('chunkFlow'),true);exitContainers(0);effects.consume(code);return;}if(markdownLineEnding(code)){effects.consume(code);writeToChild(effects.exit('chunkFlow'));// Get ready for the next line.
continued=0;self.interrupt=undefined;return start;}effects.consume(code);return flowContinue;}/**
         * @param {Token} token
         * @param {boolean} [eof]
         * @returns {void}
         */function writeToChild(token,eof){var stream=self.sliceStream(token);if(eof)stream.push(null);token.previous=childToken;if(childToken)childToken.next=token;childToken=token;childFlow.defineSkip(token.start);childFlow.write(stream);// Alright, so we just added a lazy line:
//
// ```markdown
// > a
// b.
//
// Or:
//
// > ~~~c
// d
//
// Or:
//
// > | e |
// f
// ```
//
// The construct in the second example (fenced code) does not accept lazy
// lines, so it marked itself as done at the end of its first line, and
// then the content construct parses `d`.
// Most constructs in markdown match on the first line: if the first line
// forms a construct, a non-lazy line can’t “unmake” it.
//
// The construct in the third example is potentially a GFM table, and
// those are *weird*.
// It *could* be a table, from the first line, if the following line
// matches a condition.
// In this case, that second line is lazy, which “unmakes” the first line
// and turns the whole into one content block.
//
// We’ve now parsed the non-lazy and the lazy line, and can figure out
// whether the lazy line started a new flow block.
// If it did, we exit the current containers between the two flow blocks.
if(self.parser.lazy[token.start.line]){var _index3=childFlow.events.length;while(_index3--){if(// The token starts before the line ending…
childFlow.events[_index3][1].start.offset<lineStartOffset&&(// …and either is not ended yet…
!childFlow.events[_index3][1].end||// …or ends after it.
childFlow.events[_index3][1].end.offset>lineStartOffset)){// Exit: there’s still something open, which means it’s a lazy line
// part of something.
return;}}// Note: this algorithm for moving events around is similar to the
// algorithm when closing flow in `documentContinue`.
var indexBeforeExits=self.events.length;var indexBeforeFlow=indexBeforeExits;/** @type {boolean|undefined} */var seen;/** @type {Point|undefined} */var _point2;// Find the previous chunk (the one before the lazy line).
while(indexBeforeFlow--){if(self.events[indexBeforeFlow][0]==='exit'&&self.events[indexBeforeFlow][1].type==='chunkFlow'){if(seen){_point2=self.events[indexBeforeFlow][1].end;break;}seen=true;}}exitContainers(continued);// Fix positions.
_index3=indexBeforeExits;while(_index3<self.events.length){self.events[_index3][1].end=Object.assign({},_point2);_index3++;}// Inject the exits earlier (they’re still also at the end).
splice(self.events,indexBeforeFlow+1,0,self.events.slice(indexBeforeExits));// Discard the duplicate exits.
self.events.length=_index3;}}/**
         * @param {number} size
         * @returns {void}
         */function exitContainers(size){var index=stack.length;// Exit open containers.
while(index-->size){var entry=stack[index];self.containerState=entry[1];entry[0].exit.call(self,effects);}stack.length=size;}function closeFlow(){childFlow.write([null]);childToken=undefined;childFlow=undefined;self.containerState._closeFlow=undefined;}}/** @type {Tokenizer} */function tokenizeContainer(effects,ok,nok){return factorySpace(effects,effects.attempt(this.parser.constructs.document,ok,nok),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?undefined:4);}/**
       * @typedef {import('micromark-util-types').Code} Code
       */ /**
       * Classify whether a character code represents whitespace, punctuation, or
       * something else.
       *
       * Used for attention (emphasis, strong), whose sequences can open or close
       * based on the class of surrounding characters.
       *
       * Note that eof (`null`) is seen as whitespace.
       *
       * @param {Code} code
       * @returns {number|undefined}
       */function classifyCharacter(code){if(code===null||markdownLineEndingOrSpace(code)||unicodeWhitespace(code)){return 1;}if(unicodePunctuation(code)){return 2;}}/**
       * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
       * @typedef {import('micromark-util-types').Event} Event
       * @typedef {import('micromark-util-types').Resolver} Resolver
       */ /**
       * Call all `resolveAll`s.
       *
       * @param {{resolveAll?: Resolver}[]} constructs
       * @param {Event[]} events
       * @param {TokenizeContext} context
       * @returns {Event[]}
       */function resolveAll(constructs,events,context){/** @type {Resolver[]} */var called=[];var index=-1;while(++index<constructs.length){var resolve=constructs[index].resolveAll;if(resolve&&!called.includes(resolve)){events=resolve(events,context);called.push(resolve);}}return events;}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').Event} Event
       * @typedef {import('micromark-util-types').Code} Code
       * @typedef {import('micromark-util-types').Point} Point
       */ /** @type {Construct} */var attention={name:'attention',tokenize:tokenizeAttention,resolveAll:resolveAllAttention};/**
       * Take all events and resolve attention to emphasis or strong.
       *
       * @type {Resolver}
       */function resolveAllAttention(events,context){var index=-1;/** @type {number} */var open;/** @type {Token} */var group;/** @type {Token} */var text;/** @type {Token} */var openingSequence;/** @type {Token} */var closingSequence;/** @type {number} */var use;/** @type {Event[]} */var nextEvents;/** @type {number} */var offset;// Walk through all events.
//
// Note: performance of this is fine on an mb of normal markdown, but it’s
// a bottleneck for malicious stuff.
while(++index<events.length){// Find a token that can close.
if(events[index][0]==='enter'&&events[index][1].type==='attentionSequence'&&events[index][1]._close){open=index;// Now walk back to find an opener.
while(open--){// Find a token that can open the closer.
if(events[open][0]==='exit'&&events[open][1].type==='attentionSequence'&&events[open][1]._open&&// If the markers are the same:
context.sliceSerialize(events[open][1]).charCodeAt(0)===context.sliceSerialize(events[index][1]).charCodeAt(0)){// If the opening can close or the closing can open,
// and the close size *is not* a multiple of three,
// but the sum of the opening and closing size *is* multiple of three,
// then don’t match.
if((events[open][1]._close||events[index][1]._open)&&(events[index][1].end.offset-events[index][1].start.offset)%3&&!((events[open][1].end.offset-events[open][1].start.offset+events[index][1].end.offset-events[index][1].start.offset)%3)){continue;}// Number of markers to use from the sequence.
use=events[open][1].end.offset-events[open][1].start.offset>1&&events[index][1].end.offset-events[index][1].start.offset>1?2:1;var start=Object.assign({},events[open][1].end);var end=Object.assign({},events[index][1].start);movePoint(start,-use);movePoint(end,use);openingSequence={type:use>1?'strongSequence':'emphasisSequence',start:start,end:Object.assign({},events[open][1].end)};closingSequence={type:use>1?'strongSequence':'emphasisSequence',start:Object.assign({},events[index][1].start),end:end};text={type:use>1?'strongText':'emphasisText',start:Object.assign({},events[open][1].end),end:Object.assign({},events[index][1].start)};group={type:use>1?'strong':'emphasis',start:Object.assign({},openingSequence.start),end:Object.assign({},closingSequence.end)};events[open][1].end=Object.assign({},openingSequence.start);events[index][1].start=Object.assign({},closingSequence.end);nextEvents=[];// If there are more markers in the opening, add them before.
if(events[open][1].end.offset-events[open][1].start.offset){nextEvents=push(nextEvents,[['enter',events[open][1],context],['exit',events[open][1],context]]);}// Opening.
nextEvents=push(nextEvents,[['enter',group,context],['enter',openingSequence,context],['exit',openingSequence,context],['enter',text,context]]);// Between.
nextEvents=push(nextEvents,resolveAll(context.parser.constructs.insideSpan.null,events.slice(open+1,index),context));// Closing.
nextEvents=push(nextEvents,[['exit',text,context],['enter',closingSequence,context],['exit',closingSequence,context],['exit',group,context]]);// If there are more markers in the closing, add them after.
if(events[index][1].end.offset-events[index][1].start.offset){offset=2;nextEvents=push(nextEvents,[['enter',events[index][1],context],['exit',events[index][1],context]]);}else{offset=0;}splice(events,open-1,index-open+3,nextEvents);index=open+nextEvents.length-offset-2;break;}}}}// Remove remaining sequences.
index=-1;while(++index<events.length){if(events[index][1].type==='attentionSequence'){events[index][1].type='data';}}return events;}/** @type {Tokenizer} */function tokenizeAttention(effects,ok){var attentionMarkers=this.parser.constructs.attentionMarkers.null;var previous=this.previous;var before=classifyCharacter(previous);/** @type {NonNullable<Code>} */var marker;return start;/** @type {State} */function start(code){effects.enter('attentionSequence');marker=code;return sequence(code);}/** @type {State} */function sequence(code){if(code===marker){effects.consume(code);return sequence;}var token=effects.exit('attentionSequence');var after=classifyCharacter(code);var open=!after||after===2&&before||attentionMarkers.includes(code);var close=!before||before===2&&after||attentionMarkers.includes(previous);token._open=Boolean(marker===42?open:open&&(before||!close));token._close=Boolean(marker===42?close:close&&(after||!open));return ok(code);}}/**
       * Move a point a bit.
       *
       * Note: `move` only works inside lines! It’s not possible to move past other
       * chunks (replacement characters, tabs, or line endings).
       *
       * @param {Point} point
       * @param {number} offset
       * @returns {void}
       */function movePoint(point,offset){point.column+=offset;point.offset+=offset;point._bufferIndex+=offset;}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var autolink={name:'autolink',tokenize:tokenizeAutolink};/** @type {Tokenizer} */function tokenizeAutolink(effects,ok,nok){var size=1;return start;/** @type {State} */function start(code){effects.enter('autolink');effects.enter('autolinkMarker');effects.consume(code);effects.exit('autolinkMarker');effects.enter('autolinkProtocol');return open;}/** @type {State} */function open(code){if(asciiAlpha(code)){effects.consume(code);return schemeOrEmailAtext;}return asciiAtext(code)?emailAtext(code):nok(code);}/** @type {State} */function schemeOrEmailAtext(code){return code===43||code===45||code===46||asciiAlphanumeric(code)?schemeInsideOrEmailAtext(code):emailAtext(code);}/** @type {State} */function schemeInsideOrEmailAtext(code){if(code===58){effects.consume(code);return urlInside;}if((code===43||code===45||code===46||asciiAlphanumeric(code))&&size++<32){effects.consume(code);return schemeInsideOrEmailAtext;}return emailAtext(code);}/** @type {State} */function urlInside(code){if(code===62){effects.exit('autolinkProtocol');return end(code);}if(code===null||code===32||code===60||asciiControl(code)){return nok(code);}effects.consume(code);return urlInside;}/** @type {State} */function emailAtext(code){if(code===64){effects.consume(code);size=0;return emailAtSignOrDot;}if(asciiAtext(code)){effects.consume(code);return emailAtext;}return nok(code);}/** @type {State} */function emailAtSignOrDot(code){return asciiAlphanumeric(code)?emailLabel(code):nok(code);}/** @type {State} */function emailLabel(code){if(code===46){effects.consume(code);size=0;return emailAtSignOrDot;}if(code===62){// Exit, then change the type.
effects.exit('autolinkProtocol').type='autolinkEmail';return end(code);}return emailValue(code);}/** @type {State} */function emailValue(code){if((code===45||asciiAlphanumeric(code))&&size++<63){effects.consume(code);return code===45?emailValue:emailLabel;}return nok(code);}/** @type {State} */function end(code){effects.enter('autolinkMarker');effects.consume(code);effects.exit('autolinkMarker');effects.exit('autolink');return ok;}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var blankLine={tokenize:tokenizeBlankLine,partial:true};/** @type {Tokenizer} */function tokenizeBlankLine(effects,ok,nok){return factorySpace(effects,afterWhitespace,'linePrefix');/** @type {State} */function afterWhitespace(code){return code===null||markdownLineEnding(code)?ok(code):nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Exiter} Exiter
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var blockQuote={name:'blockQuote',tokenize:tokenizeBlockQuoteStart,continuation:{tokenize:tokenizeBlockQuoteContinuation},exit:exit$1};/** @type {Tokenizer} */function tokenizeBlockQuoteStart(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){if(code===62){var state=self.containerState;if(!state.open){effects.enter('blockQuote',{_container:true});state.open=true;}effects.enter('blockQuotePrefix');effects.enter('blockQuoteMarker');effects.consume(code);effects.exit('blockQuoteMarker');return after;}return nok(code);}/** @type {State} */function after(code){if(markdownSpace(code)){effects.enter('blockQuotePrefixWhitespace');effects.consume(code);effects.exit('blockQuotePrefixWhitespace');effects.exit('blockQuotePrefix');return ok;}effects.exit('blockQuotePrefix');return ok(code);}}/** @type {Tokenizer} */function tokenizeBlockQuoteContinuation(effects,ok,nok){return factorySpace(effects,effects.attempt(blockQuote,ok,nok),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?undefined:4);}/** @type {Exiter} */function exit$1(effects){effects.exit('blockQuote');}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var characterEscape={name:'characterEscape',tokenize:tokenizeCharacterEscape};/** @type {Tokenizer} */function tokenizeCharacterEscape(effects,ok,nok){return start;/** @type {State} */function start(code){effects.enter('characterEscape');effects.enter('escapeMarker');effects.consume(code);effects.exit('escapeMarker');return open;}/** @type {State} */function open(code){if(asciiPunctuation(code)){effects.enter('characterEscapeValue');effects.consume(code);effects.exit('characterEscapeValue');effects.exit('characterEscape');return ok;}return nok(code);}}/// <reference lib="dom" />
/* eslint-env browser */var element$4=document.createElement('i');/**
       * @param {string} value
       * @returns {string|false}
       */function decodeNamedCharacterReference(value){var characterReference='&'+value+';';element$4.innerHTML=characterReference;var char=element$4.textContent;// Some named character references do not require the closing semicolon
// (`&not`, for instance), which leads to situations where parsing the assumed
// named reference of `&notit;` will result in the string `¬it;`.
// When we encounter a trailing semicolon after parsing, and the character
// reference to decode was not a semicolon (`&semi;`), we can assume that the
// matching was not complete.
// @ts-expect-error: TypeScript is wrong that `textContent` on elements can
// yield `null`.
if(char.charCodeAt(char.length-1)===59/* `;` */&&value!=='semi'){return false;}// If the decoded string is equal to the input, the character reference was
// not valid.
// @ts-expect-error: TypeScript is wrong that `textContent` on elements can
// yield `null`.
return char===characterReference?false:char;}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var characterReference={name:'characterReference',tokenize:tokenizeCharacterReference};/** @type {Tokenizer} */function tokenizeCharacterReference(effects,ok,nok){var self=this;var size=0;/** @type {number} */var max;/** @type {(code: Code) => code is number} */var test;return start;/** @type {State} */function start(code){effects.enter('characterReference');effects.enter('characterReferenceMarker');effects.consume(code);effects.exit('characterReferenceMarker');return open;}/** @type {State} */function open(code){if(code===35){effects.enter('characterReferenceMarkerNumeric');effects.consume(code);effects.exit('characterReferenceMarkerNumeric');return numeric;}effects.enter('characterReferenceValue');max=31;test=asciiAlphanumeric;return value(code);}/** @type {State} */function numeric(code){if(code===88||code===120){effects.enter('characterReferenceMarkerHexadecimal');effects.consume(code);effects.exit('characterReferenceMarkerHexadecimal');effects.enter('characterReferenceValue');max=6;test=asciiHexDigit;return value;}effects.enter('characterReferenceValue');max=7;test=asciiDigit;return value(code);}/** @type {State} */function value(code){/** @type {Token} */var token;if(code===59&&size){token=effects.exit('characterReferenceValue');if(test===asciiAlphanumeric&&!decodeNamedCharacterReference(self.sliceSerialize(token))){return nok(code);}effects.enter('characterReferenceMarker');effects.consume(code);effects.exit('characterReferenceMarker');effects.exit('characterReference');return ok;}if(test(code)&&size++<max){effects.consume(code);return value;}return nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var codeFenced={name:'codeFenced',tokenize:tokenizeCodeFenced,concrete:true};/** @type {Tokenizer} */function tokenizeCodeFenced(effects,ok,nok){var self=this;/** @type {Construct} */var closingFenceConstruct={tokenize:tokenizeClosingFence,partial:true};/** @type {Construct} */var nonLazyLine={tokenize:tokenizeNonLazyLine,partial:true};var tail=this.events[this.events.length-1];var initialPrefix=tail&&tail[1].type==='linePrefix'?tail[2].sliceSerialize(tail[1],true).length:0;var sizeOpen=0;/** @type {NonNullable<Code>} */var marker;return start;/** @type {State} */function start(code){effects.enter('codeFenced');effects.enter('codeFencedFence');effects.enter('codeFencedFenceSequence');marker=code;return sequenceOpen(code);}/** @type {State} */function sequenceOpen(code){if(code===marker){effects.consume(code);sizeOpen++;return sequenceOpen;}effects.exit('codeFencedFenceSequence');return sizeOpen<3?nok(code):factorySpace(effects,infoOpen,'whitespace')(code);}/** @type {State} */function infoOpen(code){if(code===null||markdownLineEnding(code)){return openAfter(code);}effects.enter('codeFencedFenceInfo');effects.enter('chunkString',{contentType:'string'});return info(code);}/** @type {State} */function info(code){if(code===null||markdownLineEndingOrSpace(code)){effects.exit('chunkString');effects.exit('codeFencedFenceInfo');return factorySpace(effects,infoAfter,'whitespace')(code);}if(code===96&&code===marker)return nok(code);effects.consume(code);return info;}/** @type {State} */function infoAfter(code){if(code===null||markdownLineEnding(code)){return openAfter(code);}effects.enter('codeFencedFenceMeta');effects.enter('chunkString',{contentType:'string'});return meta(code);}/** @type {State} */function meta(code){if(code===null||markdownLineEnding(code)){effects.exit('chunkString');effects.exit('codeFencedFenceMeta');return openAfter(code);}if(code===96&&code===marker)return nok(code);effects.consume(code);return meta;}/** @type {State} */function openAfter(code){effects.exit('codeFencedFence');return self.interrupt?ok(code):contentStart(code);}/** @type {State} */function contentStart(code){if(code===null){return after(code);}if(markdownLineEnding(code)){return effects.attempt(nonLazyLine,effects.attempt(closingFenceConstruct,after,initialPrefix?factorySpace(effects,contentStart,'linePrefix',initialPrefix+1):contentStart),after)(code);}effects.enter('codeFlowValue');return contentContinue(code);}/** @type {State} */function contentContinue(code){if(code===null||markdownLineEnding(code)){effects.exit('codeFlowValue');return contentStart(code);}effects.consume(code);return contentContinue;}/** @type {State} */function after(code){effects.exit('codeFenced');return ok(code);}/** @type {Tokenizer} */function tokenizeNonLazyLine(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return lineStart;}/** @type {State} */function lineStart(code){return self.parser.lazy[self.now().line]?nok(code):ok(code);}}/** @type {Tokenizer} */function tokenizeClosingFence(effects,ok,nok){var size=0;return factorySpace(effects,closingSequenceStart,'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?undefined:4);/** @type {State} */function closingSequenceStart(code){effects.enter('codeFencedFence');effects.enter('codeFencedFenceSequence');return closingSequence(code);}/** @type {State} */function closingSequence(code){if(code===marker){effects.consume(code);size++;return closingSequence;}if(size<sizeOpen)return nok(code);effects.exit('codeFencedFenceSequence');return factorySpace(effects,closingSequenceEnd,'whitespace')(code);}/** @type {State} */function closingSequenceEnd(code){if(code===null||markdownLineEnding(code)){effects.exit('codeFencedFence');return ok(code);}return nok(code);}}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var codeIndented={name:'codeIndented',tokenize:tokenizeCodeIndented};/** @type {Construct} */var indentedContent={tokenize:tokenizeIndentedContent,partial:true};/** @type {Tokenizer} */function tokenizeCodeIndented(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){effects.enter('codeIndented');return factorySpace(effects,afterStartPrefix,'linePrefix',4+1)(code);}/** @type {State} */function afterStartPrefix(code){var tail=self.events[self.events.length-1];return tail&&tail[1].type==='linePrefix'&&tail[2].sliceSerialize(tail[1],true).length>=4?afterPrefix(code):nok(code);}/** @type {State} */function afterPrefix(code){if(code===null){return after(code);}if(markdownLineEnding(code)){return effects.attempt(indentedContent,afterPrefix,after)(code);}effects.enter('codeFlowValue');return content(code);}/** @type {State} */function content(code){if(code===null||markdownLineEnding(code)){effects.exit('codeFlowValue');return afterPrefix(code);}effects.consume(code);return content;}/** @type {State} */function after(code){effects.exit('codeIndented');return ok(code);}}/** @type {Tokenizer} */function tokenizeIndentedContent(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){// If this is a lazy line, it can’t be code.
if(self.parser.lazy[self.now().line]){return nok(code);}if(markdownLineEnding(code)){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return start;}return factorySpace(effects,afterPrefix,'linePrefix',4+1)(code);}/** @type {State} */function afterPrefix(code){var tail=self.events[self.events.length-1];return tail&&tail[1].type==='linePrefix'&&tail[2].sliceSerialize(tail[1],true).length>=4?ok(code):markdownLineEnding(code)?start(code):nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Previous} Previous
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var codeText={name:'codeText',tokenize:tokenizeCodeText,resolve:resolveCodeText,previous:previous$1};/** @type {Resolver} */function resolveCodeText(events){var tailExitIndex=events.length-4;var headEnterIndex=3;/** @type {number} */var index;/** @type {number|undefined} */var enter;// If we start and end with an EOL or a space.
if((events[headEnterIndex][1].type==='lineEnding'||events[headEnterIndex][1].type==='space')&&(events[tailExitIndex][1].type==='lineEnding'||events[tailExitIndex][1].type==='space')){index=headEnterIndex;// And we have data.
while(++index<tailExitIndex){if(events[index][1].type==='codeTextData'){// Then we have padding.
events[headEnterIndex][1].type='codeTextPadding';events[tailExitIndex][1].type='codeTextPadding';headEnterIndex+=2;tailExitIndex-=2;break;}}}// Merge adjacent spaces and data.
index=headEnterIndex-1;tailExitIndex++;while(++index<=tailExitIndex){if(enter===undefined){if(index!==tailExitIndex&&events[index][1].type!=='lineEnding'){enter=index;}}else if(index===tailExitIndex||events[index][1].type==='lineEnding'){events[enter][1].type='codeTextData';if(index!==enter+2){events[enter][1].end=events[index-1][1].end;events.splice(enter+2,index-enter-2);tailExitIndex-=index-enter-2;index=enter+2;}enter=undefined;}}return events;}/** @type {Previous} */function previous$1(code){// If there is a previous code, there will always be a tail.
return code!==96||this.events[this.events.length-1][1].type==='characterEscape';}/** @type {Tokenizer} */function tokenizeCodeText(effects,ok,nok){var sizeOpen=0;/** @type {number} */var size;/** @type {Token} */var token;return start;/** @type {State} */function start(code){effects.enter('codeText');effects.enter('codeTextSequence');return openingSequence(code);}/** @type {State} */function openingSequence(code){if(code===96){effects.consume(code);sizeOpen++;return openingSequence;}effects.exit('codeTextSequence');return gap(code);}/** @type {State} */function gap(code){// EOF.
if(code===null){return nok(code);}// Closing fence?
// Could also be data.
if(code===96){token=effects.enter('codeTextSequence');size=0;return closingSequence(code);}// Tabs don’t work, and virtual spaces don’t make sense.
if(code===32){effects.enter('space');effects.consume(code);effects.exit('space');return gap;}if(markdownLineEnding(code)){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return gap;}// Data.
effects.enter('codeTextData');return data(code);}// In code.
/** @type {State} */function data(code){if(code===null||code===32||code===96||markdownLineEnding(code)){effects.exit('codeTextData');return gap(code);}effects.consume(code);return data;}// Closing fence.
/** @type {State} */function closingSequence(code){// More.
if(code===96){effects.consume(code);size++;return closingSequence;}// Done!
if(size===sizeOpen){effects.exit('codeTextSequence');effects.exit('codeText');return ok(code);}// More or less accents: mark as data.
token.type='codeTextData';return data(code);}}/**
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').Chunk} Chunk
       * @typedef {import('micromark-util-types').Event} Event
       */ /**
       * Tokenize subcontent.
       *
       * @param {Event[]} events
       * @returns {boolean}
       */function subtokenize(events){/** @type {Record<string, number>} */var jumps={};var index=-1;/** @type {Event} */var event;/** @type {number|undefined} */var lineIndex;/** @type {number} */var otherIndex;/** @type {Event} */var otherEvent;/** @type {Event[]} */var parameters;/** @type {Event[]} */var subevents;/** @type {boolean|undefined} */var more;while(++index<events.length){while(index in jumps){index=jumps[index];}event=events[index];// Add a hook for the GFM tasklist extension, which needs to know if text
// is in the first content of a list item.
if(index&&event[1].type==='chunkFlow'&&events[index-1][1].type==='listItemPrefix'){subevents=event[1]._tokenizer.events;otherIndex=0;if(otherIndex<subevents.length&&subevents[otherIndex][1].type==='lineEndingBlank'){otherIndex+=2;}if(otherIndex<subevents.length&&subevents[otherIndex][1].type==='content'){while(++otherIndex<subevents.length){if(subevents[otherIndex][1].type==='content'){break;}if(subevents[otherIndex][1].type==='chunkText'){subevents[otherIndex][1]._isInFirstContentOfListItem=true;otherIndex++;}}}}// Enter.
if(event[0]==='enter'){if(event[1].contentType){Object.assign(jumps,subcontent(events,index));index=jumps[index];more=true;}}// Exit.
else if(event[1]._container){otherIndex=index;lineIndex=undefined;while(otherIndex--){otherEvent=events[otherIndex];if(otherEvent[1].type==='lineEnding'||otherEvent[1].type==='lineEndingBlank'){if(otherEvent[0]==='enter'){if(lineIndex){events[lineIndex][1].type='lineEndingBlank';}otherEvent[1].type='lineEnding';lineIndex=otherIndex;}}else{break;}}if(lineIndex){// Fix position.
event[1].end=Object.assign({},events[lineIndex][1].start);// Switch container exit w/ line endings.
parameters=events.slice(lineIndex,index);parameters.unshift(event);splice(events,lineIndex,index-lineIndex+1,parameters);}}}return!more;}/**
       * Tokenize embedded tokens.
       *
       * @param {Event[]} events
       * @param {number} eventIndex
       * @returns {Record<string, number>}
       */function subcontent(events,eventIndex){var token=events[eventIndex][1];var context=events[eventIndex][2];var startPosition=eventIndex-1;/** @type {number[]} */var startPositions=[];var tokenizer=token._tokenizer||context.parser[token.contentType](token.start);var childEvents=tokenizer.events;/** @type {[number, number][]} */var jumps=[];/** @type {Record<string, number>} */var gaps={};/** @type {Chunk[]} */var stream;/** @type {Token|undefined} */var previous;var index=-1;/** @type {Token|undefined} */var current=token;var adjust=0;var start=0;var breaks=[start];// Loop forward through the linked tokens to pass them in order to the
// subtokenizer.
while(current){// Find the position of the event for this token.
while(events[++startPosition][1]!==current){// Empty.
}startPositions.push(startPosition);if(!current._tokenizer){stream=context.sliceStream(current);if(!current.next){stream.push(null);}if(previous){tokenizer.defineSkip(current.start);}if(current._isInFirstContentOfListItem){tokenizer._gfmTasklistFirstContentOfListItem=true;}tokenizer.write(stream);if(current._isInFirstContentOfListItem){tokenizer._gfmTasklistFirstContentOfListItem=undefined;}}// Unravel the next token.
previous=current;current=current.next;}// Now, loop back through all events (and linked tokens), to figure out which
// parts belong where.
current=token;while(++index<childEvents.length){if(// Find a void token that includes a break.
childEvents[index][0]==='exit'&&childEvents[index-1][0]==='enter'&&childEvents[index][1].type===childEvents[index-1][1].type&&childEvents[index][1].start.line!==childEvents[index][1].end.line){start=index+1;breaks.push(start);// Help GC.
current._tokenizer=undefined;current.previous=undefined;current=current.next;}}// Help GC.
tokenizer.events=[];// If there’s one more token (which is the cases for lines that end in an
// EOF), that’s perfect: the last point we found starts it.
// If there isn’t then make sure any remaining content is added to it.
if(current){// Help GC.
current._tokenizer=undefined;current.previous=undefined;}else{breaks.pop();}// Now splice the events from the subtokenizer into the current events,
// moving back to front so that splice indices aren’t affected.
index=breaks.length;while(index--){var slice=childEvents.slice(breaks[index],breaks[index+1]);var _start=startPositions.pop();jumps.unshift([_start,_start+slice.length-1]);splice(events,_start,2,slice);}index=-1;while(++index<jumps.length){gaps[adjust+jumps[index][0]]=adjust+jumps[index][1];adjust+=jumps[index][1]-jumps[index][0]-1;}return gaps;}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       */ /**
       * No name because it must not be turned off.
       * @type {Construct}
       */var content={tokenize:tokenizeContent,resolve:resolveContent};/** @type {Construct} */var continuationConstruct={tokenize:tokenizeContinuation,partial:true};/**
       * Content is transparent: it’s parsed right now. That way, definitions are also
       * parsed right now: before text in paragraphs (specifically, media) are parsed.
       *
       * @type {Resolver}
       */function resolveContent(events){subtokenize(events);return events;}/** @type {Tokenizer} */function tokenizeContent(effects,ok){/** @type {Token} */var previous;return start;/** @type {State} */function start(code){effects.enter('content');previous=effects.enter('chunkContent',{contentType:'content'});return data(code);}/** @type {State} */function data(code){if(code===null){return contentEnd(code);}if(markdownLineEnding(code)){return effects.check(continuationConstruct,contentContinue,contentEnd)(code);}// Data.
effects.consume(code);return data;}/** @type {State} */function contentEnd(code){effects.exit('chunkContent');effects.exit('content');return ok(code);}/** @type {State} */function contentContinue(code){effects.consume(code);effects.exit('chunkContent');previous.next=effects.enter('chunkContent',{contentType:'content',previous:previous});previous=previous.next;return data;}}/** @type {Tokenizer} */function tokenizeContinuation(effects,ok,nok){var self=this;return startLookahead;/** @type {State} */function startLookahead(code){effects.exit('chunkContent');effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return factorySpace(effects,prefixed,'linePrefix');}/** @type {State} */function prefixed(code){if(code===null||markdownLineEnding(code)){return nok(code);}var tail=self.events[self.events.length-1];if(!self.parser.constructs.disable.null.includes('codeIndented')&&tail&&tail[1].type==='linePrefix'&&tail[2].sliceSerialize(tail[1],true).length>=4){return ok(code);}return effects.interrupt(self.parser.constructs.flow,nok,ok)(code);}}/**
       * @typedef {import('micromark-util-types').Effects} Effects
       * @typedef {import('micromark-util-types').State} State
       */ /**
       * @param {Effects} effects
       * @param {State} ok
       * @param {State} nok
       * @param {string} type
       * @param {string} literalType
       * @param {string} literalMarkerType
       * @param {string} rawType
       * @param {string} stringType
       * @param {number} [max=Infinity]
       * @returns {State}
       */ // eslint-disable-next-line max-params
function factoryDestination(effects,ok,nok,type,literalType,literalMarkerType,rawType,stringType,max){var limit=max||Number.POSITIVE_INFINITY;var balance=0;return start;/** @type {State} */function start(code){if(code===60){effects.enter(type);effects.enter(literalType);effects.enter(literalMarkerType);effects.consume(code);effects.exit(literalMarkerType);return destinationEnclosedBefore;}if(code===null||code===41||asciiControl(code)){return nok(code);}effects.enter(type);effects.enter(rawType);effects.enter(stringType);effects.enter('chunkString',{contentType:'string'});return destinationRaw(code);}/** @type {State} */function destinationEnclosedBefore(code){if(code===62){effects.enter(literalMarkerType);effects.consume(code);effects.exit(literalMarkerType);effects.exit(literalType);effects.exit(type);return ok;}effects.enter(stringType);effects.enter('chunkString',{contentType:'string'});return destinationEnclosed(code);}/** @type {State} */function destinationEnclosed(code){if(code===62){effects.exit('chunkString');effects.exit(stringType);return destinationEnclosedBefore(code);}if(code===null||code===60||markdownLineEnding(code)){return nok(code);}effects.consume(code);return code===92?destinationEnclosedEscape:destinationEnclosed;}/** @type {State} */function destinationEnclosedEscape(code){if(code===60||code===62||code===92){effects.consume(code);return destinationEnclosed;}return destinationEnclosed(code);}/** @type {State} */function destinationRaw(code){if(code===40){if(++balance>limit)return nok(code);effects.consume(code);return destinationRaw;}if(code===41){if(!balance--){effects.exit('chunkString');effects.exit(stringType);effects.exit(rawType);effects.exit(type);return ok(code);}effects.consume(code);return destinationRaw;}if(code===null||markdownLineEndingOrSpace(code)){if(balance)return nok(code);effects.exit('chunkString');effects.exit(stringType);effects.exit(rawType);effects.exit(type);return ok(code);}if(asciiControl(code))return nok(code);effects.consume(code);return code===92?destinationRawEscape:destinationRaw;}/** @type {State} */function destinationRawEscape(code){if(code===40||code===41||code===92){effects.consume(code);return destinationRaw;}return destinationRaw(code);}}/**
       * @typedef {import('micromark-util-types').Effects} Effects
       * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
       * @typedef {import('micromark-util-types').State} State
       */ /**
       * @this {TokenizeContext}
       * @param {Effects} effects
       * @param {State} ok
       * @param {State} nok
       * @param {string} type
       * @param {string} markerType
       * @param {string} stringType
       * @returns {State}
       */ // eslint-disable-next-line max-params
function factoryLabel(effects,ok,nok,type,markerType,stringType){var self=this;var size=0;/** @type {boolean} */var data;return start;/** @type {State} */function start(code){effects.enter(type);effects.enter(markerType);effects.consume(code);effects.exit(markerType);effects.enter(stringType);return atBreak;}/** @type {State} */function atBreak(code){if(code===null||code===91||code===93&&!data||/* To do: remove in the future once we’ve switched from
             * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
             * which doesn’t need this */ /* Hidden footnotes hook */ /* c8 ignore next 3 */code===94&&!size&&'_hiddenFootnoteSupport'in self.parser.constructs||size>999){return nok(code);}if(code===93){effects.exit(stringType);effects.enter(markerType);effects.consume(code);effects.exit(markerType);effects.exit(type);return ok;}if(markdownLineEnding(code)){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return atBreak;}effects.enter('chunkString',{contentType:'string'});return label(code);}/** @type {State} */function label(code){if(code===null||code===91||code===93||markdownLineEnding(code)||size++>999){effects.exit('chunkString');return atBreak(code);}effects.consume(code);data=data||!markdownSpace(code);return code===92?labelEscape:label;}/** @type {State} */function labelEscape(code){if(code===91||code===92||code===93){effects.consume(code);size++;return label;}return label(code);}}/**
       * @typedef {import('micromark-util-types').Effects} Effects
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /**
       * @param {Effects} effects
       * @param {State} ok
       * @param {State} nok
       * @param {string} type
       * @param {string} markerType
       * @param {string} stringType
       * @returns {State}
       */ // eslint-disable-next-line max-params
function factoryTitle(effects,ok,nok,type,markerType,stringType){/** @type {NonNullable<Code>} */var marker;return start;/** @type {State} */function start(code){effects.enter(type);effects.enter(markerType);effects.consume(code);effects.exit(markerType);marker=code===40?41:code;return atFirstTitleBreak;}/** @type {State} */function atFirstTitleBreak(code){if(code===marker){effects.enter(markerType);effects.consume(code);effects.exit(markerType);effects.exit(type);return ok;}effects.enter(stringType);return atTitleBreak(code);}/** @type {State} */function atTitleBreak(code){if(code===marker){effects.exit(stringType);return atFirstTitleBreak(marker);}if(code===null){return nok(code);}// Note: blank lines can’t exist in content.
if(markdownLineEnding(code)){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return factorySpace(effects,atTitleBreak,'linePrefix');}effects.enter('chunkString',{contentType:'string'});return title(code);}/** @type {State} */function title(code){if(code===marker||code===null||markdownLineEnding(code)){effects.exit('chunkString');return atTitleBreak(code);}effects.consume(code);return code===92?titleEscape:title;}/** @type {State} */function titleEscape(code){if(code===marker||code===92){effects.consume(code);return title;}return title(code);}}/**
       * @typedef {import('micromark-util-types').Effects} Effects
       * @typedef {import('micromark-util-types').State} State
       */ /**
       * @param {Effects} effects
       * @param {State} ok
       */function factoryWhitespace(effects,ok){/** @type {boolean} */var seen;return start;/** @type {State} */function start(code){if(markdownLineEnding(code)){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');seen=true;return start;}if(markdownSpace(code)){return factorySpace(effects,start,seen?'linePrefix':'lineSuffix')(code);}return ok(code);}}/**
       * Normalize an identifier (such as used in definitions).
       *
       * @param {string} value
       * @returns {string}
       */function normalizeIdentifier(value){return value// Collapse Markdown whitespace.
.replace(/[\t\n\r ]+/g,' ')// Trim.
.replace(/^ | $/g,'')// Some characters are considered “uppercase”, but if their lowercase
// counterpart is uppercased will result in a different uppercase
// character.
// Hence, to get that form, we perform both lower- and uppercase.
// Upper case makes sure keys will not interact with default prototypal
// methods: no method is uppercase.
.toLowerCase().toUpperCase();}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var definition={name:'definition',tokenize:tokenizeDefinition};/** @type {Construct} */var titleConstruct={tokenize:tokenizeTitle,partial:true};/** @type {Tokenizer} */function tokenizeDefinition(effects,ok,nok){var self=this;/** @type {string} */var identifier;return start;/** @type {State} */function start(code){effects.enter('definition');return factoryLabel.call(self,effects,labelAfter,nok,'definitionLabel','definitionLabelMarker','definitionLabelString')(code);}/** @type {State} */function labelAfter(code){identifier=normalizeIdentifier(self.sliceSerialize(self.events[self.events.length-1][1]).slice(1,-1));if(code===58){effects.enter('definitionMarker');effects.consume(code);effects.exit('definitionMarker');// Note: blank lines can’t exist in content.
return factoryWhitespace(effects,factoryDestination(effects,effects.attempt(titleConstruct,factorySpace(effects,after,'whitespace'),factorySpace(effects,after,'whitespace')),nok,'definitionDestination','definitionDestinationLiteral','definitionDestinationLiteralMarker','definitionDestinationRaw','definitionDestinationString'));}return nok(code);}/** @type {State} */function after(code){if(code===null||markdownLineEnding(code)){effects.exit('definition');if(!self.parser.defined.includes(identifier)){self.parser.defined.push(identifier);}return ok(code);}return nok(code);}}/** @type {Tokenizer} */function tokenizeTitle(effects,ok,nok){return start;/** @type {State} */function start(code){return markdownLineEndingOrSpace(code)?factoryWhitespace(effects,before)(code):nok(code);}/** @type {State} */function before(code){if(code===34||code===39||code===40){return factoryTitle(effects,factorySpace(effects,after,'whitespace'),nok,'definitionTitle','definitionTitleMarker','definitionTitleString')(code);}return nok(code);}/** @type {State} */function after(code){return code===null||markdownLineEnding(code)?ok(code):nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var hardBreakEscape={name:'hardBreakEscape',tokenize:tokenizeHardBreakEscape};/** @type {Tokenizer} */function tokenizeHardBreakEscape(effects,ok,nok){return start;/** @type {State} */function start(code){effects.enter('hardBreakEscape');effects.enter('escapeMarker');effects.consume(code);return open;}/** @type {State} */function open(code){if(markdownLineEnding(code)){effects.exit('escapeMarker');effects.exit('hardBreakEscape');return ok(code);}return nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var headingAtx={name:'headingAtx',tokenize:tokenizeHeadingAtx,resolve:resolveHeadingAtx};/** @type {Resolver} */function resolveHeadingAtx(events,context){var contentEnd=events.length-2;var contentStart=3;/** @type {Token} */var content;/** @type {Token} */var text;// Prefix whitespace, part of the opening.
if(events[contentStart][1].type==='whitespace'){contentStart+=2;}// Suffix whitespace, part of the closing.
if(contentEnd-2>contentStart&&events[contentEnd][1].type==='whitespace'){contentEnd-=2;}if(events[contentEnd][1].type==='atxHeadingSequence'&&(contentStart===contentEnd-1||contentEnd-4>contentStart&&events[contentEnd-2][1].type==='whitespace')){contentEnd-=contentStart+1===contentEnd?2:4;}if(contentEnd>contentStart){content={type:'atxHeadingText',start:events[contentStart][1].start,end:events[contentEnd][1].end};text={type:'chunkText',start:events[contentStart][1].start,end:events[contentEnd][1].end,// @ts-expect-error Constants are fine to assign.
contentType:'text'};splice(events,contentStart,contentEnd-contentStart+1,[['enter',content,context],['enter',text,context],['exit',text,context],['exit',content,context]]);}return events;}/** @type {Tokenizer} */function tokenizeHeadingAtx(effects,ok,nok){var self=this;var size=0;return start;/** @type {State} */function start(code){effects.enter('atxHeading');effects.enter('atxHeadingSequence');return fenceOpenInside(code);}/** @type {State} */function fenceOpenInside(code){if(code===35&&size++<6){effects.consume(code);return fenceOpenInside;}if(code===null||markdownLineEndingOrSpace(code)){effects.exit('atxHeadingSequence');return self.interrupt?ok(code):headingBreak(code);}return nok(code);}/** @type {State} */function headingBreak(code){if(code===35){effects.enter('atxHeadingSequence');return sequence(code);}if(code===null||markdownLineEnding(code)){effects.exit('atxHeading');return ok(code);}if(markdownSpace(code)){return factorySpace(effects,headingBreak,'whitespace')(code);}effects.enter('atxHeadingText');return data(code);}/** @type {State} */function sequence(code){if(code===35){effects.consume(code);return sequence;}effects.exit('atxHeadingSequence');return headingBreak(code);}/** @type {State} */function data(code){if(code===null||code===35||markdownLineEndingOrSpace(code)){effects.exit('atxHeadingText');return headingBreak(code);}effects.consume(code);return data;}}/**
       * List of lowercase HTML tag names which when parsing HTML (flow), result
       * in more relaxed rules (condition 6): because they are known blocks, the
       * HTML-like syntax doesn’t have to be strictly parsed.
       * For tag names not in this list, a more strict algorithm (condition 7) is used
       * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
       *
       * This is copied from:
       * <https://spec.commonmark.org/0.29/#html-blocks>.
       */var htmlBlockNames=['address','article','aside','base','basefont','blockquote','body','caption','center','col','colgroup','dd','details','dialog','dir','div','dl','dt','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','iframe','legend','li','link','main','menu','menuitem','nav','noframes','ol','optgroup','option','p','param','section','source','summary','table','tbody','td','tfoot','th','thead','title','tr','track','ul'];/**
       * List of lowercase HTML tag names which when parsing HTML (flow), result in
       * HTML that can include lines w/o exiting, until a closing tag also in this
       * list is found (condition 1).
       *
       * This module is copied from:
       * <https://spec.commonmark.org/0.29/#html-blocks>.
       *
       * Note that `textarea` is not available in `CommonMark@0.29` but has been
       * merged to the primary branch and is slated to be released in the next release
       * of CommonMark.
       */var htmlRawNames=['pre','script','style','textarea'];/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var htmlFlow={name:'htmlFlow',tokenize:tokenizeHtmlFlow,resolveTo:resolveToHtmlFlow,concrete:true};/** @type {Construct} */var nextBlankConstruct={tokenize:tokenizeNextBlank,partial:true};/** @type {Resolver} */function resolveToHtmlFlow(events){var index=events.length;while(index--){if(events[index][0]==='enter'&&events[index][1].type==='htmlFlow'){break;}}if(index>1&&events[index-2][1].type==='linePrefix'){// Add the prefix start to the HTML token.
events[index][1].start=events[index-2][1].start;// Add the prefix start to the HTML line token.
events[index+1][1].start=events[index-2][1].start;// Remove the line prefix.
events.splice(index-2,2);}return events;}/** @type {Tokenizer} */function tokenizeHtmlFlow(effects,ok,nok){var self=this;/** @type {number} */var kind;/** @type {boolean} */var startTag;/** @type {string} */var buffer;/** @type {number} */var index;/** @type {Code} */var marker;return start;/** @type {State} */function start(code){effects.enter('htmlFlow');effects.enter('htmlFlowData');effects.consume(code);return open;}/** @type {State} */function open(code){if(code===33){effects.consume(code);return declarationStart;}if(code===47){effects.consume(code);return tagCloseStart;}if(code===63){effects.consume(code);kind=3;// While we’re in an instruction instead of a declaration, we’re on a `?`
// right now, so we do need to search for `>`, similar to declarations.
return self.interrupt?ok:continuationDeclarationInside;}if(asciiAlpha(code)){effects.consume(code);buffer=String.fromCharCode(code);startTag=true;return tagName;}return nok(code);}/** @type {State} */function declarationStart(code){if(code===45){effects.consume(code);kind=2;return commentOpenInside;}if(code===91){effects.consume(code);kind=5;buffer='CDATA[';index=0;return cdataOpenInside;}if(asciiAlpha(code)){effects.consume(code);kind=4;return self.interrupt?ok:continuationDeclarationInside;}return nok(code);}/** @type {State} */function commentOpenInside(code){if(code===45){effects.consume(code);return self.interrupt?ok:continuationDeclarationInside;}return nok(code);}/** @type {State} */function cdataOpenInside(code){if(code===buffer.charCodeAt(index++)){effects.consume(code);return index===buffer.length?self.interrupt?ok:continuation:cdataOpenInside;}return nok(code);}/** @type {State} */function tagCloseStart(code){if(asciiAlpha(code)){effects.consume(code);buffer=String.fromCharCode(code);return tagName;}return nok(code);}/** @type {State} */function tagName(code){if(code===null||code===47||code===62||markdownLineEndingOrSpace(code)){if(code!==47&&startTag&&htmlRawNames.includes(buffer.toLowerCase())){kind=1;return self.interrupt?ok(code):continuation(code);}if(htmlBlockNames.includes(buffer.toLowerCase())){kind=6;if(code===47){effects.consume(code);return basicSelfClosing;}return self.interrupt?ok(code):continuation(code);}kind=7;// Do not support complete HTML when interrupting
return self.interrupt&&!self.parser.lazy[self.now().line]?nok(code):startTag?completeAttributeNameBefore(code):completeClosingTagAfter(code);}if(code===45||asciiAlphanumeric(code)){effects.consume(code);buffer+=String.fromCharCode(code);return tagName;}return nok(code);}/** @type {State} */function basicSelfClosing(code){if(code===62){effects.consume(code);return self.interrupt?ok:continuation;}return nok(code);}/** @type {State} */function completeClosingTagAfter(code){if(markdownSpace(code)){effects.consume(code);return completeClosingTagAfter;}return completeEnd(code);}/** @type {State} */function completeAttributeNameBefore(code){if(code===47){effects.consume(code);return completeEnd;}if(code===58||code===95||asciiAlpha(code)){effects.consume(code);return completeAttributeName;}if(markdownSpace(code)){effects.consume(code);return completeAttributeNameBefore;}return completeEnd(code);}/** @type {State} */function completeAttributeName(code){if(code===45||code===46||code===58||code===95||asciiAlphanumeric(code)){effects.consume(code);return completeAttributeName;}return completeAttributeNameAfter(code);}/** @type {State} */function completeAttributeNameAfter(code){if(code===61){effects.consume(code);return completeAttributeValueBefore;}if(markdownSpace(code)){effects.consume(code);return completeAttributeNameAfter;}return completeAttributeNameBefore(code);}/** @type {State} */function completeAttributeValueBefore(code){if(code===null||code===60||code===61||code===62||code===96){return nok(code);}if(code===34||code===39){effects.consume(code);marker=code;return completeAttributeValueQuoted;}if(markdownSpace(code)){effects.consume(code);return completeAttributeValueBefore;}marker=null;return completeAttributeValueUnquoted(code);}/** @type {State} */function completeAttributeValueQuoted(code){if(code===null||markdownLineEnding(code)){return nok(code);}if(code===marker){effects.consume(code);return completeAttributeValueQuotedAfter;}effects.consume(code);return completeAttributeValueQuoted;}/** @type {State} */function completeAttributeValueUnquoted(code){if(code===null||code===34||code===39||code===60||code===61||code===62||code===96||markdownLineEndingOrSpace(code)){return completeAttributeNameAfter(code);}effects.consume(code);return completeAttributeValueUnquoted;}/** @type {State} */function completeAttributeValueQuotedAfter(code){if(code===47||code===62||markdownSpace(code)){return completeAttributeNameBefore(code);}return nok(code);}/** @type {State} */function completeEnd(code){if(code===62){effects.consume(code);return completeAfter;}return nok(code);}/** @type {State} */function completeAfter(code){if(markdownSpace(code)){effects.consume(code);return completeAfter;}return code===null||markdownLineEnding(code)?continuation(code):nok(code);}/** @type {State} */function continuation(code){if(code===45&&kind===2){effects.consume(code);return continuationCommentInside;}if(code===60&&kind===1){effects.consume(code);return continuationRawTagOpen;}if(code===62&&kind===4){effects.consume(code);return continuationClose;}if(code===63&&kind===3){effects.consume(code);return continuationDeclarationInside;}if(code===93&&kind===5){effects.consume(code);return continuationCharacterDataInside;}if(markdownLineEnding(code)&&(kind===6||kind===7)){return effects.check(nextBlankConstruct,continuationClose,continuationAtLineEnding)(code);}if(code===null||markdownLineEnding(code)){return continuationAtLineEnding(code);}effects.consume(code);return continuation;}/** @type {State} */function continuationAtLineEnding(code){effects.exit('htmlFlowData');return htmlContinueStart(code);}/** @type {State} */function htmlContinueStart(code){if(code===null){return done(code);}if(markdownLineEnding(code)){return effects.attempt({tokenize:htmlLineEnd,partial:true},htmlContinueStart,done)(code);}effects.enter('htmlFlowData');return continuation(code);}/** @type {Tokenizer} */function htmlLineEnd(effects,ok,nok){return start;/** @type {State} */function start(code){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return lineStart;}/** @type {State} */function lineStart(code){return self.parser.lazy[self.now().line]?nok(code):ok(code);}}/** @type {State} */function continuationCommentInside(code){if(code===45){effects.consume(code);return continuationDeclarationInside;}return continuation(code);}/** @type {State} */function continuationRawTagOpen(code){if(code===47){effects.consume(code);buffer='';return continuationRawEndTag;}return continuation(code);}/** @type {State} */function continuationRawEndTag(code){if(code===62&&htmlRawNames.includes(buffer.toLowerCase())){effects.consume(code);return continuationClose;}if(asciiAlpha(code)&&buffer.length<8){effects.consume(code);buffer+=String.fromCharCode(code);return continuationRawEndTag;}return continuation(code);}/** @type {State} */function continuationCharacterDataInside(code){if(code===93){effects.consume(code);return continuationDeclarationInside;}return continuation(code);}/** @type {State} */function continuationDeclarationInside(code){if(code===62){effects.consume(code);return continuationClose;}// More dashes.
if(code===45&&kind===2){effects.consume(code);return continuationDeclarationInside;}return continuation(code);}/** @type {State} */function continuationClose(code){if(code===null||markdownLineEnding(code)){effects.exit('htmlFlowData');return done(code);}effects.consume(code);return continuationClose;}/** @type {State} */function done(code){effects.exit('htmlFlow');return ok(code);}}/** @type {Tokenizer} */function tokenizeNextBlank(effects,ok,nok){return start;/** @type {State} */function start(code){effects.exit('htmlFlowData');effects.enter('lineEndingBlank');effects.consume(code);effects.exit('lineEndingBlank');return effects.attempt(blankLine,ok,nok);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var htmlText={name:'htmlText',tokenize:tokenizeHtmlText};/** @type {Tokenizer} */function tokenizeHtmlText(effects,ok,nok){var self=this;/** @type {NonNullable<Code>|undefined} */var marker;/** @type {string} */var buffer;/** @type {number} */var index;/** @type {State} */var returnState;return start;/** @type {State} */function start(code){effects.enter('htmlText');effects.enter('htmlTextData');effects.consume(code);return open;}/** @type {State} */function open(code){if(code===33){effects.consume(code);return declarationOpen;}if(code===47){effects.consume(code);return tagCloseStart;}if(code===63){effects.consume(code);return instruction;}if(asciiAlpha(code)){effects.consume(code);return tagOpen;}return nok(code);}/** @type {State} */function declarationOpen(code){if(code===45){effects.consume(code);return commentOpen;}if(code===91){effects.consume(code);buffer='CDATA[';index=0;return cdataOpen;}if(asciiAlpha(code)){effects.consume(code);return declaration;}return nok(code);}/** @type {State} */function commentOpen(code){if(code===45){effects.consume(code);return commentStart;}return nok(code);}/** @type {State} */function commentStart(code){if(code===null||code===62){return nok(code);}if(code===45){effects.consume(code);return commentStartDash;}return comment(code);}/** @type {State} */function commentStartDash(code){if(code===null||code===62){return nok(code);}return comment(code);}/** @type {State} */function comment(code){if(code===null){return nok(code);}if(code===45){effects.consume(code);return commentClose;}if(markdownLineEnding(code)){returnState=comment;return atLineEnding(code);}effects.consume(code);return comment;}/** @type {State} */function commentClose(code){if(code===45){effects.consume(code);return end;}return comment(code);}/** @type {State} */function cdataOpen(code){if(code===buffer.charCodeAt(index++)){effects.consume(code);return index===buffer.length?cdata:cdataOpen;}return nok(code);}/** @type {State} */function cdata(code){if(code===null){return nok(code);}if(code===93){effects.consume(code);return cdataClose;}if(markdownLineEnding(code)){returnState=cdata;return atLineEnding(code);}effects.consume(code);return cdata;}/** @type {State} */function cdataClose(code){if(code===93){effects.consume(code);return cdataEnd;}return cdata(code);}/** @type {State} */function cdataEnd(code){if(code===62){return end(code);}if(code===93){effects.consume(code);return cdataEnd;}return cdata(code);}/** @type {State} */function declaration(code){if(code===null||code===62){return end(code);}if(markdownLineEnding(code)){returnState=declaration;return atLineEnding(code);}effects.consume(code);return declaration;}/** @type {State} */function instruction(code){if(code===null){return nok(code);}if(code===63){effects.consume(code);return instructionClose;}if(markdownLineEnding(code)){returnState=instruction;return atLineEnding(code);}effects.consume(code);return instruction;}/** @type {State} */function instructionClose(code){return code===62?end(code):instruction(code);}/** @type {State} */function tagCloseStart(code){if(asciiAlpha(code)){effects.consume(code);return tagClose;}return nok(code);}/** @type {State} */function tagClose(code){if(code===45||asciiAlphanumeric(code)){effects.consume(code);return tagClose;}return tagCloseBetween(code);}/** @type {State} */function tagCloseBetween(code){if(markdownLineEnding(code)){returnState=tagCloseBetween;return atLineEnding(code);}if(markdownSpace(code)){effects.consume(code);return tagCloseBetween;}return end(code);}/** @type {State} */function tagOpen(code){if(code===45||asciiAlphanumeric(code)){effects.consume(code);return tagOpen;}if(code===47||code===62||markdownLineEndingOrSpace(code)){return tagOpenBetween(code);}return nok(code);}/** @type {State} */function tagOpenBetween(code){if(code===47){effects.consume(code);return end;}if(code===58||code===95||asciiAlpha(code)){effects.consume(code);return tagOpenAttributeName;}if(markdownLineEnding(code)){returnState=tagOpenBetween;return atLineEnding(code);}if(markdownSpace(code)){effects.consume(code);return tagOpenBetween;}return end(code);}/** @type {State} */function tagOpenAttributeName(code){if(code===45||code===46||code===58||code===95||asciiAlphanumeric(code)){effects.consume(code);return tagOpenAttributeName;}return tagOpenAttributeNameAfter(code);}/** @type {State} */function tagOpenAttributeNameAfter(code){if(code===61){effects.consume(code);return tagOpenAttributeValueBefore;}if(markdownLineEnding(code)){returnState=tagOpenAttributeNameAfter;return atLineEnding(code);}if(markdownSpace(code)){effects.consume(code);return tagOpenAttributeNameAfter;}return tagOpenBetween(code);}/** @type {State} */function tagOpenAttributeValueBefore(code){if(code===null||code===60||code===61||code===62||code===96){return nok(code);}if(code===34||code===39){effects.consume(code);marker=code;return tagOpenAttributeValueQuoted;}if(markdownLineEnding(code)){returnState=tagOpenAttributeValueBefore;return atLineEnding(code);}if(markdownSpace(code)){effects.consume(code);return tagOpenAttributeValueBefore;}effects.consume(code);marker=undefined;return tagOpenAttributeValueUnquoted;}/** @type {State} */function tagOpenAttributeValueQuoted(code){if(code===marker){effects.consume(code);return tagOpenAttributeValueQuotedAfter;}if(code===null){return nok(code);}if(markdownLineEnding(code)){returnState=tagOpenAttributeValueQuoted;return atLineEnding(code);}effects.consume(code);return tagOpenAttributeValueQuoted;}/** @type {State} */function tagOpenAttributeValueQuotedAfter(code){if(code===62||code===47||markdownLineEndingOrSpace(code)){return tagOpenBetween(code);}return nok(code);}/** @type {State} */function tagOpenAttributeValueUnquoted(code){if(code===null||code===34||code===39||code===60||code===61||code===96){return nok(code);}if(code===62||markdownLineEndingOrSpace(code)){return tagOpenBetween(code);}effects.consume(code);return tagOpenAttributeValueUnquoted;}// We can’t have blank lines in content, so no need to worry about empty
// tokens.
/** @type {State} */function atLineEnding(code){effects.exit('htmlTextData');effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return factorySpace(effects,afterPrefix,'linePrefix',self.parser.constructs.disable.null.includes('codeIndented')?undefined:4);}/** @type {State} */function afterPrefix(code){effects.enter('htmlTextData');return returnState(code);}/** @type {State} */function end(code){if(code===62){effects.consume(code);effects.exit('htmlTextData');effects.exit('htmlText');return ok;}return nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Event} Event
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var labelEnd={name:'labelEnd',tokenize:tokenizeLabelEnd,resolveTo:resolveToLabelEnd,resolveAll:resolveAllLabelEnd};/** @type {Construct} */var resourceConstruct={tokenize:tokenizeResource};/** @type {Construct} */var fullReferenceConstruct={tokenize:tokenizeFullReference};/** @type {Construct} */var collapsedReferenceConstruct={tokenize:tokenizeCollapsedReference};/** @type {Resolver} */function resolveAllLabelEnd(events){var index=-1;/** @type {Token} */var token;while(++index<events.length){token=events[index][1];if(token.type==='labelImage'||token.type==='labelLink'||token.type==='labelEnd'){// Remove the marker.
events.splice(index+1,token.type==='labelImage'?4:2);token.type='data';index++;}}return events;}/** @type {Resolver} */function resolveToLabelEnd(events,context){var index=events.length;var offset=0;/** @type {Token} */var token;/** @type {number|undefined} */var open;/** @type {number|undefined} */var close;/** @type {Event[]} */var media;// Find an opening.
while(index--){token=events[index][1];if(open){// If we see another link, or inactive link label, we’ve been here before.
if(token.type==='link'||token.type==='labelLink'&&token._inactive){break;}// Mark other link openings as inactive, as we can’t have links in
// links.
if(events[index][0]==='enter'&&token.type==='labelLink'){token._inactive=true;}}else if(close){if(events[index][0]==='enter'&&(token.type==='labelImage'||token.type==='labelLink')&&!token._balanced){open=index;if(token.type!=='labelLink'){offset=2;break;}}}else if(token.type==='labelEnd'){close=index;}}var group={type:events[open][1].type==='labelLink'?'link':'image',start:Object.assign({},events[open][1].start),end:Object.assign({},events[events.length-1][1].end)};var label={type:'label',start:Object.assign({},events[open][1].start),end:Object.assign({},events[close][1].end)};var text={type:'labelText',start:Object.assign({},events[open+offset+2][1].end),end:Object.assign({},events[close-2][1].start)};media=[['enter',group,context],['enter',label,context]];// Opening marker.
media=push(media,events.slice(open+1,open+offset+3));// Text open.
media=push(media,[['enter',text,context]]);// Between.
media=push(media,resolveAll(context.parser.constructs.insideSpan.null,events.slice(open+offset+4,close-3),context));// Text close, marker close, label close.
media=push(media,[['exit',text,context],events[close-2],events[close-1],['exit',label,context]]);// Reference, resource, or so.
media=push(media,events.slice(close+1));// Media close.
media=push(media,[['exit',group,context]]);splice(events,open,events.length,media);return events;}/** @type {Tokenizer} */function tokenizeLabelEnd(effects,ok,nok){var self=this;var index=self.events.length;/** @type {Token} */var labelStart;/** @type {boolean} */var defined;// Find an opening.
while(index--){if((self.events[index][1].type==='labelImage'||self.events[index][1].type==='labelLink')&&!self.events[index][1]._balanced){labelStart=self.events[index][1];break;}}return start;/** @type {State} */function start(code){if(!labelStart){return nok(code);}// It’s a balanced bracket, but contains a link.
if(labelStart._inactive)return balanced(code);defined=self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({start:labelStart.end,end:self.now()})));effects.enter('labelEnd');effects.enter('labelMarker');effects.consume(code);effects.exit('labelMarker');effects.exit('labelEnd');return afterLabelEnd;}/** @type {State} */function afterLabelEnd(code){// Resource: `[asd](fgh)`.
if(code===40){return effects.attempt(resourceConstruct,ok,defined?ok:balanced)(code);}// Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
if(code===91){return effects.attempt(fullReferenceConstruct,ok,defined?effects.attempt(collapsedReferenceConstruct,ok,balanced):balanced)(code);}// Shortcut reference: `[asd]`?
return defined?ok(code):balanced(code);}/** @type {State} */function balanced(code){labelStart._balanced=true;return nok(code);}}/** @type {Tokenizer} */function tokenizeResource(effects,ok,nok){return start;/** @type {State} */function start(code){effects.enter('resource');effects.enter('resourceMarker');effects.consume(code);effects.exit('resourceMarker');return factoryWhitespace(effects,open);}/** @type {State} */function open(code){if(code===41){return end(code);}return factoryDestination(effects,destinationAfter,nok,'resourceDestination','resourceDestinationLiteral','resourceDestinationLiteralMarker','resourceDestinationRaw','resourceDestinationString',32)(code);}/** @type {State} */function destinationAfter(code){return markdownLineEndingOrSpace(code)?factoryWhitespace(effects,between)(code):end(code);}/** @type {State} */function between(code){if(code===34||code===39||code===40){return factoryTitle(effects,factoryWhitespace(effects,end),nok,'resourceTitle','resourceTitleMarker','resourceTitleString')(code);}return end(code);}/** @type {State} */function end(code){if(code===41){effects.enter('resourceMarker');effects.consume(code);effects.exit('resourceMarker');effects.exit('resource');return ok;}return nok(code);}}/** @type {Tokenizer} */function tokenizeFullReference(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){return factoryLabel.call(self,effects,afterLabel,nok,'reference','referenceMarker','referenceString')(code);}/** @type {State} */function afterLabel(code){return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length-1][1]).slice(1,-1)))?ok(code):nok(code);}}/** @type {Tokenizer} */function tokenizeCollapsedReference(effects,ok,nok){return start;/** @type {State} */function start(code){effects.enter('reference');effects.enter('referenceMarker');effects.consume(code);effects.exit('referenceMarker');return open;}/** @type {State} */function open(code){if(code===93){effects.enter('referenceMarker');effects.consume(code);effects.exit('referenceMarker');effects.exit('reference');return ok;}return nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var labelStartImage={name:'labelStartImage',tokenize:tokenizeLabelStartImage,resolveAll:labelEnd.resolveAll};/** @type {Tokenizer} */function tokenizeLabelStartImage(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){effects.enter('labelImage');effects.enter('labelImageMarker');effects.consume(code);effects.exit('labelImageMarker');return open;}/** @type {State} */function open(code){if(code===91){effects.enter('labelMarker');effects.consume(code);effects.exit('labelMarker');effects.exit('labelImage');return after;}return nok(code);}/** @type {State} */function after(code){/* To do: remove in the future once we’ve switched from
           * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
           * which doesn’t need this */ /* Hidden footnotes hook */ /* c8 ignore next 3 */return code===94&&'_hiddenFootnoteSupport'in self.parser.constructs?nok(code):ok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var labelStartLink={name:'labelStartLink',tokenize:tokenizeLabelStartLink,resolveAll:labelEnd.resolveAll};/** @type {Tokenizer} */function tokenizeLabelStartLink(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){effects.enter('labelLink');effects.enter('labelMarker');effects.consume(code);effects.exit('labelMarker');effects.exit('labelLink');return after;}/** @type {State} */function after(code){/* To do: remove in the future once we’ve switched from
           * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
           * which doesn’t need this */ /* Hidden footnotes hook. */ /* c8 ignore next 3 */return code===94&&'_hiddenFootnoteSupport'in self.parser.constructs?nok(code):ok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {Construct} */var lineEnding={name:'lineEnding',tokenize:tokenizeLineEnding};/** @type {Tokenizer} */function tokenizeLineEnding(effects,ok){return start;/** @type {State} */function start(code){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return factorySpace(effects,ok,'linePrefix');}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var thematicBreak$1={name:'thematicBreak',tokenize:tokenizeThematicBreak};/** @type {Tokenizer} */function tokenizeThematicBreak(effects,ok,nok){var size=0;/** @type {NonNullable<Code>} */var marker;return start;/** @type {State} */function start(code){effects.enter('thematicBreak');marker=code;return atBreak(code);}/** @type {State} */function atBreak(code){if(code===marker){effects.enter('thematicBreakSequence');return sequence(code);}if(markdownSpace(code)){return factorySpace(effects,atBreak,'whitespace')(code);}if(size<3||code!==null&&!markdownLineEnding(code)){return nok(code);}effects.exit('thematicBreak');return ok(code);}/** @type {State} */function sequence(code){if(code===marker){effects.consume(code);size++;return sequence;}effects.exit('thematicBreakSequence');return atBreak(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
       * @typedef {import('micromark-util-types').Exiter} Exiter
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var list$1={name:'list',tokenize:tokenizeListStart,continuation:{tokenize:tokenizeListContinuation},exit:tokenizeListEnd};/** @type {Construct} */var listItemPrefixWhitespaceConstruct={tokenize:tokenizeListItemPrefixWhitespace,partial:true};/** @type {Construct} */var indentConstruct={tokenize:tokenizeIndent$1,partial:true};/**
       * @type {Tokenizer}
       * @this {TokenizeContextWithState}
       */function tokenizeListStart(effects,ok,nok){var self=this;var tail=self.events[self.events.length-1];var initialSize=tail&&tail[1].type==='linePrefix'?tail[2].sliceSerialize(tail[1],true).length:0;var size=0;return start;/** @type {State} */function start(code){var kind=self.containerState.type||(code===42||code===43||code===45?'listUnordered':'listOrdered');if(kind==='listUnordered'?!self.containerState.marker||code===self.containerState.marker:asciiDigit(code)){if(!self.containerState.type){self.containerState.type=kind;effects.enter(kind,{_container:true});}if(kind==='listUnordered'){effects.enter('listItemPrefix');return code===42||code===45?effects.check(thematicBreak$1,nok,atMarker)(code):atMarker(code);}if(!self.interrupt||code===49){effects.enter('listItemPrefix');effects.enter('listItemValue');return inside(code);}}return nok(code);}/** @type {State} */function inside(code){if(asciiDigit(code)&&++size<10){effects.consume(code);return inside;}if((!self.interrupt||size<2)&&(self.containerState.marker?code===self.containerState.marker:code===41||code===46)){effects.exit('listItemValue');return atMarker(code);}return nok(code);}/**
         * @type {State}
         **/function atMarker(code){effects.enter('listItemMarker');effects.consume(code);effects.exit('listItemMarker');self.containerState.marker=self.containerState.marker||code;return effects.check(blankLine,// Can’t be empty when interrupting.
self.interrupt?nok:onBlank,effects.attempt(listItemPrefixWhitespaceConstruct,endOfPrefix,otherPrefix));}/** @type {State} */function onBlank(code){self.containerState.initialBlankLine=true;initialSize++;return endOfPrefix(code);}/** @type {State} */function otherPrefix(code){if(markdownSpace(code)){effects.enter('listItemPrefixWhitespace');effects.consume(code);effects.exit('listItemPrefixWhitespace');return endOfPrefix;}return nok(code);}/** @type {State} */function endOfPrefix(code){self.containerState.size=initialSize+self.sliceSerialize(effects.exit('listItemPrefix'),true).length;return ok(code);}}/**
       * @type {Tokenizer}
       * @this {TokenizeContextWithState}
       */function tokenizeListContinuation(effects,ok,nok){var self=this;self.containerState._closeFlow=undefined;return effects.check(blankLine,onBlank,notBlank);/** @type {State} */function onBlank(code){self.containerState.furtherBlankLines=self.containerState.furtherBlankLines||self.containerState.initialBlankLine;// We have a blank line.
// Still, try to consume at most the items size.
return factorySpace(effects,ok,'listItemIndent',self.containerState.size+1)(code);}/** @type {State} */function notBlank(code){if(self.containerState.furtherBlankLines||!markdownSpace(code)){self.containerState.furtherBlankLines=undefined;self.containerState.initialBlankLine=undefined;return notInCurrentItem(code);}self.containerState.furtherBlankLines=undefined;self.containerState.initialBlankLine=undefined;return effects.attempt(indentConstruct,ok,notInCurrentItem)(code);}/** @type {State} */function notInCurrentItem(code){// While we do continue, we signal that the flow should be closed.
self.containerState._closeFlow=true;// As we’re closing flow, we’re no longer interrupting.
self.interrupt=undefined;return factorySpace(effects,effects.attempt(list$1,ok,nok),'linePrefix',self.parser.constructs.disable.null.includes('codeIndented')?undefined:4)(code);}}/**
       * @type {Tokenizer}
       * @this {TokenizeContextWithState}
       */function tokenizeIndent$1(effects,ok,nok){var self=this;return factorySpace(effects,afterPrefix,'listItemIndent',self.containerState.size+1);/** @type {State} */function afterPrefix(code){var tail=self.events[self.events.length-1];return tail&&tail[1].type==='listItemIndent'&&tail[2].sliceSerialize(tail[1],true).length===self.containerState.size?ok(code):nok(code);}}/**
       * @type {Exiter}
       * @this {TokenizeContextWithState}
       */function tokenizeListEnd(effects){effects.exit(this.containerState.type);}/**
       * @type {Tokenizer}
       * @this {TokenizeContextWithState}
       */function tokenizeListItemPrefixWhitespace(effects,ok,nok){var self=this;return factorySpace(effects,afterPrefix,'listItemPrefixWhitespace',self.parser.constructs.disable.null.includes('codeIndented')?undefined:4+1);/** @type {State} */function afterPrefix(code){var tail=self.events[self.events.length-1];return!markdownSpace(code)&&tail&&tail[1].type==='listItemPrefixWhitespace'?ok(code):nok(code);}}/**
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */ /** @type {Construct} */var setextUnderline={name:'setextUnderline',tokenize:tokenizeSetextUnderline,resolveTo:resolveToSetextUnderline};/** @type {Resolver} */function resolveToSetextUnderline(events,context){var index=events.length;/** @type {number|undefined} */var content;/** @type {number|undefined} */var text;/** @type {number|undefined} */var definition;// Find the opening of the content.
// It’ll always exist: we don’t tokenize if it isn’t there.
while(index--){if(events[index][0]==='enter'){if(events[index][1].type==='content'){content=index;break;}if(events[index][1].type==='paragraph'){text=index;}}// Exit
else{if(events[index][1].type==='content'){// Remove the content end (if needed we’ll add it later)
events.splice(index,1);}if(!definition&&events[index][1].type==='definition'){definition=index;}}}var heading={type:'setextHeading',start:Object.assign({},events[text][1].start),end:Object.assign({},events[events.length-1][1].end)};// Change the paragraph to setext heading text.
events[text][1].type='setextHeadingText';// If we have definitions in the content, we’ll keep on having content,
// but we need move it.
if(definition){events.splice(text,0,['enter',heading,context]);events.splice(definition+1,0,['exit',events[content][1],context]);events[content][1].end=Object.assign({},events[definition][1].end);}else{events[content][1]=heading;}// Add the heading exit at the end.
events.push(['exit',heading,context]);return events;}/** @type {Tokenizer} */function tokenizeSetextUnderline(effects,ok,nok){var self=this;var index=self.events.length;/** @type {NonNullable<Code>} */var marker;/** @type {boolean} */var paragraph;// Find an opening.
while(index--){// Skip enter/exit of line ending, line prefix, and content.
// We can now either have a definition or a paragraph.
if(self.events[index][1].type!=='lineEnding'&&self.events[index][1].type!=='linePrefix'&&self.events[index][1].type!=='content'){paragraph=self.events[index][1].type==='paragraph';break;}}return start;/** @type {State} */function start(code){if(!self.parser.lazy[self.now().line]&&(self.interrupt||paragraph)){effects.enter('setextHeadingLine');effects.enter('setextHeadingLineSequence');marker=code;return closingSequence(code);}return nok(code);}/** @type {State} */function closingSequence(code){if(code===marker){effects.consume(code);return closingSequence;}effects.exit('setextHeadingLineSequence');return factorySpace(effects,closingSequenceEnd,'lineSuffix')(code);}/** @type {State} */function closingSequenceEnd(code){if(code===null||markdownLineEnding(code)){effects.exit('setextHeadingLine');return ok(code);}return nok(code);}}/**
       * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
       * @typedef {import('micromark-util-types').Initializer} Initializer
       * @typedef {import('micromark-util-types').State} State
       */ /** @type {InitialConstruct} */var flow$1={tokenize:initializeFlow};/** @type {Initializer} */function initializeFlow(effects){var self=this;var initial=effects.attempt(// Try to parse a blank line.
blankLine,atBlankEnding,// Try to parse initial flow (essentially, only code).
effects.attempt(this.parser.constructs.flowInitial,afterConstruct,factorySpace(effects,effects.attempt(this.parser.constructs.flow,afterConstruct,effects.attempt(content,afterConstruct)),'linePrefix')));return initial;/** @type {State} */function atBlankEnding(code){if(code===null){effects.consume(code);return;}effects.enter('lineEndingBlank');effects.consume(code);effects.exit('lineEndingBlank');self.currentConstruct=undefined;return initial;}/** @type {State} */function afterConstruct(code){if(code===null){effects.consume(code);return;}effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');self.currentConstruct=undefined;return initial;}}/**
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Initializer} Initializer
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Code} Code
       */var resolver={resolveAll:createResolver()};var string$1=initializeFactory('string');var text$6=initializeFactory('text');/**
       * @param {'string'|'text'} field
       * @returns {InitialConstruct}
       */function initializeFactory(field){return{tokenize:initializeText,resolveAll:createResolver(field==='text'?resolveAllLineSuffixes:undefined)};/** @type {Initializer} */function initializeText(effects){var self=this;var constructs=this.parser.constructs[field];var text=effects.attempt(constructs,start,notText);return start;/** @type {State} */function start(code){return atBreak(code)?text(code):notText(code);}/** @type {State} */function notText(code){if(code===null){effects.consume(code);return;}effects.enter('data');effects.consume(code);return data;}/** @type {State} */function data(code){if(atBreak(code)){effects.exit('data');return text(code);}// Data.
effects.consume(code);return data;}/**
           * @param {Code} code
           * @returns {boolean}
           */function atBreak(code){if(code===null){return true;}var list=constructs[code];var index=-1;if(list){while(++index<list.length){var item=list[index];if(!item.previous||item.previous.call(self,self.previous)){return true;}}}return false;}}}/**
       * @param {Resolver} [extraResolver]
       * @returns {Resolver}
       */function createResolver(extraResolver){return resolveAllText;/** @type {Resolver} */function resolveAllText(events,context){var index=-1;/** @type {number|undefined} */var enter;// A rather boring computation (to merge adjacent `data` events) which
// improves mm performance by 29%.
while(++index<=events.length){if(enter===undefined){if(events[index]&&events[index][1].type==='data'){enter=index;index++;}}else if(!events[index]||events[index][1].type!=='data'){// Don’t do anything if there is one data token.
if(index!==enter+2){events[enter][1].end=events[index-1][1].end;events.splice(enter+2,index-enter-2);index=enter+2;}enter=undefined;}}return extraResolver?extraResolver(events,context):events;}}/**
       * A rather ugly set of instructions which again looks at chunks in the input
       * stream.
       * The reason to do this here is that it is *much* faster to parse in reverse.
       * And that we can’t hook into `null` to split the line suffix before an EOF.
       * To do: figure out if we can make this into a clean utility, or even in core.
       * As it will be useful for GFMs literal autolink extension (and maybe even
       * tables?)
       *
       * @type {Resolver}
       */function resolveAllLineSuffixes(events,context){var eventIndex=0;// Skip first.
while(++eventIndex<=events.length){if((eventIndex===events.length||events[eventIndex][1].type==='lineEnding')&&events[eventIndex-1][1].type==='data'){var _data=events[eventIndex-1][1];var chunks=context.sliceStream(_data);var _index4=chunks.length;var bufferIndex=-1;var size=0;/** @type {boolean|undefined} */var tabs=void 0;while(_index4--){var chunk=chunks[_index4];if(typeof chunk==='string'){bufferIndex=chunk.length;while(chunk.charCodeAt(bufferIndex-1)===32){size++;bufferIndex--;}if(bufferIndex)break;bufferIndex=-1;}// Number
else if(chunk===-2){tabs=true;size++;}else if(chunk===-1);else{// Replacement character, exit.
_index4++;break;}}if(size){var token={type:eventIndex===events.length||tabs||size<2?'lineSuffix':'hardBreakTrailing',start:{line:_data.end.line,column:_data.end.column-size,offset:_data.end.offset-size,_index:_data.start._index+_index4,_bufferIndex:_index4?bufferIndex:_data.start._bufferIndex+bufferIndex},end:Object.assign({},_data.end)};_data.end=Object.assign({},token.start);if(_data.start.offset===_data.end.offset){Object.assign(_data,token);}else{events.splice(eventIndex,0,['enter',token,context],['exit',token,context]);eventIndex+=2;}}eventIndex++;}}return events;}/**
       * @typedef {import('micromark-util-types').Code} Code
       * @typedef {import('micromark-util-types').Chunk} Chunk
       * @typedef {import('micromark-util-types').Point} Point
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').Effects} Effects
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Construct} Construct
       * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
       * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
       * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
       * @typedef {import('micromark-util-types').ParseContext} ParseContext
       */ /**
       * Create a tokenizer.
       * Tokenizers deal with one type of data (e.g., containers, flow, text).
       * The parser is the object dealing with it all.
       * `initialize` works like other constructs, except that only its `tokenize`
       * function is used, in which case it doesn’t receive an `ok` or `nok`.
       * `from` can be given to set the point before the first character, although
       * when further lines are indented, they must be set with `defineSkip`.
       *
       * @param {ParseContext} parser
       * @param {InitialConstruct} initialize
       * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
       * @returns {TokenizeContext}
       */function createTokenizer(parser,initialize,from){/** @type {Point} */var point=Object.assign(from?Object.assign({},from):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});/** @type {Record<string, number>} */var columnStart={};/** @type {Construct[]} */var resolveAllConstructs=[];/** @type {Chunk[]} */var chunks=[];/** @type {Token[]} */var stack=[];/**
         * Tools used for tokenizing.
         *
         * @type {Effects}
         */var effects={consume:consume,enter:enter,exit:exit,attempt:constructFactory(onsuccessfulconstruct),check:constructFactory(onsuccessfulcheck),interrupt:constructFactory(onsuccessfulcheck,{interrupt:true})};/**
         * State and tools for resolving and serializing.
         *
         * @type {TokenizeContext}
         */var context={previous:null,code:null,containerState:{},events:[],parser:parser,sliceStream:sliceStream,sliceSerialize:sliceSerialize,now:now,defineSkip:defineSkip,write:write};/**
         * The state function.
         *
         * @type {State|void}
         */var state=initialize.tokenize.call(context,effects);if(initialize.resolveAll){resolveAllConstructs.push(initialize);}return context;/** @type {TokenizeContext['write']} */function write(slice){chunks=push(chunks,slice);main();// Exit if we’re not done, resolve might change stuff.
if(chunks[chunks.length-1]!==null){return[];}addResult(initialize,0);// Otherwise, resolve, and exit.
context.events=resolveAll(resolveAllConstructs,context.events,context);return context.events;}//
// Tools.
//
/** @type {TokenizeContext['sliceSerialize']} */function sliceSerialize(token,expandTabs){return serializeChunks(sliceStream(token),expandTabs);}/** @type {TokenizeContext['sliceStream']} */function sliceStream(token){return sliceChunks(chunks,token);}/** @type {TokenizeContext['now']} */function now(){return Object.assign({},point);}/** @type {TokenizeContext['defineSkip']} */function defineSkip(value){columnStart[value.line]=value.column;accountForPotentialSkip();}//
// State management.
//
/**
         * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
         * `consume`).
         * Here is where we walk through the chunks, which either include strings of
         * several characters, or numerical character codes.
         * The reason to do this in a loop instead of a call is so the stack can
         * drain.
         *
         * @returns {void}
         */function main(){/** @type {number} */var chunkIndex;while(point._index<chunks.length){var chunk=chunks[point._index];// If we’re in a buffer chunk, loop through it.
if(typeof chunk==='string'){chunkIndex=point._index;if(point._bufferIndex<0){point._bufferIndex=0;}while(point._index===chunkIndex&&point._bufferIndex<chunk.length){go(chunk.charCodeAt(point._bufferIndex));}}else{go(chunk);}}}/**
         * Deal with one code.
         *
         * @param {Code} code
         * @returns {void}
         */function go(code){state=state(code);}/** @type {Effects['consume']} */function consume(code){if(markdownLineEnding(code)){point.line++;point.column=1;point.offset+=code===-3?2:1;accountForPotentialSkip();}else if(code!==-1){point.column++;point.offset++;}// Not in a string chunk.
if(point._bufferIndex<0){point._index++;}else{point._bufferIndex++;// At end of string chunk.
// @ts-expect-error Points w/ non-negative `_bufferIndex` reference
// strings.
if(point._bufferIndex===chunks[point._index].length){point._bufferIndex=-1;point._index++;}}// Expose the previous character.
context.previous=code;// Mark as consumed.
}/** @type {Effects['enter']} */function enter(type,fields){/** @type {Token} */ // @ts-expect-error Patch instead of assign required fields to help GC.
var token=fields||{};token.type=type;token.start=now();context.events.push(['enter',token,context]);stack.push(token);return token;}/** @type {Effects['exit']} */function exit(type){var token=stack.pop();token.end=now();context.events.push(['exit',token,context]);return token;}/**
         * Use results.
         *
         * @type {ReturnHandle}
         */function onsuccessfulconstruct(construct,info){addResult(construct,info.from);}/**
         * Discard results.
         *
         * @type {ReturnHandle}
         */function onsuccessfulcheck(_,info){info.restore();}/**
         * Factory to attempt/check/interrupt.
         *
         * @param {ReturnHandle} onreturn
         * @param {Record<string, unknown>} [fields]
         */function constructFactory(onreturn,fields){return hook;/**
           * Handle either an object mapping codes to constructs, a list of
           * constructs, or a single construct.
           *
           * @param {Construct|Construct[]|ConstructRecord} constructs
           * @param {State} returnState
           * @param {State} [bogusState]
           * @returns {State}
           */function hook(constructs,returnState,bogusState){/** @type {Construct[]} */var listOfConstructs;/** @type {number} */var constructIndex;/** @type {Construct} */var currentConstruct;/** @type {Info} */var info;return Array.isArray(constructs)?/* c8 ignore next 1 */handleListOfConstructs(constructs):'tokenize'in constructs// @ts-expect-error Looks like a construct.
?handleListOfConstructs([constructs]):handleMapOfConstructs(constructs);/**
             * Handle a list of construct.
             *
             * @param {ConstructRecord} map
             * @returns {State}
             */function handleMapOfConstructs(map){return start;/** @type {State} */function start(code){var def=code!==null&&map[code];var all=code!==null&&map.null;var list=[].concat(_toConsumableArray(Array.isArray(def)?def:def?[def]:[]),_toConsumableArray(Array.isArray(all)?all:all?[all]:[]));return handleListOfConstructs(list)(code);}}/**
             * Handle a list of construct.
             *
             * @param {Construct[]} list
             * @returns {State}
             */function handleListOfConstructs(list){listOfConstructs=list;constructIndex=0;if(list.length===0){return bogusState;}return handleConstruct(list[constructIndex]);}/**
             * Handle a single construct.
             *
             * @param {Construct} construct
             * @returns {State}
             */function handleConstruct(construct){return start;/** @type {State} */function start(code){// To do: not needed to store if there is no bogus state, probably?
// Currently doesn’t work because `inspect` in document does a check
// w/o a bogus, which doesn’t make sense. But it does seem to help perf
// by not storing.
info=store();currentConstruct=construct;if(!construct.partial){context.currentConstruct=construct;}if(construct.name&&context.parser.constructs.disable.null.includes(construct.name)){return nok();}return construct.tokenize.call(// If we do have fields, create an object w/ `context` as its
// prototype.
// This allows a “live binding”, which is needed for `interrupt`.
fields?Object.assign(Object.create(context),fields):context,effects,ok,nok)(code);}}/** @type {State} */function ok(code){onreturn(currentConstruct,info);return returnState;}/** @type {State} */function nok(code){info.restore();if(++constructIndex<listOfConstructs.length){return handleConstruct(listOfConstructs[constructIndex]);}return bogusState;}}}/**
         * @param {Construct} construct
         * @param {number} from
         * @returns {void}
         */function addResult(construct,from){if(construct.resolveAll&&!resolveAllConstructs.includes(construct)){resolveAllConstructs.push(construct);}if(construct.resolve){splice(context.events,from,context.events.length-from,construct.resolve(context.events.slice(from),context));}if(construct.resolveTo){context.events=construct.resolveTo(context.events,context);}}/**
         * Store state.
         *
         * @returns {Info}
         */function store(){var startPoint=now();var startPrevious=context.previous;var startCurrentConstruct=context.currentConstruct;var startEventsIndex=context.events.length;var startStack=Array.from(stack);return{restore:restore,from:startEventsIndex};/**
           * Restore state.
           *
           * @returns {void}
           */function restore(){point=startPoint;context.previous=startPrevious;context.currentConstruct=startCurrentConstruct;context.events.length=startEventsIndex;stack=startStack;accountForPotentialSkip();}}/**
         * Move the current point a bit forward in the line when it’s on a column
         * skip.
         *
         * @returns {void}
         */function accountForPotentialSkip(){if(point.line in columnStart&&point.column<2){point.column=columnStart[point.line];point.offset+=columnStart[point.line]-1;}}}/**
       * Get the chunks from a slice of chunks in the range of a token.
       *
       * @param {Chunk[]} chunks
       * @param {Pick<Token, 'start'|'end'>} token
       * @returns {Chunk[]}
       */function sliceChunks(chunks,token){var startIndex=token.start._index;var startBufferIndex=token.start._bufferIndex;var endIndex=token.end._index;var endBufferIndex=token.end._bufferIndex;/** @type {Chunk[]} */var view;if(startIndex===endIndex){// @ts-expect-error `_bufferIndex` is used on string chunks.
view=[chunks[startIndex].slice(startBufferIndex,endBufferIndex)];}else{view=chunks.slice(startIndex,endIndex);if(startBufferIndex>-1){// @ts-expect-error `_bufferIndex` is used on string chunks.
view[0]=view[0].slice(startBufferIndex);}if(endBufferIndex>0){// @ts-expect-error `_bufferIndex` is used on string chunks.
view.push(chunks[endIndex].slice(0,endBufferIndex));}}return view;}/**
       * Get the string value of a slice of chunks.
       *
       * @param {Chunk[]} chunks
       * @param {boolean} [expandTabs=false]
       * @returns {string}
       */function serializeChunks(chunks,expandTabs){var index=-1;/** @type {string[]} */var result=[];/** @type {boolean|undefined} */var atTab;while(++index<chunks.length){var chunk=chunks[index];/** @type {string} */var value=void 0;if(typeof chunk==='string'){value=chunk;}else switch(chunk){case-5:{value='\r';break;}case-4:{value='\n';break;}case-3:{value='\r'+'\n';break;}case-2:{value=expandTabs?' ':'\t';break;}case-1:{if(!expandTabs&&atTab)continue;value=' ';break;}default:{// Currently only replacement character.
value=String.fromCharCode(chunk);}}atTab=chunk===-2;result.push(value);}return result.join('');}/**
       * @typedef {import('micromark-util-types').Extension} Extension
       */ /** @type {Extension['document']} */var document$1=(_document$={},_defineProperty(_document$,42,list$1),_defineProperty(_document$,43,list$1),_defineProperty(_document$,45,list$1),_defineProperty(_document$,48,list$1),_defineProperty(_document$,49,list$1),_defineProperty(_document$,50,list$1),_defineProperty(_document$,51,list$1),_defineProperty(_document$,52,list$1),_defineProperty(_document$,53,list$1),_defineProperty(_document$,54,list$1),_defineProperty(_document$,55,list$1),_defineProperty(_document$,56,list$1),_defineProperty(_document$,57,list$1),_defineProperty(_document$,62,blockQuote),_document$);/** @type {Extension['contentInitial']} */var contentInitial=_defineProperty({},91,definition);/** @type {Extension['flowInitial']} */var flowInitial=(_flowInitial={},_defineProperty(_flowInitial,-2,codeIndented),_defineProperty(_flowInitial,-1,codeIndented),_defineProperty(_flowInitial,32,codeIndented),_flowInitial);/** @type {Extension['flow']} */var flow=(_flow={},_defineProperty(_flow,35,headingAtx),_defineProperty(_flow,42,thematicBreak$1),_defineProperty(_flow,45,[setextUnderline,thematicBreak$1]),_defineProperty(_flow,60,htmlFlow),_defineProperty(_flow,61,setextUnderline),_defineProperty(_flow,95,thematicBreak$1),_defineProperty(_flow,96,codeFenced),_defineProperty(_flow,126,codeFenced),_flow);/** @type {Extension['string']} */var string=(_string={},_defineProperty(_string,38,characterReference),_defineProperty(_string,92,characterEscape),_string);/** @type {Extension['text']} */var text$5=(_text$={},_defineProperty(_text$,-5,lineEnding),_defineProperty(_text$,-4,lineEnding),_defineProperty(_text$,-3,lineEnding),_defineProperty(_text$,33,labelStartImage),_defineProperty(_text$,38,characterReference),_defineProperty(_text$,42,attention),_defineProperty(_text$,60,[autolink,htmlText]),_defineProperty(_text$,91,labelStartLink),_defineProperty(_text$,92,[hardBreakEscape,characterEscape]),_defineProperty(_text$,93,labelEnd),_defineProperty(_text$,95,attention),_defineProperty(_text$,96,codeText),_text$);/** @type {Extension['insideSpan']} */var insideSpan={null:[attention,resolver]};/** @type {Extension['attentionMarkers']} */var attentionMarkers={null:[42,95]};/** @type {Extension['disable']} */var disable={null:[]};var defaultConstructs=/*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({__proto__:null,document:document$1,contentInitial:contentInitial,flowInitial:flowInitial,flow:flow,string:string,text:text$5,insideSpan:insideSpan,attentionMarkers:attentionMarkers,disable:disable},Symbol.toStringTag,{value:'Module'}));/**
       * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
       * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
       * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
       * @typedef {import('micromark-util-types').ParseContext} ParseContext
       * @typedef {import('micromark-util-types').Create} Create
       */ /**
       * @param {ParseOptions} [options]
       * @returns {ParseContext}
       */function parse$3(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};/** @type {FullNormalizedExtension} */ // @ts-expect-error `defaultConstructs` is full, so the result will be too.
var constructs=combineExtensions(// @ts-expect-error Same as above.
[defaultConstructs].concat(options.extensions||[]));/** @type {ParseContext} */var parser={defined:[],lazy:{},constructs:constructs,content:create(content$1),document:create(document$2),flow:create(flow$1),string:create(string$1),text:create(text$6)};return parser;/**
         * @param {InitialConstruct} initial
         */function create(initial){return creator;/** @type {Create} */function creator(from){return createTokenizer(parser,initial,from);}}}/**
       * @typedef {import('micromark-util-types').Encoding} Encoding
       * @typedef {import('micromark-util-types').Value} Value
       * @typedef {import('micromark-util-types').Chunk} Chunk
       * @typedef {import('micromark-util-types').Code} Code
       */ /**
       * @callback Preprocessor
       * @param {Value} value
       * @param {Encoding} [encoding]
       * @param {boolean} [end=false]
       * @returns {Chunk[]}
       */var search$1=/[\0\t\n\r]/g;/**
       * @returns {Preprocessor}
       */function preprocess(){var column=1;var buffer='';/** @type {boolean|undefined} */var start=true;/** @type {boolean|undefined} */var atCarriageReturn;return preprocessor;/** @type {Preprocessor} */function preprocessor(value,encoding,end){/** @type {Chunk[]} */var chunks=[];/** @type {RegExpMatchArray|null} */var match;/** @type {number} */var next;/** @type {number} */var startPosition;/** @type {number} */var endPosition;/** @type {Code} */var code;// @ts-expect-error `Buffer` does allow an encoding.
value=buffer+value.toString(encoding);startPosition=0;buffer='';if(start){if(value.charCodeAt(0)===65279){startPosition++;}start=undefined;}while(startPosition<value.length){search$1.lastIndex=startPosition;match=search$1.exec(value);endPosition=match&&match.index!==undefined?match.index:value.length;code=value.charCodeAt(endPosition);if(!match){buffer=value.slice(startPosition);break;}if(code===10&&startPosition===endPosition&&atCarriageReturn){chunks.push(-3);atCarriageReturn=undefined;}else{if(atCarriageReturn){chunks.push(-5);atCarriageReturn=undefined;}if(startPosition<endPosition){chunks.push(value.slice(startPosition,endPosition));column+=endPosition-startPosition;}switch(code){case 0:{chunks.push(65533);column++;break;}case 9:{next=Math.ceil(column/4)*4;chunks.push(-2);while(column++<next){chunks.push(-1);}break;}case 10:{chunks.push(-4);column=1;break;}default:{atCarriageReturn=true;column=1;}}}startPosition=endPosition+1;}if(end){if(atCarriageReturn)chunks.push(-5);if(buffer)chunks.push(buffer);chunks.push(null);}return chunks;}}/**
       * @typedef {import('micromark-util-types').Event} Event
       */ /**
       * @param {Event[]} events
       * @returns {Event[]}
       */function postprocess(events){while(!subtokenize(events)){// Empty
}return events;}/**
       * Turn the number (in string form as either hexa- or plain decimal) coming from
       * a numeric character reference into a character.
       *
       * @param {string} value
       *   Value to decode.
       * @param {number} base
       *   Numeric base.
       * @returns {string}
       */function decodeNumericCharacterReference(value,base){var code=Number.parseInt(value,base);if(// C0 except for HT, LF, FF, CR, space
code<9||code===11||code>13&&code<32||// Control character (DEL) of the basic block and C1 controls.
code>126&&code<160||// Lone high surrogates and low surrogates.
code>55295&&code<57344||// Noncharacters.
code>64975&&code<65008||(code&65535)===65535||(code&65535)===65534||// Out of range
code>1114111){return"\uFFFD";}return String.fromCharCode(code);}var characterEscapeOrReference=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;/**
       * Utility to decode markdown strings (which occur in places such as fenced
       * code info strings, destinations, labels, and titles).
       * The “string” content type allows character escapes and -references.
       * This decodes those.
       *
       * @param {string} value
       * @returns {string}
       */function decodeString(value){return value.replace(characterEscapeOrReference,decode);}/**
       * @param {string} $0
       * @param {string} $1
       * @param {string} $2
       * @returns {string}
       */function decode($0,$1,$2){if($1){// Escape.
return $1;}// Reference.
var head=$2.charCodeAt(0);if(head===35){var _head=$2.charCodeAt(1);var hex=_head===120||_head===88;return decodeNumericCharacterReference($2.slice(hex?2:1),hex?16:10);}return decodeNamedCharacterReference($2)||$0;}/**
       * @typedef {import('micromark-util-types').Encoding} Encoding
       * @typedef {import('micromark-util-types').Event} Event
       * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
       * @typedef {import('micromark-util-types').Value} Value
       * @typedef {import('unist').Parent} UnistParent
       * @typedef {import('unist').Point} Point
       * @typedef {import('mdast').PhrasingContent} PhrasingContent
       * @typedef {import('mdast').Content} Content
       * @typedef {Root|Content} Node
       * @typedef {Extract<Node, UnistParent>} Parent
       * @typedef {import('mdast').Break} Break
       * @typedef {import('mdast').Blockquote} Blockquote
       * @typedef {import('mdast').Code} Code
       * @typedef {import('mdast').Definition} Definition
       * @typedef {import('mdast').Emphasis} Emphasis
       * @typedef {import('mdast').Heading} Heading
       * @typedef {import('mdast').HTML} HTML
       * @typedef {import('mdast').Image} Image
       * @typedef {import('mdast').ImageReference} ImageReference
       * @typedef {import('mdast').InlineCode} InlineCode
       * @typedef {import('mdast').Link} Link
       * @typedef {import('mdast').LinkReference} LinkReference
       * @typedef {import('mdast').List} List
       * @typedef {import('mdast').ListItem} ListItem
       * @typedef {import('mdast').Paragraph} Paragraph
       * @typedef {import('mdast').Root} Root
       * @typedef {import('mdast').Strong} Strong
       * @typedef {import('mdast').Text} Text
       * @typedef {import('mdast').ThematicBreak} ThematicBreak
       *
       * @typedef {UnistParent & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
       */var own$e={}.hasOwnProperty;/**
       * @param value Markdown to parse (`string` or `Buffer`).
       * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
       * @param [options] Configuration
       */var fromMarkdown=/**
         * @type {(
         *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
         *   ((value: Value, options?: Options) => Root)
         * )}
         */ /**
         * @param {Value} value
         * @param {Encoding} [encoding]
         * @param {Options} [options]
         * @returns {Root}
         */function fromMarkdown(value,encoding,options){if(typeof encoding!=='string'){options=encoding;encoding=undefined;}return compiler(options)(postprocess(parse$3(options).document().write(preprocess()(value,encoding,true))));};/**
       * Note this compiler only understand complete buffering, not streaming.
       *
       * @param {Options} [options]
       */function compiler(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};/** @type {NormalizedExtension} */ // @ts-expect-error: our base has all required fields, so the result will too.
var config=configure({transforms:[],canContainEols:['emphasis','fragment','heading','paragraph','strong'],enter:{autolink:opener(link),autolinkProtocol:onenterdata,autolinkEmail:onenterdata,atxHeading:opener(heading),blockQuote:opener(blockQuote),characterEscape:onenterdata,characterReference:onenterdata,codeFenced:opener(codeFlow),codeFencedFenceInfo:buffer,codeFencedFenceMeta:buffer,codeIndented:opener(codeFlow,buffer),codeText:opener(codeText,buffer),codeTextData:onenterdata,data:onenterdata,codeFlowValue:onenterdata,definition:opener(definition),definitionDestinationString:buffer,definitionLabelString:buffer,definitionTitleString:buffer,emphasis:opener(emphasis),hardBreakEscape:opener(hardBreak),hardBreakTrailing:opener(hardBreak),htmlFlow:opener(html,buffer),htmlFlowData:onenterdata,htmlText:opener(html,buffer),htmlTextData:onenterdata,image:opener(image),label:buffer,link:opener(link),listItem:opener(listItem),listItemValue:onenterlistitemvalue,listOrdered:opener(list,onenterlistordered),listUnordered:opener(list),paragraph:opener(paragraph),reference:onenterreference,referenceString:buffer,resourceDestinationString:buffer,resourceTitleString:buffer,setextHeading:opener(heading),strong:opener(strong),thematicBreak:opener(thematicBreak)},exit:{atxHeading:closer(),atxHeadingSequence:onexitatxheadingsequence,autolink:closer(),autolinkEmail:onexitautolinkemail,autolinkProtocol:onexitautolinkprotocol,blockQuote:closer(),characterEscapeValue:onexitdata,characterReferenceMarkerHexadecimal:onexitcharacterreferencemarker,characterReferenceMarkerNumeric:onexitcharacterreferencemarker,characterReferenceValue:onexitcharacterreferencevalue,codeFenced:closer(onexitcodefenced),codeFencedFence:onexitcodefencedfence,codeFencedFenceInfo:onexitcodefencedfenceinfo,codeFencedFenceMeta:onexitcodefencedfencemeta,codeFlowValue:onexitdata,codeIndented:closer(onexitcodeindented),codeText:closer(onexitcodetext),codeTextData:onexitdata,data:onexitdata,definition:closer(),definitionDestinationString:onexitdefinitiondestinationstring,definitionLabelString:onexitdefinitionlabelstring,definitionTitleString:onexitdefinitiontitlestring,emphasis:closer(),hardBreakEscape:closer(onexithardbreak),hardBreakTrailing:closer(onexithardbreak),htmlFlow:closer(onexithtmlflow),htmlFlowData:onexitdata,htmlText:closer(onexithtmltext),htmlTextData:onexitdata,image:closer(onexitimage),label:onexitlabel,labelText:onexitlabeltext,lineEnding:onexitlineending,link:closer(onexitlink),listItem:closer(),listOrdered:closer(),listUnordered:closer(),paragraph:closer(),referenceString:onexitreferencestring,resourceDestinationString:onexitresourcedestinationstring,resourceTitleString:onexitresourcetitlestring,resource:onexitresource,setextHeading:closer(onexitsetextheading),setextHeadingLineSequence:onexitsetextheadinglinesequence,setextHeadingText:onexitsetextheadingtext,strong:closer(),thematicBreak:closer()}},options.mdastExtensions||[]);/** @type {CompileData} */var data={};return compile;/**
         * @param {Array<Event>} events
         * @returns {Root}
         */function compile(events){/** @type {Root} */var tree={type:'root',children:[]};/** @type {CompileContext['stack']} */var stack=[tree];/** @type {CompileContext['tokenStack']} */var tokenStack=[];/** @type {Array<number>} */var listStack=[];/** @type {Omit<CompileContext, 'sliceSerialize'>} */var context={stack:stack,tokenStack:tokenStack,config:config,enter:enter,exit:exit,buffer:buffer,resume:resume,setData:setData,getData:getData};var index=-1;while(++index<events.length){// We preprocess lists to add `listItem` tokens, and to infer whether
// items the list itself are spread out.
if(events[index][1].type==='listOrdered'||events[index][1].type==='listUnordered'){if(events[index][0]==='enter'){listStack.push(index);}else{var tail=listStack.pop();index=prepareList(events,tail,index);}}}index=-1;while(++index<events.length){var handler=config[events[index][0]];if(own$e.call(handler,events[index][1].type)){handler[events[index][1].type].call(Object.assign({sliceSerialize:events[index][2].sliceSerialize},context),events[index][1]);}}if(tokenStack.length>0){var _tail=tokenStack[tokenStack.length-1];var _handler=_tail[1]||defaultOnError;_handler.call(context,undefined,_tail[0]);}// Figure out `root` position.
tree.position={start:point(events.length>0?events[0][1].start:{line:1,column:1,offset:0}),end:point(events.length>0?events[events.length-2][1].end:{line:1,column:1,offset:0})};index=-1;while(++index<config.transforms.length){tree=config.transforms[index](tree)||tree;}return tree;}/**
         * @param {Array<Event>} events
         * @param {number} start
         * @param {number} length
         * @returns {number}
         */function prepareList(events,start,length){var index=start-1;var containerBalance=-1;var listSpread=false;/** @type {Token|undefined} */var listItem;/** @type {number|undefined} */var lineIndex;/** @type {number|undefined} */var firstBlankLineIndex;/** @type {boolean|undefined} */var atMarker;while(++index<=length){var event=events[index];if(event[1].type==='listUnordered'||event[1].type==='listOrdered'||event[1].type==='blockQuote'){if(event[0]==='enter'){containerBalance++;}else{containerBalance--;}atMarker=undefined;}else if(event[1].type==='lineEndingBlank'){if(event[0]==='enter'){if(listItem&&!atMarker&&!containerBalance&&!firstBlankLineIndex){firstBlankLineIndex=index;}atMarker=undefined;}}else if(event[1].type==='linePrefix'||event[1].type==='listItemValue'||event[1].type==='listItemMarker'||event[1].type==='listItemPrefix'||event[1].type==='listItemPrefixWhitespace');else{atMarker=undefined;}if(!containerBalance&&event[0]==='enter'&&event[1].type==='listItemPrefix'||containerBalance===-1&&event[0]==='exit'&&(event[1].type==='listUnordered'||event[1].type==='listOrdered')){if(listItem){var tailIndex=index;lineIndex=undefined;while(tailIndex--){var tailEvent=events[tailIndex];if(tailEvent[1].type==='lineEnding'||tailEvent[1].type==='lineEndingBlank'){if(tailEvent[0]==='exit')continue;if(lineIndex){events[lineIndex][1].type='lineEndingBlank';listSpread=true;}tailEvent[1].type='lineEnding';lineIndex=tailIndex;}else if(tailEvent[1].type==='linePrefix'||tailEvent[1].type==='blockQuotePrefix'||tailEvent[1].type==='blockQuotePrefixWhitespace'||tailEvent[1].type==='blockQuoteMarker'||tailEvent[1].type==='listItemIndent');else{break;}}if(firstBlankLineIndex&&(!lineIndex||firstBlankLineIndex<lineIndex)){// @ts-expect-error Patched.
listItem._spread=true;}// Fix position.
listItem.end=Object.assign({},lineIndex?events[lineIndex][1].start:event[1].end);events.splice(lineIndex||index,0,['exit',listItem,event[2]]);index++;length++;}// Create a new list item.
if(event[1].type==='listItemPrefix'){listItem={type:'listItem',// @ts-expect-error Patched
_spread:false,start:Object.assign({},event[1].start)};// @ts-expect-error: `listItem` is most definitely defined, TS...
events.splice(index,0,['enter',listItem,event[2]]);index++;length++;firstBlankLineIndex=undefined;atMarker=true;}}}// @ts-expect-error Patched.
events[start][1]._spread=listSpread;return length;}/**
         * @type {CompileContext['setData']}
         * @param [value]
         */function setData(key,value){data[key]=value;}/**
         * @type {CompileContext['getData']}
         * @template {string} K
         * @param {K} key
         * @returns {CompileData[K]}
         */function getData(key){return data[key];}/**
         * @param {Point} d
         * @returns {Point}
         */function point(d){return{line:d.line,column:d.column,offset:d.offset};}/**
         * @param {(token: Token) => Node} create
         * @param {Handle} [and]
         * @returns {Handle}
         */function opener(create,and){return open;/**
           * @this {CompileContext}
           * @param {Token} token
           * @returns {void}
           */function open(token){enter.call(this,create(token),token);if(and)and.call(this,token);}}/** @type {CompileContext['buffer']} */function buffer(){this.stack.push({type:'fragment',children:[]});}/**
         * @type {CompileContext['enter']}
         * @template {Node} N
         * @this {CompileContext}
         * @param {N} node
         * @param {Token} token
         * @param {OnEnterError} [errorHandler]
         * @returns {N}
         */function enter(node,token,errorHandler){var parent=this.stack[this.stack.length-1];// @ts-expect-error: Assume `Node` can exist as a child of `parent`.
parent.children.push(node);this.stack.push(node);this.tokenStack.push([token,errorHandler]);// @ts-expect-error: `end` will be patched later.
node.position={start:point(token.start)};return node;}/**
         * @param {Handle} [and]
         * @returns {Handle}
         */function closer(and){return close;/**
           * @this {CompileContext}
           * @param {Token} token
           * @returns {void}
           */function close(token){if(and)and.call(this,token);exit.call(this,token);}}/**
         * @type {CompileContext['exit']}
         * @this {CompileContext}
         * @param {Token} token
         * @param {OnExitError} [onExitError]
         * @returns {Node}
         */function exit(token,onExitError){var node=this.stack.pop();var open=this.tokenStack.pop();if(!open){throw new Error('Cannot close `'+token.type+'` ('+stringifyPosition({start:token.start,end:token.end})+'): it’s not open');}else if(open[0].type!==token.type){if(onExitError){onExitError.call(this,token,open[0]);}else{var handler=open[1]||defaultOnError;handler.call(this,token,open[0]);}}node.position.end=point(token.end);return node;}/**
         * @this {CompileContext}
         * @returns {string}
         */function resume(){return toString(this.stack.pop());}//
// Handlers.
//
/** @type {Handle} */function onenterlistordered(){setData('expectingFirstListItemValue',true);}/** @type {Handle} */function onenterlistitemvalue(token){if(getData('expectingFirstListItemValue')){var ancestor=/** @type {List} */this.stack[this.stack.length-2];ancestor.start=Number.parseInt(this.sliceSerialize(token),10);setData('expectingFirstListItemValue');}}/** @type {Handle} */function onexitcodefencedfenceinfo(){var data=this.resume();var node=/** @type {Code} */this.stack[this.stack.length-1];node.lang=data;}/** @type {Handle} */function onexitcodefencedfencemeta(){var data=this.resume();var node=/** @type {Code} */this.stack[this.stack.length-1];node.meta=data;}/** @type {Handle} */function onexitcodefencedfence(){// Exit if this is the closing fence.
if(getData('flowCodeInside'))return;this.buffer();setData('flowCodeInside',true);}/** @type {Handle} */function onexitcodefenced(){var data=this.resume();var node=/** @type {Code} */this.stack[this.stack.length-1];node.value=data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,'');setData('flowCodeInside');}/** @type {Handle} */function onexitcodeindented(){var data=this.resume();var node=/** @type {Code} */this.stack[this.stack.length-1];node.value=data.replace(/(\r?\n|\r)$/g,'');}/** @type {Handle} */function onexitdefinitionlabelstring(token){// Discard label, use the source content instead.
var label=this.resume();var node=/** @type {Definition} */this.stack[this.stack.length-1];node.label=label;node.identifier=normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();}/** @type {Handle} */function onexitdefinitiontitlestring(){var data=this.resume();var node=/** @type {Definition} */this.stack[this.stack.length-1];node.title=data;}/** @type {Handle} */function onexitdefinitiondestinationstring(){var data=this.resume();var node=/** @type {Definition} */this.stack[this.stack.length-1];node.url=data;}/** @type {Handle} */function onexitatxheadingsequence(token){var node=/** @type {Heading} */this.stack[this.stack.length-1];if(!node.depth){var depth=this.sliceSerialize(token).length;node.depth=depth;}}/** @type {Handle} */function onexitsetextheadingtext(){setData('setextHeadingSlurpLineEnding',true);}/** @type {Handle} */function onexitsetextheadinglinesequence(token){var node=/** @type {Heading} */this.stack[this.stack.length-1];node.depth=this.sliceSerialize(token).charCodeAt(0)===61?1:2;}/** @type {Handle} */function onexitsetextheading(){setData('setextHeadingSlurpLineEnding');}/** @type {Handle} */function onenterdata(token){var parent=/** @type {Parent} */this.stack[this.stack.length-1];/** @type {Node} */var tail=parent.children[parent.children.length-1];if(!tail||tail.type!=='text'){// Add a new text node.
tail=text();// @ts-expect-error: we’ll add `end` later.
tail.position={start:point(token.start)};// @ts-expect-error: Assume `parent` accepts `text`.
parent.children.push(tail);}this.stack.push(tail);}/** @type {Handle} */function onexitdata(token){var tail=this.stack.pop();tail.value+=this.sliceSerialize(token);tail.position.end=point(token.end);}/** @type {Handle} */function onexitlineending(token){var context=this.stack[this.stack.length-1];// If we’re at a hard break, include the line ending in there.
if(getData('atHardBreak')){var tail=context.children[context.children.length-1];tail.position.end=point(token.end);setData('atHardBreak');return;}if(!getData('setextHeadingSlurpLineEnding')&&config.canContainEols.includes(context.type)){onenterdata.call(this,token);onexitdata.call(this,token);}}/** @type {Handle} */function onexithardbreak(){setData('atHardBreak',true);}/** @type {Handle} */function onexithtmlflow(){var data=this.resume();var node=/** @type {HTML} */this.stack[this.stack.length-1];node.value=data;}/** @type {Handle} */function onexithtmltext(){var data=this.resume();var node=/** @type {HTML} */this.stack[this.stack.length-1];node.value=data;}/** @type {Handle} */function onexitcodetext(){var data=this.resume();var node=/** @type {InlineCode} */this.stack[this.stack.length-1];node.value=data;}/** @type {Handle} */function onexitlink(){var context=/** @type {Link & {identifier: string, label: string}} */this.stack[this.stack.length-1];// To do: clean.
if(getData('inReference')){context.type+='Reference';// @ts-expect-error: mutate.
context.referenceType=getData('referenceType')||'shortcut';// @ts-expect-error: mutate.
delete context.url;delete context.title;}else{// @ts-expect-error: mutate.
delete context.identifier;// @ts-expect-error: mutate.
delete context.label;}setData('referenceType');}/** @type {Handle} */function onexitimage(){var context=/** @type {Image & {identifier: string, label: string}} */this.stack[this.stack.length-1];// To do: clean.
if(getData('inReference')){context.type+='Reference';// @ts-expect-error: mutate.
context.referenceType=getData('referenceType')||'shortcut';// @ts-expect-error: mutate.
delete context.url;delete context.title;}else{// @ts-expect-error: mutate.
delete context.identifier;// @ts-expect-error: mutate.
delete context.label;}setData('referenceType');}/** @type {Handle} */function onexitlabeltext(token){var ancestor=/** @type {(Link|Image) & {identifier: string, label: string}} */this.stack[this.stack.length-2];var string=this.sliceSerialize(token);ancestor.label=decodeString(string);ancestor.identifier=normalizeIdentifier(string).toLowerCase();}/** @type {Handle} */function onexitlabel(){var fragment=/** @type {Fragment} */this.stack[this.stack.length-1];var value=this.resume();var node=/** @type {(Link|Image) & {identifier: string, label: string}} */this.stack[this.stack.length-1];// Assume a reference.
setData('inReference',true);if(node.type==='link'){// @ts-expect-error: Assume static phrasing content.
node.children=fragment.children;}else{node.alt=value;}}/** @type {Handle} */function onexitresourcedestinationstring(){var data=this.resume();var node=/** @type {Link|Image} */this.stack[this.stack.length-1];node.url=data;}/** @type {Handle} */function onexitresourcetitlestring(){var data=this.resume();var node=/** @type {Link|Image} */this.stack[this.stack.length-1];node.title=data;}/** @type {Handle} */function onexitresource(){setData('inReference');}/** @type {Handle} */function onenterreference(){setData('referenceType','collapsed');}/** @type {Handle} */function onexitreferencestring(token){var label=this.resume();var node=/** @type {LinkReference|ImageReference} */this.stack[this.stack.length-1];node.label=label;node.identifier=normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();setData('referenceType','full');}/** @type {Handle} */function onexitcharacterreferencemarker(token){setData('characterReferenceType',token.type);}/** @type {Handle} */function onexitcharacterreferencevalue(token){var data=this.sliceSerialize(token);var type=getData('characterReferenceType');/** @type {string} */var value;if(type){value=decodeNumericCharacterReference(data,type==='characterReferenceMarkerNumeric'?10:16);setData('characterReferenceType');}else{// @ts-expect-error `decodeNamedCharacterReference` can return false for
// invalid named character references, but everything we’ve tokenized is
// valid.
value=decodeNamedCharacterReference(data);}var tail=this.stack.pop();tail.value+=value;tail.position.end=point(token.end);}/** @type {Handle} */function onexitautolinkprotocol(token){onexitdata.call(this,token);var node=/** @type {Link} */this.stack[this.stack.length-1];node.url=this.sliceSerialize(token);}/** @type {Handle} */function onexitautolinkemail(token){onexitdata.call(this,token);var node=/** @type {Link} */this.stack[this.stack.length-1];node.url='mailto:'+this.sliceSerialize(token);}//
// Creaters.
//
/** @returns {Blockquote} */function blockQuote(){return{type:'blockquote',children:[]};}/** @returns {Code} */function codeFlow(){return{type:'code',lang:null,meta:null,value:''};}/** @returns {InlineCode} */function codeText(){return{type:'inlineCode',value:''};}/** @returns {Definition} */function definition(){return{type:'definition',identifier:'',label:null,title:null,url:''};}/** @returns {Emphasis} */function emphasis(){return{type:'emphasis',children:[]};}/** @returns {Heading} */function heading(){// @ts-expect-error `depth` will be set later.
return{type:'heading',depth:undefined,children:[]};}/** @returns {Break} */function hardBreak(){return{type:'break'};}/** @returns {HTML} */function html(){return{type:'html',value:''};}/** @returns {Image} */function image(){return{type:'image',title:null,url:'',alt:null};}/** @returns {Link} */function link(){return{type:'link',title:null,url:'',children:[]};}/**
         * @param {Token} token
         * @returns {List}
         */function list(token){return{type:'list',ordered:token.type==='listOrdered',start:null,// @ts-expect-error Patched.
spread:token._spread,children:[]};}/**
         * @param {Token} token
         * @returns {ListItem}
         */function listItem(token){return{type:'listItem',// @ts-expect-error Patched.
spread:token._spread,checked:null,children:[]};}/** @returns {Paragraph} */function paragraph(){return{type:'paragraph',children:[]};}/** @returns {Strong} */function strong(){return{type:'strong',children:[]};}/** @returns {Text} */function text(){return{type:'text',value:''};}/** @returns {ThematicBreak} */function thematicBreak(){return{type:'thematicBreak'};}}/**
       * @param {Extension} combined
       * @param {Array<Extension|Array<Extension>>} extensions
       * @returns {Extension}
       */function configure(combined,extensions){var index=-1;while(++index<extensions.length){var value=extensions[index];if(Array.isArray(value)){configure(combined,value);}else{extension(combined,value);}}return combined;}/**
       * @param {Extension} combined
       * @param {Extension} extension
       * @returns {void}
       */function extension(combined,extension){/** @type {string} */var key;for(key in extension){if(own$e.call(extension,key)){var _list=key==='canContainEols'||key==='transforms';var maybe=own$e.call(combined,key)?combined[key]:undefined;/* c8 ignore next */var left=maybe||(combined[key]=_list?[]:{});var right=extension[key];if(right){if(_list){// @ts-expect-error: `left` is an array.
combined[key]=[].concat(_toConsumableArray(left),_toConsumableArray(right));}else{Object.assign(left,right);}}}}}/** @type {OnEnterError} */function defaultOnError(left,right){if(left){throw new Error('Cannot close `'+left.type+'` ('+stringifyPosition({start:left.start,end:left.end})+'): a different token (`'+right.type+'`, '+stringifyPosition({start:right.start,end:right.end})+') is open');}else{throw new Error('Cannot close document, a token (`'+right.type+'`, '+stringifyPosition({start:right.start,end:right.end})+') is still open');}}/**
       * @typedef {import('mdast').Root} Root
       * @typedef {import('mdast-util-from-markdown').Options} Options
       */ /** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */function remarkParse(options){var _this2=this;/** @type {import('unified').ParserFunction<Root>} */var parser=function parser(doc){// Assume options.
var settings=/** @type {Options} */_this2.data('settings');return fromMarkdown(doc,Object.assign({},settings,options,{// Note: these options are not in the readme.
// The goal is for them to be set by plugins on `data` instead of being
// passed by users.
extensions:_this2.data('micromarkExtensions')||[],mdastExtensions:_this2.data('fromMarkdownExtensions')||[]}));};Object.assign(this,{Parser:parser});}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       * @typedef {import('unist').Literal} Literal
       * @typedef {Object.<string, unknown>} Props
       * @typedef {Array.<Node>|string} ChildrenOrValue
       *
       * @typedef {(<T extends string, P extends Record<string, unknown>, C extends Node[]>(type: T, props: P, children: C) => {type: T, children: C} & P)} BuildParentWithProps
       * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P, value: string) => {type: T, value: string} & P)} BuildLiteralWithProps
       * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P) => {type: T} & P)} BuildVoidWithProps
       * @typedef {(<T extends string, C extends Node[]>(type: T, children: C) => {type: T, children: C})} BuildParent
       * @typedef {(<T extends string>(type: T, value: string) => {type: T, value: string})} BuildLiteral
       * @typedef {(<T extends string>(type: T) => {type: T})} BuildVoid
       */var u$1=/**
       * @type {BuildVoid & BuildVoidWithProps & BuildLiteral & BuildLiteralWithProps & BuildParent & BuildParentWithProps}
       */ /**
         * @param {string} type Type of node
         * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
         * @param {ChildrenOrValue} [value] `children` or `value` of node
         * @returns {Node}
         */function u$1(type,props,value){/** @type {Node} */var node={type:String(type)};if((value===undefined||value===null)&&(typeof props==='string'||Array.isArray(props))){value=props;}else{Object.assign(node,props);}if(Array.isArray(value)){node.children=value;}else if(value!==undefined&&value!==null){node.value=String(value);}return node;};/**
       * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
       * @typedef {import('./index.js').H} H
       * @typedef {import('./index.js').Handler} Handler
       * @typedef {import('./index.js').Content} Content
       */var own$d={}.hasOwnProperty;/**
       * Transform an unknown node.
       * @type {Handler}
       * @param {MdastNode} node
       */function unknown$1(h,node){var data=node.data||{};if('value'in node&&!(own$d.call(data,'hName')||own$d.call(data,'hProperties')||own$d.call(data,'hChildren'))){return h.augment(node,u$1('text',node.value));}return h(node,'div',all$1(h,node));}/**
       * @type {Handler}
       * @param {MdastNode} node
       */function one$1(h,node,parent){var type=node&&node.type;/** @type {Handler} */var fn;// Fail on non-nodes.
if(!type){throw new Error('Expected node, got `'+node+'`');}if(own$d.call(h.handlers,type)){fn=h.handlers[type];}else if(h.passThrough&&h.passThrough.includes(type)){fn=returnNode;}else{fn=h.unknownHandler;}return(typeof fn==='function'?fn:unknown$1)(h,node,parent);}/**
       * @type {Handler}
       * @param {MdastNode} node
       */function returnNode(h,node){// @ts-expect-error: Pass through custom node.
return'children'in node?_objectSpread(_objectSpread({},node),{},{children:all$1(h,node)}):node;}/**
       * @param {H} h
       * @param {MdastNode} parent
       */function all$1(h,parent){/** @type {Array.<Content>} */var values=[];if('children'in parent){var _nodes=parent.children;var _index5=-1;while(++_index5<_nodes.length){var result=one$1(h,_nodes[_index5],parent);if(result){if(_index5&&_nodes[_index5-1].type==='break'){if(!Array.isArray(result)&&result.type==='text'){result.value=result.value.replace(/^\s+/,'');}if(!Array.isArray(result)&&result.type==='element'){var head=result.children[0];if(head&&head.type==='text'){head.value=head.value.replace(/^\s+/,'');}}}if(Array.isArray(result)){values.push.apply(values,_toConsumableArray(result));}else{values.push(result);}}}}return values;}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       *
       * @typedef {string} Type
       * @typedef {Object<string, unknown>} Props
       *
       * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
       */var convert=/**
         * @type {(
         *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
         *   ((test?: Test) => AssertAnything)
         * )}
         */ /**
           * Generate an assertion from a check.
           * @param {Test} [test]
           * When nullish, checks if `node` is a `Node`.
           * When `string`, works like passing `function (node) {return node.type === test}`.
           * When `function` checks if function passed the node is true.
           * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
           * When `array`, checks any one of the subtests pass.
           * @returns {AssertAnything}
           */function convert(test){if(test===undefined||test===null){return ok;}if(typeof test==='string'){return typeFactory(test);}if(_typeof(test)==='object'){return Array.isArray(test)?anyFactory$1(test):propsFactory(test);}if(typeof test==='function'){return castFactory$1(test);}throw new Error('Expected function, string, or object as test');};/**
       * @param {Array.<Type|Props|TestFunctionAnything>} tests
       * @returns {AssertAnything}
       */function anyFactory$1(tests){/** @type {Array.<AssertAnything>} */var checks=[];var index=-1;while(++index<tests.length){checks[index]=convert(tests[index]);}return castFactory$1(any);/**
         * @this {unknown}
         * @param {unknown[]} parameters
         * @returns {boolean}
         */function any(){var index=-1;for(var _len7=arguments.length,parameters=new Array(_len7),_key7=0;_key7<_len7;_key7++){parameters[_key7]=arguments[_key7];}while(++index<checks.length){var _checks$index;if((_checks$index=checks[index]).call.apply(_checks$index,[this].concat(parameters)))return true;}return false;}}/**
       * Utility to assert each property in `test` is represented in `node`, and each
       * values are strictly equal.
       *
       * @param {Props} check
       * @returns {AssertAnything}
       */function propsFactory(check){return castFactory$1(all);/**
         * @param {Node} node
         * @returns {boolean}
         */function all(node){/** @type {string} */var key;for(key in check){// @ts-expect-error: hush, it sure works as an index.
if(node[key]!==check[key])return false;}return true;}}/**
       * Utility to convert a string into a function which checks a given node’s type
       * for said string.
       *
       * @param {Type} check
       * @returns {AssertAnything}
       */function typeFactory(check){return castFactory$1(type);/**
         * @param {Node} node
         */function type(node){return node&&node.type===check;}}/**
       * Utility to convert a string into a function which checks a given node’s type
       * for said string.
       * @param {TestFunctionAnything} check
       * @returns {AssertAnything}
       */function castFactory$1(check){return assertion;/**
         * @this {unknown}
         * @param {Array.<unknown>} parameters
         * @returns {boolean}
         */function assertion(){for(var _len8=arguments.length,parameters=new Array(_len8),_key8=0;_key8<_len8;_key8++){parameters[_key8]=arguments[_key8];}// @ts-expect-error: spreading is fine.
return Boolean(check.call.apply(check,[this].concat(parameters)));}}// Utility to return true.
function ok(){return true;}/**
       * @param {string} d
       * @returns {string}
       */function color$1(d){return d;}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       * @typedef {import('unist-util-is').Test} Test
       * @typedef {import('./complex-types').Action} Action
       * @typedef {import('./complex-types').Index} Index
       * @typedef {import('./complex-types').ActionTuple} ActionTuple
       * @typedef {import('./complex-types').VisitorResult} VisitorResult
       * @typedef {import('./complex-types').Visitor} Visitor
       */ /**
       * Continue traversing as normal
       */var CONTINUE$1=true;/**
       * Do not traverse this node’s children
       */var SKIP$1='skip';/**
       * Stop traversing immediately
       */var EXIT$1=false;/**
       * Visit children of tree which pass a test
       *
       * @param tree Abstract syntax tree to walk
       * @param test Test node, optional
       * @param visitor Function to run for each node
       * @param reverse Visit the tree in reverse order, defaults to false
       */var visitParents$1=/**
         * @type {(
         *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
         *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types').BuildVisitor<Tree>, reverse?: boolean) => void)
         * )}
         */ /**
           * @param {Node} tree
           * @param {Test} test
           * @param {import('./complex-types').Visitor<Node>} visitor
           * @param {boolean} [reverse]
           */function visitParents$1(tree,test,visitor,reverse){if(typeof test==='function'&&typeof visitor!=='function'){reverse=visitor;// @ts-expect-error no visitor given, so `visitor` is test.
visitor=test;test=null;}var is=convert(test);var step=reverse?-1:1;factory(tree,null,[])();/**
             * @param {Node} node
             * @param {number?} index
             * @param {Array.<Parent>} parents
             */function factory(node,index,parents){/** @type {Object.<string, unknown>} */ // @ts-expect-error: hush
var value=_typeof(node)==='object'&&node!==null?node:{};/** @type {string|undefined} */var name;if(typeof value.type==='string'){name=typeof value.tagName==='string'?value.tagName:typeof value.name==='string'?value.name:undefined;Object.defineProperty(visit,'name',{value:'node ('+color$1(value.type+(name?'<'+name+'>':''))+')'});}return visit;function visit(){/** @type {ActionTuple} */var result=[];/** @type {ActionTuple} */var subresult;/** @type {number} */var offset;/** @type {Array.<Parent>} */var grandparents;if(!test||is(node,index,parents[parents.length-1]||null)){result=toResult$1(visitor(node,parents));if(result[0]===EXIT$1){return result;}}// @ts-expect-error looks like a parent.
if(node.children&&result[0]!==SKIP$1){// @ts-expect-error looks like a parent.
offset=(reverse?node.children.length:-1)+step;// @ts-expect-error looks like a parent.
grandparents=parents.concat(node);// @ts-expect-error looks like a parent.
while(offset>-1&&offset<node.children.length){// @ts-expect-error looks like a parent.
subresult=factory(node.children[offset],offset,grandparents)();if(subresult[0]===EXIT$1){return subresult;}offset=typeof subresult[1]==='number'?subresult[1]:offset+step;}}return result;}}};/**
       * @param {VisitorResult} value
       * @returns {ActionTuple}
       */function toResult$1(value){if(Array.isArray(value)){return value;}if(typeof value==='number'){return[CONTINUE$1,value];}return[value];}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       * @typedef {import('unist-util-is').Test} Test
       * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
       * @typedef {import('./complex-types').Visitor} Visitor
       */ /**
       * Visit children of tree which pass a test
       *
       * @param tree Abstract syntax tree to walk
       * @param test Test, optional
       * @param visitor Function to run for each node
       * @param reverse Fisit the tree in reverse, defaults to false
       */var visit$1=/**
         * @type {(
         *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
         *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types').BuildVisitor<Tree>, reverse?: boolean) => void)
         * )}
         */ /**
           * @param {Node} tree
           * @param {Test} test
           * @param {import('./complex-types').Visitor} visitor
           * @param {boolean} [reverse]
           */function visit$1(tree,test,visitor,reverse){if(typeof test==='function'&&typeof visitor!=='function'){reverse=visitor;visitor=test;test=null;}visitParents$1(tree,test,overload,reverse);/**
             * @param {Node} node
             * @param {Array.<Parent>} parents
             */function overload(node,parents){var parent=parents[parents.length-1];return visitor(node,parent?parent.children.indexOf(node):null,parent);}};/**
       * @typedef {import('unist').Position} Position
       * @typedef {import('unist').Node} Node
       * @typedef {Record<string, unknown> & {type: string, position?: PositionLike|undefined}} NodeLike
       * @typedef {import('unist').Point} Point
       *
       * @typedef {Partial<Point>} PointLike
       *
       * @typedef PositionLike
       * @property {PointLike} [start]
       * @property {PointLike} [end]
       */var pointStart=point$1('start');var pointEnd=point$1('end');/**
       * Get the positional info of `node`.
       *
       * @param {'start'|'end'} type
       */function point$1(type){return point;/**
         * Get the positional info of `node`.
         *
         * @param {NodeLike|Node} [node]
         * @returns {Point}
         */function point(node){var point=node&&node.position&&node.position[type]||{};return{line:point.line||null,column:point.column||null,offset:point.offset>-1?point.offset:null};}}/**
       * @typedef {Object} PointLike
       * @property {number} [line]
       * @property {number} [column]
       * @property {number} [offset]
       *
       * @typedef {Object} PositionLike
       * @property {PointLike} [start]
       * @property {PointLike} [end]
       *
       * @typedef {Object} NodeLike
       * @property {PositionLike} [position]
       */ /**
       * Check if `node` is *generated*.
       *
       * @param {NodeLike} [node]
       * @returns {boolean}
       */function generated(node){return!node||!node.position||!node.position.start||!node.position.start.line||!node.position.start.column||!node.position.end||!node.position.end.line||!node.position.end.column;}/**
       * @param {string} d
       * @returns {string}
       */function color(d){return d;}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       * @typedef {import('unist-util-is').Test} Test
       */ /**
       * Continue traversing as normal
       */var CONTINUE=true;/**
       * Do not traverse this node’s children
       */var SKIP='skip';/**
       * Stop traversing immediately
       */var EXIT=false;var visitParents=/**
         * @type {(
         *   (<T extends Node>(tree: Node, test: T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>>, visitor: Visitor<T>, reverse?: boolean) => void) &
         *   ((tree: Node, test: Test, visitor: Visitor<Node>, reverse?: boolean) => void) &
         *   ((tree: Node, visitor: Visitor<Node>, reverse?: boolean) => void)
         * )}
         */ /**
           * Visit children of tree which pass a test
           *
           * @param {Node} tree Abstract syntax tree to walk
           * @param {Test} test test Test node
           * @param {Visitor<Node>} visitor Function to run for each node
           * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
           */function visitParents(tree,test,visitor,reverse){if(typeof test==='function'&&typeof visitor!=='function'){reverse=visitor;// @ts-ignore no visitor given, so `visitor` is test.
visitor=test;test=null;}var is=convert(test);var step=reverse?-1:1;factory(tree,null,[])();/**
             * @param {Node} node
             * @param {number?} index
             * @param {Array.<Parent>} parents
             */function factory(node,index,parents){/** @type {Object.<string, unknown>} */var value=_typeof(node)==='object'&&node!==null?node:{};/** @type {string} */var name;if(typeof value.type==='string'){name=typeof value.tagName==='string'?value.tagName:typeof value.name==='string'?value.name:undefined;Object.defineProperty(visit,'name',{value:'node ('+color(value.type+(name?'<'+name+'>':''))+')'});}return visit;function visit(){/** @type {ActionTuple} */var result=[];/** @type {ActionTuple} */var subresult;/** @type {number} */var offset;/** @type {Array.<Parent>} */var grandparents;if(!test||is(node,index,parents[parents.length-1]||null)){result=toResult(visitor(node,parents));if(result[0]===EXIT){return result;}}if(node.children&&result[0]!==SKIP){// @ts-ignore looks like a parent.
offset=(reverse?node.children.length:-1)+step;// @ts-ignore looks like a parent.
grandparents=parents.concat(node);// @ts-ignore looks like a parent.
while(offset>-1&&offset<node.children.length){subresult=factory(node.children[offset],offset,grandparents)();if(subresult[0]===EXIT){return subresult;}offset=typeof subresult[1]==='number'?subresult[1]:offset+step;}}return result;}}};/**
       * @param {VisitorResult} value
       * @returns {ActionTuple}
       */function toResult(value){if(Array.isArray(value)){return value;}if(typeof value==='number'){return[CONTINUE,value];}return[value];}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       * @typedef {import('unist-util-is').Test} Test
       * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
       */var visit=/**
         * @type {(
         *   (<T extends Node>(tree: Node, test: T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>>, visitor: Visitor<T>, reverse?: boolean) => void) &
         *   ((tree: Node, test: Test, visitor: Visitor<Node>, reverse?: boolean) => void) &
         *   ((tree: Node, visitor: Visitor<Node>, reverse?: boolean) => void)
         * )}
         */ /**
           * Visit children of tree which pass a test
           *
           * @param {Node} tree Abstract syntax tree to walk
           * @param {Test} test test Test node
           * @param {Visitor<Node>} visitor Function to run for each node
           * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
           */function visit(tree,test,visitor,reverse){if(typeof test==='function'&&typeof visitor!=='function'){reverse=visitor;visitor=test;test=null;}visitParents(tree,test,overload,reverse);/**
             * @param {Node} node
             * @param {Array.<Parent>} parents
             */function overload(node,parents){var parent=parents[parents.length-1];return visitor(node,parent?parent.children.indexOf(node):null,parent);}};/**
       * @typedef {import('mdast').Root|import('mdast').Content} Node
       * @typedef {import('mdast').Definition} Definition
       * @typedef {import('unist-util-visit').Visitor<Definition>} DefinitionVisitor
       */var own$c={}.hasOwnProperty;/**
       *
       * @param {Node} node
       */function definitions(node){/** @type {Object.<string, Definition>} */var cache=Object.create(null);if(!node||!node.type){throw new Error('mdast-util-definitions expected node');}visit(node,'definition',ondefinition);return getDefinition;/** @type {DefinitionVisitor} */function ondefinition(definition){var id=clean(definition.identifier);if(id&&!own$c.call(cache,id)){cache[id]=definition;}}/**
         * Get a node from the bound definition-cache.
         *
         * @param {string} identifier
         * @returns {Definition|null}
         */function getDefinition(identifier){var id=clean(identifier);return id&&own$c.call(cache,id)?cache[id]:null;}}/**
       * @param {string} [value]
       * @returns {string}
       */function clean(value){return String(value||'').toUpperCase();}/**
       * @typedef {import('mdast').ThematicBreak} ThematicBreak
       * @typedef {import('hast').Element} Element
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {ThematicBreak} [node]
       * @returns {Element}
       */function thematicBreak(h,node){return h(node,'hr');}/**
       * @typedef {import('./index.js').Content} Content
       */ /**
       * Wrap `nodes` with line feeds between each entry.
       * Optionally adds line feeds at the start and end.
       *
       * @param {Array.<Content>} nodes
       * @param {boolean} [loose=false]
       * @returns {Array.<Content>}
       */function wrap(nodes,loose){/** @type {Array.<Content>} */var result=[];var index=-1;if(loose){result.push(u$1('text','\n'));}while(++index<nodes.length){if(index)result.push(u$1('text','\n'));result.push(nodes[index]);}if(loose&&nodes.length>0){result.push(u$1('text','\n'));}return result;}/**
       * @typedef {import('mdast').List} List
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {List} node
       * @returns {Element}
       */function list(h,node){/** @type {Properties} */var props={};var name=node.ordered?'ol':'ul';var items=all$1(h,node);var index=-1;if(typeof node.start==='number'&&node.start!==1){props.start=node.start;}// Like GitHub, add a class for custom styling.
while(++index<items.length){var item=items[index];if(item.type==='element'&&item.tagName==='li'&&item.properties&&Array.isArray(item.properties.className)&&item.properties.className.includes('task-list-item')){props.className=['contains-task-list'];break;}}return h(node,name,props,wrap(items,true));}/**
       * @typedef {import('mdast').BlockContent} BlockContent
       * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
       * @typedef {import('mdast').Link} Link
       * @typedef {import('mdast').ListItem} ListItem
       * @typedef {import('mdast').Paragraph} Paragraph
       * @typedef {import('./index.js').H} H
       */ /**
       * @param {H} h
       */function footer(h){var footnoteById=h.footnoteById;var footnoteOrder=h.footnoteOrder;var index=-1;/** @type {Array.<ListItem>} */var listItems=[];while(++index<footnoteOrder.length){var def=footnoteById[footnoteOrder[index].toUpperCase()];if(!def){continue;}var marker=String(index+1);var _content=_toConsumableArray(def.children);/** @type {Link} */var backReference={type:'link',url:'#fnref'+marker,data:{hProperties:{className:['footnote-back'],role:'doc-backlink'}},children:[{type:'text',value:'↩'}]};var tail=_content[_content.length-1];if(tail&&tail.type==='paragraph'){tail.children.push(backReference);}else{// @ts-expect-error Indeed, link directly added in block content.
// Which we do because that way at least the handlers will be called
// for the other HTML we’re generating (as markdown).
_content.push(backReference);}listItems.push({type:'listItem',data:{hProperties:{id:'fn'+marker,role:'doc-endnote'}},children:_content,position:def.position});}if(listItems.length===0){return null;}return h(null,'section',{className:['footnotes'],role:'doc-endnotes'},wrap([thematicBreak(h),list(h,{type:'list',ordered:true,children:listItems})],true));}/**
       * @typedef {import('mdast').Blockquote} Blockquote
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Blockquote} node
       */function blockquote(h,node){return h(node,'blockquote',wrap(all$1(h,node),true));}/**
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Text} Text
       * @typedef {import('mdast').Break} Break
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Break} node
       * @returns {Array<Element|Text>}
       */function hardBreak(h,node){return[h(node,'br'),u$1('text','\n')];}/**
       * @typedef {import('mdast').Code} Code
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Code} node
       */function code$1(h,node){var value=node.value?node.value+'\n':'';// To do: next major, use `node.lang` w/o regex, the splitting’s been going
// on for years in remark now.
var lang=node.lang&&node.lang.match(/^[^ \t]+(?=[ \t]|$)/);/** @type {Properties} */var props={};if(lang){props.className=['language-'+lang];}var code=h(node,'code',props,[u$1('text',value)]);if(node.meta){code.data={meta:node.meta};}return h(node.position,'pre',[code]);}/**
       * @typedef {import('mdast').Delete} Delete
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Delete} node
       */function strikethrough(h,node){return h(node,'del',all$1(h,node));}/**
       * @typedef {import('mdast').Emphasis} Emphasis
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Emphasis} node
       */function emphasis(h,node){return h(node,'em',all$1(h,node));}/**
       * @typedef {import('mdast').FootnoteReference} FootnoteReference
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {FootnoteReference} node
       */function footnoteReference(h,node){var footnoteOrder=h.footnoteOrder;var identifier=String(node.identifier);var index=footnoteOrder.indexOf(identifier);var marker=String(index===-1?footnoteOrder.push(identifier):index+1);return h(node,'a',{href:'#fn'+marker,className:['footnote-ref'],id:'fnref'+marker,role:'doc-noteref'},[h(node.position,'sup',[u$1('text',marker)])]);}/**
       * @typedef {import('mdast').Footnote} Footnote
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Footnote} node
       */function footnote(h,node){var footnoteById=h.footnoteById;var footnoteOrder=h.footnoteOrder;var no=1;while(no in footnoteById){no++;}var identifier=String(no);// No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
// to not exist because we just generated it.
footnoteOrder.push(identifier);footnoteById[identifier]={type:'footnoteDefinition',identifier:identifier,children:[{type:'paragraph',children:node.children}],position:node.position};return footnoteReference(h,{type:'footnoteReference',identifier:identifier,position:node.position});}/**
       * @typedef {import('mdast').Heading} Heading
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Heading} node
       */function heading(h,node){return h(node,'h'+node.depth,all$1(h,node));}/**
       * @typedef {import('mdast').HTML} HTML
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * Return either a `raw` node in dangerous mode, otherwise nothing.
       *
       * @type {Handler}
       * @param {HTML} node
       */function html$3(h,node){return h.dangerous?h.augment(node,u$1('raw',node.value)):null;}var encodeCache={};// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude){var i,ch,cache=encodeCache[exclude];if(cache){return cache;}cache=encodeCache[exclude]=[];for(i=0;i<128;i++){ch=String.fromCharCode(i);if(/^[0-9a-z]$/i.test(ch)){// always allow unencoded alphanumeric characters
cache.push(ch);}else{cache.push('%'+('0'+i.toString(16).toUpperCase()).slice(-2));}}for(i=0;i<exclude.length;i++){cache[exclude.charCodeAt(i)]=exclude[i];}return cache;}// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string,exclude,keepEscaped){var i,l,code,nextCode,cache,result='';if(typeof exclude!=='string'){// encode(string, keepEscaped)
keepEscaped=exclude;exclude=encode.defaultChars;}if(typeof keepEscaped==='undefined'){keepEscaped=true;}cache=getEncodeCache(exclude);for(i=0,l=string.length;i<l;i++){code=string.charCodeAt(i);if(keepEscaped&&code===0x25/* % */&&i+2<l){if(/^[0-9a-f]{2}$/i.test(string.slice(i+1,i+3))){result+=string.slice(i,i+3);i+=2;continue;}}if(code<128){result+=cache[code];continue;}if(code>=0xD800&&code<=0xDFFF){if(code>=0xD800&&code<=0xDBFF&&i+1<l){nextCode=string.charCodeAt(i+1);if(nextCode>=0xDC00&&nextCode<=0xDFFF){result+=encodeURIComponent(string[i]+string[i+1]);i++;continue;}}result+='%EF%BF%BD';continue;}result+=encodeURIComponent(string[i]);}return result;}encode.defaultChars=";/?:@&=+$,-_.!~*'()#";encode.componentChars="-_.!~*'()";var encode_1=encode;/**
       * @typedef {import('mdast').LinkReference} LinkReference
       * @typedef {import('mdast').ImageReference} ImageReference
       * @typedef {import('./index.js').Handler} Handler
       * @typedef {import('./index.js').Content} Content
       */ /**
       * Return the content of a reference without definition as plain text.
       *
       * @type {Handler}
       * @param {ImageReference|LinkReference} node
       * @returns {Content|Array.<Content>}
       */function revert(h,node){var subtype=node.referenceType;var suffix=']';if(subtype==='collapsed'){suffix+='[]';}else if(subtype==='full'){suffix+='['+(node.label||node.identifier)+']';}if(node.type==='imageReference'){return u$1('text','!['+node.alt+suffix);}var contents=all$1(h,node);var head=contents[0];if(head&&head.type==='text'){head.value='['+head.value;}else{contents.unshift(u$1('text','['));}var tail=contents[contents.length-1];if(tail&&tail.type==='text'){tail.value+=suffix;}else{contents.push(u$1('text',suffix));}return contents;}/**
       * @typedef {import('mdast').ImageReference} ImageReference
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {ImageReference} node
       */function imageReference(h,node){var def=h.definition(node.identifier);if(!def){return revert(h,node);}/** @type {Properties} */var props={src:encode_1(def.url||''),alt:node.alt};if(def.title!==null&&def.title!==undefined){props.title=def.title;}return h(node,'img',props);}/**
       * @typedef {import('mdast').Image} Image
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Image} node
       */function image(h,node){/** @type {Properties} */var props={src:encode_1(node.url),alt:node.alt};if(node.title!==null&&node.title!==undefined){props.title=node.title;}return h(node,'img',props);}/**
       * @typedef {import('mdast').InlineCode} InlineCode
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {InlineCode} node
       */function inlineCode$1(h,node){return h(node,'code',[u$1('text',node.value.replace(/\r?\n|\r/g,' '))]);}/**
       * @typedef {import('mdast').LinkReference} LinkReference
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {LinkReference} node
       */function linkReference(h,node){var def=h.definition(node.identifier);if(!def){return revert(h,node);}/** @type {Properties} */var props={href:encode_1(def.url||'')};if(def.title!==null&&def.title!==undefined){props.title=def.title;}return h(node,'a',props,all$1(h,node));}/**
       * @typedef {import('mdast').Link} Link
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Link} node
       */function link(h,node){/** @type {Properties} */var props={href:encode_1(node.url)};if(node.title!==null&&node.title!==undefined){props.title=node.title;}return h(node,'a',props,all$1(h,node));}/**
       * @typedef {import('mdast').ListItem} ListItem
       * @typedef {import('mdast').List} List
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('hast').Element} Element
       * @typedef {import('../index.js').Handler} Handler
       * @typedef {import('../index.js').Content} Content
       */ /**
       * @type {Handler}
       * @param {ListItem} node
       * @param {List} parent
       */function listItem$1(h,node,parent){var result=all$1(h,node);var loose=parent?listLoose(parent):listItemLoose(node);/** @type {Properties} */var props={};/** @type {Array.<Content>} */var wrapped=[];if(typeof node.checked==='boolean'){/** @type {Element} */var _paragraph;if(result[0]&&result[0].type==='element'&&result[0].tagName==='p'){_paragraph=result[0];}else{_paragraph=h(null,'p',[]);result.unshift(_paragraph);}if(_paragraph.children.length>0){_paragraph.children.unshift(u$1('text',' '));}_paragraph.children.unshift(h(null,'input',{type:'checkbox',checked:node.checked,disabled:true}));// According to github-markdown-css, this class hides bullet.
// See: <https://github.com/sindresorhus/github-markdown-css>.
props.className=['task-list-item'];}var index=-1;while(++index<result.length){var child=result[index];// Add eols before nodes, except if this is a loose, first paragraph.
if(loose||index!==0||child.type!=='element'||child.tagName!=='p'){wrapped.push(u$1('text','\n'));}if(child.type==='element'&&child.tagName==='p'&&!loose){wrapped.push.apply(wrapped,_toConsumableArray(child.children));}else{wrapped.push(child);}}var tail=result[result.length-1];// Add a final eol.
if(tail&&(loose||!('tagName'in tail)||tail.tagName!=='p')){wrapped.push(u$1('text','\n'));}return h(node,'li',props,wrapped);}/**
       * @param {List} node
       * @return {Boolean}
       */function listLoose(node){var loose=node.spread;var children=node.children;var index=-1;while(!loose&&++index<children.length){loose=listItemLoose(children[index]);}return Boolean(loose);}/**
       * @param {ListItem} node
       * @return {Boolean}
       */function listItemLoose(node){var spread=node.spread;return spread===undefined||spread===null?node.children.length>1:spread;}/**
       * @typedef {import('mdast').Paragraph} Paragraph
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Paragraph} node
       */function paragraph(h,node){return h(node,'p',all$1(h,node));}/**
       * @typedef {import('mdast').Root} Root
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Root} node
       */function root$3(h,node){// @ts-expect-error `root`s are also fine.
return h.augment(node,u$1('root',wrap(all$1(h,node))));}/**
       * @typedef {import('mdast').Strong} Strong
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Strong} node
       */function strong(h,node){return h(node,'strong',all$1(h,node));}/**
       * @typedef {import('mdast').Table} Table
       * @typedef {import('mdast').TableCell} TableCell
       * @typedef {import('hast').Element} Element
       * @typedef {import('../index.js').Handler} Handler
       * @typedef {import('../index.js').Content} Content
       */ /**
       * @type {Handler}
       * @param {Table} node
       */function table(h,node){var rows=node.children;var index=-1;var align=node.align||[];/** @type {Array.<Element>} */var result=[];while(++index<rows.length){var _row=rows[index].children;var name=index===0?'th':'td';var pos=node.align?align.length:_row.length;/** @type {Array.<Content>} */var out=[];while(pos--){var _cell=_row[pos];out[pos]=h(_cell,name,{align:align[pos]},_cell?all$1(h,_cell):[]);}result[index]=h(rows[index],'tr',wrap(out,true));}return h(node,'table',wrap([h(result[0].position,'thead',wrap([result[0]],true))].concat(result[1]?h({start:pointStart(result[1]),end:pointEnd(result[result.length-1])},'tbody',wrap(result.slice(1),true)):[]),true));}/**
       * @typedef {import('mdast').Text} Text
       * @typedef {import('../index.js').Handler} Handler
       */ /**
       * @type {Handler}
       * @param {Text} node
       */function text$4(h,node){return h.augment(node,u$1('text',String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g,'$1')));}var handlers={blockquote:blockquote,break:hardBreak,code:code$1,delete:strikethrough,emphasis:emphasis,footnoteReference:footnoteReference,footnote:footnote,heading:heading,html:html$3,imageReference:imageReference,image:image,inlineCode:inlineCode$1,linkReference:linkReference,link:link,listItem:listItem$1,list:list,paragraph:paragraph,root:root$3,strong:strong,table:table,text:text$4,thematicBreak:thematicBreak,toml:ignore,yaml:ignore,definition:ignore,footnoteDefinition:ignore};// Return nothing for nodes that are ignored.
function ignore(){return null;}/**
       * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
       * @typedef {import('hast').Root|import('hast').Parent['children'][number]} HastNode
       * @typedef {import('mdast').Parent} Parent
       * @typedef {import('mdast').Definition} Definition
       * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('hast').Text} Text
       * @typedef {import('hast').Comment} Comment
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').ElementContent} Content
       * @typedef {import('unist-util-position').PositionLike} PositionLike
       *
       * @typedef EmbeddedHastFields
       * @property {string} [hName] Defines the tag name of an element
       * @property {Properties} [hProperties] Defines the properties of an element
       * @property {Array.<Content>} [hChildren] Defines the (hast) children of an element
       *
       * @typedef {Object.<string, unknown> & EmbeddedHastFields} Data unist data with embedded hast fields
       *
       * @typedef {MdastNode & {data?: Data}} NodeWithData unist node with embedded hast data
       *
       * @callback Handler
       * @param {H} h Handle context
       * @param {any} node mdast node to handle
       * @param {Parent|null} parent Parent of `node`
       * @returns {Content|Array.<Content>|null|undefined} hast node
       *
       * @callback HFunctionProps
       * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
       * @param {string} tagName HTML tag name
       * @param {Properties} props Properties
       * @param {Array.<Content>?} [children] hast content
       * @returns {Element}
       *
       * @callback HFunctionNoProps
       * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
       * @param {string} tagName HTML tag name
       * @param {Array.<Content>?} [children] hast content
       * @returns {Element}
       *
       * @typedef HFields
       * @property {boolean} dangerous Whether HTML is allowed
       * @property {(identifier: string) => Definition|null} definition Definition cache
       * @property {Object.<string, FootnoteDefinition>} footnoteById Footnote cache
       * @property {Array.<string>} footnoteOrder Order in which footnotes occur
       * @property {Handlers} handlers Applied handlers
       * @property {Handler} unknownHandler Handler for any none not in `passThrough` or otherwise handled
       * @property {(left: NodeWithData|PositionLike|null|undefined, right: Content) => Content} augment Like `h` but lower-level and usable on non-elements.
       * @property {Array.<string>} passThrough List of node types to pass through untouched (except for their children).
       *
       * @typedef Options
       * @property {boolean} [allowDangerousHtml=false] Whether to allow `html` nodes and inject them as `raw` HTML
       * @property {Handlers} [handlers] Object mapping mdast nodes to functions handling them
       * @property {Array.<string>} [passThrough] List of custom mdast node types to pass through (keep) in hast
       * @property {Handler} [unknownHandler] Handler for all unknown nodes.
       *
       * @typedef {Record.<string, Handler>} Handlers Map of node types to handlers
       * @typedef {HFunctionProps & HFunctionNoProps & HFields} H Handle context
       */var own$b={}.hasOwnProperty;/**
       * Factory to transform.
       * @param {MdastNode} tree mdast node
       * @param {Options} [options] Configuration
       * @returns {H} `h` function
       */function factory(tree,options){var settings=options||{};var dangerous=settings.allowDangerousHtml||false;/** @type {Object.<string, FootnoteDefinition>} */var footnoteById={};h.dangerous=dangerous;h.definition=definitions(tree);h.footnoteById=footnoteById;/** @type {Array.<string>} */h.footnoteOrder=[];h.augment=augment;h.handlers=_objectSpread(_objectSpread({},handlers),settings.handlers);h.unknownHandler=settings.unknownHandler;h.passThrough=settings.passThrough;visit$1(tree,'footnoteDefinition',function(definition){var id=String(definition.identifier).toUpperCase();// Mimick CM behavior of link definitions.
// See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
if(!own$b.call(footnoteById,id)){footnoteById[id]=definition;}});// @ts-expect-error Hush, it’s fine!
return h;/**
         * Finalise the created `right`, a hast node, from `left`, an mdast node.
         * @param {(NodeWithData|PositionLike)?} left
         * @param {Content} right
         * @returns {Content}
         */function augment(left,right){// Handle `data.hName`, `data.hProperties, `data.hChildren`.
if(left&&'data'in left&&left.data){/** @type {Data} */var _data2=left.data;if(_data2.hName){if(right.type!=='element'){right={type:'element',tagName:'',properties:{},children:[]};}right.tagName=_data2.hName;}if(right.type==='element'&&_data2.hProperties){right.properties=_objectSpread(_objectSpread({},right.properties),_data2.hProperties);}if('children'in right&&right.children&&_data2.hChildren){right.children=_data2.hChildren;}}if(left){var ctx='type'in left?left:{position:left};if(!generated(ctx)){right.position={start:pointStart(ctx),end:pointEnd(ctx)};}}return right;}/**
         * Create an element for `node`.
         *
         * @type {HFunctionProps}
         */function h(node,tagName,props,children){if(Array.isArray(props)){children=props;props={};}// @ts-expect-error augmenting an element yields an element.
return augment(node,{type:'element',tagName:tagName,properties:props||{},children:children||[]});}}/**
       * Transform `tree` (an mdast node) to a hast node.
       *
       * @param {MdastNode} tree mdast node
       * @param {Options} [options] Configuration
       * @returns {HastNode|null|undefined} hast node
       */function toHast(tree,options){var h=factory(tree,options);var node=one$1(h,tree,null);var foot=footer(h);if(foot){// @ts-expect-error If there’s a footer, there were definitions, meaning block
// content.
// So assume `node` is a parent node.
node.children.push(u$1('text','\n'),foot);}return Array.isArray(node)?{type:'root',children:node}:node;}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('hast').Root} HastRoot
       * @typedef {import('mdast').Root} MdastRoot
       * @typedef {import('mdast-util-to-hast').Options} Options
       * @typedef {import('unified').Processor<any, any, any, any>} Processor
       *
       * @typedef {import('mdast-util-to-hast')} DoNotTouchAsThisImportIncludesRawInTree
       */ // Note: the `<MdastRoot, HastRoot>` overload doesn’t seem to work :'(
/**
       * Plugin to bridge or mutate to rehype.
       *
       * If a destination is given, runs the destination with the new hast tree
       * (bridge-mode).
       * Without destination, returns the hast tree: further plugins run on that tree
       * (mutate-mode).
       *
       * @param destination
       *   Optional unified processor.
       * @param options
       *   Options passed to `mdast-util-to-hast`.
       */var remarkRehype=/** @type {(import('unified').Plugin<[Processor, Options?]|[Options]|[], MdastRoot>)} */function remarkRehype(destination,options){return destination&&'run'in destination?bridge(destination,options):mutate(destination);};var remarkRehype$1=remarkRehype;/**
       * Bridge-mode.
       * Runs the destination with the new hast tree.
       *
       * @type {import('unified').Plugin<[Processor, Options?], MdastRoot>}
       */function bridge(destination,options){return function(node,file,next){destination.run(toHast(node,options),file,function(error){next(error);});};}/**
       * Mutate-mode.
       * Further transformers run on the nlcst tree.
       *
       * @type {import('unified').Plugin<[Options?]|void[], MdastRoot, HastRoot>}
       */function mutate(options){// @ts-expect-error: assume a corresponding node is returned for `toHast`.
return function(node){return toHast(node,options);};}var propTypes={exports:{}};/**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */var ReactPropTypesSecret$1='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';var ReactPropTypesSecret_1=ReactPropTypesSecret$1;/**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */var ReactPropTypesSecret=ReactPropTypesSecret_1;function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var factoryWithThrowingShims=function factoryWithThrowingShims(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){// It is still safe when called from React.
return;}var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}shim.isRequired=shim;function getShim(){return shim;}// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};/**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */{// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
propTypes.exports=factoryWithThrowingShims();}var PropTypes=propTypes.exports;/**
       * @typedef {import('./info.js').Info} Info
       * @typedef {Record<string, Info>} Properties
       * @typedef {Record<string, string>} Normal
       */var Schema=/*#__PURE__*/_createClass(/**
         * @constructor
         * @param {Properties} property
         * @param {Normal} normal
         * @param {string} [space]
         */function Schema(property,normal,space){_classCallCheck(this,Schema);this.property=property;this.normal=normal;if(space){this.space=space;}});/** @type {Properties} */Schema.prototype.property={};/** @type {Normal} */Schema.prototype.normal={};/** @type {string|null} */Schema.prototype.space=null;/**
       * @typedef {import('./schema.js').Properties} Properties
       * @typedef {import('./schema.js').Normal} Normal
       */ /**
       * @param {Schema[]} definitions
       * @param {string} [space]
       * @returns {Schema}
       */function merge(definitions,space){/** @type {Properties} */var property={};/** @type {Normal} */var normal={};var index=-1;while(++index<definitions.length){Object.assign(property,definitions[index].property);Object.assign(normal,definitions[index].normal);}return new Schema(property,normal,space);}/**
       * @param {string} value
       * @returns {string}
       */function normalize(value){return value.toLowerCase();}var Info=/*#__PURE__*/_createClass(/**
         * @constructor
         * @param {string} property
         * @param {string} attribute
         */function Info(property,attribute){_classCallCheck(this,Info);/** @type {string} */this.property=property;/** @type {string} */this.attribute=attribute;});/** @type {string|null} */Info.prototype.space=null;Info.prototype.boolean=false;Info.prototype.booleanish=false;Info.prototype.overloadedBoolean=false;Info.prototype.number=false;Info.prototype.commaSeparated=false;Info.prototype.spaceSeparated=false;Info.prototype.commaOrSpaceSeparated=false;Info.prototype.mustUseProperty=false;Info.prototype.defined=false;var powers=0;var boolean=increment();var booleanish=increment();var overloadedBoolean=increment();var number=increment();var spaceSeparated=increment();var commaSeparated=increment();var commaOrSpaceSeparated=increment();function increment(){return Math.pow(2,++powers);}var types=/*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({__proto__:null,boolean:boolean,booleanish:booleanish,overloadedBoolean:overloadedBoolean,number:number,spaceSeparated:spaceSeparated,commaSeparated:commaSeparated,commaOrSpaceSeparated:commaOrSpaceSeparated},Symbol.toStringTag,{value:'Module'}));/** @type {Array<keyof types>} */ // @ts-expect-error: hush.
var checks=Object.keys(types);var DefinedInfo=/*#__PURE__*/function(_Info){_inherits(DefinedInfo,_Info);var _super2=_createSuper(DefinedInfo);/**
         * @constructor
         * @param {string} property
         * @param {string} attribute
         * @param {number|null} [mask]
         * @param {string} [space]
         */function DefinedInfo(property,attribute,mask,space){var _this3;_classCallCheck(this,DefinedInfo);var index=-1;_this3=_super2.call(this,property,attribute);mark(_assertThisInitialized(_this3),'space',space);if(typeof mask==='number'){while(++index<checks.length){var check=checks[index];mark(_assertThisInitialized(_this3),checks[index],(mask&types[check])===types[check]);}}return _this3;}return _createClass(DefinedInfo);}(Info);DefinedInfo.prototype.defined=true;/**
       * @param {DefinedInfo} values
       * @param {string} key
       * @param {unknown} value
       */function mark(values,key,value){if(value){// @ts-expect-error: assume `value` matches the expected value of `key`.
values[key]=value;}}/**
       * @typedef {import('./schema.js').Properties} Properties
       * @typedef {import('./schema.js').Normal} Normal
       *
       * @typedef {Record<string, string>} Attributes
       *
       * @typedef {Object} Definition
       * @property {Record<string, number|null>} properties
       * @property {(attributes: Attributes, property: string) => string} transform
       * @property {string} [space]
       * @property {Attributes} [attributes]
       * @property {Array<string>} [mustUseProperty]
       */var own$a={}.hasOwnProperty;/**
       * @param {Definition} definition
       * @returns {Schema}
       */function create$1(definition){/** @type {Properties} */var property={};/** @type {Normal} */var normal={};/** @type {string} */var prop;for(prop in definition.properties){if(own$a.call(definition.properties,prop)){var value=definition.properties[prop];var info=new DefinedInfo(prop,definition.transform(definition.attributes||{},prop),value,definition.space);if(definition.mustUseProperty&&definition.mustUseProperty.includes(prop)){info.mustUseProperty=true;}property[prop]=info;normal[normalize(prop)]=prop;normal[normalize(info.attribute)]=prop;}}return new Schema(property,normal,definition.space);}var xlink=create$1({space:'xlink',transform:function transform(_,prop){return'xlink:'+prop.slice(5).toLowerCase();},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});var xml=create$1({space:'xml',transform:function transform(_,prop){return'xml:'+prop.slice(3).toLowerCase();},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});/**
       * @param {Record<string, string>} attributes
       * @param {string} attribute
       * @returns {string}
       */function caseSensitiveTransform(attributes,attribute){return attribute in attributes?attributes[attribute]:attribute;}/**
       * @param {Record<string, string>} attributes
       * @param {string} property
       * @returns {string}
       */function caseInsensitiveTransform(attributes,property){return caseSensitiveTransform(attributes,property.toLowerCase());}var xmlns=create$1({space:'xmlns',attributes:{xmlnsxlink:'xmlns:xlink'},transform:caseInsensitiveTransform,properties:{xmlns:null,xmlnsXLink:null}});var aria=create$1({transform:function transform(_,prop){return prop==='role'?prop:'aria-'+prop.slice(4).toLowerCase();},properties:{ariaActiveDescendant:null,ariaAtomic:booleanish,ariaAutoComplete:null,ariaBusy:booleanish,ariaChecked:booleanish,ariaColCount:number,ariaColIndex:number,ariaColSpan:number,ariaControls:spaceSeparated,ariaCurrent:null,ariaDescribedBy:spaceSeparated,ariaDetails:null,ariaDisabled:booleanish,ariaDropEffect:spaceSeparated,ariaErrorMessage:null,ariaExpanded:booleanish,ariaFlowTo:spaceSeparated,ariaGrabbed:booleanish,ariaHasPopup:null,ariaHidden:booleanish,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:spaceSeparated,ariaLevel:number,ariaLive:null,ariaModal:booleanish,ariaMultiLine:booleanish,ariaMultiSelectable:booleanish,ariaOrientation:null,ariaOwns:spaceSeparated,ariaPlaceholder:null,ariaPosInSet:number,ariaPressed:booleanish,ariaReadOnly:booleanish,ariaRelevant:null,ariaRequired:booleanish,ariaRoleDescription:spaceSeparated,ariaRowCount:number,ariaRowIndex:number,ariaRowSpan:number,ariaSelected:booleanish,ariaSetSize:number,ariaSort:null,ariaValueMax:number,ariaValueMin:number,ariaValueNow:number,ariaValueText:null,role:null}});var html$2=create$1({space:'html',attributes:{acceptcharset:'accept-charset',classname:'class',htmlfor:'for',httpequiv:'http-equiv'},transform:caseInsensitiveTransform,mustUseProperty:['checked','multiple','muted','selected'],properties:{// Standard Properties.
abbr:null,accept:commaSeparated,acceptCharset:spaceSeparated,accessKey:spaceSeparated,action:null,allow:null,allowFullScreen:boolean,allowPaymentRequest:boolean,allowUserMedia:boolean,alt:null,as:null,async:boolean,autoCapitalize:null,autoComplete:spaceSeparated,autoFocus:boolean,autoPlay:boolean,capture:boolean,charSet:null,checked:boolean,cite:null,className:spaceSeparated,cols:number,colSpan:null,content:null,contentEditable:booleanish,controls:boolean,controlsList:spaceSeparated,coords:number|commaSeparated,crossOrigin:null,data:null,dateTime:null,decoding:null,default:boolean,defer:boolean,dir:null,dirName:null,disabled:boolean,download:overloadedBoolean,draggable:booleanish,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:boolean,formTarget:null,headers:spaceSeparated,height:number,hidden:boolean,high:number,href:null,hrefLang:null,htmlFor:spaceSeparated,httpEquiv:spaceSeparated,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:boolean,itemId:null,itemProp:spaceSeparated,itemRef:spaceSeparated,itemScope:boolean,itemType:spaceSeparated,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:boolean,low:number,manifest:null,max:null,maxLength:number,media:null,method:null,min:null,minLength:number,multiple:boolean,muted:boolean,name:null,nonce:null,noModule:boolean,noValidate:boolean,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:boolean,optimum:number,pattern:null,ping:spaceSeparated,placeholder:null,playsInline:boolean,poster:null,preload:null,readOnly:boolean,referrerPolicy:null,rel:spaceSeparated,required:boolean,reversed:boolean,rows:number,rowSpan:number,sandbox:spaceSeparated,scope:null,scoped:boolean,seamless:boolean,selected:boolean,shape:null,size:number,sizes:null,slot:null,span:number,spellCheck:booleanish,src:null,srcDoc:null,srcLang:null,srcSet:null,start:number,step:null,style:null,tabIndex:number,target:null,title:null,translate:null,type:null,typeMustMatch:boolean,useMap:null,value:booleanish,width:number,wrap:null,// Legacy.
// See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
align:null,// Several. Use CSS `text-align` instead,
aLink:null,// `<body>`. Use CSS `a:active {color}` instead
archive:spaceSeparated,// `<object>`. List of URIs to archives
axis:null,// `<td>` and `<th>`. Use `scope` on `<th>`
background:null,// `<body>`. Use CSS `background-image` instead
bgColor:null,// `<body>` and table elements. Use CSS `background-color` instead
border:number,// `<table>`. Use CSS `border-width` instead,
borderColor:null,// `<table>`. Use CSS `border-color` instead,
bottomMargin:number,// `<body>`
cellPadding:null,// `<table>`
cellSpacing:null,// `<table>`
char:null,// Several table elements. When `align=char`, sets the character to align on
charOff:null,// Several table elements. When `char`, offsets the alignment
classId:null,// `<object>`
clear:null,// `<br>`. Use CSS `clear` instead
code:null,// `<object>`
codeBase:null,// `<object>`
codeType:null,// `<object>`
color:null,// `<font>` and `<hr>`. Use CSS instead
compact:boolean,// Lists. Use CSS to reduce space between items instead
declare:boolean,// `<object>`
event:null,// `<script>`
face:null,// `<font>`. Use CSS instead
frame:null,// `<table>`
frameBorder:null,// `<iframe>`. Use CSS `border` instead
hSpace:number,// `<img>` and `<object>`
leftMargin:number,// `<body>`
link:null,// `<body>`. Use CSS `a:link {color: *}` instead
longDesc:null,// `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
lowSrc:null,// `<img>`. Use a `<picture>`
marginHeight:number,// `<body>`
marginWidth:number,// `<body>`
noResize:boolean,// `<frame>`
noHref:boolean,// `<area>`. Use no href instead of an explicit `nohref`
noShade:boolean,// `<hr>`. Use background-color and height instead of borders
noWrap:boolean,// `<td>` and `<th>`
object:null,// `<applet>`
profile:null,// `<head>`
prompt:null,// `<isindex>`
rev:null,// `<link>`
rightMargin:number,// `<body>`
rules:null,// `<table>`
scheme:null,// `<meta>`
scrolling:booleanish,// `<frame>`. Use overflow in the child context
standby:null,// `<object>`
summary:null,// `<table>`
text:null,// `<body>`. Use CSS `color` instead
topMargin:number,// `<body>`
valueType:null,// `<param>`
version:null,// `<html>`. Use a doctype.
vAlign:null,// Several. Use CSS `vertical-align` instead
vLink:null,// `<body>`. Use CSS `a:visited {color}` instead
vSpace:number,// `<img>` and `<object>`
// Non-standard Properties.
allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:boolean,disableRemotePlayback:boolean,prefix:null,property:null,results:number,security:null,unselectable:null}});var svg$1=create$1({space:'svg',attributes:{accentHeight:'accent-height',alignmentBaseline:'alignment-baseline',arabicForm:'arabic-form',baselineShift:'baseline-shift',capHeight:'cap-height',className:'class',clipPath:'clip-path',clipRule:'clip-rule',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorProfile:'color-profile',colorRendering:'color-rendering',crossOrigin:'crossorigin',dataType:'datatype',dominantBaseline:'dominant-baseline',enableBackground:'enable-background',fillOpacity:'fill-opacity',fillRule:'fill-rule',floodColor:'flood-color',floodOpacity:'flood-opacity',fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',hrefLang:'hreflang',horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',horizOriginY:'horiz-origin-y',imageRendering:'image-rendering',letterSpacing:'letter-spacing',lightingColor:'lighting-color',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',navDown:'nav-down',navDownLeft:'nav-down-left',navDownRight:'nav-down-right',navLeft:'nav-left',navNext:'nav-next',navPrev:'nav-prev',navRight:'nav-right',navUp:'nav-up',navUpLeft:'nav-up-left',navUpRight:'nav-up-right',onAbort:'onabort',onActivate:'onactivate',onAfterPrint:'onafterprint',onBeforePrint:'onbeforeprint',onBegin:'onbegin',onCancel:'oncancel',onCanPlay:'oncanplay',onCanPlayThrough:'oncanplaythrough',onChange:'onchange',onClick:'onclick',onClose:'onclose',onCopy:'oncopy',onCueChange:'oncuechange',onCut:'oncut',onDblClick:'ondblclick',onDrag:'ondrag',onDragEnd:'ondragend',onDragEnter:'ondragenter',onDragExit:'ondragexit',onDragLeave:'ondragleave',onDragOver:'ondragover',onDragStart:'ondragstart',onDrop:'ondrop',onDurationChange:'ondurationchange',onEmptied:'onemptied',onEnd:'onend',onEnded:'onended',onError:'onerror',onFocus:'onfocus',onFocusIn:'onfocusin',onFocusOut:'onfocusout',onHashChange:'onhashchange',onInput:'oninput',onInvalid:'oninvalid',onKeyDown:'onkeydown',onKeyPress:'onkeypress',onKeyUp:'onkeyup',onLoad:'onload',onLoadedData:'onloadeddata',onLoadedMetadata:'onloadedmetadata',onLoadStart:'onloadstart',onMessage:'onmessage',onMouseDown:'onmousedown',onMouseEnter:'onmouseenter',onMouseLeave:'onmouseleave',onMouseMove:'onmousemove',onMouseOut:'onmouseout',onMouseOver:'onmouseover',onMouseUp:'onmouseup',onMouseWheel:'onmousewheel',onOffline:'onoffline',onOnline:'ononline',onPageHide:'onpagehide',onPageShow:'onpageshow',onPaste:'onpaste',onPause:'onpause',onPlay:'onplay',onPlaying:'onplaying',onPopState:'onpopstate',onProgress:'onprogress',onRateChange:'onratechange',onRepeat:'onrepeat',onReset:'onreset',onResize:'onresize',onScroll:'onscroll',onSeeked:'onseeked',onSeeking:'onseeking',onSelect:'onselect',onShow:'onshow',onStalled:'onstalled',onStorage:'onstorage',onSubmit:'onsubmit',onSuspend:'onsuspend',onTimeUpdate:'ontimeupdate',onToggle:'ontoggle',onUnload:'onunload',onVolumeChange:'onvolumechange',onWaiting:'onwaiting',onZoom:'onzoom',overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',panose1:'panose-1',pointerEvents:'pointer-events',referrerPolicy:'referrerpolicy',renderingIntent:'rendering-intent',shapeRendering:'shape-rendering',stopColor:'stop-color',stopOpacity:'stop-opacity',strikethroughPosition:'strikethrough-position',strikethroughThickness:'strikethrough-thickness',strokeDashArray:'stroke-dasharray',strokeDashOffset:'stroke-dashoffset',strokeLineCap:'stroke-linecap',strokeLineJoin:'stroke-linejoin',strokeMiterLimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',tabIndex:'tabindex',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',typeOf:'typeof',underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',vectorEffect:'vector-effect',vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',wordSpacing:'word-spacing',writingMode:'writing-mode',xHeight:'x-height',// These were camelcased in Tiny. Now lowercased in SVG 2
playbackOrder:'playbackorder',timelineBegin:'timelinebegin'},transform:caseSensitiveTransform,properties:{about:commaOrSpaceSeparated,accentHeight:number,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:number,amplitude:number,arabicForm:null,ascent:number,attributeName:null,attributeType:null,azimuth:number,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:number,by:null,calcMode:null,capHeight:number,className:spaceSeparated,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:number,diffuseConstant:number,direction:null,display:null,dur:null,divisor:number,dominantBaseline:null,download:boolean,dx:null,dy:null,edgeMode:null,editable:null,elevation:number,enableBackground:null,end:null,event:null,exponent:number,externalResourcesRequired:null,fill:null,fillOpacity:number,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:commaSeparated,g2:commaSeparated,glyphName:commaSeparated,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:number,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:number,horizOriginX:number,horizOriginY:number,id:null,ideographic:number,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:number,k:number,k1:number,k2:number,k3:number,k4:number,kernelMatrix:commaOrSpaceSeparated,kernelUnitLength:null,keyPoints:null,// SEMI_COLON_SEPARATED
keySplines:null,// SEMI_COLON_SEPARATED
keyTimes:null,// SEMI_COLON_SEPARATED
kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:number,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:number,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:number,overlineThickness:number,paintOrder:null,panose1:null,path:null,pathLength:number,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:spaceSeparated,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:number,pointsAtY:number,pointsAtZ:number,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:commaOrSpaceSeparated,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:commaOrSpaceSeparated,rev:commaOrSpaceSeparated,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:commaOrSpaceSeparated,requiredFeatures:commaOrSpaceSeparated,requiredFonts:commaOrSpaceSeparated,requiredFormats:commaOrSpaceSeparated,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:number,specularExponent:number,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:number,strikethroughThickness:number,string:null,stroke:null,strokeDashArray:commaOrSpaceSeparated,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:number,strokeOpacity:number,strokeWidth:null,style:null,surfaceScale:number,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:commaOrSpaceSeparated,tabIndex:number,tableValues:null,target:null,targetX:number,targetY:number,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:commaOrSpaceSeparated,to:null,transform:null,u1:null,u2:null,underlinePosition:number,underlineThickness:number,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:number,values:null,vAlphabetic:number,vMathematical:number,vectorEffect:null,vHanging:number,vIdeographic:number,version:null,vertAdvY:number,vertOriginX:number,vertOriginY:number,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:number,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}});/**
       * @typedef {import('./util/schema.js').Schema} Schema
       */var valid=/^data[-\w.:]+$/i;var dash=/-[a-z]/g;var cap=/[A-Z]/g;/**
       * @param {Schema} schema
       * @param {string} value
       * @returns {Info}
       */function find(schema,value){var normal=normalize(value);var prop=value;var Type=Info;if(normal in schema.normal){return schema.property[schema.normal[normal]];}if(normal.length>4&&normal.slice(0,4)==='data'&&valid.test(value)){// Attribute or property.
if(value.charAt(4)==='-'){// Turn it into a property.
var rest=value.slice(5).replace(dash,camelcase);prop='data'+rest.charAt(0).toUpperCase()+rest.slice(1);}else{// Turn it into an attribute.
var _rest=value.slice(4);if(!dash.test(_rest)){var dashes=_rest.replace(cap,kebab);if(dashes.charAt(0)!=='-'){dashes='-'+dashes;}value='data'+dashes;}}Type=DefinedInfo;}return new Type(prop,value);}/**
       * @param {string} $0
       * @returns {string}
       */function kebab($0){return'-'+$0.toLowerCase();}/**
       * @param {string} $0
       * @returns {string}
       */function camelcase($0){return $0.charAt(1).toUpperCase();}var hastToReact={classId:'classID',dataType:'datatype',itemId:'itemID',strokeDashArray:'strokeDasharray',strokeDashOffset:'strokeDashoffset',strokeLineCap:'strokeLinecap',strokeLineJoin:'strokeLinejoin',strokeMiterLimit:'strokeMiterlimit',typeOf:'typeof',xLinkActuate:'xlinkActuate',xLinkArcRole:'xlinkArcrole',xLinkHref:'xlinkHref',xLinkRole:'xlinkRole',xLinkShow:'xlinkShow',xLinkTitle:'xlinkTitle',xLinkType:'xlinkType',xmlnsXLink:'xmlnsXlink'};/**
       * @typedef {import('./lib/util/info.js').Info} Info
       * @typedef {import('./lib/util/schema.js').Schema} Schema
       */var html$1=merge([xml,xlink,xmlns,aria,html$2],'html');var svg=merge([xml,xlink,xmlns,aria,svg$1],'svg');/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').Element} Element
       *
       * @callback AllowElement
       * @param {Element} element
       * @param {number} index
       * @param {Element|Root} parent
       * @returns {boolean|undefined}
       *
       * @typedef Options
       * @property {Array<string>} [allowedElements]
       * @property {Array<string>} [disallowedElements=[]]
       * @property {AllowElement} [allowElement]
       * @property {boolean} [unwrapDisallowed=false]
       */ /**
       * @type {import('unified').Plugin<[Options], Root>}
       */function rehypeFilter(options){if(options.allowedElements&&options.disallowedElements){throw new TypeError('Only one of `allowedElements` and `disallowedElements` should be defined');}if(options.allowedElements||options.disallowedElements||options.allowElement){return function(tree){visit$1(tree,'element',function(node,index,parent_){var parent=/** @type {Element|Root} */parent_;/** @type {boolean|undefined} */var remove;if(options.allowedElements){remove=!options.allowedElements.includes(node.tagName);}else if(options.disallowedElements){remove=options.disallowedElements.includes(node.tagName);}if(!remove&&options.allowElement&&typeof index==='number'){remove=!options.allowElement(node,index,parent);}if(remove&&typeof index==='number'){if(options.unwrapDisallowed&&node.children){var _parent$children;(_parent$children=parent.children).splice.apply(_parent$children,[index,1].concat(_toConsumableArray(node.children)));}else{parent.children.splice(index,1);}return index;}return undefined;});};}}var reactIs={exports:{}};var reactIs_production_min={};/** @license React v17.0.2
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h$1=60110,k=60112,l=60113,m=60120,n=60115,p$1=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h$1=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p$1=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}function y(a){if("object"===_typeof(a)&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h$1:case k:case p$1:case n:case g:return a;default:return t;}}case c:return t;}}}var z=g,A=b,B=k,C=d,D=p$1,E=n,F=c,G=f,H=e,I=l;reactIs_production_min.ContextConsumer=h$1;reactIs_production_min.ContextProvider=z;reactIs_production_min.Element=A;reactIs_production_min.ForwardRef=B;reactIs_production_min.Fragment=C;reactIs_production_min.Lazy=D;reactIs_production_min.Memo=E;reactIs_production_min.Portal=F;reactIs_production_min.Profiler=G;reactIs_production_min.StrictMode=H;reactIs_production_min.Suspense=I;reactIs_production_min.isAsyncMode=function(){return!1;};reactIs_production_min.isConcurrentMode=function(){return!1;};reactIs_production_min.isContextConsumer=function(a){return y(a)===h$1;};reactIs_production_min.isContextProvider=function(a){return y(a)===g;};reactIs_production_min.isElement=function(a){return"object"===_typeof(a)&&null!==a&&a.$$typeof===b;};reactIs_production_min.isForwardRef=function(a){return y(a)===k;};reactIs_production_min.isFragment=function(a){return y(a)===d;};reactIs_production_min.isLazy=function(a){return y(a)===p$1;};reactIs_production_min.isMemo=function(a){return y(a)===n;};reactIs_production_min.isPortal=function(a){return y(a)===c;};reactIs_production_min.isProfiler=function(a){return y(a)===f;};reactIs_production_min.isStrictMode=function(a){return y(a)===e;};reactIs_production_min.isSuspense=function(a){return y(a)===l;};reactIs_production_min.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===_typeof(a)&&null!==a&&(a.$$typeof===p$1||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h$1||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1;};reactIs_production_min.typeOf=y;{reactIs.exports=reactIs_production_min;}var ReactIs=reactIs.exports;/**
       * @param {unknown} thing
       * @returns {boolean}
       */function whitespace(thing){/** @type {string} */var value=// @ts-ignore looks like a node.
thing&&_typeof(thing)==='object'&&thing.type==='text'?// @ts-ignore looks like a text.
thing.value||'':thing;// HTML whitespace expression.
// See <https://html.spec.whatwg.org/#space-character>.
return typeof value==='string'&&value.replace(/[ \t\n\f\r]/g,'')==='';}/**
       * Parse space separated tokens to an array of strings.
       *
       * @param {string} value Space separated tokens
       * @returns {Array.<string>} Tokens
       */function parse$2(value){var input=String(value||'').trim();return input?input.split(/[ \t\n\r\f]+/g):[];}/**
       * Serialize an array of strings as space separated tokens.
       *
       * @param {Array.<string|number>} values Tokens
       * @returns {string} Space separated tokens
       */function stringify$1(values){return values.join(' ').trim();}/**
       * @typedef {Object} StringifyOptions
       * @property {boolean} [padLeft=true] Whether to pad a space before a token (`boolean`, default: `true`).
       * @property {boolean} [padRight=false] Whether to pad a space after a token (`boolean`, default: `false`).
       */ /**
       * Parse comma separated tokens to an array.
       *
       * @param {string} value
       * @returns {Array.<string>}
       */function parse$1(value){/** @type {Array.<string>} */var tokens=[];var input=String(value||'');var index=input.indexOf(',');var start=0;/** @type {boolean} */var end;/** @type {string} */var token;while(!end){if(index===-1){index=input.length;end=true;}token=input.slice(start,index).trim();if(token||!end){tokens.push(token);}start=index+1;index=input.indexOf(',',start);}return tokens;}/**
       * Serialize an array of strings to comma separated tokens.
       *
       * @param {Array.<string|number>} values
       * @param {StringifyOptions} [options]
       * @returns {string}
       */function stringify(values,options){var settings=options||{};// Ensure the last empty entry is seen.
if(values[values.length-1]===''){values=values.concat('');}return values.join((settings.padRight?' ':'')+','+(settings.padLeft===false?'':' ')).trim();}// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;var NEWLINE_REGEX=/\n/g;var WHITESPACE_REGEX=/^\s*/;// declaration
var PROPERTY_REGEX=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;var COLON_REGEX=/^:\s*/;var VALUE_REGEX=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;var SEMICOLON_REGEX=/^[;\s]*/;// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX=/^\s+|\s+$/g;// strings
var NEWLINE='\n';var FORWARD_SLASH='/';var ASTERISK='*';var EMPTY_STRING='';// types
var TYPE_COMMENT='comment';var TYPE_DECLARATION='declaration';/**
       * @param {String} style
       * @param {Object} [options]
       * @return {Object[]}
       * @throws {TypeError}
       * @throws {Error}
       */var inlineStyleParser=function inlineStyleParser(style,options){if(typeof style!=='string'){throw new TypeError('First argument must be a string');}if(!style)return[];options=options||{};/**
         * Positional.
         */var lineno=1;var column=1;/**
         * Update lineno and column based on `str`.
         *
         * @param {String} str
         */function updatePosition(str){var lines=str.match(NEWLINE_REGEX);if(lines)lineno+=lines.length;var i=str.lastIndexOf(NEWLINE);column=~i?str.length-i:column+str.length;}/**
         * Mark position and patch `node.position`.
         *
         * @return {Function}
         */function position(){var start={line:lineno,column:column};return function(node){node.position=new Position(start);whitespace();return node;};}/**
         * Store position information for a node.
         *
         * @constructor
         * @property {Object} start
         * @property {Object} end
         * @property {undefined|String} source
         */function Position(start){this.start=start;this.end={line:lineno,column:column};this.source=options.source;}/**
         * Non-enumerable source string.
         */Position.prototype.content=style;/**
         * Error `msg`.
         *
         * @param {String} msg
         * @throws {Error}
         */function error(msg){var err=new Error(options.source+':'+lineno+':'+column+': '+msg);err.reason=msg;err.filename=options.source;err.line=lineno;err.column=column;err.source=style;if(options.silent);else{throw err;}}/**
         * Match `re` and return captures.
         *
         * @param {RegExp} re
         * @return {undefined|Array}
         */function match(re){var m=re.exec(style);if(!m)return;var str=m[0];updatePosition(str);style=style.slice(str.length);return m;}/**
         * Parse whitespace.
         */function whitespace(){match(WHITESPACE_REGEX);}/**
         * Parse comments.
         *
         * @param {Object[]} [rules]
         * @return {Object[]}
         */function comments(rules){var c;rules=rules||[];while(c=comment()){if(c!==false){rules.push(c);}}return rules;}/**
         * Parse comment.
         *
         * @return {Object}
         * @throws {Error}
         */function comment(){var pos=position();if(FORWARD_SLASH!=style.charAt(0)||ASTERISK!=style.charAt(1))return;var i=2;while(EMPTY_STRING!=style.charAt(i)&&(ASTERISK!=style.charAt(i)||FORWARD_SLASH!=style.charAt(i+1))){++i;}i+=2;if(EMPTY_STRING===style.charAt(i-1)){return error('End of comment missing');}var str=style.slice(2,i-2);column+=2;updatePosition(str);style=style.slice(i);column+=2;return pos({type:TYPE_COMMENT,comment:str});}/**
         * Parse declaration.
         *
         * @return {Object}
         * @throws {Error}
         */function declaration(){var pos=position();// prop
var prop=match(PROPERTY_REGEX);if(!prop)return;comment();// :
if(!match(COLON_REGEX))return error("property missing ':'");// val
var val=match(VALUE_REGEX);var ret=pos({type:TYPE_DECLARATION,property:trim(prop[0].replace(COMMENT_REGEX,EMPTY_STRING)),value:val?trim(val[0].replace(COMMENT_REGEX,EMPTY_STRING)):EMPTY_STRING});// ;
match(SEMICOLON_REGEX);return ret;}/**
         * Parse declarations.
         *
         * @return {Object[]}
         */function declarations(){var decls=[];comments(decls);// declarations
var decl;while(decl=declaration()){if(decl!==false){decls.push(decl);comments(decls);}}return decls;}whitespace();return declarations();};/**
       * Trim `str`.
       *
       * @param {String} str
       * @return {String}
       */function trim(str){return str?str.replace(TRIM_REGEX,EMPTY_STRING):EMPTY_STRING;}var parse=inlineStyleParser;/**
       * Parses inline style to object.
       *
       * @example
       * // returns { 'line-height': '42' }
       * StyleToObject('line-height: 42;');
       *
       * @param  {String}      style      - The inline style.
       * @param  {Function}    [iterator] - The iterator function.
       * @return {null|Object}
       */function StyleToObject(style,iterator){var output=null;if(!style||typeof style!=='string'){return output;}var declaration;var declarations=parse(style);var hasIterator=typeof iterator==='function';var property;var value;for(var i=0,len=declarations.length;i<len;i++){declaration=declarations[i];property=declaration.property;value=declaration.value;if(hasIterator){iterator(property,value,declaration);}else if(value){output||(output={});output[property]=value;}}return output;}var styleToObject=StyleToObject;/**
       * @template T
       * @typedef {import('react').ComponentType<T>} ComponentType<T>
       */var own$9={}.hasOwnProperty;// The table-related elements that must not contain whitespace text according
// to React.
var tableElements=new Set(['table','thead','tbody','tfoot','tr']);/**
       * @param {Context} context
       * @param {Element|Root} node
       */function childrenToReact(context,node){/** @type {Array<ReactNode>} */var children=[];var childIndex=-1;/** @type {Comment|Doctype|Element|Raw|Text} */var child;while(++childIndex<node.children.length){child=node.children[childIndex];if(child.type==='element'){children.push(toReact$1(context,child,childIndex,node));}else if(child.type==='text'){// Currently, a warning is triggered by react for *any* white space in
// tables.
// So we drop it.
// See: <https://github.com/facebook/react/pull/7081>.
// See: <https://github.com/facebook/react/pull/7515>.
// See: <https://github.com/remarkjs/remark-react/issues/64>.
// See: <https://github.com/remarkjs/react-markdown/issues/576>.
if(node.type!=='element'||!tableElements.has(node.tagName)||!whitespace(child)){children.push(child.value);}}else if(child.type==='raw'&&!context.options.skipHtml){// Default behavior is to show (encoded) HTML.
children.push(child.value);}}return children;}/**
       * @param {Context} context
       * @param {Element} node
       * @param {number} index
       * @param {Element|Root} parent
       */function toReact$1(context,node,index,parent){var options=context.options;var parentSchema=context.schema;/** @type {ReactMarkdownNames} */ // @ts-expect-error assume a known HTML/SVG element.
var name=node.tagName;/** @type {Record<string, unknown>} */var properties={};var schema=parentSchema;/** @type {string} */var property;if(parentSchema.space==='html'&&name==='svg'){schema=svg;context.schema=schema;}if(node.properties){for(property in node.properties){if(own$9.call(node.properties,property)){addProperty$1(properties,property,node.properties[property],context);}}}if(name==='ol'||name==='ul'){context.listDepth++;}var children=childrenToReact(context,node);if(name==='ol'||name==='ul'){context.listDepth--;}// Restore parent schema.
context.schema=parentSchema;// Nodes created by plugins do not have positional info, in which case we use
// an object that matches the position interface.
var position=node.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}};var component=options.components&&own$9.call(options.components,name)?options.components[name]:name;var basic=typeof component==='string'||component===React.Fragment;if(!ReactIs.isValidElementType(component)){throw new TypeError("Component for name `".concat(name,"` not defined or is not renderable"));}properties.key=[name,position.start.line,position.start.column,index].join('-');if(name==='a'&&options.linkTarget){properties.target=typeof options.linkTarget==='function'?options.linkTarget(String(properties.href||''),node.children,typeof properties.title==='string'?properties.title:null):options.linkTarget;}if(name==='a'&&options.transformLinkUri){properties.href=options.transformLinkUri(String(properties.href||''),node.children,typeof properties.title==='string'?properties.title:null);}if(!basic&&name==='code'&&parent.type==='element'&&parent.tagName!=='pre'){properties.inline=true;}if(!basic&&(name==='h1'||name==='h2'||name==='h3'||name==='h4'||name==='h5'||name==='h6')){properties.level=Number.parseInt(name.charAt(1),10);}if(name==='img'&&options.transformImageUri){properties.src=options.transformImageUri(String(properties.src||''),String(properties.alt||''),typeof properties.title==='string'?properties.title:null);}if(!basic&&name==='li'&&parent.type==='element'){var input=getInputElement(node);properties.checked=input&&input.properties?Boolean(input.properties.checked):null;properties.index=getElementsBeforeCount(parent,node);properties.ordered=parent.tagName==='ol';}if(!basic&&(name==='ol'||name==='ul')){properties.ordered=name==='ol';properties.depth=context.listDepth;}if(name==='td'||name==='th'){if(properties.align){if(!properties.style)properties.style={};// @ts-expect-error assume `style` is an object
properties.style.textAlign=properties.align;delete properties.align;}if(!basic){properties.isHeader=name==='th';}}if(!basic&&name==='tr'&&parent.type==='element'){properties.isHeader=Boolean(parent.tagName==='thead');}// If `sourcePos` is given, pass source information (line/column info from markdown source).
if(options.sourcePos){properties['data-sourcepos']=flattenPosition(position);}if(!basic&&options.rawSourcePos){properties.sourcePosition=node.position;}// If `includeElementIndex` is given, pass node index info to components.
if(!basic&&options.includeElementIndex){properties.index=getElementsBeforeCount(parent,node);properties.siblingCount=getElementsBeforeCount(parent);}if(!basic){properties.node=node;}// Ensure no React warnings are emitted for void elements w/ children.
return children.length>0?React.createElement(component,properties,children):React.createElement(component,properties);}/**
       * @param {Element|Root} node
       * @returns {Element?}
       */function getInputElement(node){var index=-1;while(++index<node.children.length){var child=node.children[index];if(child.type==='element'&&child.tagName==='input'){return child;}}return null;}/**
       * @param {Element|Root} parent
       * @param {Element} [node]
       * @returns {number}
       */function getElementsBeforeCount(parent,node){var index=-1;var count=0;while(++index<parent.children.length){if(parent.children[index]===node)break;if(parent.children[index].type==='element')count++;}return count;}/**
       * @param {Record<string, unknown>} props
       * @param {string} prop
       * @param {unknown} value
       * @param {Context} ctx
       */function addProperty$1(props,prop,value,ctx){var info=find(ctx.schema,prop);var result=value;// Ignore nullish and `NaN` values.
// eslint-disable-next-line no-self-compare
if(result===null||result===undefined||result!==result){return;}// Accept `array`.
// Most props are space-separated.
if(Array.isArray(result)){result=info.commaSeparated?stringify(result):stringify$1(result);}if(info.property==='style'&&typeof result==='string'){result=parseStyle$1(result);}if(info.space&&info.property){props[own$9.call(hastToReact,info.property)?hastToReact[info.property]:info.property]=result;}else if(info.attribute){props[info.attribute]=result;}}/**
       * @param {string} value
       * @returns {Record<string, string>}
       */function parseStyle$1(value){/** @type {Record<string, string>} */var result={};try{styleToObject(value,iterator);}catch(_unused){// Silent.
}return result;/**
         * @param {string} name
         * @param {string} v
         */function iterator(name,v){var k=name.slice(0,4)==='-ms-'?"ms-".concat(name.slice(4)):name;result[k.replace(/-([a-z])/g,styleReplacer)]=v;}}/**
       * @param {unknown} _
       * @param {string} $1
       */function styleReplacer(_,$1){return $1.toUpperCase();}/**
       * @param {Position|{start: {line: null, column: null, offset: null}, end: {line: null, column: null, offset: null}}} pos
       * @returns {string}
       */function flattenPosition(pos){return[pos.start.line,':',pos.start.column,'-',pos.end.line,':',pos.end.column].map(function(d){return String(d);}).join('');}/**
       * @typedef {import('react').ReactNode} ReactNode
       * @typedef {import('react').ReactElement<{}>} ReactElement
       * @typedef {import('unified').PluggableList} PluggableList
       * @typedef {import('hast').Root} Root
       * @typedef {import('./rehype-filter.js').Options} FilterOptions
       * @typedef {import('./ast-to-react.js').Options} TransformOptions
       *
       * @typedef CoreOptions
       * @property {string} children
       *
       * @typedef PluginOptions
       * @property {PluggableList} [plugins=[]] **deprecated**: use `remarkPlugins` instead
       * @property {PluggableList} [remarkPlugins=[]]
       * @property {PluggableList} [rehypePlugins=[]]
       *
       * @typedef LayoutOptions
       * @property {string} [className]
       *
       * @typedef {CoreOptions & PluginOptions & LayoutOptions & FilterOptions & TransformOptions} ReactMarkdownOptions
       *
       * @typedef Deprecation
       * @property {string} id
       * @property {string} [to]
       */var own$8={}.hasOwnProperty;var changelog='https://github.com/remarkjs/react-markdown/blob/main/changelog.md';/** @type {Record<string, Deprecation>} */var deprecated$1={renderers:{to:'components',id:'change-renderers-to-components'},astPlugins:{id:'remove-buggy-html-in-markdown-parser'},allowDangerousHtml:{id:'remove-buggy-html-in-markdown-parser'},escapeHtml:{id:'remove-buggy-html-in-markdown-parser'},source:{to:'children',id:'change-source-to-children'},allowNode:{to:'allowElement',id:'replace-allownode-allowedtypes-and-disallowedtypes'},allowedTypes:{to:'allowedElements',id:'replace-allownode-allowedtypes-and-disallowedtypes'},disallowedTypes:{to:'disallowedElements',id:'replace-allownode-allowedtypes-and-disallowedtypes'},includeNodeIndex:{to:'includeElementIndex',id:'change-includenodeindex-to-includeelementindex'}};/**
       * React component to render markdown.
       *
       * @param {ReactMarkdownOptions} options
       * @returns {ReactElement}
       */function ReactMarkdown(options){for(var key in deprecated$1){if(own$8.call(deprecated$1,key)&&own$8.call(options,key)){var deprecation=deprecated$1[key];console.warn("[react-markdown] Warning: please ".concat(deprecation.to?"use `".concat(deprecation.to,"` instead of"):'remove'," `").concat(key,"` (see <").concat(changelog,"#").concat(deprecation.id,"> for more info)"));delete deprecated$1[key];}}var processor=unified().use(remarkParse)// TODO: deprecate `plugins` in v8.0.0.
.use(options.remarkPlugins||options.plugins||[]).use(remarkRehype$1,{allowDangerousHtml:true}).use(options.rehypePlugins||[]).use(rehypeFilter,options);var file=new VFile();if(typeof options.children==='string'){file.value=options.children;}else if(options.children!==undefined&&options.children!==null){console.warn("[react-markdown] Warning: please pass a string as `children` (not: `".concat(options.children,"`)"));}var hastNode=processor.runSync(processor.parse(file),file);if(hastNode.type!=='root'){throw new TypeError('Expected a `root` node');}/** @type {ReactElement} */var result=React.createElement(React.Fragment,{},childrenToReact({options:options,schema:html$1,listDepth:0},hastNode));if(options.className){result=React.createElement('div',{className:options.className},result);}return result;}ReactMarkdown.defaultProps={transformLinkUri:uriTransformer};ReactMarkdown.propTypes={// Core options:
children:PropTypes.string,// Layout options:
className:PropTypes.string,// Filter options:
allowElement:PropTypes.func,allowedElements:PropTypes.arrayOf(PropTypes.string),disallowedElements:PropTypes.arrayOf(PropTypes.string),unwrapDisallowed:PropTypes.bool,// Plugin options:
remarkPlugins:PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object,PropTypes.func,PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object,PropTypes.func]))])),rehypePlugins:PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object,PropTypes.func,PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object,PropTypes.func]))])),// Transform options:
sourcePos:PropTypes.bool,rawSourcePos:PropTypes.bool,skipHtml:PropTypes.bool,includeElementIndex:PropTypes.bool,transformLinkUri:PropTypes.oneOfType([PropTypes.func,PropTypes.bool]),linkTarget:PropTypes.oneOfType([PropTypes.func,PropTypes.string]),transformImageUri:PropTypes.func,components:PropTypes.object};/**
       * @typedef {import('micromark-util-types').Extension} Extension
       * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Previous} Previous
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Event} Event
       * @typedef {import('micromark-util-types').Code} Code
       */var www={tokenize:tokenizeWww,partial:true};var domain={tokenize:tokenizeDomain,partial:true};var path={tokenize:tokenizePath,partial:true};var punctuation={tokenize:tokenizePunctuation,partial:true};var namedCharacterReference={tokenize:tokenizeNamedCharacterReference,partial:true};var wwwAutolink={tokenize:tokenizeWwwAutolink,previous:previousWww};var httpAutolink={tokenize:tokenizeHttpAutolink,previous:previousHttp};var emailAutolink={tokenize:tokenizeEmailAutolink,previous:previousEmail};/** @type {ConstructRecord} */var text$3={};/** @type {Extension} */var gfmAutolinkLiteral={text:text$3};var code=48;// Add alphanumerics.
while(code<123){text$3[code]=emailAutolink;code++;if(code===58)code=65;else if(code===91)code=97;}text$3[43]=emailAutolink;text$3[45]=emailAutolink;text$3[46]=emailAutolink;text$3[95]=emailAutolink;text$3[72]=[emailAutolink,httpAutolink];text$3[104]=[emailAutolink,httpAutolink];text$3[87]=[emailAutolink,wwwAutolink];text$3[119]=[emailAutolink,wwwAutolink];/** @type {Tokenizer} */function tokenizeEmailAutolink(effects,ok,nok){var self=this;/** @type {boolean} */var hasDot;/** @type {boolean|undefined} */var hasDigitInLastSegment;return start;/** @type {State} */function start(code){if(!gfmAtext(code)||!previousEmail(self.previous)||previousUnbalanced(self.events)){return nok(code);}effects.enter('literalAutolink');effects.enter('literalAutolinkEmail');return atext(code);}/** @type {State} */function atext(code){if(gfmAtext(code)){effects.consume(code);return atext;}if(code===64){effects.consume(code);return label;}return nok(code);}/** @type {State} */function label(code){if(code===46){return effects.check(punctuation,done,dotContinuation)(code);}if(code===45||code===95){return effects.check(punctuation,nok,dashOrUnderscoreContinuation)(code);}if(asciiAlphanumeric(code)){if(!hasDigitInLastSegment&&asciiDigit(code)){hasDigitInLastSegment=true;}effects.consume(code);return label;}return done(code);}/** @type {State} */function dotContinuation(code){effects.consume(code);hasDot=true;hasDigitInLastSegment=undefined;return label;}/** @type {State} */function dashOrUnderscoreContinuation(code){effects.consume(code);return afterDashOrUnderscore;}/** @type {State} */function afterDashOrUnderscore(code){if(code===46){return effects.check(punctuation,nok,dotContinuation)(code);}return label(code);}/** @type {State} */function done(code){if(hasDot&&!hasDigitInLastSegment){effects.exit('literalAutolinkEmail');effects.exit('literalAutolink');return ok(code);}return nok(code);}}/** @type {Tokenizer} */function tokenizeWwwAutolink(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){if(code!==87&&code!==119||!previousWww(self.previous)||previousUnbalanced(self.events)){return nok(code);}effects.enter('literalAutolink');effects.enter('literalAutolinkWww');// For `www.` we check instead of attempt, because when it matches, GH
// treats it as part of a domain (yes, it says a valid domain must come
// after `www.`, but that’s not how it’s implemented by them).
return effects.check(www,effects.attempt(domain,effects.attempt(path,done),nok),nok)(code);}/** @type {State} */function done(code){effects.exit('literalAutolinkWww');effects.exit('literalAutolink');return ok(code);}}/** @type {Tokenizer} */function tokenizeHttpAutolink(effects,ok,nok){var self=this;return start;/** @type {State} */function start(code){if(code!==72&&code!==104||!previousHttp(self.previous)||previousUnbalanced(self.events)){return nok(code);}effects.enter('literalAutolink');effects.enter('literalAutolinkHttp');effects.consume(code);return t1;}/** @type {State} */function t1(code){if(code===84||code===116){effects.consume(code);return t2;}return nok(code);}/** @type {State} */function t2(code){if(code===84||code===116){effects.consume(code);return p;}return nok(code);}/** @type {State} */function p(code){if(code===80||code===112){effects.consume(code);return s;}return nok(code);}/** @type {State} */function s(code){if(code===83||code===115){effects.consume(code);return colon;}return colon(code);}/** @type {State} */function colon(code){if(code===58){effects.consume(code);return slash1;}return nok(code);}/** @type {State} */function slash1(code){if(code===47){effects.consume(code);return slash2;}return nok(code);}/** @type {State} */function slash2(code){if(code===47){effects.consume(code);return after;}return nok(code);}/** @type {State} */function after(code){return code===null||asciiControl(code)||unicodeWhitespace(code)||unicodePunctuation(code)?nok(code):effects.attempt(domain,effects.attempt(path,done),nok)(code);}/** @type {State} */function done(code){effects.exit('literalAutolinkHttp');effects.exit('literalAutolink');return ok(code);}}/** @type {Tokenizer} */function tokenizeWww(effects,ok,nok){return start;/** @type {State} */function start(code){effects.consume(code);return w2;}/** @type {State} */function w2(code){if(code===87||code===119){effects.consume(code);return w3;}return nok(code);}/** @type {State} */function w3(code){if(code===87||code===119){effects.consume(code);return dot;}return nok(code);}/** @type {State} */function dot(code){if(code===46){effects.consume(code);return after;}return nok(code);}/** @type {State} */function after(code){return code===null||markdownLineEnding(code)?nok(code):ok(code);}}/** @type {Tokenizer} */function tokenizeDomain(effects,ok,nok){/** @type {boolean|undefined} */var hasUnderscoreInLastSegment;/** @type {boolean|undefined} */var hasUnderscoreInLastLastSegment;return domain;/** @type {State} */function domain(code){if(code===38){return effects.check(namedCharacterReference,done,punctuationContinuation)(code);}if(code===46||code===95){return effects.check(punctuation,done,punctuationContinuation)(code);}// GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
// occur, which sounds like ASCII only, but they also support `www.點看.com`,
// so that’s Unicode.
// Instead of some new production for Unicode alphanumerics, markdown
// already has that for Unicode punctuation and whitespace, so use those.
if(code===null||asciiControl(code)||unicodeWhitespace(code)||code!==45&&unicodePunctuation(code)){return done(code);}effects.consume(code);return domain;}/** @type {State} */function punctuationContinuation(code){if(code===46){hasUnderscoreInLastLastSegment=hasUnderscoreInLastSegment;hasUnderscoreInLastSegment=undefined;effects.consume(code);return domain;}if(code===95)hasUnderscoreInLastSegment=true;effects.consume(code);return domain;}/** @type {State} */function done(code){if(!hasUnderscoreInLastLastSegment&&!hasUnderscoreInLastSegment){return ok(code);}return nok(code);}}/** @type {Tokenizer} */function tokenizePath(effects,ok){var balance=0;return inPath;/** @type {State} */function inPath(code){if(code===38){return effects.check(namedCharacterReference,ok,continuedPunctuation)(code);}if(code===40){balance++;}if(code===41){return effects.check(punctuation,parenAtPathEnd,continuedPunctuation)(code);}if(pathEnd(code)){return ok(code);}if(trailingPunctuation(code)){return effects.check(punctuation,ok,continuedPunctuation)(code);}effects.consume(code);return inPath;}/** @type {State} */function continuedPunctuation(code){effects.consume(code);return inPath;}/** @type {State} */function parenAtPathEnd(code){balance--;return balance<0?ok(code):continuedPunctuation(code);}}/** @type {Tokenizer} */function tokenizeNamedCharacterReference(effects,ok,nok){return start;/** @type {State} */function start(code){effects.consume(code);return inside;}/** @type {State} */function inside(code){if(asciiAlpha(code)){effects.consume(code);return inside;}if(code===59){effects.consume(code);return after;}return nok(code);}/** @type {State} */function after(code){// If the named character reference is followed by the end of the path, it’s
// not continued punctuation.
return pathEnd(code)?ok(code):nok(code);}}/** @type {Tokenizer} */function tokenizePunctuation(effects,ok,nok){return start;/** @type {State} */function start(code){effects.consume(code);return after;}/** @type {State} */function after(code){// Check the next.
if(trailingPunctuation(code)){effects.consume(code);return after;}// If the punctuation marker is followed by the end of the path, it’s not
// continued punctuation.
return pathEnd(code)?ok(code):nok(code);}}/**
       * @param {Code} code
       * @returns {boolean}
       */function trailingPunctuation(code){return code===33||code===34||code===39||code===41||code===42||code===44||code===46||code===58||code===59||code===60||code===63||code===95||code===126;}/**
       * @param {Code} code
       * @returns {boolean}
       */function pathEnd(code){return code===null||code===60||markdownLineEndingOrSpace(code);}/**
       * @param {Code} code
       * @returns {boolean}
       */function gfmAtext(code){return code===43||code===45||code===46||code===95||asciiAlphanumeric(code);}/** @type {Previous} */function previousWww(code){return code===null||code===40||code===42||code===95||code===126||markdownLineEndingOrSpace(code);}/** @type {Previous} */function previousHttp(code){return code===null||!asciiAlpha(code);}/** @type {Previous} */function previousEmail(code){return code!==47&&previousHttp(code);}/**
       * @param {Array<Event>} events
       * @returns {boolean}
       */function previousUnbalanced(events){var index=events.length;var result=false;while(index--){var token=events[index][1];if((token.type==='labelLink'||token.type==='labelImage')&&!token._balanced){result=true;break;}// @ts-expect-error If we’ve seen this token, and it was marked as not
// having any unbalanced bracket before it, we can exit.
if(token._gfmAutolinkLiteralWalkedInto){result=false;break;}}if(events.length>0&&!result){// @ts-expect-error Mark the last token as “walked into” w/o finding
// anything.
events[events.length-1][1]._gfmAutolinkLiteralWalkedInto=true;}return result;}/**
       * @typedef {import('micromark-util-types').Extension} Extension
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Exiter} Exiter
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Event} Event
       */var indent={tokenize:tokenizeIndent,partial:true};/**
       * @returns {Extension}
       */function gfmFootnote(){var _text;/** @type {Extension} */return{document:_defineProperty({},91,{tokenize:tokenizeDefinitionStart,continuation:{tokenize:tokenizeDefinitionContinuation},exit:gfmFootnoteDefinitionEnd}),text:(_text={},_defineProperty(_text,91,{tokenize:tokenizeGfmFootnoteCall}),_defineProperty(_text,93,{add:'after',tokenize:tokenizePotentialGfmFootnoteCall,resolveTo:resolveToPotentialGfmFootnoteCall}),_text)};}/** @type {Tokenizer} */function tokenizePotentialGfmFootnoteCall(effects,ok,nok){var self=this;var index=self.events.length;/** @type {Array<string>} */ // @ts-expect-error It’s fine!
var defined=self.parser.gfmFootnotes||(self.parser.gfmFootnotes=[]);/** @type {Token} */var labelStart;// Find an opening.
while(index--){var token=self.events[index][1];if(token.type==='labelImage'){labelStart=token;break;}// Exit if we’ve walked far enough.
if(token.type==='gfmFootnoteCall'||token.type==='labelLink'||token.type==='label'||token.type==='image'||token.type==='link'){break;}}return start;/** @type {State} */function start(code){if(!labelStart||!labelStart._balanced){return nok(code);}var id=normalizeIdentifier(self.sliceSerialize({start:labelStart.end,end:self.now()}));if(id.charCodeAt(0)!==94||!defined.includes(id.slice(1))){return nok(code);}effects.enter('gfmFootnoteCallLabelMarker');effects.consume(code);effects.exit('gfmFootnoteCallLabelMarker');return ok(code);}}/** @type {Resolver} */function resolveToPotentialGfmFootnoteCall(events,context){var index=events.length;while(index--){if(events[index][1].type==='labelImage'&&events[index][0]==='enter'){events[index][1];break;}}// Change the `labelImageMarker` to a `data`.
events[index+1][1].type='data';events[index+3][1].type='gfmFootnoteCallLabelMarker';// The whole (without `!`):
var call={type:'gfmFootnoteCall',start:Object.assign({},events[index+3][1].start),end:Object.assign({},events[events.length-1][1].end)};// The `^` marker
var marker={type:'gfmFootnoteCallMarker',start:Object.assign({},events[index+3][1].end),end:Object.assign({},events[index+3][1].end)};// Increment the end 1 character.
marker.end.column++;marker.end.offset++;marker.end._bufferIndex++;var string={type:'gfmFootnoteCallString',start:Object.assign({},marker.end),end:Object.assign({},events[events.length-1][1].start)};var chunk={type:'chunkString',contentType:'string',start:Object.assign({},string.start),end:Object.assign({},string.end)};/** @type {Array<Event>} */var replacement=[// Take the `labelImageMarker` (now `data`, the `!`)
events[index+1],events[index+2],['enter',call,context],// The `[`
events[index+3],events[index+4],// The `^`.
['enter',marker,context],['exit',marker,context],// Everything in between.
['enter',string,context],['enter',chunk,context],['exit',chunk,context],['exit',string,context],// The ending (`]`, properly parsed and labelled).
events[events.length-2],events[events.length-1],['exit',call,context]];events.splice.apply(events,[index,events.length-index+1].concat(replacement));return events;}/** @type {Tokenizer} */function tokenizeGfmFootnoteCall(effects,ok,nok){var self=this;/** @type {Array<string>} */ // @ts-expect-error It’s fine!
var defined=self.parser.gfmFootnotes||(self.parser.gfmFootnotes=[]);var size=0;/** @type {boolean} */var data;return start;/** @type {State} */function start(code){effects.enter('gfmFootnoteCall');effects.enter('gfmFootnoteCallLabelMarker');effects.consume(code);effects.exit('gfmFootnoteCallLabelMarker');return callStart;}/** @type {State} */function callStart(code){if(code!==94)return nok(code);effects.enter('gfmFootnoteCallMarker');effects.consume(code);effects.exit('gfmFootnoteCallMarker');effects.enter('gfmFootnoteCallString');effects.enter('chunkString').contentType='string';return callData;}/** @type {State} */function callData(code){/** @type {Token} */var token;if(code===null||code===91||size++>999){return nok(code);}if(code===93){if(!data){return nok(code);}effects.exit('chunkString');token=effects.exit('gfmFootnoteCallString');return defined.includes(normalizeIdentifier(self.sliceSerialize(token)))?end(code):nok(code);}effects.consume(code);if(!markdownLineEndingOrSpace(code)){data=true;}return code===92?callEscape:callData;}/** @type {State} */function callEscape(code){if(code===91||code===92||code===93){effects.consume(code);size++;return callData;}return callData(code);}/** @type {State} */function end(code){effects.enter('gfmFootnoteCallLabelMarker');effects.consume(code);effects.exit('gfmFootnoteCallLabelMarker');effects.exit('gfmFootnoteCall');return ok;}}/** @type {Tokenizer} */function tokenizeDefinitionStart(effects,ok,nok){var self=this;/** @type {Array<string>} */ // @ts-expect-error It’s fine!
var defined=self.parser.gfmFootnotes||(self.parser.gfmFootnotes=[]);/** @type {string} */var identifier;var size=0;/** @type {boolean|undefined} */var data;return start;/** @type {State} */function start(code){effects.enter('gfmFootnoteDefinition')._container=true;effects.enter('gfmFootnoteDefinitionLabel');effects.enter('gfmFootnoteDefinitionLabelMarker');effects.consume(code);effects.exit('gfmFootnoteDefinitionLabelMarker');return labelStart;}/** @type {State} */function labelStart(code){if(code===94){effects.enter('gfmFootnoteDefinitionMarker');effects.consume(code);effects.exit('gfmFootnoteDefinitionMarker');effects.enter('gfmFootnoteDefinitionLabelString');return atBreak;}return nok(code);}/** @type {State} */function atBreak(code){/** @type {Token} */var token;if(code===null||code===91||size>999){return nok(code);}if(code===93){if(!data){return nok(code);}token=effects.exit('gfmFootnoteDefinitionLabelString');identifier=normalizeIdentifier(self.sliceSerialize(token));effects.enter('gfmFootnoteDefinitionLabelMarker');effects.consume(code);effects.exit('gfmFootnoteDefinitionLabelMarker');effects.exit('gfmFootnoteDefinitionLabel');return labelAfter;}if(markdownLineEnding(code)){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');size++;return atBreak;}effects.enter('chunkString').contentType='string';return label(code);}/** @type {State} */function label(code){if(code===null||markdownLineEnding(code)||code===91||code===93||size>999){effects.exit('chunkString');return atBreak(code);}if(!markdownLineEndingOrSpace(code)){data=true;}size++;effects.consume(code);return code===92?labelEscape:label;}/** @type {State} */function labelEscape(code){if(code===91||code===92||code===93){effects.consume(code);size++;return label;}return label(code);}/** @type {State} */function labelAfter(code){if(code===58){effects.enter('definitionMarker');effects.consume(code);effects.exit('definitionMarker');// Any whitespace after the marker is eaten, forming indented code
// is not possible.
// No space is also fine, just like a block quote marker.
return factorySpace(effects,done,'gfmFootnoteDefinitionWhitespace');}return nok(code);}/** @type {State} */function done(code){if(!defined.includes(identifier)){defined.push(identifier);}return ok(code);}}/** @type {Tokenizer} */function tokenizeDefinitionContinuation(effects,ok,nok){// Either a blank line, which is okay, or an indented thing.
return effects.check(blankLine,ok,effects.attempt(indent,ok,nok));}/** @type {Exiter} */function gfmFootnoteDefinitionEnd(effects){effects.exit('gfmFootnoteDefinition');}/** @type {Tokenizer} */function tokenizeIndent(effects,ok,nok){var self=this;return factorySpace(effects,afterPrefix,'gfmFootnoteDefinitionIndent',4+1);/** @type {State} */function afterPrefix(code){var tail=self.events[self.events.length-1];return tail&&tail[1].type==='gfmFootnoteDefinitionIndent'&&tail[2].sliceSerialize(tail[1],true).length===4?ok(code):nok(code);}}/**
       * @typedef {import('micromark-util-types').Extension} Extension
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Token} Token
       * @typedef {import('micromark-util-types').Event} Event
       */ /**
       * @param {Options} [options]
       * @returns {Extension}
       */function gfmStrikethrough(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var single=options.singleTilde;var tokenizer={tokenize:tokenizeStrikethrough,resolveAll:resolveAllStrikethrough};if(single===null||single===undefined){single=true;}return{text:_defineProperty({},126,tokenizer),insideSpan:{null:[tokenizer]},attentionMarkers:{null:[126]}};/**
         * Take events and resolve strikethrough.
         *
         * @type {Resolver}
         */function resolveAllStrikethrough(events,context){var index=-1;// Walk through all events.
while(++index<events.length){// Find a token that can close.
if(events[index][0]==='enter'&&events[index][1].type==='strikethroughSequenceTemporary'&&events[index][1]._close){var open=index;// Now walk back to find an opener.
while(open--){// Find a token that can open the closer.
if(events[open][0]==='exit'&&events[open][1].type==='strikethroughSequenceTemporary'&&events[open][1]._open&&// If the sizes are the same:
events[index][1].end.offset-events[index][1].start.offset===events[open][1].end.offset-events[open][1].start.offset){events[index][1].type='strikethroughSequence';events[open][1].type='strikethroughSequence';var _strikethrough={type:'strikethrough',start:Object.assign({},events[open][1].start),end:Object.assign({},events[index][1].end)};var _text3={type:'strikethroughText',start:Object.assign({},events[open][1].end),end:Object.assign({},events[index][1].start)};// Opening.
var nextEvents=[['enter',_strikethrough,context],['enter',events[open][1],context],['exit',events[open][1],context],['enter',_text3,context]];// Between.
splice(nextEvents,nextEvents.length,0,resolveAll(context.parser.constructs.insideSpan.null,events.slice(open+1,index),context));// Closing.
splice(nextEvents,nextEvents.length,0,[['exit',_text3,context],['enter',events[index][1],context],['exit',events[index][1],context],['exit',_strikethrough,context]]);splice(events,open-1,index-open+3,nextEvents);index=open+nextEvents.length-2;break;}}}}index=-1;while(++index<events.length){if(events[index][1].type==='strikethroughSequenceTemporary'){events[index][1].type='data';}}return events;}/** @type {Tokenizer} */function tokenizeStrikethrough(effects,ok,nok){var previous=this.previous;var events=this.events;var size=0;return start;/** @type {State} */function start(code){if(previous===126&&events[events.length-1][1].type!=='characterEscape'){return nok(code);}effects.enter('strikethroughSequenceTemporary');return more(code);}/** @type {State} */function more(code){var before=classifyCharacter(previous);if(code===126){// If this is the third marker, exit.
if(size>1)return nok(code);effects.consume(code);size++;return more;}if(size<2&&!single)return nok(code);var token=effects.exit('strikethroughSequenceTemporary');var after=classifyCharacter(code);token._open=!after||after===2&&Boolean(before);token._close=!before||before===2&&Boolean(after);return ok(code);}}}/**
       * @typedef {import('micromark-util-types').Extension} Extension
       * @typedef {import('micromark-util-types').Resolver} Resolver
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Token} Token
       */ /** @type {Extension} */var gfmTable={flow:{null:{tokenize:tokenizeTable,resolve:resolveTable}}};var nextPrefixedOrBlank={tokenize:tokenizeNextPrefixedOrBlank,partial:true};/** @type {Resolver} */function resolveTable(events,context){var index=-1;/** @type {boolean|undefined} */var inHead;/** @type {boolean|undefined} */var inDelimiterRow;/** @type {boolean|undefined} */var inRow;/** @type {number|undefined} */var contentStart;/** @type {number|undefined} */var contentEnd;/** @type {number|undefined} */var cellStart;/** @type {boolean|undefined} */var seenCellInRow;while(++index<events.length){var token=events[index][1];if(inRow){if(token.type==='temporaryTableCellContent'){contentStart=contentStart||index;contentEnd=index;}if(// Combine separate content parts into one.
(token.type==='tableCellDivider'||token.type==='tableRow')&&contentEnd){var _content2={type:'tableContent',start:events[contentStart][1].start,end:events[contentEnd][1].end};/** @type {Token} */var _text4={type:'chunkText',start:_content2.start,end:_content2.end,// @ts-expect-error It’s fine.
contentType:'text'};events.splice(contentStart,contentEnd-contentStart+1,['enter',_content2,context],['enter',_text4,context],['exit',_text4,context],['exit',_content2,context]);index-=contentEnd-contentStart-3;contentStart=undefined;contentEnd=undefined;}}if(events[index][0]==='exit'&&cellStart!==undefined&&cellStart+(seenCellInRow?0:1)<index&&(token.type==='tableCellDivider'||token.type==='tableRow'&&(cellStart+3<index||events[cellStart][1].type!=='whitespace'))){var _cell2={type:inDelimiterRow?'tableDelimiter':inHead?'tableHeader':'tableData',start:events[cellStart][1].start,end:events[index][1].end};events.splice(index+(token.type==='tableCellDivider'?1:0),0,['exit',_cell2,context]);events.splice(cellStart,0,['enter',_cell2,context]);index+=2;cellStart=index+1;seenCellInRow=true;}if(token.type==='tableRow'){inRow=events[index][0]==='enter';if(inRow){cellStart=index+1;seenCellInRow=false;}}if(token.type==='tableDelimiterRow'){inDelimiterRow=events[index][0]==='enter';if(inDelimiterRow){cellStart=index+1;seenCellInRow=false;}}if(token.type==='tableHead'){inHead=events[index][0]==='enter';}}return events;}/** @type {Tokenizer} */function tokenizeTable(effects,ok,nok){var self=this;/** @type {Array<Align>} */var align=[];var tableHeaderCount=0;/** @type {boolean|undefined} */var seenDelimiter;/** @type {boolean|undefined} */var hasDash;return start;/** @type {State} */function start(code){// @ts-expect-error Custom.
effects.enter('table')._align=align;effects.enter('tableHead');effects.enter('tableRow');// If we start with a pipe, we open a cell marker.
if(code===124){return cellDividerHead(code);}tableHeaderCount++;effects.enter('temporaryTableCellContent');// Can’t be space or eols at the start of a construct, so we’re in a cell.
return inCellContentHead(code);}/** @type {State} */function cellDividerHead(code){effects.enter('tableCellDivider');effects.consume(code);effects.exit('tableCellDivider');seenDelimiter=true;return cellBreakHead;}/** @type {State} */function cellBreakHead(code){if(code===null||markdownLineEnding(code)){return atRowEndHead(code);}if(markdownSpace(code)){effects.enter('whitespace');effects.consume(code);return inWhitespaceHead;}if(seenDelimiter){seenDelimiter=undefined;tableHeaderCount++;}if(code===124){return cellDividerHead(code);}// Anything else is cell content.
effects.enter('temporaryTableCellContent');return inCellContentHead(code);}/** @type {State} */function inWhitespaceHead(code){if(markdownSpace(code)){effects.consume(code);return inWhitespaceHead;}effects.exit('whitespace');return cellBreakHead(code);}/** @type {State} */function inCellContentHead(code){// EOF, whitespace, pipe
if(code===null||code===124||markdownLineEndingOrSpace(code)){effects.exit('temporaryTableCellContent');return cellBreakHead(code);}effects.consume(code);return code===92?inCellContentEscapeHead:inCellContentHead;}/** @type {State} */function inCellContentEscapeHead(code){if(code===92||code===124){effects.consume(code);return inCellContentHead;}// Anything else.
return inCellContentHead(code);}/** @type {State} */function atRowEndHead(code){if(code===null){return nok(code);}effects.exit('tableRow');effects.exit('tableHead');var originalInterrupt=self.interrupt;self.interrupt=true;return effects.attempt({tokenize:tokenizeRowEnd,partial:true},function(code){self.interrupt=originalInterrupt;effects.enter('tableDelimiterRow');return atDelimiterRowBreak(code);},function(code){self.interrupt=originalInterrupt;return nok(code);})(code);}/** @type {State} */function atDelimiterRowBreak(code){if(code===null||markdownLineEnding(code)){return rowEndDelimiter(code);}if(markdownSpace(code)){effects.enter('whitespace');effects.consume(code);return inWhitespaceDelimiter;}if(code===45){effects.enter('tableDelimiterFiller');effects.consume(code);hasDash=true;align.push('none');return inFillerDelimiter;}if(code===58){effects.enter('tableDelimiterAlignment');effects.consume(code);effects.exit('tableDelimiterAlignment');align.push('left');return afterLeftAlignment;}// If we start with a pipe, we open a cell marker.
if(code===124){effects.enter('tableCellDivider');effects.consume(code);effects.exit('tableCellDivider');return atDelimiterRowBreak;}return nok(code);}/** @type {State} */function inWhitespaceDelimiter(code){if(markdownSpace(code)){effects.consume(code);return inWhitespaceDelimiter;}effects.exit('whitespace');return atDelimiterRowBreak(code);}/** @type {State} */function inFillerDelimiter(code){if(code===45){effects.consume(code);return inFillerDelimiter;}effects.exit('tableDelimiterFiller');if(code===58){effects.enter('tableDelimiterAlignment');effects.consume(code);effects.exit('tableDelimiterAlignment');align[align.length-1]=align[align.length-1]==='left'?'center':'right';return afterRightAlignment;}return atDelimiterRowBreak(code);}/** @type {State} */function afterLeftAlignment(code){if(code===45){effects.enter('tableDelimiterFiller');effects.consume(code);hasDash=true;return inFillerDelimiter;}// Anything else is not ok.
return nok(code);}/** @type {State} */function afterRightAlignment(code){if(code===null||markdownLineEnding(code)){return rowEndDelimiter(code);}if(markdownSpace(code)){effects.enter('whitespace');effects.consume(code);return inWhitespaceDelimiter;}// `|`
if(code===124){effects.enter('tableCellDivider');effects.consume(code);effects.exit('tableCellDivider');return atDelimiterRowBreak;}return nok(code);}/** @type {State} */function rowEndDelimiter(code){effects.exit('tableDelimiterRow');// Exit if there was no dash at all, or if the header cell count is not the
// delimiter cell count.
if(!hasDash||tableHeaderCount!==align.length){return nok(code);}if(code===null){return tableClose(code);}return effects.check(nextPrefixedOrBlank,tableClose,effects.attempt({tokenize:tokenizeRowEnd,partial:true},factorySpace(effects,bodyStart,'linePrefix',4),tableClose))(code);}/** @type {State} */function tableClose(code){effects.exit('table');return ok(code);}/** @type {State} */function bodyStart(code){effects.enter('tableBody');return rowStartBody(code);}/** @type {State} */function rowStartBody(code){effects.enter('tableRow');// If we start with a pipe, we open a cell marker.
if(code===124){return cellDividerBody(code);}effects.enter('temporaryTableCellContent');// Can’t be space or eols at the start of a construct, so we’re in a cell.
return inCellContentBody(code);}/** @type {State} */function cellDividerBody(code){effects.enter('tableCellDivider');effects.consume(code);effects.exit('tableCellDivider');return cellBreakBody;}/** @type {State} */function cellBreakBody(code){if(code===null||markdownLineEnding(code)){return atRowEndBody(code);}if(markdownSpace(code)){effects.enter('whitespace');effects.consume(code);return inWhitespaceBody;}// `|`
if(code===124){return cellDividerBody(code);}// Anything else is cell content.
effects.enter('temporaryTableCellContent');return inCellContentBody(code);}/** @type {State} */function inWhitespaceBody(code){if(markdownSpace(code)){effects.consume(code);return inWhitespaceBody;}effects.exit('whitespace');return cellBreakBody(code);}/** @type {State} */function inCellContentBody(code){// EOF, whitespace, pipe
if(code===null||code===124||markdownLineEndingOrSpace(code)){effects.exit('temporaryTableCellContent');return cellBreakBody(code);}effects.consume(code);return code===92?inCellContentEscapeBody:inCellContentBody;}/** @type {State} */function inCellContentEscapeBody(code){if(code===92||code===124){effects.consume(code);return inCellContentBody;}// Anything else.
return inCellContentBody(code);}/** @type {State} */function atRowEndBody(code){effects.exit('tableRow');if(code===null){return tableBodyClose(code);}return effects.check(nextPrefixedOrBlank,tableBodyClose,effects.attempt({tokenize:tokenizeRowEnd,partial:true},factorySpace(effects,rowStartBody,'linePrefix',4),tableBodyClose))(code);}/** @type {State} */function tableBodyClose(code){effects.exit('tableBody');return tableClose(code);}/** @type {Tokenizer} */function tokenizeRowEnd(effects,ok,nok){return start;/** @type {State} */function start(code){effects.enter('lineEnding');effects.consume(code);effects.exit('lineEnding');return factorySpace(effects,prefixed,'linePrefix');}/** @type {State} */function prefixed(code){// Blank or interrupting line.
if(self.parser.lazy[self.now().line]||code===null||markdownLineEnding(code)){return nok(code);}var tail=self.events[self.events.length-1];// Indented code can interrupt delimiter and body rows.
if(!self.parser.constructs.disable.null.includes('codeIndented')&&tail&&tail[1].type==='linePrefix'&&tail[2].sliceSerialize(tail[1],true).length>=4){return nok(code);}self._gfmTableDynamicInterruptHack=true;return effects.check(self.parser.constructs.flow,function(code){self._gfmTableDynamicInterruptHack=false;return nok(code);},function(code){self._gfmTableDynamicInterruptHack=false;return ok(code);})(code);}}}/** @type {Tokenizer} */function tokenizeNextPrefixedOrBlank(effects,ok,nok){var size=0;return start;/** @type {State} */function start(code){// This is a check, so we don’t care about tokens, but we open a bogus one
// so we’re valid.
effects.enter('check');// EOL.
effects.consume(code);return whitespace;}/** @type {State} */function whitespace(code){if(code===-1||code===32){effects.consume(code);size++;return size===4?ok:whitespace;}// EOF or whitespace
if(code===null||markdownLineEndingOrSpace(code)){return ok(code);}// Anything else.
return nok(code);}}/**
       * @typedef {import('micromark-util-types').Extension} Extension
       * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
       * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
       * @typedef {import('micromark-util-types').Previous} Previous
       * @typedef {import('micromark-util-types').State} State
       * @typedef {import('micromark-util-types').Event} Event
       * @typedef {import('micromark-util-types').Code} Code
       */var tasklistCheck={tokenize:tokenizeTasklistCheck};var gfmTaskListItem={text:_defineProperty({},91,tasklistCheck)};/** @type {Tokenizer} */function tokenizeTasklistCheck(effects,ok,nok){var self=this;return open;/** @type {State} */function open(code){if(// Exit if there’s stuff before.
self.previous!==null||// Exit if not in the first content that is the first child of a list
// item.
!self._gfmTasklistFirstContentOfListItem){return nok(code);}effects.enter('taskListCheck');effects.enter('taskListCheckMarker');effects.consume(code);effects.exit('taskListCheckMarker');return inside;}/** @type {State} */function inside(code){// To match how GH works in comments, use `markdownSpace` (`[ \t]`) instead
// of `markdownLineEndingOrSpace` (`[ \t\r\n]`).
if(markdownLineEndingOrSpace(code)){effects.enter('taskListCheckValueUnchecked');effects.consume(code);effects.exit('taskListCheckValueUnchecked');return close;}if(code===88||code===120){effects.enter('taskListCheckValueChecked');effects.consume(code);effects.exit('taskListCheckValueChecked');return close;}return nok(code);}/** @type {State} */function close(code){if(code===93){effects.enter('taskListCheckMarker');effects.consume(code);effects.exit('taskListCheckMarker');effects.exit('taskListCheck');return effects.check({tokenize:spaceThenNonSpace},ok,nok);}return nok(code);}}/** @type {Tokenizer} */function spaceThenNonSpace(effects,ok,nok){var self=this;return factorySpace(effects,after,'whitespace');/** @type {State} */function after(code){var tail=self.events[self.events.length-1];return(// We either found spaces…
(tail&&tail[1].type==='whitespace'||// …or it was followed by a line ending, in which case, there has to be
// non-whitespace after that line ending, because otherwise we’d get an
// EOF as the content is closed with blank lines.
markdownLineEnding(code))&&code!==null?ok(code):nok(code));}}/**
       * @typedef {import('micromark-util-types').Extension} Extension
       * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
       * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options
       * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions
       */ /**
       * Support GFM or markdown on github.com.
       *
       * @param {Options} [options]
       * @returns {Extension}
       */function gfm(options){return combineExtensions([gfmAutolinkLiteral,gfmFootnote(),gfmStrikethrough(options),gfmTable,gfmTaskListItem]);}/**
       * Count how often a character (or substring) is used in a string.
       *
       * @param {string} value
       *   Value to search in.
       * @param {string} character
       *   Character (or substring) to look for.
       * @return {number}
       *   Number of times `character` occurred in `value`.
       */function ccount(value,character){var source=String(value);if(typeof character!=='string'){throw new TypeError('Expected character');}var count=0;var index=source.indexOf(character);while(index!==-1){count++;index=source.indexOf(character,index+character.length);}return count;}function escapeStringRegexp(string){if(typeof string!=='string'){throw new TypeError('Expected a string');}// Escape characters with special meaning either inside or outside character sets.
// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
return string.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&').replace(/-/g,'\\x2d');}/**
       * @typedef Options Configuration.
       * @property {Test} [ignore] `unist-util-is` test used to assert parents
       *
       * @typedef {import('mdast').Root} Root
       * @typedef {import('mdast').Content} Content
       * @typedef {import('mdast').PhrasingContent} PhrasingContent
       * @typedef {import('mdast').Text} Text
       * @typedef {Content|Root} Node
       * @typedef {Extract<Node, import('mdast').Parent>} Parent
       *
       * @typedef {import('unist-util-visit-parents').Test} Test
       * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
       *
       * @typedef RegExpMatchObject
       * @property {number} index
       * @property {string} input
       *
       * @typedef {string|RegExp} Find
       * @typedef {string|ReplaceFunction} Replace
       *
       * @typedef {[Find, Replace]} FindAndReplaceTuple
       * @typedef {Object.<string, Replace>} FindAndReplaceSchema
       * @typedef {Array.<FindAndReplaceTuple>} FindAndReplaceList
       *
       * @typedef {[RegExp, ReplaceFunction]} Pair
       * @typedef {Array.<Pair>} Pairs
       */var own$7={}.hasOwnProperty;/**
       * @param tree mdast tree
       * @param find Value to find and remove. When `string`, escaped and made into a global `RegExp`
       * @param [replace] Value to insert.
       *   * When `string`, turned into a Text node.
       *   * When `Function`, called with the results of calling `RegExp.exec` as
       *     arguments, in which case it can return a single or a list of `Node`,
       *     a `string` (which is wrapped in a `Text` node), or `false` to not replace
       * @param [options] Configuration.
       */var findAndReplace=/**
         * @type {(
         *   ((tree: Node, find: Find, replace?: Replace, options?: Options) => Node) &
         *   ((tree: Node, schema: FindAndReplaceSchema|FindAndReplaceList, options?: Options) => Node)
         * )}
         **/ /**
           * @param {Node} tree
           * @param {Find|FindAndReplaceSchema|FindAndReplaceList} find
           * @param {Replace|Options} [replace]
           * @param {Options} [options]
           */function findAndReplace(tree,find,replace,options){/** @type {Options|undefined} */var settings;/** @type {FindAndReplaceSchema|FindAndReplaceList} */var schema;if(typeof find==='string'||find instanceof RegExp){// @ts-expect-error don’t expect options twice.
schema=[[find,replace]];settings=options;}else{schema=find;// @ts-expect-error don’t expect replace twice.
settings=replace;}if(!settings){settings={};}var ignored=convert(settings.ignore||[]);var pairs=toPairs(schema);var pairIndex=-1;while(++pairIndex<pairs.length){visitParents(tree,'text',visitor);}return tree;/** @type {import('unist-util-visit-parents').Visitor<Text>} */function visitor(node,parents){var index=-1;/** @type {Parent|undefined} */var grandparent;while(++index<parents.length){var parent=/** @type {Parent} */parents[index];if(ignored(parent,// @ts-expect-error mdast vs. unist parent.
grandparent?grandparent.children.indexOf(parent):undefined,grandparent)){return;}grandparent=parent;}if(grandparent){return handler(node,grandparent);}}/**
             * @param {Text} node
             * @param {Parent} parent
             * @returns {VisitorResult}
             */function handler(node,parent){var find=pairs[pairIndex][0];var replace=pairs[pairIndex][1];var start=0;// @ts-expect-error: TS is wrong, some of these children can be text.
var index=parent.children.indexOf(node);/** @type {Array.<PhrasingContent>} */var nodes=[];/** @type {number|undefined} */var position;find.lastIndex=0;var match=find.exec(node.value);while(match){position=match.index;// @ts-expect-error this is perfectly fine, typescript.
var value=replace.apply(void 0,_toConsumableArray(match).concat([{index:match.index,input:match.input}]));if(typeof value==='string'){value=value.length>0?{type:'text',value:value}:undefined;}if(value!==false){if(start!==position){nodes.push({type:'text',value:node.value.slice(start,position)});}if(Array.isArray(value)){var _nodes2;(_nodes2=nodes).push.apply(_nodes2,_toConsumableArray(value));}else if(value){nodes.push(value);}start=position+match[0].length;}if(!find.global){break;}match=find.exec(node.value);}if(position===undefined){nodes=[node];index--;}else{var _parent$children2;if(start<node.value.length){nodes.push({type:'text',value:node.value.slice(start)});}(_parent$children2=parent.children).splice.apply(_parent$children2,[index,1].concat(_toConsumableArray(nodes)));}return index+nodes.length+1;}};/**
       * @param {FindAndReplaceSchema|FindAndReplaceList} schema
       * @returns {Pairs}
       */function toPairs(schema){/** @type {Pairs} */var result=[];if(_typeof(schema)!=='object'){throw new TypeError('Expected array or object as schema');}if(Array.isArray(schema)){var _index6=-1;while(++_index6<schema.length){result.push([toExpression(schema[_index6][0]),toFunction(schema[_index6][1])]);}}else{/** @type {string} */var key;for(key in schema){if(own$7.call(schema,key)){result.push([toExpression(key),toFunction(schema[key])]);}}}return result;}/**
       * @param {Find} find
       * @returns {RegExp}
       */function toExpression(find){return typeof find==='string'?new RegExp(escapeStringRegexp(find),'g'):find;}/**
       * @param {Replace} replace
       * @returns {ReplaceFunction}
       */function toFunction(replace){return typeof replace==='function'?replace:function(){return replace;};}/**
       * @typedef {import('mdast').Link} Link
       * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
       * @typedef {import('mdast-util-from-markdown').Transform} FromMarkdownTransform
       * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
       * @typedef {import('mdast-util-to-markdown/lib/types.js').Options} ToMarkdownExtension
       * @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction
       * @typedef {import('mdast-util-find-and-replace').RegExpMatchObject} RegExpMatchObject
       * @typedef {import('mdast-util-find-and-replace').PhrasingContent} PhrasingContent
       */var inConstruct='phrasing';var notInConstruct=['autolink','link','image','label'];/** @type {FromMarkdownExtension} */var gfmAutolinkLiteralFromMarkdown={transforms:[transformGfmAutolinkLiterals],enter:{literalAutolink:enterLiteralAutolink,literalAutolinkEmail:enterLiteralAutolinkValue,literalAutolinkHttp:enterLiteralAutolinkValue,literalAutolinkWww:enterLiteralAutolinkValue},exit:{literalAutolink:exitLiteralAutolink,literalAutolinkEmail:exitLiteralAutolinkEmail,literalAutolinkHttp:exitLiteralAutolinkHttp,literalAutolinkWww:exitLiteralAutolinkWww}};/** @type {ToMarkdownExtension} */var gfmAutolinkLiteralToMarkdown={unsafe:[{character:'@',before:'[+\\-.\\w]',after:'[\\-.\\w]',inConstruct:inConstruct,notInConstruct:notInConstruct},{character:'.',before:'[Ww]',after:'[\\-.\\w]',inConstruct:inConstruct,notInConstruct:notInConstruct},{character:':',before:'[ps]',after:'\\/',inConstruct:inConstruct,notInConstruct:notInConstruct}]};/** @type {FromMarkdownHandle} */function enterLiteralAutolink(token){this.enter({type:'link',title:null,url:'',children:[]},token);}/** @type {FromMarkdownHandle} */function enterLiteralAutolinkValue(token){this.config.enter.autolinkProtocol.call(this,token);}/** @type {FromMarkdownHandle} */function exitLiteralAutolinkHttp(token){this.config.exit.autolinkProtocol.call(this,token);}/** @type {FromMarkdownHandle} */function exitLiteralAutolinkWww(token){this.config.exit.data.call(this,token);var node=/** @type {Link} */this.stack[this.stack.length-1];node.url='http://'+this.sliceSerialize(token);}/** @type {FromMarkdownHandle} */function exitLiteralAutolinkEmail(token){this.config.exit.autolinkEmail.call(this,token);}/** @type {FromMarkdownHandle} */function exitLiteralAutolink(token){this.exit(token);}/** @type {FromMarkdownTransform} */function transformGfmAutolinkLiterals(tree){findAndReplace(tree,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,findUrl],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,findEmail]],{ignore:['link','linkReference']});}/**
       * @type {ReplaceFunction}
       * @param {string} _
       * @param {string} protocol
       * @param {string} domain
       * @param {string} path
       * @param {RegExpMatchObject} match
       */ // eslint-disable-next-line max-params
function findUrl(_,protocol,domain,path,match){var prefix='';// Not an expected previous character.
if(!previous(match)){return false;}// Treat `www` as part of the domain.
if(/^w/i.test(protocol)){domain=protocol+domain;protocol='';prefix='http://';}if(!isCorrectDomain(domain)){return false;}var parts=splitUrl(domain+path);if(!parts[0])return false;/** @type {PhrasingContent} */var result={type:'link',title:null,url:prefix+protocol+parts[0],children:[{type:'text',value:protocol+parts[0]}]};if(parts[1]){return[result,{type:'text',value:parts[1]}];}return result;}/**
       * @type {ReplaceFunction}
       * @param {string} _
       * @param {string} atext
       * @param {string} label
       * @param {RegExpMatchObject} match
       */function findEmail(_,atext,label,match){if(// Not an expected previous character.
!previous(match,true)||// Label ends in not allowed character.
/[_-\d]$/.test(label)){return false;}return{type:'link',title:null,url:'mailto:'+atext+'@'+label,children:[{type:'text',value:atext+'@'+label}]};}/**
       * @param {string} domain
       * @returns {boolean}
       */function isCorrectDomain(domain){var parts=domain.split('.');if(parts.length<2||parts[parts.length-1]&&(/_/.test(parts[parts.length-1])||!/[a-zA-Z\d]/.test(parts[parts.length-1]))||parts[parts.length-2]&&(/_/.test(parts[parts.length-2])||!/[a-zA-Z\d]/.test(parts[parts.length-2]))){return false;}return true;}/**
       * @param {string} url
       * @returns {[string, string|undefined]}
       */function splitUrl(url){var trailExec=/[!"&'),.:;<>?\]}]+$/.exec(url);/** @type {number} */var closingParenIndex;/** @type {number} */var openingParens;/** @type {number} */var closingParens;/** @type {string|undefined} */var trail;if(trailExec){url=url.slice(0,trailExec.index);trail=trailExec[0];closingParenIndex=trail.indexOf(')');openingParens=ccount(url,'(');closingParens=ccount(url,')');while(closingParenIndex!==-1&&openingParens>closingParens){url+=trail.slice(0,closingParenIndex+1);trail=trail.slice(closingParenIndex+1);closingParenIndex=trail.indexOf(')');closingParens++;}}return[url,trail];}/**
       * @param {RegExpMatchObject} match
       * @param {boolean} [email=false]
       * @returns {boolean}
       */function previous(match,email){var code=match.input.charCodeAt(match.index-1);return(match.index===0||unicodeWhitespace(code)||unicodePunctuation(code))&&(!email||code!==47);}/**
       * @typedef {import('mdast').Association} Association
       */ /**
       * The `label` of an association is the string value: character escapes and
       * references work, and casing is intact.
       * The `identifier` is used to match one association to another: controversially,
       * character escapes and references don’t work in this matching: `&copy;` does
       * not match `©`, and `\+` does not match `+`.
       * But casing is ignored (and whitespace) is trimmed and collapsed: ` A\nb`
       * matches `a b`.
       * So, we do prefer the label when figuring out how we’re going to serialize:
       * it has whitespace, casing, and we can ignore most useless character escapes
       * and all character references.
       *
       * @param {Association} node
       * @returns {string}
       */function association(node){if(node.label||!node.identifier){return node.label||'';}return decodeString(node.identifier);}/**
       * @typedef {import('unist').Point} Point
       * @typedef {import('../types.js').TrackFields} TrackFields
       */ /**
       * Functions to track output positions.
       * This info isn’t used yet but suchs functionality allows line wrapping,
       * and theoretically source maps (though, is there practical use in that?).
       *
       * @param {TrackFields} options_
       */function track(options_){// Defaults are used to prevent crashes when older utilities somehow activate
// this code.
/* c8 ignore next 5 */var options=options_||{};var now=options.now||{};var lineShift=options.lineShift||0;var line=now.line||1;var column=now.column||1;return{move:move,current:current,shift:shift};/**
         * Get the current tracked info.
         *
         * @returns {{now: Point, lineShift: number}}
         */function current(){return{now:{line:line,column:column},lineShift:lineShift};}/**
         * Define an increased line shift (the typical indent for lines).
         *
         * @param {number} value
         */function shift(value){lineShift+=value;}/**
         * Move past a string.
         *
         * @param {string} value
         * @returns {string}
         */function move(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var chunks=value.split(/\r?\n|\r/g);var tail=chunks[chunks.length-1];line+=chunks.length-1;column=chunks.length===1?column+tail.length:1+tail.length+lineShift;return value;}}/**
       * @typedef {import('../types.js').Node} Node
       * @typedef {import('../types.js').Parent} Parent
       * @typedef {import('../types.js').Join} Join
       * @typedef {import('../types.js').Context} Context
       * @typedef {import('../types.js').TrackFields} TrackFields
       */ /**
       * @param {Parent} parent
       * @param {Context} context
       * @param {TrackFields} safeOptions
       * @returns {string}
       */function containerFlow(parent,context,safeOptions){var indexStack=context.indexStack;var children=parent.children||[];var tracker=track(safeOptions);/** @type {Array<string>} */var results=[];var index=-1;indexStack.push(-1);while(++index<children.length){var child=children[index];indexStack[indexStack.length-1]=index;results.push(tracker.move(context.handle(child,parent,context,_objectSpread({before:'\n',after:'\n'},tracker.current()))));if(child.type!=='list'){context.bulletLastUsed=undefined;}if(index<children.length-1){results.push(tracker.move(between(child,children[index+1])));}}indexStack.pop();return results.join('');/**
         * @param {Node} left
         * @param {Node} right
         * @returns {string}
         */function between(left,right){var index=context.join.length;while(index--){var result=context.join[index](left,right,parent,context);if(result===true||result===1){break;}if(typeof result==='number'){return'\n'.repeat(1+result);}if(result===false){return'\n\n<!---->\n\n';}}return'\n\n';}}/**
       * @callback Map
       * @param {string} value
       * @param {number} line
       * @param {boolean} blank
       * @returns {string}
       */var eol=/\r?\n|\r/g;/**
       * @param {string} value
       * @param {Map} map
       * @returns {string}
       */function indentLines(value,map){/** @type {Array<string>} */var result=[];var start=0;var line=0;/** @type {RegExpExecArray|null} */var match;while(match=eol.exec(value)){one(value.slice(start,match.index));result.push(match[0]);start=match.index+match[0].length;line++;}one(value.slice(start));return result.join('');/**
         * @param {string} value
         */function one(value){result.push(map(value,line,!value));}}/**
       * @typedef {import('../types.js').Unsafe} Unsafe
       */ /**
       * @param {Unsafe} pattern
       * @returns {RegExp}
       */function patternCompile(pattern){if(!pattern._compiled){var before=(pattern.atBreak?'[\\r\\n][\\t ]*':'')+(pattern.before?'(?:'+pattern.before+')':'');pattern._compiled=new RegExp((before?'('+before+')':'')+(/[|\\{}()[\]^$+*?.-]/.test(pattern.character)?'\\':'')+pattern.character+(pattern.after?'(?:'+pattern.after+')':''),'g');}return pattern._compiled;}/**
       * @typedef {import('../types.js').Unsafe} Unsafe
       */ /**
       * @param {Array<string>} stack
       * @param {Unsafe} pattern
       * @returns {boolean}
       */function patternInScope(stack,pattern){return listInScope(stack,pattern.inConstruct,true)&&!listInScope(stack,pattern.notInConstruct,false);}/**
       * @param {Array<string>} stack
       * @param {Unsafe['inConstruct']} list
       * @param {boolean} none
       * @returns {boolean}
       */function listInScope(stack,list,none){if(!list){return none;}if(typeof list==='string'){list=[list];}var index=-1;while(++index<list.length){if(stack.includes(list[index])){return true;}}return false;}/**
       * @typedef {import('../types.js').Context} Context
       * @typedef {import('../types.js').SafeOptions} SafeOptions
       */ /**
       * @param {Context} context
       * @param {string|null|undefined} input
       * @param {SafeOptions & {encode?: Array<string>}} config
       * @returns {string}
       */function safe(context,input,config){var value=(config.before||'')+(input||'')+(config.after||'');/** @type {Array<number>} */var positions=[];/** @type {Array<string>} */var result=[];/** @type {Record<number, {before: boolean, after: boolean}>} */var infos={};var index=-1;while(++index<context.unsafe.length){var pattern=context.unsafe[index];if(!patternInScope(context.stack,pattern)){continue;}var expression=patternCompile(pattern);/** @type {RegExpExecArray|null} */var match=void 0;while(match=expression.exec(value)){var before='before'in pattern||Boolean(pattern.atBreak);var after=('after'in pattern);var _position=match.index+(before?match[1].length:0);if(positions.includes(_position)){if(infos[_position].before&&!before){infos[_position].before=false;}if(infos[_position].after&&!after){infos[_position].after=false;}}else{positions.push(_position);infos[_position]={before:before,after:after};}}}positions.sort(numerical);var start=config.before?config.before.length:0;var end=value.length-(config.after?config.after.length:0);index=-1;while(++index<positions.length){var _position2=positions[index];// Character before or after matched:
if(_position2<start||_position2>=end){continue;}// If this character is supposed to be escaped because it has a condition on
// the next character, and the next character is definitly being escaped,
// then skip this escape.
if(_position2+1<end&&positions[index+1]===_position2+1&&infos[_position2].after&&!infos[_position2+1].before&&!infos[_position2+1].after||positions[index-1]===_position2-1&&infos[_position2].before&&!infos[_position2-1].before&&!infos[_position2-1].after){continue;}if(start!==_position2){// If we have to use a character reference, an ampersand would be more
// correct, but as backslashes only care about punctuation, either will
// do the trick
result.push(escapeBackslashes(value.slice(start,_position2),'\\'));}start=_position2;if(/[!-/:-@[-`{-~]/.test(value.charAt(_position2))&&(!config.encode||!config.encode.includes(value.charAt(_position2)))){// Character escape.
result.push('\\');}else{// Character reference.
result.push('&#x'+value.charCodeAt(_position2).toString(16).toUpperCase()+';');start++;}}result.push(escapeBackslashes(value.slice(start,end),config.after));return result.join('');}/**
       * @param {number} a
       * @param {number} b
       * @returns {number}
       */function numerical(a,b){return a-b;}/**
       * @param {string} value
       * @param {string} after
       * @returns {string}
       */function escapeBackslashes(value,after){var expression=/\\(?=[!-/:-@[-`{-~])/g;/** @type {Array<number>} */var positions=[];/** @type {Array<string>} */var results=[];var whole=value+after;var index=-1;var start=0;/** @type {RegExpExecArray|null} */var match;while(match=expression.exec(whole)){positions.push(match.index);}while(++index<positions.length){if(start!==positions[index]){results.push(value.slice(start,positions[index]));}results.push('\\');start=positions[index];}results.push(value.slice(start));return results.join('');}/**
       * @typedef {import('mdast').FootnoteReference} FootnoteReference
       * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
       * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
       * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
       * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
       * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
       * @typedef {import('mdast-util-to-markdown').Map} Map
       */ /**
       * @returns {FromMarkdownExtension}
       */function gfmFootnoteFromMarkdown(){return{enter:{gfmFootnoteDefinition:enterFootnoteDefinition,gfmFootnoteDefinitionLabelString:enterFootnoteDefinitionLabelString,gfmFootnoteCall:enterFootnoteCall,gfmFootnoteCallString:enterFootnoteCallString},exit:{gfmFootnoteDefinition:exitFootnoteDefinition,gfmFootnoteDefinitionLabelString:exitFootnoteDefinitionLabelString,gfmFootnoteCall:exitFootnoteCall,gfmFootnoteCallString:exitFootnoteCallString}};/** @type {FromMarkdownHandle} */function enterFootnoteDefinition(token){this.enter({type:'footnoteDefinition',identifier:'',label:'',children:[]},token);}/** @type {FromMarkdownHandle} */function enterFootnoteDefinitionLabelString(){this.buffer();}/** @type {FromMarkdownHandle} */function exitFootnoteDefinitionLabelString(token){var label=this.resume();var node=/** @type {FootnoteDefinition} */this.stack[this.stack.length-1];node.label=label;node.identifier=normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();}/** @type {FromMarkdownHandle} */function exitFootnoteDefinition(token){this.exit(token);}/** @type {FromMarkdownHandle} */function enterFootnoteCall(token){this.enter({type:'footnoteReference',identifier:'',label:''},token);}/** @type {FromMarkdownHandle} */function enterFootnoteCallString(){this.buffer();}/** @type {FromMarkdownHandle} */function exitFootnoteCallString(token){var label=this.resume();var node=/** @type {FootnoteDefinition} */this.stack[this.stack.length-1];node.label=label;node.identifier=normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();}/** @type {FromMarkdownHandle} */function exitFootnoteCall(token){this.exit(token);}}/**
       * @returns {ToMarkdownExtension}
       */function gfmFootnoteToMarkdown(){footnoteReference.peek=footnoteReferencePeek;return{// This is on by default already.
unsafe:[{character:'[',inConstruct:['phrasing','label','reference']}],handlers:{footnoteDefinition:footnoteDefinition,footnoteReference:footnoteReference}};/**
         * @type {ToMarkdownHandle}
         * @param {FootnoteReference} node
         */function footnoteReference(node,_,context,safeOptions){var tracker=track(safeOptions);var value=tracker.move('[^');var exit=context.enter('footnoteReference');var subexit=context.enter('reference');value+=tracker.move(safe(context,association(node),_objectSpread(_objectSpread({},tracker.current()),{},{before:value,after:']'})));subexit();exit();value+=tracker.move(']');return value;}/** @type {ToMarkdownHandle} */function footnoteReferencePeek(){return'[';}/**
         * @type {ToMarkdownHandle}
         * @param {FootnoteDefinition} node
         */function footnoteDefinition(node,_,context,safeOptions){var tracker=track(safeOptions);var value=tracker.move('[^');var exit=context.enter('footnoteDefinition');var subexit=context.enter('label');value+=tracker.move(safe(context,association(node),_objectSpread(_objectSpread({},tracker.current()),{},{before:value,after:']'})));subexit();value+=tracker.move(']:'+(node.children&&node.children.length>0?' ':''));tracker.shift(4);value+=tracker.move(indentLines(containerFlow(node,context,tracker.current()),map));exit();return value;/** @type {Map} */function map(line,index,blank){if(index){return(blank?'':'    ')+line;}return line;}}}/**
       * @typedef {import('../types.js').Node} Node
       * @typedef {import('../types.js').Parent} Parent
       * @typedef {import('../types.js').SafeOptions} SafeOptions
       * @typedef {import('../types.js').Context} Context
       */ /**
       * @param {Parent} parent
       * @param {Context} context
       * @param {SafeOptions} safeOptions
       * @returns {string}
       */function containerPhrasing(parent,context,safeOptions){var indexStack=context.indexStack;var children=parent.children||[];/** @type {Array<string>} */var results=[];var index=-1;var before=safeOptions.before;indexStack.push(-1);var tracker=track(safeOptions);while(++index<children.length){var child=children[index];/** @type {string} */var after=void 0;indexStack[indexStack.length-1]=index;if(index+1<children.length){// @ts-expect-error: hush, it’s actually a `zwitch`.
var handle=context.handle.handlers[children[index+1].type];if(handle&&handle.peek)handle=handle.peek;after=handle?handle(children[index+1],parent,context,_objectSpread({before:'',after:''},tracker.current())).charAt(0):'';}else{after=safeOptions.after;}// In some cases, html (text) can be found in phrasing right after an eol.
// When we’d serialize that, in most cases that would be seen as html
// (flow).
// As we can’t escape or so to prevent it from happening, we take a somewhat
// reasonable approach: replace that eol with a space.
// See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
if(results.length>0&&(before==='\r'||before==='\n')&&child.type==='html'){results[results.length-1]=results[results.length-1].replace(/(\r?\n|\r)$/,' ');before=' ';// To do: does this work to reset tracker?
tracker=track(safeOptions);tracker.move(results.join(''));}results.push(tracker.move(context.handle(child,parent,context,_objectSpread(_objectSpread({},tracker.current()),{},{before:before,after:after}))));before=results[results.length-1].slice(-1);}indexStack.pop();return results.join('');}/**
       * @typedef {import('mdast').Delete} Delete
       * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
       * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
       * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
       * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
       */ /** @type {FromMarkdownExtension} */var gfmStrikethroughFromMarkdown={canContainEols:['delete'],enter:{strikethrough:enterStrikethrough},exit:{strikethrough:exitStrikethrough}};/** @type {ToMarkdownExtension} */var gfmStrikethroughToMarkdown={unsafe:[{character:'~',inConstruct:'phrasing'}],handlers:{delete:handleDelete}};handleDelete.peek=peekDelete;/** @type {FromMarkdownHandle} */function enterStrikethrough(token){this.enter({type:'delete',children:[]},token);}/** @type {FromMarkdownHandle} */function exitStrikethrough(token){this.exit(token);}/**
       * @type {ToMarkdownHandle}
       * @param {Delete} node
       */function handleDelete(node,_,context,safeOptions){var tracker=track(safeOptions);var exit=context.enter('emphasis');var value=tracker.move('~~');value+=containerPhrasing(node,context,_objectSpread(_objectSpread({},tracker.current()),{},{before:value,after:'~'}));value+=tracker.move('~~');exit();return value;}/** @type {ToMarkdownHandle} */function peekDelete(){return'~';}/**
       * @typedef {import('mdast').InlineCode} InlineCode
       * @typedef {import('../types.js').Handle} Handle
       */inlineCode.peek=inlineCodePeek;/**
       * @type {Handle}
       * @param {InlineCode} node
       */function inlineCode(node,_,context){var value=node.value||'';var sequence='`';var index=-1;// If there is a single grave accent on its own in the code, use a fence of
// two.
// If there are two in a row, use one.
while(new RegExp('(^|[^`])'+sequence+'([^`]|$)').test(value)){sequence+='`';}// If this is not just spaces or eols (tabs don’t count), and either the
// first or last character are a space, eol, or tick, then pad with spaces.
if(/[^ \r\n]/.test(value)&&(/^[ \r\n]/.test(value)&&/[ \r\n]$/.test(value)||/^`|`$/.test(value))){value=' '+value+' ';}// We have a potential problem: certain characters after eols could result in
// blocks being seen.
// For example, if someone injected the string `'\n# b'`, then that would
// result in an ATX heading.
// We can’t escape characters in `inlineCode`, but because eols are
// transformed to spaces when going from markdown to HTML anyway, we can swap
// them out.
while(++index<context.unsafe.length){var pattern=context.unsafe[index];var expression=patternCompile(pattern);/** @type {RegExpExecArray|null} */var match=void 0;// Only look for `atBreak`s.
// Btw: note that `atBreak` patterns will always start the regex at LF or
// CR.
if(!pattern.atBreak)continue;while(match=expression.exec(value)){var _position3=match.index;// Support CRLF (patterns only look for one of the characters).
if(value.charCodeAt(_position3)===10/* `\n` */&&value.charCodeAt(_position3-1)===13/* `\r` */){_position3--;}value=value.slice(0,_position3)+' '+value.slice(match.index+1);}}return sequence+value+sequence;}/**
       * @type {Handle}
       */function inlineCodePeek(){return'`';}/**
       * @typedef Options
       *   Configuration (optional).
       * @property {string|null|Array<string|null|undefined>} [align]
       *   One style for all columns, or styles for their respective columns.
       *   Each style is either `'l'` (left), `'r'` (right), or `'c'` (center).
       *   Other values are treated as `''`, which doesn’t place the colon in the
       *   alignment row but does align left.
       *   *Only the lowercased first character is used, so `Right` is fine.*
       * @property {boolean} [padding=true]
       *   Whether to add a space of padding between delimiters and cells.
       *
       *   When `true`, there is padding:
       *
       *   ```markdown
       *   | Alpha | B     |
       *   | ----- | ----- |
       *   | C     | Delta |
       *   ```
       *
       *   When `false`, there is no padding:
       *
       *   ```markdown
       *   |Alpha|B    |
       *   |-----|-----|
       *   |C    |Delta|
       *   ```
       * @property {boolean} [delimiterStart=true]
       *   Whether to begin each row with the delimiter.
       *
       *   > 👉 **Note**: please don’t use this: it could create fragile structures
       *   > that aren’t understandable to some markdown parsers.
       *
       *   When `true`, there are starting delimiters:
       *
       *   ```markdown
       *   | Alpha | B     |
       *   | ----- | ----- |
       *   | C     | Delta |
       *   ```
       *
       *   When `false`, there are no starting delimiters:
       *
       *   ```markdown
       *   Alpha | B     |
       *   ----- | ----- |
       *   C     | Delta |
       *   ```
       * @property {boolean} [delimiterEnd=true]
       *   Whether to end each row with the delimiter.
       *
       *   > 👉 **Note**: please don’t use this: it could create fragile structures
       *   > that aren’t understandable to some markdown parsers.
       *
       *   When `true`, there are ending delimiters:
       *
       *   ```markdown
       *   | Alpha | B     |
       *   | ----- | ----- |
       *   | C     | Delta |
       *   ```
       *
       *   When `false`, there are no ending delimiters:
       *
       *   ```markdown
       *   | Alpha | B
       *   | ----- | -----
       *   | C     | Delta
       *   ```
       * @property {boolean} [alignDelimiters=true]
       *   Whether to align the delimiters.
       *   By default, they are aligned:
       *
       *   ```markdown
       *   | Alpha | B     |
       *   | ----- | ----- |
       *   | C     | Delta |
       *   ```
       *
       *   Pass `false` to make them staggered:
       *
       *   ```markdown
       *   | Alpha | B |
       *   | - | - |
       *   | C | Delta |
       *   ```
       * @property {(value: string) => number} [stringLength]
       *   Function to detect the length of table cell content.
       *   This is used when aligning the delimiters (`|`) between table cells.
       *   Full-width characters and emoji mess up delimiter alignment when viewing
       *   the markdown source.
       *   To fix this, you can pass this function, which receives the cell content
       *   and returns its “visible” size.
       *   Note that what is and isn’t visible depends on where the text is displayed.
       *
       *   Without such a function, the following:
       *
       *   ```js
       *   markdownTable([
       *     ['Alpha', 'Bravo'],
       *     ['中文', 'Charlie'],
       *     ['👩‍❤️‍👩', 'Delta']
       *   ])
       *   ```
       *
       *   Yields:
       *
       *   ```markdown
       *   | Alpha | Bravo |
       *   | - | - |
       *   | 中文 | Charlie |
       *   | 👩‍❤️‍👩 | Delta |
       *   ```
       *
       *   With [`string-width`](https://github.com/sindresorhus/string-width):
       *
       *   ```js
       *   import stringWidth from 'string-width'
       *
       *   markdownTable(
       *     [
       *       ['Alpha', 'Bravo'],
       *       ['中文', 'Charlie'],
       *       ['👩‍❤️‍👩', 'Delta']
       *     ],
       *     {stringLength: stringWidth}
       *   )
       *   ```
       *
       *   Yields:
       *
       *   ```markdown
       *   | Alpha | Bravo   |
       *   | ----- | ------- |
       *   | 中文  | Charlie |
       *   | 👩‍❤️‍👩    | Delta   |
       *   ```
       */ /**
       * @typedef {Options} MarkdownTableOptions
       * @todo
       *   Remove next major.
       */ /**
       * Generate a markdown ([GFM](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)) table..
       *
       * @param {Array<Array<string|null|undefined>>} table
       *   Table data (matrix of strings).
       * @param {Options} [options]
       *   Configuration (optional).
       * @returns {string}
       */function markdownTable(table){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var align=(options.align||[]).concat();var stringLength=options.stringLength||defaultStringLength;/** @type {Array<number>} Character codes as symbols for alignment per column. */var alignments=[];/** @type {Array<Array<string>>} Cells per row. */var cellMatrix=[];/** @type {Array<Array<number>>} Sizes of each cell per row. */var sizeMatrix=[];/** @type {Array<number>} */var longestCellByColumn=[];var mostCellsPerRow=0;var rowIndex=-1;// This is a superfluous loop if we don’t align delimiters, but otherwise we’d
// do superfluous work when aligning, so optimize for aligning.
while(++rowIndex<table.length){/** @type {Array<string>} */var _row2=[];/** @type {Array<number>} */var _sizes=[];var _columnIndex=-1;if(table[rowIndex].length>mostCellsPerRow){mostCellsPerRow=table[rowIndex].length;}while(++_columnIndex<table[rowIndex].length){var _cell3=serialize(table[rowIndex][_columnIndex]);if(options.alignDelimiters!==false){var size=stringLength(_cell3);_sizes[_columnIndex]=size;if(longestCellByColumn[_columnIndex]===undefined||size>longestCellByColumn[_columnIndex]){longestCellByColumn[_columnIndex]=size;}}_row2.push(_cell3);}cellMatrix[rowIndex]=_row2;sizeMatrix[rowIndex]=_sizes;}// Figure out which alignments to use.
var columnIndex=-1;if(_typeof(align)==='object'&&'length'in align){while(++columnIndex<mostCellsPerRow){alignments[columnIndex]=toAlignment(align[columnIndex]);}}else{var _code3=toAlignment(align);while(++columnIndex<mostCellsPerRow){alignments[columnIndex]=_code3;}}// Inject the alignment row.
columnIndex=-1;/** @type {Array<string>} */var row=[];/** @type {Array<number>} */var sizes=[];while(++columnIndex<mostCellsPerRow){var _code4=alignments[columnIndex];var before='';var after='';if(_code4===99/* `c` */){before=':';after=':';}else if(_code4===108/* `l` */){before=':';}else if(_code4===114/* `r` */){after=':';}// There *must* be at least one hyphen-minus in each alignment cell.
var _size=options.alignDelimiters===false?1:Math.max(1,longestCellByColumn[columnIndex]-before.length-after.length);var _cell4=before+'-'.repeat(_size)+after;if(options.alignDelimiters!==false){_size=before.length+_size+after.length;if(_size>longestCellByColumn[columnIndex]){longestCellByColumn[columnIndex]=_size;}sizes[columnIndex]=_size;}row[columnIndex]=_cell4;}// Inject the alignment row.
cellMatrix.splice(1,0,row);sizeMatrix.splice(1,0,sizes);rowIndex=-1;/** @type {Array<string>} */var lines=[];while(++rowIndex<cellMatrix.length){var _row3=cellMatrix[rowIndex];var _sizes2=sizeMatrix[rowIndex];columnIndex=-1;/** @type {Array<string>} */var line=[];while(++columnIndex<mostCellsPerRow){var _cell5=_row3[columnIndex]||'';var _before='';var _after='';if(options.alignDelimiters!==false){var _size2=longestCellByColumn[columnIndex]-(_sizes2[columnIndex]||0);var _code5=alignments[columnIndex];if(_code5===114/* `r` */){_before=' '.repeat(_size2);}else if(_code5===99/* `c` */){if(_size2%2){_before=' '.repeat(_size2/2+0.5);_after=' '.repeat(_size2/2-0.5);}else{_before=' '.repeat(_size2/2);_after=_before;}}else{_after=' '.repeat(_size2);}}if(options.delimiterStart!==false&&!columnIndex){line.push('|');}if(options.padding!==false&&// Don’t add the opening space if we’re not aligning and the cell is
// empty: there will be a closing space.
!(options.alignDelimiters===false&&_cell5==='')&&(options.delimiterStart!==false||columnIndex)){line.push(' ');}if(options.alignDelimiters!==false){line.push(_before);}line.push(_cell5);if(options.alignDelimiters!==false){line.push(_after);}if(options.padding!==false){line.push(' ');}if(options.delimiterEnd!==false||columnIndex!==mostCellsPerRow-1){line.push('|');}}lines.push(options.delimiterEnd===false?line.join('').replace(/ +$/,''):line.join(''));}return lines.join('\n');}/**
       * @param {string|null|undefined} [value]
       * @returns {string}
       */function serialize(value){return value===null||value===undefined?'':String(value);}/**
       * @param {string} value
       * @returns {number}
       */function defaultStringLength(value){return value.length;}/**
       * @param {string|null|undefined} value
       * @returns {number}
       */function toAlignment(value){var code=typeof value==='string'?value.codePointAt(0):0;return code===67/* `C` */||code===99/* `c` */?99/* `c` */:code===76/* `L` */||code===108/* `l` */?108/* `l` */:code===82/* `R` */||code===114/* `r` */?114/* `r` */:0;}/**
       * @typedef {import('mdast').AlignType} AlignType
       * @typedef {import('mdast').Table} Table
       * @typedef {import('mdast').TableRow} TableRow
       * @typedef {import('mdast').TableCell} TableCell
       * @typedef {import('mdast').InlineCode} InlineCode
       * @typedef {import('markdown-table').MarkdownTableOptions} MarkdownTableOptions
       * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
       * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
       * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
       * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
       * @typedef {import('mdast-util-to-markdown').Context} ToMarkdownContext
       * @typedef {import('mdast-util-to-markdown').SafeOptions} SafeOptions
       *
       * @typedef Options
       * @property {boolean} [tableCellPadding=true]
       * @property {boolean} [tablePipeAlign=true]
       * @property {MarkdownTableOptions['stringLength']} [stringLength]
       */ /** @type {FromMarkdownExtension} */var gfmTableFromMarkdown={enter:{table:enterTable,tableData:enterCell,tableHeader:enterCell,tableRow:enterRow},exit:{codeText:exitCodeText,table:exitTable,tableData:exit,tableHeader:exit,tableRow:exit}};/** @type {FromMarkdownHandle} */function enterTable(token){/** @type {Array<'left'|'right'|'center'|'none'>} */ // @ts-expect-error: `align` is custom.
var align=token._align;this.enter({type:'table',align:align.map(function(d){return d==='none'?null:d;}),children:[]},token);this.setData('inTable',true);}/** @type {FromMarkdownHandle} */function exitTable(token){this.exit(token);this.setData('inTable');}/** @type {FromMarkdownHandle} */function enterRow(token){this.enter({type:'tableRow',children:[]},token);}/** @type {FromMarkdownHandle} */function exit(token){this.exit(token);}/** @type {FromMarkdownHandle} */function enterCell(token){this.enter({type:'tableCell',children:[]},token);}// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
/** @type {FromMarkdownHandle} */function exitCodeText(token){var value=this.resume();if(this.getData('inTable')){value=value.replace(/\\([\\|])/g,replace);}var node=/** @type {InlineCode} */this.stack[this.stack.length-1];node.value=value;this.exit(token);}/**
       * @param {string} $0
       * @param {string} $1
       * @returns {string}
       */function replace($0,$1){// Pipes work, backslashes don’t (but can’t escape pipes).
return $1==='|'?$1:$0;}/**
       * @param {Options} [options]
       * @returns {ToMarkdownExtension}
       */function gfmTableToMarkdown(options){var settings=options||{};var padding=settings.tableCellPadding;var alignDelimiters=settings.tablePipeAlign;var stringLength=settings.stringLength;var around=padding?' ':'|';return{unsafe:[{character:'\r',inConstruct:'tableCell'},{character:'\n',inConstruct:'tableCell'},// A pipe, when followed by a tab or space (padding), or a dash or colon
// (unpadded delimiter row), could result in a table.
{atBreak:true,character:'|',after:'[\t :-]'},// A pipe in a cell must be encoded.
{character:'|',inConstruct:'tableCell'},// A colon must be followed by a dash, in which case it could start a
// delimiter row.
{atBreak:true,character:':',after:'-'},// A delimiter row can also start with a dash, when followed by more
// dashes, a colon, or a pipe.
// This is a stricter version than the built in check for lists, thematic
// breaks, and setex heading underlines though:
// <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
{atBreak:true,character:'-',after:'[:|-]'}],handlers:{table:handleTable,tableRow:handleTableRow,tableCell:handleTableCell,inlineCode:inlineCodeWithTable}};/**
         * @type {ToMarkdownHandle}
         * @param {Table} node
         */function handleTable(node,_,context,safeOptions){return serializeData(handleTableAsData(node,context,safeOptions),// @ts-expect-error: fixed in `markdown-table@3.0.1`.
node.align);}/**
         * This function isn’t really used normally, because we handle rows at the
         * table level.
         * But, if someone passes in a table row, this ensures we make somewhat sense.
         *
         * @type {ToMarkdownHandle}
         * @param {TableRow} node
         */function handleTableRow(node,_,context,safeOptions){var row=handleTableRowAsData(node,context,safeOptions);// `markdown-table` will always add an align row
var value=serializeData([row]);return value.slice(0,value.indexOf('\n'));}/**
         * @type {ToMarkdownHandle}
         * @param {TableCell} node
         */function handleTableCell(node,_,context,safeOptions){var exit=context.enter('tableCell');var subexit=context.enter('phrasing');var value=containerPhrasing(node,context,_objectSpread(_objectSpread({},safeOptions),{},{before:around,after:around}));subexit();exit();return value;}/**
         * @param {Array<Array<string>>} matrix
         * @param {Array<string>} [align]
         */function serializeData(matrix,align){return markdownTable(matrix,{align:align,alignDelimiters:alignDelimiters,padding:padding,stringLength:stringLength});}/**
         * @param {Table} node
         * @param {ToMarkdownContext} context
         * @param {SafeOptions} safeOptions
         */function handleTableAsData(node,context,safeOptions){var children=node.children;var index=-1;/** @type {Array<Array<string>>} */var result=[];var subexit=context.enter('table');while(++index<children.length){result[index]=handleTableRowAsData(children[index],context,safeOptions);}subexit();return result;}/**
         * @param {TableRow} node
         * @param {ToMarkdownContext} context
         * @param {SafeOptions} safeOptions
         */function handleTableRowAsData(node,context,safeOptions){var children=node.children;var index=-1;/** @type {Array<string>} */var result=[];var subexit=context.enter('tableRow');while(++index<children.length){// Note: the positional info as used here is incorrect.
// Making it correct would be impossible due to aligning cells?
// And it would need copy/pasting `markdown-table` into this project.
result[index]=handleTableCell(children[index],node,context,safeOptions);}subexit();return result;}/**
         * @type {ToMarkdownHandle}
         * @param {InlineCode} node
         */function inlineCodeWithTable(node,parent,context){var value=inlineCode(node,parent,context);if(context.stack.includes('tableCell')){value=value.replace(/\|/g,'\\$&');}return value;}}/**
       * @typedef {import('../types.js').Context} Context
       * @typedef {import('../types.js').Options} Options
       */ /**
       * @param {Context} context
       * @returns {Exclude<Options['bullet'], undefined>}
       */function checkBullet(context){var marker=context.options.bullet||'*';if(marker!=='*'&&marker!=='+'&&marker!=='-'){throw new Error('Cannot serialize items with `'+marker+'` for `options.bullet`, expected `*`, `+`, or `-`');}return marker;}/**
       * @typedef {import('../types.js').Context} Context
       * @typedef {import('../types.js').Options} Options
       */ /**
       * @param {Context} context
       * @returns {Exclude<Options['listItemIndent'], undefined>}
       */function checkListItemIndent(context){var style=context.options.listItemIndent||'tab';// To do: remove in a major.
// @ts-expect-error: deprecated.
if(style===1||style==='1'){return'one';}if(style!=='tab'&&style!=='one'&&style!=='mixed'){throw new Error('Cannot serialize items with `'+style+'` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`');}return style;}/**
       * @typedef {import('mdast').ListItem} ListItem
       * @typedef {import('mdast').List} List
       * @typedef {import('../util/indent-lines.js').Map} Map
       * @typedef {import('../types.js').Options} Options
       * @typedef {import('../types.js').Handle} Handle
       */ /**
       * @type {Handle}
       * @param {ListItem} node
       */function listItem(node,parent,context,safeOptions){var listItemIndent=checkListItemIndent(context);var bullet=context.bulletCurrent||checkBullet(context);// Add the marker value for ordered lists.
if(parent&&parent.type==='list'&&parent.ordered){bullet=(typeof parent.start==='number'&&parent.start>-1?parent.start:1)+(context.options.incrementListMarker===false?0:parent.children.indexOf(node))+bullet;}var size=bullet.length+1;if(listItemIndent==='tab'||listItemIndent==='mixed'&&(parent&&parent.type==='list'&&parent.spread||node.spread)){size=Math.ceil(size/4)*4;}var tracker=track(safeOptions);tracker.move(bullet+' '.repeat(size-bullet.length));tracker.shift(size);var exit=context.enter('listItem');var value=indentLines(containerFlow(node,context,tracker.current()),map);exit();return value;/** @type {Map} */function map(line,index,blank){if(index){return(blank?'':' '.repeat(size))+line;}return(blank?bullet:bullet+' '.repeat(size-bullet.length))+line;}}/**
       * @typedef {Extract<import('mdast').Root|import('mdast').Content, import('unist').Parent>} Parent
       * @typedef {import('mdast').ListItem} ListItem
       * @typedef {import('mdast').Paragraph} Paragraph
       * @typedef {import('mdast').BlockContent} BlockContent
       * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
       * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
       * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
       * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
       */ /** @type {FromMarkdownExtension} */var gfmTaskListItemFromMarkdown={exit:{taskListCheckValueChecked:exitCheck,taskListCheckValueUnchecked:exitCheck,paragraph:exitParagraphWithTaskListItem}};/** @type {ToMarkdownExtension} */var gfmTaskListItemToMarkdown={unsafe:[{atBreak:true,character:'-',after:'[:|-]'}],handlers:{listItem:listItemWithTaskListItem}};/** @type {FromMarkdownHandle} */function exitCheck(token){var node=/** @type {ListItem} */this.stack[this.stack.length-2];// We’re always in a paragraph, in a list item.
node.checked=token.type==='taskListCheckValueChecked';}/** @type {FromMarkdownHandle} */function exitParagraphWithTaskListItem(token){var parent=/** @type {Parent} */this.stack[this.stack.length-2];var node=/** @type {Paragraph} */this.stack[this.stack.length-1];var siblings=parent.children;var head=node.children[0];var index=-1;/** @type {Paragraph|undefined} */var firstParaghraph;if(parent&&parent.type==='listItem'&&typeof parent.checked==='boolean'&&head&&head.type==='text'){while(++index<siblings.length){var sibling=siblings[index];if(sibling.type==='paragraph'){firstParaghraph=sibling;break;}}if(firstParaghraph===node){// Must start with a space or a tab.
head.value=head.value.slice(1);if(head.value.length===0){node.children.shift();}else if(node.position&&head.position&&typeof head.position.start.offset==='number'){head.position.start.column++;head.position.start.offset++;node.position.start=Object.assign({},head.position.start);}}}this.exit(token);}/**
       * @type {ToMarkdownHandle}
       * @param {ListItem} node
       */function listItemWithTaskListItem(node,parent,context,safeOptions){var head=node.children[0];var checkable=typeof node.checked==='boolean'&&head&&head.type==='paragraph';var checkbox='['+(node.checked?'x':' ')+'] ';var tracker=track(safeOptions);if(checkable){tracker.move(checkbox);}var value=listItem(node,parent,context,_objectSpread(_objectSpread({},safeOptions),tracker.current()));if(checkable){value=value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,check);}return value;/**
         * @param {string} $0
         * @returns {string}
         */function check($0){return $0+checkbox;}}/**
       * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
       * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
       *
       * @typedef {import('mdast-util-gfm-table').Options} Options
       */ /**
       * @returns {Array<FromMarkdownExtension>}
       */function gfmFromMarkdown(){return[gfmAutolinkLiteralFromMarkdown,gfmFootnoteFromMarkdown(),gfmStrikethroughFromMarkdown,gfmTableFromMarkdown,gfmTaskListItemFromMarkdown];}/**
       * @param {Options} [options]
       * @returns {ToMarkdownExtension}
       */function gfmToMarkdown(options){return{extensions:[gfmAutolinkLiteralToMarkdown,gfmFootnoteToMarkdown(),gfmStrikethroughToMarkdown,gfmTableToMarkdown(options),gfmTaskListItemToMarkdown]};}/**
       * @typedef {import('mdast').Root} Root
       * @typedef {import('micromark-extension-gfm').Options & import('mdast-util-gfm').Options} Options
       */ /**
       * Plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
       *
       * @type {import('unified').Plugin<[Options?]|void[], Root>}
       */function remarkGfm(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var data=this.data();add('micromarkExtensions',gfm(options));add('fromMarkdownExtensions',gfmFromMarkdown());add('toMarkdownExtensions',gfmToMarkdown(options));/**
         * @param {string} field
         * @param {unknown} value
         */function add(field,value){var list=/** @type {unknown[]} */ // Other extensions
/* c8 ignore next 2 */data[field]?data[field]:data[field]=[];list.push(value);}}var unicode$3={};var UNDEFINED_CODE_POINTS=[0xfffe,0xffff,0x1fffe,0x1ffff,0x2fffe,0x2ffff,0x3fffe,0x3ffff,0x4fffe,0x4ffff,0x5fffe,0x5ffff,0x6fffe,0x6ffff,0x7fffe,0x7ffff,0x8fffe,0x8ffff,0x9fffe,0x9ffff,0xafffe,0xaffff,0xbfffe,0xbffff,0xcfffe,0xcffff,0xdfffe,0xdffff,0xefffe,0xeffff,0xffffe,0xfffff,0x10fffe,0x10ffff];unicode$3.REPLACEMENT_CHARACTER="\uFFFD";unicode$3.CODE_POINTS={EOF:-1,NULL:0x00,TABULATION:0x09,CARRIAGE_RETURN:0x0d,LINE_FEED:0x0a,FORM_FEED:0x0c,SPACE:0x20,EXCLAMATION_MARK:0x21,QUOTATION_MARK:0x22,NUMBER_SIGN:0x23,AMPERSAND:0x26,APOSTROPHE:0x27,HYPHEN_MINUS:0x2d,SOLIDUS:0x2f,DIGIT_0:0x30,DIGIT_9:0x39,SEMICOLON:0x3b,LESS_THAN_SIGN:0x3c,EQUALS_SIGN:0x3d,GREATER_THAN_SIGN:0x3e,QUESTION_MARK:0x3f,LATIN_CAPITAL_A:0x41,LATIN_CAPITAL_F:0x46,LATIN_CAPITAL_X:0x58,LATIN_CAPITAL_Z:0x5a,RIGHT_SQUARE_BRACKET:0x5d,GRAVE_ACCENT:0x60,LATIN_SMALL_A:0x61,LATIN_SMALL_F:0x66,LATIN_SMALL_X:0x78,LATIN_SMALL_Z:0x7a,REPLACEMENT_CHARACTER:0xfffd};unicode$3.CODE_POINT_SEQUENCES={DASH_DASH_STRING:[0x2d,0x2d],//--
DOCTYPE_STRING:[0x44,0x4f,0x43,0x54,0x59,0x50,0x45],//DOCTYPE
CDATA_START_STRING:[0x5b,0x43,0x44,0x41,0x54,0x41,0x5b],//[CDATA[
SCRIPT_STRING:[0x73,0x63,0x72,0x69,0x70,0x74],//script
PUBLIC_STRING:[0x50,0x55,0x42,0x4c,0x49,0x43],//PUBLIC
SYSTEM_STRING:[0x53,0x59,0x53,0x54,0x45,0x4d]//SYSTEM
};//Surrogates
unicode$3.isSurrogate=function(cp){return cp>=0xd800&&cp<=0xdfff;};unicode$3.isSurrogatePair=function(cp){return cp>=0xdc00&&cp<=0xdfff;};unicode$3.getSurrogatePairCodePoint=function(cp1,cp2){return(cp1-0xd800)*0x400+0x2400+cp2;};//NOTE: excluding NULL and ASCII whitespace
unicode$3.isControlCodePoint=function(cp){return cp!==0x20&&cp!==0x0a&&cp!==0x0d&&cp!==0x09&&cp!==0x0c&&cp>=0x01&&cp<=0x1f||cp>=0x7f&&cp<=0x9f;};unicode$3.isUndefinedCodePoint=function(cp){return cp>=0xfdd0&&cp<=0xfdef||UNDEFINED_CODE_POINTS.indexOf(cp)>-1;};var errorCodes={controlCharacterInInputStream:'control-character-in-input-stream',noncharacterInInputStream:'noncharacter-in-input-stream',surrogateInInputStream:'surrogate-in-input-stream',nonVoidHtmlElementStartTagWithTrailingSolidus:'non-void-html-element-start-tag-with-trailing-solidus',endTagWithAttributes:'end-tag-with-attributes',endTagWithTrailingSolidus:'end-tag-with-trailing-solidus',unexpectedSolidusInTag:'unexpected-solidus-in-tag',unexpectedNullCharacter:'unexpected-null-character',unexpectedQuestionMarkInsteadOfTagName:'unexpected-question-mark-instead-of-tag-name',invalidFirstCharacterOfTagName:'invalid-first-character-of-tag-name',unexpectedEqualsSignBeforeAttributeName:'unexpected-equals-sign-before-attribute-name',missingEndTagName:'missing-end-tag-name',unexpectedCharacterInAttributeName:'unexpected-character-in-attribute-name',unknownNamedCharacterReference:'unknown-named-character-reference',missingSemicolonAfterCharacterReference:'missing-semicolon-after-character-reference',unexpectedCharacterAfterDoctypeSystemIdentifier:'unexpected-character-after-doctype-system-identifier',unexpectedCharacterInUnquotedAttributeValue:'unexpected-character-in-unquoted-attribute-value',eofBeforeTagName:'eof-before-tag-name',eofInTag:'eof-in-tag',missingAttributeValue:'missing-attribute-value',missingWhitespaceBetweenAttributes:'missing-whitespace-between-attributes',missingWhitespaceAfterDoctypePublicKeyword:'missing-whitespace-after-doctype-public-keyword',missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers:'missing-whitespace-between-doctype-public-and-system-identifiers',missingWhitespaceAfterDoctypeSystemKeyword:'missing-whitespace-after-doctype-system-keyword',missingQuoteBeforeDoctypePublicIdentifier:'missing-quote-before-doctype-public-identifier',missingQuoteBeforeDoctypeSystemIdentifier:'missing-quote-before-doctype-system-identifier',missingDoctypePublicIdentifier:'missing-doctype-public-identifier',missingDoctypeSystemIdentifier:'missing-doctype-system-identifier',abruptDoctypePublicIdentifier:'abrupt-doctype-public-identifier',abruptDoctypeSystemIdentifier:'abrupt-doctype-system-identifier',cdataInHtmlContent:'cdata-in-html-content',incorrectlyOpenedComment:'incorrectly-opened-comment',eofInScriptHtmlCommentLikeText:'eof-in-script-html-comment-like-text',eofInDoctype:'eof-in-doctype',nestedComment:'nested-comment',abruptClosingOfEmptyComment:'abrupt-closing-of-empty-comment',eofInComment:'eof-in-comment',incorrectlyClosedComment:'incorrectly-closed-comment',eofInCdata:'eof-in-cdata',absenceOfDigitsInNumericCharacterReference:'absence-of-digits-in-numeric-character-reference',nullCharacterReference:'null-character-reference',surrogateCharacterReference:'surrogate-character-reference',characterReferenceOutsideUnicodeRange:'character-reference-outside-unicode-range',controlCharacterReference:'control-character-reference',noncharacterCharacterReference:'noncharacter-character-reference',missingWhitespaceBeforeDoctypeName:'missing-whitespace-before-doctype-name',missingDoctypeName:'missing-doctype-name',invalidCharacterSequenceAfterDoctypeName:'invalid-character-sequence-after-doctype-name',duplicateAttribute:'duplicate-attribute',nonConformingDoctype:'non-conforming-doctype',missingDoctype:'missing-doctype',misplacedDoctype:'misplaced-doctype',endTagWithoutMatchingOpenElement:'end-tag-without-matching-open-element',closingOfElementWithOpenChildElements:'closing-of-element-with-open-child-elements',disallowedContentInNoscriptInHead:'disallowed-content-in-noscript-in-head',openElementsLeftAfterEof:'open-elements-left-after-eof',abandonedHeadElementChild:'abandoned-head-element-child',misplacedStartTagForHeadElement:'misplaced-start-tag-for-head-element',nestedNoscriptInHead:'nested-noscript-in-head',eofInElementThatCanContainOnlyText:'eof-in-element-that-can-contain-only-text'};var unicode$2=unicode$3;var ERR$2=errorCodes;//Aliases
var $$6=unicode$2.CODE_POINTS;//Const
var DEFAULT_BUFFER_WATERLINE=1<<16;//Preprocessor
//NOTE: HTML input preprocessing
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
var Preprocessor$1=/*#__PURE__*/function(){function Preprocessor$1(){_classCallCheck(this,Preprocessor$1);this.html=null;this.pos=-1;this.lastGapPos=-1;this.lastCharPos=-1;this.gapStack=[];this.skipNextNewLine=false;this.lastChunkWritten=false;this.endOfChunkHit=false;this.bufferWaterline=DEFAULT_BUFFER_WATERLINE;}_createClass(Preprocessor$1,[{key:"_err",value:function _err(){// NOTE: err reporting is noop by default. Enabled by mixin.
}},{key:"_addGap",value:function _addGap(){this.gapStack.push(this.lastGapPos);this.lastGapPos=this.pos;}},{key:"_processSurrogate",value:function _processSurrogate(cp){//NOTE: try to peek a surrogate pair
if(this.pos!==this.lastCharPos){var nextCp=this.html.charCodeAt(this.pos+1);if(unicode$2.isSurrogatePair(nextCp)){//NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
this.pos++;//NOTE: add gap that should be avoided during retreat
this._addGap();return unicode$2.getSurrogatePairCodePoint(cp,nextCp);}}//NOTE: we are at the end of a chunk, therefore we can't infer surrogate pair yet.
else if(!this.lastChunkWritten){this.endOfChunkHit=true;return $$6.EOF;}//NOTE: isolated surrogate
this._err(ERR$2.surrogateInInputStream);return cp;}},{key:"dropParsedChunk",value:function dropParsedChunk(){if(this.pos>this.bufferWaterline){this.lastCharPos-=this.pos;this.html=this.html.substring(this.pos);this.pos=0;this.lastGapPos=-1;this.gapStack=[];}}},{key:"write",value:function write(chunk,isLastChunk){if(this.html){this.html+=chunk;}else{this.html=chunk;}this.lastCharPos=this.html.length-1;this.endOfChunkHit=false;this.lastChunkWritten=isLastChunk;}},{key:"insertHtmlAtCurrentPos",value:function insertHtmlAtCurrentPos(chunk){this.html=this.html.substring(0,this.pos+1)+chunk+this.html.substring(this.pos+1,this.html.length);this.lastCharPos=this.html.length-1;this.endOfChunkHit=false;}},{key:"advance",value:function advance(){this.pos++;if(this.pos>this.lastCharPos){this.endOfChunkHit=!this.lastChunkWritten;return $$6.EOF;}var cp=this.html.charCodeAt(this.pos);//NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
//must be ignored.
if(this.skipNextNewLine&&cp===$$6.LINE_FEED){this.skipNextNewLine=false;this._addGap();return this.advance();}//NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
if(cp===$$6.CARRIAGE_RETURN){this.skipNextNewLine=true;return $$6.LINE_FEED;}this.skipNextNewLine=false;if(unicode$2.isSurrogate(cp)){cp=this._processSurrogate(cp);}//OPTIMIZATION: first check if code point is in the common allowed
//range (ASCII alphanumeric, whitespaces, big chunk of BMP)
//before going into detailed performance cost validation.
var isCommonValidRange=cp>0x1f&&cp<0x7f||cp===$$6.LINE_FEED||cp===$$6.CARRIAGE_RETURN||cp>0x9f&&cp<0xfdd0;if(!isCommonValidRange){this._checkForProblematicCharacters(cp);}return cp;}},{key:"_checkForProblematicCharacters",value:function _checkForProblematicCharacters(cp){if(unicode$2.isControlCodePoint(cp)){this._err(ERR$2.controlCharacterInInputStream);}else if(unicode$2.isUndefinedCodePoint(cp)){this._err(ERR$2.noncharacterInInputStream);}}},{key:"retreat",value:function retreat(){if(this.pos===this.lastGapPos){this.lastGapPos=this.gapStack.pop();this.pos--;}this.pos--;}}]);return Preprocessor$1;}();var preprocessor=Preprocessor$1;//NOTE: this file contains auto-generated array mapped radix tree that is used for the named entity references consumption
//(details: https://github.com/inikulin/parse5/tree/master/scripts/generate-named-entity-data/README.md)
var namedEntityData=new Uint16Array([4,52,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,106,303,412,810,1432,1701,1796,1987,2114,2360,2420,2484,3170,3251,4140,4393,4575,4610,5106,5512,5728,6117,6274,6315,6345,6427,6516,7002,7910,8733,9323,9870,10170,10631,10893,11318,11386,11467,12773,13092,14474,14922,15448,15542,16419,17666,18166,18611,19004,19095,19298,19397,4,16,69,77,97,98,99,102,103,108,109,110,111,112,114,115,116,117,140,150,158,169,176,194,199,210,216,222,226,242,256,266,283,294,108,105,103,5,198,1,59,148,1,198,80,5,38,1,59,156,1,38,99,117,116,101,5,193,1,59,167,1,193,114,101,118,101,59,1,258,4,2,105,121,182,191,114,99,5,194,1,59,189,1,194,59,1,1040,114,59,3,55349,56580,114,97,118,101,5,192,1,59,208,1,192,112,104,97,59,1,913,97,99,114,59,1,256,100,59,1,10835,4,2,103,112,232,237,111,110,59,1,260,102,59,3,55349,56632,112,108,121,70,117,110,99,116,105,111,110,59,1,8289,105,110,103,5,197,1,59,264,1,197,4,2,99,115,272,277,114,59,3,55349,56476,105,103,110,59,1,8788,105,108,100,101,5,195,1,59,292,1,195,109,108,5,196,1,59,301,1,196,4,8,97,99,101,102,111,114,115,117,321,350,354,383,388,394,400,405,4,2,99,114,327,336,107,115,108,97,115,104,59,1,8726,4,2,118,119,342,345,59,1,10983,101,100,59,1,8966,121,59,1,1041,4,3,99,114,116,362,369,379,97,117,115,101,59,1,8757,110,111,117,108,108,105,115,59,1,8492,97,59,1,914,114,59,3,55349,56581,112,102,59,3,55349,56633,101,118,101,59,1,728,99,114,59,1,8492,109,112,101,113,59,1,8782,4,14,72,79,97,99,100,101,102,104,105,108,111,114,115,117,442,447,456,504,542,547,569,573,577,616,678,784,790,796,99,121,59,1,1063,80,89,5,169,1,59,454,1,169,4,3,99,112,121,464,470,497,117,116,101,59,1,262,4,2,59,105,476,478,1,8914,116,97,108,68,105,102,102,101,114,101,110,116,105,97,108,68,59,1,8517,108,101,121,115,59,1,8493,4,4,97,101,105,111,514,520,530,535,114,111,110,59,1,268,100,105,108,5,199,1,59,528,1,199,114,99,59,1,264,110,105,110,116,59,1,8752,111,116,59,1,266,4,2,100,110,553,560,105,108,108,97,59,1,184,116,101,114,68,111,116,59,1,183,114,59,1,8493,105,59,1,935,114,99,108,101,4,4,68,77,80,84,591,596,603,609,111,116,59,1,8857,105,110,117,115,59,1,8854,108,117,115,59,1,8853,105,109,101,115,59,1,8855,111,4,2,99,115,623,646,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8754,101,67,117,114,108,121,4,2,68,81,658,671,111,117,98,108,101,81,117,111,116,101,59,1,8221,117,111,116,101,59,1,8217,4,4,108,110,112,117,688,701,736,753,111,110,4,2,59,101,696,698,1,8759,59,1,10868,4,3,103,105,116,709,717,722,114,117,101,110,116,59,1,8801,110,116,59,1,8751,111,117,114,73,110,116,101,103,114,97,108,59,1,8750,4,2,102,114,742,745,59,1,8450,111,100,117,99,116,59,1,8720,110,116,101,114,67,108,111,99,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8755,111,115,115,59,1,10799,99,114,59,3,55349,56478,112,4,2,59,67,803,805,1,8915,97,112,59,1,8781,4,11,68,74,83,90,97,99,101,102,105,111,115,834,850,855,860,865,888,903,916,921,1011,1415,4,2,59,111,840,842,1,8517,116,114,97,104,100,59,1,10513,99,121,59,1,1026,99,121,59,1,1029,99,121,59,1,1039,4,3,103,114,115,873,879,883,103,101,114,59,1,8225,114,59,1,8609,104,118,59,1,10980,4,2,97,121,894,900,114,111,110,59,1,270,59,1,1044,108,4,2,59,116,910,912,1,8711,97,59,1,916,114,59,3,55349,56583,4,2,97,102,927,998,4,2,99,109,933,992,114,105,116,105,99,97,108,4,4,65,68,71,84,950,957,978,985,99,117,116,101,59,1,180,111,4,2,116,117,964,967,59,1,729,98,108,101,65,99,117,116,101,59,1,733,114,97,118,101,59,1,96,105,108,100,101,59,1,732,111,110,100,59,1,8900,102,101,114,101,110,116,105,97,108,68,59,1,8518,4,4,112,116,117,119,1021,1026,1048,1249,102,59,3,55349,56635,4,3,59,68,69,1034,1036,1041,1,168,111,116,59,1,8412,113,117,97,108,59,1,8784,98,108,101,4,6,67,68,76,82,85,86,1065,1082,1101,1189,1211,1236,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8751,111,4,2,116,119,1089,1092,59,1,168,110,65,114,114,111,119,59,1,8659,4,2,101,111,1107,1141,102,116,4,3,65,82,84,1117,1124,1136,114,114,111,119,59,1,8656,105,103,104,116,65,114,114,111,119,59,1,8660,101,101,59,1,10980,110,103,4,2,76,82,1149,1177,101,102,116,4,2,65,82,1158,1165,114,114,111,119,59,1,10232,105,103,104,116,65,114,114,111,119,59,1,10234,105,103,104,116,65,114,114,111,119,59,1,10233,105,103,104,116,4,2,65,84,1199,1206,114,114,111,119,59,1,8658,101,101,59,1,8872,112,4,2,65,68,1218,1225,114,114,111,119,59,1,8657,111,119,110,65,114,114,111,119,59,1,8661,101,114,116,105,99,97,108,66,97,114,59,1,8741,110,4,6,65,66,76,82,84,97,1264,1292,1299,1352,1391,1408,114,114,111,119,4,3,59,66,85,1276,1278,1283,1,8595,97,114,59,1,10515,112,65,114,114,111,119,59,1,8693,114,101,118,101,59,1,785,101,102,116,4,3,82,84,86,1310,1323,1334,105,103,104,116,86,101,99,116,111,114,59,1,10576,101,101,86,101,99,116,111,114,59,1,10590,101,99,116,111,114,4,2,59,66,1345,1347,1,8637,97,114,59,1,10582,105,103,104,116,4,2,84,86,1362,1373,101,101,86,101,99,116,111,114,59,1,10591,101,99,116,111,114,4,2,59,66,1384,1386,1,8641,97,114,59,1,10583,101,101,4,2,59,65,1399,1401,1,8868,114,114,111,119,59,1,8615,114,114,111,119,59,1,8659,4,2,99,116,1421,1426,114,59,3,55349,56479,114,111,107,59,1,272,4,16,78,84,97,99,100,102,103,108,109,111,112,113,115,116,117,120,1466,1470,1478,1489,1515,1520,1525,1536,1544,1593,1609,1617,1650,1664,1668,1677,71,59,1,330,72,5,208,1,59,1476,1,208,99,117,116,101,5,201,1,59,1487,1,201,4,3,97,105,121,1497,1503,1512,114,111,110,59,1,282,114,99,5,202,1,59,1510,1,202,59,1,1069,111,116,59,1,278,114,59,3,55349,56584,114,97,118,101,5,200,1,59,1534,1,200,101,109,101,110,116,59,1,8712,4,2,97,112,1550,1555,99,114,59,1,274,116,121,4,2,83,86,1563,1576,109,97,108,108,83,113,117,97,114,101,59,1,9723,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9643,4,2,103,112,1599,1604,111,110,59,1,280,102,59,3,55349,56636,115,105,108,111,110,59,1,917,117,4,2,97,105,1624,1640,108,4,2,59,84,1631,1633,1,10869,105,108,100,101,59,1,8770,108,105,98,114,105,117,109,59,1,8652,4,2,99,105,1656,1660,114,59,1,8496,109,59,1,10867,97,59,1,919,109,108,5,203,1,59,1675,1,203,4,2,105,112,1683,1689,115,116,115,59,1,8707,111,110,101,110,116,105,97,108,69,59,1,8519,4,5,99,102,105,111,115,1713,1717,1722,1762,1791,121,59,1,1060,114,59,3,55349,56585,108,108,101,100,4,2,83,86,1732,1745,109,97,108,108,83,113,117,97,114,101,59,1,9724,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9642,4,3,112,114,117,1770,1775,1781,102,59,3,55349,56637,65,108,108,59,1,8704,114,105,101,114,116,114,102,59,1,8497,99,114,59,1,8497,4,12,74,84,97,98,99,100,102,103,111,114,115,116,1822,1827,1834,1848,1855,1877,1882,1887,1890,1896,1978,1984,99,121,59,1,1027,5,62,1,59,1832,1,62,109,109,97,4,2,59,100,1843,1845,1,915,59,1,988,114,101,118,101,59,1,286,4,3,101,105,121,1863,1869,1874,100,105,108,59,1,290,114,99,59,1,284,59,1,1043,111,116,59,1,288,114,59,3,55349,56586,59,1,8921,112,102,59,3,55349,56638,101,97,116,101,114,4,6,69,70,71,76,83,84,1915,1933,1944,1953,1959,1971,113,117,97,108,4,2,59,76,1925,1927,1,8805,101,115,115,59,1,8923,117,108,108,69,113,117,97,108,59,1,8807,114,101,97,116,101,114,59,1,10914,101,115,115,59,1,8823,108,97,110,116,69,113,117,97,108,59,1,10878,105,108,100,101,59,1,8819,99,114,59,3,55349,56482,59,1,8811,4,8,65,97,99,102,105,111,115,117,2005,2012,2026,2032,2036,2049,2073,2089,82,68,99,121,59,1,1066,4,2,99,116,2018,2023,101,107,59,1,711,59,1,94,105,114,99,59,1,292,114,59,1,8460,108,98,101,114,116,83,112,97,99,101,59,1,8459,4,2,112,114,2055,2059,102,59,1,8461,105,122,111,110,116,97,108,76,105,110,101,59,1,9472,4,2,99,116,2079,2083,114,59,1,8459,114,111,107,59,1,294,109,112,4,2,68,69,2097,2107,111,119,110,72,117,109,112,59,1,8782,113,117,97,108,59,1,8783,4,14,69,74,79,97,99,100,102,103,109,110,111,115,116,117,2144,2149,2155,2160,2171,2189,2194,2198,2209,2245,2307,2329,2334,2341,99,121,59,1,1045,108,105,103,59,1,306,99,121,59,1,1025,99,117,116,101,5,205,1,59,2169,1,205,4,2,105,121,2177,2186,114,99,5,206,1,59,2184,1,206,59,1,1048,111,116,59,1,304,114,59,1,8465,114,97,118,101,5,204,1,59,2207,1,204,4,3,59,97,112,2217,2219,2238,1,8465,4,2,99,103,2225,2229,114,59,1,298,105,110,97,114,121,73,59,1,8520,108,105,101,115,59,1,8658,4,2,116,118,2251,2281,4,2,59,101,2257,2259,1,8748,4,2,103,114,2265,2271,114,97,108,59,1,8747,115,101,99,116,105,111,110,59,1,8898,105,115,105,98,108,101,4,2,67,84,2293,2300,111,109,109,97,59,1,8291,105,109,101,115,59,1,8290,4,3,103,112,116,2315,2320,2325,111,110,59,1,302,102,59,3,55349,56640,97,59,1,921,99,114,59,1,8464,105,108,100,101,59,1,296,4,2,107,109,2347,2352,99,121,59,1,1030,108,5,207,1,59,2358,1,207,4,5,99,102,111,115,117,2372,2386,2391,2397,2414,4,2,105,121,2378,2383,114,99,59,1,308,59,1,1049,114,59,3,55349,56589,112,102,59,3,55349,56641,4,2,99,101,2403,2408,114,59,3,55349,56485,114,99,121,59,1,1032,107,99,121,59,1,1028,4,7,72,74,97,99,102,111,115,2436,2441,2446,2452,2467,2472,2478,99,121,59,1,1061,99,121,59,1,1036,112,112,97,59,1,922,4,2,101,121,2458,2464,100,105,108,59,1,310,59,1,1050,114,59,3,55349,56590,112,102,59,3,55349,56642,99,114,59,3,55349,56486,4,11,74,84,97,99,101,102,108,109,111,115,116,2508,2513,2520,2562,2585,2981,2986,3004,3011,3146,3167,99,121,59,1,1033,5,60,1,59,2518,1,60,4,5,99,109,110,112,114,2532,2538,2544,2548,2558,117,116,101,59,1,313,98,100,97,59,1,923,103,59,1,10218,108,97,99,101,116,114,102,59,1,8466,114,59,1,8606,4,3,97,101,121,2570,2576,2582,114,111,110,59,1,317,100,105,108,59,1,315,59,1,1051,4,2,102,115,2591,2907,116,4,10,65,67,68,70,82,84,85,86,97,114,2614,2663,2672,2728,2735,2760,2820,2870,2888,2895,4,2,110,114,2620,2633,103,108,101,66,114,97,99,107,101,116,59,1,10216,114,111,119,4,3,59,66,82,2644,2646,2651,1,8592,97,114,59,1,8676,105,103,104,116,65,114,114,111,119,59,1,8646,101,105,108,105,110,103,59,1,8968,111,4,2,117,119,2679,2692,98,108,101,66,114,97,99,107,101,116,59,1,10214,110,4,2,84,86,2699,2710,101,101,86,101,99,116,111,114,59,1,10593,101,99,116,111,114,4,2,59,66,2721,2723,1,8643,97,114,59,1,10585,108,111,111,114,59,1,8970,105,103,104,116,4,2,65,86,2745,2752,114,114,111,119,59,1,8596,101,99,116,111,114,59,1,10574,4,2,101,114,2766,2792,101,4,3,59,65,86,2775,2777,2784,1,8867,114,114,111,119,59,1,8612,101,99,116,111,114,59,1,10586,105,97,110,103,108,101,4,3,59,66,69,2806,2808,2813,1,8882,97,114,59,1,10703,113,117,97,108,59,1,8884,112,4,3,68,84,86,2829,2841,2852,111,119,110,86,101,99,116,111,114,59,1,10577,101,101,86,101,99,116,111,114,59,1,10592,101,99,116,111,114,4,2,59,66,2863,2865,1,8639,97,114,59,1,10584,101,99,116,111,114,4,2,59,66,2881,2883,1,8636,97,114,59,1,10578,114,114,111,119,59,1,8656,105,103,104,116,97,114,114,111,119,59,1,8660,115,4,6,69,70,71,76,83,84,2922,2936,2947,2956,2962,2974,113,117,97,108,71,114,101,97,116,101,114,59,1,8922,117,108,108,69,113,117,97,108,59,1,8806,114,101,97,116,101,114,59,1,8822,101,115,115,59,1,10913,108,97,110,116,69,113,117,97,108,59,1,10877,105,108,100,101,59,1,8818,114,59,3,55349,56591,4,2,59,101,2992,2994,1,8920,102,116,97,114,114,111,119,59,1,8666,105,100,111,116,59,1,319,4,3,110,112,119,3019,3110,3115,103,4,4,76,82,108,114,3030,3058,3070,3098,101,102,116,4,2,65,82,3039,3046,114,114,111,119,59,1,10229,105,103,104,116,65,114,114,111,119,59,1,10231,105,103,104,116,65,114,114,111,119,59,1,10230,101,102,116,4,2,97,114,3079,3086,114,114,111,119,59,1,10232,105,103,104,116,97,114,114,111,119,59,1,10234,105,103,104,116,97,114,114,111,119,59,1,10233,102,59,3,55349,56643,101,114,4,2,76,82,3123,3134,101,102,116,65,114,114,111,119,59,1,8601,105,103,104,116,65,114,114,111,119,59,1,8600,4,3,99,104,116,3154,3158,3161,114,59,1,8466,59,1,8624,114,111,107,59,1,321,59,1,8810,4,8,97,99,101,102,105,111,115,117,3188,3192,3196,3222,3227,3237,3243,3248,112,59,1,10501,121,59,1,1052,4,2,100,108,3202,3213,105,117,109,83,112,97,99,101,59,1,8287,108,105,110,116,114,102,59,1,8499,114,59,3,55349,56592,110,117,115,80,108,117,115,59,1,8723,112,102,59,3,55349,56644,99,114,59,1,8499,59,1,924,4,9,74,97,99,101,102,111,115,116,117,3271,3276,3283,3306,3422,3427,4120,4126,4137,99,121,59,1,1034,99,117,116,101,59,1,323,4,3,97,101,121,3291,3297,3303,114,111,110,59,1,327,100,105,108,59,1,325,59,1,1053,4,3,103,115,119,3314,3380,3415,97,116,105,118,101,4,3,77,84,86,3327,3340,3365,101,100,105,117,109,83,112,97,99,101,59,1,8203,104,105,4,2,99,110,3348,3357,107,83,112,97,99,101,59,1,8203,83,112,97,99,101,59,1,8203,101,114,121,84,104,105,110,83,112,97,99,101,59,1,8203,116,101,100,4,2,71,76,3389,3405,114,101,97,116,101,114,71,114,101,97,116,101,114,59,1,8811,101,115,115,76,101,115,115,59,1,8810,76,105,110,101,59,1,10,114,59,3,55349,56593,4,4,66,110,112,116,3437,3444,3460,3464,114,101,97,107,59,1,8288,66,114,101,97,107,105,110,103,83,112,97,99,101,59,1,160,102,59,1,8469,4,13,59,67,68,69,71,72,76,78,80,82,83,84,86,3492,3494,3517,3536,3578,3657,3685,3784,3823,3860,3915,4066,4107,1,10988,4,2,111,117,3500,3510,110,103,114,117,101,110,116,59,1,8802,112,67,97,112,59,1,8813,111,117,98,108,101,86,101,114,116,105,99,97,108,66,97,114,59,1,8742,4,3,108,113,120,3544,3552,3571,101,109,101,110,116,59,1,8713,117,97,108,4,2,59,84,3561,3563,1,8800,105,108,100,101,59,3,8770,824,105,115,116,115,59,1,8708,114,101,97,116,101,114,4,7,59,69,70,71,76,83,84,3600,3602,3609,3621,3631,3637,3650,1,8815,113,117,97,108,59,1,8817,117,108,108,69,113,117,97,108,59,3,8807,824,114,101,97,116,101,114,59,3,8811,824,101,115,115,59,1,8825,108,97,110,116,69,113,117,97,108,59,3,10878,824,105,108,100,101,59,1,8821,117,109,112,4,2,68,69,3666,3677,111,119,110,72,117,109,112,59,3,8782,824,113,117,97,108,59,3,8783,824,101,4,2,102,115,3692,3724,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3709,3711,3717,1,8938,97,114,59,3,10703,824,113,117,97,108,59,1,8940,115,4,6,59,69,71,76,83,84,3739,3741,3748,3757,3764,3777,1,8814,113,117,97,108,59,1,8816,114,101,97,116,101,114,59,1,8824,101,115,115,59,3,8810,824,108,97,110,116,69,113,117,97,108,59,3,10877,824,105,108,100,101,59,1,8820,101,115,116,101,100,4,2,71,76,3795,3812,114,101,97,116,101,114,71,114,101,97,116,101,114,59,3,10914,824,101,115,115,76,101,115,115,59,3,10913,824,114,101,99,101,100,101,115,4,3,59,69,83,3838,3840,3848,1,8832,113,117,97,108,59,3,10927,824,108,97,110,116,69,113,117,97,108,59,1,8928,4,2,101,105,3866,3881,118,101,114,115,101,69,108,101,109,101,110,116,59,1,8716,103,104,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3900,3902,3908,1,8939,97,114,59,3,10704,824,113,117,97,108,59,1,8941,4,2,113,117,3921,3973,117,97,114,101,83,117,4,2,98,112,3933,3952,115,101,116,4,2,59,69,3942,3945,3,8847,824,113,117,97,108,59,1,8930,101,114,115,101,116,4,2,59,69,3963,3966,3,8848,824,113,117,97,108,59,1,8931,4,3,98,99,112,3981,4000,4045,115,101,116,4,2,59,69,3990,3993,3,8834,8402,113,117,97,108,59,1,8840,99,101,101,100,115,4,4,59,69,83,84,4015,4017,4025,4037,1,8833,113,117,97,108,59,3,10928,824,108,97,110,116,69,113,117,97,108,59,1,8929,105,108,100,101,59,3,8831,824,101,114,115,101,116,4,2,59,69,4056,4059,3,8835,8402,113,117,97,108,59,1,8841,105,108,100,101,4,4,59,69,70,84,4080,4082,4089,4100,1,8769,113,117,97,108,59,1,8772,117,108,108,69,113,117,97,108,59,1,8775,105,108,100,101,59,1,8777,101,114,116,105,99,97,108,66,97,114,59,1,8740,99,114,59,3,55349,56489,105,108,100,101,5,209,1,59,4135,1,209,59,1,925,4,14,69,97,99,100,102,103,109,111,112,114,115,116,117,118,4170,4176,4187,4205,4212,4217,4228,4253,4259,4292,4295,4316,4337,4346,108,105,103,59,1,338,99,117,116,101,5,211,1,59,4185,1,211,4,2,105,121,4193,4202,114,99,5,212,1,59,4200,1,212,59,1,1054,98,108,97,99,59,1,336,114,59,3,55349,56594,114,97,118,101,5,210,1,59,4226,1,210,4,3,97,101,105,4236,4241,4246,99,114,59,1,332,103,97,59,1,937,99,114,111,110,59,1,927,112,102,59,3,55349,56646,101,110,67,117,114,108,121,4,2,68,81,4272,4285,111,117,98,108,101,81,117,111,116,101,59,1,8220,117,111,116,101,59,1,8216,59,1,10836,4,2,99,108,4301,4306,114,59,3,55349,56490,97,115,104,5,216,1,59,4314,1,216,105,4,2,108,109,4323,4332,100,101,5,213,1,59,4330,1,213,101,115,59,1,10807,109,108,5,214,1,59,4344,1,214,101,114,4,2,66,80,4354,4380,4,2,97,114,4360,4364,114,59,1,8254,97,99,4,2,101,107,4372,4375,59,1,9182,101,116,59,1,9140,97,114,101,110,116,104,101,115,105,115,59,1,9180,4,9,97,99,102,104,105,108,111,114,115,4413,4422,4426,4431,4435,4438,4448,4471,4561,114,116,105,97,108,68,59,1,8706,121,59,1,1055,114,59,3,55349,56595,105,59,1,934,59,1,928,117,115,77,105,110,117,115,59,1,177,4,2,105,112,4454,4467,110,99,97,114,101,112,108,97,110,101,59,1,8460,102,59,1,8473,4,4,59,101,105,111,4481,4483,4526,4531,1,10939,99,101,100,101,115,4,4,59,69,83,84,4498,4500,4507,4519,1,8826,113,117,97,108,59,1,10927,108,97,110,116,69,113,117,97,108,59,1,8828,105,108,100,101,59,1,8830,109,101,59,1,8243,4,2,100,112,4537,4543,117,99,116,59,1,8719,111,114,116,105,111,110,4,2,59,97,4555,4557,1,8759,108,59,1,8733,4,2,99,105,4567,4572,114,59,3,55349,56491,59,1,936,4,4,85,102,111,115,4585,4594,4599,4604,79,84,5,34,1,59,4592,1,34,114,59,3,55349,56596,112,102,59,1,8474,99,114,59,3,55349,56492,4,12,66,69,97,99,101,102,104,105,111,114,115,117,4636,4642,4650,4681,4704,4763,4767,4771,5047,5069,5081,5094,97,114,114,59,1,10512,71,5,174,1,59,4648,1,174,4,3,99,110,114,4658,4664,4668,117,116,101,59,1,340,103,59,1,10219,114,4,2,59,116,4675,4677,1,8608,108,59,1,10518,4,3,97,101,121,4689,4695,4701,114,111,110,59,1,344,100,105,108,59,1,342,59,1,1056,4,2,59,118,4710,4712,1,8476,101,114,115,101,4,2,69,85,4722,4748,4,2,108,113,4728,4736,101,109,101,110,116,59,1,8715,117,105,108,105,98,114,105,117,109,59,1,8651,112,69,113,117,105,108,105,98,114,105,117,109,59,1,10607,114,59,1,8476,111,59,1,929,103,104,116,4,8,65,67,68,70,84,85,86,97,4792,4840,4849,4905,4912,4972,5022,5040,4,2,110,114,4798,4811,103,108,101,66,114,97,99,107,101,116,59,1,10217,114,111,119,4,3,59,66,76,4822,4824,4829,1,8594,97,114,59,1,8677,101,102,116,65,114,114,111,119,59,1,8644,101,105,108,105,110,103,59,1,8969,111,4,2,117,119,4856,4869,98,108,101,66,114,97,99,107,101,116,59,1,10215,110,4,2,84,86,4876,4887,101,101,86,101,99,116,111,114,59,1,10589,101,99,116,111,114,4,2,59,66,4898,4900,1,8642,97,114,59,1,10581,108,111,111,114,59,1,8971,4,2,101,114,4918,4944,101,4,3,59,65,86,4927,4929,4936,1,8866,114,114,111,119,59,1,8614,101,99,116,111,114,59,1,10587,105,97,110,103,108,101,4,3,59,66,69,4958,4960,4965,1,8883,97,114,59,1,10704,113,117,97,108,59,1,8885,112,4,3,68,84,86,4981,4993,5004,111,119,110,86,101,99,116,111,114,59,1,10575,101,101,86,101,99,116,111,114,59,1,10588,101,99,116,111,114,4,2,59,66,5015,5017,1,8638,97,114,59,1,10580,101,99,116,111,114,4,2,59,66,5033,5035,1,8640,97,114,59,1,10579,114,114,111,119,59,1,8658,4,2,112,117,5053,5057,102,59,1,8477,110,100,73,109,112,108,105,101,115,59,1,10608,105,103,104,116,97,114,114,111,119,59,1,8667,4,2,99,104,5087,5091,114,59,1,8475,59,1,8625,108,101,68,101,108,97,121,101,100,59,1,10740,4,13,72,79,97,99,102,104,105,109,111,113,115,116,117,5134,5150,5157,5164,5198,5203,5259,5265,5277,5283,5374,5380,5385,4,2,67,99,5140,5146,72,99,121,59,1,1065,121,59,1,1064,70,84,99,121,59,1,1068,99,117,116,101,59,1,346,4,5,59,97,101,105,121,5176,5178,5184,5190,5195,1,10940,114,111,110,59,1,352,100,105,108,59,1,350,114,99,59,1,348,59,1,1057,114,59,3,55349,56598,111,114,116,4,4,68,76,82,85,5216,5227,5238,5250,111,119,110,65,114,114,111,119,59,1,8595,101,102,116,65,114,114,111,119,59,1,8592,105,103,104,116,65,114,114,111,119,59,1,8594,112,65,114,114,111,119,59,1,8593,103,109,97,59,1,931,97,108,108,67,105,114,99,108,101,59,1,8728,112,102,59,3,55349,56650,4,2,114,117,5289,5293,116,59,1,8730,97,114,101,4,4,59,73,83,85,5306,5308,5322,5367,1,9633,110,116,101,114,115,101,99,116,105,111,110,59,1,8851,117,4,2,98,112,5329,5347,115,101,116,4,2,59,69,5338,5340,1,8847,113,117,97,108,59,1,8849,101,114,115,101,116,4,2,59,69,5358,5360,1,8848,113,117,97,108,59,1,8850,110,105,111,110,59,1,8852,99,114,59,3,55349,56494,97,114,59,1,8902,4,4,98,99,109,112,5395,5420,5475,5478,4,2,59,115,5401,5403,1,8912,101,116,4,2,59,69,5411,5413,1,8912,113,117,97,108,59,1,8838,4,2,99,104,5426,5468,101,101,100,115,4,4,59,69,83,84,5440,5442,5449,5461,1,8827,113,117,97,108,59,1,10928,108,97,110,116,69,113,117,97,108,59,1,8829,105,108,100,101,59,1,8831,84,104,97,116,59,1,8715,59,1,8721,4,3,59,101,115,5486,5488,5507,1,8913,114,115,101,116,4,2,59,69,5498,5500,1,8835,113,117,97,108,59,1,8839,101,116,59,1,8913,4,11,72,82,83,97,99,102,104,105,111,114,115,5536,5546,5552,5567,5579,5602,5607,5655,5695,5701,5711,79,82,78,5,222,1,59,5544,1,222,65,68,69,59,1,8482,4,2,72,99,5558,5563,99,121,59,1,1035,121,59,1,1062,4,2,98,117,5573,5576,59,1,9,59,1,932,4,3,97,101,121,5587,5593,5599,114,111,110,59,1,356,100,105,108,59,1,354,59,1,1058,114,59,3,55349,56599,4,2,101,105,5613,5631,4,2,114,116,5619,5627,101,102,111,114,101,59,1,8756,97,59,1,920,4,2,99,110,5637,5647,107,83,112,97,99,101,59,3,8287,8202,83,112,97,99,101,59,1,8201,108,100,101,4,4,59,69,70,84,5668,5670,5677,5688,1,8764,113,117,97,108,59,1,8771,117,108,108,69,113,117,97,108,59,1,8773,105,108,100,101,59,1,8776,112,102,59,3,55349,56651,105,112,108,101,68,111,116,59,1,8411,4,2,99,116,5717,5722,114,59,3,55349,56495,114,111,107,59,1,358,4,14,97,98,99,100,102,103,109,110,111,112,114,115,116,117,5758,5789,5805,5823,5830,5835,5846,5852,5921,5937,6089,6095,6101,6108,4,2,99,114,5764,5774,117,116,101,5,218,1,59,5772,1,218,114,4,2,59,111,5781,5783,1,8607,99,105,114,59,1,10569,114,4,2,99,101,5796,5800,121,59,1,1038,118,101,59,1,364,4,2,105,121,5811,5820,114,99,5,219,1,59,5818,1,219,59,1,1059,98,108,97,99,59,1,368,114,59,3,55349,56600,114,97,118,101,5,217,1,59,5844,1,217,97,99,114,59,1,362,4,2,100,105,5858,5905,101,114,4,2,66,80,5866,5892,4,2,97,114,5872,5876,114,59,1,95,97,99,4,2,101,107,5884,5887,59,1,9183,101,116,59,1,9141,97,114,101,110,116,104,101,115,105,115,59,1,9181,111,110,4,2,59,80,5913,5915,1,8899,108,117,115,59,1,8846,4,2,103,112,5927,5932,111,110,59,1,370,102,59,3,55349,56652,4,8,65,68,69,84,97,100,112,115,5955,5985,5996,6009,6026,6033,6044,6075,114,114,111,119,4,3,59,66,68,5967,5969,5974,1,8593,97,114,59,1,10514,111,119,110,65,114,114,111,119,59,1,8645,111,119,110,65,114,114,111,119,59,1,8597,113,117,105,108,105,98,114,105,117,109,59,1,10606,101,101,4,2,59,65,6017,6019,1,8869,114,114,111,119,59,1,8613,114,114,111,119,59,1,8657,111,119,110,97,114,114,111,119,59,1,8661,101,114,4,2,76,82,6052,6063,101,102,116,65,114,114,111,119,59,1,8598,105,103,104,116,65,114,114,111,119,59,1,8599,105,4,2,59,108,6082,6084,1,978,111,110,59,1,933,105,110,103,59,1,366,99,114,59,3,55349,56496,105,108,100,101,59,1,360,109,108,5,220,1,59,6115,1,220,4,9,68,98,99,100,101,102,111,115,118,6137,6143,6148,6152,6166,6250,6255,6261,6267,97,115,104,59,1,8875,97,114,59,1,10987,121,59,1,1042,97,115,104,4,2,59,108,6161,6163,1,8873,59,1,10982,4,2,101,114,6172,6175,59,1,8897,4,3,98,116,121,6183,6188,6238,97,114,59,1,8214,4,2,59,105,6194,6196,1,8214,99,97,108,4,4,66,76,83,84,6209,6214,6220,6231,97,114,59,1,8739,105,110,101,59,1,124,101,112,97,114,97,116,111,114,59,1,10072,105,108,100,101,59,1,8768,84,104,105,110,83,112,97,99,101,59,1,8202,114,59,3,55349,56601,112,102,59,3,55349,56653,99,114,59,3,55349,56497,100,97,115,104,59,1,8874,4,5,99,101,102,111,115,6286,6292,6298,6303,6309,105,114,99,59,1,372,100,103,101,59,1,8896,114,59,3,55349,56602,112,102,59,3,55349,56654,99,114,59,3,55349,56498,4,4,102,105,111,115,6325,6330,6333,6339,114,59,3,55349,56603,59,1,926,112,102,59,3,55349,56655,99,114,59,3,55349,56499,4,9,65,73,85,97,99,102,111,115,117,6365,6370,6375,6380,6391,6405,6410,6416,6422,99,121,59,1,1071,99,121,59,1,1031,99,121,59,1,1070,99,117,116,101,5,221,1,59,6389,1,221,4,2,105,121,6397,6402,114,99,59,1,374,59,1,1067,114,59,3,55349,56604,112,102,59,3,55349,56656,99,114,59,3,55349,56500,109,108,59,1,376,4,8,72,97,99,100,101,102,111,115,6445,6450,6457,6472,6477,6501,6505,6510,99,121,59,1,1046,99,117,116,101,59,1,377,4,2,97,121,6463,6469,114,111,110,59,1,381,59,1,1047,111,116,59,1,379,4,2,114,116,6483,6497,111,87,105,100,116,104,83,112,97,99,101,59,1,8203,97,59,1,918,114,59,1,8488,112,102,59,1,8484,99,114,59,3,55349,56501,4,16,97,98,99,101,102,103,108,109,110,111,112,114,115,116,117,119,6550,6561,6568,6612,6622,6634,6645,6672,6699,6854,6870,6923,6933,6963,6974,6983,99,117,116,101,5,225,1,59,6559,1,225,114,101,118,101,59,1,259,4,6,59,69,100,105,117,121,6582,6584,6588,6591,6600,6609,1,8766,59,3,8766,819,59,1,8767,114,99,5,226,1,59,6598,1,226,116,101,5,180,1,59,6607,1,180,59,1,1072,108,105,103,5,230,1,59,6620,1,230,4,2,59,114,6628,6630,1,8289,59,3,55349,56606,114,97,118,101,5,224,1,59,6643,1,224,4,2,101,112,6651,6667,4,2,102,112,6657,6663,115,121,109,59,1,8501,104,59,1,8501,104,97,59,1,945,4,2,97,112,6678,6692,4,2,99,108,6684,6688,114,59,1,257,103,59,1,10815,5,38,1,59,6697,1,38,4,2,100,103,6705,6737,4,5,59,97,100,115,118,6717,6719,6724,6727,6734,1,8743,110,100,59,1,10837,59,1,10844,108,111,112,101,59,1,10840,59,1,10842,4,7,59,101,108,109,114,115,122,6753,6755,6758,6762,6814,6835,6848,1,8736,59,1,10660,101,59,1,8736,115,100,4,2,59,97,6770,6772,1,8737,4,8,97,98,99,100,101,102,103,104,6790,6793,6796,6799,6802,6805,6808,6811,59,1,10664,59,1,10665,59,1,10666,59,1,10667,59,1,10668,59,1,10669,59,1,10670,59,1,10671,116,4,2,59,118,6821,6823,1,8735,98,4,2,59,100,6830,6832,1,8894,59,1,10653,4,2,112,116,6841,6845,104,59,1,8738,59,1,197,97,114,114,59,1,9084,4,2,103,112,6860,6865,111,110,59,1,261,102,59,3,55349,56658,4,7,59,69,97,101,105,111,112,6886,6888,6891,6897,6900,6904,6908,1,8776,59,1,10864,99,105,114,59,1,10863,59,1,8778,100,59,1,8779,115,59,1,39,114,111,120,4,2,59,101,6917,6919,1,8776,113,59,1,8778,105,110,103,5,229,1,59,6931,1,229,4,3,99,116,121,6941,6946,6949,114,59,3,55349,56502,59,1,42,109,112,4,2,59,101,6957,6959,1,8776,113,59,1,8781,105,108,100,101,5,227,1,59,6972,1,227,109,108,5,228,1,59,6981,1,228,4,2,99,105,6989,6997,111,110,105,110,116,59,1,8755,110,116,59,1,10769,4,16,78,97,98,99,100,101,102,105,107,108,110,111,112,114,115,117,7036,7041,7119,7135,7149,7155,7219,7224,7347,7354,7463,7489,7786,7793,7814,7866,111,116,59,1,10989,4,2,99,114,7047,7094,107,4,4,99,101,112,115,7058,7064,7073,7080,111,110,103,59,1,8780,112,115,105,108,111,110,59,1,1014,114,105,109,101,59,1,8245,105,109,4,2,59,101,7088,7090,1,8765,113,59,1,8909,4,2,118,119,7100,7105,101,101,59,1,8893,101,100,4,2,59,103,7113,7115,1,8965,101,59,1,8965,114,107,4,2,59,116,7127,7129,1,9141,98,114,107,59,1,9142,4,2,111,121,7141,7146,110,103,59,1,8780,59,1,1073,113,117,111,59,1,8222,4,5,99,109,112,114,116,7167,7181,7188,7193,7199,97,117,115,4,2,59,101,7176,7178,1,8757,59,1,8757,112,116,121,118,59,1,10672,115,105,59,1,1014,110,111,117,59,1,8492,4,3,97,104,119,7207,7210,7213,59,1,946,59,1,8502,101,101,110,59,1,8812,114,59,3,55349,56607,103,4,7,99,111,115,116,117,118,119,7241,7262,7288,7305,7328,7335,7340,4,3,97,105,117,7249,7253,7258,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,4,3,100,112,116,7270,7275,7281,111,116,59,1,10752,108,117,115,59,1,10753,105,109,101,115,59,1,10754,4,2,113,116,7294,7300,99,117,112,59,1,10758,97,114,59,1,9733,114,105,97,110,103,108,101,4,2,100,117,7318,7324,111,119,110,59,1,9661,112,59,1,9651,112,108,117,115,59,1,10756,101,101,59,1,8897,101,100,103,101,59,1,8896,97,114,111,119,59,1,10509,4,3,97,107,111,7362,7436,7458,4,2,99,110,7368,7432,107,4,3,108,115,116,7377,7386,7394,111,122,101,110,103,101,59,1,10731,113,117,97,114,101,59,1,9642,114,105,97,110,103,108,101,4,4,59,100,108,114,7411,7413,7419,7425,1,9652,111,119,110,59,1,9662,101,102,116,59,1,9666,105,103,104,116,59,1,9656,107,59,1,9251,4,2,49,51,7442,7454,4,2,50,52,7448,7451,59,1,9618,59,1,9617,52,59,1,9619,99,107,59,1,9608,4,2,101,111,7469,7485,4,2,59,113,7475,7478,3,61,8421,117,105,118,59,3,8801,8421,116,59,1,8976,4,4,112,116,119,120,7499,7504,7517,7523,102,59,3,55349,56659,4,2,59,116,7510,7512,1,8869,111,109,59,1,8869,116,105,101,59,1,8904,4,12,68,72,85,86,98,100,104,109,112,116,117,118,7549,7571,7597,7619,7655,7660,7682,7708,7715,7721,7728,7750,4,4,76,82,108,114,7559,7562,7565,7568,59,1,9559,59,1,9556,59,1,9558,59,1,9555,4,5,59,68,85,100,117,7583,7585,7588,7591,7594,1,9552,59,1,9574,59,1,9577,59,1,9572,59,1,9575,4,4,76,82,108,114,7607,7610,7613,7616,59,1,9565,59,1,9562,59,1,9564,59,1,9561,4,7,59,72,76,82,104,108,114,7635,7637,7640,7643,7646,7649,7652,1,9553,59,1,9580,59,1,9571,59,1,9568,59,1,9579,59,1,9570,59,1,9567,111,120,59,1,10697,4,4,76,82,108,114,7670,7673,7676,7679,59,1,9557,59,1,9554,59,1,9488,59,1,9484,4,5,59,68,85,100,117,7694,7696,7699,7702,7705,1,9472,59,1,9573,59,1,9576,59,1,9516,59,1,9524,105,110,117,115,59,1,8863,108,117,115,59,1,8862,105,109,101,115,59,1,8864,4,4,76,82,108,114,7738,7741,7744,7747,59,1,9563,59,1,9560,59,1,9496,59,1,9492,4,7,59,72,76,82,104,108,114,7766,7768,7771,7774,7777,7780,7783,1,9474,59,1,9578,59,1,9569,59,1,9566,59,1,9532,59,1,9508,59,1,9500,114,105,109,101,59,1,8245,4,2,101,118,7799,7804,118,101,59,1,728,98,97,114,5,166,1,59,7812,1,166,4,4,99,101,105,111,7824,7829,7834,7846,114,59,3,55349,56503,109,105,59,1,8271,109,4,2,59,101,7841,7843,1,8765,59,1,8909,108,4,3,59,98,104,7855,7857,7860,1,92,59,1,10693,115,117,98,59,1,10184,4,2,108,109,7872,7885,108,4,2,59,101,7879,7881,1,8226,116,59,1,8226,112,4,3,59,69,101,7894,7896,7899,1,8782,59,1,10926,4,2,59,113,7905,7907,1,8783,59,1,8783,4,15,97,99,100,101,102,104,105,108,111,114,115,116,117,119,121,7942,8021,8075,8080,8121,8126,8157,8279,8295,8430,8446,8485,8491,8707,8726,4,3,99,112,114,7950,7956,8007,117,116,101,59,1,263,4,6,59,97,98,99,100,115,7970,7972,7977,7984,7998,8003,1,8745,110,100,59,1,10820,114,99,117,112,59,1,10825,4,2,97,117,7990,7994,112,59,1,10827,112,59,1,10823,111,116,59,1,10816,59,3,8745,65024,4,2,101,111,8013,8017,116,59,1,8257,110,59,1,711,4,4,97,101,105,117,8031,8046,8056,8061,4,2,112,114,8037,8041,115,59,1,10829,111,110,59,1,269,100,105,108,5,231,1,59,8054,1,231,114,99,59,1,265,112,115,4,2,59,115,8069,8071,1,10828,109,59,1,10832,111,116,59,1,267,4,3,100,109,110,8088,8097,8104,105,108,5,184,1,59,8095,1,184,112,116,121,118,59,1,10674,116,5,162,2,59,101,8112,8114,1,162,114,100,111,116,59,1,183,114,59,3,55349,56608,4,3,99,101,105,8134,8138,8154,121,59,1,1095,99,107,4,2,59,109,8146,8148,1,10003,97,114,107,59,1,10003,59,1,967,114,4,7,59,69,99,101,102,109,115,8174,8176,8179,8258,8261,8268,8273,1,9675,59,1,10691,4,3,59,101,108,8187,8189,8193,1,710,113,59,1,8791,101,4,2,97,100,8200,8223,114,114,111,119,4,2,108,114,8210,8216,101,102,116,59,1,8634,105,103,104,116,59,1,8635,4,5,82,83,97,99,100,8235,8238,8241,8246,8252,59,1,174,59,1,9416,115,116,59,1,8859,105,114,99,59,1,8858,97,115,104,59,1,8861,59,1,8791,110,105,110,116,59,1,10768,105,100,59,1,10991,99,105,114,59,1,10690,117,98,115,4,2,59,117,8288,8290,1,9827,105,116,59,1,9827,4,4,108,109,110,112,8305,8326,8376,8400,111,110,4,2,59,101,8313,8315,1,58,4,2,59,113,8321,8323,1,8788,59,1,8788,4,2,109,112,8332,8344,97,4,2,59,116,8339,8341,1,44,59,1,64,4,3,59,102,108,8352,8354,8358,1,8705,110,59,1,8728,101,4,2,109,120,8365,8371,101,110,116,59,1,8705,101,115,59,1,8450,4,2,103,105,8382,8395,4,2,59,100,8388,8390,1,8773,111,116,59,1,10861,110,116,59,1,8750,4,3,102,114,121,8408,8412,8417,59,3,55349,56660,111,100,59,1,8720,5,169,2,59,115,8424,8426,1,169,114,59,1,8471,4,2,97,111,8436,8441,114,114,59,1,8629,115,115,59,1,10007,4,2,99,117,8452,8457,114,59,3,55349,56504,4,2,98,112,8463,8474,4,2,59,101,8469,8471,1,10959,59,1,10961,4,2,59,101,8480,8482,1,10960,59,1,10962,100,111,116,59,1,8943,4,7,100,101,108,112,114,118,119,8507,8522,8536,8550,8600,8697,8702,97,114,114,4,2,108,114,8516,8519,59,1,10552,59,1,10549,4,2,112,115,8528,8532,114,59,1,8926,99,59,1,8927,97,114,114,4,2,59,112,8545,8547,1,8630,59,1,10557,4,6,59,98,99,100,111,115,8564,8566,8573,8587,8592,8596,1,8746,114,99,97,112,59,1,10824,4,2,97,117,8579,8583,112,59,1,10822,112,59,1,10826,111,116,59,1,8845,114,59,1,10821,59,3,8746,65024,4,4,97,108,114,118,8610,8623,8663,8672,114,114,4,2,59,109,8618,8620,1,8631,59,1,10556,121,4,3,101,118,119,8632,8651,8656,113,4,2,112,115,8639,8645,114,101,99,59,1,8926,117,99,99,59,1,8927,101,101,59,1,8910,101,100,103,101,59,1,8911,101,110,5,164,1,59,8670,1,164,101,97,114,114,111,119,4,2,108,114,8684,8690,101,102,116,59,1,8630,105,103,104,116,59,1,8631,101,101,59,1,8910,101,100,59,1,8911,4,2,99,105,8713,8721,111,110,105,110,116,59,1,8754,110,116,59,1,8753,108,99,116,121,59,1,9005,4,19,65,72,97,98,99,100,101,102,104,105,106,108,111,114,115,116,117,119,122,8773,8778,8783,8821,8839,8854,8887,8914,8930,8944,9036,9041,9058,9197,9227,9258,9281,9297,9305,114,114,59,1,8659,97,114,59,1,10597,4,4,103,108,114,115,8793,8799,8805,8809,103,101,114,59,1,8224,101,116,104,59,1,8504,114,59,1,8595,104,4,2,59,118,8816,8818,1,8208,59,1,8867,4,2,107,108,8827,8834,97,114,111,119,59,1,10511,97,99,59,1,733,4,2,97,121,8845,8851,114,111,110,59,1,271,59,1,1076,4,3,59,97,111,8862,8864,8880,1,8518,4,2,103,114,8870,8876,103,101,114,59,1,8225,114,59,1,8650,116,115,101,113,59,1,10871,4,3,103,108,109,8895,8902,8907,5,176,1,59,8900,1,176,116,97,59,1,948,112,116,121,118,59,1,10673,4,2,105,114,8920,8926,115,104,116,59,1,10623,59,3,55349,56609,97,114,4,2,108,114,8938,8941,59,1,8643,59,1,8642,4,5,97,101,103,115,118,8956,8986,8989,8996,9001,109,4,3,59,111,115,8965,8967,8983,1,8900,110,100,4,2,59,115,8975,8977,1,8900,117,105,116,59,1,9830,59,1,9830,59,1,168,97,109,109,97,59,1,989,105,110,59,1,8946,4,3,59,105,111,9009,9011,9031,1,247,100,101,5,247,2,59,111,9020,9022,1,247,110,116,105,109,101,115,59,1,8903,110,120,59,1,8903,99,121,59,1,1106,99,4,2,111,114,9048,9053,114,110,59,1,8990,111,112,59,1,8973,4,5,108,112,116,117,119,9070,9076,9081,9130,9144,108,97,114,59,1,36,102,59,3,55349,56661,4,5,59,101,109,112,115,9093,9095,9109,9116,9122,1,729,113,4,2,59,100,9102,9104,1,8784,111,116,59,1,8785,105,110,117,115,59,1,8760,108,117,115,59,1,8724,113,117,97,114,101,59,1,8865,98,108,101,98,97,114,119,101,100,103,101,59,1,8966,110,4,3,97,100,104,9153,9160,9172,114,114,111,119,59,1,8595,111,119,110,97,114,114,111,119,115,59,1,8650,97,114,112,111,111,110,4,2,108,114,9184,9190,101,102,116,59,1,8643,105,103,104,116,59,1,8642,4,2,98,99,9203,9211,107,97,114,111,119,59,1,10512,4,2,111,114,9217,9222,114,110,59,1,8991,111,112,59,1,8972,4,3,99,111,116,9235,9248,9252,4,2,114,121,9241,9245,59,3,55349,56505,59,1,1109,108,59,1,10742,114,111,107,59,1,273,4,2,100,114,9264,9269,111,116,59,1,8945,105,4,2,59,102,9276,9278,1,9663,59,1,9662,4,2,97,104,9287,9292,114,114,59,1,8693,97,114,59,1,10607,97,110,103,108,101,59,1,10662,4,2,99,105,9311,9315,121,59,1,1119,103,114,97,114,114,59,1,10239,4,18,68,97,99,100,101,102,103,108,109,110,111,112,113,114,115,116,117,120,9361,9376,9398,9439,9444,9447,9462,9495,9531,9585,9598,9614,9659,9755,9771,9792,9808,9826,4,2,68,111,9367,9372,111,116,59,1,10871,116,59,1,8785,4,2,99,115,9382,9392,117,116,101,5,233,1,59,9390,1,233,116,101,114,59,1,10862,4,4,97,105,111,121,9408,9414,9430,9436,114,111,110,59,1,283,114,4,2,59,99,9421,9423,1,8790,5,234,1,59,9428,1,234,108,111,110,59,1,8789,59,1,1101,111,116,59,1,279,59,1,8519,4,2,68,114,9453,9458,111,116,59,1,8786,59,3,55349,56610,4,3,59,114,115,9470,9472,9482,1,10906,97,118,101,5,232,1,59,9480,1,232,4,2,59,100,9488,9490,1,10902,111,116,59,1,10904,4,4,59,105,108,115,9505,9507,9515,9518,1,10905,110,116,101,114,115,59,1,9191,59,1,8467,4,2,59,100,9524,9526,1,10901,111,116,59,1,10903,4,3,97,112,115,9539,9544,9564,99,114,59,1,275,116,121,4,3,59,115,118,9554,9556,9561,1,8709,101,116,59,1,8709,59,1,8709,112,4,2,49,59,9571,9583,4,2,51,52,9577,9580,59,1,8196,59,1,8197,1,8195,4,2,103,115,9591,9594,59,1,331,112,59,1,8194,4,2,103,112,9604,9609,111,110,59,1,281,102,59,3,55349,56662,4,3,97,108,115,9622,9635,9640,114,4,2,59,115,9629,9631,1,8917,108,59,1,10723,117,115,59,1,10865,105,4,3,59,108,118,9649,9651,9656,1,949,111,110,59,1,949,59,1,1013,4,4,99,115,117,118,9669,9686,9716,9747,4,2,105,111,9675,9680,114,99,59,1,8790,108,111,110,59,1,8789,4,2,105,108,9692,9696,109,59,1,8770,97,110,116,4,2,103,108,9705,9710,116,114,59,1,10902,101,115,115,59,1,10901,4,3,97,101,105,9724,9729,9734,108,115,59,1,61,115,116,59,1,8799,118,4,2,59,68,9741,9743,1,8801,68,59,1,10872,112,97,114,115,108,59,1,10725,4,2,68,97,9761,9766,111,116,59,1,8787,114,114,59,1,10609,4,3,99,100,105,9779,9783,9788,114,59,1,8495,111,116,59,1,8784,109,59,1,8770,4,2,97,104,9798,9801,59,1,951,5,240,1,59,9806,1,240,4,2,109,114,9814,9822,108,5,235,1,59,9820,1,235,111,59,1,8364,4,3,99,105,112,9834,9838,9843,108,59,1,33,115,116,59,1,8707,4,2,101,111,9849,9859,99,116,97,116,105,111,110,59,1,8496,110,101,110,116,105,97,108,101,59,1,8519,4,12,97,99,101,102,105,106,108,110,111,112,114,115,9896,9910,9914,9921,9954,9960,9967,9989,9994,10027,10036,10164,108,108,105,110,103,100,111,116,115,101,113,59,1,8786,121,59,1,1092,109,97,108,101,59,1,9792,4,3,105,108,114,9929,9935,9950,108,105,103,59,1,64259,4,2,105,108,9941,9945,103,59,1,64256,105,103,59,1,64260,59,3,55349,56611,108,105,103,59,1,64257,108,105,103,59,3,102,106,4,3,97,108,116,9975,9979,9984,116,59,1,9837,105,103,59,1,64258,110,115,59,1,9649,111,102,59,1,402,4,2,112,114,10000,10005,102,59,3,55349,56663,4,2,97,107,10011,10016,108,108,59,1,8704,4,2,59,118,10022,10024,1,8916,59,1,10969,97,114,116,105,110,116,59,1,10765,4,2,97,111,10042,10159,4,2,99,115,10048,10155,4,6,49,50,51,52,53,55,10062,10102,10114,10135,10139,10151,4,6,50,51,52,53,54,56,10076,10083,10086,10093,10096,10099,5,189,1,59,10081,1,189,59,1,8531,5,188,1,59,10091,1,188,59,1,8533,59,1,8537,59,1,8539,4,2,51,53,10108,10111,59,1,8532,59,1,8534,4,3,52,53,56,10122,10129,10132,5,190,1,59,10127,1,190,59,1,8535,59,1,8540,53,59,1,8536,4,2,54,56,10145,10148,59,1,8538,59,1,8541,56,59,1,8542,108,59,1,8260,119,110,59,1,8994,99,114,59,3,55349,56507,4,17,69,97,98,99,100,101,102,103,105,106,108,110,111,114,115,116,118,10206,10217,10247,10254,10268,10273,10358,10363,10374,10380,10385,10406,10458,10464,10470,10497,10610,4,2,59,108,10212,10214,1,8807,59,1,10892,4,3,99,109,112,10225,10231,10244,117,116,101,59,1,501,109,97,4,2,59,100,10239,10241,1,947,59,1,989,59,1,10886,114,101,118,101,59,1,287,4,2,105,121,10260,10265,114,99,59,1,285,59,1,1075,111,116,59,1,289,4,4,59,108,113,115,10283,10285,10288,10308,1,8805,59,1,8923,4,3,59,113,115,10296,10298,10301,1,8805,59,1,8807,108,97,110,116,59,1,10878,4,4,59,99,100,108,10318,10320,10324,10345,1,10878,99,59,1,10921,111,116,4,2,59,111,10332,10334,1,10880,4,2,59,108,10340,10342,1,10882,59,1,10884,4,2,59,101,10351,10354,3,8923,65024,115,59,1,10900,114,59,3,55349,56612,4,2,59,103,10369,10371,1,8811,59,1,8921,109,101,108,59,1,8503,99,121,59,1,1107,4,4,59,69,97,106,10395,10397,10400,10403,1,8823,59,1,10898,59,1,10917,59,1,10916,4,4,69,97,101,115,10416,10419,10434,10453,59,1,8809,112,4,2,59,112,10426,10428,1,10890,114,111,120,59,1,10890,4,2,59,113,10440,10442,1,10888,4,2,59,113,10448,10450,1,10888,59,1,8809,105,109,59,1,8935,112,102,59,3,55349,56664,97,118,101,59,1,96,4,2,99,105,10476,10480,114,59,1,8458,109,4,3,59,101,108,10489,10491,10494,1,8819,59,1,10894,59,1,10896,5,62,6,59,99,100,108,113,114,10512,10514,10527,10532,10538,10545,1,62,4,2,99,105,10520,10523,59,1,10919,114,59,1,10874,111,116,59,1,8919,80,97,114,59,1,10645,117,101,115,116,59,1,10876,4,5,97,100,101,108,115,10557,10574,10579,10599,10605,4,2,112,114,10563,10570,112,114,111,120,59,1,10886,114,59,1,10616,111,116,59,1,8919,113,4,2,108,113,10586,10592,101,115,115,59,1,8923,108,101,115,115,59,1,10892,101,115,115,59,1,8823,105,109,59,1,8819,4,2,101,110,10616,10626,114,116,110,101,113,113,59,3,8809,65024,69,59,3,8809,65024,4,10,65,97,98,99,101,102,107,111,115,121,10653,10658,10713,10718,10724,10760,10765,10786,10850,10875,114,114,59,1,8660,4,4,105,108,109,114,10668,10674,10678,10684,114,115,112,59,1,8202,102,59,1,189,105,108,116,59,1,8459,4,2,100,114,10690,10695,99,121,59,1,1098,4,3,59,99,119,10703,10705,10710,1,8596,105,114,59,1,10568,59,1,8621,97,114,59,1,8463,105,114,99,59,1,293,4,3,97,108,114,10732,10748,10754,114,116,115,4,2,59,117,10741,10743,1,9829,105,116,59,1,9829,108,105,112,59,1,8230,99,111,110,59,1,8889,114,59,3,55349,56613,115,4,2,101,119,10772,10779,97,114,111,119,59,1,10533,97,114,111,119,59,1,10534,4,5,97,109,111,112,114,10798,10803,10809,10839,10844,114,114,59,1,8703,116,104,116,59,1,8763,107,4,2,108,114,10816,10827,101,102,116,97,114,114,111,119,59,1,8617,105,103,104,116,97,114,114,111,119,59,1,8618,102,59,3,55349,56665,98,97,114,59,1,8213,4,3,99,108,116,10858,10863,10869,114,59,3,55349,56509,97,115,104,59,1,8463,114,111,107,59,1,295,4,2,98,112,10881,10887,117,108,108,59,1,8259,104,101,110,59,1,8208,4,15,97,99,101,102,103,105,106,109,110,111,112,113,115,116,117,10925,10936,10958,10977,10990,11001,11039,11045,11101,11192,11220,11226,11237,11285,11299,99,117,116,101,5,237,1,59,10934,1,237,4,3,59,105,121,10944,10946,10955,1,8291,114,99,5,238,1,59,10953,1,238,59,1,1080,4,2,99,120,10964,10968,121,59,1,1077,99,108,5,161,1,59,10975,1,161,4,2,102,114,10983,10986,59,1,8660,59,3,55349,56614,114,97,118,101,5,236,1,59,10999,1,236,4,4,59,105,110,111,11011,11013,11028,11034,1,8520,4,2,105,110,11019,11024,110,116,59,1,10764,116,59,1,8749,102,105,110,59,1,10716,116,97,59,1,8489,108,105,103,59,1,307,4,3,97,111,112,11053,11092,11096,4,3,99,103,116,11061,11065,11088,114,59,1,299,4,3,101,108,112,11073,11076,11082,59,1,8465,105,110,101,59,1,8464,97,114,116,59,1,8465,104,59,1,305,102,59,1,8887,101,100,59,1,437,4,5,59,99,102,111,116,11113,11115,11121,11136,11142,1,8712,97,114,101,59,1,8453,105,110,4,2,59,116,11129,11131,1,8734,105,101,59,1,10717,100,111,116,59,1,305,4,5,59,99,101,108,112,11154,11156,11161,11179,11186,1,8747,97,108,59,1,8890,4,2,103,114,11167,11173,101,114,115,59,1,8484,99,97,108,59,1,8890,97,114,104,107,59,1,10775,114,111,100,59,1,10812,4,4,99,103,112,116,11202,11206,11211,11216,121,59,1,1105,111,110,59,1,303,102,59,3,55349,56666,97,59,1,953,114,111,100,59,1,10812,117,101,115,116,5,191,1,59,11235,1,191,4,2,99,105,11243,11248,114,59,3,55349,56510,110,4,5,59,69,100,115,118,11261,11263,11266,11271,11282,1,8712,59,1,8953,111,116,59,1,8949,4,2,59,118,11277,11279,1,8948,59,1,8947,59,1,8712,4,2,59,105,11291,11293,1,8290,108,100,101,59,1,297,4,2,107,109,11305,11310,99,121,59,1,1110,108,5,239,1,59,11316,1,239,4,6,99,102,109,111,115,117,11332,11346,11351,11357,11363,11380,4,2,105,121,11338,11343,114,99,59,1,309,59,1,1081,114,59,3,55349,56615,97,116,104,59,1,567,112,102,59,3,55349,56667,4,2,99,101,11369,11374,114,59,3,55349,56511,114,99,121,59,1,1112,107,99,121,59,1,1108,4,8,97,99,102,103,104,106,111,115,11404,11418,11433,11438,11445,11450,11455,11461,112,112,97,4,2,59,118,11413,11415,1,954,59,1,1008,4,2,101,121,11424,11430,100,105,108,59,1,311,59,1,1082,114,59,3,55349,56616,114,101,101,110,59,1,312,99,121,59,1,1093,99,121,59,1,1116,112,102,59,3,55349,56668,99,114,59,3,55349,56512,4,23,65,66,69,72,97,98,99,100,101,102,103,104,106,108,109,110,111,112,114,115,116,117,118,11515,11538,11544,11555,11560,11721,11780,11818,11868,12136,12160,12171,12203,12208,12246,12275,12327,12509,12523,12569,12641,12732,12752,4,3,97,114,116,11523,11528,11532,114,114,59,1,8666,114,59,1,8656,97,105,108,59,1,10523,97,114,114,59,1,10510,4,2,59,103,11550,11552,1,8806,59,1,10891,97,114,59,1,10594,4,9,99,101,103,109,110,112,113,114,116,11580,11586,11594,11600,11606,11624,11627,11636,11694,117,116,101,59,1,314,109,112,116,121,118,59,1,10676,114,97,110,59,1,8466,98,100,97,59,1,955,103,4,3,59,100,108,11615,11617,11620,1,10216,59,1,10641,101,59,1,10216,59,1,10885,117,111,5,171,1,59,11634,1,171,114,4,8,59,98,102,104,108,112,115,116,11655,11657,11669,11673,11677,11681,11685,11690,1,8592,4,2,59,102,11663,11665,1,8676,115,59,1,10527,115,59,1,10525,107,59,1,8617,112,59,1,8619,108,59,1,10553,105,109,59,1,10611,108,59,1,8610,4,3,59,97,101,11702,11704,11709,1,10923,105,108,59,1,10521,4,2,59,115,11715,11717,1,10925,59,3,10925,65024,4,3,97,98,114,11729,11734,11739,114,114,59,1,10508,114,107,59,1,10098,4,2,97,107,11745,11758,99,4,2,101,107,11752,11755,59,1,123,59,1,91,4,2,101,115,11764,11767,59,1,10635,108,4,2,100,117,11774,11777,59,1,10639,59,1,10637,4,4,97,101,117,121,11790,11796,11811,11815,114,111,110,59,1,318,4,2,100,105,11802,11807,105,108,59,1,316,108,59,1,8968,98,59,1,123,59,1,1083,4,4,99,113,114,115,11828,11832,11845,11864,97,59,1,10550,117,111,4,2,59,114,11840,11842,1,8220,59,1,8222,4,2,100,117,11851,11857,104,97,114,59,1,10599,115,104,97,114,59,1,10571,104,59,1,8626,4,5,59,102,103,113,115,11880,11882,12008,12011,12031,1,8804,116,4,5,97,104,108,114,116,11895,11913,11935,11947,11996,114,114,111,119,4,2,59,116,11905,11907,1,8592,97,105,108,59,1,8610,97,114,112,111,111,110,4,2,100,117,11925,11931,111,119,110,59,1,8637,112,59,1,8636,101,102,116,97,114,114,111,119,115,59,1,8647,105,103,104,116,4,3,97,104,115,11959,11974,11984,114,114,111,119,4,2,59,115,11969,11971,1,8596,59,1,8646,97,114,112,111,111,110,115,59,1,8651,113,117,105,103,97,114,114,111,119,59,1,8621,104,114,101,101,116,105,109,101,115,59,1,8907,59,1,8922,4,3,59,113,115,12019,12021,12024,1,8804,59,1,8806,108,97,110,116,59,1,10877,4,5,59,99,100,103,115,12043,12045,12049,12070,12083,1,10877,99,59,1,10920,111,116,4,2,59,111,12057,12059,1,10879,4,2,59,114,12065,12067,1,10881,59,1,10883,4,2,59,101,12076,12079,3,8922,65024,115,59,1,10899,4,5,97,100,101,103,115,12095,12103,12108,12126,12131,112,112,114,111,120,59,1,10885,111,116,59,1,8918,113,4,2,103,113,12115,12120,116,114,59,1,8922,103,116,114,59,1,10891,116,114,59,1,8822,105,109,59,1,8818,4,3,105,108,114,12144,12150,12156,115,104,116,59,1,10620,111,111,114,59,1,8970,59,3,55349,56617,4,2,59,69,12166,12168,1,8822,59,1,10897,4,2,97,98,12177,12198,114,4,2,100,117,12184,12187,59,1,8637,4,2,59,108,12193,12195,1,8636,59,1,10602,108,107,59,1,9604,99,121,59,1,1113,4,5,59,97,99,104,116,12220,12222,12227,12235,12241,1,8810,114,114,59,1,8647,111,114,110,101,114,59,1,8990,97,114,100,59,1,10603,114,105,59,1,9722,4,2,105,111,12252,12258,100,111,116,59,1,320,117,115,116,4,2,59,97,12267,12269,1,9136,99,104,101,59,1,9136,4,4,69,97,101,115,12285,12288,12303,12322,59,1,8808,112,4,2,59,112,12295,12297,1,10889,114,111,120,59,1,10889,4,2,59,113,12309,12311,1,10887,4,2,59,113,12317,12319,1,10887,59,1,8808,105,109,59,1,8934,4,8,97,98,110,111,112,116,119,122,12345,12359,12364,12421,12446,12467,12474,12490,4,2,110,114,12351,12355,103,59,1,10220,114,59,1,8701,114,107,59,1,10214,103,4,3,108,109,114,12373,12401,12409,101,102,116,4,2,97,114,12382,12389,114,114,111,119,59,1,10229,105,103,104,116,97,114,114,111,119,59,1,10231,97,112,115,116,111,59,1,10236,105,103,104,116,97,114,114,111,119,59,1,10230,112,97,114,114,111,119,4,2,108,114,12433,12439,101,102,116,59,1,8619,105,103,104,116,59,1,8620,4,3,97,102,108,12454,12458,12462,114,59,1,10629,59,3,55349,56669,117,115,59,1,10797,105,109,101,115,59,1,10804,4,2,97,98,12480,12485,115,116,59,1,8727,97,114,59,1,95,4,3,59,101,102,12498,12500,12506,1,9674,110,103,101,59,1,9674,59,1,10731,97,114,4,2,59,108,12517,12519,1,40,116,59,1,10643,4,5,97,99,104,109,116,12535,12540,12548,12561,12564,114,114,59,1,8646,111,114,110,101,114,59,1,8991,97,114,4,2,59,100,12556,12558,1,8651,59,1,10605,59,1,8206,114,105,59,1,8895,4,6,97,99,104,105,113,116,12583,12589,12594,12597,12614,12635,113,117,111,59,1,8249,114,59,3,55349,56513,59,1,8624,109,4,3,59,101,103,12606,12608,12611,1,8818,59,1,10893,59,1,10895,4,2,98,117,12620,12623,59,1,91,111,4,2,59,114,12630,12632,1,8216,59,1,8218,114,111,107,59,1,322,5,60,8,59,99,100,104,105,108,113,114,12660,12662,12675,12680,12686,12692,12698,12705,1,60,4,2,99,105,12668,12671,59,1,10918,114,59,1,10873,111,116,59,1,8918,114,101,101,59,1,8907,109,101,115,59,1,8905,97,114,114,59,1,10614,117,101,115,116,59,1,10875,4,2,80,105,12711,12716,97,114,59,1,10646,4,3,59,101,102,12724,12726,12729,1,9667,59,1,8884,59,1,9666,114,4,2,100,117,12739,12746,115,104,97,114,59,1,10570,104,97,114,59,1,10598,4,2,101,110,12758,12768,114,116,110,101,113,113,59,3,8808,65024,69,59,3,8808,65024,4,14,68,97,99,100,101,102,104,105,108,110,111,112,115,117,12803,12809,12893,12908,12914,12928,12933,12937,13011,13025,13032,13049,13052,13069,68,111,116,59,1,8762,4,4,99,108,112,114,12819,12827,12849,12887,114,5,175,1,59,12825,1,175,4,2,101,116,12833,12836,59,1,9794,4,2,59,101,12842,12844,1,10016,115,101,59,1,10016,4,2,59,115,12855,12857,1,8614,116,111,4,4,59,100,108,117,12869,12871,12877,12883,1,8614,111,119,110,59,1,8615,101,102,116,59,1,8612,112,59,1,8613,107,101,114,59,1,9646,4,2,111,121,12899,12905,109,109,97,59,1,10793,59,1,1084,97,115,104,59,1,8212,97,115,117,114,101,100,97,110,103,108,101,59,1,8737,114,59,3,55349,56618,111,59,1,8487,4,3,99,100,110,12945,12954,12985,114,111,5,181,1,59,12952,1,181,4,4,59,97,99,100,12964,12966,12971,12976,1,8739,115,116,59,1,42,105,114,59,1,10992,111,116,5,183,1,59,12983,1,183,117,115,4,3,59,98,100,12995,12997,13000,1,8722,59,1,8863,4,2,59,117,13006,13008,1,8760,59,1,10794,4,2,99,100,13017,13021,112,59,1,10971,114,59,1,8230,112,108,117,115,59,1,8723,4,2,100,112,13038,13044,101,108,115,59,1,8871,102,59,3,55349,56670,59,1,8723,4,2,99,116,13058,13063,114,59,3,55349,56514,112,111,115,59,1,8766,4,3,59,108,109,13077,13079,13087,1,956,116,105,109,97,112,59,1,8888,97,112,59,1,8888,4,24,71,76,82,86,97,98,99,100,101,102,103,104,105,106,108,109,111,112,114,115,116,117,118,119,13142,13165,13217,13229,13247,13330,13359,13414,13420,13508,13513,13579,13602,13626,13631,13762,13767,13855,13936,13995,14214,14285,14312,14432,4,2,103,116,13148,13152,59,3,8921,824,4,2,59,118,13158,13161,3,8811,8402,59,3,8811,824,4,3,101,108,116,13173,13200,13204,102,116,4,2,97,114,13181,13188,114,114,111,119,59,1,8653,105,103,104,116,97,114,114,111,119,59,1,8654,59,3,8920,824,4,2,59,118,13210,13213,3,8810,8402,59,3,8810,824,105,103,104,116,97,114,114,111,119,59,1,8655,4,2,68,100,13235,13241,97,115,104,59,1,8879,97,115,104,59,1,8878,4,5,98,99,110,112,116,13259,13264,13270,13275,13308,108,97,59,1,8711,117,116,101,59,1,324,103,59,3,8736,8402,4,5,59,69,105,111,112,13287,13289,13293,13298,13302,1,8777,59,3,10864,824,100,59,3,8779,824,115,59,1,329,114,111,120,59,1,8777,117,114,4,2,59,97,13316,13318,1,9838,108,4,2,59,115,13325,13327,1,9838,59,1,8469,4,2,115,117,13336,13344,112,5,160,1,59,13342,1,160,109,112,4,2,59,101,13352,13355,3,8782,824,59,3,8783,824,4,5,97,101,111,117,121,13371,13385,13391,13407,13411,4,2,112,114,13377,13380,59,1,10819,111,110,59,1,328,100,105,108,59,1,326,110,103,4,2,59,100,13399,13401,1,8775,111,116,59,3,10861,824,112,59,1,10818,59,1,1085,97,115,104,59,1,8211,4,7,59,65,97,100,113,115,120,13436,13438,13443,13466,13472,13478,13494,1,8800,114,114,59,1,8663,114,4,2,104,114,13450,13454,107,59,1,10532,4,2,59,111,13460,13462,1,8599,119,59,1,8599,111,116,59,3,8784,824,117,105,118,59,1,8802,4,2,101,105,13484,13489,97,114,59,1,10536,109,59,3,8770,824,105,115,116,4,2,59,115,13503,13505,1,8708,59,1,8708,114,59,3,55349,56619,4,4,69,101,115,116,13523,13527,13563,13568,59,3,8807,824,4,3,59,113,115,13535,13537,13559,1,8817,4,3,59,113,115,13545,13547,13551,1,8817,59,3,8807,824,108,97,110,116,59,3,10878,824,59,3,10878,824,105,109,59,1,8821,4,2,59,114,13574,13576,1,8815,59,1,8815,4,3,65,97,112,13587,13592,13597,114,114,59,1,8654,114,114,59,1,8622,97,114,59,1,10994,4,3,59,115,118,13610,13612,13623,1,8715,4,2,59,100,13618,13620,1,8956,59,1,8954,59,1,8715,99,121,59,1,1114,4,7,65,69,97,100,101,115,116,13647,13652,13656,13661,13665,13737,13742,114,114,59,1,8653,59,3,8806,824,114,114,59,1,8602,114,59,1,8229,4,4,59,102,113,115,13675,13677,13703,13725,1,8816,116,4,2,97,114,13684,13691,114,114,111,119,59,1,8602,105,103,104,116,97,114,114,111,119,59,1,8622,4,3,59,113,115,13711,13713,13717,1,8816,59,3,8806,824,108,97,110,116,59,3,10877,824,4,2,59,115,13731,13734,3,10877,824,59,1,8814,105,109,59,1,8820,4,2,59,114,13748,13750,1,8814,105,4,2,59,101,13757,13759,1,8938,59,1,8940,105,100,59,1,8740,4,2,112,116,13773,13778,102,59,3,55349,56671,5,172,3,59,105,110,13787,13789,13829,1,172,110,4,4,59,69,100,118,13800,13802,13806,13812,1,8713,59,3,8953,824,111,116,59,3,8949,824,4,3,97,98,99,13820,13823,13826,59,1,8713,59,1,8951,59,1,8950,105,4,2,59,118,13836,13838,1,8716,4,3,97,98,99,13846,13849,13852,59,1,8716,59,1,8958,59,1,8957,4,3,97,111,114,13863,13892,13899,114,4,4,59,97,115,116,13874,13876,13883,13888,1,8742,108,108,101,108,59,1,8742,108,59,3,11005,8421,59,3,8706,824,108,105,110,116,59,1,10772,4,3,59,99,101,13907,13909,13914,1,8832,117,101,59,1,8928,4,2,59,99,13920,13923,3,10927,824,4,2,59,101,13929,13931,1,8832,113,59,3,10927,824,4,4,65,97,105,116,13946,13951,13971,13982,114,114,59,1,8655,114,114,4,3,59,99,119,13961,13963,13967,1,8603,59,3,10547,824,59,3,8605,824,103,104,116,97,114,114,111,119,59,1,8603,114,105,4,2,59,101,13990,13992,1,8939,59,1,8941,4,7,99,104,105,109,112,113,117,14011,14036,14060,14080,14085,14090,14106,4,4,59,99,101,114,14021,14023,14028,14032,1,8833,117,101,59,1,8929,59,3,10928,824,59,3,55349,56515,111,114,116,4,2,109,112,14045,14050,105,100,59,1,8740,97,114,97,108,108,101,108,59,1,8742,109,4,2,59,101,14067,14069,1,8769,4,2,59,113,14075,14077,1,8772,59,1,8772,105,100,59,1,8740,97,114,59,1,8742,115,117,4,2,98,112,14098,14102,101,59,1,8930,101,59,1,8931,4,3,98,99,112,14114,14157,14171,4,4,59,69,101,115,14124,14126,14130,14133,1,8836,59,3,10949,824,59,1,8840,101,116,4,2,59,101,14141,14144,3,8834,8402,113,4,2,59,113,14151,14153,1,8840,59,3,10949,824,99,4,2,59,101,14164,14166,1,8833,113,59,3,10928,824,4,4,59,69,101,115,14181,14183,14187,14190,1,8837,59,3,10950,824,59,1,8841,101,116,4,2,59,101,14198,14201,3,8835,8402,113,4,2,59,113,14208,14210,1,8841,59,3,10950,824,4,4,103,105,108,114,14224,14228,14238,14242,108,59,1,8825,108,100,101,5,241,1,59,14236,1,241,103,59,1,8824,105,97,110,103,108,101,4,2,108,114,14254,14269,101,102,116,4,2,59,101,14263,14265,1,8938,113,59,1,8940,105,103,104,116,4,2,59,101,14279,14281,1,8939,113,59,1,8941,4,2,59,109,14291,14293,1,957,4,3,59,101,115,14301,14303,14308,1,35,114,111,59,1,8470,112,59,1,8199,4,9,68,72,97,100,103,105,108,114,115,14332,14338,14344,14349,14355,14369,14376,14408,14426,97,115,104,59,1,8877,97,114,114,59,1,10500,112,59,3,8781,8402,97,115,104,59,1,8876,4,2,101,116,14361,14365,59,3,8805,8402,59,3,62,8402,110,102,105,110,59,1,10718,4,3,65,101,116,14384,14389,14393,114,114,59,1,10498,59,3,8804,8402,4,2,59,114,14399,14402,3,60,8402,105,101,59,3,8884,8402,4,2,65,116,14414,14419,114,114,59,1,10499,114,105,101,59,3,8885,8402,105,109,59,3,8764,8402,4,3,65,97,110,14440,14445,14468,114,114,59,1,8662,114,4,2,104,114,14452,14456,107,59,1,10531,4,2,59,111,14462,14464,1,8598,119,59,1,8598,101,97,114,59,1,10535,4,18,83,97,99,100,101,102,103,104,105,108,109,111,112,114,115,116,117,118,14512,14515,14535,14560,14597,14603,14618,14643,14657,14662,14701,14741,14747,14769,14851,14877,14907,14916,59,1,9416,4,2,99,115,14521,14531,117,116,101,5,243,1,59,14529,1,243,116,59,1,8859,4,2,105,121,14541,14557,114,4,2,59,99,14548,14550,1,8858,5,244,1,59,14555,1,244,59,1,1086,4,5,97,98,105,111,115,14572,14577,14583,14587,14591,115,104,59,1,8861,108,97,99,59,1,337,118,59,1,10808,116,59,1,8857,111,108,100,59,1,10684,108,105,103,59,1,339,4,2,99,114,14609,14614,105,114,59,1,10687,59,3,55349,56620,4,3,111,114,116,14626,14630,14640,110,59,1,731,97,118,101,5,242,1,59,14638,1,242,59,1,10689,4,2,98,109,14649,14654,97,114,59,1,10677,59,1,937,110,116,59,1,8750,4,4,97,99,105,116,14672,14677,14693,14698,114,114,59,1,8634,4,2,105,114,14683,14687,114,59,1,10686,111,115,115,59,1,10683,110,101,59,1,8254,59,1,10688,4,3,97,101,105,14709,14714,14719,99,114,59,1,333,103,97,59,1,969,4,3,99,100,110,14727,14733,14736,114,111,110,59,1,959,59,1,10678,117,115,59,1,8854,112,102,59,3,55349,56672,4,3,97,101,108,14755,14759,14764,114,59,1,10679,114,112,59,1,10681,117,115,59,1,8853,4,7,59,97,100,105,111,115,118,14785,14787,14792,14831,14837,14841,14848,1,8744,114,114,59,1,8635,4,4,59,101,102,109,14802,14804,14817,14824,1,10845,114,4,2,59,111,14811,14813,1,8500,102,59,1,8500,5,170,1,59,14822,1,170,5,186,1,59,14829,1,186,103,111,102,59,1,8886,114,59,1,10838,108,111,112,101,59,1,10839,59,1,10843,4,3,99,108,111,14859,14863,14873,114,59,1,8500,97,115,104,5,248,1,59,14871,1,248,108,59,1,8856,105,4,2,108,109,14884,14893,100,101,5,245,1,59,14891,1,245,101,115,4,2,59,97,14901,14903,1,8855,115,59,1,10806,109,108,5,246,1,59,14914,1,246,98,97,114,59,1,9021,4,12,97,99,101,102,104,105,108,109,111,114,115,117,14948,14992,14996,15033,15038,15068,15090,15189,15192,15222,15427,15441,114,4,4,59,97,115,116,14959,14961,14976,14989,1,8741,5,182,2,59,108,14968,14970,1,182,108,101,108,59,1,8741,4,2,105,108,14982,14986,109,59,1,10995,59,1,11005,59,1,8706,121,59,1,1087,114,4,5,99,105,109,112,116,15009,15014,15019,15024,15027,110,116,59,1,37,111,100,59,1,46,105,108,59,1,8240,59,1,8869,101,110,107,59,1,8241,114,59,3,55349,56621,4,3,105,109,111,15046,15057,15063,4,2,59,118,15052,15054,1,966,59,1,981,109,97,116,59,1,8499,110,101,59,1,9742,4,3,59,116,118,15076,15078,15087,1,960,99,104,102,111,114,107,59,1,8916,59,1,982,4,2,97,117,15096,15119,110,4,2,99,107,15103,15115,107,4,2,59,104,15110,15112,1,8463,59,1,8462,118,59,1,8463,115,4,9,59,97,98,99,100,101,109,115,116,15140,15142,15148,15151,15156,15168,15171,15179,15184,1,43,99,105,114,59,1,10787,59,1,8862,105,114,59,1,10786,4,2,111,117,15162,15165,59,1,8724,59,1,10789,59,1,10866,110,5,177,1,59,15177,1,177,105,109,59,1,10790,119,111,59,1,10791,59,1,177,4,3,105,112,117,15200,15208,15213,110,116,105,110,116,59,1,10773,102,59,3,55349,56673,110,100,5,163,1,59,15220,1,163,4,10,59,69,97,99,101,105,110,111,115,117,15244,15246,15249,15253,15258,15334,15347,15367,15416,15421,1,8826,59,1,10931,112,59,1,10935,117,101,59,1,8828,4,2,59,99,15264,15266,1,10927,4,6,59,97,99,101,110,115,15280,15282,15290,15299,15303,15329,1,8826,112,112,114,111,120,59,1,10935,117,114,108,121,101,113,59,1,8828,113,59,1,10927,4,3,97,101,115,15311,15319,15324,112,112,114,111,120,59,1,10937,113,113,59,1,10933,105,109,59,1,8936,105,109,59,1,8830,109,101,4,2,59,115,15342,15344,1,8242,59,1,8473,4,3,69,97,115,15355,15358,15362,59,1,10933,112,59,1,10937,105,109,59,1,8936,4,3,100,102,112,15375,15378,15404,59,1,8719,4,3,97,108,115,15386,15392,15398,108,97,114,59,1,9006,105,110,101,59,1,8978,117,114,102,59,1,8979,4,2,59,116,15410,15412,1,8733,111,59,1,8733,105,109,59,1,8830,114,101,108,59,1,8880,4,2,99,105,15433,15438,114,59,3,55349,56517,59,1,968,110,99,115,112,59,1,8200,4,6,102,105,111,112,115,117,15462,15467,15472,15478,15485,15491,114,59,3,55349,56622,110,116,59,1,10764,112,102,59,3,55349,56674,114,105,109,101,59,1,8279,99,114,59,3,55349,56518,4,3,97,101,111,15499,15520,15534,116,4,2,101,105,15506,15515,114,110,105,111,110,115,59,1,8461,110,116,59,1,10774,115,116,4,2,59,101,15528,15530,1,63,113,59,1,8799,116,5,34,1,59,15540,1,34,4,21,65,66,72,97,98,99,100,101,102,104,105,108,109,110,111,112,114,115,116,117,120,15586,15609,15615,15620,15796,15855,15893,15931,15977,16001,16039,16183,16204,16222,16228,16285,16312,16318,16363,16408,16416,4,3,97,114,116,15594,15599,15603,114,114,59,1,8667,114,59,1,8658,97,105,108,59,1,10524,97,114,114,59,1,10511,97,114,59,1,10596,4,7,99,100,101,110,113,114,116,15636,15651,15656,15664,15687,15696,15770,4,2,101,117,15642,15646,59,3,8765,817,116,101,59,1,341,105,99,59,1,8730,109,112,116,121,118,59,1,10675,103,4,4,59,100,101,108,15675,15677,15680,15683,1,10217,59,1,10642,59,1,10661,101,59,1,10217,117,111,5,187,1,59,15694,1,187,114,4,11,59,97,98,99,102,104,108,112,115,116,119,15721,15723,15727,15739,15742,15746,15750,15754,15758,15763,15767,1,8594,112,59,1,10613,4,2,59,102,15733,15735,1,8677,115,59,1,10528,59,1,10547,115,59,1,10526,107,59,1,8618,112,59,1,8620,108,59,1,10565,105,109,59,1,10612,108,59,1,8611,59,1,8605,4,2,97,105,15776,15781,105,108,59,1,10522,111,4,2,59,110,15788,15790,1,8758,97,108,115,59,1,8474,4,3,97,98,114,15804,15809,15814,114,114,59,1,10509,114,107,59,1,10099,4,2,97,107,15820,15833,99,4,2,101,107,15827,15830,59,1,125,59,1,93,4,2,101,115,15839,15842,59,1,10636,108,4,2,100,117,15849,15852,59,1,10638,59,1,10640,4,4,97,101,117,121,15865,15871,15886,15890,114,111,110,59,1,345,4,2,100,105,15877,15882,105,108,59,1,343,108,59,1,8969,98,59,1,125,59,1,1088,4,4,99,108,113,115,15903,15907,15914,15927,97,59,1,10551,100,104,97,114,59,1,10601,117,111,4,2,59,114,15922,15924,1,8221,59,1,8221,104,59,1,8627,4,3,97,99,103,15939,15966,15970,108,4,4,59,105,112,115,15950,15952,15957,15963,1,8476,110,101,59,1,8475,97,114,116,59,1,8476,59,1,8477,116,59,1,9645,5,174,1,59,15975,1,174,4,3,105,108,114,15985,15991,15997,115,104,116,59,1,10621,111,111,114,59,1,8971,59,3,55349,56623,4,2,97,111,16007,16028,114,4,2,100,117,16014,16017,59,1,8641,4,2,59,108,16023,16025,1,8640,59,1,10604,4,2,59,118,16034,16036,1,961,59,1,1009,4,3,103,110,115,16047,16167,16171,104,116,4,6,97,104,108,114,115,116,16063,16081,16103,16130,16143,16155,114,114,111,119,4,2,59,116,16073,16075,1,8594,97,105,108,59,1,8611,97,114,112,111,111,110,4,2,100,117,16093,16099,111,119,110,59,1,8641,112,59,1,8640,101,102,116,4,2,97,104,16112,16120,114,114,111,119,115,59,1,8644,97,114,112,111,111,110,115,59,1,8652,105,103,104,116,97,114,114,111,119,115,59,1,8649,113,117,105,103,97,114,114,111,119,59,1,8605,104,114,101,101,116,105,109,101,115,59,1,8908,103,59,1,730,105,110,103,100,111,116,115,101,113,59,1,8787,4,3,97,104,109,16191,16196,16201,114,114,59,1,8644,97,114,59,1,8652,59,1,8207,111,117,115,116,4,2,59,97,16214,16216,1,9137,99,104,101,59,1,9137,109,105,100,59,1,10990,4,4,97,98,112,116,16238,16252,16257,16278,4,2,110,114,16244,16248,103,59,1,10221,114,59,1,8702,114,107,59,1,10215,4,3,97,102,108,16265,16269,16273,114,59,1,10630,59,3,55349,56675,117,115,59,1,10798,105,109,101,115,59,1,10805,4,2,97,112,16291,16304,114,4,2,59,103,16298,16300,1,41,116,59,1,10644,111,108,105,110,116,59,1,10770,97,114,114,59,1,8649,4,4,97,99,104,113,16328,16334,16339,16342,113,117,111,59,1,8250,114,59,3,55349,56519,59,1,8625,4,2,98,117,16348,16351,59,1,93,111,4,2,59,114,16358,16360,1,8217,59,1,8217,4,3,104,105,114,16371,16377,16383,114,101,101,59,1,8908,109,101,115,59,1,8906,105,4,4,59,101,102,108,16394,16396,16399,16402,1,9657,59,1,8885,59,1,9656,116,114,105,59,1,10702,108,117,104,97,114,59,1,10600,59,1,8478,4,19,97,98,99,100,101,102,104,105,108,109,111,112,113,114,115,116,117,119,122,16459,16466,16472,16572,16590,16672,16687,16746,16844,16850,16924,16963,16988,17115,17121,17154,17206,17614,17656,99,117,116,101,59,1,347,113,117,111,59,1,8218,4,10,59,69,97,99,101,105,110,112,115,121,16494,16496,16499,16513,16518,16531,16536,16556,16564,16569,1,8827,59,1,10932,4,2,112,114,16505,16508,59,1,10936,111,110,59,1,353,117,101,59,1,8829,4,2,59,100,16524,16526,1,10928,105,108,59,1,351,114,99,59,1,349,4,3,69,97,115,16544,16547,16551,59,1,10934,112,59,1,10938,105,109,59,1,8937,111,108,105,110,116,59,1,10771,105,109,59,1,8831,59,1,1089,111,116,4,3,59,98,101,16582,16584,16587,1,8901,59,1,8865,59,1,10854,4,7,65,97,99,109,115,116,120,16606,16611,16634,16642,16646,16652,16668,114,114,59,1,8664,114,4,2,104,114,16618,16622,107,59,1,10533,4,2,59,111,16628,16630,1,8600,119,59,1,8600,116,5,167,1,59,16640,1,167,105,59,1,59,119,97,114,59,1,10537,109,4,2,105,110,16659,16665,110,117,115,59,1,8726,59,1,8726,116,59,1,10038,114,4,2,59,111,16679,16682,3,55349,56624,119,110,59,1,8994,4,4,97,99,111,121,16697,16702,16716,16739,114,112,59,1,9839,4,2,104,121,16708,16713,99,121,59,1,1097,59,1,1096,114,116,4,2,109,112,16724,16729,105,100,59,1,8739,97,114,97,108,108,101,108,59,1,8741,5,173,1,59,16744,1,173,4,2,103,109,16752,16770,109,97,4,3,59,102,118,16762,16764,16767,1,963,59,1,962,59,1,962,4,8,59,100,101,103,108,110,112,114,16788,16790,16795,16806,16817,16828,16832,16838,1,8764,111,116,59,1,10858,4,2,59,113,16801,16803,1,8771,59,1,8771,4,2,59,69,16812,16814,1,10910,59,1,10912,4,2,59,69,16823,16825,1,10909,59,1,10911,101,59,1,8774,108,117,115,59,1,10788,97,114,114,59,1,10610,97,114,114,59,1,8592,4,4,97,101,105,116,16860,16883,16891,16904,4,2,108,115,16866,16878,108,115,101,116,109,105,110,117,115,59,1,8726,104,112,59,1,10803,112,97,114,115,108,59,1,10724,4,2,100,108,16897,16900,59,1,8739,101,59,1,8995,4,2,59,101,16910,16912,1,10922,4,2,59,115,16918,16920,1,10924,59,3,10924,65024,4,3,102,108,112,16932,16938,16958,116,99,121,59,1,1100,4,2,59,98,16944,16946,1,47,4,2,59,97,16952,16954,1,10692,114,59,1,9023,102,59,3,55349,56676,97,4,2,100,114,16970,16985,101,115,4,2,59,117,16978,16980,1,9824,105,116,59,1,9824,59,1,8741,4,3,99,115,117,16996,17028,17089,4,2,97,117,17002,17015,112,4,2,59,115,17009,17011,1,8851,59,3,8851,65024,112,4,2,59,115,17022,17024,1,8852,59,3,8852,65024,117,4,2,98,112,17035,17062,4,3,59,101,115,17043,17045,17048,1,8847,59,1,8849,101,116,4,2,59,101,17056,17058,1,8847,113,59,1,8849,4,3,59,101,115,17070,17072,17075,1,8848,59,1,8850,101,116,4,2,59,101,17083,17085,1,8848,113,59,1,8850,4,3,59,97,102,17097,17099,17112,1,9633,114,4,2,101,102,17106,17109,59,1,9633,59,1,9642,59,1,9642,97,114,114,59,1,8594,4,4,99,101,109,116,17131,17136,17142,17148,114,59,3,55349,56520,116,109,110,59,1,8726,105,108,101,59,1,8995,97,114,102,59,1,8902,4,2,97,114,17160,17172,114,4,2,59,102,17167,17169,1,9734,59,1,9733,4,2,97,110,17178,17202,105,103,104,116,4,2,101,112,17188,17197,112,115,105,108,111,110,59,1,1013,104,105,59,1,981,115,59,1,175,4,5,98,99,109,110,112,17218,17351,17420,17423,17427,4,9,59,69,100,101,109,110,112,114,115,17238,17240,17243,17248,17261,17267,17279,17285,17291,1,8834,59,1,10949,111,116,59,1,10941,4,2,59,100,17254,17256,1,8838,111,116,59,1,10947,117,108,116,59,1,10945,4,2,69,101,17273,17276,59,1,10955,59,1,8842,108,117,115,59,1,10943,97,114,114,59,1,10617,4,3,101,105,117,17299,17335,17339,116,4,3,59,101,110,17308,17310,17322,1,8834,113,4,2,59,113,17317,17319,1,8838,59,1,10949,101,113,4,2,59,113,17330,17332,1,8842,59,1,10955,109,59,1,10951,4,2,98,112,17345,17348,59,1,10965,59,1,10963,99,4,6,59,97,99,101,110,115,17366,17368,17376,17385,17389,17415,1,8827,112,112,114,111,120,59,1,10936,117,114,108,121,101,113,59,1,8829,113,59,1,10928,4,3,97,101,115,17397,17405,17410,112,112,114,111,120,59,1,10938,113,113,59,1,10934,105,109,59,1,8937,105,109,59,1,8831,59,1,8721,103,59,1,9834,4,13,49,50,51,59,69,100,101,104,108,109,110,112,115,17455,17462,17469,17476,17478,17481,17496,17509,17524,17530,17536,17548,17554,5,185,1,59,17460,1,185,5,178,1,59,17467,1,178,5,179,1,59,17474,1,179,1,8835,59,1,10950,4,2,111,115,17487,17491,116,59,1,10942,117,98,59,1,10968,4,2,59,100,17502,17504,1,8839,111,116,59,1,10948,115,4,2,111,117,17516,17520,108,59,1,10185,98,59,1,10967,97,114,114,59,1,10619,117,108,116,59,1,10946,4,2,69,101,17542,17545,59,1,10956,59,1,8843,108,117,115,59,1,10944,4,3,101,105,117,17562,17598,17602,116,4,3,59,101,110,17571,17573,17585,1,8835,113,4,2,59,113,17580,17582,1,8839,59,1,10950,101,113,4,2,59,113,17593,17595,1,8843,59,1,10956,109,59,1,10952,4,2,98,112,17608,17611,59,1,10964,59,1,10966,4,3,65,97,110,17622,17627,17650,114,114,59,1,8665,114,4,2,104,114,17634,17638,107,59,1,10534,4,2,59,111,17644,17646,1,8601,119,59,1,8601,119,97,114,59,1,10538,108,105,103,5,223,1,59,17664,1,223,4,13,97,98,99,100,101,102,104,105,111,112,114,115,119,17694,17709,17714,17737,17742,17749,17754,17860,17905,17957,17964,18090,18122,4,2,114,117,17700,17706,103,101,116,59,1,8982,59,1,964,114,107,59,1,9140,4,3,97,101,121,17722,17728,17734,114,111,110,59,1,357,100,105,108,59,1,355,59,1,1090,111,116,59,1,8411,108,114,101,99,59,1,8981,114,59,3,55349,56625,4,4,101,105,107,111,17764,17805,17836,17851,4,2,114,116,17770,17786,101,4,2,52,102,17777,17780,59,1,8756,111,114,101,59,1,8756,97,4,3,59,115,118,17795,17797,17802,1,952,121,109,59,1,977,59,1,977,4,2,99,110,17811,17831,107,4,2,97,115,17818,17826,112,112,114,111,120,59,1,8776,105,109,59,1,8764,115,112,59,1,8201,4,2,97,115,17842,17846,112,59,1,8776,105,109,59,1,8764,114,110,5,254,1,59,17858,1,254,4,3,108,109,110,17868,17873,17901,100,101,59,1,732,101,115,5,215,3,59,98,100,17884,17886,17898,1,215,4,2,59,97,17892,17894,1,8864,114,59,1,10801,59,1,10800,116,59,1,8749,4,3,101,112,115,17913,17917,17953,97,59,1,10536,4,4,59,98,99,102,17927,17929,17934,17939,1,8868,111,116,59,1,9014,105,114,59,1,10993,4,2,59,111,17945,17948,3,55349,56677,114,107,59,1,10970,97,59,1,10537,114,105,109,101,59,1,8244,4,3,97,105,112,17972,17977,18082,100,101,59,1,8482,4,7,97,100,101,109,112,115,116,17993,18051,18056,18059,18066,18072,18076,110,103,108,101,4,5,59,100,108,113,114,18009,18011,18017,18032,18035,1,9653,111,119,110,59,1,9663,101,102,116,4,2,59,101,18026,18028,1,9667,113,59,1,8884,59,1,8796,105,103,104,116,4,2,59,101,18045,18047,1,9657,113,59,1,8885,111,116,59,1,9708,59,1,8796,105,110,117,115,59,1,10810,108,117,115,59,1,10809,98,59,1,10701,105,109,101,59,1,10811,101,122,105,117,109,59,1,9186,4,3,99,104,116,18098,18111,18116,4,2,114,121,18104,18108,59,3,55349,56521,59,1,1094,99,121,59,1,1115,114,111,107,59,1,359,4,2,105,111,18128,18133,120,116,59,1,8812,104,101,97,100,4,2,108,114,18143,18154,101,102,116,97,114,114,111,119,59,1,8606,105,103,104,116,97,114,114,111,119,59,1,8608,4,18,65,72,97,98,99,100,102,103,104,108,109,111,112,114,115,116,117,119,18204,18209,18214,18234,18250,18268,18292,18308,18319,18343,18379,18397,18413,18504,18547,18553,18584,18603,114,114,59,1,8657,97,114,59,1,10595,4,2,99,114,18220,18230,117,116,101,5,250,1,59,18228,1,250,114,59,1,8593,114,4,2,99,101,18241,18245,121,59,1,1118,118,101,59,1,365,4,2,105,121,18256,18265,114,99,5,251,1,59,18263,1,251,59,1,1091,4,3,97,98,104,18276,18281,18287,114,114,59,1,8645,108,97,99,59,1,369,97,114,59,1,10606,4,2,105,114,18298,18304,115,104,116,59,1,10622,59,3,55349,56626,114,97,118,101,5,249,1,59,18317,1,249,4,2,97,98,18325,18338,114,4,2,108,114,18332,18335,59,1,8639,59,1,8638,108,107,59,1,9600,4,2,99,116,18349,18374,4,2,111,114,18355,18369,114,110,4,2,59,101,18363,18365,1,8988,114,59,1,8988,111,112,59,1,8975,114,105,59,1,9720,4,2,97,108,18385,18390,99,114,59,1,363,5,168,1,59,18395,1,168,4,2,103,112,18403,18408,111,110,59,1,371,102,59,3,55349,56678,4,6,97,100,104,108,115,117,18427,18434,18445,18470,18475,18494,114,114,111,119,59,1,8593,111,119,110,97,114,114,111,119,59,1,8597,97,114,112,111,111,110,4,2,108,114,18457,18463,101,102,116,59,1,8639,105,103,104,116,59,1,8638,117,115,59,1,8846,105,4,3,59,104,108,18484,18486,18489,1,965,59,1,978,111,110,59,1,965,112,97,114,114,111,119,115,59,1,8648,4,3,99,105,116,18512,18537,18542,4,2,111,114,18518,18532,114,110,4,2,59,101,18526,18528,1,8989,114,59,1,8989,111,112,59,1,8974,110,103,59,1,367,114,105,59,1,9721,99,114,59,3,55349,56522,4,3,100,105,114,18561,18566,18572,111,116,59,1,8944,108,100,101,59,1,361,105,4,2,59,102,18579,18581,1,9653,59,1,9652,4,2,97,109,18590,18595,114,114,59,1,8648,108,5,252,1,59,18601,1,252,97,110,103,108,101,59,1,10663,4,15,65,66,68,97,99,100,101,102,108,110,111,112,114,115,122,18643,18648,18661,18667,18847,18851,18857,18904,18909,18915,18931,18937,18943,18949,18996,114,114,59,1,8661,97,114,4,2,59,118,18656,18658,1,10984,59,1,10985,97,115,104,59,1,8872,4,2,110,114,18673,18679,103,114,116,59,1,10652,4,7,101,107,110,112,114,115,116,18695,18704,18711,18720,18742,18754,18810,112,115,105,108,111,110,59,1,1013,97,112,112,97,59,1,1008,111,116,104,105,110,103,59,1,8709,4,3,104,105,114,18728,18732,18735,105,59,1,981,59,1,982,111,112,116,111,59,1,8733,4,2,59,104,18748,18750,1,8597,111,59,1,1009,4,2,105,117,18760,18766,103,109,97,59,1,962,4,2,98,112,18772,18791,115,101,116,110,101,113,4,2,59,113,18784,18787,3,8842,65024,59,3,10955,65024,115,101,116,110,101,113,4,2,59,113,18803,18806,3,8843,65024,59,3,10956,65024,4,2,104,114,18816,18822,101,116,97,59,1,977,105,97,110,103,108,101,4,2,108,114,18834,18840,101,102,116,59,1,8882,105,103,104,116,59,1,8883,121,59,1,1074,97,115,104,59,1,8866,4,3,101,108,114,18865,18884,18890,4,3,59,98,101,18873,18875,18880,1,8744,97,114,59,1,8891,113,59,1,8794,108,105,112,59,1,8942,4,2,98,116,18896,18901,97,114,59,1,124,59,1,124,114,59,3,55349,56627,116,114,105,59,1,8882,115,117,4,2,98,112,18923,18927,59,3,8834,8402,59,3,8835,8402,112,102,59,3,55349,56679,114,111,112,59,1,8733,116,114,105,59,1,8883,4,2,99,117,18955,18960,114,59,3,55349,56523,4,2,98,112,18966,18981,110,4,2,69,101,18973,18977,59,3,10955,65024,59,3,8842,65024,110,4,2,69,101,18988,18992,59,3,10956,65024,59,3,8843,65024,105,103,122,97,103,59,1,10650,4,7,99,101,102,111,112,114,115,19020,19026,19061,19066,19072,19075,19089,105,114,99,59,1,373,4,2,100,105,19032,19055,4,2,98,103,19038,19043,97,114,59,1,10847,101,4,2,59,113,19050,19052,1,8743,59,1,8793,101,114,112,59,1,8472,114,59,3,55349,56628,112,102,59,3,55349,56680,59,1,8472,4,2,59,101,19081,19083,1,8768,97,116,104,59,1,8768,99,114,59,3,55349,56524,4,14,99,100,102,104,105,108,109,110,111,114,115,117,118,119,19125,19146,19152,19157,19173,19176,19192,19197,19202,19236,19252,19269,19286,19291,4,3,97,105,117,19133,19137,19142,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,116,114,105,59,1,9661,114,59,3,55349,56629,4,2,65,97,19163,19168,114,114,59,1,10234,114,114,59,1,10231,59,1,958,4,2,65,97,19182,19187,114,114,59,1,10232,114,114,59,1,10229,97,112,59,1,10236,105,115,59,1,8955,4,3,100,112,116,19210,19215,19230,111,116,59,1,10752,4,2,102,108,19221,19225,59,3,55349,56681,117,115,59,1,10753,105,109,101,59,1,10754,4,2,65,97,19242,19247,114,114,59,1,10233,114,114,59,1,10230,4,2,99,113,19258,19263,114,59,3,55349,56525,99,117,112,59,1,10758,4,2,112,116,19275,19281,108,117,115,59,1,10756,114,105,59,1,9651,101,101,59,1,8897,101,100,103,101,59,1,8896,4,8,97,99,101,102,105,111,115,117,19316,19335,19349,19357,19362,19367,19373,19379,99,4,2,117,121,19323,19332,116,101,5,253,1,59,19330,1,253,59,1,1103,4,2,105,121,19341,19346,114,99,59,1,375,59,1,1099,110,5,165,1,59,19355,1,165,114,59,3,55349,56630,99,121,59,1,1111,112,102,59,3,55349,56682,99,114,59,3,55349,56526,4,2,99,109,19385,19389,121,59,1,1102,108,5,255,1,59,19395,1,255,4,10,97,99,100,101,102,104,105,111,115,119,19419,19426,19441,19446,19462,19467,19472,19480,19486,19492,99,117,116,101,59,1,378,4,2,97,121,19432,19438,114,111,110,59,1,382,59,1,1079,111,116,59,1,380,4,2,101,116,19452,19458,116,114,102,59,1,8488,97,59,1,950,114,59,3,55349,56631,99,121,59,1,1078,103,114,97,114,114,59,1,8669,112,102,59,3,55349,56683,99,114,59,3,55349,56527,4,2,106,110,19498,19501,59,1,8205,106,59,1,8204]);var Preprocessor=preprocessor;var unicode$1=unicode$3;var neTree=namedEntityData;var ERR$1=errorCodes;//Aliases
var $$5=unicode$1.CODE_POINTS;var $$=unicode$1.CODE_POINT_SEQUENCES;//C1 Unicode control character reference replacements
var C1_CONTROLS_REFERENCE_REPLACEMENTS={0x80:0x20ac,0x82:0x201a,0x83:0x0192,0x84:0x201e,0x85:0x2026,0x86:0x2020,0x87:0x2021,0x88:0x02c6,0x89:0x2030,0x8a:0x0160,0x8b:0x2039,0x8c:0x0152,0x8e:0x017d,0x91:0x2018,0x92:0x2019,0x93:0x201c,0x94:0x201d,0x95:0x2022,0x96:0x2013,0x97:0x2014,0x98:0x02dc,0x99:0x2122,0x9a:0x0161,0x9b:0x203a,0x9c:0x0153,0x9e:0x017e,0x9f:0x0178};// Named entity tree flags
var HAS_DATA_FLAG=1<<0;var DATA_DUPLET_FLAG=1<<1;var HAS_BRANCHES_FLAG=1<<2;var MAX_BRANCH_MARKER_VALUE=HAS_DATA_FLAG|DATA_DUPLET_FLAG|HAS_BRANCHES_FLAG;//States
var DATA_STATE='DATA_STATE';var RCDATA_STATE='RCDATA_STATE';var RAWTEXT_STATE='RAWTEXT_STATE';var SCRIPT_DATA_STATE='SCRIPT_DATA_STATE';var PLAINTEXT_STATE='PLAINTEXT_STATE';var TAG_OPEN_STATE='TAG_OPEN_STATE';var END_TAG_OPEN_STATE='END_TAG_OPEN_STATE';var TAG_NAME_STATE='TAG_NAME_STATE';var RCDATA_LESS_THAN_SIGN_STATE='RCDATA_LESS_THAN_SIGN_STATE';var RCDATA_END_TAG_OPEN_STATE='RCDATA_END_TAG_OPEN_STATE';var RCDATA_END_TAG_NAME_STATE='RCDATA_END_TAG_NAME_STATE';var RAWTEXT_LESS_THAN_SIGN_STATE='RAWTEXT_LESS_THAN_SIGN_STATE';var RAWTEXT_END_TAG_OPEN_STATE='RAWTEXT_END_TAG_OPEN_STATE';var RAWTEXT_END_TAG_NAME_STATE='RAWTEXT_END_TAG_NAME_STATE';var SCRIPT_DATA_LESS_THAN_SIGN_STATE='SCRIPT_DATA_LESS_THAN_SIGN_STATE';var SCRIPT_DATA_END_TAG_OPEN_STATE='SCRIPT_DATA_END_TAG_OPEN_STATE';var SCRIPT_DATA_END_TAG_NAME_STATE='SCRIPT_DATA_END_TAG_NAME_STATE';var SCRIPT_DATA_ESCAPE_START_STATE='SCRIPT_DATA_ESCAPE_START_STATE';var SCRIPT_DATA_ESCAPE_START_DASH_STATE='SCRIPT_DATA_ESCAPE_START_DASH_STATE';var SCRIPT_DATA_ESCAPED_STATE='SCRIPT_DATA_ESCAPED_STATE';var SCRIPT_DATA_ESCAPED_DASH_STATE='SCRIPT_DATA_ESCAPED_DASH_STATE';var SCRIPT_DATA_ESCAPED_DASH_DASH_STATE='SCRIPT_DATA_ESCAPED_DASH_DASH_STATE';var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE='SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE';var SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE='SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE';var SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE='SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE';var SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE='SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE';var SCRIPT_DATA_DOUBLE_ESCAPED_STATE='SCRIPT_DATA_DOUBLE_ESCAPED_STATE';var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE='SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE';var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE='SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE';var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE='SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE';var SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE='SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE';var BEFORE_ATTRIBUTE_NAME_STATE='BEFORE_ATTRIBUTE_NAME_STATE';var ATTRIBUTE_NAME_STATE='ATTRIBUTE_NAME_STATE';var AFTER_ATTRIBUTE_NAME_STATE='AFTER_ATTRIBUTE_NAME_STATE';var BEFORE_ATTRIBUTE_VALUE_STATE='BEFORE_ATTRIBUTE_VALUE_STATE';var ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE='ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE';var ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE='ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE';var ATTRIBUTE_VALUE_UNQUOTED_STATE='ATTRIBUTE_VALUE_UNQUOTED_STATE';var AFTER_ATTRIBUTE_VALUE_QUOTED_STATE='AFTER_ATTRIBUTE_VALUE_QUOTED_STATE';var SELF_CLOSING_START_TAG_STATE='SELF_CLOSING_START_TAG_STATE';var BOGUS_COMMENT_STATE='BOGUS_COMMENT_STATE';var MARKUP_DECLARATION_OPEN_STATE='MARKUP_DECLARATION_OPEN_STATE';var COMMENT_START_STATE='COMMENT_START_STATE';var COMMENT_START_DASH_STATE='COMMENT_START_DASH_STATE';var COMMENT_STATE='COMMENT_STATE';var COMMENT_LESS_THAN_SIGN_STATE='COMMENT_LESS_THAN_SIGN_STATE';var COMMENT_LESS_THAN_SIGN_BANG_STATE='COMMENT_LESS_THAN_SIGN_BANG_STATE';var COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE='COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE';var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE='COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE';var COMMENT_END_DASH_STATE='COMMENT_END_DASH_STATE';var COMMENT_END_STATE='COMMENT_END_STATE';var COMMENT_END_BANG_STATE='COMMENT_END_BANG_STATE';var DOCTYPE_STATE='DOCTYPE_STATE';var BEFORE_DOCTYPE_NAME_STATE='BEFORE_DOCTYPE_NAME_STATE';var DOCTYPE_NAME_STATE='DOCTYPE_NAME_STATE';var AFTER_DOCTYPE_NAME_STATE='AFTER_DOCTYPE_NAME_STATE';var AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE='AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE';var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE='BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE';var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE='DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE';var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE='DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE';var AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE='AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE';var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE='BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE';var AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE='AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE';var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE='BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE';var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE='DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE';var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE='DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE';var AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE='AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE';var BOGUS_DOCTYPE_STATE='BOGUS_DOCTYPE_STATE';var CDATA_SECTION_STATE='CDATA_SECTION_STATE';var CDATA_SECTION_BRACKET_STATE='CDATA_SECTION_BRACKET_STATE';var CDATA_SECTION_END_STATE='CDATA_SECTION_END_STATE';var CHARACTER_REFERENCE_STATE='CHARACTER_REFERENCE_STATE';var NAMED_CHARACTER_REFERENCE_STATE='NAMED_CHARACTER_REFERENCE_STATE';var AMBIGUOUS_AMPERSAND_STATE='AMBIGUOS_AMPERSAND_STATE';var NUMERIC_CHARACTER_REFERENCE_STATE='NUMERIC_CHARACTER_REFERENCE_STATE';var HEXADEMICAL_CHARACTER_REFERENCE_START_STATE='HEXADEMICAL_CHARACTER_REFERENCE_START_STATE';var DECIMAL_CHARACTER_REFERENCE_START_STATE='DECIMAL_CHARACTER_REFERENCE_START_STATE';var HEXADEMICAL_CHARACTER_REFERENCE_STATE='HEXADEMICAL_CHARACTER_REFERENCE_STATE';var DECIMAL_CHARACTER_REFERENCE_STATE='DECIMAL_CHARACTER_REFERENCE_STATE';var NUMERIC_CHARACTER_REFERENCE_END_STATE='NUMERIC_CHARACTER_REFERENCE_END_STATE';//Utils
//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').
function isWhitespace(cp){return cp===$$5.SPACE||cp===$$5.LINE_FEED||cp===$$5.TABULATION||cp===$$5.FORM_FEED;}function isAsciiDigit(cp){return cp>=$$5.DIGIT_0&&cp<=$$5.DIGIT_9;}function isAsciiUpper(cp){return cp>=$$5.LATIN_CAPITAL_A&&cp<=$$5.LATIN_CAPITAL_Z;}function isAsciiLower(cp){return cp>=$$5.LATIN_SMALL_A&&cp<=$$5.LATIN_SMALL_Z;}function isAsciiLetter(cp){return isAsciiLower(cp)||isAsciiUpper(cp);}function isAsciiAlphaNumeric(cp){return isAsciiLetter(cp)||isAsciiDigit(cp);}function isAsciiUpperHexDigit(cp){return cp>=$$5.LATIN_CAPITAL_A&&cp<=$$5.LATIN_CAPITAL_F;}function isAsciiLowerHexDigit(cp){return cp>=$$5.LATIN_SMALL_A&&cp<=$$5.LATIN_SMALL_F;}function isAsciiHexDigit(cp){return isAsciiDigit(cp)||isAsciiUpperHexDigit(cp)||isAsciiLowerHexDigit(cp);}function toAsciiLowerCodePoint(cp){return cp+0x0020;}//NOTE: String.fromCharCode() function can handle only characters from BMP subset.
//So, we need to workaround this manually.
//(see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode#Getting_it_to_work_with_higher_values)
function toChar(cp){if(cp<=0xffff){return String.fromCharCode(cp);}cp-=0x10000;return String.fromCharCode(cp>>>10&0x3ff|0xd800)+String.fromCharCode(0xdc00|cp&0x3ff);}function toAsciiLowerChar(cp){return String.fromCharCode(toAsciiLowerCodePoint(cp));}function findNamedEntityTreeBranch(nodeIx,cp){var branchCount=neTree[++nodeIx];var lo=++nodeIx;var hi=lo+branchCount-1;while(lo<=hi){var mid=lo+hi>>>1;var midCp=neTree[mid];if(midCp<cp){lo=mid+1;}else if(midCp>cp){hi=mid-1;}else{return neTree[mid+branchCount];}}return-1;}//Tokenizer
var Tokenizer$4=/*#__PURE__*/function(){function Tokenizer$4(){_classCallCheck(this,Tokenizer$4);this.preprocessor=new Preprocessor();this.tokenQueue=[];this.allowCDATA=false;this.state=DATA_STATE;this.returnState='';this.charRefCode=-1;this.tempBuff=[];this.lastStartTagName='';this.consumedAfterSnapshot=-1;this.active=false;this.currentCharacterToken=null;this.currentToken=null;this.currentAttr=null;}//Errors
_createClass(Tokenizer$4,[{key:"_err",value:function _err(){// NOTE: err reporting is noop by default. Enabled by mixin.
}},{key:"_errOnNextCodePoint",value:function _errOnNextCodePoint(err){this._consume();this._err(err);this._unconsume();}//API
},{key:"getNextToken",value:function getNextToken(){while(!this.tokenQueue.length&&this.active){this.consumedAfterSnapshot=0;var cp=this._consume();if(!this._ensureHibernation()){this[this.state](cp);}}return this.tokenQueue.shift();}},{key:"write",value:function write(chunk,isLastChunk){this.active=true;this.preprocessor.write(chunk,isLastChunk);}},{key:"insertHtmlAtCurrentPos",value:function insertHtmlAtCurrentPos(chunk){this.active=true;this.preprocessor.insertHtmlAtCurrentPos(chunk);}//Hibernation
},{key:"_ensureHibernation",value:function _ensureHibernation(){if(this.preprocessor.endOfChunkHit){for(;this.consumedAfterSnapshot>0;this.consumedAfterSnapshot--){this.preprocessor.retreat();}this.active=false;this.tokenQueue.push({type:Tokenizer$4.HIBERNATION_TOKEN});return true;}return false;}//Consumption
},{key:"_consume",value:function _consume(){this.consumedAfterSnapshot++;return this.preprocessor.advance();}},{key:"_unconsume",value:function _unconsume(){this.consumedAfterSnapshot--;this.preprocessor.retreat();}},{key:"_reconsumeInState",value:function _reconsumeInState(state){this.state=state;this._unconsume();}},{key:"_consumeSequenceIfMatch",value:function _consumeSequenceIfMatch(pattern,startCp,caseSensitive){var consumedCount=0;var isMatch=true;var patternLength=pattern.length;var patternPos=0;var cp=startCp;var patternCp=void 0;for(;patternPos<patternLength;patternPos++){if(patternPos>0){cp=this._consume();consumedCount++;}if(cp===$$5.EOF){isMatch=false;break;}patternCp=pattern[patternPos];if(cp!==patternCp&&(caseSensitive||cp!==toAsciiLowerCodePoint(patternCp))){isMatch=false;break;}}if(!isMatch){while(consumedCount--){this._unconsume();}}return isMatch;}//Temp buffer
},{key:"_isTempBufferEqualToScriptString",value:function _isTempBufferEqualToScriptString(){if(this.tempBuff.length!==$$.SCRIPT_STRING.length){return false;}for(var i=0;i<this.tempBuff.length;i++){if(this.tempBuff[i]!==$$.SCRIPT_STRING[i]){return false;}}return true;}//Token creation
},{key:"_createStartTagToken",value:function _createStartTagToken(){this.currentToken={type:Tokenizer$4.START_TAG_TOKEN,tagName:'',selfClosing:false,ackSelfClosing:false,attrs:[]};}},{key:"_createEndTagToken",value:function _createEndTagToken(){this.currentToken={type:Tokenizer$4.END_TAG_TOKEN,tagName:'',selfClosing:false,attrs:[]};}},{key:"_createCommentToken",value:function _createCommentToken(){this.currentToken={type:Tokenizer$4.COMMENT_TOKEN,data:''};}},{key:"_createDoctypeToken",value:function _createDoctypeToken(initialName){this.currentToken={type:Tokenizer$4.DOCTYPE_TOKEN,name:initialName,forceQuirks:false,publicId:null,systemId:null};}},{key:"_createCharacterToken",value:function _createCharacterToken(type,ch){this.currentCharacterToken={type:type,chars:ch};}},{key:"_createEOFToken",value:function _createEOFToken(){this.currentToken={type:Tokenizer$4.EOF_TOKEN};}//Tag attributes
},{key:"_createAttr",value:function _createAttr(attrNameFirstCh){this.currentAttr={name:attrNameFirstCh,value:''};}},{key:"_leaveAttrName",value:function _leaveAttrName(toState){if(Tokenizer$4.getTokenAttr(this.currentToken,this.currentAttr.name)===null){this.currentToken.attrs.push(this.currentAttr);}else{this._err(ERR$1.duplicateAttribute);}this.state=toState;}},{key:"_leaveAttrValue",value:function _leaveAttrValue(toState){this.state=toState;}//Token emission
},{key:"_emitCurrentToken",value:function _emitCurrentToken(){this._emitCurrentCharacterToken();var ct=this.currentToken;this.currentToken=null;//NOTE: store emited start tag's tagName to determine is the following end tag token is appropriate.
if(ct.type===Tokenizer$4.START_TAG_TOKEN){this.lastStartTagName=ct.tagName;}else if(ct.type===Tokenizer$4.END_TAG_TOKEN){if(ct.attrs.length>0){this._err(ERR$1.endTagWithAttributes);}if(ct.selfClosing){this._err(ERR$1.endTagWithTrailingSolidus);}}this.tokenQueue.push(ct);}},{key:"_emitCurrentCharacterToken",value:function _emitCurrentCharacterToken(){if(this.currentCharacterToken){this.tokenQueue.push(this.currentCharacterToken);this.currentCharacterToken=null;}}},{key:"_emitEOFToken",value:function _emitEOFToken(){this._createEOFToken();this._emitCurrentToken();}//Characters emission
//OPTIMIZATION: specification uses only one type of character tokens (one token per character).
//This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
//If we have a sequence of characters that belong to the same group, parser can process it
//as a single solid character token.
//So, there are 3 types of character tokens in parse5:
//1)NULL_CHARACTER_TOKEN - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
//2)WHITESPACE_CHARACTER_TOKEN - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
//3)CHARACTER_TOKEN - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
},{key:"_appendCharToCurrentCharacterToken",value:function _appendCharToCurrentCharacterToken(type,ch){if(this.currentCharacterToken&&this.currentCharacterToken.type!==type){this._emitCurrentCharacterToken();}if(this.currentCharacterToken){this.currentCharacterToken.chars+=ch;}else{this._createCharacterToken(type,ch);}}},{key:"_emitCodePoint",value:function _emitCodePoint(cp){var type=Tokenizer$4.CHARACTER_TOKEN;if(isWhitespace(cp)){type=Tokenizer$4.WHITESPACE_CHARACTER_TOKEN;}else if(cp===$$5.NULL){type=Tokenizer$4.NULL_CHARACTER_TOKEN;}this._appendCharToCurrentCharacterToken(type,toChar(cp));}},{key:"_emitSeveralCodePoints",value:function _emitSeveralCodePoints(codePoints){for(var i=0;i<codePoints.length;i++){this._emitCodePoint(codePoints[i]);}}//NOTE: used then we emit character explicitly. This is always a non-whitespace and a non-null character.
//So we can avoid additional checks here.
},{key:"_emitChars",value:function _emitChars(ch){this._appendCharToCurrentCharacterToken(Tokenizer$4.CHARACTER_TOKEN,ch);}// Character reference helpers
},{key:"_matchNamedCharacterReference",value:function _matchNamedCharacterReference(startCp){var result=null;var excess=1;var i=findNamedEntityTreeBranch(0,startCp);this.tempBuff.push(startCp);while(i>-1){var current=neTree[i];var inNode=current<MAX_BRANCH_MARKER_VALUE;var nodeWithData=inNode&&current&HAS_DATA_FLAG;if(nodeWithData){//NOTE: we use greedy search, so we continue lookup at this point
result=current&DATA_DUPLET_FLAG?[neTree[++i],neTree[++i]]:[neTree[++i]];excess=0;}var cp=this._consume();this.tempBuff.push(cp);excess++;if(cp===$$5.EOF){break;}if(inNode){i=current&HAS_BRANCHES_FLAG?findNamedEntityTreeBranch(i,cp):-1;}else{i=cp===current?++i:-1;}}while(excess--){this.tempBuff.pop();this._unconsume();}return result;}},{key:"_isCharacterReferenceInAttribute",value:function _isCharacterReferenceInAttribute(){return this.returnState===ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE||this.returnState===ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE||this.returnState===ATTRIBUTE_VALUE_UNQUOTED_STATE;}},{key:"_isCharacterReferenceAttributeQuirk",value:function _isCharacterReferenceAttributeQuirk(withSemicolon){if(!withSemicolon&&this._isCharacterReferenceInAttribute()){var nextCp=this._consume();this._unconsume();return nextCp===$$5.EQUALS_SIGN||isAsciiAlphaNumeric(nextCp);}return false;}},{key:"_flushCodePointsConsumedAsCharacterReference",value:function _flushCodePointsConsumedAsCharacterReference(){if(this._isCharacterReferenceInAttribute()){for(var i=0;i<this.tempBuff.length;i++){this.currentAttr.value+=toChar(this.tempBuff[i]);}}else{this._emitSeveralCodePoints(this.tempBuff);}this.tempBuff=[];}// State machine
// Data state
//------------------------------------------------------------------
},{key:DATA_STATE,value:function value(cp){this.preprocessor.dropParsedChunk();if(cp===$$5.LESS_THAN_SIGN){this.state=TAG_OPEN_STATE;}else if(cp===$$5.AMPERSAND){this.returnState=DATA_STATE;this.state=CHARACTER_REFERENCE_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._emitCodePoint(cp);}else if(cp===$$5.EOF){this._emitEOFToken();}else{this._emitCodePoint(cp);}}//  RCDATA state
//------------------------------------------------------------------
},{key:RCDATA_STATE,value:function value(cp){this.preprocessor.dropParsedChunk();if(cp===$$5.AMPERSAND){this.returnState=RCDATA_STATE;this.state=CHARACTER_REFERENCE_STATE;}else if(cp===$$5.LESS_THAN_SIGN){this.state=RCDATA_LESS_THAN_SIGN_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._emitEOFToken();}else{this._emitCodePoint(cp);}}// RAWTEXT state
//------------------------------------------------------------------
},{key:RAWTEXT_STATE,value:function value(cp){this.preprocessor.dropParsedChunk();if(cp===$$5.LESS_THAN_SIGN){this.state=RAWTEXT_LESS_THAN_SIGN_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._emitEOFToken();}else{this._emitCodePoint(cp);}}// Script data state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_STATE,value:function value(cp){this.preprocessor.dropParsedChunk();if(cp===$$5.LESS_THAN_SIGN){this.state=SCRIPT_DATA_LESS_THAN_SIGN_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._emitEOFToken();}else{this._emitCodePoint(cp);}}// PLAINTEXT state
//------------------------------------------------------------------
},{key:PLAINTEXT_STATE,value:function value(cp){this.preprocessor.dropParsedChunk();if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._emitEOFToken();}else{this._emitCodePoint(cp);}}// Tag open state
//------------------------------------------------------------------
},{key:TAG_OPEN_STATE,value:function value(cp){if(cp===$$5.EXCLAMATION_MARK){this.state=MARKUP_DECLARATION_OPEN_STATE;}else if(cp===$$5.SOLIDUS){this.state=END_TAG_OPEN_STATE;}else if(isAsciiLetter(cp)){this._createStartTagToken();this._reconsumeInState(TAG_NAME_STATE);}else if(cp===$$5.QUESTION_MARK){this._err(ERR$1.unexpectedQuestionMarkInsteadOfTagName);this._createCommentToken();this._reconsumeInState(BOGUS_COMMENT_STATE);}else if(cp===$$5.EOF){this._err(ERR$1.eofBeforeTagName);this._emitChars('<');this._emitEOFToken();}else{this._err(ERR$1.invalidFirstCharacterOfTagName);this._emitChars('<');this._reconsumeInState(DATA_STATE);}}// End tag open state
//------------------------------------------------------------------
},{key:END_TAG_OPEN_STATE,value:function value(cp){if(isAsciiLetter(cp)){this._createEndTagToken();this._reconsumeInState(TAG_NAME_STATE);}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.missingEndTagName);this.state=DATA_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofBeforeTagName);this._emitChars('</');this._emitEOFToken();}else{this._err(ERR$1.invalidFirstCharacterOfTagName);this._createCommentToken();this._reconsumeInState(BOGUS_COMMENT_STATE);}}// Tag name state
//------------------------------------------------------------------
},{key:TAG_NAME_STATE,value:function value(cp){if(isWhitespace(cp)){this.state=BEFORE_ATTRIBUTE_NAME_STATE;}else if(cp===$$5.SOLIDUS){this.state=SELF_CLOSING_START_TAG_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();}else if(isAsciiUpper(cp)){this.currentToken.tagName+=toAsciiLowerChar(cp);}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.tagName+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.EOF){this._err(ERR$1.eofInTag);this._emitEOFToken();}else{this.currentToken.tagName+=toChar(cp);}}// RCDATA less-than sign state
//------------------------------------------------------------------
},{key:RCDATA_LESS_THAN_SIGN_STATE,value:function value(cp){if(cp===$$5.SOLIDUS){this.tempBuff=[];this.state=RCDATA_END_TAG_OPEN_STATE;}else{this._emitChars('<');this._reconsumeInState(RCDATA_STATE);}}// RCDATA end tag open state
//------------------------------------------------------------------
},{key:RCDATA_END_TAG_OPEN_STATE,value:function value(cp){if(isAsciiLetter(cp)){this._createEndTagToken();this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);}else{this._emitChars('</');this._reconsumeInState(RCDATA_STATE);}}// RCDATA end tag name state
//------------------------------------------------------------------
},{key:RCDATA_END_TAG_NAME_STATE,value:function value(cp){if(isAsciiUpper(cp)){this.currentToken.tagName+=toAsciiLowerChar(cp);this.tempBuff.push(cp);}else if(isAsciiLower(cp)){this.currentToken.tagName+=toChar(cp);this.tempBuff.push(cp);}else{if(this.lastStartTagName===this.currentToken.tagName){if(isWhitespace(cp)){this.state=BEFORE_ATTRIBUTE_NAME_STATE;return;}if(cp===$$5.SOLIDUS){this.state=SELF_CLOSING_START_TAG_STATE;return;}if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();return;}}this._emitChars('</');this._emitSeveralCodePoints(this.tempBuff);this._reconsumeInState(RCDATA_STATE);}}// RAWTEXT less-than sign state
//------------------------------------------------------------------
},{key:RAWTEXT_LESS_THAN_SIGN_STATE,value:function value(cp){if(cp===$$5.SOLIDUS){this.tempBuff=[];this.state=RAWTEXT_END_TAG_OPEN_STATE;}else{this._emitChars('<');this._reconsumeInState(RAWTEXT_STATE);}}// RAWTEXT end tag open state
//------------------------------------------------------------------
},{key:RAWTEXT_END_TAG_OPEN_STATE,value:function value(cp){if(isAsciiLetter(cp)){this._createEndTagToken();this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);}else{this._emitChars('</');this._reconsumeInState(RAWTEXT_STATE);}}// RAWTEXT end tag name state
//------------------------------------------------------------------
},{key:RAWTEXT_END_TAG_NAME_STATE,value:function value(cp){if(isAsciiUpper(cp)){this.currentToken.tagName+=toAsciiLowerChar(cp);this.tempBuff.push(cp);}else if(isAsciiLower(cp)){this.currentToken.tagName+=toChar(cp);this.tempBuff.push(cp);}else{if(this.lastStartTagName===this.currentToken.tagName){if(isWhitespace(cp)){this.state=BEFORE_ATTRIBUTE_NAME_STATE;return;}if(cp===$$5.SOLIDUS){this.state=SELF_CLOSING_START_TAG_STATE;return;}if(cp===$$5.GREATER_THAN_SIGN){this._emitCurrentToken();this.state=DATA_STATE;return;}}this._emitChars('</');this._emitSeveralCodePoints(this.tempBuff);this._reconsumeInState(RAWTEXT_STATE);}}// Script data less-than sign state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_LESS_THAN_SIGN_STATE,value:function value(cp){if(cp===$$5.SOLIDUS){this.tempBuff=[];this.state=SCRIPT_DATA_END_TAG_OPEN_STATE;}else if(cp===$$5.EXCLAMATION_MARK){this.state=SCRIPT_DATA_ESCAPE_START_STATE;this._emitChars('<!');}else{this._emitChars('<');this._reconsumeInState(SCRIPT_DATA_STATE);}}// Script data end tag open state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_END_TAG_OPEN_STATE,value:function value(cp){if(isAsciiLetter(cp)){this._createEndTagToken();this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);}else{this._emitChars('</');this._reconsumeInState(SCRIPT_DATA_STATE);}}// Script data end tag name state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_END_TAG_NAME_STATE,value:function value(cp){if(isAsciiUpper(cp)){this.currentToken.tagName+=toAsciiLowerChar(cp);this.tempBuff.push(cp);}else if(isAsciiLower(cp)){this.currentToken.tagName+=toChar(cp);this.tempBuff.push(cp);}else{if(this.lastStartTagName===this.currentToken.tagName){if(isWhitespace(cp)){this.state=BEFORE_ATTRIBUTE_NAME_STATE;return;}else if(cp===$$5.SOLIDUS){this.state=SELF_CLOSING_START_TAG_STATE;return;}else if(cp===$$5.GREATER_THAN_SIGN){this._emitCurrentToken();this.state=DATA_STATE;return;}}this._emitChars('</');this._emitSeveralCodePoints(this.tempBuff);this._reconsumeInState(SCRIPT_DATA_STATE);}}// Script data escape start state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPE_START_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=SCRIPT_DATA_ESCAPE_START_DASH_STATE;this._emitChars('-');}else{this._reconsumeInState(SCRIPT_DATA_STATE);}}// Script data escape start dash state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPE_START_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;this._emitChars('-');}else{this._reconsumeInState(SCRIPT_DATA_STATE);}}// Script data escaped state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPED_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=SCRIPT_DATA_ESCAPED_DASH_STATE;this._emitChars('-');}else if(cp===$$5.LESS_THAN_SIGN){this.state=SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._err(ERR$1.eofInScriptHtmlCommentLikeText);this._emitEOFToken();}else{this._emitCodePoint(cp);}}// Script data escaped dash state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPED_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;this._emitChars('-');}else if(cp===$$5.LESS_THAN_SIGN){this.state=SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.state=SCRIPT_DATA_ESCAPED_STATE;this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._err(ERR$1.eofInScriptHtmlCommentLikeText);this._emitEOFToken();}else{this.state=SCRIPT_DATA_ESCAPED_STATE;this._emitCodePoint(cp);}}// Script data escaped dash dash state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPED_DASH_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this._emitChars('-');}else if(cp===$$5.LESS_THAN_SIGN){this.state=SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this.state=SCRIPT_DATA_STATE;this._emitChars('>');}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.state=SCRIPT_DATA_ESCAPED_STATE;this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._err(ERR$1.eofInScriptHtmlCommentLikeText);this._emitEOFToken();}else{this.state=SCRIPT_DATA_ESCAPED_STATE;this._emitCodePoint(cp);}}// Script data escaped less-than sign state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE,value:function value(cp){if(cp===$$5.SOLIDUS){this.tempBuff=[];this.state=SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;}else if(isAsciiLetter(cp)){this.tempBuff=[];this._emitChars('<');this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);}else{this._emitChars('<');this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);}}// Script data escaped end tag open state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE,value:function value(cp){if(isAsciiLetter(cp)){this._createEndTagToken();this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);}else{this._emitChars('</');this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);}}// Script data escaped end tag name state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE,value:function value(cp){if(isAsciiUpper(cp)){this.currentToken.tagName+=toAsciiLowerChar(cp);this.tempBuff.push(cp);}else if(isAsciiLower(cp)){this.currentToken.tagName+=toChar(cp);this.tempBuff.push(cp);}else{if(this.lastStartTagName===this.currentToken.tagName){if(isWhitespace(cp)){this.state=BEFORE_ATTRIBUTE_NAME_STATE;return;}if(cp===$$5.SOLIDUS){this.state=SELF_CLOSING_START_TAG_STATE;return;}if(cp===$$5.GREATER_THAN_SIGN){this._emitCurrentToken();this.state=DATA_STATE;return;}}this._emitChars('</');this._emitSeveralCodePoints(this.tempBuff);this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);}}// Script data double escape start state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE,value:function value(cp){if(isWhitespace(cp)||cp===$$5.SOLIDUS||cp===$$5.GREATER_THAN_SIGN){this.state=this._isTempBufferEqualToScriptString()?SCRIPT_DATA_DOUBLE_ESCAPED_STATE:SCRIPT_DATA_ESCAPED_STATE;this._emitCodePoint(cp);}else if(isAsciiUpper(cp)){this.tempBuff.push(toAsciiLowerCodePoint(cp));this._emitCodePoint(cp);}else if(isAsciiLower(cp)){this.tempBuff.push(cp);this._emitCodePoint(cp);}else{this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);}}// Script data double escaped state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_DOUBLE_ESCAPED_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;this._emitChars('-');}else if(cp===$$5.LESS_THAN_SIGN){this.state=SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;this._emitChars('<');}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._err(ERR$1.eofInScriptHtmlCommentLikeText);this._emitEOFToken();}else{this._emitCodePoint(cp);}}// Script data double escaped dash state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;this._emitChars('-');}else if(cp===$$5.LESS_THAN_SIGN){this.state=SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;this._emitChars('<');}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.state=SCRIPT_DATA_DOUBLE_ESCAPED_STATE;this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._err(ERR$1.eofInScriptHtmlCommentLikeText);this._emitEOFToken();}else{this.state=SCRIPT_DATA_DOUBLE_ESCAPED_STATE;this._emitCodePoint(cp);}}// Script data double escaped dash dash state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this._emitChars('-');}else if(cp===$$5.LESS_THAN_SIGN){this.state=SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;this._emitChars('<');}else if(cp===$$5.GREATER_THAN_SIGN){this.state=SCRIPT_DATA_STATE;this._emitChars('>');}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.state=SCRIPT_DATA_DOUBLE_ESCAPED_STATE;this._emitChars(unicode$1.REPLACEMENT_CHARACTER);}else if(cp===$$5.EOF){this._err(ERR$1.eofInScriptHtmlCommentLikeText);this._emitEOFToken();}else{this.state=SCRIPT_DATA_DOUBLE_ESCAPED_STATE;this._emitCodePoint(cp);}}// Script data double escaped less-than sign state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE,value:function value(cp){if(cp===$$5.SOLIDUS){this.tempBuff=[];this.state=SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;this._emitChars('/');}else{this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);}}// Script data double escape end state
//------------------------------------------------------------------
},{key:SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE,value:function value(cp){if(isWhitespace(cp)||cp===$$5.SOLIDUS||cp===$$5.GREATER_THAN_SIGN){this.state=this._isTempBufferEqualToScriptString()?SCRIPT_DATA_ESCAPED_STATE:SCRIPT_DATA_DOUBLE_ESCAPED_STATE;this._emitCodePoint(cp);}else if(isAsciiUpper(cp)){this.tempBuff.push(toAsciiLowerCodePoint(cp));this._emitCodePoint(cp);}else if(isAsciiLower(cp)){this.tempBuff.push(cp);this._emitCodePoint(cp);}else{this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);}}// Before attribute name state
//------------------------------------------------------------------
},{key:BEFORE_ATTRIBUTE_NAME_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.SOLIDUS||cp===$$5.GREATER_THAN_SIGN||cp===$$5.EOF){this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);}else if(cp===$$5.EQUALS_SIGN){this._err(ERR$1.unexpectedEqualsSignBeforeAttributeName);this._createAttr('=');this.state=ATTRIBUTE_NAME_STATE;}else{this._createAttr('');this._reconsumeInState(ATTRIBUTE_NAME_STATE);}}// Attribute name state
//------------------------------------------------------------------
},{key:ATTRIBUTE_NAME_STATE,value:function value(cp){if(isWhitespace(cp)||cp===$$5.SOLIDUS||cp===$$5.GREATER_THAN_SIGN||cp===$$5.EOF){this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);this._unconsume();}else if(cp===$$5.EQUALS_SIGN){this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);}else if(isAsciiUpper(cp)){this.currentAttr.name+=toAsciiLowerChar(cp);}else if(cp===$$5.QUOTATION_MARK||cp===$$5.APOSTROPHE||cp===$$5.LESS_THAN_SIGN){this._err(ERR$1.unexpectedCharacterInAttributeName);this.currentAttr.name+=toChar(cp);}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentAttr.name+=unicode$1.REPLACEMENT_CHARACTER;}else{this.currentAttr.name+=toChar(cp);}}// After attribute name state
//------------------------------------------------------------------
},{key:AFTER_ATTRIBUTE_NAME_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.SOLIDUS){this.state=SELF_CLOSING_START_TAG_STATE;}else if(cp===$$5.EQUALS_SIGN){this.state=BEFORE_ATTRIBUTE_VALUE_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInTag);this._emitEOFToken();}else{this._createAttr('');this._reconsumeInState(ATTRIBUTE_NAME_STATE);}}// Before attribute value state
//------------------------------------------------------------------
},{key:BEFORE_ATTRIBUTE_VALUE_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.QUOTATION_MARK){this.state=ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;}else if(cp===$$5.APOSTROPHE){this.state=ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.missingAttributeValue);this.state=DATA_STATE;this._emitCurrentToken();}else{this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);}}// Attribute value (double-quoted) state
//------------------------------------------------------------------
},{key:ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE,value:function value(cp){if(cp===$$5.QUOTATION_MARK){this.state=AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;}else if(cp===$$5.AMPERSAND){this.returnState=ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;this.state=CHARACTER_REFERENCE_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentAttr.value+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.EOF){this._err(ERR$1.eofInTag);this._emitEOFToken();}else{this.currentAttr.value+=toChar(cp);}}// Attribute value (single-quoted) state
//------------------------------------------------------------------
},{key:ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE,value:function value(cp){if(cp===$$5.APOSTROPHE){this.state=AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;}else if(cp===$$5.AMPERSAND){this.returnState=ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;this.state=CHARACTER_REFERENCE_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentAttr.value+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.EOF){this._err(ERR$1.eofInTag);this._emitEOFToken();}else{this.currentAttr.value+=toChar(cp);}}// Attribute value (unquoted) state
//------------------------------------------------------------------
},{key:ATTRIBUTE_VALUE_UNQUOTED_STATE,value:function value(cp){if(isWhitespace(cp)){this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);}else if(cp===$$5.AMPERSAND){this.returnState=ATTRIBUTE_VALUE_UNQUOTED_STATE;this.state=CHARACTER_REFERENCE_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._leaveAttrValue(DATA_STATE);this._emitCurrentToken();}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentAttr.value+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.QUOTATION_MARK||cp===$$5.APOSTROPHE||cp===$$5.LESS_THAN_SIGN||cp===$$5.EQUALS_SIGN||cp===$$5.GRAVE_ACCENT){this._err(ERR$1.unexpectedCharacterInUnquotedAttributeValue);this.currentAttr.value+=toChar(cp);}else if(cp===$$5.EOF){this._err(ERR$1.eofInTag);this._emitEOFToken();}else{this.currentAttr.value+=toChar(cp);}}// After attribute value (quoted) state
//------------------------------------------------------------------
},{key:AFTER_ATTRIBUTE_VALUE_QUOTED_STATE,value:function value(cp){if(isWhitespace(cp)){this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);}else if(cp===$$5.SOLIDUS){this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);}else if(cp===$$5.GREATER_THAN_SIGN){this._leaveAttrValue(DATA_STATE);this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInTag);this._emitEOFToken();}else{this._err(ERR$1.missingWhitespaceBetweenAttributes);this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);}}// Self-closing start tag state
//------------------------------------------------------------------
},{key:SELF_CLOSING_START_TAG_STATE,value:function value(cp){if(cp===$$5.GREATER_THAN_SIGN){this.currentToken.selfClosing=true;this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInTag);this._emitEOFToken();}else{this._err(ERR$1.unexpectedSolidusInTag);this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);}}// Bogus comment state
//------------------------------------------------------------------
},{key:BOGUS_COMMENT_STATE,value:function value(cp){if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._emitCurrentToken();this._emitEOFToken();}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.data+=unicode$1.REPLACEMENT_CHARACTER;}else{this.currentToken.data+=toChar(cp);}}// Markup declaration open state
//------------------------------------------------------------------
},{key:MARKUP_DECLARATION_OPEN_STATE,value:function value(cp){if(this._consumeSequenceIfMatch($$.DASH_DASH_STRING,cp,true)){this._createCommentToken();this.state=COMMENT_START_STATE;}else if(this._consumeSequenceIfMatch($$.DOCTYPE_STRING,cp,false)){this.state=DOCTYPE_STATE;}else if(this._consumeSequenceIfMatch($$.CDATA_START_STRING,cp,true)){if(this.allowCDATA){this.state=CDATA_SECTION_STATE;}else{this._err(ERR$1.cdataInHtmlContent);this._createCommentToken();this.currentToken.data='[CDATA[';this.state=BOGUS_COMMENT_STATE;}}//NOTE: sequence lookup can be abrupted by hibernation. In that case lookup
//results are no longer valid and we will need to start over.
else if(!this._ensureHibernation()){this._err(ERR$1.incorrectlyOpenedComment);this._createCommentToken();this._reconsumeInState(BOGUS_COMMENT_STATE);}}// Comment start state
//------------------------------------------------------------------
},{key:COMMENT_START_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=COMMENT_START_DASH_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.abruptClosingOfEmptyComment);this.state=DATA_STATE;this._emitCurrentToken();}else{this._reconsumeInState(COMMENT_STATE);}}// Comment start dash state
//------------------------------------------------------------------
},{key:COMMENT_START_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=COMMENT_END_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.abruptClosingOfEmptyComment);this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInComment);this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.data+='-';this._reconsumeInState(COMMENT_STATE);}}// Comment state
//------------------------------------------------------------------
},{key:COMMENT_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=COMMENT_END_DASH_STATE;}else if(cp===$$5.LESS_THAN_SIGN){this.currentToken.data+='<';this.state=COMMENT_LESS_THAN_SIGN_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.data+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.EOF){this._err(ERR$1.eofInComment);this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.data+=toChar(cp);}}// Comment less-than sign state
//------------------------------------------------------------------
},{key:COMMENT_LESS_THAN_SIGN_STATE,value:function value(cp){if(cp===$$5.EXCLAMATION_MARK){this.currentToken.data+='!';this.state=COMMENT_LESS_THAN_SIGN_BANG_STATE;}else if(cp===$$5.LESS_THAN_SIGN){this.currentToken.data+='!';}else{this._reconsumeInState(COMMENT_STATE);}}// Comment less-than sign bang state
//------------------------------------------------------------------
},{key:COMMENT_LESS_THAN_SIGN_BANG_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE;}else{this._reconsumeInState(COMMENT_STATE);}}// Comment less-than sign bang dash state
//------------------------------------------------------------------
},{key:COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE;}else{this._reconsumeInState(COMMENT_END_DASH_STATE);}}// Comment less-than sign bang dash dash state
//------------------------------------------------------------------
},{key:COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE,value:function value(cp){if(cp!==$$5.GREATER_THAN_SIGN&&cp!==$$5.EOF){this._err(ERR$1.nestedComment);}this._reconsumeInState(COMMENT_END_STATE);}// Comment end dash state
//------------------------------------------------------------------
},{key:COMMENT_END_DASH_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.state=COMMENT_END_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInComment);this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.data+='-';this._reconsumeInState(COMMENT_STATE);}}// Comment end state
//------------------------------------------------------------------
},{key:COMMENT_END_STATE,value:function value(cp){if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EXCLAMATION_MARK){this.state=COMMENT_END_BANG_STATE;}else if(cp===$$5.HYPHEN_MINUS){this.currentToken.data+='-';}else if(cp===$$5.EOF){this._err(ERR$1.eofInComment);this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.data+='--';this._reconsumeInState(COMMENT_STATE);}}// Comment end bang state
//------------------------------------------------------------------
},{key:COMMENT_END_BANG_STATE,value:function value(cp){if(cp===$$5.HYPHEN_MINUS){this.currentToken.data+='--!';this.state=COMMENT_END_DASH_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.incorrectlyClosedComment);this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInComment);this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.data+='--!';this._reconsumeInState(COMMENT_STATE);}}// DOCTYPE state
//------------------------------------------------------------------
},{key:DOCTYPE_STATE,value:function value(cp){if(isWhitespace(cp)){this.state=BEFORE_DOCTYPE_NAME_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this._createDoctypeToken(null);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.missingWhitespaceBeforeDoctypeName);this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);}}// Before DOCTYPE name state
//------------------------------------------------------------------
},{key:BEFORE_DOCTYPE_NAME_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(isAsciiUpper(cp)){this._createDoctypeToken(toAsciiLowerChar(cp));this.state=DOCTYPE_NAME_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this._createDoctypeToken(unicode$1.REPLACEMENT_CHARACTER);this.state=DOCTYPE_NAME_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.missingDoctypeName);this._createDoctypeToken(null);this.currentToken.forceQuirks=true;this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this._createDoctypeToken(null);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._createDoctypeToken(toChar(cp));this.state=DOCTYPE_NAME_STATE;}}// DOCTYPE name state
//------------------------------------------------------------------
},{key:DOCTYPE_NAME_STATE,value:function value(cp){if(isWhitespace(cp)){this.state=AFTER_DOCTYPE_NAME_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();}else if(isAsciiUpper(cp)){this.currentToken.name+=toAsciiLowerChar(cp);}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.name+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.name+=toChar(cp);}}// After DOCTYPE name state
//------------------------------------------------------------------
},{key:AFTER_DOCTYPE_NAME_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else if(this._consumeSequenceIfMatch($$.PUBLIC_STRING,cp,false)){this.state=AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;}else if(this._consumeSequenceIfMatch($$.SYSTEM_STRING,cp,false)){this.state=AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;}//NOTE: sequence lookup can be abrupted by hibernation. In that case lookup
//results are no longer valid and we will need to start over.
else if(!this._ensureHibernation()){this._err(ERR$1.invalidCharacterSequenceAfterDoctypeName);this.currentToken.forceQuirks=true;this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// After DOCTYPE public keyword state
//------------------------------------------------------------------
},{key:AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE,value:function value(cp){if(isWhitespace(cp)){this.state=BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;}else if(cp===$$5.QUOTATION_MARK){this._err(ERR$1.missingWhitespaceAfterDoctypePublicKeyword);this.currentToken.publicId='';this.state=DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;}else if(cp===$$5.APOSTROPHE){this._err(ERR$1.missingWhitespaceAfterDoctypePublicKeyword);this.currentToken.publicId='';this.state=DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.missingDoctypePublicIdentifier);this.currentToken.forceQuirks=true;this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.missingQuoteBeforeDoctypePublicIdentifier);this.currentToken.forceQuirks=true;this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// Before DOCTYPE public identifier state
//------------------------------------------------------------------
},{key:BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.QUOTATION_MARK){this.currentToken.publicId='';this.state=DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;}else if(cp===$$5.APOSTROPHE){this.currentToken.publicId='';this.state=DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.missingDoctypePublicIdentifier);this.currentToken.forceQuirks=true;this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.missingQuoteBeforeDoctypePublicIdentifier);this.currentToken.forceQuirks=true;this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// DOCTYPE public identifier (double-quoted) state
//------------------------------------------------------------------
},{key:DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE,value:function value(cp){if(cp===$$5.QUOTATION_MARK){this.state=AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.publicId+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.abruptDoctypePublicIdentifier);this.currentToken.forceQuirks=true;this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.publicId+=toChar(cp);}}// DOCTYPE public identifier (single-quoted) state
//------------------------------------------------------------------
},{key:DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE,value:function value(cp){if(cp===$$5.APOSTROPHE){this.state=AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.publicId+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.abruptDoctypePublicIdentifier);this.currentToken.forceQuirks=true;this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.publicId+=toChar(cp);}}// After DOCTYPE public identifier state
//------------------------------------------------------------------
},{key:AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE,value:function value(cp){if(isWhitespace(cp)){this.state=BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.QUOTATION_MARK){this._err(ERR$1.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;}else if(cp===$$5.APOSTROPHE){this._err(ERR$1.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// Between DOCTYPE public and system identifiers state
//------------------------------------------------------------------
},{key:BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.GREATER_THAN_SIGN){this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.QUOTATION_MARK){this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;}else if(cp===$$5.APOSTROPHE){this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// After DOCTYPE system keyword state
//------------------------------------------------------------------
},{key:AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE,value:function value(cp){if(isWhitespace(cp)){this.state=BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;}else if(cp===$$5.QUOTATION_MARK){this._err(ERR$1.missingWhitespaceAfterDoctypeSystemKeyword);this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;}else if(cp===$$5.APOSTROPHE){this._err(ERR$1.missingWhitespaceAfterDoctypeSystemKeyword);this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.missingDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// Before DOCTYPE system identifier state
//------------------------------------------------------------------
},{key:BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.QUOTATION_MARK){this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;}else if(cp===$$5.APOSTROPHE){this.currentToken.systemId='';this.state=DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.missingDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this.state=DATA_STATE;this._emitCurrentToken();}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// DOCTYPE system identifier (double-quoted) state
//------------------------------------------------------------------
},{key:DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE,value:function value(cp){if(cp===$$5.QUOTATION_MARK){this.state=AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.systemId+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.abruptDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.systemId+=toChar(cp);}}// DOCTYPE system identifier (single-quoted) state
//------------------------------------------------------------------
},{key:DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE,value:function value(cp){if(cp===$$5.APOSTROPHE){this.state=AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);this.currentToken.systemId+=unicode$1.REPLACEMENT_CHARACTER;}else if(cp===$$5.GREATER_THAN_SIGN){this._err(ERR$1.abruptDoctypeSystemIdentifier);this.currentToken.forceQuirks=true;this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this.currentToken.systemId+=toChar(cp);}}// After DOCTYPE system identifier state
//------------------------------------------------------------------
},{key:AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE,value:function value(cp){if(isWhitespace(cp)){return;}if(cp===$$5.GREATER_THAN_SIGN){this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInDoctype);this.currentToken.forceQuirks=true;this._emitCurrentToken();this._emitEOFToken();}else{this._err(ERR$1.unexpectedCharacterAfterDoctypeSystemIdentifier);this._reconsumeInState(BOGUS_DOCTYPE_STATE);}}// Bogus DOCTYPE state
//------------------------------------------------------------------
},{key:BOGUS_DOCTYPE_STATE,value:function value(cp){if(cp===$$5.GREATER_THAN_SIGN){this._emitCurrentToken();this.state=DATA_STATE;}else if(cp===$$5.NULL){this._err(ERR$1.unexpectedNullCharacter);}else if(cp===$$5.EOF){this._emitCurrentToken();this._emitEOFToken();}}// CDATA section state
//------------------------------------------------------------------
},{key:CDATA_SECTION_STATE,value:function value(cp){if(cp===$$5.RIGHT_SQUARE_BRACKET){this.state=CDATA_SECTION_BRACKET_STATE;}else if(cp===$$5.EOF){this._err(ERR$1.eofInCdata);this._emitEOFToken();}else{this._emitCodePoint(cp);}}// CDATA section bracket state
//------------------------------------------------------------------
},{key:CDATA_SECTION_BRACKET_STATE,value:function value(cp){if(cp===$$5.RIGHT_SQUARE_BRACKET){this.state=CDATA_SECTION_END_STATE;}else{this._emitChars(']');this._reconsumeInState(CDATA_SECTION_STATE);}}// CDATA section end state
//------------------------------------------------------------------
},{key:CDATA_SECTION_END_STATE,value:function value(cp){if(cp===$$5.GREATER_THAN_SIGN){this.state=DATA_STATE;}else if(cp===$$5.RIGHT_SQUARE_BRACKET){this._emitChars(']');}else{this._emitChars(']]');this._reconsumeInState(CDATA_SECTION_STATE);}}// Character reference state
//------------------------------------------------------------------
},{key:CHARACTER_REFERENCE_STATE,value:function value(cp){this.tempBuff=[$$5.AMPERSAND];if(cp===$$5.NUMBER_SIGN){this.tempBuff.push(cp);this.state=NUMERIC_CHARACTER_REFERENCE_STATE;}else if(isAsciiAlphaNumeric(cp)){this._reconsumeInState(NAMED_CHARACTER_REFERENCE_STATE);}else{this._flushCodePointsConsumedAsCharacterReference();this._reconsumeInState(this.returnState);}}// Named character reference state
//------------------------------------------------------------------
},{key:NAMED_CHARACTER_REFERENCE_STATE,value:function value(cp){var matchResult=this._matchNamedCharacterReference(cp);//NOTE: matching can be abrupted by hibernation. In that case match
//results are no longer valid and we will need to start over.
if(this._ensureHibernation()){this.tempBuff=[$$5.AMPERSAND];}else if(matchResult){var withSemicolon=this.tempBuff[this.tempBuff.length-1]===$$5.SEMICOLON;if(!this._isCharacterReferenceAttributeQuirk(withSemicolon)){if(!withSemicolon){this._errOnNextCodePoint(ERR$1.missingSemicolonAfterCharacterReference);}this.tempBuff=matchResult;}this._flushCodePointsConsumedAsCharacterReference();this.state=this.returnState;}else{this._flushCodePointsConsumedAsCharacterReference();this.state=AMBIGUOUS_AMPERSAND_STATE;}}// Ambiguos ampersand state
//------------------------------------------------------------------
},{key:AMBIGUOUS_AMPERSAND_STATE,value:function value(cp){if(isAsciiAlphaNumeric(cp)){if(this._isCharacterReferenceInAttribute()){this.currentAttr.value+=toChar(cp);}else{this._emitCodePoint(cp);}}else{if(cp===$$5.SEMICOLON){this._err(ERR$1.unknownNamedCharacterReference);}this._reconsumeInState(this.returnState);}}// Numeric character reference state
//------------------------------------------------------------------
},{key:NUMERIC_CHARACTER_REFERENCE_STATE,value:function value(cp){this.charRefCode=0;if(cp===$$5.LATIN_SMALL_X||cp===$$5.LATIN_CAPITAL_X){this.tempBuff.push(cp);this.state=HEXADEMICAL_CHARACTER_REFERENCE_START_STATE;}else{this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_START_STATE);}}// Hexademical character reference start state
//------------------------------------------------------------------
},{key:HEXADEMICAL_CHARACTER_REFERENCE_START_STATE,value:function value(cp){if(isAsciiHexDigit(cp)){this._reconsumeInState(HEXADEMICAL_CHARACTER_REFERENCE_STATE);}else{this._err(ERR$1.absenceOfDigitsInNumericCharacterReference);this._flushCodePointsConsumedAsCharacterReference();this._reconsumeInState(this.returnState);}}// Decimal character reference start state
//------------------------------------------------------------------
},{key:DECIMAL_CHARACTER_REFERENCE_START_STATE,value:function value(cp){if(isAsciiDigit(cp)){this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_STATE);}else{this._err(ERR$1.absenceOfDigitsInNumericCharacterReference);this._flushCodePointsConsumedAsCharacterReference();this._reconsumeInState(this.returnState);}}// Hexademical character reference state
//------------------------------------------------------------------
},{key:HEXADEMICAL_CHARACTER_REFERENCE_STATE,value:function value(cp){if(isAsciiUpperHexDigit(cp)){this.charRefCode=this.charRefCode*16+cp-0x37;}else if(isAsciiLowerHexDigit(cp)){this.charRefCode=this.charRefCode*16+cp-0x57;}else if(isAsciiDigit(cp)){this.charRefCode=this.charRefCode*16+cp-0x30;}else if(cp===$$5.SEMICOLON){this.state=NUMERIC_CHARACTER_REFERENCE_END_STATE;}else{this._err(ERR$1.missingSemicolonAfterCharacterReference);this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);}}// Decimal character reference state
//------------------------------------------------------------------
},{key:DECIMAL_CHARACTER_REFERENCE_STATE,value:function value(cp){if(isAsciiDigit(cp)){this.charRefCode=this.charRefCode*10+cp-0x30;}else if(cp===$$5.SEMICOLON){this.state=NUMERIC_CHARACTER_REFERENCE_END_STATE;}else{this._err(ERR$1.missingSemicolonAfterCharacterReference);this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);}}// Numeric character reference end state
//------------------------------------------------------------------
},{key:NUMERIC_CHARACTER_REFERENCE_END_STATE,value:function value(){if(this.charRefCode===$$5.NULL){this._err(ERR$1.nullCharacterReference);this.charRefCode=$$5.REPLACEMENT_CHARACTER;}else if(this.charRefCode>0x10ffff){this._err(ERR$1.characterReferenceOutsideUnicodeRange);this.charRefCode=$$5.REPLACEMENT_CHARACTER;}else if(unicode$1.isSurrogate(this.charRefCode)){this._err(ERR$1.surrogateCharacterReference);this.charRefCode=$$5.REPLACEMENT_CHARACTER;}else if(unicode$1.isUndefinedCodePoint(this.charRefCode)){this._err(ERR$1.noncharacterCharacterReference);}else if(unicode$1.isControlCodePoint(this.charRefCode)||this.charRefCode===$$5.CARRIAGE_RETURN){this._err(ERR$1.controlCharacterReference);var replacement=C1_CONTROLS_REFERENCE_REPLACEMENTS[this.charRefCode];if(replacement){this.charRefCode=replacement;}}this.tempBuff=[this.charRefCode];this._flushCodePointsConsumedAsCharacterReference();this._reconsumeInState(this.returnState);}}]);return Tokenizer$4;}();//Token types
Tokenizer$4.CHARACTER_TOKEN='CHARACTER_TOKEN';Tokenizer$4.NULL_CHARACTER_TOKEN='NULL_CHARACTER_TOKEN';Tokenizer$4.WHITESPACE_CHARACTER_TOKEN='WHITESPACE_CHARACTER_TOKEN';Tokenizer$4.START_TAG_TOKEN='START_TAG_TOKEN';Tokenizer$4.END_TAG_TOKEN='END_TAG_TOKEN';Tokenizer$4.COMMENT_TOKEN='COMMENT_TOKEN';Tokenizer$4.DOCTYPE_TOKEN='DOCTYPE_TOKEN';Tokenizer$4.EOF_TOKEN='EOF_TOKEN';Tokenizer$4.HIBERNATION_TOKEN='HIBERNATION_TOKEN';//Tokenizer initial states for different modes
Tokenizer$4.MODE={DATA:DATA_STATE,RCDATA:RCDATA_STATE,RAWTEXT:RAWTEXT_STATE,SCRIPT_DATA:SCRIPT_DATA_STATE,PLAINTEXT:PLAINTEXT_STATE};//Static
Tokenizer$4.getTokenAttr=function(token,attrName){for(var i=token.attrs.length-1;i>=0;i--){if(token.attrs[i].name===attrName){return token.attrs[i].value;}}return null;};var tokenizer=Tokenizer$4;var html={};var NS$3=html.NAMESPACES={HTML:'http://www.w3.org/1999/xhtml',MATHML:'http://www.w3.org/1998/Math/MathML',SVG:'http://www.w3.org/2000/svg',XLINK:'http://www.w3.org/1999/xlink',XML:'http://www.w3.org/XML/1998/namespace',XMLNS:'http://www.w3.org/2000/xmlns/'};html.ATTRS={TYPE:'type',ACTION:'action',ENCODING:'encoding',PROMPT:'prompt',NAME:'name',COLOR:'color',FACE:'face',SIZE:'size'};html.DOCUMENT_MODE={NO_QUIRKS:'no-quirks',QUIRKS:'quirks',LIMITED_QUIRKS:'limited-quirks'};var $$4=html.TAG_NAMES={A:'a',ADDRESS:'address',ANNOTATION_XML:'annotation-xml',APPLET:'applet',AREA:'area',ARTICLE:'article',ASIDE:'aside',B:'b',BASE:'base',BASEFONT:'basefont',BGSOUND:'bgsound',BIG:'big',BLOCKQUOTE:'blockquote',BODY:'body',BR:'br',BUTTON:'button',CAPTION:'caption',CENTER:'center',CODE:'code',COL:'col',COLGROUP:'colgroup',DD:'dd',DESC:'desc',DETAILS:'details',DIALOG:'dialog',DIR:'dir',DIV:'div',DL:'dl',DT:'dt',EM:'em',EMBED:'embed',FIELDSET:'fieldset',FIGCAPTION:'figcaption',FIGURE:'figure',FONT:'font',FOOTER:'footer',FOREIGN_OBJECT:'foreignObject',FORM:'form',FRAME:'frame',FRAMESET:'frameset',H1:'h1',H2:'h2',H3:'h3',H4:'h4',H5:'h5',H6:'h6',HEAD:'head',HEADER:'header',HGROUP:'hgroup',HR:'hr',HTML:'html',I:'i',IMG:'img',IMAGE:'image',INPUT:'input',IFRAME:'iframe',KEYGEN:'keygen',LABEL:'label',LI:'li',LINK:'link',LISTING:'listing',MAIN:'main',MALIGNMARK:'malignmark',MARQUEE:'marquee',MATH:'math',MENU:'menu',META:'meta',MGLYPH:'mglyph',MI:'mi',MO:'mo',MN:'mn',MS:'ms',MTEXT:'mtext',NAV:'nav',NOBR:'nobr',NOFRAMES:'noframes',NOEMBED:'noembed',NOSCRIPT:'noscript',OBJECT:'object',OL:'ol',OPTGROUP:'optgroup',OPTION:'option',P:'p',PARAM:'param',PLAINTEXT:'plaintext',PRE:'pre',RB:'rb',RP:'rp',RT:'rt',RTC:'rtc',RUBY:'ruby',S:'s',SCRIPT:'script',SECTION:'section',SELECT:'select',SOURCE:'source',SMALL:'small',SPAN:'span',STRIKE:'strike',STRONG:'strong',STYLE:'style',SUB:'sub',SUMMARY:'summary',SUP:'sup',TABLE:'table',TBODY:'tbody',TEMPLATE:'template',TEXTAREA:'textarea',TFOOT:'tfoot',TD:'td',TH:'th',THEAD:'thead',TITLE:'title',TR:'tr',TRACK:'track',TT:'tt',U:'u',UL:'ul',SVG:'svg',VAR:'var',WBR:'wbr',XMP:'xmp'};html.SPECIAL_ELEMENTS=(_html$SPECIAL_ELEMENT={},_defineProperty(_html$SPECIAL_ELEMENT,NS$3.HTML,(_NS$3$HTML={},_defineProperty(_NS$3$HTML,$$4.ADDRESS,true),_defineProperty(_NS$3$HTML,$$4.APPLET,true),_defineProperty(_NS$3$HTML,$$4.AREA,true),_defineProperty(_NS$3$HTML,$$4.ARTICLE,true),_defineProperty(_NS$3$HTML,$$4.ASIDE,true),_defineProperty(_NS$3$HTML,$$4.BASE,true),_defineProperty(_NS$3$HTML,$$4.BASEFONT,true),_defineProperty(_NS$3$HTML,$$4.BGSOUND,true),_defineProperty(_NS$3$HTML,$$4.BLOCKQUOTE,true),_defineProperty(_NS$3$HTML,$$4.BODY,true),_defineProperty(_NS$3$HTML,$$4.BR,true),_defineProperty(_NS$3$HTML,$$4.BUTTON,true),_defineProperty(_NS$3$HTML,$$4.CAPTION,true),_defineProperty(_NS$3$HTML,$$4.CENTER,true),_defineProperty(_NS$3$HTML,$$4.COL,true),_defineProperty(_NS$3$HTML,$$4.COLGROUP,true),_defineProperty(_NS$3$HTML,$$4.DD,true),_defineProperty(_NS$3$HTML,$$4.DETAILS,true),_defineProperty(_NS$3$HTML,$$4.DIR,true),_defineProperty(_NS$3$HTML,$$4.DIV,true),_defineProperty(_NS$3$HTML,$$4.DL,true),_defineProperty(_NS$3$HTML,$$4.DT,true),_defineProperty(_NS$3$HTML,$$4.EMBED,true),_defineProperty(_NS$3$HTML,$$4.FIELDSET,true),_defineProperty(_NS$3$HTML,$$4.FIGCAPTION,true),_defineProperty(_NS$3$HTML,$$4.FIGURE,true),_defineProperty(_NS$3$HTML,$$4.FOOTER,true),_defineProperty(_NS$3$HTML,$$4.FORM,true),_defineProperty(_NS$3$HTML,$$4.FRAME,true),_defineProperty(_NS$3$HTML,$$4.FRAMESET,true),_defineProperty(_NS$3$HTML,$$4.H1,true),_defineProperty(_NS$3$HTML,$$4.H2,true),_defineProperty(_NS$3$HTML,$$4.H3,true),_defineProperty(_NS$3$HTML,$$4.H4,true),_defineProperty(_NS$3$HTML,$$4.H5,true),_defineProperty(_NS$3$HTML,$$4.H6,true),_defineProperty(_NS$3$HTML,$$4.HEAD,true),_defineProperty(_NS$3$HTML,$$4.HEADER,true),_defineProperty(_NS$3$HTML,$$4.HGROUP,true),_defineProperty(_NS$3$HTML,$$4.HR,true),_defineProperty(_NS$3$HTML,$$4.HTML,true),_defineProperty(_NS$3$HTML,$$4.IFRAME,true),_defineProperty(_NS$3$HTML,$$4.IMG,true),_defineProperty(_NS$3$HTML,$$4.INPUT,true),_defineProperty(_NS$3$HTML,$$4.LI,true),_defineProperty(_NS$3$HTML,$$4.LINK,true),_defineProperty(_NS$3$HTML,$$4.LISTING,true),_defineProperty(_NS$3$HTML,$$4.MAIN,true),_defineProperty(_NS$3$HTML,$$4.MARQUEE,true),_defineProperty(_NS$3$HTML,$$4.MENU,true),_defineProperty(_NS$3$HTML,$$4.META,true),_defineProperty(_NS$3$HTML,$$4.NAV,true),_defineProperty(_NS$3$HTML,$$4.NOEMBED,true),_defineProperty(_NS$3$HTML,$$4.NOFRAMES,true),_defineProperty(_NS$3$HTML,$$4.NOSCRIPT,true),_defineProperty(_NS$3$HTML,$$4.OBJECT,true),_defineProperty(_NS$3$HTML,$$4.OL,true),_defineProperty(_NS$3$HTML,$$4.P,true),_defineProperty(_NS$3$HTML,$$4.PARAM,true),_defineProperty(_NS$3$HTML,$$4.PLAINTEXT,true),_defineProperty(_NS$3$HTML,$$4.PRE,true),_defineProperty(_NS$3$HTML,$$4.SCRIPT,true),_defineProperty(_NS$3$HTML,$$4.SECTION,true),_defineProperty(_NS$3$HTML,$$4.SELECT,true),_defineProperty(_NS$3$HTML,$$4.SOURCE,true),_defineProperty(_NS$3$HTML,$$4.STYLE,true),_defineProperty(_NS$3$HTML,$$4.SUMMARY,true),_defineProperty(_NS$3$HTML,$$4.TABLE,true),_defineProperty(_NS$3$HTML,$$4.TBODY,true),_defineProperty(_NS$3$HTML,$$4.TD,true),_defineProperty(_NS$3$HTML,$$4.TEMPLATE,true),_defineProperty(_NS$3$HTML,$$4.TEXTAREA,true),_defineProperty(_NS$3$HTML,$$4.TFOOT,true),_defineProperty(_NS$3$HTML,$$4.TH,true),_defineProperty(_NS$3$HTML,$$4.THEAD,true),_defineProperty(_NS$3$HTML,$$4.TITLE,true),_defineProperty(_NS$3$HTML,$$4.TR,true),_defineProperty(_NS$3$HTML,$$4.TRACK,true),_defineProperty(_NS$3$HTML,$$4.UL,true),_defineProperty(_NS$3$HTML,$$4.WBR,true),_defineProperty(_NS$3$HTML,$$4.XMP,true),_NS$3$HTML)),_defineProperty(_html$SPECIAL_ELEMENT,NS$3.MATHML,(_NS$3$MATHML={},_defineProperty(_NS$3$MATHML,$$4.MI,true),_defineProperty(_NS$3$MATHML,$$4.MO,true),_defineProperty(_NS$3$MATHML,$$4.MN,true),_defineProperty(_NS$3$MATHML,$$4.MS,true),_defineProperty(_NS$3$MATHML,$$4.MTEXT,true),_defineProperty(_NS$3$MATHML,$$4.ANNOTATION_XML,true),_NS$3$MATHML)),_defineProperty(_html$SPECIAL_ELEMENT,NS$3.SVG,(_NS$3$SVG={},_defineProperty(_NS$3$SVG,$$4.TITLE,true),_defineProperty(_NS$3$SVG,$$4.FOREIGN_OBJECT,true),_defineProperty(_NS$3$SVG,$$4.DESC,true),_NS$3$SVG)),_html$SPECIAL_ELEMENT);var HTML$3=html;//Aliases
var $$3=HTML$3.TAG_NAMES;var NS$2=HTML$3.NAMESPACES;//Element utils
//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function isImpliedEndTagRequired(tn){switch(tn.length){case 1:return tn===$$3.P;case 2:return tn===$$3.RB||tn===$$3.RP||tn===$$3.RT||tn===$$3.DD||tn===$$3.DT||tn===$$3.LI;case 3:return tn===$$3.RTC;case 6:return tn===$$3.OPTION;case 8:return tn===$$3.OPTGROUP;}return false;}function isImpliedEndTagRequiredThoroughly(tn){switch(tn.length){case 1:return tn===$$3.P;case 2:return tn===$$3.RB||tn===$$3.RP||tn===$$3.RT||tn===$$3.DD||tn===$$3.DT||tn===$$3.LI||tn===$$3.TD||tn===$$3.TH||tn===$$3.TR;case 3:return tn===$$3.RTC;case 5:return tn===$$3.TBODY||tn===$$3.TFOOT||tn===$$3.THEAD;case 6:return tn===$$3.OPTION;case 7:return tn===$$3.CAPTION;case 8:return tn===$$3.OPTGROUP||tn===$$3.COLGROUP;}return false;}function isScopingElement(tn,ns){switch(tn.length){case 2:if(tn===$$3.TD||tn===$$3.TH){return ns===NS$2.HTML;}else if(tn===$$3.MI||tn===$$3.MO||tn===$$3.MN||tn===$$3.MS){return ns===NS$2.MATHML;}break;case 4:if(tn===$$3.HTML){return ns===NS$2.HTML;}else if(tn===$$3.DESC){return ns===NS$2.SVG;}break;case 5:if(tn===$$3.TABLE){return ns===NS$2.HTML;}else if(tn===$$3.MTEXT){return ns===NS$2.MATHML;}else if(tn===$$3.TITLE){return ns===NS$2.SVG;}break;case 6:return(tn===$$3.APPLET||tn===$$3.OBJECT)&&ns===NS$2.HTML;case 7:return(tn===$$3.CAPTION||tn===$$3.MARQUEE)&&ns===NS$2.HTML;case 8:return tn===$$3.TEMPLATE&&ns===NS$2.HTML;case 13:return tn===$$3.FOREIGN_OBJECT&&ns===NS$2.SVG;case 14:return tn===$$3.ANNOTATION_XML&&ns===NS$2.MATHML;}return false;}//Stack of open elements
var OpenElementStack$1=/*#__PURE__*/function(){function OpenElementStack$1(document,treeAdapter){_classCallCheck(this,OpenElementStack$1);this.stackTop=-1;this.items=[];this.current=document;this.currentTagName=null;this.currentTmplContent=null;this.tmplCount=0;this.treeAdapter=treeAdapter;}//Index of element
_createClass(OpenElementStack$1,[{key:"_indexOf",value:function _indexOf(element){var idx=-1;for(var i=this.stackTop;i>=0;i--){if(this.items[i]===element){idx=i;break;}}return idx;}//Update current element
},{key:"_isInTemplate",value:function _isInTemplate(){return this.currentTagName===$$3.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===NS$2.HTML;}},{key:"_updateCurrentElement",value:function _updateCurrentElement(){this.current=this.items[this.stackTop];this.currentTagName=this.current&&this.treeAdapter.getTagName(this.current);this.currentTmplContent=this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):null;}//Mutations
},{key:"push",value:function push(element){this.items[++this.stackTop]=element;this._updateCurrentElement();if(this._isInTemplate()){this.tmplCount++;}}},{key:"pop",value:function pop(){this.stackTop--;if(this.tmplCount>0&&this._isInTemplate()){this.tmplCount--;}this._updateCurrentElement();}},{key:"replace",value:function replace(oldElement,newElement){var idx=this._indexOf(oldElement);this.items[idx]=newElement;if(idx===this.stackTop){this._updateCurrentElement();}}},{key:"insertAfter",value:function insertAfter(referenceElement,newElement){var insertionIdx=this._indexOf(referenceElement)+1;this.items.splice(insertionIdx,0,newElement);if(insertionIdx===++this.stackTop){this._updateCurrentElement();}}},{key:"popUntilTagNamePopped",value:function popUntilTagNamePopped(tagName){while(this.stackTop>-1){var tn=this.currentTagName;var _ns=this.treeAdapter.getNamespaceURI(this.current);this.pop();if(tn===tagName&&_ns===NS$2.HTML){break;}}}},{key:"popUntilElementPopped",value:function popUntilElementPopped(element){while(this.stackTop>-1){var poppedElement=this.current;this.pop();if(poppedElement===element){break;}}}},{key:"popUntilNumberedHeaderPopped",value:function popUntilNumberedHeaderPopped(){while(this.stackTop>-1){var tn=this.currentTagName;var _ns2=this.treeAdapter.getNamespaceURI(this.current);this.pop();if(tn===$$3.H1||tn===$$3.H2||tn===$$3.H3||tn===$$3.H4||tn===$$3.H5||tn===$$3.H6&&_ns2===NS$2.HTML){break;}}}},{key:"popUntilTableCellPopped",value:function popUntilTableCellPopped(){while(this.stackTop>-1){var tn=this.currentTagName;var _ns3=this.treeAdapter.getNamespaceURI(this.current);this.pop();if(tn===$$3.TD||tn===$$3.TH&&_ns3===NS$2.HTML){break;}}}},{key:"popAllUpToHtmlElement",value:function popAllUpToHtmlElement(){//NOTE: here we assume that root <html> element is always first in the open element stack, so
//we perform this fast stack clean up.
this.stackTop=0;this._updateCurrentElement();}},{key:"clearBackToTableContext",value:function clearBackToTableContext(){while(this.currentTagName!==$$3.TABLE&&this.currentTagName!==$$3.TEMPLATE&&this.currentTagName!==$$3.HTML||this.treeAdapter.getNamespaceURI(this.current)!==NS$2.HTML){this.pop();}}},{key:"clearBackToTableBodyContext",value:function clearBackToTableBodyContext(){while(this.currentTagName!==$$3.TBODY&&this.currentTagName!==$$3.TFOOT&&this.currentTagName!==$$3.THEAD&&this.currentTagName!==$$3.TEMPLATE&&this.currentTagName!==$$3.HTML||this.treeAdapter.getNamespaceURI(this.current)!==NS$2.HTML){this.pop();}}},{key:"clearBackToTableRowContext",value:function clearBackToTableRowContext(){while(this.currentTagName!==$$3.TR&&this.currentTagName!==$$3.TEMPLATE&&this.currentTagName!==$$3.HTML||this.treeAdapter.getNamespaceURI(this.current)!==NS$2.HTML){this.pop();}}},{key:"remove",value:function remove(element){for(var i=this.stackTop;i>=0;i--){if(this.items[i]===element){this.items.splice(i,1);this.stackTop--;this._updateCurrentElement();break;}}}//Search
},{key:"tryPeekProperlyNestedBodyElement",value:function tryPeekProperlyNestedBodyElement(){//Properly nested <body> element (should be second element in stack).
var element=this.items[1];return element&&this.treeAdapter.getTagName(element)===$$3.BODY?element:null;}},{key:"contains",value:function contains(element){return this._indexOf(element)>-1;}},{key:"getCommonAncestor",value:function getCommonAncestor(element){var elementIdx=this._indexOf(element);return--elementIdx>=0?this.items[elementIdx]:null;}},{key:"isRootHtmlElementCurrent",value:function isRootHtmlElementCurrent(){return this.stackTop===0&&this.currentTagName===$$3.HTML;}//Element in scope
},{key:"hasInScope",value:function hasInScope(tagName){for(var i=this.stackTop;i>=0;i--){var tn=this.treeAdapter.getTagName(this.items[i]);var _ns4=this.treeAdapter.getNamespaceURI(this.items[i]);if(tn===tagName&&_ns4===NS$2.HTML){return true;}if(isScopingElement(tn,_ns4)){return false;}}return true;}},{key:"hasNumberedHeaderInScope",value:function hasNumberedHeaderInScope(){for(var i=this.stackTop;i>=0;i--){var tn=this.treeAdapter.getTagName(this.items[i]);var _ns5=this.treeAdapter.getNamespaceURI(this.items[i]);if((tn===$$3.H1||tn===$$3.H2||tn===$$3.H3||tn===$$3.H4||tn===$$3.H5||tn===$$3.H6)&&_ns5===NS$2.HTML){return true;}if(isScopingElement(tn,_ns5)){return false;}}return true;}},{key:"hasInListItemScope",value:function hasInListItemScope(tagName){for(var i=this.stackTop;i>=0;i--){var tn=this.treeAdapter.getTagName(this.items[i]);var _ns6=this.treeAdapter.getNamespaceURI(this.items[i]);if(tn===tagName&&_ns6===NS$2.HTML){return true;}if((tn===$$3.UL||tn===$$3.OL)&&_ns6===NS$2.HTML||isScopingElement(tn,_ns6)){return false;}}return true;}},{key:"hasInButtonScope",value:function hasInButtonScope(tagName){for(var i=this.stackTop;i>=0;i--){var tn=this.treeAdapter.getTagName(this.items[i]);var _ns7=this.treeAdapter.getNamespaceURI(this.items[i]);if(tn===tagName&&_ns7===NS$2.HTML){return true;}if(tn===$$3.BUTTON&&_ns7===NS$2.HTML||isScopingElement(tn,_ns7)){return false;}}return true;}},{key:"hasInTableScope",value:function hasInTableScope(tagName){for(var i=this.stackTop;i>=0;i--){var tn=this.treeAdapter.getTagName(this.items[i]);var _ns8=this.treeAdapter.getNamespaceURI(this.items[i]);if(_ns8!==NS$2.HTML){continue;}if(tn===tagName){return true;}if(tn===$$3.TABLE||tn===$$3.TEMPLATE||tn===$$3.HTML){return false;}}return true;}},{key:"hasTableBodyContextInTableScope",value:function hasTableBodyContextInTableScope(){for(var i=this.stackTop;i>=0;i--){var tn=this.treeAdapter.getTagName(this.items[i]);var _ns9=this.treeAdapter.getNamespaceURI(this.items[i]);if(_ns9!==NS$2.HTML){continue;}if(tn===$$3.TBODY||tn===$$3.THEAD||tn===$$3.TFOOT){return true;}if(tn===$$3.TABLE||tn===$$3.HTML){return false;}}return true;}},{key:"hasInSelectScope",value:function hasInSelectScope(tagName){for(var i=this.stackTop;i>=0;i--){var tn=this.treeAdapter.getTagName(this.items[i]);var _ns10=this.treeAdapter.getNamespaceURI(this.items[i]);if(_ns10!==NS$2.HTML){continue;}if(tn===tagName){return true;}if(tn!==$$3.OPTION&&tn!==$$3.OPTGROUP){return false;}}return true;}//Implied end tags
},{key:"generateImpliedEndTags",value:function generateImpliedEndTags(){while(isImpliedEndTagRequired(this.currentTagName)){this.pop();}}},{key:"generateImpliedEndTagsThoroughly",value:function generateImpliedEndTagsThoroughly(){while(isImpliedEndTagRequiredThoroughly(this.currentTagName)){this.pop();}}},{key:"generateImpliedEndTagsWithExclusion",value:function generateImpliedEndTagsWithExclusion(exclusionTagName){while(isImpliedEndTagRequired(this.currentTagName)&&this.currentTagName!==exclusionTagName){this.pop();}}}]);return OpenElementStack$1;}();var openElementStack=OpenElementStack$1;//Const
var NOAH_ARK_CAPACITY=3;//List of formatting elements
var FormattingElementList$1=/*#__PURE__*/function(){function FormattingElementList$1(treeAdapter){_classCallCheck(this,FormattingElementList$1);this.length=0;this.entries=[];this.treeAdapter=treeAdapter;this.bookmark=null;}//Noah Ark's condition
//OPTIMIZATION: at first we try to find possible candidates for exclusion using
//lightweight heuristics without thorough attributes check.
_createClass(FormattingElementList$1,[{key:"_getNoahArkConditionCandidates",value:function _getNoahArkConditionCandidates(newElement){var candidates=[];if(this.length>=NOAH_ARK_CAPACITY){var neAttrsLength=this.treeAdapter.getAttrList(newElement).length;var neTagName=this.treeAdapter.getTagName(newElement);var neNamespaceURI=this.treeAdapter.getNamespaceURI(newElement);for(var i=this.length-1;i>=0;i--){var entry=this.entries[i];if(entry.type===FormattingElementList$1.MARKER_ENTRY){break;}var _element=entry.element;var elementAttrs=this.treeAdapter.getAttrList(_element);var isCandidate=this.treeAdapter.getTagName(_element)===neTagName&&this.treeAdapter.getNamespaceURI(_element)===neNamespaceURI&&elementAttrs.length===neAttrsLength;if(isCandidate){candidates.push({idx:i,attrs:elementAttrs});}}}return candidates.length<NOAH_ARK_CAPACITY?[]:candidates;}},{key:"_ensureNoahArkCondition",value:function _ensureNoahArkCondition(newElement){var candidates=this._getNoahArkConditionCandidates(newElement);var cLength=candidates.length;if(cLength){var neAttrs=this.treeAdapter.getAttrList(newElement);var neAttrsLength=neAttrs.length;var neAttrsMap=Object.create(null);//NOTE: build attrs map for the new element so we can perform fast lookups
for(var i=0;i<neAttrsLength;i++){var neAttr=neAttrs[i];neAttrsMap[neAttr.name]=neAttr.value;}for(var _i2=0;_i2<neAttrsLength;_i2++){for(var j=0;j<cLength;j++){var cAttr=candidates[j].attrs[_i2];if(neAttrsMap[cAttr.name]!==cAttr.value){candidates.splice(j,1);cLength--;}if(candidates.length<NOAH_ARK_CAPACITY){return;}}}//NOTE: remove bottommost candidates until Noah's Ark condition will not be met
for(var _i3=cLength-1;_i3>=NOAH_ARK_CAPACITY-1;_i3--){this.entries.splice(candidates[_i3].idx,1);this.length--;}}}//Mutations
},{key:"insertMarker",value:function insertMarker(){this.entries.push({type:FormattingElementList$1.MARKER_ENTRY});this.length++;}},{key:"pushElement",value:function pushElement(element,token){this._ensureNoahArkCondition(element);this.entries.push({type:FormattingElementList$1.ELEMENT_ENTRY,element:element,token:token});this.length++;}},{key:"insertElementAfterBookmark",value:function insertElementAfterBookmark(element,token){var bookmarkIdx=this.length-1;for(;bookmarkIdx>=0;bookmarkIdx--){if(this.entries[bookmarkIdx]===this.bookmark){break;}}this.entries.splice(bookmarkIdx+1,0,{type:FormattingElementList$1.ELEMENT_ENTRY,element:element,token:token});this.length++;}},{key:"removeEntry",value:function removeEntry(entry){for(var i=this.length-1;i>=0;i--){if(this.entries[i]===entry){this.entries.splice(i,1);this.length--;break;}}}},{key:"clearToLastMarker",value:function clearToLastMarker(){while(this.length){var entry=this.entries.pop();this.length--;if(entry.type===FormattingElementList$1.MARKER_ENTRY){break;}}}//Search
},{key:"getElementEntryInScopeWithTagName",value:function getElementEntryInScopeWithTagName(tagName){for(var i=this.length-1;i>=0;i--){var entry=this.entries[i];if(entry.type===FormattingElementList$1.MARKER_ENTRY){return null;}if(this.treeAdapter.getTagName(entry.element)===tagName){return entry;}}return null;}},{key:"getElementEntry",value:function getElementEntry(element){for(var i=this.length-1;i>=0;i--){var entry=this.entries[i];if(entry.type===FormattingElementList$1.ELEMENT_ENTRY&&entry.element===element){return entry;}}return null;}}]);return FormattingElementList$1;}();//Entry types
FormattingElementList$1.MARKER_ENTRY='MARKER_ENTRY';FormattingElementList$1.ELEMENT_ENTRY='ELEMENT_ENTRY';var formattingElementList=FormattingElementList$1;var Mixin$9=/*#__PURE__*/function(){function Mixin$9(host){_classCallCheck(this,Mixin$9);var originalMethods={};var overriddenMethods=this._getOverriddenMethods(this,originalMethods);for(var _i4=0,_Object$keys=Object.keys(overriddenMethods);_i4<_Object$keys.length;_i4++){var key=_Object$keys[_i4];if(typeof overriddenMethods[key]==='function'){originalMethods[key]=host[key];host[key]=overriddenMethods[key];}}}_createClass(Mixin$9,[{key:"_getOverriddenMethods",value:function _getOverriddenMethods(){throw new Error('Not implemented');}}]);return Mixin$9;}();Mixin$9.install=function(host,Ctor,opts){if(!host.__mixins){host.__mixins=[];}for(var i=0;i<host.__mixins.length;i++){if(host.__mixins[i].constructor===Ctor){return host.__mixins[i];}}var mixin=new Ctor(host,opts);host.__mixins.push(mixin);return mixin;};var mixin=Mixin$9;var Mixin$8=mixin;var PositionTrackingPreprocessorMixin$2=/*#__PURE__*/function(_Mixin$){_inherits(PositionTrackingPreprocessorMixin$2,_Mixin$);var _super3=_createSuper(PositionTrackingPreprocessorMixin$2);function PositionTrackingPreprocessorMixin$2(preprocessor){var _this4;_classCallCheck(this,PositionTrackingPreprocessorMixin$2);_this4=_super3.call(this,preprocessor);_this4.preprocessor=preprocessor;_this4.isEol=false;_this4.lineStartPos=0;_this4.droppedBufferSize=0;_this4.offset=0;_this4.col=0;_this4.line=1;return _this4;}_createClass(PositionTrackingPreprocessorMixin$2,[{key:"_getOverriddenMethods",value:function _getOverriddenMethods(mxn,orig){return{advance:function advance(){var pos=this.pos+1;var ch=this.html[pos];//NOTE: LF should be in the last column of the line
if(mxn.isEol){mxn.isEol=false;mxn.line++;mxn.lineStartPos=pos;}if(ch==='\n'||ch==='\r'&&this.html[pos+1]!=='\n'){mxn.isEol=true;}mxn.col=pos-mxn.lineStartPos+1;mxn.offset=mxn.droppedBufferSize+pos;return orig.advance.call(this);},retreat:function retreat(){orig.retreat.call(this);mxn.isEol=false;mxn.col=this.pos-mxn.lineStartPos+1;},dropParsedChunk:function dropParsedChunk(){var prevPos=this.pos;orig.dropParsedChunk.call(this);var reduction=prevPos-this.pos;mxn.lineStartPos-=reduction;mxn.droppedBufferSize+=reduction;mxn.offset=mxn.droppedBufferSize+this.pos;}};}}]);return PositionTrackingPreprocessorMixin$2;}(Mixin$8);var preprocessorMixin$1=PositionTrackingPreprocessorMixin$2;var Mixin$7=mixin;var Tokenizer$3=tokenizer;var PositionTrackingPreprocessorMixin$1=preprocessorMixin$1;var LocationInfoTokenizerMixin$2=/*#__PURE__*/function(_Mixin$2){_inherits(LocationInfoTokenizerMixin$2,_Mixin$2);var _super4=_createSuper(LocationInfoTokenizerMixin$2);function LocationInfoTokenizerMixin$2(tokenizer){var _this5;_classCallCheck(this,LocationInfoTokenizerMixin$2);_this5=_super4.call(this,tokenizer);_this5.tokenizer=tokenizer;_this5.posTracker=Mixin$7.install(tokenizer.preprocessor,PositionTrackingPreprocessorMixin$1);_this5.currentAttrLocation=null;_this5.ctLoc=null;return _this5;}_createClass(LocationInfoTokenizerMixin$2,[{key:"_getCurrentLocation",value:function _getCurrentLocation(){return{startLine:this.posTracker.line,startCol:this.posTracker.col,startOffset:this.posTracker.offset,endLine:-1,endCol:-1,endOffset:-1};}},{key:"_attachCurrentAttrLocationInfo",value:function _attachCurrentAttrLocationInfo(){this.currentAttrLocation.endLine=this.posTracker.line;this.currentAttrLocation.endCol=this.posTracker.col;this.currentAttrLocation.endOffset=this.posTracker.offset;var currentToken=this.tokenizer.currentToken;var currentAttr=this.tokenizer.currentAttr;if(!currentToken.location.attrs){currentToken.location.attrs=Object.create(null);}currentToken.location.attrs[currentAttr.name]=this.currentAttrLocation;}},{key:"_getOverriddenMethods",value:function _getOverriddenMethods(mxn,orig){var methods={_createStartTagToken:function _createStartTagToken(){orig._createStartTagToken.call(this);this.currentToken.location=mxn.ctLoc;},_createEndTagToken:function _createEndTagToken(){orig._createEndTagToken.call(this);this.currentToken.location=mxn.ctLoc;},_createCommentToken:function _createCommentToken(){orig._createCommentToken.call(this);this.currentToken.location=mxn.ctLoc;},_createDoctypeToken:function _createDoctypeToken(initialName){orig._createDoctypeToken.call(this,initialName);this.currentToken.location=mxn.ctLoc;},_createCharacterToken:function _createCharacterToken(type,ch){orig._createCharacterToken.call(this,type,ch);this.currentCharacterToken.location=mxn.ctLoc;},_createEOFToken:function _createEOFToken(){orig._createEOFToken.call(this);this.currentToken.location=mxn._getCurrentLocation();},_createAttr:function _createAttr(attrNameFirstCh){orig._createAttr.call(this,attrNameFirstCh);mxn.currentAttrLocation=mxn._getCurrentLocation();},_leaveAttrName:function _leaveAttrName(toState){orig._leaveAttrName.call(this,toState);mxn._attachCurrentAttrLocationInfo();},_leaveAttrValue:function _leaveAttrValue(toState){orig._leaveAttrValue.call(this,toState);mxn._attachCurrentAttrLocationInfo();},_emitCurrentToken:function _emitCurrentToken(){var ctLoc=this.currentToken.location;//NOTE: if we have pending character token make it's end location equal to the
//current token's start location.
if(this.currentCharacterToken){this.currentCharacterToken.location.endLine=ctLoc.startLine;this.currentCharacterToken.location.endCol=ctLoc.startCol;this.currentCharacterToken.location.endOffset=ctLoc.startOffset;}if(this.currentToken.type===Tokenizer$3.EOF_TOKEN){ctLoc.endLine=ctLoc.startLine;ctLoc.endCol=ctLoc.startCol;ctLoc.endOffset=ctLoc.startOffset;}else{ctLoc.endLine=mxn.posTracker.line;ctLoc.endCol=mxn.posTracker.col+1;ctLoc.endOffset=mxn.posTracker.offset+1;}orig._emitCurrentToken.call(this);},_emitCurrentCharacterToken:function _emitCurrentCharacterToken(){var ctLoc=this.currentCharacterToken&&this.currentCharacterToken.location;//NOTE: if we have character token and it's location wasn't set in the _emitCurrentToken(),
//then set it's location at the current preprocessor position.
//We don't need to increment preprocessor position, since character token
//emission is always forced by the start of the next character token here.
//So, we already have advanced position.
if(ctLoc&&ctLoc.endOffset===-1){ctLoc.endLine=mxn.posTracker.line;ctLoc.endCol=mxn.posTracker.col;ctLoc.endOffset=mxn.posTracker.offset;}orig._emitCurrentCharacterToken.call(this);}};//NOTE: patch initial states for each mode to obtain token start position
Object.keys(Tokenizer$3.MODE).forEach(function(modeName){var state=Tokenizer$3.MODE[modeName];methods[state]=function(cp){mxn.ctLoc=mxn._getCurrentLocation();orig[state].call(this,cp);};});return methods;}}]);return LocationInfoTokenizerMixin$2;}(Mixin$7);var tokenizerMixin$1=LocationInfoTokenizerMixin$2;var Mixin$6=mixin;var LocationInfoOpenElementStackMixin$1=/*#__PURE__*/function(_Mixin$3){_inherits(LocationInfoOpenElementStackMixin$1,_Mixin$3);var _super5=_createSuper(LocationInfoOpenElementStackMixin$1);function LocationInfoOpenElementStackMixin$1(stack,opts){var _this6;_classCallCheck(this,LocationInfoOpenElementStackMixin$1);_this6=_super5.call(this,stack);_this6.onItemPop=opts.onItemPop;return _this6;}_createClass(LocationInfoOpenElementStackMixin$1,[{key:"_getOverriddenMethods",value:function _getOverriddenMethods(mxn,orig){return{pop:function pop(){mxn.onItemPop(this.current);orig.pop.call(this);},popAllUpToHtmlElement:function popAllUpToHtmlElement(){for(var i=this.stackTop;i>0;i--){mxn.onItemPop(this.items[i]);}orig.popAllUpToHtmlElement.call(this);},remove:function remove(element){mxn.onItemPop(this.current);orig.remove.call(this,element);}};}}]);return LocationInfoOpenElementStackMixin$1;}(Mixin$6);var openElementStackMixin=LocationInfoOpenElementStackMixin$1;var Mixin$5=mixin;var Tokenizer$2=tokenizer;var LocationInfoTokenizerMixin$1=tokenizerMixin$1;var LocationInfoOpenElementStackMixin=openElementStackMixin;var HTML$2=html;//Aliases
var $$2=HTML$2.TAG_NAMES;var LocationInfoParserMixin$1=/*#__PURE__*/function(_Mixin$4){_inherits(LocationInfoParserMixin$1,_Mixin$4);var _super6=_createSuper(LocationInfoParserMixin$1);function LocationInfoParserMixin$1(parser){var _this7;_classCallCheck(this,LocationInfoParserMixin$1);_this7=_super6.call(this,parser);_this7.parser=parser;_this7.treeAdapter=_this7.parser.treeAdapter;_this7.posTracker=null;_this7.lastStartTagToken=null;_this7.lastFosterParentingLocation=null;_this7.currentToken=null;return _this7;}_createClass(LocationInfoParserMixin$1,[{key:"_setStartLocation",value:function _setStartLocation(element){var loc=null;if(this.lastStartTagToken){loc=Object.assign({},this.lastStartTagToken.location);loc.startTag=this.lastStartTagToken.location;}this.treeAdapter.setNodeSourceCodeLocation(element,loc);}},{key:"_setEndLocation",value:function _setEndLocation(element,closingToken){var loc=this.treeAdapter.getNodeSourceCodeLocation(element);if(loc){if(closingToken.location){var ctLoc=closingToken.location;var tn=this.treeAdapter.getTagName(element);// NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
// tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
var isClosingEndTag=closingToken.type===Tokenizer$2.END_TAG_TOKEN&&tn===closingToken.tagName;var endLoc={};if(isClosingEndTag){endLoc.endTag=Object.assign({},ctLoc);endLoc.endLine=ctLoc.endLine;endLoc.endCol=ctLoc.endCol;endLoc.endOffset=ctLoc.endOffset;}else{endLoc.endLine=ctLoc.startLine;endLoc.endCol=ctLoc.startCol;endLoc.endOffset=ctLoc.startOffset;}this.treeAdapter.updateNodeSourceCodeLocation(element,endLoc);}}}},{key:"_getOverriddenMethods",value:function _getOverriddenMethods(mxn,orig){return{_bootstrap:function _bootstrap(document,fragmentContext){orig._bootstrap.call(this,document,fragmentContext);mxn.lastStartTagToken=null;mxn.lastFosterParentingLocation=null;mxn.currentToken=null;var tokenizerMixin=Mixin$5.install(this.tokenizer,LocationInfoTokenizerMixin$1);mxn.posTracker=tokenizerMixin.posTracker;Mixin$5.install(this.openElements,LocationInfoOpenElementStackMixin,{onItemPop:function onItemPop(element){mxn._setEndLocation(element,mxn.currentToken);}});},_runParsingLoop:function _runParsingLoop(scriptHandler){orig._runParsingLoop.call(this,scriptHandler);// NOTE: generate location info for elements
// that remains on open element stack
for(var i=this.openElements.stackTop;i>=0;i--){mxn._setEndLocation(this.openElements.items[i],mxn.currentToken);}},//Token processing
_processTokenInForeignContent:function _processTokenInForeignContent(token){mxn.currentToken=token;orig._processTokenInForeignContent.call(this,token);},_processToken:function _processToken(token){mxn.currentToken=token;orig._processToken.call(this,token);//NOTE: <body> and <html> are never popped from the stack, so we need to updated
//their end location explicitly.
var requireExplicitUpdate=token.type===Tokenizer$2.END_TAG_TOKEN&&(token.tagName===$$2.HTML||token.tagName===$$2.BODY&&this.openElements.hasInScope($$2.BODY));if(requireExplicitUpdate){for(var i=this.openElements.stackTop;i>=0;i--){var _element2=this.openElements.items[i];if(this.treeAdapter.getTagName(_element2)===token.tagName){mxn._setEndLocation(_element2,token);break;}}}},//Doctype
_setDocumentType:function _setDocumentType(token){orig._setDocumentType.call(this,token);var documentChildren=this.treeAdapter.getChildNodes(this.document);var cnLength=documentChildren.length;for(var i=0;i<cnLength;i++){var node=documentChildren[i];if(this.treeAdapter.isDocumentTypeNode(node)){this.treeAdapter.setNodeSourceCodeLocation(node,token.location);break;}}},//Elements
_attachElementToTree:function _attachElementToTree(element){//NOTE: _attachElementToTree is called from _appendElement, _insertElement and _insertTemplate methods.
//So we will use token location stored in this methods for the element.
mxn._setStartLocation(element);mxn.lastStartTagToken=null;orig._attachElementToTree.call(this,element);},_appendElement:function _appendElement(token,namespaceURI){mxn.lastStartTagToken=token;orig._appendElement.call(this,token,namespaceURI);},_insertElement:function _insertElement(token,namespaceURI){mxn.lastStartTagToken=token;orig._insertElement.call(this,token,namespaceURI);},_insertTemplate:function _insertTemplate(token){mxn.lastStartTagToken=token;orig._insertTemplate.call(this,token);var tmplContent=this.treeAdapter.getTemplateContent(this.openElements.current);this.treeAdapter.setNodeSourceCodeLocation(tmplContent,null);},_insertFakeRootElement:function _insertFakeRootElement(){orig._insertFakeRootElement.call(this);this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current,null);},//Comments
_appendCommentNode:function _appendCommentNode(token,parent){orig._appendCommentNode.call(this,token,parent);var children=this.treeAdapter.getChildNodes(parent);var commentNode=children[children.length-1];this.treeAdapter.setNodeSourceCodeLocation(commentNode,token.location);},//Text
_findFosterParentingLocation:function _findFosterParentingLocation(){//NOTE: store last foster parenting location, so we will be able to find inserted text
//in case of foster parenting
mxn.lastFosterParentingLocation=orig._findFosterParentingLocation.call(this);return mxn.lastFosterParentingLocation;},_insertCharacters:function _insertCharacters(token){orig._insertCharacters.call(this,token);var hasFosterParent=this._shouldFosterParentOnInsertion();var parent=hasFosterParent&&mxn.lastFosterParentingLocation.parent||this.openElements.currentTmplContent||this.openElements.current;var siblings=this.treeAdapter.getChildNodes(parent);var textNodeIdx=hasFosterParent&&mxn.lastFosterParentingLocation.beforeElement?siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement)-1:siblings.length-1;var textNode=siblings[textNodeIdx];//NOTE: if we have location assigned by another token, then just update end position
var tnLoc=this.treeAdapter.getNodeSourceCodeLocation(textNode);if(tnLoc){var _token$location=token.location,endLine=_token$location.endLine,endCol=_token$location.endCol,endOffset=_token$location.endOffset;this.treeAdapter.updateNodeSourceCodeLocation(textNode,{endLine:endLine,endCol:endCol,endOffset:endOffset});}else{this.treeAdapter.setNodeSourceCodeLocation(textNode,token.location);}}};}}]);return LocationInfoParserMixin$1;}(Mixin$5);var parserMixin$1=LocationInfoParserMixin$1;var Mixin$4=mixin;var ErrorReportingMixinBase$3=/*#__PURE__*/function(_Mixin$5){_inherits(ErrorReportingMixinBase$3,_Mixin$5);var _super7=_createSuper(ErrorReportingMixinBase$3);function ErrorReportingMixinBase$3(host,opts){var _this8;_classCallCheck(this,ErrorReportingMixinBase$3);_this8=_super7.call(this,host);_this8.posTracker=null;_this8.onParseError=opts.onParseError;return _this8;}_createClass(ErrorReportingMixinBase$3,[{key:"_setErrorLocation",value:function _setErrorLocation(err){err.startLine=err.endLine=this.posTracker.line;err.startCol=err.endCol=this.posTracker.col;err.startOffset=err.endOffset=this.posTracker.offset;}},{key:"_reportError",value:function _reportError(code){var err={code:code,startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1};this._setErrorLocation(err);this.onParseError(err);}},{key:"_getOverriddenMethods",value:function _getOverriddenMethods(mxn){return{_err:function _err(code){mxn._reportError(code);}};}}]);return ErrorReportingMixinBase$3;}(Mixin$4);var mixinBase=ErrorReportingMixinBase$3;var ErrorReportingMixinBase$2=mixinBase;var PositionTrackingPreprocessorMixin=preprocessorMixin$1;var Mixin$3=mixin;var ErrorReportingPreprocessorMixin$1=/*#__PURE__*/function(_ErrorReportingMixinB){_inherits(ErrorReportingPreprocessorMixin$1,_ErrorReportingMixinB);var _super8=_createSuper(ErrorReportingPreprocessorMixin$1);function ErrorReportingPreprocessorMixin$1(preprocessor,opts){var _this9;_classCallCheck(this,ErrorReportingPreprocessorMixin$1);_this9=_super8.call(this,preprocessor,opts);_this9.posTracker=Mixin$3.install(preprocessor,PositionTrackingPreprocessorMixin);_this9.lastErrOffset=-1;return _this9;}_createClass(ErrorReportingPreprocessorMixin$1,[{key:"_reportError",value:function _reportError(code){//NOTE: avoid reporting error twice on advance/retreat
if(this.lastErrOffset!==this.posTracker.offset){this.lastErrOffset=this.posTracker.offset;_get(_getPrototypeOf(ErrorReportingPreprocessorMixin$1.prototype),"_reportError",this).call(this,code);}}}]);return ErrorReportingPreprocessorMixin$1;}(ErrorReportingMixinBase$2);var preprocessorMixin=ErrorReportingPreprocessorMixin$1;var ErrorReportingMixinBase$1=mixinBase;var ErrorReportingPreprocessorMixin=preprocessorMixin;var Mixin$2=mixin;var ErrorReportingTokenizerMixin$1=/*#__PURE__*/function(_ErrorReportingMixinB2){_inherits(ErrorReportingTokenizerMixin$1,_ErrorReportingMixinB2);var _super9=_createSuper(ErrorReportingTokenizerMixin$1);function ErrorReportingTokenizerMixin$1(tokenizer,opts){var _this10;_classCallCheck(this,ErrorReportingTokenizerMixin$1);_this10=_super9.call(this,tokenizer,opts);var preprocessorMixin=Mixin$2.install(tokenizer.preprocessor,ErrorReportingPreprocessorMixin,opts);_this10.posTracker=preprocessorMixin.posTracker;return _this10;}return _createClass(ErrorReportingTokenizerMixin$1);}(ErrorReportingMixinBase$1);var tokenizerMixin=ErrorReportingTokenizerMixin$1;var ErrorReportingMixinBase=mixinBase;var ErrorReportingTokenizerMixin=tokenizerMixin;var LocationInfoTokenizerMixin=tokenizerMixin$1;var Mixin$1=mixin;var ErrorReportingParserMixin$1=/*#__PURE__*/function(_ErrorReportingMixinB3){_inherits(ErrorReportingParserMixin$1,_ErrorReportingMixinB3);var _super10=_createSuper(ErrorReportingParserMixin$1);function ErrorReportingParserMixin$1(parser,opts){var _this11;_classCallCheck(this,ErrorReportingParserMixin$1);_this11=_super10.call(this,parser,opts);_this11.opts=opts;_this11.ctLoc=null;_this11.locBeforeToken=false;return _this11;}_createClass(ErrorReportingParserMixin$1,[{key:"_setErrorLocation",value:function _setErrorLocation(err){if(this.ctLoc){err.startLine=this.ctLoc.startLine;err.startCol=this.ctLoc.startCol;err.startOffset=this.ctLoc.startOffset;err.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine;err.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol;err.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset;}}},{key:"_getOverriddenMethods",value:function _getOverriddenMethods(mxn,orig){return{_bootstrap:function _bootstrap(document,fragmentContext){orig._bootstrap.call(this,document,fragmentContext);Mixin$1.install(this.tokenizer,ErrorReportingTokenizerMixin,mxn.opts);Mixin$1.install(this.tokenizer,LocationInfoTokenizerMixin);},_processInputToken:function _processInputToken(token){mxn.ctLoc=token.location;orig._processInputToken.call(this,token);},_err:function _err(code,options){mxn.locBeforeToken=options&&options.beforeToken;mxn._reportError(code);}};}}]);return ErrorReportingParserMixin$1;}(ErrorReportingMixinBase);var parserMixin=ErrorReportingParserMixin$1;var _default={};var DOCUMENT_MODE$1=html.DOCUMENT_MODE;//Node construction
_default.createDocument=function(){return{nodeName:'#document',mode:DOCUMENT_MODE$1.NO_QUIRKS,childNodes:[]};};_default.createDocumentFragment=function(){return{nodeName:'#document-fragment',childNodes:[]};};_default.createElement=function(tagName,namespaceURI,attrs){return{nodeName:tagName,tagName:tagName,attrs:attrs,namespaceURI:namespaceURI,childNodes:[],parentNode:null};};_default.createCommentNode=function(data){return{nodeName:'#comment',data:data,parentNode:null};};var createTextNode=function createTextNode(value){return{nodeName:'#text',value:value,parentNode:null};};//Tree mutation
var appendChild=_default.appendChild=function(parentNode,newNode){parentNode.childNodes.push(newNode);newNode.parentNode=parentNode;};var insertBefore=_default.insertBefore=function(parentNode,newNode,referenceNode){var insertionIdx=parentNode.childNodes.indexOf(referenceNode);parentNode.childNodes.splice(insertionIdx,0,newNode);newNode.parentNode=parentNode;};_default.setTemplateContent=function(templateElement,contentElement){templateElement.content=contentElement;};_default.getTemplateContent=function(templateElement){return templateElement.content;};_default.setDocumentType=function(document,name,publicId,systemId){var doctypeNode=null;for(var i=0;i<document.childNodes.length;i++){if(document.childNodes[i].nodeName==='#documentType'){doctypeNode=document.childNodes[i];break;}}if(doctypeNode){doctypeNode.name=name;doctypeNode.publicId=publicId;doctypeNode.systemId=systemId;}else{appendChild(document,{nodeName:'#documentType',name:name,publicId:publicId,systemId:systemId});}};_default.setDocumentMode=function(document,mode){document.mode=mode;};_default.getDocumentMode=function(document){return document.mode;};_default.detachNode=function(node){if(node.parentNode){var idx=node.parentNode.childNodes.indexOf(node);node.parentNode.childNodes.splice(idx,1);node.parentNode=null;}};_default.insertText=function(parentNode,text){if(parentNode.childNodes.length){var prevNode=parentNode.childNodes[parentNode.childNodes.length-1];if(prevNode.nodeName==='#text'){prevNode.value+=text;return;}}appendChild(parentNode,createTextNode(text));};_default.insertTextBefore=function(parentNode,text,referenceNode){var prevNode=parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode)-1];if(prevNode&&prevNode.nodeName==='#text'){prevNode.value+=text;}else{insertBefore(parentNode,createTextNode(text),referenceNode);}};_default.adoptAttributes=function(recipient,attrs){var recipientAttrsMap=[];for(var i=0;i<recipient.attrs.length;i++){recipientAttrsMap.push(recipient.attrs[i].name);}for(var j=0;j<attrs.length;j++){if(recipientAttrsMap.indexOf(attrs[j].name)===-1){recipient.attrs.push(attrs[j]);}}};//Tree traversing
_default.getFirstChild=function(node){return node.childNodes[0];};_default.getChildNodes=function(node){return node.childNodes;};_default.getParentNode=function(node){return node.parentNode;};_default.getAttrList=function(element){return element.attrs;};//Node data
_default.getTagName=function(element){return element.tagName;};_default.getNamespaceURI=function(element){return element.namespaceURI;};_default.getTextNodeContent=function(textNode){return textNode.value;};_default.getCommentNodeContent=function(commentNode){return commentNode.data;};_default.getDocumentTypeNodeName=function(doctypeNode){return doctypeNode.name;};_default.getDocumentTypeNodePublicId=function(doctypeNode){return doctypeNode.publicId;};_default.getDocumentTypeNodeSystemId=function(doctypeNode){return doctypeNode.systemId;};//Node types
_default.isTextNode=function(node){return node.nodeName==='#text';};_default.isCommentNode=function(node){return node.nodeName==='#comment';};_default.isDocumentTypeNode=function(node){return node.nodeName==='#documentType';};_default.isElementNode=function(node){return!!node.tagName;};// Source code location
_default.setNodeSourceCodeLocation=function(node,location){node.sourceCodeLocation=location;};_default.getNodeSourceCodeLocation=function(node){return node.sourceCodeLocation;};_default.updateNodeSourceCodeLocation=function(node,endLocation){node.sourceCodeLocation=Object.assign(node.sourceCodeLocation,endLocation);};var mergeOptions$1=function mergeOptions(defaults,options){options=options||Object.create(null);return[defaults,options].reduce(function(merged,optObj){Object.keys(optObj).forEach(function(key){merged[key]=optObj[key];});return merged;},Object.create(null));};var doctype$3={};var DOCUMENT_MODE=html.DOCUMENT_MODE;//Const
var VALID_DOCTYPE_NAME='html';var VALID_SYSTEM_ID='about:legacy-compat';var QUIRKS_MODE_SYSTEM_ID='http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';var QUIRKS_MODE_PUBLIC_ID_PREFIXES=['+//silmaril//dtd html pro v0r11 19970101//','-//as//dtd html 3.0 aswedit + extensions//','-//advasoft ltd//dtd html 3.0 aswedit + extensions//','-//ietf//dtd html 2.0 level 1//','-//ietf//dtd html 2.0 level 2//','-//ietf//dtd html 2.0 strict level 1//','-//ietf//dtd html 2.0 strict level 2//','-//ietf//dtd html 2.0 strict//','-//ietf//dtd html 2.0//','-//ietf//dtd html 2.1e//','-//ietf//dtd html 3.0//','-//ietf//dtd html 3.2 final//','-//ietf//dtd html 3.2//','-//ietf//dtd html 3//','-//ietf//dtd html level 0//','-//ietf//dtd html level 1//','-//ietf//dtd html level 2//','-//ietf//dtd html level 3//','-//ietf//dtd html strict level 0//','-//ietf//dtd html strict level 1//','-//ietf//dtd html strict level 2//','-//ietf//dtd html strict level 3//','-//ietf//dtd html strict//','-//ietf//dtd html//','-//metrius//dtd metrius presentational//','-//microsoft//dtd internet explorer 2.0 html strict//','-//microsoft//dtd internet explorer 2.0 html//','-//microsoft//dtd internet explorer 2.0 tables//','-//microsoft//dtd internet explorer 3.0 html strict//','-//microsoft//dtd internet explorer 3.0 html//','-//microsoft//dtd internet explorer 3.0 tables//','-//netscape comm. corp.//dtd html//','-//netscape comm. corp.//dtd strict html//',"-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//",'-//sq//dtd html 2.0 hotmetal + extensions//','-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//','-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//','-//spyglass//dtd html 2.0 extended//','-//sun microsystems corp.//dtd hotjava html//','-//sun microsystems corp.//dtd hotjava strict html//','-//w3c//dtd html 3 1995-03-24//','-//w3c//dtd html 3.2 draft//','-//w3c//dtd html 3.2 final//','-//w3c//dtd html 3.2//','-//w3c//dtd html 3.2s draft//','-//w3c//dtd html 4.0 frameset//','-//w3c//dtd html 4.0 transitional//','-//w3c//dtd html experimental 19960712//','-//w3c//dtd html experimental 970421//','-//w3c//dtd w3 html//','-//w3o//dtd w3 html 3.0//','-//webtechs//dtd mozilla html 2.0//','-//webtechs//dtd mozilla html//'];var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES=QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat(['-//w3c//dtd html 4.01 frameset//','-//w3c//dtd html 4.01 transitional//']);var QUIRKS_MODE_PUBLIC_IDS=['-//w3o//dtd w3 html strict 3.0//en//','-/w3c/dtd html 4.0 transitional/en','html'];var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES=['-//w3c//dtd xhtml 1.0 frameset//','-//w3c//dtd xhtml 1.0 transitional//'];var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES=LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat(['-//w3c//dtd html 4.01 frameset//','-//w3c//dtd html 4.01 transitional//']);//Utils
function enquoteDoctypeId(id){var quote=id.indexOf('"')!==-1?"'":'"';return quote+id+quote;}function hasPrefix(publicId,prefixes){for(var i=0;i<prefixes.length;i++){if(publicId.indexOf(prefixes[i])===0){return true;}}return false;}//API
doctype$3.isConforming=function(token){return token.name===VALID_DOCTYPE_NAME&&token.publicId===null&&(token.systemId===null||token.systemId===VALID_SYSTEM_ID);};doctype$3.getDocumentMode=function(token){if(token.name!==VALID_DOCTYPE_NAME){return DOCUMENT_MODE.QUIRKS;}var systemId=token.systemId;if(systemId&&systemId.toLowerCase()===QUIRKS_MODE_SYSTEM_ID){return DOCUMENT_MODE.QUIRKS;}var publicId=token.publicId;if(publicId!==null){publicId=publicId.toLowerCase();if(QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId)>-1){return DOCUMENT_MODE.QUIRKS;}var prefixes=systemId===null?QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES:QUIRKS_MODE_PUBLIC_ID_PREFIXES;if(hasPrefix(publicId,prefixes)){return DOCUMENT_MODE.QUIRKS;}prefixes=systemId===null?LIMITED_QUIRKS_PUBLIC_ID_PREFIXES:LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;if(hasPrefix(publicId,prefixes)){return DOCUMENT_MODE.LIMITED_QUIRKS;}}return DOCUMENT_MODE.NO_QUIRKS;};doctype$3.serializeContent=function(name,publicId,systemId){var str='!DOCTYPE ';if(name){str+=name;}if(publicId){str+=' PUBLIC '+enquoteDoctypeId(publicId);}else if(systemId){str+=' SYSTEM';}if(systemId!==null){str+=' '+enquoteDoctypeId(systemId);}return str;};var foreignContent$1={};var Tokenizer$1=tokenizer;var HTML$1=html;//Aliases
var $$1=HTML$1.TAG_NAMES;var NS$1=HTML$1.NAMESPACES;var ATTRS$1=HTML$1.ATTRS;//MIME types
var MIME_TYPES={TEXT_HTML:'text/html',APPLICATION_XML:'application/xhtml+xml'};//Attributes
var DEFINITION_URL_ATTR='definitionurl';var ADJUSTED_DEFINITION_URL_ATTR='definitionURL';var SVG_ATTRS_ADJUSTMENT_MAP={attributename:'attributeName',attributetype:'attributeType',basefrequency:'baseFrequency',baseprofile:'baseProfile',calcmode:'calcMode',clippathunits:'clipPathUnits',diffuseconstant:'diffuseConstant',edgemode:'edgeMode',filterunits:'filterUnits',glyphref:'glyphRef',gradienttransform:'gradientTransform',gradientunits:'gradientUnits',kernelmatrix:'kernelMatrix',kernelunitlength:'kernelUnitLength',keypoints:'keyPoints',keysplines:'keySplines',keytimes:'keyTimes',lengthadjust:'lengthAdjust',limitingconeangle:'limitingConeAngle',markerheight:'markerHeight',markerunits:'markerUnits',markerwidth:'markerWidth',maskcontentunits:'maskContentUnits',maskunits:'maskUnits',numoctaves:'numOctaves',pathlength:'pathLength',patterncontentunits:'patternContentUnits',patterntransform:'patternTransform',patternunits:'patternUnits',pointsatx:'pointsAtX',pointsaty:'pointsAtY',pointsatz:'pointsAtZ',preservealpha:'preserveAlpha',preserveaspectratio:'preserveAspectRatio',primitiveunits:'primitiveUnits',refx:'refX',refy:'refY',repeatcount:'repeatCount',repeatdur:'repeatDur',requiredextensions:'requiredExtensions',requiredfeatures:'requiredFeatures',specularconstant:'specularConstant',specularexponent:'specularExponent',spreadmethod:'spreadMethod',startoffset:'startOffset',stddeviation:'stdDeviation',stitchtiles:'stitchTiles',surfacescale:'surfaceScale',systemlanguage:'systemLanguage',tablevalues:'tableValues',targetx:'targetX',targety:'targetY',textlength:'textLength',viewbox:'viewBox',viewtarget:'viewTarget',xchannelselector:'xChannelSelector',ychannelselector:'yChannelSelector',zoomandpan:'zoomAndPan'};var XML_ATTRS_ADJUSTMENT_MAP={'xlink:actuate':{prefix:'xlink',name:'actuate',namespace:NS$1.XLINK},'xlink:arcrole':{prefix:'xlink',name:'arcrole',namespace:NS$1.XLINK},'xlink:href':{prefix:'xlink',name:'href',namespace:NS$1.XLINK},'xlink:role':{prefix:'xlink',name:'role',namespace:NS$1.XLINK},'xlink:show':{prefix:'xlink',name:'show',namespace:NS$1.XLINK},'xlink:title':{prefix:'xlink',name:'title',namespace:NS$1.XLINK},'xlink:type':{prefix:'xlink',name:'type',namespace:NS$1.XLINK},'xml:base':{prefix:'xml',name:'base',namespace:NS$1.XML},'xml:lang':{prefix:'xml',name:'lang',namespace:NS$1.XML},'xml:space':{prefix:'xml',name:'space',namespace:NS$1.XML},xmlns:{prefix:'',name:'xmlns',namespace:NS$1.XMLNS},'xmlns:xlink':{prefix:'xmlns',name:'xlink',namespace:NS$1.XMLNS}};//SVG tag names adjustment map
var SVG_TAG_NAMES_ADJUSTMENT_MAP=foreignContent$1.SVG_TAG_NAMES_ADJUSTMENT_MAP={altglyph:'altGlyph',altglyphdef:'altGlyphDef',altglyphitem:'altGlyphItem',animatecolor:'animateColor',animatemotion:'animateMotion',animatetransform:'animateTransform',clippath:'clipPath',feblend:'feBlend',fecolormatrix:'feColorMatrix',fecomponenttransfer:'feComponentTransfer',fecomposite:'feComposite',feconvolvematrix:'feConvolveMatrix',fediffuselighting:'feDiffuseLighting',fedisplacementmap:'feDisplacementMap',fedistantlight:'feDistantLight',feflood:'feFlood',fefunca:'feFuncA',fefuncb:'feFuncB',fefuncg:'feFuncG',fefuncr:'feFuncR',fegaussianblur:'feGaussianBlur',feimage:'feImage',femerge:'feMerge',femergenode:'feMergeNode',femorphology:'feMorphology',feoffset:'feOffset',fepointlight:'fePointLight',fespecularlighting:'feSpecularLighting',fespotlight:'feSpotLight',fetile:'feTile',feturbulence:'feTurbulence',foreignobject:'foreignObject',glyphref:'glyphRef',lineargradient:'linearGradient',radialgradient:'radialGradient',textpath:'textPath'};//Tags that causes exit from foreign content
var EXITS_FOREIGN_CONTENT=(_EXITS_FOREIGN_CONTEN={},_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.B,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.BIG,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.BLOCKQUOTE,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.BODY,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.BR,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.CENTER,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.CODE,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.DD,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.DIV,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.DL,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.DT,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.EM,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.EMBED,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.H1,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.H2,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.H3,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.H4,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.H5,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.H6,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.HEAD,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.HR,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.I,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.IMG,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.LI,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.LISTING,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.MENU,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.META,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.NOBR,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.OL,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.P,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.PRE,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.RUBY,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.S,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.SMALL,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.SPAN,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.STRONG,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.STRIKE,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.SUB,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.SUP,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.TABLE,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.TT,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.U,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.UL,true),_defineProperty(_EXITS_FOREIGN_CONTEN,$$1.VAR,true),_EXITS_FOREIGN_CONTEN);//Check exit from foreign content
foreignContent$1.causesExit=function(startTagToken){var tn=startTagToken.tagName;var isFontWithAttrs=tn===$$1.FONT&&(Tokenizer$1.getTokenAttr(startTagToken,ATTRS$1.COLOR)!==null||Tokenizer$1.getTokenAttr(startTagToken,ATTRS$1.SIZE)!==null||Tokenizer$1.getTokenAttr(startTagToken,ATTRS$1.FACE)!==null);return isFontWithAttrs?true:EXITS_FOREIGN_CONTENT[tn];};//Token adjustments
foreignContent$1.adjustTokenMathMLAttrs=function(token){for(var i=0;i<token.attrs.length;i++){if(token.attrs[i].name===DEFINITION_URL_ATTR){token.attrs[i].name=ADJUSTED_DEFINITION_URL_ATTR;break;}}};foreignContent$1.adjustTokenSVGAttrs=function(token){for(var i=0;i<token.attrs.length;i++){var adjustedAttrName=SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];if(adjustedAttrName){token.attrs[i].name=adjustedAttrName;}}};foreignContent$1.adjustTokenXMLAttrs=function(token){for(var i=0;i<token.attrs.length;i++){var adjustedAttrEntry=XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];if(adjustedAttrEntry){token.attrs[i].prefix=adjustedAttrEntry.prefix;token.attrs[i].name=adjustedAttrEntry.name;token.attrs[i].namespace=adjustedAttrEntry.namespace;}}};foreignContent$1.adjustTokenSVGTagName=function(token){var adjustedTagName=SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];if(adjustedTagName){token.tagName=adjustedTagName;}};//Integration points
function isMathMLTextIntegrationPoint(tn,ns){return ns===NS$1.MATHML&&(tn===$$1.MI||tn===$$1.MO||tn===$$1.MN||tn===$$1.MS||tn===$$1.MTEXT);}function isHtmlIntegrationPoint(tn,ns,attrs){if(ns===NS$1.MATHML&&tn===$$1.ANNOTATION_XML){for(var i=0;i<attrs.length;i++){if(attrs[i].name===ATTRS$1.ENCODING){var value=attrs[i].value.toLowerCase();return value===MIME_TYPES.TEXT_HTML||value===MIME_TYPES.APPLICATION_XML;}}}return ns===NS$1.SVG&&(tn===$$1.FOREIGN_OBJECT||tn===$$1.DESC||tn===$$1.TITLE);}foreignContent$1.isIntegrationPoint=function(tn,ns,attrs,foreignNS){if((!foreignNS||foreignNS===NS$1.HTML)&&isHtmlIntegrationPoint(tn,ns,attrs)){return true;}if((!foreignNS||foreignNS===NS$1.MATHML)&&isMathMLTextIntegrationPoint(tn,ns)){return true;}return false;};var Tokenizer=tokenizer;var OpenElementStack=openElementStack;var FormattingElementList=formattingElementList;var LocationInfoParserMixin=parserMixin$1;var ErrorReportingParserMixin=parserMixin;var Mixin=mixin;var defaultTreeAdapter=_default;var mergeOptions=mergeOptions$1;var doctype$2=doctype$3;var foreignContent=foreignContent$1;var ERR=errorCodes;var unicode=unicode$3;var HTML=html;//Aliases
var $=HTML.TAG_NAMES;var NS=HTML.NAMESPACES;var ATTRS=HTML.ATTRS;var DEFAULT_OPTIONS={scriptingEnabled:true,sourceCodeLocationInfo:false,onParseError:null,treeAdapter:defaultTreeAdapter};//Misc constants
var HIDDEN_INPUT_TYPE='hidden';//Adoption agency loops iteration count
var AA_OUTER_LOOP_ITER=8;var AA_INNER_LOOP_ITER=3;//Insertion modes
var INITIAL_MODE='INITIAL_MODE';var BEFORE_HTML_MODE='BEFORE_HTML_MODE';var BEFORE_HEAD_MODE='BEFORE_HEAD_MODE';var IN_HEAD_MODE='IN_HEAD_MODE';var IN_HEAD_NO_SCRIPT_MODE='IN_HEAD_NO_SCRIPT_MODE';var AFTER_HEAD_MODE='AFTER_HEAD_MODE';var IN_BODY_MODE='IN_BODY_MODE';var TEXT_MODE='TEXT_MODE';var IN_TABLE_MODE='IN_TABLE_MODE';var IN_TABLE_TEXT_MODE='IN_TABLE_TEXT_MODE';var IN_CAPTION_MODE='IN_CAPTION_MODE';var IN_COLUMN_GROUP_MODE='IN_COLUMN_GROUP_MODE';var IN_TABLE_BODY_MODE='IN_TABLE_BODY_MODE';var IN_ROW_MODE='IN_ROW_MODE';var IN_CELL_MODE='IN_CELL_MODE';var IN_SELECT_MODE='IN_SELECT_MODE';var IN_SELECT_IN_TABLE_MODE='IN_SELECT_IN_TABLE_MODE';var IN_TEMPLATE_MODE='IN_TEMPLATE_MODE';var AFTER_BODY_MODE='AFTER_BODY_MODE';var IN_FRAMESET_MODE='IN_FRAMESET_MODE';var AFTER_FRAMESET_MODE='AFTER_FRAMESET_MODE';var AFTER_AFTER_BODY_MODE='AFTER_AFTER_BODY_MODE';var AFTER_AFTER_FRAMESET_MODE='AFTER_AFTER_FRAMESET_MODE';//Insertion mode reset map
var INSERTION_MODE_RESET_MAP=(_INSERTION_MODE_RESET={},_defineProperty(_INSERTION_MODE_RESET,$.TR,IN_ROW_MODE),_defineProperty(_INSERTION_MODE_RESET,$.TBODY,IN_TABLE_BODY_MODE),_defineProperty(_INSERTION_MODE_RESET,$.THEAD,IN_TABLE_BODY_MODE),_defineProperty(_INSERTION_MODE_RESET,$.TFOOT,IN_TABLE_BODY_MODE),_defineProperty(_INSERTION_MODE_RESET,$.CAPTION,IN_CAPTION_MODE),_defineProperty(_INSERTION_MODE_RESET,$.COLGROUP,IN_COLUMN_GROUP_MODE),_defineProperty(_INSERTION_MODE_RESET,$.TABLE,IN_TABLE_MODE),_defineProperty(_INSERTION_MODE_RESET,$.BODY,IN_BODY_MODE),_defineProperty(_INSERTION_MODE_RESET,$.FRAMESET,IN_FRAMESET_MODE),_INSERTION_MODE_RESET);//Template insertion mode switch map
var TEMPLATE_INSERTION_MODE_SWITCH_MAP=(_TEMPLATE_INSERTION_M={},_defineProperty(_TEMPLATE_INSERTION_M,$.CAPTION,IN_TABLE_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.COLGROUP,IN_TABLE_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.TBODY,IN_TABLE_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.TFOOT,IN_TABLE_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.THEAD,IN_TABLE_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.COL,IN_COLUMN_GROUP_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.TR,IN_TABLE_BODY_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.TD,IN_ROW_MODE),_defineProperty(_TEMPLATE_INSERTION_M,$.TH,IN_ROW_MODE),_TEMPLATE_INSERTION_M);//Token handlers map for insertion modes
var TOKEN_HANDLERS=(_TOKEN_HANDLERS={},_defineProperty(_TOKEN_HANDLERS,INITIAL_MODE,(_INITIAL_MODE={},_defineProperty(_INITIAL_MODE,Tokenizer.CHARACTER_TOKEN,tokenInInitialMode),_defineProperty(_INITIAL_MODE,Tokenizer.NULL_CHARACTER_TOKEN,tokenInInitialMode),_defineProperty(_INITIAL_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,ignoreToken),_defineProperty(_INITIAL_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_INITIAL_MODE,Tokenizer.DOCTYPE_TOKEN,doctypeInInitialMode),_defineProperty(_INITIAL_MODE,Tokenizer.START_TAG_TOKEN,tokenInInitialMode),_defineProperty(_INITIAL_MODE,Tokenizer.END_TAG_TOKEN,tokenInInitialMode),_defineProperty(_INITIAL_MODE,Tokenizer.EOF_TOKEN,tokenInInitialMode),_INITIAL_MODE)),_defineProperty(_TOKEN_HANDLERS,BEFORE_HTML_MODE,(_BEFORE_HTML_MODE={},_defineProperty(_BEFORE_HTML_MODE,Tokenizer.CHARACTER_TOKEN,tokenBeforeHtml),_defineProperty(_BEFORE_HTML_MODE,Tokenizer.NULL_CHARACTER_TOKEN,tokenBeforeHtml),_defineProperty(_BEFORE_HTML_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,ignoreToken),_defineProperty(_BEFORE_HTML_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_BEFORE_HTML_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_BEFORE_HTML_MODE,Tokenizer.START_TAG_TOKEN,startTagBeforeHtml),_defineProperty(_BEFORE_HTML_MODE,Tokenizer.END_TAG_TOKEN,endTagBeforeHtml),_defineProperty(_BEFORE_HTML_MODE,Tokenizer.EOF_TOKEN,tokenBeforeHtml),_BEFORE_HTML_MODE)),_defineProperty(_TOKEN_HANDLERS,BEFORE_HEAD_MODE,(_BEFORE_HEAD_MODE={},_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.CHARACTER_TOKEN,tokenBeforeHead),_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.NULL_CHARACTER_TOKEN,tokenBeforeHead),_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,ignoreToken),_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.DOCTYPE_TOKEN,misplacedDoctype),_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.START_TAG_TOKEN,startTagBeforeHead),_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.END_TAG_TOKEN,endTagBeforeHead),_defineProperty(_BEFORE_HEAD_MODE,Tokenizer.EOF_TOKEN,tokenBeforeHead),_BEFORE_HEAD_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_HEAD_MODE,(_IN_HEAD_MODE={},_defineProperty(_IN_HEAD_MODE,Tokenizer.CHARACTER_TOKEN,tokenInHead),_defineProperty(_IN_HEAD_MODE,Tokenizer.NULL_CHARACTER_TOKEN,tokenInHead),_defineProperty(_IN_HEAD_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_HEAD_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_HEAD_MODE,Tokenizer.DOCTYPE_TOKEN,misplacedDoctype),_defineProperty(_IN_HEAD_MODE,Tokenizer.START_TAG_TOKEN,startTagInHead),_defineProperty(_IN_HEAD_MODE,Tokenizer.END_TAG_TOKEN,endTagInHead),_defineProperty(_IN_HEAD_MODE,Tokenizer.EOF_TOKEN,tokenInHead),_IN_HEAD_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_HEAD_NO_SCRIPT_MODE,(_IN_HEAD_NO_SCRIPT_MO={},_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.CHARACTER_TOKEN,tokenInHeadNoScript),_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.NULL_CHARACTER_TOKEN,tokenInHeadNoScript),_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.DOCTYPE_TOKEN,misplacedDoctype),_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.START_TAG_TOKEN,startTagInHeadNoScript),_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.END_TAG_TOKEN,endTagInHeadNoScript),_defineProperty(_IN_HEAD_NO_SCRIPT_MO,Tokenizer.EOF_TOKEN,tokenInHeadNoScript),_IN_HEAD_NO_SCRIPT_MO)),_defineProperty(_TOKEN_HANDLERS,AFTER_HEAD_MODE,(_AFTER_HEAD_MODE={},_defineProperty(_AFTER_HEAD_MODE,Tokenizer.CHARACTER_TOKEN,tokenAfterHead),_defineProperty(_AFTER_HEAD_MODE,Tokenizer.NULL_CHARACTER_TOKEN,tokenAfterHead),_defineProperty(_AFTER_HEAD_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_AFTER_HEAD_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_AFTER_HEAD_MODE,Tokenizer.DOCTYPE_TOKEN,misplacedDoctype),_defineProperty(_AFTER_HEAD_MODE,Tokenizer.START_TAG_TOKEN,startTagAfterHead),_defineProperty(_AFTER_HEAD_MODE,Tokenizer.END_TAG_TOKEN,endTagAfterHead),_defineProperty(_AFTER_HEAD_MODE,Tokenizer.EOF_TOKEN,tokenAfterHead),_AFTER_HEAD_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_BODY_MODE,(_IN_BODY_MODE={},_defineProperty(_IN_BODY_MODE,Tokenizer.CHARACTER_TOKEN,characterInBody),_defineProperty(_IN_BODY_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_BODY_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInBody),_defineProperty(_IN_BODY_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_BODY_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_BODY_MODE,Tokenizer.START_TAG_TOKEN,startTagInBody),_defineProperty(_IN_BODY_MODE,Tokenizer.END_TAG_TOKEN,endTagInBody),_defineProperty(_IN_BODY_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_BODY_MODE)),_defineProperty(_TOKEN_HANDLERS,TEXT_MODE,(_TEXT_MODE={},_defineProperty(_TEXT_MODE,Tokenizer.CHARACTER_TOKEN,insertCharacters),_defineProperty(_TEXT_MODE,Tokenizer.NULL_CHARACTER_TOKEN,insertCharacters),_defineProperty(_TEXT_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_TEXT_MODE,Tokenizer.COMMENT_TOKEN,ignoreToken),_defineProperty(_TEXT_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_TEXT_MODE,Tokenizer.START_TAG_TOKEN,ignoreToken),_defineProperty(_TEXT_MODE,Tokenizer.END_TAG_TOKEN,endTagInText),_defineProperty(_TEXT_MODE,Tokenizer.EOF_TOKEN,eofInText),_TEXT_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_TABLE_MODE,(_IN_TABLE_MODE={},_defineProperty(_IN_TABLE_MODE,Tokenizer.CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_TABLE_MODE,Tokenizer.NULL_CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_TABLE_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_TABLE_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_TABLE_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_TABLE_MODE,Tokenizer.START_TAG_TOKEN,startTagInTable),_defineProperty(_IN_TABLE_MODE,Tokenizer.END_TAG_TOKEN,endTagInTable),_defineProperty(_IN_TABLE_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_TABLE_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_TABLE_TEXT_MODE,(_IN_TABLE_TEXT_MODE={},_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.CHARACTER_TOKEN,characterInTableText),_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInTableText),_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.COMMENT_TOKEN,tokenInTableText),_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.DOCTYPE_TOKEN,tokenInTableText),_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.START_TAG_TOKEN,tokenInTableText),_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.END_TAG_TOKEN,tokenInTableText),_defineProperty(_IN_TABLE_TEXT_MODE,Tokenizer.EOF_TOKEN,tokenInTableText),_IN_TABLE_TEXT_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_CAPTION_MODE,(_IN_CAPTION_MODE={},_defineProperty(_IN_CAPTION_MODE,Tokenizer.CHARACTER_TOKEN,characterInBody),_defineProperty(_IN_CAPTION_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_CAPTION_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInBody),_defineProperty(_IN_CAPTION_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_CAPTION_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_CAPTION_MODE,Tokenizer.START_TAG_TOKEN,startTagInCaption),_defineProperty(_IN_CAPTION_MODE,Tokenizer.END_TAG_TOKEN,endTagInCaption),_defineProperty(_IN_CAPTION_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_CAPTION_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_COLUMN_GROUP_MODE,(_IN_COLUMN_GROUP_MODE={},_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.CHARACTER_TOKEN,tokenInColumnGroup),_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.NULL_CHARACTER_TOKEN,tokenInColumnGroup),_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.START_TAG_TOKEN,startTagInColumnGroup),_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.END_TAG_TOKEN,endTagInColumnGroup),_defineProperty(_IN_COLUMN_GROUP_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_COLUMN_GROUP_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_TABLE_BODY_MODE,(_IN_TABLE_BODY_MODE={},_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.NULL_CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.START_TAG_TOKEN,startTagInTableBody),_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.END_TAG_TOKEN,endTagInTableBody),_defineProperty(_IN_TABLE_BODY_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_TABLE_BODY_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_ROW_MODE,(_IN_ROW_MODE={},_defineProperty(_IN_ROW_MODE,Tokenizer.CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_ROW_MODE,Tokenizer.NULL_CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_ROW_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,characterInTable),_defineProperty(_IN_ROW_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_ROW_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_ROW_MODE,Tokenizer.START_TAG_TOKEN,startTagInRow),_defineProperty(_IN_ROW_MODE,Tokenizer.END_TAG_TOKEN,endTagInRow),_defineProperty(_IN_ROW_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_ROW_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_CELL_MODE,(_IN_CELL_MODE={},_defineProperty(_IN_CELL_MODE,Tokenizer.CHARACTER_TOKEN,characterInBody),_defineProperty(_IN_CELL_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_CELL_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInBody),_defineProperty(_IN_CELL_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_CELL_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_CELL_MODE,Tokenizer.START_TAG_TOKEN,startTagInCell),_defineProperty(_IN_CELL_MODE,Tokenizer.END_TAG_TOKEN,endTagInCell),_defineProperty(_IN_CELL_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_CELL_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_SELECT_MODE,(_IN_SELECT_MODE={},_defineProperty(_IN_SELECT_MODE,Tokenizer.CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_SELECT_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_SELECT_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_SELECT_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_SELECT_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_SELECT_MODE,Tokenizer.START_TAG_TOKEN,startTagInSelect),_defineProperty(_IN_SELECT_MODE,Tokenizer.END_TAG_TOKEN,endTagInSelect),_defineProperty(_IN_SELECT_MODE,Tokenizer.EOF_TOKEN,eofInBody),_IN_SELECT_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_SELECT_IN_TABLE_MODE,(_IN_SELECT_IN_TABLE_M={},_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.START_TAG_TOKEN,startTagInSelectInTable),_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.END_TAG_TOKEN,endTagInSelectInTable),_defineProperty(_IN_SELECT_IN_TABLE_M,Tokenizer.EOF_TOKEN,eofInBody),_IN_SELECT_IN_TABLE_M)),_defineProperty(_TOKEN_HANDLERS,IN_TEMPLATE_MODE,(_IN_TEMPLATE_MODE={},_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.CHARACTER_TOKEN,characterInBody),_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInBody),_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.START_TAG_TOKEN,startTagInTemplate),_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.END_TAG_TOKEN,endTagInTemplate),_defineProperty(_IN_TEMPLATE_MODE,Tokenizer.EOF_TOKEN,eofInTemplate),_IN_TEMPLATE_MODE)),_defineProperty(_TOKEN_HANDLERS,AFTER_BODY_MODE,(_AFTER_BODY_MODE={},_defineProperty(_AFTER_BODY_MODE,Tokenizer.CHARACTER_TOKEN,tokenAfterBody),_defineProperty(_AFTER_BODY_MODE,Tokenizer.NULL_CHARACTER_TOKEN,tokenAfterBody),_defineProperty(_AFTER_BODY_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInBody),_defineProperty(_AFTER_BODY_MODE,Tokenizer.COMMENT_TOKEN,appendCommentToRootHtmlElement),_defineProperty(_AFTER_BODY_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_AFTER_BODY_MODE,Tokenizer.START_TAG_TOKEN,startTagAfterBody),_defineProperty(_AFTER_BODY_MODE,Tokenizer.END_TAG_TOKEN,endTagAfterBody),_defineProperty(_AFTER_BODY_MODE,Tokenizer.EOF_TOKEN,stopParsing),_AFTER_BODY_MODE)),_defineProperty(_TOKEN_HANDLERS,IN_FRAMESET_MODE,(_IN_FRAMESET_MODE={},_defineProperty(_IN_FRAMESET_MODE,Tokenizer.CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_FRAMESET_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_IN_FRAMESET_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_IN_FRAMESET_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_IN_FRAMESET_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_IN_FRAMESET_MODE,Tokenizer.START_TAG_TOKEN,startTagInFrameset),_defineProperty(_IN_FRAMESET_MODE,Tokenizer.END_TAG_TOKEN,endTagInFrameset),_defineProperty(_IN_FRAMESET_MODE,Tokenizer.EOF_TOKEN,stopParsing),_IN_FRAMESET_MODE)),_defineProperty(_TOKEN_HANDLERS,AFTER_FRAMESET_MODE,(_AFTER_FRAMESET_MODE={},_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.CHARACTER_TOKEN,ignoreToken),_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.WHITESPACE_CHARACTER_TOKEN,insertCharacters),_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.COMMENT_TOKEN,appendComment),_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.START_TAG_TOKEN,startTagAfterFrameset),_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.END_TAG_TOKEN,endTagAfterFrameset),_defineProperty(_AFTER_FRAMESET_MODE,Tokenizer.EOF_TOKEN,stopParsing),_AFTER_FRAMESET_MODE)),_defineProperty(_TOKEN_HANDLERS,AFTER_AFTER_BODY_MODE,(_AFTER_AFTER_BODY_MOD={},_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.CHARACTER_TOKEN,tokenAfterAfterBody),_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.NULL_CHARACTER_TOKEN,tokenAfterAfterBody),_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInBody),_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.COMMENT_TOKEN,appendCommentToDocument),_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.START_TAG_TOKEN,startTagAfterAfterBody),_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.END_TAG_TOKEN,tokenAfterAfterBody),_defineProperty(_AFTER_AFTER_BODY_MOD,Tokenizer.EOF_TOKEN,stopParsing),_AFTER_AFTER_BODY_MOD)),_defineProperty(_TOKEN_HANDLERS,AFTER_AFTER_FRAMESET_MODE,(_AFTER_AFTER_FRAMESET={},_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.CHARACTER_TOKEN,ignoreToken),_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.NULL_CHARACTER_TOKEN,ignoreToken),_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.WHITESPACE_CHARACTER_TOKEN,whitespaceCharacterInBody),_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.COMMENT_TOKEN,appendCommentToDocument),_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.DOCTYPE_TOKEN,ignoreToken),_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.START_TAG_TOKEN,startTagAfterAfterFrameset),_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.END_TAG_TOKEN,ignoreToken),_defineProperty(_AFTER_AFTER_FRAMESET,Tokenizer.EOF_TOKEN,stopParsing),_AFTER_AFTER_FRAMESET)),_TOKEN_HANDLERS);//Parser
var Parser=/*#__PURE__*/function(){function Parser(options){_classCallCheck(this,Parser);this.options=mergeOptions(DEFAULT_OPTIONS,options);this.treeAdapter=this.options.treeAdapter;this.pendingScript=null;if(this.options.sourceCodeLocationInfo){Mixin.install(this,LocationInfoParserMixin);}if(this.options.onParseError){Mixin.install(this,ErrorReportingParserMixin,{onParseError:this.options.onParseError});}}// API
_createClass(Parser,[{key:"parse",value:function parse(html){var document=this.treeAdapter.createDocument();this._bootstrap(document,null);this.tokenizer.write(html,true);this._runParsingLoop(null);return document;}},{key:"parseFragment",value:function parseFragment(html,fragmentContext){//NOTE: use <template> element as a fragment context if context element was not provided,
//so we will parse in "forgiving" manner
if(!fragmentContext){fragmentContext=this.treeAdapter.createElement($.TEMPLATE,NS.HTML,[]);}//NOTE: create fake element which will be used as 'document' for fragment parsing.
//This is important for jsdom there 'document' can't be recreated, therefore
//fragment parsing causes messing of the main `document`.
var documentMock=this.treeAdapter.createElement('documentmock',NS.HTML,[]);this._bootstrap(documentMock,fragmentContext);if(this.treeAdapter.getTagName(fragmentContext)===$.TEMPLATE){this._pushTmplInsertionMode(IN_TEMPLATE_MODE);}this._initTokenizerForFragmentParsing();this._insertFakeRootElement();this._resetInsertionMode();this._findFormInFragmentContext();this.tokenizer.write(html,true);this._runParsingLoop(null);var rootElement=this.treeAdapter.getFirstChild(documentMock);var fragment=this.treeAdapter.createDocumentFragment();this._adoptNodes(rootElement,fragment);return fragment;}//Bootstrap parser
},{key:"_bootstrap",value:function _bootstrap(document,fragmentContext){this.tokenizer=new Tokenizer(this.options);this.stopped=false;this.insertionMode=INITIAL_MODE;this.originalInsertionMode='';this.document=document;this.fragmentContext=fragmentContext;this.headElement=null;this.formElement=null;this.openElements=new OpenElementStack(this.document,this.treeAdapter);this.activeFormattingElements=new FormattingElementList(this.treeAdapter);this.tmplInsertionModeStack=[];this.tmplInsertionModeStackTop=-1;this.currentTmplInsertionMode=null;this.pendingCharacterTokens=[];this.hasNonWhitespacePendingCharacterToken=false;this.framesetOk=true;this.skipNextNewLine=false;this.fosterParentingEnabled=false;}//Errors
},{key:"_err",value:function _err(){// NOTE: err reporting is noop by default. Enabled by mixin.
}//Parsing loop
},{key:"_runParsingLoop",value:function _runParsingLoop(scriptHandler){while(!this.stopped){this._setupTokenizerCDATAMode();var token=this.tokenizer.getNextToken();if(token.type===Tokenizer.HIBERNATION_TOKEN){break;}if(this.skipNextNewLine){this.skipNextNewLine=false;if(token.type===Tokenizer.WHITESPACE_CHARACTER_TOKEN&&token.chars[0]==='\n'){if(token.chars.length===1){continue;}token.chars=token.chars.substr(1);}}this._processInputToken(token);if(scriptHandler&&this.pendingScript){break;}}}},{key:"runParsingLoopForCurrentChunk",value:function runParsingLoopForCurrentChunk(writeCallback,scriptHandler){this._runParsingLoop(scriptHandler);if(scriptHandler&&this.pendingScript){var script=this.pendingScript;this.pendingScript=null;scriptHandler(script);return;}if(writeCallback){writeCallback();}}//Text parsing
},{key:"_setupTokenizerCDATAMode",value:function _setupTokenizerCDATAMode(){var current=this._getAdjustedCurrentElement();this.tokenizer.allowCDATA=current&&current!==this.document&&this.treeAdapter.getNamespaceURI(current)!==NS.HTML&&!this._isIntegrationPoint(current);}},{key:"_switchToTextParsing",value:function _switchToTextParsing(currentToken,nextTokenizerState){this._insertElement(currentToken,NS.HTML);this.tokenizer.state=nextTokenizerState;this.originalInsertionMode=this.insertionMode;this.insertionMode=TEXT_MODE;}},{key:"switchToPlaintextParsing",value:function switchToPlaintextParsing(){this.insertionMode=TEXT_MODE;this.originalInsertionMode=IN_BODY_MODE;this.tokenizer.state=Tokenizer.MODE.PLAINTEXT;}//Fragment parsing
},{key:"_getAdjustedCurrentElement",value:function _getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current;}},{key:"_findFormInFragmentContext",value:function _findFormInFragmentContext(){var node=this.fragmentContext;do{if(this.treeAdapter.getTagName(node)===$.FORM){this.formElement=node;break;}node=this.treeAdapter.getParentNode(node);}while(node);}},{key:"_initTokenizerForFragmentParsing",value:function _initTokenizerForFragmentParsing(){if(this.treeAdapter.getNamespaceURI(this.fragmentContext)===NS.HTML){var tn=this.treeAdapter.getTagName(this.fragmentContext);if(tn===$.TITLE||tn===$.TEXTAREA){this.tokenizer.state=Tokenizer.MODE.RCDATA;}else if(tn===$.STYLE||tn===$.XMP||tn===$.IFRAME||tn===$.NOEMBED||tn===$.NOFRAMES||tn===$.NOSCRIPT){this.tokenizer.state=Tokenizer.MODE.RAWTEXT;}else if(tn===$.SCRIPT){this.tokenizer.state=Tokenizer.MODE.SCRIPT_DATA;}else if(tn===$.PLAINTEXT){this.tokenizer.state=Tokenizer.MODE.PLAINTEXT;}}}//Tree mutation
},{key:"_setDocumentType",value:function _setDocumentType(token){var name=token.name||'';var publicId=token.publicId||'';var systemId=token.systemId||'';this.treeAdapter.setDocumentType(this.document,name,publicId,systemId);}},{key:"_attachElementToTree",value:function _attachElementToTree(element){if(this._shouldFosterParentOnInsertion()){this._fosterParentElement(element);}else{var parent=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.appendChild(parent,element);}}},{key:"_appendElement",value:function _appendElement(token,namespaceURI){var element=this.treeAdapter.createElement(token.tagName,namespaceURI,token.attrs);this._attachElementToTree(element);}},{key:"_insertElement",value:function _insertElement(token,namespaceURI){var element=this.treeAdapter.createElement(token.tagName,namespaceURI,token.attrs);this._attachElementToTree(element);this.openElements.push(element);}},{key:"_insertFakeElement",value:function _insertFakeElement(tagName){var element=this.treeAdapter.createElement(tagName,NS.HTML,[]);this._attachElementToTree(element);this.openElements.push(element);}},{key:"_insertTemplate",value:function _insertTemplate(token){var tmpl=this.treeAdapter.createElement(token.tagName,NS.HTML,token.attrs);var content=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(tmpl,content);this._attachElementToTree(tmpl);this.openElements.push(tmpl);}},{key:"_insertFakeRootElement",value:function _insertFakeRootElement(){var element=this.treeAdapter.createElement($.HTML,NS.HTML,[]);this.treeAdapter.appendChild(this.openElements.current,element);this.openElements.push(element);}},{key:"_appendCommentNode",value:function _appendCommentNode(token,parent){var commentNode=this.treeAdapter.createCommentNode(token.data);this.treeAdapter.appendChild(parent,commentNode);}},{key:"_insertCharacters",value:function _insertCharacters(token){if(this._shouldFosterParentOnInsertion()){this._fosterParentText(token.chars);}else{var parent=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.insertText(parent,token.chars);}}},{key:"_adoptNodes",value:function _adoptNodes(donor,recipient){for(var child=this.treeAdapter.getFirstChild(donor);child;child=this.treeAdapter.getFirstChild(donor)){this.treeAdapter.detachNode(child);this.treeAdapter.appendChild(recipient,child);}}//Token processing
},{key:"_shouldProcessTokenInForeignContent",value:function _shouldProcessTokenInForeignContent(token){var current=this._getAdjustedCurrentElement();if(!current||current===this.document){return false;}var ns=this.treeAdapter.getNamespaceURI(current);if(ns===NS.HTML){return false;}if(this.treeAdapter.getTagName(current)===$.ANNOTATION_XML&&ns===NS.MATHML&&token.type===Tokenizer.START_TAG_TOKEN&&token.tagName===$.SVG){return false;}var isCharacterToken=token.type===Tokenizer.CHARACTER_TOKEN||token.type===Tokenizer.NULL_CHARACTER_TOKEN||token.type===Tokenizer.WHITESPACE_CHARACTER_TOKEN;var isMathMLTextStartTag=token.type===Tokenizer.START_TAG_TOKEN&&token.tagName!==$.MGLYPH&&token.tagName!==$.MALIGNMARK;if((isMathMLTextStartTag||isCharacterToken)&&this._isIntegrationPoint(current,NS.MATHML)){return false;}if((token.type===Tokenizer.START_TAG_TOKEN||isCharacterToken)&&this._isIntegrationPoint(current,NS.HTML)){return false;}return token.type!==Tokenizer.EOF_TOKEN;}},{key:"_processToken",value:function _processToken(token){TOKEN_HANDLERS[this.insertionMode][token.type](this,token);}},{key:"_processTokenInBodyMode",value:function _processTokenInBodyMode(token){TOKEN_HANDLERS[IN_BODY_MODE][token.type](this,token);}},{key:"_processTokenInForeignContent",value:function _processTokenInForeignContent(token){if(token.type===Tokenizer.CHARACTER_TOKEN){characterInForeignContent(this,token);}else if(token.type===Tokenizer.NULL_CHARACTER_TOKEN){nullCharacterInForeignContent(this,token);}else if(token.type===Tokenizer.WHITESPACE_CHARACTER_TOKEN){insertCharacters(this,token);}else if(token.type===Tokenizer.COMMENT_TOKEN){appendComment(this,token);}else if(token.type===Tokenizer.START_TAG_TOKEN){startTagInForeignContent(this,token);}else if(token.type===Tokenizer.END_TAG_TOKEN){endTagInForeignContent(this,token);}}},{key:"_processInputToken",value:function _processInputToken(token){if(this._shouldProcessTokenInForeignContent(token)){this._processTokenInForeignContent(token);}else{this._processToken(token);}if(token.type===Tokenizer.START_TAG_TOKEN&&token.selfClosing&&!token.ackSelfClosing){this._err(ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);}}//Integration points
},{key:"_isIntegrationPoint",value:function _isIntegrationPoint(element,foreignNS){var tn=this.treeAdapter.getTagName(element);var ns=this.treeAdapter.getNamespaceURI(element);var attrs=this.treeAdapter.getAttrList(element);return foreignContent.isIntegrationPoint(tn,ns,attrs,foreignNS);}//Active formatting elements reconstruction
},{key:"_reconstructActiveFormattingElements",value:function _reconstructActiveFormattingElements(){var listLength=this.activeFormattingElements.length;if(listLength){var unopenIdx=listLength;var entry=null;do{unopenIdx--;entry=this.activeFormattingElements.entries[unopenIdx];if(entry.type===FormattingElementList.MARKER_ENTRY||this.openElements.contains(entry.element)){unopenIdx++;break;}}while(unopenIdx>0);for(var i=unopenIdx;i<listLength;i++){entry=this.activeFormattingElements.entries[i];this._insertElement(entry.token,this.treeAdapter.getNamespaceURI(entry.element));entry.element=this.openElements.current;}}}//Close elements
},{key:"_closeTableCell",value:function _closeTableCell(){this.openElements.generateImpliedEndTags();this.openElements.popUntilTableCellPopped();this.activeFormattingElements.clearToLastMarker();this.insertionMode=IN_ROW_MODE;}},{key:"_closePElement",value:function _closePElement(){this.openElements.generateImpliedEndTagsWithExclusion($.P);this.openElements.popUntilTagNamePopped($.P);}//Insertion modes
},{key:"_resetInsertionMode",value:function _resetInsertionMode(){for(var i=this.openElements.stackTop,last=false;i>=0;i--){var _element3=this.openElements.items[i];if(i===0){last=true;if(this.fragmentContext){_element3=this.fragmentContext;}}var tn=this.treeAdapter.getTagName(_element3);var newInsertionMode=INSERTION_MODE_RESET_MAP[tn];if(newInsertionMode){this.insertionMode=newInsertionMode;break;}else if(!last&&(tn===$.TD||tn===$.TH)){this.insertionMode=IN_CELL_MODE;break;}else if(!last&&tn===$.HEAD){this.insertionMode=IN_HEAD_MODE;break;}else if(tn===$.SELECT){this._resetInsertionModeForSelect(i);break;}else if(tn===$.TEMPLATE){this.insertionMode=this.currentTmplInsertionMode;break;}else if(tn===$.HTML){this.insertionMode=this.headElement?AFTER_HEAD_MODE:BEFORE_HEAD_MODE;break;}else if(last){this.insertionMode=IN_BODY_MODE;break;}}}},{key:"_resetInsertionModeForSelect",value:function _resetInsertionModeForSelect(selectIdx){if(selectIdx>0){for(var i=selectIdx-1;i>0;i--){var ancestor=this.openElements.items[i];var tn=this.treeAdapter.getTagName(ancestor);if(tn===$.TEMPLATE){break;}else if(tn===$.TABLE){this.insertionMode=IN_SELECT_IN_TABLE_MODE;return;}}}this.insertionMode=IN_SELECT_MODE;}},{key:"_pushTmplInsertionMode",value:function _pushTmplInsertionMode(mode){this.tmplInsertionModeStack.push(mode);this.tmplInsertionModeStackTop++;this.currentTmplInsertionMode=mode;}},{key:"_popTmplInsertionMode",value:function _popTmplInsertionMode(){this.tmplInsertionModeStack.pop();this.tmplInsertionModeStackTop--;this.currentTmplInsertionMode=this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];}//Foster parenting
},{key:"_isElementCausesFosterParenting",value:function _isElementCausesFosterParenting(element){var tn=this.treeAdapter.getTagName(element);return tn===$.TABLE||tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD||tn===$.TR;}},{key:"_shouldFosterParentOnInsertion",value:function _shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this._isElementCausesFosterParenting(this.openElements.current);}},{key:"_findFosterParentingLocation",value:function _findFosterParentingLocation(){var location={parent:null,beforeElement:null};for(var i=this.openElements.stackTop;i>=0;i--){var openElement=this.openElements.items[i];var tn=this.treeAdapter.getTagName(openElement);var _ns11=this.treeAdapter.getNamespaceURI(openElement);if(tn===$.TEMPLATE&&_ns11===NS.HTML){location.parent=this.treeAdapter.getTemplateContent(openElement);break;}else if(tn===$.TABLE){location.parent=this.treeAdapter.getParentNode(openElement);if(location.parent){location.beforeElement=openElement;}else{location.parent=this.openElements.items[i-1];}break;}}if(!location.parent){location.parent=this.openElements.items[0];}return location;}},{key:"_fosterParentElement",value:function _fosterParentElement(element){var location=this._findFosterParentingLocation();if(location.beforeElement){this.treeAdapter.insertBefore(location.parent,element,location.beforeElement);}else{this.treeAdapter.appendChild(location.parent,element);}}},{key:"_fosterParentText",value:function _fosterParentText(chars){var location=this._findFosterParentingLocation();if(location.beforeElement){this.treeAdapter.insertTextBefore(location.parent,chars,location.beforeElement);}else{this.treeAdapter.insertText(location.parent,chars);}}//Special elements
},{key:"_isSpecialElement",value:function _isSpecialElement(element){var tn=this.treeAdapter.getTagName(element);var ns=this.treeAdapter.getNamespaceURI(element);return HTML.SPECIAL_ELEMENTS[ns][tn];}}]);return Parser;}();var parser=Parser;//Adoption agency algorithm
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
//------------------------------------------------------------------
//Steps 5-8 of the algorithm
function aaObtainFormattingElementEntry(p,token){var formattingElementEntry=p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);if(formattingElementEntry){if(!p.openElements.contains(formattingElementEntry.element)){p.activeFormattingElements.removeEntry(formattingElementEntry);formattingElementEntry=null;}else if(!p.openElements.hasInScope(token.tagName)){formattingElementEntry=null;}}else{genericEndTagInBody(p,token);}return formattingElementEntry;}//Steps 9 and 10 of the algorithm
function aaObtainFurthestBlock(p,formattingElementEntry){var furthestBlock=null;for(var i=p.openElements.stackTop;i>=0;i--){var _element4=p.openElements.items[i];if(_element4===formattingElementEntry.element){break;}if(p._isSpecialElement(_element4)){furthestBlock=_element4;}}if(!furthestBlock){p.openElements.popUntilElementPopped(formattingElementEntry.element);p.activeFormattingElements.removeEntry(formattingElementEntry);}return furthestBlock;}//Step 13 of the algorithm
function aaInnerLoop(p,furthestBlock,formattingElement){var lastElement=furthestBlock;var nextElement=p.openElements.getCommonAncestor(furthestBlock);for(var i=0,_element5=nextElement;_element5!==formattingElement;i++,_element5=nextElement){//NOTE: store next element for the next loop iteration (it may be deleted from the stack by step 9.5)
nextElement=p.openElements.getCommonAncestor(_element5);var elementEntry=p.activeFormattingElements.getElementEntry(_element5);var counterOverflow=elementEntry&&i>=AA_INNER_LOOP_ITER;var shouldRemoveFromOpenElements=!elementEntry||counterOverflow;if(shouldRemoveFromOpenElements){if(counterOverflow){p.activeFormattingElements.removeEntry(elementEntry);}p.openElements.remove(_element5);}else{_element5=aaRecreateElementFromEntry(p,elementEntry);if(lastElement===furthestBlock){p.activeFormattingElements.bookmark=elementEntry;}p.treeAdapter.detachNode(lastElement);p.treeAdapter.appendChild(_element5,lastElement);lastElement=_element5;}}return lastElement;}//Step 13.7 of the algorithm
function aaRecreateElementFromEntry(p,elementEntry){var ns=p.treeAdapter.getNamespaceURI(elementEntry.element);var newElement=p.treeAdapter.createElement(elementEntry.token.tagName,ns,elementEntry.token.attrs);p.openElements.replace(elementEntry.element,newElement);elementEntry.element=newElement;return newElement;}//Step 14 of the algorithm
function aaInsertLastNodeInCommonAncestor(p,commonAncestor,lastElement){if(p._isElementCausesFosterParenting(commonAncestor)){p._fosterParentElement(lastElement);}else{var tn=p.treeAdapter.getTagName(commonAncestor);var _ns12=p.treeAdapter.getNamespaceURI(commonAncestor);if(tn===$.TEMPLATE&&_ns12===NS.HTML){commonAncestor=p.treeAdapter.getTemplateContent(commonAncestor);}p.treeAdapter.appendChild(commonAncestor,lastElement);}}//Steps 15-19 of the algorithm
function aaReplaceFormattingElement(p,furthestBlock,formattingElementEntry){var ns=p.treeAdapter.getNamespaceURI(formattingElementEntry.element);var token=formattingElementEntry.token;var newElement=p.treeAdapter.createElement(token.tagName,ns,token.attrs);p._adoptNodes(furthestBlock,newElement);p.treeAdapter.appendChild(furthestBlock,newElement);p.activeFormattingElements.insertElementAfterBookmark(newElement,formattingElementEntry.token);p.activeFormattingElements.removeEntry(formattingElementEntry);p.openElements.remove(formattingElementEntry.element);p.openElements.insertAfter(furthestBlock,newElement);}//Algorithm entry point
function callAdoptionAgency(p,token){var formattingElementEntry;for(var i=0;i<AA_OUTER_LOOP_ITER;i++){formattingElementEntry=aaObtainFormattingElementEntry(p,token);if(!formattingElementEntry){break;}var furthestBlock=aaObtainFurthestBlock(p,formattingElementEntry);if(!furthestBlock){break;}p.activeFormattingElements.bookmark=formattingElementEntry;var lastElement=aaInnerLoop(p,furthestBlock,formattingElementEntry.element);var commonAncestor=p.openElements.getCommonAncestor(formattingElementEntry.element);p.treeAdapter.detachNode(lastElement);aaInsertLastNodeInCommonAncestor(p,commonAncestor,lastElement);aaReplaceFormattingElement(p,furthestBlock,formattingElementEntry);}}//Generic token handlers
//------------------------------------------------------------------
function ignoreToken(){//NOTE: do nothing =)
}function misplacedDoctype(p){p._err(ERR.misplacedDoctype);}function appendComment(p,token){p._appendCommentNode(token,p.openElements.currentTmplContent||p.openElements.current);}function appendCommentToRootHtmlElement(p,token){p._appendCommentNode(token,p.openElements.items[0]);}function appendCommentToDocument(p,token){p._appendCommentNode(token,p.document);}function insertCharacters(p,token){p._insertCharacters(token);}function stopParsing(p){p.stopped=true;}// The "initial" insertion mode
//------------------------------------------------------------------
function doctypeInInitialMode(p,token){p._setDocumentType(token);var mode=token.forceQuirks?HTML.DOCUMENT_MODE.QUIRKS:doctype$2.getDocumentMode(token);if(!doctype$2.isConforming(token)){p._err(ERR.nonConformingDoctype);}p.treeAdapter.setDocumentMode(p.document,mode);p.insertionMode=BEFORE_HTML_MODE;}function tokenInInitialMode(p,token){p._err(ERR.missingDoctype,{beforeToken:true});p.treeAdapter.setDocumentMode(p.document,HTML.DOCUMENT_MODE.QUIRKS);p.insertionMode=BEFORE_HTML_MODE;p._processToken(token);}// The "before html" insertion mode
//------------------------------------------------------------------
function startTagBeforeHtml(p,token){if(token.tagName===$.HTML){p._insertElement(token,NS.HTML);p.insertionMode=BEFORE_HEAD_MODE;}else{tokenBeforeHtml(p,token);}}function endTagBeforeHtml(p,token){var tn=token.tagName;if(tn===$.HTML||tn===$.HEAD||tn===$.BODY||tn===$.BR){tokenBeforeHtml(p,token);}}function tokenBeforeHtml(p,token){p._insertFakeRootElement();p.insertionMode=BEFORE_HEAD_MODE;p._processToken(token);}// The "before head" insertion mode
//------------------------------------------------------------------
function startTagBeforeHead(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.HEAD){p._insertElement(token,NS.HTML);p.headElement=p.openElements.current;p.insertionMode=IN_HEAD_MODE;}else{tokenBeforeHead(p,token);}}function endTagBeforeHead(p,token){var tn=token.tagName;if(tn===$.HEAD||tn===$.BODY||tn===$.HTML||tn===$.BR){tokenBeforeHead(p,token);}else{p._err(ERR.endTagWithoutMatchingOpenElement);}}function tokenBeforeHead(p,token){p._insertFakeElement($.HEAD);p.headElement=p.openElements.current;p.insertionMode=IN_HEAD_MODE;p._processToken(token);}// The "in head" insertion mode
//------------------------------------------------------------------
function startTagInHead(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.BASE||tn===$.BASEFONT||tn===$.BGSOUND||tn===$.LINK||tn===$.META){p._appendElement(token,NS.HTML);token.ackSelfClosing=true;}else if(tn===$.TITLE){p._switchToTextParsing(token,Tokenizer.MODE.RCDATA);}else if(tn===$.NOSCRIPT){if(p.options.scriptingEnabled){p._switchToTextParsing(token,Tokenizer.MODE.RAWTEXT);}else{p._insertElement(token,NS.HTML);p.insertionMode=IN_HEAD_NO_SCRIPT_MODE;}}else if(tn===$.NOFRAMES||tn===$.STYLE){p._switchToTextParsing(token,Tokenizer.MODE.RAWTEXT);}else if(tn===$.SCRIPT){p._switchToTextParsing(token,Tokenizer.MODE.SCRIPT_DATA);}else if(tn===$.TEMPLATE){p._insertTemplate(token,NS.HTML);p.activeFormattingElements.insertMarker();p.framesetOk=false;p.insertionMode=IN_TEMPLATE_MODE;p._pushTmplInsertionMode(IN_TEMPLATE_MODE);}else if(tn===$.HEAD){p._err(ERR.misplacedStartTagForHeadElement);}else{tokenInHead(p,token);}}function endTagInHead(p,token){var tn=token.tagName;if(tn===$.HEAD){p.openElements.pop();p.insertionMode=AFTER_HEAD_MODE;}else if(tn===$.BODY||tn===$.BR||tn===$.HTML){tokenInHead(p,token);}else if(tn===$.TEMPLATE){if(p.openElements.tmplCount>0){p.openElements.generateImpliedEndTagsThoroughly();if(p.openElements.currentTagName!==$.TEMPLATE){p._err(ERR.closingOfElementWithOpenChildElements);}p.openElements.popUntilTagNamePopped($.TEMPLATE);p.activeFormattingElements.clearToLastMarker();p._popTmplInsertionMode();p._resetInsertionMode();}else{p._err(ERR.endTagWithoutMatchingOpenElement);}}else{p._err(ERR.endTagWithoutMatchingOpenElement);}}function tokenInHead(p,token){p.openElements.pop();p.insertionMode=AFTER_HEAD_MODE;p._processToken(token);}// The "in head no script" insertion mode
//------------------------------------------------------------------
function startTagInHeadNoScript(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.BASEFONT||tn===$.BGSOUND||tn===$.HEAD||tn===$.LINK||tn===$.META||tn===$.NOFRAMES||tn===$.STYLE){startTagInHead(p,token);}else if(tn===$.NOSCRIPT){p._err(ERR.nestedNoscriptInHead);}else{tokenInHeadNoScript(p,token);}}function endTagInHeadNoScript(p,token){var tn=token.tagName;if(tn===$.NOSCRIPT){p.openElements.pop();p.insertionMode=IN_HEAD_MODE;}else if(tn===$.BR){tokenInHeadNoScript(p,token);}else{p._err(ERR.endTagWithoutMatchingOpenElement);}}function tokenInHeadNoScript(p,token){var errCode=token.type===Tokenizer.EOF_TOKEN?ERR.openElementsLeftAfterEof:ERR.disallowedContentInNoscriptInHead;p._err(errCode);p.openElements.pop();p.insertionMode=IN_HEAD_MODE;p._processToken(token);}// The "after head" insertion mode
//------------------------------------------------------------------
function startTagAfterHead(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.BODY){p._insertElement(token,NS.HTML);p.framesetOk=false;p.insertionMode=IN_BODY_MODE;}else if(tn===$.FRAMESET){p._insertElement(token,NS.HTML);p.insertionMode=IN_FRAMESET_MODE;}else if(tn===$.BASE||tn===$.BASEFONT||tn===$.BGSOUND||tn===$.LINK||tn===$.META||tn===$.NOFRAMES||tn===$.SCRIPT||tn===$.STYLE||tn===$.TEMPLATE||tn===$.TITLE){p._err(ERR.abandonedHeadElementChild);p.openElements.push(p.headElement);startTagInHead(p,token);p.openElements.remove(p.headElement);}else if(tn===$.HEAD){p._err(ERR.misplacedStartTagForHeadElement);}else{tokenAfterHead(p,token);}}function endTagAfterHead(p,token){var tn=token.tagName;if(tn===$.BODY||tn===$.HTML||tn===$.BR){tokenAfterHead(p,token);}else if(tn===$.TEMPLATE){endTagInHead(p,token);}else{p._err(ERR.endTagWithoutMatchingOpenElement);}}function tokenAfterHead(p,token){p._insertFakeElement($.BODY);p.insertionMode=IN_BODY_MODE;p._processToken(token);}// The "in body" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInBody(p,token){p._reconstructActiveFormattingElements();p._insertCharacters(token);}function characterInBody(p,token){p._reconstructActiveFormattingElements();p._insertCharacters(token);p.framesetOk=false;}function htmlStartTagInBody(p,token){if(p.openElements.tmplCount===0){p.treeAdapter.adoptAttributes(p.openElements.items[0],token.attrs);}}function bodyStartTagInBody(p,token){var bodyElement=p.openElements.tryPeekProperlyNestedBodyElement();if(bodyElement&&p.openElements.tmplCount===0){p.framesetOk=false;p.treeAdapter.adoptAttributes(bodyElement,token.attrs);}}function framesetStartTagInBody(p,token){var bodyElement=p.openElements.tryPeekProperlyNestedBodyElement();if(p.framesetOk&&bodyElement){p.treeAdapter.detachNode(bodyElement);p.openElements.popAllUpToHtmlElement();p._insertElement(token,NS.HTML);p.insertionMode=IN_FRAMESET_MODE;}}function addressStartTagInBody(p,token){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._insertElement(token,NS.HTML);}function numberedHeaderStartTagInBody(p,token){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}var tn=p.openElements.currentTagName;if(tn===$.H1||tn===$.H2||tn===$.H3||tn===$.H4||tn===$.H5||tn===$.H6){p.openElements.pop();}p._insertElement(token,NS.HTML);}function preStartTagInBody(p,token){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._insertElement(token,NS.HTML);//NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
//on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)
p.skipNextNewLine=true;p.framesetOk=false;}function formStartTagInBody(p,token){var inTemplate=p.openElements.tmplCount>0;if(!p.formElement||inTemplate){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._insertElement(token,NS.HTML);if(!inTemplate){p.formElement=p.openElements.current;}}}function listItemStartTagInBody(p,token){p.framesetOk=false;var tn=token.tagName;for(var i=p.openElements.stackTop;i>=0;i--){var _element6=p.openElements.items[i];var elementTn=p.treeAdapter.getTagName(_element6);var closeTn=null;if(tn===$.LI&&elementTn===$.LI){closeTn=$.LI;}else if((tn===$.DD||tn===$.DT)&&(elementTn===$.DD||elementTn===$.DT)){closeTn=elementTn;}if(closeTn){p.openElements.generateImpliedEndTagsWithExclusion(closeTn);p.openElements.popUntilTagNamePopped(closeTn);break;}if(elementTn!==$.ADDRESS&&elementTn!==$.DIV&&elementTn!==$.P&&p._isSpecialElement(_element6)){break;}}if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._insertElement(token,NS.HTML);}function plaintextStartTagInBody(p,token){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._insertElement(token,NS.HTML);p.tokenizer.state=Tokenizer.MODE.PLAINTEXT;}function buttonStartTagInBody(p,token){if(p.openElements.hasInScope($.BUTTON)){p.openElements.generateImpliedEndTags();p.openElements.popUntilTagNamePopped($.BUTTON);}p._reconstructActiveFormattingElements();p._insertElement(token,NS.HTML);p.framesetOk=false;}function aStartTagInBody(p,token){var activeElementEntry=p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);if(activeElementEntry){callAdoptionAgency(p,token);p.openElements.remove(activeElementEntry.element);p.activeFormattingElements.removeEntry(activeElementEntry);}p._reconstructActiveFormattingElements();p._insertElement(token,NS.HTML);p.activeFormattingElements.pushElement(p.openElements.current,token);}function bStartTagInBody(p,token){p._reconstructActiveFormattingElements();p._insertElement(token,NS.HTML);p.activeFormattingElements.pushElement(p.openElements.current,token);}function nobrStartTagInBody(p,token){p._reconstructActiveFormattingElements();if(p.openElements.hasInScope($.NOBR)){callAdoptionAgency(p,token);p._reconstructActiveFormattingElements();}p._insertElement(token,NS.HTML);p.activeFormattingElements.pushElement(p.openElements.current,token);}function appletStartTagInBody(p,token){p._reconstructActiveFormattingElements();p._insertElement(token,NS.HTML);p.activeFormattingElements.insertMarker();p.framesetOk=false;}function tableStartTagInBody(p,token){if(p.treeAdapter.getDocumentMode(p.document)!==HTML.DOCUMENT_MODE.QUIRKS&&p.openElements.hasInButtonScope($.P)){p._closePElement();}p._insertElement(token,NS.HTML);p.framesetOk=false;p.insertionMode=IN_TABLE_MODE;}function areaStartTagInBody(p,token){p._reconstructActiveFormattingElements();p._appendElement(token,NS.HTML);p.framesetOk=false;token.ackSelfClosing=true;}function inputStartTagInBody(p,token){p._reconstructActiveFormattingElements();p._appendElement(token,NS.HTML);var inputType=Tokenizer.getTokenAttr(token,ATTRS.TYPE);if(!inputType||inputType.toLowerCase()!==HIDDEN_INPUT_TYPE){p.framesetOk=false;}token.ackSelfClosing=true;}function paramStartTagInBody(p,token){p._appendElement(token,NS.HTML);token.ackSelfClosing=true;}function hrStartTagInBody(p,token){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._appendElement(token,NS.HTML);p.framesetOk=false;token.ackSelfClosing=true;}function imageStartTagInBody(p,token){token.tagName=$.IMG;areaStartTagInBody(p,token);}function textareaStartTagInBody(p,token){p._insertElement(token,NS.HTML);//NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
//on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)
p.skipNextNewLine=true;p.tokenizer.state=Tokenizer.MODE.RCDATA;p.originalInsertionMode=p.insertionMode;p.framesetOk=false;p.insertionMode=TEXT_MODE;}function xmpStartTagInBody(p,token){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._reconstructActiveFormattingElements();p.framesetOk=false;p._switchToTextParsing(token,Tokenizer.MODE.RAWTEXT);}function iframeStartTagInBody(p,token){p.framesetOk=false;p._switchToTextParsing(token,Tokenizer.MODE.RAWTEXT);}//NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
//<noembed> as a rawtext.
function noembedStartTagInBody(p,token){p._switchToTextParsing(token,Tokenizer.MODE.RAWTEXT);}function selectStartTagInBody(p,token){p._reconstructActiveFormattingElements();p._insertElement(token,NS.HTML);p.framesetOk=false;if(p.insertionMode===IN_TABLE_MODE||p.insertionMode===IN_CAPTION_MODE||p.insertionMode===IN_TABLE_BODY_MODE||p.insertionMode===IN_ROW_MODE||p.insertionMode===IN_CELL_MODE){p.insertionMode=IN_SELECT_IN_TABLE_MODE;}else{p.insertionMode=IN_SELECT_MODE;}}function optgroupStartTagInBody(p,token){if(p.openElements.currentTagName===$.OPTION){p.openElements.pop();}p._reconstructActiveFormattingElements();p._insertElement(token,NS.HTML);}function rbStartTagInBody(p,token){if(p.openElements.hasInScope($.RUBY)){p.openElements.generateImpliedEndTags();}p._insertElement(token,NS.HTML);}function rtStartTagInBody(p,token){if(p.openElements.hasInScope($.RUBY)){p.openElements.generateImpliedEndTagsWithExclusion($.RTC);}p._insertElement(token,NS.HTML);}function menuStartTagInBody(p,token){if(p.openElements.hasInButtonScope($.P)){p._closePElement();}p._insertElement(token,NS.HTML);}function mathStartTagInBody(p,token){p._reconstructActiveFormattingElements();foreignContent.adjustTokenMathMLAttrs(token);foreignContent.adjustTokenXMLAttrs(token);if(token.selfClosing){p._appendElement(token,NS.MATHML);}else{p._insertElement(token,NS.MATHML);}token.ackSelfClosing=true;}function svgStartTagInBody(p,token){p._reconstructActiveFormattingElements();foreignContent.adjustTokenSVGAttrs(token);foreignContent.adjustTokenXMLAttrs(token);if(token.selfClosing){p._appendElement(token,NS.SVG);}else{p._insertElement(token,NS.SVG);}token.ackSelfClosing=true;}function genericStartTagInBody(p,token){p._reconstructActiveFormattingElements();p._insertElement(token,NS.HTML);}//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function startTagInBody(p,token){var tn=token.tagName;switch(tn.length){case 1:if(tn===$.I||tn===$.S||tn===$.B||tn===$.U){bStartTagInBody(p,token);}else if(tn===$.P){addressStartTagInBody(p,token);}else if(tn===$.A){aStartTagInBody(p,token);}else{genericStartTagInBody(p,token);}break;case 2:if(tn===$.DL||tn===$.OL||tn===$.UL){addressStartTagInBody(p,token);}else if(tn===$.H1||tn===$.H2||tn===$.H3||tn===$.H4||tn===$.H5||tn===$.H6){numberedHeaderStartTagInBody(p,token);}else if(tn===$.LI||tn===$.DD||tn===$.DT){listItemStartTagInBody(p,token);}else if(tn===$.EM||tn===$.TT){bStartTagInBody(p,token);}else if(tn===$.BR){areaStartTagInBody(p,token);}else if(tn===$.HR){hrStartTagInBody(p,token);}else if(tn===$.RB){rbStartTagInBody(p,token);}else if(tn===$.RT||tn===$.RP){rtStartTagInBody(p,token);}else if(tn!==$.TH&&tn!==$.TD&&tn!==$.TR){genericStartTagInBody(p,token);}break;case 3:if(tn===$.DIV||tn===$.DIR||tn===$.NAV){addressStartTagInBody(p,token);}else if(tn===$.PRE){preStartTagInBody(p,token);}else if(tn===$.BIG){bStartTagInBody(p,token);}else if(tn===$.IMG||tn===$.WBR){areaStartTagInBody(p,token);}else if(tn===$.XMP){xmpStartTagInBody(p,token);}else if(tn===$.SVG){svgStartTagInBody(p,token);}else if(tn===$.RTC){rbStartTagInBody(p,token);}else if(tn!==$.COL){genericStartTagInBody(p,token);}break;case 4:if(tn===$.HTML){htmlStartTagInBody(p,token);}else if(tn===$.BASE||tn===$.LINK||tn===$.META){startTagInHead(p,token);}else if(tn===$.BODY){bodyStartTagInBody(p,token);}else if(tn===$.MAIN||tn===$.MENU){addressStartTagInBody(p,token);}else if(tn===$.FORM){formStartTagInBody(p,token);}else if(tn===$.CODE||tn===$.FONT){bStartTagInBody(p,token);}else if(tn===$.NOBR){nobrStartTagInBody(p,token);}else if(tn===$.AREA){areaStartTagInBody(p,token);}else if(tn===$.MATH){mathStartTagInBody(p,token);}else if(tn===$.MENU){menuStartTagInBody(p,token);}else if(tn!==$.HEAD){genericStartTagInBody(p,token);}break;case 5:if(tn===$.STYLE||tn===$.TITLE){startTagInHead(p,token);}else if(tn===$.ASIDE){addressStartTagInBody(p,token);}else if(tn===$.SMALL){bStartTagInBody(p,token);}else if(tn===$.TABLE){tableStartTagInBody(p,token);}else if(tn===$.EMBED){areaStartTagInBody(p,token);}else if(tn===$.INPUT){inputStartTagInBody(p,token);}else if(tn===$.PARAM||tn===$.TRACK){paramStartTagInBody(p,token);}else if(tn===$.IMAGE){imageStartTagInBody(p,token);}else if(tn!==$.FRAME&&tn!==$.TBODY&&tn!==$.TFOOT&&tn!==$.THEAD){genericStartTagInBody(p,token);}break;case 6:if(tn===$.SCRIPT){startTagInHead(p,token);}else if(tn===$.CENTER||tn===$.FIGURE||tn===$.FOOTER||tn===$.HEADER||tn===$.HGROUP||tn===$.DIALOG){addressStartTagInBody(p,token);}else if(tn===$.BUTTON){buttonStartTagInBody(p,token);}else if(tn===$.STRIKE||tn===$.STRONG){bStartTagInBody(p,token);}else if(tn===$.APPLET||tn===$.OBJECT){appletStartTagInBody(p,token);}else if(tn===$.KEYGEN){areaStartTagInBody(p,token);}else if(tn===$.SOURCE){paramStartTagInBody(p,token);}else if(tn===$.IFRAME){iframeStartTagInBody(p,token);}else if(tn===$.SELECT){selectStartTagInBody(p,token);}else if(tn===$.OPTION){optgroupStartTagInBody(p,token);}else{genericStartTagInBody(p,token);}break;case 7:if(tn===$.BGSOUND){startTagInHead(p,token);}else if(tn===$.DETAILS||tn===$.ADDRESS||tn===$.ARTICLE||tn===$.SECTION||tn===$.SUMMARY){addressStartTagInBody(p,token);}else if(tn===$.LISTING){preStartTagInBody(p,token);}else if(tn===$.MARQUEE){appletStartTagInBody(p,token);}else if(tn===$.NOEMBED){noembedStartTagInBody(p,token);}else if(tn!==$.CAPTION){genericStartTagInBody(p,token);}break;case 8:if(tn===$.BASEFONT){startTagInHead(p,token);}else if(tn===$.FRAMESET){framesetStartTagInBody(p,token);}else if(tn===$.FIELDSET){addressStartTagInBody(p,token);}else if(tn===$.TEXTAREA){textareaStartTagInBody(p,token);}else if(tn===$.TEMPLATE){startTagInHead(p,token);}else if(tn===$.NOSCRIPT){if(p.options.scriptingEnabled){noembedStartTagInBody(p,token);}else{genericStartTagInBody(p,token);}}else if(tn===$.OPTGROUP){optgroupStartTagInBody(p,token);}else if(tn!==$.COLGROUP){genericStartTagInBody(p,token);}break;case 9:if(tn===$.PLAINTEXT){plaintextStartTagInBody(p,token);}else{genericStartTagInBody(p,token);}break;case 10:if(tn===$.BLOCKQUOTE||tn===$.FIGCAPTION){addressStartTagInBody(p,token);}else{genericStartTagInBody(p,token);}break;default:genericStartTagInBody(p,token);}}function bodyEndTagInBody(p){if(p.openElements.hasInScope($.BODY)){p.insertionMode=AFTER_BODY_MODE;}}function htmlEndTagInBody(p,token){if(p.openElements.hasInScope($.BODY)){p.insertionMode=AFTER_BODY_MODE;p._processToken(token);}}function addressEndTagInBody(p,token){var tn=token.tagName;if(p.openElements.hasInScope(tn)){p.openElements.generateImpliedEndTags();p.openElements.popUntilTagNamePopped(tn);}}function formEndTagInBody(p){var inTemplate=p.openElements.tmplCount>0;var formElement=p.formElement;if(!inTemplate){p.formElement=null;}if((formElement||inTemplate)&&p.openElements.hasInScope($.FORM)){p.openElements.generateImpliedEndTags();if(inTemplate){p.openElements.popUntilTagNamePopped($.FORM);}else{p.openElements.remove(formElement);}}}function pEndTagInBody(p){if(!p.openElements.hasInButtonScope($.P)){p._insertFakeElement($.P);}p._closePElement();}function liEndTagInBody(p){if(p.openElements.hasInListItemScope($.LI)){p.openElements.generateImpliedEndTagsWithExclusion($.LI);p.openElements.popUntilTagNamePopped($.LI);}}function ddEndTagInBody(p,token){var tn=token.tagName;if(p.openElements.hasInScope(tn)){p.openElements.generateImpliedEndTagsWithExclusion(tn);p.openElements.popUntilTagNamePopped(tn);}}function numberedHeaderEndTagInBody(p){if(p.openElements.hasNumberedHeaderInScope()){p.openElements.generateImpliedEndTags();p.openElements.popUntilNumberedHeaderPopped();}}function appletEndTagInBody(p,token){var tn=token.tagName;if(p.openElements.hasInScope(tn)){p.openElements.generateImpliedEndTags();p.openElements.popUntilTagNamePopped(tn);p.activeFormattingElements.clearToLastMarker();}}function brEndTagInBody(p){p._reconstructActiveFormattingElements();p._insertFakeElement($.BR);p.openElements.pop();p.framesetOk=false;}function genericEndTagInBody(p,token){var tn=token.tagName;for(var i=p.openElements.stackTop;i>0;i--){var _element7=p.openElements.items[i];if(p.treeAdapter.getTagName(_element7)===tn){p.openElements.generateImpliedEndTagsWithExclusion(tn);p.openElements.popUntilElementPopped(_element7);break;}if(p._isSpecialElement(_element7)){break;}}}//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function endTagInBody(p,token){var tn=token.tagName;switch(tn.length){case 1:if(tn===$.A||tn===$.B||tn===$.I||tn===$.S||tn===$.U){callAdoptionAgency(p,token);}else if(tn===$.P){pEndTagInBody(p);}else{genericEndTagInBody(p,token);}break;case 2:if(tn===$.DL||tn===$.UL||tn===$.OL){addressEndTagInBody(p,token);}else if(tn===$.LI){liEndTagInBody(p);}else if(tn===$.DD||tn===$.DT){ddEndTagInBody(p,token);}else if(tn===$.H1||tn===$.H2||tn===$.H3||tn===$.H4||tn===$.H5||tn===$.H6){numberedHeaderEndTagInBody(p);}else if(tn===$.BR){brEndTagInBody(p);}else if(tn===$.EM||tn===$.TT){callAdoptionAgency(p,token);}else{genericEndTagInBody(p,token);}break;case 3:if(tn===$.BIG){callAdoptionAgency(p,token);}else if(tn===$.DIR||tn===$.DIV||tn===$.NAV||tn===$.PRE){addressEndTagInBody(p,token);}else{genericEndTagInBody(p,token);}break;case 4:if(tn===$.BODY){bodyEndTagInBody(p);}else if(tn===$.HTML){htmlEndTagInBody(p,token);}else if(tn===$.FORM){formEndTagInBody(p);}else if(tn===$.CODE||tn===$.FONT||tn===$.NOBR){callAdoptionAgency(p,token);}else if(tn===$.MAIN||tn===$.MENU){addressEndTagInBody(p,token);}else{genericEndTagInBody(p,token);}break;case 5:if(tn===$.ASIDE){addressEndTagInBody(p,token);}else if(tn===$.SMALL){callAdoptionAgency(p,token);}else{genericEndTagInBody(p,token);}break;case 6:if(tn===$.CENTER||tn===$.FIGURE||tn===$.FOOTER||tn===$.HEADER||tn===$.HGROUP||tn===$.DIALOG){addressEndTagInBody(p,token);}else if(tn===$.APPLET||tn===$.OBJECT){appletEndTagInBody(p,token);}else if(tn===$.STRIKE||tn===$.STRONG){callAdoptionAgency(p,token);}else{genericEndTagInBody(p,token);}break;case 7:if(tn===$.ADDRESS||tn===$.ARTICLE||tn===$.DETAILS||tn===$.SECTION||tn===$.SUMMARY||tn===$.LISTING){addressEndTagInBody(p,token);}else if(tn===$.MARQUEE){appletEndTagInBody(p,token);}else{genericEndTagInBody(p,token);}break;case 8:if(tn===$.FIELDSET){addressEndTagInBody(p,token);}else if(tn===$.TEMPLATE){endTagInHead(p,token);}else{genericEndTagInBody(p,token);}break;case 10:if(tn===$.BLOCKQUOTE||tn===$.FIGCAPTION){addressEndTagInBody(p,token);}else{genericEndTagInBody(p,token);}break;default:genericEndTagInBody(p,token);}}function eofInBody(p,token){if(p.tmplInsertionModeStackTop>-1){eofInTemplate(p,token);}else{p.stopped=true;}}// The "text" insertion mode
//------------------------------------------------------------------
function endTagInText(p,token){if(token.tagName===$.SCRIPT){p.pendingScript=p.openElements.current;}p.openElements.pop();p.insertionMode=p.originalInsertionMode;}function eofInText(p,token){p._err(ERR.eofInElementThatCanContainOnlyText);p.openElements.pop();p.insertionMode=p.originalInsertionMode;p._processToken(token);}// The "in table" insertion mode
//------------------------------------------------------------------
function characterInTable(p,token){var curTn=p.openElements.currentTagName;if(curTn===$.TABLE||curTn===$.TBODY||curTn===$.TFOOT||curTn===$.THEAD||curTn===$.TR){p.pendingCharacterTokens=[];p.hasNonWhitespacePendingCharacterToken=false;p.originalInsertionMode=p.insertionMode;p.insertionMode=IN_TABLE_TEXT_MODE;p._processToken(token);}else{tokenInTable(p,token);}}function captionStartTagInTable(p,token){p.openElements.clearBackToTableContext();p.activeFormattingElements.insertMarker();p._insertElement(token,NS.HTML);p.insertionMode=IN_CAPTION_MODE;}function colgroupStartTagInTable(p,token){p.openElements.clearBackToTableContext();p._insertElement(token,NS.HTML);p.insertionMode=IN_COLUMN_GROUP_MODE;}function colStartTagInTable(p,token){p.openElements.clearBackToTableContext();p._insertFakeElement($.COLGROUP);p.insertionMode=IN_COLUMN_GROUP_MODE;p._processToken(token);}function tbodyStartTagInTable(p,token){p.openElements.clearBackToTableContext();p._insertElement(token,NS.HTML);p.insertionMode=IN_TABLE_BODY_MODE;}function tdStartTagInTable(p,token){p.openElements.clearBackToTableContext();p._insertFakeElement($.TBODY);p.insertionMode=IN_TABLE_BODY_MODE;p._processToken(token);}function tableStartTagInTable(p,token){if(p.openElements.hasInTableScope($.TABLE)){p.openElements.popUntilTagNamePopped($.TABLE);p._resetInsertionMode();p._processToken(token);}}function inputStartTagInTable(p,token){var inputType=Tokenizer.getTokenAttr(token,ATTRS.TYPE);if(inputType&&inputType.toLowerCase()===HIDDEN_INPUT_TYPE){p._appendElement(token,NS.HTML);}else{tokenInTable(p,token);}token.ackSelfClosing=true;}function formStartTagInTable(p,token){if(!p.formElement&&p.openElements.tmplCount===0){p._insertElement(token,NS.HTML);p.formElement=p.openElements.current;p.openElements.pop();}}function startTagInTable(p,token){var tn=token.tagName;switch(tn.length){case 2:if(tn===$.TD||tn===$.TH||tn===$.TR){tdStartTagInTable(p,token);}else{tokenInTable(p,token);}break;case 3:if(tn===$.COL){colStartTagInTable(p,token);}else{tokenInTable(p,token);}break;case 4:if(tn===$.FORM){formStartTagInTable(p,token);}else{tokenInTable(p,token);}break;case 5:if(tn===$.TABLE){tableStartTagInTable(p,token);}else if(tn===$.STYLE){startTagInHead(p,token);}else if(tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD){tbodyStartTagInTable(p,token);}else if(tn===$.INPUT){inputStartTagInTable(p,token);}else{tokenInTable(p,token);}break;case 6:if(tn===$.SCRIPT){startTagInHead(p,token);}else{tokenInTable(p,token);}break;case 7:if(tn===$.CAPTION){captionStartTagInTable(p,token);}else{tokenInTable(p,token);}break;case 8:if(tn===$.COLGROUP){colgroupStartTagInTable(p,token);}else if(tn===$.TEMPLATE){startTagInHead(p,token);}else{tokenInTable(p,token);}break;default:tokenInTable(p,token);}}function endTagInTable(p,token){var tn=token.tagName;if(tn===$.TABLE){if(p.openElements.hasInTableScope($.TABLE)){p.openElements.popUntilTagNamePopped($.TABLE);p._resetInsertionMode();}}else if(tn===$.TEMPLATE){endTagInHead(p,token);}else if(tn!==$.BODY&&tn!==$.CAPTION&&tn!==$.COL&&tn!==$.COLGROUP&&tn!==$.HTML&&tn!==$.TBODY&&tn!==$.TD&&tn!==$.TFOOT&&tn!==$.TH&&tn!==$.THEAD&&tn!==$.TR){tokenInTable(p,token);}}function tokenInTable(p,token){var savedFosterParentingState=p.fosterParentingEnabled;p.fosterParentingEnabled=true;p._processTokenInBodyMode(token);p.fosterParentingEnabled=savedFosterParentingState;}// The "in table text" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInTableText(p,token){p.pendingCharacterTokens.push(token);}function characterInTableText(p,token){p.pendingCharacterTokens.push(token);p.hasNonWhitespacePendingCharacterToken=true;}function tokenInTableText(p,token){var i=0;if(p.hasNonWhitespacePendingCharacterToken){for(;i<p.pendingCharacterTokens.length;i++){tokenInTable(p,p.pendingCharacterTokens[i]);}}else{for(;i<p.pendingCharacterTokens.length;i++){p._insertCharacters(p.pendingCharacterTokens[i]);}}p.insertionMode=p.originalInsertionMode;p._processToken(token);}// The "in caption" insertion mode
//------------------------------------------------------------------
function startTagInCaption(p,token){var tn=token.tagName;if(tn===$.CAPTION||tn===$.COL||tn===$.COLGROUP||tn===$.TBODY||tn===$.TD||tn===$.TFOOT||tn===$.TH||tn===$.THEAD||tn===$.TR){if(p.openElements.hasInTableScope($.CAPTION)){p.openElements.generateImpliedEndTags();p.openElements.popUntilTagNamePopped($.CAPTION);p.activeFormattingElements.clearToLastMarker();p.insertionMode=IN_TABLE_MODE;p._processToken(token);}}else{startTagInBody(p,token);}}function endTagInCaption(p,token){var tn=token.tagName;if(tn===$.CAPTION||tn===$.TABLE){if(p.openElements.hasInTableScope($.CAPTION)){p.openElements.generateImpliedEndTags();p.openElements.popUntilTagNamePopped($.CAPTION);p.activeFormattingElements.clearToLastMarker();p.insertionMode=IN_TABLE_MODE;if(tn===$.TABLE){p._processToken(token);}}}else if(tn!==$.BODY&&tn!==$.COL&&tn!==$.COLGROUP&&tn!==$.HTML&&tn!==$.TBODY&&tn!==$.TD&&tn!==$.TFOOT&&tn!==$.TH&&tn!==$.THEAD&&tn!==$.TR){endTagInBody(p,token);}}// The "in column group" insertion mode
//------------------------------------------------------------------
function startTagInColumnGroup(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.COL){p._appendElement(token,NS.HTML);token.ackSelfClosing=true;}else if(tn===$.TEMPLATE){startTagInHead(p,token);}else{tokenInColumnGroup(p,token);}}function endTagInColumnGroup(p,token){var tn=token.tagName;if(tn===$.COLGROUP){if(p.openElements.currentTagName===$.COLGROUP){p.openElements.pop();p.insertionMode=IN_TABLE_MODE;}}else if(tn===$.TEMPLATE){endTagInHead(p,token);}else if(tn!==$.COL){tokenInColumnGroup(p,token);}}function tokenInColumnGroup(p,token){if(p.openElements.currentTagName===$.COLGROUP){p.openElements.pop();p.insertionMode=IN_TABLE_MODE;p._processToken(token);}}// The "in table body" insertion mode
//------------------------------------------------------------------
function startTagInTableBody(p,token){var tn=token.tagName;if(tn===$.TR){p.openElements.clearBackToTableBodyContext();p._insertElement(token,NS.HTML);p.insertionMode=IN_ROW_MODE;}else if(tn===$.TH||tn===$.TD){p.openElements.clearBackToTableBodyContext();p._insertFakeElement($.TR);p.insertionMode=IN_ROW_MODE;p._processToken(token);}else if(tn===$.CAPTION||tn===$.COL||tn===$.COLGROUP||tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD){if(p.openElements.hasTableBodyContextInTableScope()){p.openElements.clearBackToTableBodyContext();p.openElements.pop();p.insertionMode=IN_TABLE_MODE;p._processToken(token);}}else{startTagInTable(p,token);}}function endTagInTableBody(p,token){var tn=token.tagName;if(tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD){if(p.openElements.hasInTableScope(tn)){p.openElements.clearBackToTableBodyContext();p.openElements.pop();p.insertionMode=IN_TABLE_MODE;}}else if(tn===$.TABLE){if(p.openElements.hasTableBodyContextInTableScope()){p.openElements.clearBackToTableBodyContext();p.openElements.pop();p.insertionMode=IN_TABLE_MODE;p._processToken(token);}}else if(tn!==$.BODY&&tn!==$.CAPTION&&tn!==$.COL&&tn!==$.COLGROUP||tn!==$.HTML&&tn!==$.TD&&tn!==$.TH&&tn!==$.TR){endTagInTable(p,token);}}// The "in row" insertion mode
//------------------------------------------------------------------
function startTagInRow(p,token){var tn=token.tagName;if(tn===$.TH||tn===$.TD){p.openElements.clearBackToTableRowContext();p._insertElement(token,NS.HTML);p.insertionMode=IN_CELL_MODE;p.activeFormattingElements.insertMarker();}else if(tn===$.CAPTION||tn===$.COL||tn===$.COLGROUP||tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD||tn===$.TR){if(p.openElements.hasInTableScope($.TR)){p.openElements.clearBackToTableRowContext();p.openElements.pop();p.insertionMode=IN_TABLE_BODY_MODE;p._processToken(token);}}else{startTagInTable(p,token);}}function endTagInRow(p,token){var tn=token.tagName;if(tn===$.TR){if(p.openElements.hasInTableScope($.TR)){p.openElements.clearBackToTableRowContext();p.openElements.pop();p.insertionMode=IN_TABLE_BODY_MODE;}}else if(tn===$.TABLE){if(p.openElements.hasInTableScope($.TR)){p.openElements.clearBackToTableRowContext();p.openElements.pop();p.insertionMode=IN_TABLE_BODY_MODE;p._processToken(token);}}else if(tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD){if(p.openElements.hasInTableScope(tn)||p.openElements.hasInTableScope($.TR)){p.openElements.clearBackToTableRowContext();p.openElements.pop();p.insertionMode=IN_TABLE_BODY_MODE;p._processToken(token);}}else if(tn!==$.BODY&&tn!==$.CAPTION&&tn!==$.COL&&tn!==$.COLGROUP||tn!==$.HTML&&tn!==$.TD&&tn!==$.TH){endTagInTable(p,token);}}// The "in cell" insertion mode
//------------------------------------------------------------------
function startTagInCell(p,token){var tn=token.tagName;if(tn===$.CAPTION||tn===$.COL||tn===$.COLGROUP||tn===$.TBODY||tn===$.TD||tn===$.TFOOT||tn===$.TH||tn===$.THEAD||tn===$.TR){if(p.openElements.hasInTableScope($.TD)||p.openElements.hasInTableScope($.TH)){p._closeTableCell();p._processToken(token);}}else{startTagInBody(p,token);}}function endTagInCell(p,token){var tn=token.tagName;if(tn===$.TD||tn===$.TH){if(p.openElements.hasInTableScope(tn)){p.openElements.generateImpliedEndTags();p.openElements.popUntilTagNamePopped(tn);p.activeFormattingElements.clearToLastMarker();p.insertionMode=IN_ROW_MODE;}}else if(tn===$.TABLE||tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD||tn===$.TR){if(p.openElements.hasInTableScope(tn)){p._closeTableCell();p._processToken(token);}}else if(tn!==$.BODY&&tn!==$.CAPTION&&tn!==$.COL&&tn!==$.COLGROUP&&tn!==$.HTML){endTagInBody(p,token);}}// The "in select" insertion mode
//------------------------------------------------------------------
function startTagInSelect(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.OPTION){if(p.openElements.currentTagName===$.OPTION){p.openElements.pop();}p._insertElement(token,NS.HTML);}else if(tn===$.OPTGROUP){if(p.openElements.currentTagName===$.OPTION){p.openElements.pop();}if(p.openElements.currentTagName===$.OPTGROUP){p.openElements.pop();}p._insertElement(token,NS.HTML);}else if(tn===$.INPUT||tn===$.KEYGEN||tn===$.TEXTAREA||tn===$.SELECT){if(p.openElements.hasInSelectScope($.SELECT)){p.openElements.popUntilTagNamePopped($.SELECT);p._resetInsertionMode();if(tn!==$.SELECT){p._processToken(token);}}}else if(tn===$.SCRIPT||tn===$.TEMPLATE){startTagInHead(p,token);}}function endTagInSelect(p,token){var tn=token.tagName;if(tn===$.OPTGROUP){var prevOpenElement=p.openElements.items[p.openElements.stackTop-1];var prevOpenElementTn=prevOpenElement&&p.treeAdapter.getTagName(prevOpenElement);if(p.openElements.currentTagName===$.OPTION&&prevOpenElementTn===$.OPTGROUP){p.openElements.pop();}if(p.openElements.currentTagName===$.OPTGROUP){p.openElements.pop();}}else if(tn===$.OPTION){if(p.openElements.currentTagName===$.OPTION){p.openElements.pop();}}else if(tn===$.SELECT&&p.openElements.hasInSelectScope($.SELECT)){p.openElements.popUntilTagNamePopped($.SELECT);p._resetInsertionMode();}else if(tn===$.TEMPLATE){endTagInHead(p,token);}}//12.2.5.4.17 The "in select in table" insertion mode
//------------------------------------------------------------------
function startTagInSelectInTable(p,token){var tn=token.tagName;if(tn===$.CAPTION||tn===$.TABLE||tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD||tn===$.TR||tn===$.TD||tn===$.TH){p.openElements.popUntilTagNamePopped($.SELECT);p._resetInsertionMode();p._processToken(token);}else{startTagInSelect(p,token);}}function endTagInSelectInTable(p,token){var tn=token.tagName;if(tn===$.CAPTION||tn===$.TABLE||tn===$.TBODY||tn===$.TFOOT||tn===$.THEAD||tn===$.TR||tn===$.TD||tn===$.TH){if(p.openElements.hasInTableScope(tn)){p.openElements.popUntilTagNamePopped($.SELECT);p._resetInsertionMode();p._processToken(token);}}else{endTagInSelect(p,token);}}// The "in template" insertion mode
//------------------------------------------------------------------
function startTagInTemplate(p,token){var tn=token.tagName;if(tn===$.BASE||tn===$.BASEFONT||tn===$.BGSOUND||tn===$.LINK||tn===$.META||tn===$.NOFRAMES||tn===$.SCRIPT||tn===$.STYLE||tn===$.TEMPLATE||tn===$.TITLE){startTagInHead(p,token);}else{var newInsertionMode=TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn]||IN_BODY_MODE;p._popTmplInsertionMode();p._pushTmplInsertionMode(newInsertionMode);p.insertionMode=newInsertionMode;p._processToken(token);}}function endTagInTemplate(p,token){if(token.tagName===$.TEMPLATE){endTagInHead(p,token);}}function eofInTemplate(p,token){if(p.openElements.tmplCount>0){p.openElements.popUntilTagNamePopped($.TEMPLATE);p.activeFormattingElements.clearToLastMarker();p._popTmplInsertionMode();p._resetInsertionMode();p._processToken(token);}else{p.stopped=true;}}// The "after body" insertion mode
//------------------------------------------------------------------
function startTagAfterBody(p,token){if(token.tagName===$.HTML){startTagInBody(p,token);}else{tokenAfterBody(p,token);}}function endTagAfterBody(p,token){if(token.tagName===$.HTML){if(!p.fragmentContext){p.insertionMode=AFTER_AFTER_BODY_MODE;}}else{tokenAfterBody(p,token);}}function tokenAfterBody(p,token){p.insertionMode=IN_BODY_MODE;p._processToken(token);}// The "in frameset" insertion mode
//------------------------------------------------------------------
function startTagInFrameset(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.FRAMESET){p._insertElement(token,NS.HTML);}else if(tn===$.FRAME){p._appendElement(token,NS.HTML);token.ackSelfClosing=true;}else if(tn===$.NOFRAMES){startTagInHead(p,token);}}function endTagInFrameset(p,token){if(token.tagName===$.FRAMESET&&!p.openElements.isRootHtmlElementCurrent()){p.openElements.pop();if(!p.fragmentContext&&p.openElements.currentTagName!==$.FRAMESET){p.insertionMode=AFTER_FRAMESET_MODE;}}}// The "after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterFrameset(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.NOFRAMES){startTagInHead(p,token);}}function endTagAfterFrameset(p,token){if(token.tagName===$.HTML){p.insertionMode=AFTER_AFTER_FRAMESET_MODE;}}// The "after after body" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterBody(p,token){if(token.tagName===$.HTML){startTagInBody(p,token);}else{tokenAfterAfterBody(p,token);}}function tokenAfterAfterBody(p,token){p.insertionMode=IN_BODY_MODE;p._processToken(token);}// The "after after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterFrameset(p,token){var tn=token.tagName;if(tn===$.HTML){startTagInBody(p,token);}else if(tn===$.NOFRAMES){startTagInHead(p,token);}}// The rules for parsing tokens in foreign content
//------------------------------------------------------------------
function nullCharacterInForeignContent(p,token){token.chars=unicode.REPLACEMENT_CHARACTER;p._insertCharacters(token);}function characterInForeignContent(p,token){p._insertCharacters(token);p.framesetOk=false;}function startTagInForeignContent(p,token){if(foreignContent.causesExit(token)&&!p.fragmentContext){while(p.treeAdapter.getNamespaceURI(p.openElements.current)!==NS.HTML&&!p._isIntegrationPoint(p.openElements.current)){p.openElements.pop();}p._processToken(token);}else{var current=p._getAdjustedCurrentElement();var currentNs=p.treeAdapter.getNamespaceURI(current);if(currentNs===NS.MATHML){foreignContent.adjustTokenMathMLAttrs(token);}else if(currentNs===NS.SVG){foreignContent.adjustTokenSVGTagName(token);foreignContent.adjustTokenSVGAttrs(token);}foreignContent.adjustTokenXMLAttrs(token);if(token.selfClosing){p._appendElement(token,currentNs);}else{p._insertElement(token,currentNs);}token.ackSelfClosing=true;}}function endTagInForeignContent(p,token){for(var i=p.openElements.stackTop;i>0;i--){var _element8=p.openElements.items[i];if(p.treeAdapter.getNamespaceURI(_element8)===NS.HTML){p._processToken(token);break;}if(p.treeAdapter.getTagName(_element8).toLowerCase()===token.tagName){p.openElements.popUntilElementPopped(_element8);break;}}}/**
       * @typedef {import('hast').Properties} Properties
       * @typedef {import('hast').Element} Element
       */var search=/[#.]/g;/**
       * Create a hast element from a simple CSS selector.
       *
       * @param selector A simple CSS selector.
       *   Can contain a tag-name (`foo`), classes (`.bar`), and an ID (`#baz`).
       *   Multiple classes are allowed.
       *   Uses the last ID if multiple IDs are found.
       * @param [defaultTagName='div'] Tag name to use if `selector` does not specify one.
       */var parseSelector=/**
         * @type {(
         *  <Selector extends string, DefaultTagName extends string = 'div'>(selector?: Selector, defaultTagName?: DefaultTagName) => Element & {tagName: import('./extract.js').ExtractTagName<Selector, DefaultTagName>}
         * )}
         */ /**
           * @param {string} [selector]
           * @param {string} [defaultTagName='div']
           * @returns {Element}
           */function parseSelector(selector){var defaultTagName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'div';var value=selector||'';/** @type {Properties} */var props={};var start=0;/** @type {string} */var subvalue;/** @type {string} */var previous;/** @type {RegExpMatchArray} */var match;while(start<value.length){search.lastIndex=start;match=search.exec(value);subvalue=value.slice(start,match?match.index:value.length);if(subvalue){if(!previous){defaultTagName=subvalue;}else if(previous==='#'){props.id=subvalue;}else if(Array.isArray(props.className)){props.className.push(subvalue);}else{props.className=[subvalue];}start+=subvalue.length;}if(match){previous=match[0];start++;}}return{type:'element',tagName:defaultTagName,properties:props,children:[]};};/**
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Properties} Properties
       * @typedef {Root['children'][number]} Child
       * @typedef {Child|Root} Node
       * @typedef {import('property-information').Info} Info
       * @typedef {import('property-information').Schema} Schema
       *
       * @typedef {Root|Element} HResult
       * @typedef {string|number} HStyleValue
       * @typedef {Object.<string, HStyleValue>} HStyle
       * @typedef {string|number|boolean|null|undefined} HPrimitiveValue
       * @typedef {Array.<string|number>} HArrayValue
       * @typedef {HPrimitiveValue|HArrayValue} HPropertyValue
       * @typedef {{[property: string]: HPropertyValue|HStyle}} HProperties
       *
       * @typedef {string|number|null|undefined} HPrimitiveChild
       * @typedef {Array.<Node|HPrimitiveChild>} HArrayChild
       * @typedef {Node|HPrimitiveChild|HArrayChild} HChild
       */var buttonTypes=new Set(['menu','submit','reset','button']);var own$6={}.hasOwnProperty;/**
       * @param {Schema} schema
       * @param {string} defaultTagName
       * @param {Array.<string>} [caseSensitive]
       */function core$1(schema,defaultTagName,caseSensitive){var adjust=caseSensitive&&createAdjustMap(caseSensitive);var h=/**
           * @type {{
           *   (): Root
           *   (selector: null|undefined, ...children: HChild[]): Root
           *   (selector: string, properties?: HProperties, ...children: HChild[]): Element
           *   (selector: string, ...children: HChild[]): Element
           * }}
           */ /**
             * Hyperscript compatible DSL for creating virtual hast trees.
             *
             * @param {string|null} [selector]
             * @param {HProperties|HChild} [properties]
             * @param {HChild[]} children
             * @returns {HResult}
             */function h(selector,properties){var index=-1;/** @type {HResult} */var node;for(var _len9=arguments.length,children=new Array(_len9>2?_len9-2:0),_key9=2;_key9<_len9;_key9++){children[_key9-2]=arguments[_key9];}if(selector===undefined||selector===null){node={type:'root',children:[]};// @ts-expect-error Properties are not supported for roots.
children.unshift(properties);}else{node=parseSelector(selector,defaultTagName);// Normalize the name.
node.tagName=node.tagName.toLowerCase();if(adjust&&own$6.call(adjust,node.tagName)){node.tagName=adjust[node.tagName];}// Handle props.
if(isProperties(properties,node.tagName)){/** @type {string} */var key;for(key in properties){if(own$6.call(properties,key)){// @ts-expect-error `node.properties` is set.
addProperty(schema,node.properties,key,properties[key]);}}}else{children.unshift(properties);}}// Handle children.
while(++index<children.length){addChild(node.children,children[index]);}if(node.type==='element'&&node.tagName==='template'){node.content={type:'root',children:node.children};node.children=[];}return node;};return h;}/**
       * @param {HProperties|HChild} value
       * @param {string} name
       * @returns {value is HProperties}
       */function isProperties(value,name){if(value===null||value===undefined||_typeof(value)!=='object'||Array.isArray(value)){return false;}if(name==='input'||!value.type||typeof value.type!=='string'){return true;}if('children'in value&&Array.isArray(value.children)){return false;}if(name==='button'){return buttonTypes.has(value.type.toLowerCase());}return!('value'in value);}/**
       * @param {Schema} schema
       * @param {Properties} properties
       * @param {string} key
       * @param {HStyle|HPropertyValue} value
       * @returns {void}
       */function addProperty(schema,properties,key,value){var info=find(schema,key);var index=-1;/** @type {HPropertyValue} */var result;// Ignore nullish and NaN values.
if(value===undefined||value===null)return;if(typeof value==='number'){// Ignore NaN.
if(Number.isNaN(value))return;result=value;}// Booleans.
else if(typeof value==='boolean'){result=value;}// Handle list values.
else if(typeof value==='string'){if(info.spaceSeparated){result=parse$2(value);}else if(info.commaSeparated){result=parse$1(value);}else if(info.commaOrSpaceSeparated){result=parse$2(parse$1(value).join(' '));}else{result=parsePrimitive(info,info.property,value);}}else if(Array.isArray(value)){result=value.concat();}else{result=info.property==='style'?style(value):String(value);}if(Array.isArray(result)){/** @type {Array.<string|number>} */var finalResult=[];while(++index<result.length){// @ts-expect-error Assume no booleans in array.
finalResult[index]=parsePrimitive(info,info.property,result[index]);}result=finalResult;}// Class names (which can be added both on the `selector` and here).
if(info.property==='className'&&Array.isArray(properties.className)){// @ts-expect-error Assume no booleans in `className`.
result=properties.className.concat(result);}properties[info.property]=result;}/**
       * @param {Array.<Child>} nodes
       * @param {HChild} value
       * @returns {void}
       */function addChild(nodes,value){var index=-1;if(value===undefined||value===null);else if(typeof value==='string'||typeof value==='number'){nodes.push({type:'text',value:String(value)});}else if(Array.isArray(value)){while(++index<value.length){addChild(nodes,value[index]);}}else if(_typeof(value)==='object'&&'type'in value){if(value.type==='root'){addChild(nodes,value.children);}else{nodes.push(value);}}else{throw new Error('Expected node, nodes, or string, got `'+value+'`');}}/**
       * Parse a single primitives.
       *
       * @param {Info} info
       * @param {string} name
       * @param {HPrimitiveValue} value
       * @returns {HPrimitiveValue}
       */function parsePrimitive(info,name,value){if(typeof value==='string'){if(info.number&&value&&!Number.isNaN(Number(value))){return Number(value);}if((info.boolean||info.overloadedBoolean)&&(value===''||normalize(value)===normalize(name))){return true;}}return value;}/**
       * @param {HStyle} value
       * @returns {string}
       */function style(value){/** @type {Array.<string>} */var result=[];/** @type {string} */var key;for(key in value){if(own$6.call(value,key)){result.push([key,value[key]].join(': '));}}return result.join('; ');}/**
       * @param {Array.<string>} values
       * @returns {Object.<string, string>}
       */function createAdjustMap(values){/** @type {Object.<string, string>} */var result={};var index=-1;while(++index<values.length){result[values[index].toLowerCase()]=values[index];}return result;}/**
       * @typedef {import('./core.js').HChild} Child Acceptable child value
       * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
       *
       * @typedef {import('./jsx-classic').Element} h.JSX.Element
       * @typedef {import('./jsx-classic').IntrinsicAttributes} h.JSX.IntrinsicAttributes
       * @typedef {import('./jsx-classic').IntrinsicElements} h.JSX.IntrinsicElements
       * @typedef {import('./jsx-classic').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
       */var h=core$1(html$1,'div');var svgCaseSensitiveTagNames=['altGlyph','altGlyphDef','altGlyphItem','animateColor','animateMotion','animateTransform','clipPath','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feDropShadow','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','foreignObject','glyphRef','linearGradient','radialGradient','solidColor','textArea','textPath'];/**
       * @typedef {import('./core.js').HChild} Child Acceptable child value
       * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
       *
       * @typedef {import('./jsx-classic').Element} s.JSX.Element
       * @typedef {import('./jsx-classic').IntrinsicAttributes} s.JSX.IntrinsicAttributes
       * @typedef {import('./jsx-classic').IntrinsicElements} s.JSX.IntrinsicElements
       * @typedef {import('./jsx-classic').ElementChildrenAttribute} s.JSX.ElementChildrenAttribute
       */var s=core$1(svg,'g',svgCaseSensitiveTagNames);/**
       * @typedef {import('unist').Point} Point
       * @typedef {import('vfile').VFile} VFile
       *
       * @typedef {Pick<Point, 'line'|'column'>} PositionalPoint
       * @typedef {Required<Point>} FullPoint
       * @typedef {NonNullable<Point['offset']>} Offset
       */ /**
       * Get transform functions for the given `document`.
       *
       * @param {string|Uint8Array|VFile} file
       */function location(file){var value=String(file);/** @type {Array.<number>} */var indices=[];var search=/\r?\n|\r/g;while(search.test(value)){indices.push(search.lastIndex);}indices.push(value.length+1);return{toPoint:toPoint,toOffset:toOffset};/**
         * Get the line and column-based `point` for `offset` in the bound indices.
         * Returns a point with `undefined` values when given invalid or out of bounds
         * input.
         *
         * @param {Offset} offset
         * @returns {FullPoint}
         */function toPoint(offset){var index=-1;if(offset>-1&&offset<indices[indices.length-1]){while(++index<indices.length){if(indices[index]>offset){return{line:index+1,column:offset-(indices[index-1]||0)+1,offset:offset};}}}return{line:undefined,column:undefined,offset:undefined};}/**
         * Get the `offset` for a line and column-based `point` in the bound indices.
         * Returns `-1` when given invalid or out of bounds input.
         *
         * @param {PositionalPoint} point
         * @returns {Offset}
         */function toOffset(point){var line=point&&point.line;var column=point&&point.column;/** @type {number} */var offset;if(typeof line==='number'&&typeof column==='number'&&!Number.isNaN(line)&&!Number.isNaN(column)&&line-1 in indices){offset=(indices[line-2]||0)+column-1||0;}return offset>-1&&offset<indices[indices.length-1]?offset:-1;}}/**
       * Map of web namespaces.
       *
       * @type {Record<string, string>}
       */var webNamespaces={html:'http://www.w3.org/1999/xhtml',mathml:'http://www.w3.org/1998/Math/MathML',svg:'http://www.w3.org/2000/svg',xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace',xmlns:'http://www.w3.org/2000/xmlns/'};/**
       * @typedef {import('vfile').VFile} VFile
       * @typedef {import('property-information').Schema} Schema
       * @typedef {import('unist').Position} Position
       * @typedef {import('unist').Point} Point
       * @typedef {import('hast').Parent} Parent
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').Text} Text
       * @typedef {import('hast').Comment} Comment
       * @typedef {import('hast').DocType} Doctype
       * @typedef {Parent['children'][number]} Child
       * @typedef {Element['children'][number]} ElementChild
       * @typedef {Child|Root} Node
       * @typedef {import('parse5').Document} P5Document
       * @typedef {import('parse5').DocumentType} P5Doctype
       * @typedef {import('parse5').CommentNode} P5Comment
       * @typedef {import('parse5').TextNode} P5Text
       * @typedef {import('parse5').Element} P5Element
       * @typedef {import('parse5').ElementLocation} P5ElementLocation
       * @typedef {import('parse5').Location} P5Location
       * @typedef {import('parse5').Attribute} P5Attribute
       * @typedef {import('parse5').Node} P5Node
       *
       * @typedef {'html'|'svg'} Space
       *
       * @callback Handler
       * @param {Context} ctx
       * @param {P5Node} node
       * @param {Array.<Child>} [children]
       * @returns {Node}
       *
       * @typedef Options
       * @property {Space} [space='html'] Whether the root of the tree is in the `'html'` or `'svg'` space. If an element in with the SVG namespace is found in `ast`, `fromParse5` automatically switches to the SVG space when entering the element, and switches back when leaving
       * @property {VFile} [file] `VFile`, used to add positional information to nodes. If given, the file should have the original HTML source as its contents
       * @property {boolean} [verbose=false] Whether to add extra positional information about starting tags, closing tags, and attributes to elements. Note: not used without `file`
       *
       * @typedef Context
       * @property {Schema} schema
       * @property {VFile|undefined} file
       * @property {boolean|undefined} verbose
       * @property {boolean} location
       */var own$5={}.hasOwnProperty;// Handlers.
var map={'#document':root$2,'#document-fragment':root$2,'#text':text$2,'#comment':comment$1,'#documentType':doctype$1};/**
       * Transform Parse5’s AST to a hast tree.
       *
       * @param {P5Node} ast
       * @param {Options|VFile} [options]
       */function fromParse5(ast){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};/** @type {Options} */var settings;/** @type {VFile|undefined} */var file;if(isFile(options)){file=options;settings={};}else{file=options.file;settings=options;}return transform$1({schema:settings.space==='svg'?svg:html$1,file:file,verbose:settings.verbose,location:false},ast);}/**
       * Transform children.
       *
       * @param {Context} ctx
       * @param {P5Node} ast
       * @returns {Node}
       */function transform$1(ctx,ast){var schema=ctx.schema;/** @type {Handler} */ // @ts-expect-error: index is fine.
var fn=own$5.call(map,ast.nodeName)?map[ast.nodeName]:element$3;/** @type {Array.<Child>|undefined} */var children;// Element.
if('tagName'in ast){ctx.schema=ast.namespaceURI===webNamespaces.svg?svg:html$1;}if('childNodes'in ast){children=nodes(ctx,ast.childNodes);}var result=fn(ctx,ast,children);if('sourceCodeLocation'in ast&&ast.sourceCodeLocation&&ctx.file){// @ts-expect-error It’s fine.
var _position4=createLocation(ctx,result,ast.sourceCodeLocation);if(_position4){ctx.location=true;result.position=_position4;}}ctx.schema=schema;return result;}/**
       * Transform children.
       *
       * @param {Context} ctx
       * @param {Array.<P5Node>} children
       * @returns {Array.<Child>}
       */function nodes(ctx,children){var index=-1;/** @type {Array.<Child>} */var result=[];while(++index<children.length){// @ts-expect-error Assume no roots in children.
result[index]=transform$1(ctx,children[index]);}return result;}/**
       * Transform a document.
       * Stores `ast.quirksMode` in `node.data.quirksMode`.
       *
       * @type {Handler}
       * @param {P5Document} ast
       * @param {Array.<Child>} children
       * @returns {Root}
       */function root$2(ctx,ast,children){/** @type {Root} */var result={type:'root',children:children,data:{quirksMode:ast.mode==='quirks'||ast.mode==='limited-quirks'}};if(ctx.file&&ctx.location){var doc=String(ctx.file);var loc=location(doc);result.position={start:loc.toPoint(0),end:loc.toPoint(doc.length)};}return result;}/**
       * Transform a doctype.
       *
       * @type {Handler}
       * @returns {Doctype}
       */function doctype$1(){// @ts-expect-error Types are out of date.
return{type:'doctype'};}/**
       * Transform a text.
       *
       * @type {Handler}
       * @param {P5Text} ast
       * @returns {Text}
       */function text$2(_,ast){return{type:'text',value:ast.value};}/**
       * Transform a comment.
       *
       * @type {Handler}
       * @param {P5Comment} ast
       * @returns {Comment}
       */function comment$1(_,ast){return{type:'comment',value:ast.data};}/**
       * Transform an element.
       *
       * @type {Handler}
       * @param {P5Element} ast
       * @param {Array.<ElementChild>} children
       * @returns {Element}
       */function element$3(ctx,ast,children){var fn=ctx.schema.space==='svg'?s:h;var index=-1;/** @type {Object.<string, string>} */var props={};while(++index<ast.attrs.length){var attribute=ast.attrs[index];props[(attribute.prefix?attribute.prefix+':':'')+attribute.name]=attribute.value;}var result=fn(ast.tagName,props,children);if(result.tagName==='template'&&'content'in ast){var pos=ast.sourceCodeLocation;var _startTag=pos&&pos.startTag&&position(pos.startTag);var _endTag=pos&&pos.endTag&&position(pos.endTag);/** @type {Root} */ // @ts-expect-error Types are wrong.
var _content3=transform$1(ctx,ast.content);if(_startTag&&_endTag&&ctx.file){_content3.position={start:_startTag.end,end:_endTag.start};}result.content=_content3;}return result;}/**
       * Create clean positional information.
       *
       * @param {Context} ctx
       * @param {Node} node
       * @param {P5ElementLocation} location
       * @returns {Position|null}
       */function createLocation(ctx,node,location){var result=position(location);if(node.type==='element'){var tail=node.children[node.children.length-1];// Bug for unclosed with children.
// See: <https://github.com/inikulin/parse5/issues/109>.
if(result&&!location.endTag&&tail&&tail.position&&tail.position.end){result.end=Object.assign({},tail.position.end);}if(ctx.verbose){/** @type {Object.<string, Position|null>} */var props={};/** @type {string} */var key;for(key in location.attrs){if(own$5.call(location.attrs,key)){props[find(ctx.schema,key).property]=position(location.attrs[key]);}}node.data={position:{opening:position(location.startTag),closing:location.endTag?position(location.endTag):null,properties:props}};}}return result;}/**
       * @param {P5Location} loc
       * @returns {Position|null}
       */function position(loc){var start=point({line:loc.startLine,column:loc.startCol,offset:loc.startOffset});var end=point({line:loc.endLine,column:loc.endCol,offset:loc.endOffset});// @ts-expect-error `null` is fine.
return start||end?{start:start,end:end}:null;}/**
       * @param {Point} point
       * @returns {Point|null}
       */function point(point){return point.line&&point.column?point:null;}/**
       * @param {VFile|Options} value
       * @returns {value is VFile}
       */function isFile(value){return'messages'in value;}/**
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').Text} Text
       *
       * @typedef {import('unist-util-is').AssertPredicate<Element>} AssertElement
       * @typedef {import('unist-util-is').AssertPredicate<Text>} AssertText
       * @typedef {import('unist-util-is').AssertPredicate<Root>} AssertRoot
       *
       * @callback CreateElementLike
       * @param {string} name
       * @param {any} attributes
       * @param {Array.<string|any>} [children]
       * @returns {any}
       *
       * @typedef Context
       * @property {html|svg} schema
       * @property {string|null} prefix
       * @property {number} key
       * @property {boolean} react
       * @property {boolean} vue
       * @property {boolean} vdom
       * @property {boolean} hyperscript
       *
       * @typedef Options
       * @property {string|null} [prefix]
       * @property {'html'|'svg'} [space]
       */var ns=/** @type {Record<string, string>} */webNamespaces;var toReact=/** @type {Record<string, string>} */hastToReact;var own$4={}.hasOwnProperty;/** @type {AssertRoot} */ // @ts-expect-error it’s correct.
var root$1=convert('root');/** @type {AssertElement} */ // @ts-expect-error it’s correct.
var element$2=convert('element');/** @type {AssertText} */ // @ts-expect-error it’s correct.
var text$1=convert('text');/**
       * @template {CreateElementLike} H
       * @param {H} h
       * @param {Element|Root} tree
       * @param {string|boolean|Options} [options]
       * @returns {ReturnType<H>}
       */function toH(h,tree,options){if(typeof h!=='function'){throw new TypeError('h is not a function');}var r=react(h);var v=vue(h);var vd=vdom(h);/** @type {string|boolean|null|undefined} */var prefix;/** @type {Element} */var node;if(typeof options==='string'||typeof options==='boolean'){prefix=options;options={};}else{if(!options)options={};prefix=options.prefix;}if(root$1(tree)){// @ts-expect-error Allow `doctypes` in there, we’ll filter them out later.
node=tree.children.length===1&&element$2(tree.children[0])?tree.children[0]:{type:'element',tagName:'div',properties:{},children:tree.children};}else if(element$2(tree)){node=tree;}else{throw new Error(// @ts-expect-error runtime.
'Expected root or element, not `'+(tree&&tree.type||tree)+'`');}return transform(h,node,{schema:options.space==='svg'?svg:html$1,prefix:prefix===undefined||prefix===null?r||v||vd?'h-':null:typeof prefix==='string'?prefix:prefix?'h-':null,key:0,react:r,vue:v,vdom:vd,hyperscript:hyperscript(h)});}/**
       * Transform a hast node through a hyperscript interface to *anything*!
       *
       * @template {CreateElementLike} H
       * @param {H} h
       * @param {Element} node
       * @param {Context} ctx
       */function transform(h,node,ctx){var parentSchema=ctx.schema;var schema=parentSchema;var name=node.tagName;/** @type {Record<string, unknown>} */var attributes={};/** @type {Array.<ReturnType<H>|string>} */var nodes=[];var index=-1;/** @type {string} */var key;if(parentSchema.space==='html'&&name.toLowerCase()==='svg'){schema=svg;ctx.schema=schema;}for(key in node.properties){if(node.properties&&own$4.call(node.properties,key)){addAttribute(attributes,key,node.properties[key],ctx,name);}}if(ctx.vdom){if(schema.space==='html'){name=name.toUpperCase();}else if(schema.space){attributes.namespace=ns[schema.space];}}if(ctx.prefix){ctx.key++;attributes.key=ctx.prefix+ctx.key;}if(node.children){while(++index<node.children.length){var value=node.children[index];if(element$2(value)){nodes.push(transform(h,value,ctx));}else if(text$1(value)){nodes.push(value.value);}}}// Restore parent schema.
ctx.schema=parentSchema;// Ensure no React warnings are triggered for void elements having children
// passed in.
return nodes.length>0?h.call(node,name,attributes,nodes):h.call(node,name,attributes);}/**
       * @param {Record<string, unknown>} props
       * @param {string} prop
       * @param {unknown} value
       * @param {Context} ctx
       * @param {string} name
       */ // eslint-disable-next-line complexity, max-params
function addAttribute(props,prop,value,ctx,name){var info=find(ctx.schema,prop);/** @type {string|undefined} */var subprop;// Ignore nullish and `NaN` values.
// Ignore `false` and falsey known booleans for hyperlike DSLs.
if(value===undefined||value===null||typeof value==='number'&&Number.isNaN(value)||value===false&&(ctx.vue||ctx.vdom||ctx.hyperscript)||!value&&info.boolean&&(ctx.vue||ctx.vdom||ctx.hyperscript)){return;}if(Array.isArray(value)){// Accept `array`.
// Most props are space-separated.
value=info.commaSeparated?stringify(value):stringify$1(value);}// Treat `true` and truthy known booleans.
if(info.boolean&&ctx.hyperscript){value='';}// VDOM, Vue, and React accept `style` as object.
if(info.property==='style'&&typeof value==='string'&&(ctx.react||ctx.vue||ctx.vdom)){value=parseStyle(value,name);}if(ctx.vue){if(info.property!=='style')subprop='attrs';}else if(!info.mustUseProperty){if(ctx.vdom){if(info.property!=='style')subprop='attributes';}else if(ctx.hyperscript){subprop='attrs';}}if(subprop){props[subprop]=Object.assign(props[subprop]||{},_defineProperty({},info.attribute,value));}else if(info.space&&ctx.react){props[toReact[info.property]||info.property]=value;}else{props[info.attribute]=value;}}/**
       * Check if `h` is `react.createElement`.
       *
       * @param {CreateElementLike} h
       * @returns {boolean}
       */function react(h){/** @type {unknown} */var node=h('div',{});return Boolean(node&&(// @ts-expect-error Looks like a React node.
'_owner'in node||'_store'in node)&&(// @ts-expect-error Looks like a React node.
node.key===undefined||node.key===null));}/**
       * Check if `h` is `hyperscript`.
       *
       * @param {CreateElementLike} h
       * @returns {boolean}
       */function hyperscript(h){return'context'in h&&'cleanup'in h;}/**
       * Check if `h` is `virtual-dom/h`.
       *
       * @param {CreateElementLike} h
       * @returns {boolean}
       */function vdom(h){/** @type {unknown} */var node=h('div',{});// @ts-expect-error Looks like a vnode.
return node.type==='VirtualNode';}/**
       * Check if `h` is Vue.
       *
       * @param {CreateElementLike} h
       * @returns {boolean}
       */function vue(h){/** @type {unknown} */var node=h('div',{});// @ts-expect-error Looks like a Vue node.
return Boolean(node&&node.context&&node.context._isVue);}/**
       * @param {string} value
       * @param {string} tagName
       * @returns {Record<string, string>}
       */function parseStyle(value,tagName){/** @type {Record<string, string>} */var result={};try{styleToObject(value,function(name,value){if(name.slice(0,4)==='-ms-')name='ms-'+name.slice(4);result[name.replace(/-([a-z])/g,/**
                 * @param {string} _
                 * @param {string} $1
                 * @returns {string}
                 */function(_,$1){return $1.toUpperCase();})]=value;});}catch(error){error.message=tagName+'[style]'+error.message.slice('undefined'.length);throw error;}return result;}var own$3={}.hasOwnProperty;/**
       * @callback Handler
       * @param {...unknown} value
       * @return {unknown}
       *
       * @typedef {Record<string, Handler>} Handlers
       *
       * @typedef {Object} Options
       * @property {Handler} [unknown]
       * @property {Handler} [invalid]
       * @property {Handlers} [handlers]
       */ /**
       * Handle values based on a property.
       *
       * @param {string} key
       * @param {Options} [options]
       */function zwitch(key,options){var settings=options||{};/**
         * Handle one value.
         * Based on the bound `key`, a respective handler will be called.
         * If `value` is not an object, or doesn’t have a `key` property, the special
         * “invalid” handler will be called.
         * If `value` has an unknown `key`, the special “unknown” handler will be
         * called.
         *
         * All arguments, and the context object, are passed through to the handler,
         * and it’s result is returned.
         *
         * @param {...unknown} [value]
         * @this {unknown}
         * @returns {unknown}
         * @property {Handler} invalid
         * @property {Handler} unknown
         * @property {Handlers} handlers
         */function one(value){var fn=one.invalid;var handlers=one.handlers;if(value&&own$3.call(value,key)){fn=own$3.call(handlers,value[key])?handlers[value[key]]:one.unknown;}if(fn){return fn.apply(this,arguments);}}one.handlers=settings.handlers||{};one.invalid=settings.invalid;one.unknown=settings.unknown;return one;}/**
       * @typedef {import('parse5').Node} P5Node
       * @typedef {import('parse5').Document} P5Document
       * @typedef {import('parse5').DocumentFragment} P5Fragment
       * @typedef {import('parse5').DocumentType} P5Doctype
       * @typedef {import('parse5').CommentNode} P5Comment
       * @typedef {import('parse5').TextNode} P5Text
       * @typedef {import('parse5').Element} P5Element
       * @typedef {import('parse5').Attribute} P5Attribute
       * @typedef {import('parse5').ParentNode} P5Parent
       * @typedef {Exclude<P5Node, P5Document|P5Fragment>} P5Child
       * @typedef {import('property-information').Schema} Schema
       * @typedef {import('property-information').Info} Info
       * @typedef {'html'|'svg'} Space
       * @typedef {import('hast').Parent} Parent
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').DocType} Doctype
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Text} Text
       * @typedef {import('hast').Comment} Comment
       * @typedef {Parent['children'][number]} Child
       * @typedef {Child|Root} Node
       *
       * @callback Handle
       * @param {Node} node
       * @param {Schema} schema
       * @returns {P5Node}
       */var own$2={}.hasOwnProperty;var one=zwitch('type',{handlers:{root:root,element:element$1,text:text,comment:comment,doctype:doctype}});/**
       * Transform a tree from hast to Parse5’s AST.
       *
       * @param {Node} tree
       * @param {Space} [space='html']
       * @returns {P5Node}
       */function toParse5(tree,space){// @ts-ignore Types are wrong.
return one(tree,space==='svg'?svg:html$1);}/**
       * @type {Handle}
       * @param {Root} node
       * @returns {P5Document}
       */function root(node,schema){/** @type {P5Document} */var p5={nodeName:'#document',mode:(node.data||{}).quirksMode?'quirks':'no-quirks',childNodes:[]};// @ts-ignore Assume correct children.
p5.childNodes=all(node.children,p5,schema);return patch(node,p5);}/**
       * @type {Handle}
       * @param {Root} node
       * @returns {P5Fragment}
       */function fragment(node,schema){/** @type {P5Fragment} */var p5={nodeName:'#document-fragment',childNodes:[]};// @ts-ignore Assume correct children.
p5.childNodes=all(node.children,p5,schema);return patch(node,p5);}/**
       * @type {Handle}
       * @param {Doctype} node
       * @returns {P5Doctype}
       */function doctype(node){return patch(node,{nodeName:'#documentType',name:'html',publicId:'',systemId:'',parentNode:undefined});}/**
       * @type {Handle}
       * @param {Text} node
       * @returns {P5Text}
       */function text(node){return patch(node,{nodeName:'#text',value:node.value,parentNode:undefined});}/**
       * @type {Handle}
       * @param {Comment} node
       * @returns {P5Comment}
       */function comment(node){return patch(node,{nodeName:'#comment',data:node.value,parentNode:undefined});}/**
       * @type {Handle}
       * @param {Element} node
       * @returns {P5Element}
       */function element$1(node,schema){/** @type {Space} */ // @ts-ignore Assume space.
var space=schema.space;return toH(h,Object.assign({},node,{children:[]}),{space:space});/**
         * @param {string} name
         * @param {Object.<string, string|boolean|number>} attrs
         */function h(name,attrs){/** @type {Array.<P5Attribute>} */var values=[];/** @type {Info} */var info;/** @type {P5Attribute} */var value;/** @type {string} */var key;/** @type {number} */var index;/** @type {P5Element} */var p5;for(key in attrs){if(!own$2.call(attrs,key)||attrs[key]===false){continue;}info=find(schema,key);if(info.boolean&&!attrs[key]){continue;}value={name:key,value:attrs[key]===true?'':String(attrs[key])};if(info.space&&info.space!=='html'&&info.space!=='svg'){index=key.indexOf(':');if(index<0){value.prefix='';}else{value.name=key.slice(index+1);value.prefix=key.slice(0,index);}value.namespace=webNamespaces[info.space];}values.push(value);}if(schema.space==='html'&&node.tagName==='svg')schema=svg;p5=patch(node,{nodeName:name,tagName:name,attrs:values,namespaceURI:webNamespaces[schema.space],childNodes:[],parentNode:undefined});// @ts-ignore Assume correct children.
p5.childNodes=all(node.children,p5,schema);// @ts-ignore Types are wrong.
if(name==='template')p5.content=fragment(node.content,schema);return p5;}}/**
       * @param {Array.<Child>} children
       * @param {P5Parent} p5
       * @param {Schema} schema
       * @returns {Array.<P5Child>}
       */function all(children,p5,schema){var index=-1;/** @type {Array.<P5Child>} */var result=[];/** @type {P5Child} */var child;if(children){while(++index<children.length){// @ts-ignore Assume child.
child=one(children[index],schema);// @ts-ignore types are wrong.
child.parentNode=p5;result.push(child);}}return result;}/**
       * Patch specific properties.
       *
       * @template {P5Node} T
       * @param {Node} node
       * @param {T} p5
       * @returns {T}
       */function patch(node,p5){var position=node.position;if(position&&position.start&&position.end){// @ts-ignore Types are wrong.
p5.sourceCodeLocation={startLine:position.start.line,startCol:position.start.column,startOffset:position.start.offset,endLine:position.end.line,endCol:position.end.column,endOffset:position.end.offset};}return p5;}/**
       * List of HTML void tag names.
       *
       * @type {Array<string>}
       */var htmlVoidElements=['area','base','basefont','bgsound','br','col','command','embed','frame','hr','image','img','input','isindex','keygen','link','menuitem','meta','nextid','param','source','track','wbr'];/**
       * @typedef {import('vfile').VFile} VFile
       * @typedef {import('parse5').Document} P5Document
       * @typedef {import('parse5').DocumentFragment} P5Fragment
       * @typedef {Omit<import('parse5').Element, 'parentNode'>} P5Element
       * @typedef {import('parse5').Attribute} P5Attribute
       * @typedef {Omit<import('parse5').Location, 'startOffset' | 'endOffset'> & {startOffset: number|undefined, endOffset: number|undefined}} P5Location
       * @typedef {import('parse5').ParserOptions} P5ParserOptions
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').DocType} Doctype
       * @typedef {import('hast').Element} Element
       * @typedef {import('hast').Text} Text
       * @typedef {import('hast').Comment} Comment
       * @typedef {import('hast').Content} Content
       * @typedef {Root|Content} Node
       * @typedef {import('../complex-types').Raw} Raw
       *
       * @typedef {Omit<Comment, 'value'> & {value: {stitch: Node}}} Stitch
       *
       * @typedef Options
       * @property {Array.<string>} [passThrough]
       *   List of custom hast node types to pass through (keep) in hast.
       *   If the passed through nodes have children, those children are expected to
       *   be hast and will be handled.
       *
       * @typedef HiddenTokenizer
       * @property {Array.<HiddenLocationTracker>} __mixins
       *   Way too simple, but works for us.
       * @property {HiddenPreprocessor} preprocessor
       * @property {(value: string) => void} write
       * @property {() => number} _consume
       * @property {Array.<HiddenToken>} tokenQueue
       * @property {string} state
       * @property {string} returnState
       * @property {number} charRefCode
       * @property {Array.<number>} tempBuff
       * @property {Function} _flushCodePointsConsumedAsCharacterReference
       * @property {string} lastStartTagName
       * @property {number} consumedAfterSnapshot
       * @property {boolean} active
       * @property {HiddenToken|undefined} currentCharacterToken
       * @property {HiddenToken|undefined} currentToken
       * @property {unknown} currentAttr
       * @property {Function} NAMED_CHARACTER_REFERENCE_STATE
       * @property {Function} NUMERIC_CHARACTER_REFERENCE_END_STATE
       *
       * @typedef {Object.<string, unknown> & {location: P5Location}} HiddenToken
       *
       * @typedef HiddenPreprocessor
       * @property {string|undefined} html
       * @property {number} pos
       * @property {number} lastGapPos
       * @property {number} lastCharPos
       * @property {Array.<number>} gapStack
       * @property {boolean} skipNextNewLine
       * @property {boolean} lastChunkWritten
       * @property {boolean} endOfChunkHit
       *
       * @typedef HiddenLocationTracker
       * @property {P5Location|undefined} currentAttrLocation
       * @property {P5Location} ctLoc
       * @property {HiddenPosTracker} posTracker
       *
       * @typedef HiddenPosTracker
       * @property {boolean} isEol
       * @property {number} lineStartPos
       * @property {number} droppedBufferSize
       * @property {number} offset
       * @property {number} col
       * @property {number} line
       */var inTemplateMode='IN_TEMPLATE_MODE';var dataState='DATA_STATE';var characterToken='CHARACTER_TOKEN';var startTagToken='START_TAG_TOKEN';var endTagToken='END_TAG_TOKEN';var commentToken='COMMENT_TOKEN';var doctypeToken='DOCTYPE_TOKEN';/** @type {P5ParserOptions} */var parseOptions={sourceCodeLocationInfo:true,scriptingEnabled:false};/**
       * Given a hast tree and an optional vfile (for positional info), return a new
       * parsed-again hast tree.
       *
       * @param tree
       *   Original hast tree.
       * @param file
       *   Virtual file for positional info, optional.
       * @param options
       *   Configuration.
       */var raw=/**
         * @type {(
         *   ((tree: Node, file: VFile|undefined, options?: Options) => Node) &
         *   ((tree: Node, options?: Options) => Node)
         * )}
         */ /**
           * @param {Node} tree
           * @param {VFile} [file]
           * @param {Options} [options]
           */function raw(tree,file,options){var index=-1;var parser$1=new parser(parseOptions);var one=zwitch('type',{// @ts-expect-error: hush.
handlers:{root:root,element:element,text:text,comment:comment,doctype:doctype,raw:handleRaw},// @ts-expect-error: hush.
unknown:unknown});/** @type {boolean|undefined} */var stitches;/** @type {HiddenTokenizer|undefined} */var tokenizer;/** @type {HiddenPreprocessor|undefined} */var preprocessor;/** @type {HiddenPosTracker|undefined} */var posTracker;/** @type {HiddenLocationTracker|undefined} */var locationTracker;if(isOptions(file)){options=file;file=undefined;}if(options&&options.passThrough){while(++index<options.passThrough.length){// @ts-expect-error: hush.
one.handlers[options.passThrough[index]]=stitch;}}var result=fromParse5(documentMode(tree)?document():fragment(),file);if(stitches){visit$1(result,'comment',function(node,index,parent){var stitch=/** @type {Stitch} */ /** @type {unknown} */node;if(stitch.value.stitch&&parent!==null&&index!==null){// @ts-expect-error: assume the stitch is allowed.
parent.children[index]=stitch.value.stitch;return index;}});}// Unpack if possible and when not given a `root`.
if(tree.type!=='root'&&result.type==='root'&&result.children.length===1){return result.children[0];}return result;/**
             * @returns {P5Fragment}
             */function fragment(){/** @type {P5Element} */var context={nodeName:'template',tagName:'template',attrs:[],namespaceURI:webNamespaces.html,childNodes:[]};/** @type {P5Element} */var mock={nodeName:'documentmock',tagName:'documentmock',attrs:[],namespaceURI:webNamespaces.html,childNodes:[]};/** @type {P5Fragment} */var doc={nodeName:'#document-fragment',childNodes:[]};parser$1._bootstrap(mock,context);parser$1._pushTmplInsertionMode(inTemplateMode);parser$1._initTokenizerForFragmentParsing();parser$1._insertFakeRootElement();parser$1._resetInsertionMode();parser$1._findFormInFragmentContext();tokenizer=parser$1.tokenizer;/* c8 ignore next */if(!tokenizer)throw new Error('Expected `tokenizer`');preprocessor=tokenizer.preprocessor;locationTracker=tokenizer.__mixins[0];posTracker=locationTracker.posTracker;one(tree);parser$1._adoptNodes(mock.childNodes[0],doc);return doc;}/**
             * @returns {P5Document}
             */function document(){/** @type {P5Document} */var doc=parser$1.treeAdapter.createDocument();parser$1._bootstrap(doc,undefined);tokenizer=parser$1.tokenizer;/* c8 ignore next */if(!tokenizer)throw new Error('Expected `tokenizer`');preprocessor=tokenizer.preprocessor;locationTracker=tokenizer.__mixins[0];posTracker=locationTracker.posTracker;one(tree);return doc;}/**
             * @param {Content[]} nodes
             * @returns {void}
             */function all(nodes){var index=-1;/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */if(nodes){while(++index<nodes.length){one(nodes[index]);}}}/**
             * @param {Root} node
             * @returns {void}
             */function root(node){all(node.children);}/**
             * @param {Element} node
             * @returns {void}
             */function element(node){resetTokenizer();parser$1._processToken(startTag(node),webNamespaces.html);all(node.children);if(!htmlVoidElements.includes(node.tagName)){resetTokenizer();parser$1._processToken(endTag(node));}}/**
             * @param {Text} node
             * @returns {void}
             */function text(node){resetTokenizer();parser$1._processToken({type:characterToken,chars:node.value,location:createParse5Location(node)});}/**
             * @param {Doctype} node
             * @returns {void}
             */function doctype(node){resetTokenizer();parser$1._processToken({type:doctypeToken,name:'html',forceQuirks:false,publicId:'',systemId:'',location:createParse5Location(node)});}/**
             * @param {Comment|Stitch} node
             * @returns {void}
             */function comment(node){resetTokenizer();parser$1._processToken({type:commentToken,data:node.value,location:createParse5Location(node)});}/**
             * @param {Raw} node
             * @returns {void}
             */function handleRaw(node){var start=pointStart(node);var line=start.line||1;var column=start.column||1;var offset=start.offset||0;/* c8 ignore next 4 */if(!preprocessor)throw new Error('Expected `preprocessor`');if(!tokenizer)throw new Error('Expected `tokenizer`');if(!posTracker)throw new Error('Expected `posTracker`');if(!locationTracker)throw new Error('Expected `locationTracker`');// Reset preprocessor:
// See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/tokenizer/preprocessor.js>.
preprocessor.html=undefined;preprocessor.pos=-1;preprocessor.lastGapPos=-1;preprocessor.lastCharPos=-1;preprocessor.gapStack=[];preprocessor.skipNextNewLine=false;preprocessor.lastChunkWritten=false;preprocessor.endOfChunkHit=false;// Reset preprocessor mixin:
// See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/extensions/position-tracking/preprocessor-mixin.js>.
posTracker.isEol=false;posTracker.lineStartPos=-column+1;// Looks weird, but ensures we get correct positional info.
posTracker.droppedBufferSize=offset;posTracker.offset=0;posTracker.col=1;posTracker.line=line;// Reset location tracker:
// See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/extensions/location-info/tokenizer-mixin.js>.
locationTracker.currentAttrLocation=undefined;locationTracker.ctLoc=createParse5Location(node);// See the code for `parse` and `parseFragment`:
// See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/parser/index.js#L371>.
tokenizer.write(node.value);parser$1._runParsingLoop(null);// Character references hang, so if we ended there, we need to flush
// those too.
// We reset the preprocessor as if the document ends here.
// Then one single call to the relevant state does the trick, parse5
// consumes the whole token.
if(tokenizer.state==='NAMED_CHARACTER_REFERENCE_STATE'||tokenizer.state==='NUMERIC_CHARACTER_REFERENCE_END_STATE'){preprocessor.lastChunkWritten=true;tokenizer[tokenizer.state](tokenizer._consume());}// Process final characters if they’re still there after hibernating.
// Similar to:
// See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/extensions/location-info/tokenizer-mixin.js#L95>.
var token=tokenizer.currentCharacterToken;if(token){token.location.endLine=posTracker.line;token.location.endCol=posTracker.col+1;token.location.endOffset=posTracker.offset+1;parser$1._processToken(token);}}/**
             * @param {Node} node
             */function stitch(node){stitches=true;/** @type {Node} */var clone;// Recurse, because to somewhat handle `[<x>]</x>` (where `[]` denotes the
// passed through node).
if('children'in node){clone=_objectSpread(_objectSpread({},node),{},{children:raw({type:'root',children:node.children},file,options// @ts-expect-error Assume a given parent yields a parent.
).children});}else{clone=_objectSpread({},node);}// Hack: `value` is supposed to be a string, but as none of the tools
// (`parse5` or `hast-util-from-parse5`) looks at it, we can pass nodes
// through.
comment({type:'comment',value:{stitch:clone}});}function resetTokenizer(){/* c8 ignore next */if(!tokenizer)throw new Error('Expected `tokenizer`');// Reset tokenizer:
// See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/tokenizer/index.js#L218-L234>.
// Especially putting it back in the `data` state is useful: some elements,
// like textareas and iframes, change the state.
// See GH-7.
// But also if broken HTML is in `raw`, and then a correct element is given.
// See GH-11.
tokenizer.tokenQueue=[];tokenizer.state=dataState;tokenizer.returnState='';tokenizer.charRefCode=-1;tokenizer.tempBuff=[];tokenizer.lastStartTagName='';tokenizer.consumedAfterSnapshot=-1;tokenizer.active=false;tokenizer.currentCharacterToken=undefined;tokenizer.currentToken=undefined;tokenizer.currentAttr=undefined;}};/**
       * @param {Element} node
       * @returns {HiddenToken}
       */function startTag(node){/** @type {P5Location} */var location=Object.assign(createParse5Location(node));// @ts-expect-error extra positional info.
location.startTag=Object.assign({},location);// Untyped token.
return{type:startTagToken,tagName:node.tagName,selfClosing:false,attrs:attributes(node),location:location};}/**
       * @param {Element} node
       * @returns {Array.<P5Attribute>}
       */function attributes(node){return toParse5({tagName:node.tagName,type:'element',properties:node.properties,children:[]// @ts-expect-error Assume element.
}).attrs;}/**
       * @param {Element} node
       * @returns {HiddenToken}
       */function endTag(node){/** @type {P5Location} */var location=Object.assign(createParse5Location(node));// @ts-expect-error extra positional info.
location.startTag=Object.assign({},location);// Untyped token.
return{type:endTagToken,tagName:node.tagName,attrs:[],location:location};}/**
       * @param {Node} node
       */function unknown(node){throw new Error('Cannot compile `'+node.type+'` node');}/**
       * @param {Node} node
       * @returns {boolean}
       */function documentMode(node){var head=node.type==='root'?node.children[0]:node;return Boolean(head&&(head.type==='doctype'||head.type==='element'&&head.tagName==='html'));}/**
       * @param {Node|Stitch} node
       * @returns {P5Location}
       */function createParse5Location(node){var start=pointStart(node);var end=pointEnd(node);return{startLine:start.line,startCol:start.column,startOffset:start.offset,endLine:end.line,endCol:end.column,endOffset:end.offset};}/**
       * @param {VFile|Options|undefined} value
       * @return {value is Options}
       */function isOptions(value){return Boolean(value&&!('message'in value&&'messages'in value));}/**
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast-util-raw').Options} Options
       * @typedef {import('hast-util-raw')} DoNotTouchAsThisImportIncludesRawInTree
       */ /**
       * Plugin to parse the tree again (and raw nodes).
       * Keeping positional info OK.  🙌
       *
       * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}
       */function rehypeRaw(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(tree,file){// Assume that when a root was given, it’s also returned.
var result=/** @type {Root} */raw(tree,file,options);return result;};}var deepFreezeEs6={exports:{}};function deepFreeze(obj){if(obj instanceof Map){obj.clear=obj.delete=obj.set=function(){throw new Error('map is read-only');};}else if(obj instanceof Set){obj.add=obj.clear=obj.delete=function(){throw new Error('set is read-only');};}// Freeze self
Object.freeze(obj);Object.getOwnPropertyNames(obj).forEach(function(name){var prop=obj[name];// Freeze prop if it is an object
if(_typeof(prop)=='object'&&!Object.isFrozen(prop)){deepFreeze(prop);}});return obj;}deepFreezeEs6.exports=deepFreeze;deepFreezeEs6.exports.default=deepFreeze;var deepFreeze$1=deepFreezeEs6.exports;/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */ /** @typedef {import('highlight.js').CompiledMode} CompiledMode */ /** @implements CallbackResponse */var Response=/*#__PURE__*/function(){/**
         * @param {CompiledMode} mode
         */function Response(mode){_classCallCheck(this,Response);// eslint-disable-next-line no-undefined
if(mode.data===undefined)mode.data={};this.data=mode.data;this.isMatchIgnored=false;}_createClass(Response,[{key:"ignoreMatch",value:function ignoreMatch(){this.isMatchIgnored=true;}}]);return Response;}();/**
       * @param {string} value
       * @returns {string}
       */function escapeHTML(value){return value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;');}/**
       * performs a shallow merge of multiple objects into one
       *
       * @template T
       * @param {T} original
       * @param {Record<string,any>[]} objects
       * @returns {T} a single new object
       */function inherit$1(original){/** @type Record<string,any> */var result=Object.create(null);for(var key in original){result[key]=original[key];}for(var _len10=arguments.length,objects=new Array(_len10>1?_len10-1:0),_key10=1;_key10<_len10;_key10++){objects[_key10-1]=arguments[_key10];}objects.forEach(function(obj){for(var _key11 in obj){result[_key11]=obj[_key11];}});return(/** @type {T} */result);}/**
       * @typedef {object} Renderer
       * @property {(text: string) => void} addText
       * @property {(node: Node) => void} openNode
       * @property {(node: Node) => void} closeNode
       * @property {() => string} value
       */ /** @typedef {{kind?: string, sublanguage?: boolean}} Node */ /** @typedef {{walk: (r: Renderer) => void}} Tree */ /** */var SPAN_CLOSE='</span>';/**
       * Determines if a node needs to be wrapped in <span>
       *
       * @param {Node} node */var emitsWrappingTags=function emitsWrappingTags(node){return!!node.kind;};/**
       *
       * @param {string} name
       * @param {{prefix:string}} options
       */var expandScopeName=function expandScopeName(name,_ref2){var prefix=_ref2.prefix;if(name.includes(".")){var pieces=name.split(".");return["".concat(prefix).concat(pieces.shift())].concat(_toConsumableArray(pieces.map(function(x,i){return"".concat(x).concat("_".repeat(i+1));}))).join(" ");}return"".concat(prefix).concat(name);};/** @type {Renderer} */var HTMLRenderer=/*#__PURE__*/function(){/**
         * Creates a new HTMLRenderer
         *
         * @param {Tree} parseTree - the parse tree (must support `walk` API)
         * @param {{classPrefix: string}} options
         */function HTMLRenderer(parseTree,options){_classCallCheck(this,HTMLRenderer);this.buffer="";this.classPrefix=options.classPrefix;parseTree.walk(this);}/**
         * Adds texts to the output stream
         *
         * @param {string} text */_createClass(HTMLRenderer,[{key:"addText",value:function addText(text){this.buffer+=escapeHTML(text);}/**
         * Adds a node open to the output stream (if needed)
         *
         * @param {Node} node */},{key:"openNode",value:function openNode(node){if(!emitsWrappingTags(node))return;var scope=node.kind;if(node.sublanguage){scope="language-".concat(scope);}else{scope=expandScopeName(scope,{prefix:this.classPrefix});}this.span(scope);}/**
         * Adds a node close to the output stream (if needed)
         *
         * @param {Node} node */},{key:"closeNode",value:function closeNode(node){if(!emitsWrappingTags(node))return;this.buffer+=SPAN_CLOSE;}/**
         * returns the accumulated buffer
        */},{key:"value",value:function value(){return this.buffer;}// helpers
/**
         * Builds a span element
         *
         * @param {string} className */},{key:"span",value:function span(className){this.buffer+="<span class=\"".concat(className,"\">");}}]);return HTMLRenderer;}();/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */ /** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */ /** @typedef {import('highlight.js').Emitter} Emitter */ /**  */var TokenTree=/*#__PURE__*/function(){function TokenTree(){_classCallCheck(this,TokenTree);/** @type DataNode */this.rootNode={children:[]};this.stack=[this.rootNode];}_createClass(TokenTree,[{key:"top",get:function get(){return this.stack[this.stack.length-1];}},{key:"root",get:function get(){return this.rootNode;}/** @param {Node} node */},{key:"add",value:function add(node){this.top.children.push(node);}/** @param {string} kind */},{key:"openNode",value:function openNode(kind){/** @type Node */var node={kind:kind,children:[]};this.add(node);this.stack.push(node);}},{key:"closeNode",value:function closeNode(){if(this.stack.length>1){return this.stack.pop();}// eslint-disable-next-line no-undefined
return undefined;}},{key:"closeAllNodes",value:function closeAllNodes(){while(this.closeNode()){;}}},{key:"toJSON",value:function toJSON(){return JSON.stringify(this.rootNode,null,4);}/**
         * @typedef { import("./html_renderer").Renderer } Renderer
         * @param {Renderer} builder
         */},{key:"walk",value:function walk(builder){// this does not
return this.constructor._walk(builder,this.rootNode);// this works
// return TokenTree._walk(builder, this.rootNode);
}/**
         * @param {Renderer} builder
         * @param {Node} node
         */}],[{key:"_walk",value:function _walk(builder,node){var _this12=this;if(typeof node==="string"){builder.addText(node);}else if(node.children){builder.openNode(node);node.children.forEach(function(child){return _this12._walk(builder,child);});builder.closeNode(node);}return builder;}/**
         * @param {Node} node
         */},{key:"_collapse",value:function _collapse(node){if(typeof node==="string")return;if(!node.children)return;if(node.children.every(function(el){return typeof el==="string";})){// node.text = node.children.join("");
// delete node.children;
node.children=[node.children.join("")];}else{node.children.forEach(function(child){TokenTree._collapse(child);});}}}]);return TokenTree;}();/**
        Currently this is all private API, but this is the minimal API necessary
        that an Emitter must implement to fully support the parser.

        Minimal interface:

        - addKeyword(text, kind)
        - addText(text)
        - addSublanguage(emitter, subLanguageName)
        - finalize()
        - openNode(kind)
        - closeNode()
        - closeAllNodes()
        - toHTML()

      */ /**
       * @implements {Emitter}
       */var TokenTreeEmitter=/*#__PURE__*/function(_TokenTree){_inherits(TokenTreeEmitter,_TokenTree);var _super11=_createSuper(TokenTreeEmitter);/**
         * @param {*} options
         */function TokenTreeEmitter(options){var _this13;_classCallCheck(this,TokenTreeEmitter);_this13=_super11.call(this);_this13.options=options;return _this13;}/**
         * @param {string} text
         * @param {string} kind
         */_createClass(TokenTreeEmitter,[{key:"addKeyword",value:function addKeyword(text,kind){if(text===""){return;}this.openNode(kind);this.addText(text);this.closeNode();}/**
         * @param {string} text
         */},{key:"addText",value:function addText(text){if(text===""){return;}this.add(text);}/**
         * @param {Emitter & {root: DataNode}} emitter
         * @param {string} name
         */},{key:"addSublanguage",value:function addSublanguage(emitter,name){/** @type DataNode */var node=emitter.root;node.kind=name;node.sublanguage=true;this.add(node);}},{key:"toHTML",value:function toHTML(){var renderer=new HTMLRenderer(this,this.options);return renderer.value();}},{key:"finalize",value:function finalize(){return true;}}]);return TokenTreeEmitter;}(TokenTree);/**
       * @param {string} value
       * @returns {RegExp}
       * */ /**
       * @param {RegExp | string } re
       * @returns {string}
       */function source(re){if(!re)return null;if(typeof re==="string")return re;return re.source;}/**
       * @param {RegExp | string } re
       * @returns {string}
       */function lookahead(re){return concat('(?=',re,')');}/**
       * @param {RegExp | string } re
       * @returns {string}
       */function anyNumberOfTimes(re){return concat('(?:',re,')*');}/**
       * @param {RegExp | string } re
       * @returns {string}
       */function optional(re){return concat('(?:',re,')?');}/**
       * @param {...(RegExp | string) } args
       * @returns {string}
       */function concat(){for(var _len11=arguments.length,args=new Array(_len11),_key12=0;_key12<_len11;_key12++){args[_key12]=arguments[_key12];}var joined=args.map(function(x){return source(x);}).join("");return joined;}/**
       * @param { Array<string | RegExp | Object> } args
       * @returns {object}
       */function stripOptionsFromArgs(args){var opts=args[args.length-1];if(_typeof(opts)==='object'&&opts.constructor===Object){args.splice(args.length-1,1);return opts;}else{return{};}}/** @typedef { {capture?: boolean} } RegexEitherOptions */ /**
       * Any of the passed expresssions may match
       *
       * Creates a huge this | this | that | that match
       * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
       * @returns {string}
       */function either(){for(var _len12=arguments.length,args=new Array(_len12),_key13=0;_key13<_len12;_key13++){args[_key13]=arguments[_key13];}/** @type { object & {capture?: boolean} }  */var opts=stripOptionsFromArgs(args);var joined='('+(opts.capture?"":"?:")+args.map(function(x){return source(x);}).join("|")+")";return joined;}/**
       * @param {RegExp | string} re
       * @returns {number}
       */function countMatchGroups(re){return new RegExp(re.toString()+'|').exec('').length-1;}/**
       * Does lexeme start with a regular expression match at the beginning
       * @param {RegExp} re
       * @param {string} lexeme
       */function startsWith(re,lexeme){var match=re&&re.exec(lexeme);return match&&match.index===0;}// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
var BACKREF_RE=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
       * @param {(string | RegExp)[]} regexps
       * @param {{joinWith: string}} opts
       * @returns {string}
       */function _rewriteBackreferences(regexps,_ref3){var joinWith=_ref3.joinWith;var numCaptures=0;return regexps.map(function(regex){numCaptures+=1;var offset=numCaptures;var re=source(regex);var out='';while(re.length>0){var match=BACKREF_RE.exec(re);if(!match){out+=re;break;}out+=re.substring(0,match.index);re=re.substring(match.index+match[0].length);if(match[0][0]==='\\'&&match[1]){// Adjust the backreference.
out+='\\'+String(Number(match[1])+offset);}else{out+=match[0];if(match[0]==='('){numCaptures++;}}}return out;}).map(function(re){return"(".concat(re,")");}).join(joinWith);}/** @typedef {import('highlight.js').Mode} Mode */ /** @typedef {import('highlight.js').ModeCallback} ModeCallback */ // Common regexps
var MATCH_NOTHING_RE=/\b\B/;var IDENT_RE='[a-zA-Z]\\w*';var UNDERSCORE_IDENT_RE='[a-zA-Z_]\\w*';var NUMBER_RE='\\b\\d+(\\.\\d+)?';var C_NUMBER_RE='(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)';// 0x..., 0..., decimal, float
var BINARY_NUMBER_RE='\\b(0b[01]+)';// 0b...
var RE_STARTERS_RE='!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';/**
      * @param { Partial<Mode> & {binary?: string | RegExp} } opts
      */var SHEBANG=function SHEBANG(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var beginShebang=/^#![ ]*\//;if(opts.binary){opts.begin=concat(beginShebang,/.*\b/,opts.binary,/\b.*/);}return inherit$1({scope:'meta',begin:beginShebang,end:/$/,relevance:0,/** @type {ModeCallback} */"on:begin":function onBegin(m,resp){if(m.index!==0)resp.ignoreMatch();}},opts);};// Common modes
var BACKSLASH_ESCAPE={begin:'\\\\[\\s\\S]',relevance:0};var APOS_STRING_MODE={scope:'string',begin:'\'',end:'\'',illegal:'\\n',contains:[BACKSLASH_ESCAPE]};var QUOTE_STRING_MODE={scope:'string',begin:'"',end:'"',illegal:'\\n',contains:[BACKSLASH_ESCAPE]};var PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};/**
       * Creates a comment mode
       *
       * @param {string | RegExp} begin
       * @param {string | RegExp} end
       * @param {Mode | {}} [modeOptions]
       * @returns {Partial<Mode>}
       */var COMMENT=function COMMENT(begin,end){var modeOptions=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var mode=inherit$1({scope:'comment',begin:begin,end:end,contains:[]},modeOptions);mode.contains.push({scope:'doctag',// hack to avoid the space from being included. the space is necessary to
// match here to prevent the plain text rule below from gobbling up doctags
begin:'[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:true,relevance:0});var ENGLISH_WORD=either(// list of common 1 and 2 letter words in English
"I","a","is","so","us","to","at","if","in","it","on",// note: this is not an exhaustive list of contractions, just popular ones
/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,// contractions - can't we'd they're let's, etc
/[A-Za-z]+[-][a-z]+/,// `no-way`, etc.
/[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
);// looking like plain text, more likely to be a comment
mode.contains.push({// TODO: how to include ", (, ) without breaking grammars that use these for
// comment delimiters?
// begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
// ---
// this tries to find sequences of 3 english words in a row (without any
// "programming" type syntax) this gives us a strong signal that we've
// TRULY found a comment - vs perhaps scanning with the wrong language.
// It's possible to find something that LOOKS like the start of the
// comment - but then if there is no readable text - good chance it is a
// false match and not a comment.
//
// for a visual example please see:
// https://github.com/highlightjs/highlight.js/issues/2827
begin:concat(/[ ]+/,// necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
'(',ENGLISH_WORD,/[.]?[:]?([.][ ]|[ ])/,'){3}')// look for 3 words in a row
});return mode;};var C_LINE_COMMENT_MODE=COMMENT('//','$');var C_BLOCK_COMMENT_MODE=COMMENT('/\\*','\\*/');var HASH_COMMENT_MODE=COMMENT('#','$');var NUMBER_MODE={scope:'number',begin:NUMBER_RE,relevance:0};var C_NUMBER_MODE={scope:'number',begin:C_NUMBER_RE,relevance:0};var BINARY_NUMBER_MODE={scope:'number',begin:BINARY_NUMBER_RE,relevance:0};var REGEXP_MODE={// this outer rule makes sure we actually have a WHOLE regex and not simply
// an expression such as:
//
//     3 / something
//
// (which will then blow up when regex's `illegal` sees the newline)
begin:/(?=\/[^/\n]*\/)/,contains:[{scope:'regexp',begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[BACKSLASH_ESCAPE]}]}]};var TITLE_MODE={scope:'title',begin:IDENT_RE,relevance:0};var UNDERSCORE_TITLE_MODE={scope:'title',begin:UNDERSCORE_IDENT_RE,relevance:0};var METHOD_GUARD={// excludes method names from keyword processing
begin:'\\.\\s*'+UNDERSCORE_IDENT_RE,relevance:0};/**
       * Adds end same as begin mechanics to a mode
       *
       * Your mode must include at least a single () match group as that first match
       * group is what is used for comparison
       * @param {Partial<Mode>} mode
       */var END_SAME_AS_BEGIN=function END_SAME_AS_BEGIN(mode){return Object.assign(mode,{/** @type {ModeCallback} */'on:begin':function onBegin(m,resp){resp.data._beginMatch=m[1];},/** @type {ModeCallback} */'on:end':function onEnd(m,resp){if(resp.data._beginMatch!==m[1])resp.ignoreMatch();}});};var MODES=/*#__PURE__*/Object.freeze({__proto__:null,MATCH_NOTHING_RE:MATCH_NOTHING_RE,IDENT_RE:IDENT_RE,UNDERSCORE_IDENT_RE:UNDERSCORE_IDENT_RE,NUMBER_RE:NUMBER_RE,C_NUMBER_RE:C_NUMBER_RE,BINARY_NUMBER_RE:BINARY_NUMBER_RE,RE_STARTERS_RE:RE_STARTERS_RE,SHEBANG:SHEBANG,BACKSLASH_ESCAPE:BACKSLASH_ESCAPE,APOS_STRING_MODE:APOS_STRING_MODE,QUOTE_STRING_MODE:QUOTE_STRING_MODE,PHRASAL_WORDS_MODE:PHRASAL_WORDS_MODE,COMMENT:COMMENT,C_LINE_COMMENT_MODE:C_LINE_COMMENT_MODE,C_BLOCK_COMMENT_MODE:C_BLOCK_COMMENT_MODE,HASH_COMMENT_MODE:HASH_COMMENT_MODE,NUMBER_MODE:NUMBER_MODE,C_NUMBER_MODE:C_NUMBER_MODE,BINARY_NUMBER_MODE:BINARY_NUMBER_MODE,REGEXP_MODE:REGEXP_MODE,TITLE_MODE:TITLE_MODE,UNDERSCORE_TITLE_MODE:UNDERSCORE_TITLE_MODE,METHOD_GUARD:METHOD_GUARD,END_SAME_AS_BEGIN:END_SAME_AS_BEGIN});/**
      @typedef {import('highlight.js').CallbackResponse} CallbackResponse
      @typedef {import('highlight.js').CompilerExt} CompilerExt
      */ // Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833
// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.
// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.
// ------
// TODO: We need negative look-behind support to do this properly
/**
       * Skip a match if it has a preceding dot
       *
       * This is used for `beginKeywords` to prevent matching expressions such as
       * `bob.keyword.do()`. The mode compiler automatically wires this up as a
       * special _internal_ 'on:begin' callback for modes with `beginKeywords`
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */function skipIfHasPrecedingDot(match,response){var before=match.input[match.index-1];if(before==="."){response.ignoreMatch();}}/**
       *
       * @type {CompilerExt}
       */function scopeClassName(mode,_parent){// eslint-disable-next-line no-undefined
if(mode.className!==undefined){mode.scope=mode.className;delete mode.className;}}/**
       * `beginKeywords` syntactic sugar
       * @type {CompilerExt}
       */function beginKeywords(mode,parent){if(!parent)return;if(!mode.beginKeywords)return;// for languages with keywords that include non-word characters checking for
// a word boundary is not sufficient, so instead we check for a word boundary
// or whitespace - this does no harm in any case since our keyword engine
// doesn't allow spaces in keywords anyways and we still check for the boundary
// first
mode.begin='\\b('+mode.beginKeywords.split(' ').join('|')+')(?!\\.)(?=\\b|\\s)';mode.__beforeBegin=skipIfHasPrecedingDot;mode.keywords=mode.keywords||mode.beginKeywords;delete mode.beginKeywords;// prevents double relevance, the keywords themselves provide
// relevance, the mode doesn't need to double it
// eslint-disable-next-line no-undefined
if(mode.relevance===undefined)mode.relevance=0;}/**
       * Allow `illegal` to contain an array of illegal values
       * @type {CompilerExt}
       */function compileIllegal(mode,_parent){if(!Array.isArray(mode.illegal))return;mode.illegal=either.apply(void 0,_toConsumableArray(mode.illegal));}/**
       * `match` to match a single expression for readability
       * @type {CompilerExt}
       */function compileMatch(mode,_parent){if(!mode.match)return;if(mode.begin||mode.end)throw new Error("begin & end are not supported with match");mode.begin=mode.match;delete mode.match;}/**
       * provides the default 1 relevance to all modes
       * @type {CompilerExt}
       */function compileRelevance(mode,_parent){// eslint-disable-next-line no-undefined
if(mode.relevance===undefined)mode.relevance=1;}// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
var beforeMatchExt=function beforeMatchExt(mode,parent){if(!mode.beforeMatch)return;// starts conflicts with endsParent which we need to make sure the child
// rule is not matched multiple times
if(mode.starts)throw new Error("beforeMatch cannot be used with starts");var originalMode=Object.assign({},mode);Object.keys(mode).forEach(function(key){delete mode[key];});mode.keywords=originalMode.keywords;mode.begin=concat(originalMode.beforeMatch,lookahead(originalMode.begin));mode.starts={relevance:0,contains:[Object.assign(originalMode,{endsParent:true})]};mode.relevance=0;delete originalMode.beforeMatch;};// keywords that should have no default relevance value
var COMMON_KEYWORDS=['of','and','for','in','not','or','if','then','parent',// common variable name
'list',// common variable name
'value'// common variable name
];var DEFAULT_KEYWORD_SCOPE="keyword";/**
       * Given raw keywords from a language definition, compile them.
       *
       * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
       * @param {boolean} caseInsensitive
       */function compileKeywords(rawKeywords,caseInsensitive){var scopeName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_KEYWORD_SCOPE;/** @type KeywordDict */var compiledKeywords=Object.create(null);// input can be a string of keywords, an array of keywords, or a object with
// named keys representing scopeName (which can then point to a string or array)
if(typeof rawKeywords==='string'){compileList(scopeName,rawKeywords.split(" "));}else if(Array.isArray(rawKeywords)){compileList(scopeName,rawKeywords);}else{Object.keys(rawKeywords).forEach(function(scopeName){// collapse all our objects back into the parent object
Object.assign(compiledKeywords,compileKeywords(rawKeywords[scopeName],caseInsensitive,scopeName));});}return compiledKeywords;// ---
/**
         * Compiles an individual list of keywords
         *
         * Ex: "for if when while|5"
         *
         * @param {string} scopeName
         * @param {Array<string>} keywordList
         */function compileList(scopeName,keywordList){if(caseInsensitive){keywordList=keywordList.map(function(x){return x.toLowerCase();});}keywordList.forEach(function(keyword){var pair=keyword.split('|');compiledKeywords[pair[0]]=[scopeName,scoreForKeyword(pair[0],pair[1])];});}}/**
       * Returns the proper score for a given keyword
       *
       * Also takes into account comment keywords, which will be scored 0 UNLESS
       * another score has been manually assigned.
       * @param {string} keyword
       * @param {string} [providedScore]
       */function scoreForKeyword(keyword,providedScore){// manual scores always win over common keywords
// so you can force a score of 1 if you really insist
if(providedScore){return Number(providedScore);}return commonKeyword(keyword)?0:1;}/**
       * Determines if a given keyword is common or not
       *
       * @param {string} keyword */function commonKeyword(keyword){return COMMON_KEYWORDS.includes(keyword.toLowerCase());}/*

      For the reasoning behind this please see:
      https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

      */ /**
       * @type {Record<string, boolean>}
       */var seenDeprecations={};/**
       * @param {string} message
       */var error=function error(message){console.error(message);};/**
       * @param {string} message
       * @param {any} args
       */var warn=function warn(message){var _console;for(var _len13=arguments.length,args=new Array(_len13>1?_len13-1:0),_key14=1;_key14<_len13;_key14++){args[_key14-1]=arguments[_key14];}(_console=console).log.apply(_console,["WARN: ".concat(message)].concat(args));};/**
       * @param {string} version
       * @param {string} message
       */var deprecated=function deprecated(version,message){if(seenDeprecations["".concat(version,"/").concat(message)])return;console.log("Deprecated as of ".concat(version,". ").concat(message));seenDeprecations["".concat(version,"/").concat(message)]=true;};/* eslint-disable no-throw-literal */ /**
      @typedef {import('highlight.js').CompiledMode} CompiledMode
      */var MultiClassError=new Error();/**
       * Renumbers labeled scope names to account for additional inner match
       * groups that otherwise would break everything.
       *
       * Lets say we 3 match scopes:
       *
       *   { 1 => ..., 2 => ..., 3 => ... }
       *
       * So what we need is a clean match like this:
       *
       *   (a)(b)(c) => [ "a", "b", "c" ]
       *
       * But this falls apart with inner match groups:
       *
       * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
       *
       * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
       * What needs to happen is the numbers are remapped:
       *
       *   { 1 => ..., 2 => ..., 5 => ... }
       *
       * We also need to know that the ONLY groups that should be output
       * are 1, 2, and 5.  This function handles this behavior.
       *
       * @param {CompiledMode} mode
       * @param {Array<RegExp | string>} regexes
       * @param {{key: "beginScope"|"endScope"}} opts
       */function remapScopeNames(mode,regexes,_ref4){var key=_ref4.key;var offset=0;var scopeNames=mode[key];/** @type Record<number,boolean> */var emit={};/** @type Record<number,string> */var positions={};for(var i=1;i<=regexes.length;i++){positions[i+offset]=scopeNames[i];emit[i+offset]=true;offset+=countMatchGroups(regexes[i-1]);}// we use _emit to keep track of which match groups are "top-level" to avoid double
// output from inside match groups
mode[key]=positions;mode[key]._emit=emit;mode[key]._multi=true;}/**
       * @param {CompiledMode} mode
       */function beginMultiClass(mode){if(!Array.isArray(mode.begin))return;if(mode.skip||mode.excludeBegin||mode.returnBegin){error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");throw MultiClassError;}if(_typeof(mode.beginScope)!=="object"||mode.beginScope===null){error("beginScope must be object");throw MultiClassError;}remapScopeNames(mode,mode.begin,{key:"beginScope"});mode.begin=_rewriteBackreferences(mode.begin,{joinWith:""});}/**
       * @param {CompiledMode} mode
       */function endMultiClass(mode){if(!Array.isArray(mode.end))return;if(mode.skip||mode.excludeEnd||mode.returnEnd){error("skip, excludeEnd, returnEnd not compatible with endScope: {}");throw MultiClassError;}if(_typeof(mode.endScope)!=="object"||mode.endScope===null){error("endScope must be object");throw MultiClassError;}remapScopeNames(mode,mode.end,{key:"endScope"});mode.end=_rewriteBackreferences(mode.end,{joinWith:""});}/**
       * this exists only to allow `scope: {}` to be used beside `match:`
       * Otherwise `beginScope` would necessary and that would look weird

        {
          match: [ /def/, /\w+/ ]
          scope: { 1: "keyword" , 2: "title" }
        }

       * @param {CompiledMode} mode
       */function scopeSugar(mode){if(mode.scope&&_typeof(mode.scope)==="object"&&mode.scope!==null){mode.beginScope=mode.scope;delete mode.scope;}}/**
       * @param {CompiledMode} mode
       */function MultiClass(mode){scopeSugar(mode);if(typeof mode.beginScope==="string"){mode.beginScope={_wrap:mode.beginScope};}if(typeof mode.endScope==="string"){mode.endScope={_wrap:mode.endScope};}beginMultiClass(mode);endMultiClass(mode);}/**
      @typedef {import('highlight.js').Mode} Mode
      @typedef {import('highlight.js').CompiledMode} CompiledMode
      @typedef {import('highlight.js').Language} Language
      @typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
      @typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
      */ // compilation
/**
       * Compiles a language definition result
       *
       * Given the raw result of a language definition (Language), compiles this so
       * that it is ready for highlighting code.
       * @param {Language} language
       * @returns {CompiledLanguage}
       */function compileLanguage(language){/**
         * Builds a regex with the case sensitivity of the current language
         *
         * @param {RegExp | string} value
         * @param {boolean} [global]
         */function langRe(value,global){return new RegExp(source(value),'m'+(language.case_insensitive?'i':'')+(language.unicodeRegex?'u':'')+(global?'g':''));}/**
          Stores multiple regular expressions and allows you to quickly search for
          them all in a string simultaneously - returning the first match.  It does
          this by creating a huge (a|b|c) regex - each individual item wrapped with ()
          and joined by `|` - using match groups to track position.  When a match is
          found checking which position in the array has content allows us to figure
          out which of the original regexes / match groups triggered the match.

          The match object itself (the result of `Regex.exec`) is returned but also
          enhanced by merging in any meta-data that was registered with the regex.
          This is how we keep track of which mode matched, and what type of rule
          (`illegal`, `begin`, end, etc).
        */var MultiRegex=/*#__PURE__*/function(){function MultiRegex(){_classCallCheck(this,MultiRegex);this.matchIndexes={};// @ts-ignore
this.regexes=[];this.matchAt=1;this.position=0;}// @ts-ignore
_createClass(MultiRegex,[{key:"addRule",value:function addRule(re,opts){opts.position=this.position++;// @ts-ignore
this.matchIndexes[this.matchAt]=opts;this.regexes.push([opts,re]);this.matchAt+=countMatchGroups(re)+1;}},{key:"compile",value:function compile(){if(this.regexes.length===0){// avoids the need to check length every time exec is called
// @ts-ignore
this.exec=function(){return null;};}var terminators=this.regexes.map(function(el){return el[1];});this.matcherRe=langRe(_rewriteBackreferences(terminators,{joinWith:'|'}),true);this.lastIndex=0;}/** @param {string} s */},{key:"exec",value:function exec(s){this.matcherRe.lastIndex=this.lastIndex;var match=this.matcherRe.exec(s);if(!match){return null;}// eslint-disable-next-line no-undefined
var i=match.findIndex(function(el,i){return i>0&&el!==undefined;});// @ts-ignore
var matchData=this.matchIndexes[i];// trim off any earlier non-relevant match groups (ie, the other regex
// match groups that make up the multi-matcher)
match.splice(0,i);return Object.assign(match,matchData);}}]);return MultiRegex;}();/*
          Created to solve the key deficiently with MultiRegex - there is no way to
          test for multiple matches at a single location.  Why would we need to do
          that?  In the future a more dynamic engine will allow certain matches to be
          ignored.  An example: if we matched say the 3rd regex in a large group but
          decided to ignore it - we'd need to started testing again at the 4th
          regex... but MultiRegex itself gives us no real way to do that.

          So what this class creates MultiRegexs on the fly for whatever search
          position they are needed.

          NOTE: These additional MultiRegex objects are created dynamically.  For most
          grammars most of the time we will never actually need anything more than the
          first MultiRegex - so this shouldn't have too much overhead.

          Say this is our search group, and we match regex3, but wish to ignore it.

            regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

          What we need is a new MultiRegex that only includes the remaining
          possibilities:

            regex4 | regex5                               ' ie, startAt = 3

          This class wraps all that complexity up in a simple API... `startAt` decides
          where in the array of expressions to start doing the matching. It
          auto-increments, so if a match is found at position 2, then startAt will be
          set to 3.  If the end is reached startAt will return to 0.

          MOST of the time the parser will be setting startAt manually to 0.
        */var ResumableMultiRegex=/*#__PURE__*/function(){function ResumableMultiRegex(){_classCallCheck(this,ResumableMultiRegex);// @ts-ignore
this.rules=[];// @ts-ignore
this.multiRegexes=[];this.count=0;this.lastIndex=0;this.regexIndex=0;}// @ts-ignore
_createClass(ResumableMultiRegex,[{key:"getMatcher",value:function getMatcher(index){if(this.multiRegexes[index])return this.multiRegexes[index];var matcher=new MultiRegex();this.rules.slice(index).forEach(function(_ref5){var _ref6=_slicedToArray(_ref5,2),re=_ref6[0],opts=_ref6[1];return matcher.addRule(re,opts);});matcher.compile();this.multiRegexes[index]=matcher;return matcher;}},{key:"resumingScanAtSamePosition",value:function resumingScanAtSamePosition(){return this.regexIndex!==0;}},{key:"considerAll",value:function considerAll(){this.regexIndex=0;}// @ts-ignore
},{key:"addRule",value:function addRule(re,opts){this.rules.push([re,opts]);if(opts.type==="begin")this.count++;}/** @param {string} s */},{key:"exec",value:function exec(s){var m=this.getMatcher(this.regexIndex);m.lastIndex=this.lastIndex;var result=m.exec(s);// The following is because we have no easy way to say "resume scanning at the
// existing position but also skip the current rule ONLY". What happens is
// all prior rules are also skipped which can result in matching the wrong
// thing. Example of matching "booger":
// our matcher is [string, "booger", number]
//
// ....booger....
// if "booger" is ignored then we'd really need a regex to scan from the
// SAME position for only: [string, number] but ignoring "booger" (if it
// was the first match), a simple resume would scan ahead who knows how
// far looking only for "number", ignoring potential string matches (or
// future "booger" matches that might be valid.)
// So what we do: We execute two matchers, one resuming at the same
// position, but the second full matcher starting at the position after:
//     /--- resume first regex match here (for [number])
//     |/---- full match here for [string, "booger", number]
//     vv
// ....booger....
// Which ever results in a match first is then used. So this 3-4 step
// process essentially allows us to say "match at this position, excluding
// a prior rule that was ignored".
//
// 1. Match "booger" first, ignore. Also proves that [string] does non match.
// 2. Resume matching for [number]
// 3. Match at index + 1 for [string, "booger", number]
// 4. If #2 and #3 result in matches, which came first?
if(this.resumingScanAtSamePosition()){if(result&&result.index===this.lastIndex);else{// use the second matcher result
var m2=this.getMatcher(0);m2.lastIndex=this.lastIndex+1;result=m2.exec(s);}}if(result){this.regexIndex+=result.position+1;if(this.regexIndex===this.count){// wrap-around to considering all matches again
this.considerAll();}}return result;}}]);return ResumableMultiRegex;}();/**
         * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
         * the content and find matches.
         *
         * @param {CompiledMode} mode
         * @returns {ResumableMultiRegex}
         */function buildModeRegex(mode){var mm=new ResumableMultiRegex();mode.contains.forEach(function(term){return mm.addRule(term.begin,{rule:term,type:"begin"});});if(mode.terminatorEnd){mm.addRule(mode.terminatorEnd,{type:"end"});}if(mode.illegal){mm.addRule(mode.illegal,{type:"illegal"});}return mm;}/** skip vs abort vs ignore
         *
         * @skip   - The mode is still entered and exited normally (and contains rules apply),
         *           but all content is held and added to the parent buffer rather than being
         *           output when the mode ends.  Mostly used with `sublanguage` to build up
         *           a single large buffer than can be parsed by sublanguage.
         *
         *             - The mode begin ands ends normally.
         *             - Content matched is added to the parent mode buffer.
         *             - The parser cursor is moved forward normally.
         *
         * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
         *           never matched) but DOES NOT continue to match subsequent `contains`
         *           modes.  Abort is bad/suboptimal because it can result in modes
         *           farther down not getting applied because an earlier rule eats the
         *           content but then aborts.
         *
         *             - The mode does not begin.
         *             - Content matched by `begin` is added to the mode buffer.
         *             - The parser cursor is moved forward accordingly.
         *
         * @ignore - Ignores the mode (as if it never matched) and continues to match any
         *           subsequent `contains` modes.  Ignore isn't technically possible with
         *           the current parser implementation.
         *
         *             - The mode does not begin.
         *             - Content matched by `begin` is ignored.
         *             - The parser cursor is not moved forward.
         */ /**
         * Compiles an individual mode
         *
         * This can raise an error if the mode contains certain detectable known logic
         * issues.
         * @param {Mode} mode
         * @param {CompiledMode | null} [parent]
         * @returns {CompiledMode | never}
         */function compileMode(mode,parent){var _ref7;var cmode=/** @type CompiledMode */mode;if(mode.isCompiled)return cmode;[scopeClassName,// do this early so compiler extensions generally don't have to worry about
// the distinction between match/begin
compileMatch,MultiClass,beforeMatchExt].forEach(function(ext){return ext(mode,parent);});language.compilerExtensions.forEach(function(ext){return ext(mode,parent);});// __beforeBegin is considered private API, internal use only
mode.__beforeBegin=null;[beginKeywords,// do this later so compiler extensions that come earlier have access to the
// raw array if they wanted to perhaps manipulate it, etc.
compileIllegal,// default to 1 relevance if not specified
compileRelevance].forEach(function(ext){return ext(mode,parent);});mode.isCompiled=true;var keywordPattern=null;if(_typeof(mode.keywords)==="object"&&mode.keywords.$pattern){// we need a copy because keywords might be compiled multiple times
// so we can't go deleting $pattern from the original on the first
// pass
mode.keywords=Object.assign({},mode.keywords);keywordPattern=mode.keywords.$pattern;delete mode.keywords.$pattern;}keywordPattern=keywordPattern||/\w+/;if(mode.keywords){mode.keywords=compileKeywords(mode.keywords,language.case_insensitive);}cmode.keywordPatternRe=langRe(keywordPattern,true);if(parent){if(!mode.begin)mode.begin=/\B|\b/;cmode.beginRe=langRe(cmode.begin);if(!mode.end&&!mode.endsWithParent)mode.end=/\B|\b/;if(mode.end)cmode.endRe=langRe(cmode.end);cmode.terminatorEnd=source(cmode.end)||'';if(mode.endsWithParent&&parent.terminatorEnd){cmode.terminatorEnd+=(mode.end?'|':'')+parent.terminatorEnd;}}if(mode.illegal)cmode.illegalRe=langRe(/** @type {RegExp | string} */mode.illegal);if(!mode.contains)mode.contains=[];mode.contains=(_ref7=[]).concat.apply(_ref7,_toConsumableArray(mode.contains.map(function(c){return expandOrCloneMode(c==='self'?mode:c);})));mode.contains.forEach(function(c){compileMode(/** @type Mode */c,cmode);});if(mode.starts){compileMode(mode.starts,parent);}cmode.matcher=buildModeRegex(cmode);return cmode;}if(!language.compilerExtensions)language.compilerExtensions=[];// self is not valid at the top-level
if(language.contains&&language.contains.includes('self')){throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");}// we need a null object, which inherit will guarantee
language.classNameAliases=inherit$1(language.classNameAliases||{});return compileMode(/** @type Mode */language);}/**
       * Determines if a mode has a dependency on it's parent or not
       *
       * If a mode does have a parent dependency then often we need to clone it if
       * it's used in multiple places so that each copy points to the correct parent,
       * where-as modes without a parent can often safely be re-used at the bottom of
       * a mode chain.
       *
       * @param {Mode | null} mode
       * @returns {boolean} - is there a dependency on the parent?
       * */function dependencyOnParent(mode){if(!mode)return false;return mode.endsWithParent||dependencyOnParent(mode.starts);}/**
       * Expands a mode or clones it if necessary
       *
       * This is necessary for modes with parental dependenceis (see notes on
       * `dependencyOnParent`) and for nodes that have `variants` - which must then be
       * exploded into their own individual modes at compile time.
       *
       * @param {Mode} mode
       * @returns {Mode | Mode[]}
       * */function expandOrCloneMode(mode){if(mode.variants&&!mode.cachedVariants){mode.cachedVariants=mode.variants.map(function(variant){return inherit$1(mode,{variants:null},variant);});}// EXPAND
// if we have variants then essentially "replace" the mode with the variants
// this happens in compileMode, where this function is called from
if(mode.cachedVariants){return mode.cachedVariants;}// CLONE
// if we have dependencies on parents then we need a unique
// instance of ourselves, so we can be reused with many
// different parents without issue
if(dependencyOnParent(mode)){return inherit$1(mode,{starts:mode.starts?inherit$1(mode.starts):null});}if(Object.isFrozen(mode)){return inherit$1(mode);}// no special dependency issues, just return ourselves
return mode;}var version="11.5.1";var HTMLInjectionError=/*#__PURE__*/function(_Error2){_inherits(HTMLInjectionError,_Error2);var _super12=_createSuper(HTMLInjectionError);function HTMLInjectionError(reason,html){var _this14;_classCallCheck(this,HTMLInjectionError);_this14=_super12.call(this,reason);_this14.name="HTMLInjectionError";_this14.html=html;return _this14;}return _createClass(HTMLInjectionError);}(/*#__PURE__*/_wrapNativeSuper(Error));/*
      Syntax highlighting with language autodetection.
      https://highlightjs.org/
      */ /**
      @typedef {import('highlight.js').Mode} Mode
      @typedef {import('highlight.js').CompiledMode} CompiledMode
      @typedef {import('highlight.js').CompiledScope} CompiledScope
      @typedef {import('highlight.js').Language} Language
      @typedef {import('highlight.js').HLJSApi} HLJSApi
      @typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
      @typedef {import('highlight.js').PluginEvent} PluginEvent
      @typedef {import('highlight.js').HLJSOptions} HLJSOptions
      @typedef {import('highlight.js').LanguageFn} LanguageFn
      @typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
      @typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
      @typedef {import('highlight.js/private').MatchType} MatchType
      @typedef {import('highlight.js/private').KeywordData} KeywordData
      @typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
      @typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
      @typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
      @typedef {import('highlight.js').HighlightOptions} HighlightOptions
      @typedef {import('highlight.js').HighlightResult} HighlightResult
      */var escape=escapeHTML;var inherit=inherit$1;var NO_MATCH=Symbol("nomatch");var MAX_KEYWORD_HITS=7;/**
       * @param {any} hljs - object that is extended (legacy)
       * @returns {HLJSApi}
       */var HLJS=function HLJS(hljs){// Global internal variables used within the highlight.js library.
/** @type {Record<string, Language>} */var languages=Object.create(null);/** @type {Record<string, string>} */var aliases=Object.create(null);/** @type {HLJSPlugin[]} */var plugins=[];// safe/production mode - swallows more errors, tries to keep running
// even if a single syntax or parse hits a fatal error
var SAFE_MODE=true;var LANGUAGE_NOT_FOUND="Could not find the language '{}', did you forget to load/include a language module?";/** @type {Language} */var PLAINTEXT_LANGUAGE={disableAutodetect:true,name:'Plain text',contains:[]};// Global options used when within external APIs. This is modified when
// calling the `hljs.configure` function.
/** @type HLJSOptions */var options={ignoreUnescapedHTML:false,throwUnescapedHTML:false,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:'hljs-',cssSelector:'pre code',languages:null,// beta configuration options, subject to change, welcome to discuss
// https://github.com/highlightjs/highlight.js/issues/1086
__emitter:TokenTreeEmitter};/* Utility functions */ /**
         * Tests a language name to see if highlighting should be skipped
         * @param {string} languageName
         */function shouldNotHighlight(languageName){return options.noHighlightRe.test(languageName);}/**
         * @param {HighlightedHTMLElement} block - the HTML element to determine language for
         */function blockLanguage(block){var classes=block.className+' ';classes+=block.parentNode?block.parentNode.className:'';// language-* takes precedence over non-prefixed class names.
var match=options.languageDetectRe.exec(classes);if(match){var _language=getLanguage(match[1]);if(!_language){warn(LANGUAGE_NOT_FOUND.replace("{}",match[1]));warn("Falling back to no-highlight mode for this block.",block);}return _language?match[1]:'no-highlight';}return classes.split(/\s+/).find(function(_class){return shouldNotHighlight(_class)||getLanguage(_class);});}/**
         * Core highlighting function.
         *
         * OLD API
         * highlight(lang, code, ignoreIllegals, continuation)
         *
         * NEW API
         * highlight(code, {lang, ignoreIllegals})
         *
         * @param {string} codeOrLanguageName - the language to use for highlighting
         * @param {string | HighlightOptions} optionsOrCode - the code to highlight
         * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
         *
         * @returns {HighlightResult} Result - an object that represents the result
         * @property {string} language - the language name
         * @property {number} relevance - the relevance score
         * @property {string} value - the highlighted HTML code
         * @property {string} code - the original raw code
         * @property {CompiledMode} top - top of the current mode stack
         * @property {boolean} illegal - indicates whether any illegal matches were found
        */function highlight(codeOrLanguageName,optionsOrCode,ignoreIllegals){var code="";var languageName="";if(_typeof(optionsOrCode)==="object"){code=codeOrLanguageName;ignoreIllegals=optionsOrCode.ignoreIllegals;languageName=optionsOrCode.language;}else{// old API
deprecated("10.7.0","highlight(lang, code, ...args) has been deprecated.");deprecated("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");languageName=codeOrLanguageName;code=optionsOrCode;}// https://github.com/highlightjs/highlight.js/issues/3149
// eslint-disable-next-line no-undefined
if(ignoreIllegals===undefined){ignoreIllegals=true;}/** @type {BeforeHighlightContext} */var context={code:code,language:languageName};// the plugin can change the desired language or the code to be highlighted
// just be changing the object it was passed
fire("before:highlight",context);// a before plugin can usurp the result completely by providing it's own
// in which case we don't even need to call highlight
var result=context.result?context.result:_highlight(context.language,context.code,ignoreIllegals);result.code=context.code;// the plugin can change anything in result to suite it
fire("after:highlight",result);return result;}/**
         * private highlight that's used internally and does not fire callbacks
         *
         * @param {string} languageName - the language to use for highlighting
         * @param {string} codeToHighlight - the code to highlight
         * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
         * @param {CompiledMode?} [continuation] - current continuation mode, if any
         * @returns {HighlightResult} - result of the highlight operation
        */function _highlight(languageName,codeToHighlight,ignoreIllegals,continuation){var keywordHits=Object.create(null);/**
           * Return keyword data if a match is a keyword
           * @param {CompiledMode} mode - current mode
           * @param {string} matchText - the textual match
           * @returns {KeywordData | false}
           */function keywordData(mode,matchText){return mode.keywords[matchText];}function processKeywords(){if(!top.keywords){emitter.addText(modeBuffer);return;}var lastIndex=0;top.keywordPatternRe.lastIndex=0;var match=top.keywordPatternRe.exec(modeBuffer);var buf="";while(match){buf+=modeBuffer.substring(lastIndex,match.index);var word=language.case_insensitive?match[0].toLowerCase():match[0];var _data3=keywordData(top,word);if(_data3){var _data4=_slicedToArray(_data3,2),kind=_data4[0],keywordRelevance=_data4[1];emitter.addText(buf);buf="";keywordHits[word]=(keywordHits[word]||0)+1;if(keywordHits[word]<=MAX_KEYWORD_HITS)relevance+=keywordRelevance;if(kind.startsWith("_")){// _ implied for relevance only, do not highlight
// by applying a class name
buf+=match[0];}else{var cssClass=language.classNameAliases[kind]||kind;emitter.addKeyword(match[0],cssClass);}}else{buf+=match[0];}lastIndex=top.keywordPatternRe.lastIndex;match=top.keywordPatternRe.exec(modeBuffer);}buf+=modeBuffer.substr(lastIndex);emitter.addText(buf);}function processSubLanguage(){if(modeBuffer==="")return;/** @type HighlightResult */var result=null;if(typeof top.subLanguage==='string'){if(!languages[top.subLanguage]){emitter.addText(modeBuffer);return;}result=_highlight(top.subLanguage,modeBuffer,true,continuations[top.subLanguage]);continuations[top.subLanguage]=/** @type {CompiledMode} */result._top;}else{result=highlightAuto(modeBuffer,top.subLanguage.length?top.subLanguage:null);}// Counting embedded language score towards the host language may be disabled
// with zeroing the containing mode relevance. Use case in point is Markdown that
// allows XML everywhere and makes every XML snippet to have a much larger Markdown
// score.
if(top.relevance>0){relevance+=result.relevance;}emitter.addSublanguage(result._emitter,result.language);}function processBuffer(){if(top.subLanguage!=null){processSubLanguage();}else{processKeywords();}modeBuffer='';}/**
           * @param {CompiledScope} scope
           * @param {RegExpMatchArray} match
           */function emitMultiClass(scope,match){var i=1;var max=match.length-1;while(i<=max){if(!scope._emit[i]){i++;continue;}var klass=language.classNameAliases[scope[i]]||scope[i];var _text6=match[i];if(klass){emitter.addKeyword(_text6,klass);}else{modeBuffer=_text6;processKeywords();modeBuffer="";}i++;}}/**
           * @param {CompiledMode} mode - new mode to start
           * @param {RegExpMatchArray} match
           */function startNewMode(mode,match){if(mode.scope&&typeof mode.scope==="string"){emitter.openNode(language.classNameAliases[mode.scope]||mode.scope);}if(mode.beginScope){// beginScope just wraps the begin match itself in a scope
if(mode.beginScope._wrap){emitter.addKeyword(modeBuffer,language.classNameAliases[mode.beginScope._wrap]||mode.beginScope._wrap);modeBuffer="";}else if(mode.beginScope._multi){// at this point modeBuffer should just be the match
emitMultiClass(mode.beginScope,match);modeBuffer="";}}top=Object.create(mode,{parent:{value:top}});return top;}/**
           * @param {CompiledMode } mode - the mode to potentially end
           * @param {RegExpMatchArray} match - the latest match
           * @param {string} matchPlusRemainder - match plus remainder of content
           * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
           */function endOfMode(mode,match,matchPlusRemainder){var matched=startsWith(mode.endRe,matchPlusRemainder);if(matched){if(mode["on:end"]){var resp=new Response(mode);mode["on:end"](match,resp);if(resp.isMatchIgnored)matched=false;}if(matched){while(mode.endsParent&&mode.parent){mode=mode.parent;}return mode;}}// even if on:end fires an `ignore` it's still possible
// that we might trigger the end node because of a parent mode
if(mode.endsWithParent){return endOfMode(mode.parent,match,matchPlusRemainder);}}/**
           * Handle matching but then ignoring a sequence of text
           *
           * @param {string} lexeme - string containing full match text
           */function doIgnore(lexeme){if(top.matcher.regexIndex===0){// no more regexes to potentially match here, so we move the cursor forward one
// space
modeBuffer+=lexeme[0];return 1;}else{// no need to move the cursor, we still have additional regexes to try and
// match at this very spot
resumeScanAtSamePosition=true;return 0;}}/**
           * Handle the start of a new potential mode match
           *
           * @param {EnhancedMatch} match - the current match
           * @returns {number} how far to advance the parse cursor
           */function doBeginMatch(match){var lexeme=match[0];var newMode=match.rule;var resp=new Response(newMode);// first internal before callbacks, then the public ones
var beforeCallbacks=[newMode.__beforeBegin,newMode["on:begin"]];for(var _i5=0,_beforeCallbacks=beforeCallbacks;_i5<_beforeCallbacks.length;_i5++){var cb=_beforeCallbacks[_i5];if(!cb)continue;cb(match,resp);if(resp.isMatchIgnored)return doIgnore(lexeme);}if(newMode.skip){modeBuffer+=lexeme;}else{if(newMode.excludeBegin){modeBuffer+=lexeme;}processBuffer();if(!newMode.returnBegin&&!newMode.excludeBegin){modeBuffer=lexeme;}}startNewMode(newMode,match);return newMode.returnBegin?0:lexeme.length;}/**
           * Handle the potential end of mode
           *
           * @param {RegExpMatchArray} match - the current match
           */function doEndMatch(match){var lexeme=match[0];var matchPlusRemainder=codeToHighlight.substr(match.index);var endMode=endOfMode(top,match,matchPlusRemainder);if(!endMode){return NO_MATCH;}var origin=top;if(top.endScope&&top.endScope._wrap){processBuffer();emitter.addKeyword(lexeme,top.endScope._wrap);}else if(top.endScope&&top.endScope._multi){processBuffer();emitMultiClass(top.endScope,match);}else if(origin.skip){modeBuffer+=lexeme;}else{if(!(origin.returnEnd||origin.excludeEnd)){modeBuffer+=lexeme;}processBuffer();if(origin.excludeEnd){modeBuffer=lexeme;}}do{if(top.scope){emitter.closeNode();}if(!top.skip&&!top.subLanguage){relevance+=top.relevance;}top=top.parent;}while(top!==endMode.parent);if(endMode.starts){startNewMode(endMode.starts,match);}return origin.returnEnd?0:lexeme.length;}function processContinuations(){var list=[];for(var current=top;current!==language;current=current.parent){if(current.scope){list.unshift(current.scope);}}list.forEach(function(item){return emitter.openNode(item);});}/** @type {{type?: MatchType, index?: number, rule?: Mode}}} */var lastMatch={};/**
           *  Process an individual match
           *
           * @param {string} textBeforeMatch - text preceding the match (since the last match)
           * @param {EnhancedMatch} [match] - the match itself
           */function processLexeme(textBeforeMatch,match){var lexeme=match&&match[0];// add non-matched text to the current mode buffer
modeBuffer+=textBeforeMatch;if(lexeme==null){processBuffer();return 0;}// we've found a 0 width match and we're stuck, so we need to advance
// this happens when we have badly behaved rules that have optional matchers to the degree that
// sometimes they can end up matching nothing at all
// Ref: https://github.com/highlightjs/highlight.js/issues/2140
if(lastMatch.type==="begin"&&match.type==="end"&&lastMatch.index===match.index&&lexeme===""){// spit the "skipped" character that our regex choked on back into the output sequence
modeBuffer+=codeToHighlight.slice(match.index,match.index+1);if(!SAFE_MODE){/** @type {AnnotatedError} */var err=new Error("0 width match regex (".concat(languageName,")"));err.languageName=languageName;err.badRule=lastMatch.rule;throw err;}return 1;}lastMatch=match;if(match.type==="begin"){return doBeginMatch(match);}else if(match.type==="illegal"&&!ignoreIllegals){// illegal match, we do not continue processing
/** @type {AnnotatedError} */var _err2=new Error('Illegal lexeme "'+lexeme+'" for mode "'+(top.scope||'<unnamed>')+'"');_err2.mode=top;throw _err2;}else if(match.type==="end"){var processed=doEndMatch(match);if(processed!==NO_MATCH){return processed;}}// edge case for when illegal matches $ (end of line) which is technically
// a 0 width match but not a begin/end match so it's not caught by the
// first handler (when ignoreIllegals is true)
if(match.type==="illegal"&&lexeme===""){// advance so we aren't stuck in an infinite loop
return 1;}// infinite loops are BAD, this is a last ditch catch all. if we have a
// decent number of iterations yet our index (cursor position in our
// parsing) still 3x behind our index then something is very wrong
// so we bail
if(iterations>100000&&iterations>match.index*3){var _err3=new Error('potential infinite loop, way more iterations than matches');throw _err3;}/*
            Why might be find ourselves here?  An potential end match that was
            triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
            (this could be because a callback requests the match be ignored, etc)

            This causes no real harm other than stopping a few times too many.
            */modeBuffer+=lexeme;return lexeme.length;}var language=getLanguage(languageName);if(!language){error(LANGUAGE_NOT_FOUND.replace("{}",languageName));throw new Error('Unknown language: "'+languageName+'"');}var md=compileLanguage(language);var result='';/** @type {CompiledMode} */var top=continuation||md;/** @type Record<string,CompiledMode> */var continuations={};// keep continuations for sub-languages
var emitter=new options.__emitter(options);processContinuations();var modeBuffer='';var relevance=0;var index=0;var iterations=0;var resumeScanAtSamePosition=false;try{top.matcher.considerAll();for(;;){iterations++;if(resumeScanAtSamePosition){// only regexes not matched previously will now be
// considered for a potential match
resumeScanAtSamePosition=false;}else{top.matcher.considerAll();}top.matcher.lastIndex=index;var match=top.matcher.exec(codeToHighlight);// console.log("match", match[0], match.rule && match.rule.begin)
if(!match)break;var beforeMatch=codeToHighlight.substring(index,match.index);var processedCount=processLexeme(beforeMatch,match);index=match.index+processedCount;}processLexeme(codeToHighlight.substr(index));emitter.closeAllNodes();emitter.finalize();result=emitter.toHTML();return{language:languageName,value:result,relevance:relevance,illegal:false,_emitter:emitter,_top:top};}catch(err){if(err.message&&err.message.includes('Illegal')){return{language:languageName,value:escape(codeToHighlight),illegal:true,relevance:0,_illegalBy:{message:err.message,index:index,context:codeToHighlight.slice(index-100,index+100),mode:err.mode,resultSoFar:result},_emitter:emitter};}else if(SAFE_MODE){return{language:languageName,value:escape(codeToHighlight),illegal:false,relevance:0,errorRaised:err,_emitter:emitter,_top:top};}else{throw err;}}}/**
         * returns a valid highlight result, without actually doing any actual work,
         * auto highlight starts with this and it's possible for small snippets that
         * auto-detection may not find a better match
         * @param {string} code
         * @returns {HighlightResult}
         */function justTextHighlightResult(code){var result={value:escape(code),illegal:false,relevance:0,_top:PLAINTEXT_LANGUAGE,_emitter:new options.__emitter(options)};result._emitter.addText(code);return result;}/**
        Highlighting with language detection. Accepts a string with the code to
        highlight. Returns an object with the following properties:

        - language (detected language)
        - relevance (int)
        - value (an HTML string with highlighting markup)
        - secondBest (object with the same structure for second-best heuristically
          detected language, may be absent)

          @param {string} code
          @param {Array<string>} [languageSubset]
          @returns {AutoHighlightResult}
        */function highlightAuto(code,languageSubset){languageSubset=languageSubset||options.languages||Object.keys(languages);var plaintext=justTextHighlightResult(code);var results=languageSubset.filter(getLanguage).filter(autoDetection).map(function(name){return _highlight(name,code,false);});results.unshift(plaintext);// plaintext is always an option
var sorted=results.sort(function(a,b){// sort base on relevance
if(a.relevance!==b.relevance)return b.relevance-a.relevance;// always award the tie to the base language
// ie if C++ and Arduino are tied, it's more likely to be C++
if(a.language&&b.language){if(getLanguage(a.language).supersetOf===b.language){return 1;}else if(getLanguage(b.language).supersetOf===a.language){return-1;}}// otherwise say they are equal, which has the effect of sorting on
// relevance while preserving the original ordering - which is how ties
// have historically been settled, ie the language that comes first always
// wins in the case of a tie
return 0;});var _sorted=_slicedToArray(sorted,2),best=_sorted[0],secondBest=_sorted[1];/** @type {AutoHighlightResult} */var result=best;result.secondBest=secondBest;return result;}/**
         * Builds new class name for block given the language name
         *
         * @param {HTMLElement} element
         * @param {string} [currentLang]
         * @param {string} [resultLang]
         */function updateClassName(element,currentLang,resultLang){var language=currentLang&&aliases[currentLang]||resultLang;element.classList.add("hljs");element.classList.add("language-".concat(language));}/**
         * Applies highlighting to a DOM node containing code.
         *
         * @param {HighlightedHTMLElement} element - the HTML element to highlight
        */function highlightElement(element){/** @type HTMLElement */var node=null;var language=blockLanguage(element);if(shouldNotHighlight(language))return;fire("before:highlightElement",{el:element,language:language});// we should be all text, no child nodes (unescaped HTML) - this is possibly
// an HTML injection attack - it's likely too late if this is already in
// production (the code has likely already done its damage by the time
// we're seeing it)... but we yell loudly about this so that hopefully it's
// more likely to be caught in development before making it to production
if(element.children.length>0){if(!options.ignoreUnescapedHTML){console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");console.warn("https://github.com/highlightjs/highlight.js/wiki/security");console.warn("The element with unescaped HTML:");console.warn(element);}if(options.throwUnescapedHTML){var err=new HTMLInjectionError("One of your code blocks includes unescaped HTML.",element.innerHTML);throw err;}}node=element;var text=node.textContent;var result=language?highlight(text,{language:language,ignoreIllegals:true}):highlightAuto(text);element.innerHTML=result.value;updateClassName(element,language,result.language);element.result={language:result.language,// TODO: remove with version 11.0
re:result.relevance,relevance:result.relevance};if(result.secondBest){element.secondBest={language:result.secondBest.language,relevance:result.secondBest.relevance};}fire("after:highlightElement",{el:element,result:result,text:text});}/**
         * Updates highlight.js global options with the passed options
         *
         * @param {Partial<HLJSOptions>} userOptions
         */function configure(userOptions){options=inherit(options,userOptions);}// TODO: remove v12, deprecated
var initHighlighting=function initHighlighting(){highlightAll();deprecated("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.");};// TODO: remove v12, deprecated
function initHighlightingOnLoad(){highlightAll();deprecated("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.");}var wantsHighlight=false;/**
         * auto-highlights all pre>code elements on the page
         */function highlightAll(){// if we are called too early in the loading process
if(document.readyState==="loading"){wantsHighlight=true;return;}var blocks=document.querySelectorAll(options.cssSelector);blocks.forEach(highlightElement);}function boot(){// if a highlight was requested before DOM was loaded, do now
if(wantsHighlight)highlightAll();}// make sure we are in the browser environment
if(typeof window!=='undefined'&&window.addEventListener){window.addEventListener('DOMContentLoaded',boot,false);}/**
         * Register a language grammar module
         *
         * @param {string} languageName
         * @param {LanguageFn} languageDefinition
         */function registerLanguage(languageName,languageDefinition){var lang=null;try{lang=languageDefinition(hljs);}catch(error$1){error("Language definition for '{}' could not be registered.".replace("{}",languageName));// hard or soft error
if(!SAFE_MODE){throw error$1;}else{error(error$1);}// languages that have serious errors are replaced with essentially a
// "plaintext" stand-in so that the code blocks will still get normal
// css classes applied to them - and one bad language won't break the
// entire highlighter
lang=PLAINTEXT_LANGUAGE;}// give it a temporary name if it doesn't have one in the meta-data
if(!lang.name)lang.name=languageName;languages[languageName]=lang;lang.rawDefinition=languageDefinition.bind(null,hljs);if(lang.aliases){registerAliases(lang.aliases,{languageName:languageName});}}/**
         * Remove a language grammar module
         *
         * @param {string} languageName
         */function unregisterLanguage(languageName){delete languages[languageName];for(var _i6=0,_Object$keys2=Object.keys(aliases);_i6<_Object$keys2.length;_i6++){var alias=_Object$keys2[_i6];if(aliases[alias]===languageName){delete aliases[alias];}}}/**
         * @returns {string[]} List of language internal names
         */function listLanguages(){return Object.keys(languages);}/**
         * @param {string} name - name of the language to retrieve
         * @returns {Language | undefined}
         */function getLanguage(name){name=(name||'').toLowerCase();return languages[name]||languages[aliases[name]];}/**
         *
         * @param {string|string[]} aliasList - single alias or list of aliases
         * @param {{languageName: string}} opts
         */function registerAliases(aliasList,_ref8){var languageName=_ref8.languageName;if(typeof aliasList==='string'){aliasList=[aliasList];}aliasList.forEach(function(alias){aliases[alias.toLowerCase()]=languageName;});}/**
         * Determines if a given language has auto-detection enabled
         * @param {string} name - name of the language
         */function autoDetection(name){var lang=getLanguage(name);return lang&&!lang.disableAutodetect;}/**
         * Upgrades the old highlightBlock plugins to the new
         * highlightElement API
         * @param {HLJSPlugin} plugin
         */function upgradePluginAPI(plugin){// TODO: remove with v12
if(plugin["before:highlightBlock"]&&!plugin["before:highlightElement"]){plugin["before:highlightElement"]=function(data){plugin["before:highlightBlock"](Object.assign({block:data.el},data));};}if(plugin["after:highlightBlock"]&&!plugin["after:highlightElement"]){plugin["after:highlightElement"]=function(data){plugin["after:highlightBlock"](Object.assign({block:data.el},data));};}}/**
         * @param {HLJSPlugin} plugin
         */function addPlugin(plugin){upgradePluginAPI(plugin);plugins.push(plugin);}/**
         *
         * @param {PluginEvent} event
         * @param {any} args
         */function fire(event,args){var cb=event;plugins.forEach(function(plugin){if(plugin[cb]){plugin[cb](args);}});}/**
         * DEPRECATED
         * @param {HighlightedHTMLElement} el
         */function deprecateHighlightBlock(el){deprecated("10.7.0","highlightBlock will be removed entirely in v12.0");deprecated("10.7.0","Please use highlightElement now.");return highlightElement(el);}/* Interface definition */Object.assign(hljs,{highlight:highlight,highlightAuto:highlightAuto,highlightAll:highlightAll,highlightElement:highlightElement,// TODO: Remove with v12 API
highlightBlock:deprecateHighlightBlock,configure:configure,initHighlighting:initHighlighting,initHighlightingOnLoad:initHighlightingOnLoad,registerLanguage:registerLanguage,unregisterLanguage:unregisterLanguage,listLanguages:listLanguages,getLanguage:getLanguage,registerAliases:registerAliases,autoDetection:autoDetection,inherit:inherit,addPlugin:addPlugin});hljs.debugMode=function(){SAFE_MODE=false;};hljs.safeMode=function(){SAFE_MODE=true;};hljs.versionString=version;hljs.regex={concat:concat,lookahead:lookahead,either:either,optional:optional,anyNumberOfTimes:anyNumberOfTimes};for(var key in MODES){// @ts-ignore
if(_typeof(MODES[key])==="object"){// @ts-ignore
deepFreeze$1(MODES[key]);}}// merge all the modes/regexes into our main object
Object.assign(hljs,MODES);return hljs;};// export an "instance" of the highlighter
var highlight$1=HLJS({});var core=highlight$1;highlight$1.HighlightJS=highlight$1;highlight$1.default=highlight$1;var HighlightJS=core;var format={exports:{}};(function(module){(function(){//// Export the API
var namespace;// CommonJS / Node module
{namespace=module.exports=format;}namespace.format=format;namespace.vsprintf=vsprintf;if(typeof console!=='undefined'&&typeof console.log==='function'){namespace.printf=printf;}function/* ... */printf(){console.log(format.apply(null,arguments));}function vsprintf(fmt,replacements){return format.apply(null,[fmt].concat(replacements));}function format(fmt){var argIndex=1// skip initial format argument
,args=[].slice.call(arguments),i=0,n=fmt.length,result='',c,escaped=false,arg,tmp,leadingZero=false,precision,nextArg=function nextArg(){return args[argIndex++];},slurpNumber=function slurpNumber(){var digits='';while(/\d/.test(fmt[i])){digits+=fmt[i++];c=fmt[i];}return digits.length>0?parseInt(digits):null;};for(;i<n;++i){c=fmt[i];if(escaped){escaped=false;if(c=='.'){leadingZero=false;c=fmt[++i];}else if(c=='0'&&fmt[i+1]=='.'){leadingZero=true;i+=2;c=fmt[i];}else{leadingZero=true;}precision=slurpNumber();switch(c){case'b':// number in binary
result+=parseInt(nextArg(),10).toString(2);break;case'c':// character
arg=nextArg();if(typeof arg==='string'||arg instanceof String)result+=arg;else result+=String.fromCharCode(parseInt(arg,10));break;case'd':// number in decimal
result+=parseInt(nextArg(),10);break;case'f':// floating point number
tmp=String(parseFloat(nextArg()).toFixed(precision||6));result+=leadingZero?tmp:tmp.replace(/^0/,'');break;case'j':// JSON
result+=JSON.stringify(nextArg());break;case'o':// number in octal
result+='0'+parseInt(nextArg(),10).toString(8);break;case's':// string
result+=nextArg();break;case'x':// lowercase hexadecimal
result+='0x'+parseInt(nextArg(),10).toString(16);break;case'X':// uppercase hexadecimal
result+='0x'+parseInt(nextArg(),10).toString(16).toUpperCase();break;default:result+=c;break;}}else if(c==='%'){escaped=true;}else{result+=c;}}return result;}})();})(format);var formatter=format.exports;// @ts-expect-error
var fault=Object.assign(create(Error),{eval:create(EvalError),range:create(RangeError),reference:create(ReferenceError),syntax:create(SyntaxError),type:create(TypeError),uri:create(URIError)});/**
       * Create a new `EConstructor`, with the formatted `format` as a first argument.
       *
       * @template {Error} Fault
       * @template {new (reason: string) => Fault} Class
       * @param {Class} Constructor
       */function create(Constructor){/** @type {string} */ // @ts-expect-error
FormattedError.displayName=Constructor.displayName||Constructor.name;return FormattedError;/**
         * Create an error with a printf-like formatted message.
         *
         * @param {string|null} [format]
         *   Template string.
         * @param {...unknown} values
         *   Values to render in `format`.
         * @returns {Fault}
         */function FormattedError(format){for(var _len14=arguments.length,values=new Array(_len14>1?_len14-1:0),_key15=1;_key15<_len14;_key15++){values[_key15-1]=arguments[_key15];}/** @type {string} */var reason=format?formatter.apply(void 0,[format].concat(values)):format;return new Constructor(reason);}}/**
       * @typedef {import('hast').Text} Text
       * @typedef {import('highlight.js').HighlightResult} HighlightResult
       * @typedef {import('highlight.js').HLJSOptions} HighlightOptions
       * @typedef {import('highlight.js').LanguageFn} HighlightSyntax
       * @typedef {import('highlight.js').Emitter} HighlightEmitter
       *
       * @typedef {{type: 'element', tagName: 'span', properties: {className: Array<string>}, children: Array<Span|Text>}} Span
       * @typedef {{type: 'root', data: {language: string|null, relevance: number}, children: Array<Span|Text>}} Root
       *
       * @typedef {Object} ExtraOptions
       * @property {Array<string>} [subset]
       *   List of allowed languages, defaults to all registered languages.
       *
       * @typedef {Object} Options
       *   Configuration.
       * @property {string} [prefix='hljs-']
       *   Class prefix.
       *
       * @typedef {Options & ExtraOptions} AutoOptions
       */var own$1={}.hasOwnProperty;var defaultPrefix='hljs-';/**
       * Highlight `value` (code) as `language` (name).
       *
       * @param {string} language
       *   Programming language name.
       * @param {string} value
       *   Code to highlight.
       * @param {Options} [options={}]
       *   Configuration.
       * @returns {Root}
       *   A hast `Root` node.
       */function highlight(language,value){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var prefix=options.prefix;if(typeof language!=='string'){throw fault('Expected `string` for name, got `%s`',language);}if(!HighlightJS.getLanguage(language)){throw fault('Unknown language: `%s` is not registered',language);}if(typeof value!=='string'){throw fault('Expected `string` for value, got `%s`',value);}if(prefix===null||prefix===undefined){prefix=defaultPrefix;}HighlightJS.configure({__emitter:HastEmitter,classPrefix:prefix});var result=/** @type {HighlightResult & {_emitter: HastEmitter}} */HighlightJS.highlight(value,{language:language,ignoreIllegals:true});HighlightJS.configure({});// `highlight.js` seems to use this (currently) for broken grammars, so let’s
// keep it in there just to be sure.
/* c8 ignore next 3 */if(result.errorRaised){throw result.errorRaised;}// @ts-expect-error: `language` is always defined in `highlight`.
result._emitter.root.data.language=result.language;result._emitter.root.data.relevance=result.relevance;return result._emitter.root;}/**
       * Highlight `value` (code) and guess its programming language.
       *
       * @param {string} value
       *   Code to highlight.
       * @param {AutoOptions} [options={}]
       *   Configuration.
       * @returns {Root}
       *   A hast `Root` node.
       */function highlightAuto(value){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var subset=options.subset||HighlightJS.listLanguages();options.prefix;var index=-1;/** @type {Root} */var result={type:'root',data:{language:null,relevance:0},children:[]};if(typeof value!=='string'){throw fault('Expected `string` for value, got `%s`',value);}while(++index<subset.length){var name=subset[index];if(!HighlightJS.getLanguage(name))continue;var current=highlight(name,value,options);if(current.data.relevance>result.data.relevance)result=current;}return result;}/**
       * Register a language.
       *
       * @param {string} language
       *   Programming language name.
       * @param {HighlightSyntax} syntax
       *   `highlight.js` language syntax.
       * @returns {void}
       */function registerLanguage(language,syntax){HighlightJS.registerLanguage(language,syntax);}/**
       * Register aliases for already registered languages.
       *
       * @param {string|Record<string, string|Array<string>>} language
       *   Programming language name or a map of `language`s to `alias`es or `list`s
       * @param {string|Array<string>} [alias]
       *   New aliases for the programming language.
       * @returns {void}
       */var registerAlias=/**
         * @type {(
         *   ((language: string, alias: string|Array<string>) => void) &
         *   ((aliases: Record<string, string|Array<string>>) => void)
         * )}
         */ /**
           * @param {string|Record<string, string|Array<string>>} language
           * @param {string|Array<string>} [alias]
           * @returns {void}
           */function registerAlias(language,alias){if(typeof language==='string'){// @ts-expect-error: should be a string in this overload.
HighlightJS.registerAliases(alias,{languageName:language});}else{/** @type {string} */var key;for(key in language){if(own$1.call(language,key)){HighlightJS.registerAliases(language[key],{languageName:key});}}}};/**
       * Check whether an `alias` or `language` is registered.
       *
       * @param {string} aliasOrLanguage
       *   Name of a registered language or alias.
       * @returns {boolean}
       *   Whether `aliasOrlanguage` is registered.
       */function registered(aliasOrLanguage){return Boolean(HighlightJS.getLanguage(aliasOrLanguage));}/**
       * List registered languages.
       *
       * @returns {Array<string>}
       *   Names of registered language.
       */function listLanguages(){return HighlightJS.listLanguages();}/** @type {HighlightEmitter} */var HastEmitter=/*#__PURE__*/function(){/**
         * @param {HighlightOptions} options
         */function HastEmitter(options){_classCallCheck(this,HastEmitter);/** @type {HighlightOptions} */this.options=options;/** @type {Root} */this.root={type:'root',data:{language:null,relevance:0},children:[]};/** @type {[Root, ...Span[]]} */this.stack=[this.root];}/**
         * @param {string} value
         */_createClass(HastEmitter,[{key:"addText",value:function addText(value){if(value==='')return;var current=this.stack[this.stack.length-1];var tail=current.children[current.children.length-1];if(tail&&tail.type==='text'){tail.value+=value;}else{current.children.push({type:'text',value:value});}}/**
         * @param {string} value
         * @param {string} name
         */},{key:"addKeyword",value:function addKeyword(value,name){this.openNode(name);this.addText(value);this.closeNode();}/**
         * @param {HastEmitter} other
         * @param {string} name
         */},{key:"addSublanguage",value:function addSublanguage(other,name){var current=this.stack[this.stack.length-1];var results=other.root.children;if(name){current.children.push({type:'element',tagName:'span',properties:{className:[name]},children:results});}else{var _current$children;(_current$children=current.children).push.apply(_current$children,_toConsumableArray(results));}}/**
         * @param {string} name
         */},{key:"openNode",value:function openNode(name){var _this15=this;// First “class” gets the prefix. Rest gets a repeated underscore suffix.
// See: <https://github.com/highlightjs/highlight.js/commit/51806aa>
// See: <https://github.com/wooorm/lowlight/issues/43>
var className=name.split('.').map(function(d,i){return i?d+'_'.repeat(i):_this15.options.classPrefix+d;});var current=this.stack[this.stack.length-1];/** @type {Span} */var child={type:'element',tagName:'span',properties:{className:className},children:[]};current.children.push(child);this.stack.push(child);}/**
         */},{key:"closeNode",value:function closeNode(){this.stack.pop();}/**
         */},{key:"closeAllNodes",value:function closeAllNodes(){}/**
         */},{key:"finalize",value:function finalize(){}/**
         */},{key:"toHTML",value:function toHTML(){return'';}}]);return HastEmitter;}();var lowlight={highlight:highlight,highlightAuto:highlightAuto,registerLanguage:registerLanguage,registered:registered,listLanguages:listLanguages,registerAlias:registerAlias};/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       * @typedef {import('hast').Element} Element
       *
       * @typedef {string} TagName
       * @typedef {null|undefined|TagName|TestFunctionAnything|Array.<TagName|TestFunctionAnything>} Test
       */var convertElement=/**
         * @type {(
         *   (<T extends Element>(test: T['tagName']|TestFunctionPredicate<T>) => AssertPredicate<T>) &
         *   ((test?: Test) => AssertAnything)
         * )}
         */ /**
           * Generate an assertion from a check.
           * @param {Test} [test]
           * When nullish, checks if `node` is a `Node`.
           * When `string`, works like passing `function (node) {return node.type === test}`.
           * When `function` checks if function passed the node is true.
           * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
           * When `array`, checks any one of the subtests pass.
           * @returns {AssertAnything}
           */function convertElement(test){if(test===undefined||test===null){return element;}if(typeof test==='string'){return tagNameFactory(test);}if(_typeof(test)==='object'){return anyFactory(test);}if(typeof test==='function'){return castFactory(test);}throw new Error('Expected function, string, or array as test');};/**
       * @param {Array.<TagName|TestFunctionAnything>} tests
       * @returns {AssertAnything}
       */function anyFactory(tests){/** @type {Array.<AssertAnything>} */var checks=[];var index=-1;while(++index<tests.length){checks[index]=convertElement(tests[index]);}return castFactory(any);/**
         * @this {unknown}
         * @param {unknown[]} parameters
         * @returns {boolean}
         */function any(){var index=-1;for(var _len15=arguments.length,parameters=new Array(_len15),_key16=0;_key16<_len15;_key16++){parameters[_key16]=arguments[_key16];}while(++index<checks.length){var _checks$index2;if((_checks$index2=checks[index]).call.apply(_checks$index2,[this].concat(parameters))){return true;}}return false;}}/**
       * Utility to convert a string into a function which checks a given node’s tag
       * name for said string.
       *
       * @param {TagName} check
       * @returns {AssertAnything}
       */function tagNameFactory(check){return tagName;/**
         * @param {unknown} node
         * @returns {boolean}
         */function tagName(node){return element(node)&&node.tagName===check;}}/**
       * @param {TestFunctionAnything} check
       * @returns {AssertAnything}
       */function castFactory(check){return assertion;/**
         * @this {unknown}
         * @param {unknown} node
         * @param {Array.<unknown>} parameters
         * @returns {boolean}
         */function assertion(node){for(var _len16=arguments.length,parameters=new Array(_len16>1?_len16-1:0),_key17=1;_key17<_len16;_key17++){parameters[_key17-1]=arguments[_key17];}// @ts-expect-error: fine.
return element(node)&&Boolean(check.call.apply(check,[this,node].concat(parameters)));}}/**
       * Utility to return true if this is an element.
       * @param {unknown} node
       * @returns {node is Element}
       */function element(node){return Boolean(node&&_typeof(node)==='object'&&// @ts-expect-error Looks like a node.
node.type==='element'&&// @ts-expect-error Looks like an element.
typeof node.tagName==='string');}/**
       * @typedef {import('unist').Node} Node
       * @typedef {import('unist').Parent} Parent
       *
       * @typedef {import('unist-util-is').Type} Type
       * @typedef {import('unist-util-is').Props} Props
       * @typedef {import('unist-util-is').TestFunctionAnything} TestFunctionAnything
       */var findAfter=/**
         * @type {(
         *  (<T extends Node>(node: Parent, index: Node|number, test: T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>>) => T|null) &
         *  ((node: Parent, index: Node|number, test?: null|undefined|Type|Props|TestFunctionAnything|Array<Type|Props|TestFunctionAnything>) => Node|null)
         * )}
         */ /**
           * @param {Parent} parent Parent node
           * @param {Node|number} index Child of `parent`, or it’s index
           * @param {null|undefined|Type|Props|TestFunctionAnything|Array<Type|Props|TestFunctionAnything>} [test] is-compatible test (such as a type)
           * @returns {Node|null}
           */function findAfter(parent,index,test){var is=convert(test);if(!parent||!parent.type||!parent.children){throw new Error('Expected parent node');}if(typeof index==='number'){if(index<0||index===Number.POSITIVE_INFINITY){throw new Error('Expected positive finite number as index');}}else{index=parent.children.indexOf(index);if(index<0){throw new Error('Expected child node or index');}}while(++index<parent.children.length){if(is(parent.children[index],index,parent)){return parent.children[index];}}return null;};/**
       * @typedef {import('hast-util-is-element').TestFunctionAnything} TestFunctionAnything
       * @typedef {import('hast').Parent['children'][number]} HastChild
       * @typedef {import('hast').Text} HastText
       * @typedef {import('hast').Comment} HastComment
       * @typedef {import('hast').Root} HastRoot
       * @typedef {import('hast').Element} HastElement
       * @typedef {import('hast').Properties} HastProperties
       * @typedef {HastChild|HastRoot} HastNode
       * @typedef {HastRoot|HastElement} HastParent
       *
       * @typedef {'normal'|'pre'|'nowrap'|'pre-wrap'} Whitespace
       * @typedef {boolean} BreakValue
       * @typedef {1|2} BreakNumber
       * @typedef {'\n'} BreakForce
       * @typedef {BreakValue|BreakNumber|undefined} BreakBefore
       * @typedef {BreakValue|BreakNumber|BreakForce|undefined} BreakAfter
       *
       * @typedef CollectionOptions
       * @property {Whitespace} whitespace
       * @property {BreakBefore} breakBefore
       * @property {BreakAfter} breakAfter
       *
       * @typedef Options
       *   Configuration.
       * @property {Whitespace} [whitespace='normal']
       *   Initial CSS whitespace setting to use.
       */var searchLineFeeds=/\n/g;var searchTabOrSpaces=/[\t ]+/g;var br=convertElement('br');var p=convertElement('p');var cell=convertElement(['th','td']);var row=convertElement('tr');// Note that we don’t need to include void elements here as they don’t have text.
// See: <https://github.com/wooorm/html-void-elements>
var notRendered=convertElement([// List from: <https://html.spec.whatwg.org/#hidden-elements>
'datalist','head','noembed','noframes','noscript',// Act as if we support scripting.
'rp','script','style','template','title',// Hidden attribute.
hidden,// From: <https://html.spec.whatwg.org/#flow-content-3>
closedDialog]);// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
var blockOrCaption=convertElement(['address',// Flow content
'article',// Sections and headings
'aside',// Sections and headings
'blockquote',// Flow content
'body',// Page
'caption',// `table-caption`
'center',// Flow content (legacy)
'dd',// Lists
'dialog',// Flow content
'dir',// Lists (legacy)
'dl',// Lists
'dt',// Lists
'div',// Flow content
'figure',// Flow content
'figcaption',// Flow content
'footer',// Flow content
'form,',// Flow content
'h1',// Sections and headings
'h2',// Sections and headings
'h3',// Sections and headings
'h4',// Sections and headings
'h5',// Sections and headings
'h6',// Sections and headings
'header',// Flow content
'hgroup',// Sections and headings
'hr',// Flow content
'html',// Page
'legend',// Flow content
'listing',// Flow content (legacy)
'main',// Flow content
'menu',// Lists
'nav',// Sections and headings
'ol',// Lists
'p',// Flow content
'plaintext',// Flow content (legacy)
'pre',// Flow content
'section',// Sections and headings
'ul',// Lists
'xmp'// Flow content (legacy)
]);/**
       * Implementation of the `innerText` getter:
       * <https://html.spec.whatwg.org/#the-innertext-idl-attribute>
       * Note that we act as if `node` is being rendered, and as if we’re a
       * CSS-supporting user agent.
       *
       * @param {HastNode} node
       * @param {Options} [options={}]
       * @returns {string}
       */function toText(node){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};/** @type {Array.<HastChild>} */ // @ts-ignore looks like a parent.
var children=node.children||[];var block=blockOrCaption(node);var whitespace=inferWhitespace(node,{whitespace:options.whitespace||'normal',breakBefore:false,breakAfter:false});var index=-1;/** @type {Array.<string|BreakNumber>} */var results;/** @type {string|BreakNumber} */var value;/** @type {number|undefined} */var count;// Treat `text` and `comment` as having normal white-space.
// This deviates from the spec as in the DOM the node’s `.data` has to be
// returned.
// If you want that behavior use `hast-util-to-string`.
// All other nodes are later handled as if they are `element`s (so the
// algorithm also works on a `root`).
// Nodes without children are treated as a void element, so `doctype` is thus
// ignored.
if(node.type==='text'||node.type==='comment'){return collectText(node,{whitespace:whitespace,breakBefore:true,breakAfter:true});}// 1.  If this element is not being rendered, or if the user agent is a
//     non-CSS user agent, then return the same value as the textContent IDL
//     attribute on this element.
//
//     Note: we’re not supporting stylesheets so we’re acting as if the node
//     is rendered.
//
//     If you want that behavior use `hast-util-to-string`.
//     Important: we’ll have to account for this later though.
// 2.  Let results be a new empty list.
results=[];// 3.  For each child node node of this element:
while(++index<children.length){// 3.1. Let current be the list resulting in running the inner text
//      collection steps with node.
//      Each item in results will either be a JavaScript string or a
//      positive integer (a required line break count).
// 3.2. For each item item in current, append item to results.
results=results.concat(// @ts-ignore Looks like a parent.
innerTextCollection(children[index],node,{whitespace:whitespace,breakBefore:index?null:block,breakAfter:index<children.length-1?br(children[index+1]):block}));}// 4.  Remove any items from results that are the empty string.
// 5.  Remove any runs of consecutive required line break count items at the
//     start or end of results.
// 6.  Replace each remaining run of consecutive required line break count
//     items with a string consisting of as many U+000A LINE FEED (LF)
//     characters as the maximum of the values in the required line break
//     count items.
index=-1;/** @type {Array.<string>} */var result=[];while(++index<results.length){value=results[index];if(typeof value==='number'){if(count!==undefined&&value>count)count=value;}else if(value){if(count)result.push('\n'.repeat(count));count=0;result.push(value);}}// 7.  Return the concatenation of the string items in results.
return result.join('');}/**
       * <https://html.spec.whatwg.org/#inner-text-collection-steps>
       *
       * @param {HastNode} node
       * @param {HastParent} parent
       * @param {CollectionOptions} options
       * @returns {Array.<string|BreakNumber>}
       */function innerTextCollection(node,parent,options){if(node.type==='element'){return collectElement(node,parent,options);}if(node.type==='text'){return[options.whitespace==='normal'?collectText(node,options):collectPreText(node)];}return[];}/**
       * Collect an element.
       *
       * @param {HastElement} node
       * @param {HastParent} parent
       * @param {CollectionOptions} options
       */function collectElement(node,parent,options){// First we infer the `white-space` property.
var whitespace=inferWhitespace(node,options);var children=node.children||[];var index=-1;/** @type {Array.<string|BreakNumber>} */var items=[];/** @type {BreakNumber|undefined} */var prefix;/** @type {BreakNumber|BreakForce|undefined} */var suffix;// We’re ignoring point 3, and exiting without any content here, because we
// deviated from the spec in `toText` at step 3.
if(notRendered(node)){return items;}// Note: we first detect if there is going to be a break before or after the
// contents, as that changes the white-space handling.
// 2.  If node’s computed value of `visibility` is not `visible`, then return
//     items.
//
//     Note: Ignored, as everything is visible by default user agent styles.
// 3.  If node is not being rendered, then return items. [...]
//
//     Note: We already did this above.
// See `collectText` for step 4.
// 5.  If node is a `<br>` element, then append a string containing a single
//     U+000A LINE FEED (LF) character to items.
if(br(node)){suffix='\n';}// 7.  If node’s computed value of `display` is `table-row`, and node’s CSS
//     box is not the last `table-row` box of the nearest ancestor `table`
//     box, then append a string containing a single U+000A LINE FEED (LF)
//     character to items.
//
//     See: <https://html.spec.whatwg.org/#tables-2>
//     Note: needs further investigation as this does not account for implicit
//     rows.
else if(row(node)&&findAfter(parent,node,row)){suffix='\n';}// 8.  If node is a `<p>` element, then append 2 (a required line break count)
//     at the beginning and end of items.
else if(p(node)){prefix=2;suffix=2;}// 9.  If node’s used value of `display` is block-level or `table-caption`,
//     then append 1 (a required line break count) at the beginning and end of
//     items.
else if(blockOrCaption(node)){prefix=1;suffix=1;}// 1.  Let items be the result of running the inner text collection steps with
//     each child node of node in tree order, and then concatenating the
//     results to a single list.
while(++index<children.length){items=items.concat(innerTextCollection(children[index],node,{whitespace:whitespace,breakBefore:index?undefined:prefix,breakAfter:index<children.length-1?br(children[index+1]):suffix}));}// 6.  If node’s computed value of `display` is `table-cell`, and node’s CSS
//     box is not the last `table-cell` box of its enclosing `table-row` box,
//     then append a string containing a single U+0009 CHARACTER TABULATION
//     (tab) character to items.
//
//     See: <https://html.spec.whatwg.org/#tables-2>
if(cell(node)&&findAfter(parent,node,cell)){items.push('\t');}// Add the pre- and suffix.
if(prefix)items.unshift(prefix);if(suffix)items.push(suffix);return items;}/**
       * 4.  If node is a Text node, then for each CSS text box produced by node,
       *     in content order, compute the text of the box after application of the
       *     CSS `white-space` processing rules and `text-transform` rules, set
       *     items to the list of the resulting strings, and return items.
       *     The CSS `white-space` processing rules are slightly modified:
       *     collapsible spaces at the end of lines are always collapsed, but they
       *     are only removed if the line is the last line of the block, or it ends
       *     with a br element.
       *     Soft hyphens should be preserved.
       *
       *     Note: See `collectText` and `collectPreText`.
       *     Note: we don’t deal with `text-transform`, no element has that by
       *     default.
       *
       * See: <https://drafts.csswg.org/css-text/#white-space-phase-1>
       *
       * @param {HastText|HastComment} node
       * @param {CollectionOptions} options
       * @returns {string}
       */function collectText(node,options){var value=String(node.value);/** @type {Array.<string>} */var lines=[];/** @type {Array.<string>} */var result=[];var start=0;var index=-1;/** @type {RegExpMatchArray|null} */var match;/** @type {number} */var end;/** @type {string|undefined} */var join;while(start<value.length){searchLineFeeds.lastIndex=start;match=searchLineFeeds.exec(value);// @ts-expect-error: `index` is set.
end=match?match.index:value.length;lines.push(// Any sequence of collapsible spaces and tabs immediately preceding or
// following a segment break is removed.
trimAndCollapseSpacesAndTabs(// [...] ignoring bidi formatting characters (characters with the
// Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
// they were not there.
value.slice(start,end).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,''),options.breakBefore,options.breakAfter));start=end+1;}// Collapsible segment breaks are transformed for rendering according to the
// segment break transformation rules.
// So here we jump to 4.1.2 of [CSSTEXT]:
// Any collapsible segment break immediately following another collapsible
// segment break is removed
while(++index<lines.length){// *   If the character immediately before or immediately after the segment
//     break is the zero-width space character (U+200B), then the break is
//     removed, leaving behind the zero-width space.
if(lines[index].charCodeAt(lines[index].length-1)===0x200b/* ZWSP */||index<lines.length-1&&lines[index+1].charCodeAt(0)===0x200b/* ZWSP */){result.push(lines[index]);join='';}// *   Otherwise, if the East Asian Width property [UAX11] of both the
//     character before and after the segment break is Fullwidth, Wide, or
//     Halfwidth (not Ambiguous), and neither side is Hangul, then the
//     segment break is removed.
//
//     Note: ignored.
// *   Otherwise, if the writing system of the segment break is Chinese,
//     Japanese, or Yi, and the character before or after the segment break
//     is punctuation or a symbol (Unicode general category P* or S*) and
//     has an East Asian Width property of Ambiguous, and the character on
//     the other side of the segment break is Fullwidth, Wide, or Halfwidth,
//     and not Hangul, then the segment break is removed.
//
//     Note: ignored.
// *   Otherwise, the segment break is converted to a space (U+0020).
else if(lines[index]){if(join)result.push(join);result.push(lines[index]);join=' ';}}return result.join('');}/**
       * @param {HastText|HastComment} node
       * @returns {string}
       */function collectPreText(node){return String(node.value);}/**
       * 3.  Every collapsible tab is converted to a collapsible space (U+0020).
       * 4.  Any collapsible space immediately following another collapsible
       *     space—even one outside the boundary of the inline containing that
       *     space, provided both spaces are within the same inline formatting
       *     context—is collapsed to have zero advance width. (It is invisible,
       *     but retains its soft wrap opportunity, if any.)
       *
       * @param {string} value
       * @param {BreakBefore} breakBefore
       * @param {BreakAfter} breakAfter
       * @returns {string}
       */function trimAndCollapseSpacesAndTabs(value,breakBefore,breakAfter){/** @type {Array.<string>} */var result=[];var start=0;/** @type {RegExpMatchArray|null} */var match;/** @type {number} */var end;while(start<value.length){searchTabOrSpaces.lastIndex=start;match=searchTabOrSpaces.exec(value);// @ts-expect-error: `index` is set.
end=match?match.index:value.length;// If we’re not directly after a segment break, but there was white space,
// add an empty value that will be turned into a space.
if(!start&&!end&&match&&!breakBefore){result.push('');}if(start!==end){result.push(value.slice(start,end));}start=match?end+match[0].length:end;}// If we reached the end, there was trailing white space, and there’s no
// segment break after this node, add an empty value that will be turned
// into a space.
// @ts-expect-error: `end` is defined.
if(start!==end&&!breakAfter){result.push('');}return result.join(' ');}/**
       * We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
       *
       * @param {HastNode} node
       * @param {CollectionOptions} options
       * @returns {Whitespace}
       */function inferWhitespace(node,options){/** @type {HastProperties} */var props;if(node.type==='element'){props=node.properties||{};switch(node.tagName){case'listing':case'plaintext':case'xmp':return'pre';case'nobr':return'nowrap';case'pre':return props.wrap?'pre-wrap':'pre';case'td':case'th':return props.noWrap?'nowrap':options.whitespace;case'textarea':return'pre-wrap';}}return options.whitespace;}/** @type {TestFunctionAnything} */function hidden(node){return Boolean((node.properties||{}).hidden);}/** @type {TestFunctionAnything} */function closedDialog(node){return node.tagName==='dialog'&&!(node.properties||{}).open;}/**
       * @typedef {import('lowlight').Root} LowlightRoot
       * @typedef {import('lowlight/lib/core.js').HighlightSyntax} HighlightSyntax
       * @typedef {import('hast').Root} Root
       * @typedef {import('hast').Element} Element
       * @typedef {Root|Root['children'][number]} Node
       *
       * @typedef Options
       *   Configuration (optional).
       * @property {string} [prefix='hljs-']
       *   Prefix to use before classes.
       * @property {boolean|Array<string>} [subset]
       *   Scope of languages to check when auto-detecting (default: all languages).
       *   Pass `false` to not highlight code without language classes.
       * @property {boolean} [ignoreMissing=false]
       *   Swallow errors for missing languages.
       *   By default, unregistered syntaxes throw an error when they are used.
       *   Pass `true` to swallow those errors and thus ignore code with unknown code
       *   languages.
       * @property {Array<string>} [plainText=[]]
       *   List of plain-text languages.
       *   Pass any languages you would like to be kept as plain-text instead of
       *   getting highlighted.
       * @property {Record<string, string|Array<string>>} [aliases={}]
       *   Register more aliases.
       *   Passed to `lowlight.registerAlias`.
       * @property {Record<string, HighlightSyntax>} [languages={}]
       *   Register more languages.
       *   Each key/value pair passed as arguments to `lowlight.registerLanguage`.
       */var own={}.hasOwnProperty;/**
       * Plugin to highlight the syntax of code with lowlight (`highlight.js`).
       *
       * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}
       */function rehypeHighlight(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var aliases=options.aliases,languages=options.languages,prefix=options.prefix,plainText=options.plainText,ignoreMissing=options.ignoreMissing,subset=options.subset;var name='hljs';if(aliases){lowlight.registerAlias(aliases);}if(languages){/** @type {string} */var key;for(key in languages){if(own.call(languages,key)){lowlight.registerLanguage(key,languages[key]);}}}if(prefix){var pos=prefix.indexOf('-');name=pos>-1?prefix.slice(0,pos):prefix;}return function(tree){// eslint-disable-next-line complexity
visit$1(tree,'element',function(node,_,givenParent){var parent=/** @type {Node?} */givenParent;if(!parent||!('tagName'in parent)||parent.tagName!=='pre'||node.tagName!=='code'||!node.properties){return;}var lang=language(node);if(lang===false||!lang&&subset===false||lang&&plainText&&plainText.includes(lang)){return;}if(!Array.isArray(node.properties.className)){node.properties.className=[];}if(!node.properties.className.includes(name)){node.properties.className.unshift(name);}/** @type {LowlightRoot} */var result;try{result=lang?lowlight.highlight(lang,toText(parent),{prefix:prefix}):// @ts-expect-error: we checked that `subset` is not a boolean.
lowlight.highlightAuto(toText(parent),{prefix:prefix,subset:subset});}catch(error){var exception=/** @type {Error} */error;if(!ignoreMissing||!/Unknown language/.test(exception.message)){throw error;}return;}if(!lang&&result.data.language){node.properties.className.push('language-'+result.data.language);}if(Array.isArray(result.children)&&result.children.length>0){node.children=result.children;}});};}/**
       * Get the programming language of `node`.
       *
       * @param {Element} node
       * @returns {false|string|undefined}
       */function language(node){var className=node.properties&&node.properties.className;var index=-1;if(!Array.isArray(className)){return;}while(++index<className.length){var value=String(className[index]);if(value==='no-highlight'||value==='nohighlight'){return false;}if(value.slice(0,5)==='lang-'){return value.slice(5);}if(value.slice(0,9)==='language-'){return value.slice(9);}}}var githubMarkdown='';var Markdown=exports('e',function(props){return/* @__PURE__ */React.createElement(Box,{className:"markdown-body"},/* @__PURE__ */React.createElement(ReactMarkdown,{remarkPlugins:[remarkGfm],rehypePlugins:[rehypeRaw,[rehypeHighlight,{ignoreMissing:true}]]},props.children));});var Settings=[];var getSetting=exports('g',function(key){var setting=Settings.find(function(setting2){return setting2.key===key;});return setting?setting.value:"";});var IContext=exports('I',react$1.exports.createContext({files:[],setFiles:function setFiles(){},type:"folder",show:"list",getSetting:getSetting,lastFiles:[],setLastFiles:function setLastFiles(){},password:"",settingLoaded:false,msg:"",setMsg:function setMsg(){},sort:{reverse:false},setSort:function setSort(){},multiSelect:false,setMultiSelect:function setMultiSelect(){},selectFiles:[],setSelectFiles:function setSelectFiles(){},setType:function setType(){},meta:{driver:"",upload:false,total:0,readme:""},setMeta:function setMeta(){},loggedIn:false,page:{page_num:1,page_size:30},setPage:function setPage(){},hideFiles:[],aria2:{rpcUrl:"",rpcSecret:""},setAria2:function setAria2(){}}));var IContextProvider=exports('x',function(props){var toast=useToast();var _useTranslation=useTranslation(),t=_useTranslation.t;var _React$useState=React.useState([]),_React$useState2=_slicedToArray(_React$useState,2),files=_React$useState2[0],setFiles=_React$useState2[1];var _React$useState3=React.useState([]),_React$useState4=_slicedToArray(_React$useState3,2),lastFiles=_React$useState4[0],setLastFiles=_React$useState4[1];var _React$useState5=React.useState("loading"),_React$useState6=_slicedToArray(_React$useState5,2),type=_React$useState6[0],setType=_React$useState6[1];var _react$1$exports$useS3=react$1.exports.useState(""),_react$1$exports$useS4=_slicedToArray(_react$1$exports$useS3,2),msg=_react$1$exports$useS4[0],setMsg=_react$1$exports$useS4[1];var _React$useState7=React.useState(false),_React$useState8=_slicedToArray(_React$useState7,2),settingLoaded=_React$useState8[0],setSettingLoaded=_React$useState8[1];var _React$useState9=React.useState(localStorage.getItem("password")||""),_React$useState10=_slicedToArray(_React$useState9,2),password=_React$useState10[0],setPassword=_React$useState10[1];var _react$1$exports$useS5=react$1.exports.useState({orderBy:void 0,reverse:false}),_react$1$exports$useS6=_slicedToArray(_react$1$exports$useS5,2),sort=_react$1$exports$useS6[0],setSort=_react$1$exports$useS6[1];var _useLocalStorage=useLocalStorage("multiSelect",false),_useLocalStorage2=_slicedToArray(_useLocalStorage,2),multiSelect=_useLocalStorage2[0],setMultiSelect=_useLocalStorage2[1];var _react$1$exports$useS7=react$1.exports.useState([]),_react$1$exports$useS8=_slicedToArray(_react$1$exports$useS7,2),selectFiles=_react$1$exports$useS8[0],setSelectFiles=_react$1$exports$useS8[1];var _React$useState11=React.useState(localStorage.getItem("show")||"list"),_React$useState12=_slicedToArray(_React$useState11,2),show=_React$useState12[0],setShow=_React$useState12[1];var _React$useState13=React.useState({page_num:1,page_size:30}),_React$useState14=_slicedToArray(_React$useState13,2),page=_React$useState14[0],setPage=_React$useState14[1];var _React$useState15=React.useState({rpcUrl:"",rpcSecret:""}),_React$useState16=_slicedToArray(_React$useState15,2),aria2=_React$useState16[0],setAria2=_React$useState16[1];var _React$useState17=React.useState([]),_React$useState18=_slicedToArray(_React$useState17,2),hideFiles=_React$useState18[0],setHideFiles=_React$useState18[1];var darkMode=useColorModeValue(false,true);var initialSettings=react$1.exports.useCallback(function(){instance$1.get("settings").then(function(resp){var res=resp.data;if(res.code===200){Settings=res.data;document.title=getSetting("title")||"Alist";var _version=getSetting("version")||"Unknown";console.log("%c Alist %c ".concat(_version," %c https://github.com/Xhofe/alist"),"color: #fff; background: #5f5f5f","color: #fff; background: #4bc729","");if(getSetting("favicon")){var _link=document.querySelector("link[rel*='icon']")||document.createElement("link");_link.type="image/x-icon";_link.rel="shortcut icon";_link.href=getSetting("favicon");document.getElementsByTagName("head")[0].appendChild(_link);}if(getSetting("announcement")){htoast(function(t2){return/* @__PURE__ */React.createElement(Markdown,null,getSetting("announcement"));},{position:"top-right",style:darkMode?{borderRadius:"10px",background:"#333",color:"#fff"}:void 0});}if(getSetting("hide files")){var hideFiles2=getSetting("hide files").split(/\n/g).filter(function(item){return!!item.trim();}).map(function(item){item=item.trim();var str=item.replace(/^\/(.*)\/([a-z]*)$/,"$1");var args=item.replace(/^\/(.*)\/([a-z]*)$/,"$2");return new RegExp(str,args);});setHideFiles(hideFiles2);}setPage(_objectSpread(_objectSpread({},page),{},{page_size:parseInt(getSetting("default page size")||"30")}));setSettingLoaded(true);}else{toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}}).catch(function(err){toast({title:t("Error"),description:err.message,status:"error",duration:null});});},[]);var login=react$1.exports.useCallback(function(){if(!localStorage.getItem("admin-token")){return;}admin.get("login").then(function(resp){if(resp.data.code===200){setLoggedIn(true);}});},[]);var aria2Config=react$1.exports.useCallback(function(){admin.get("settings?group=1").then(function(resp){var res=resp.data;if(res.code===200){var setting=res.data;var url=setting.find(function(item){return item.key==="Aria2 RPC url";});var secret=setting.find(function(item){return item.key==="Aria2 RPC secret";});setAria2({rpcUrl:(url===null||url===void 0?void 0:url.value)||"",rpcSecret:(secret===null||secret===void 0?void 0:secret.value)||""});}});},[]);react$1.exports.useEffect(function(){initialSettings();login();aria2Config();},[]);var _React$useState19=React.useState(false),_React$useState20=_slicedToArray(_React$useState19,2),showUnfold=_React$useState20[0],setShowUnfold=_React$useState20[1];var _React$useState21=React.useState(false),_React$useState22=_slicedToArray(_React$useState21,2),unfold=_React$useState22[0],setUnfold=_React$useState22[1];var _React$useState23=React.useState({driver:"",upload:false,total:0,readme:""}),_React$useState24=_slicedToArray(_React$useState23,2),meta=_React$useState24[0],setMeta=_React$useState24[1];var _React$useState25=React.useState(false),_React$useState26=_slicedToArray(_React$useState25,2),loggedIn=_React$useState26[0],setLoggedIn=_React$useState26[1];if(!settingLoaded){return/* @__PURE__ */React.createElement(Center,{w:"full",h:"100vh"},/* @__PURE__ */React.createElement(reactSpinners.ClimbingBoxLoader,{color:"#1890ff",loading:true,size:20}));}return/* @__PURE__ */React.createElement(IContext.Provider,_objectSpread({value:{files:files,setFiles:setFiles,type:type,setType:setType,show:show,setShow:setShow,getSetting:getSetting,showUnfold:showUnfold,setShowUnfold:setShowUnfold,unfold:unfold,setUnfold:setUnfold,lastFiles:lastFiles,setLastFiles:setLastFiles,password:password,setPassword:setPassword,settingLoaded:settingLoaded,msg:msg,setMsg:setMsg,sort:sort,setSort:setSort,multiSelect:multiSelect,setMultiSelect:setMultiSelect,selectFiles:selectFiles,setSelectFiles:setSelectFiles,meta:meta,setMeta:setMeta,loggedIn:loggedIn,page:page,setPage:setPage,hideFiles:hideFiles,aria2:aria2}},props));});var DefaultContext={color:undefined,size:undefined,className:undefined,style:undefined,attr:undefined};var IconContext=React.createContext&&React.createContext(DefaultContext);var __assign=globalThis&&globalThis.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};var __rest=globalThis&&globalThis.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};function Tree2Element(tree){return tree&&tree.map(function(node,i){return React.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child));});}function GenIcon(data){return function(props){return React.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child));};}function IconBase(props){var elem=function elem(conf){var attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]);var computedSize=size||conf.size||"1em";var className;if(conf.className)className=conf.className;if(props.className)className=(className?className+' ':'')+props.className;return React.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className:className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&React.createElement("title",null,title),props.children);};return IconContext!==undefined?React.createElement(IconContext.Consumer,null,function(conf){return elem(conf);}):elem(DefaultContext);}// THIS FILE IS AUTO GENERATED
function FaBook(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"}}]})(props);}function FaCompactDisc(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 496 512"},"child":[{"tag":"path","attr":{"d":"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"}}]})(props);}function FaDatabase(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"}}]})(props);}function FaListUl(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(props);}function FaMoon(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(props);}function FaSun(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(props);}// THIS FILE IS AUTO GENERATED
function BsFillArrowDownCircleFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"}}]})(props);}function BsFillArrowUpCircleFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"}}]})(props);}function BsFillFileEarmarkExcelFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64z"}}]})(props);}function BsFillFileEarmarkFontFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.057 6h5.886L11 8h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v5.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V6.755l-.293.01C5.856 6.808 5.68 6.905 5.5 8H5l.057-2z"}}]})(props);}function BsFillFileEarmarkImageFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"}},{"tag":"path","attr":{"d":"M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"}}]})(props);}function BsFillFileEarmarkMinusFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 8.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"}}]})(props);}function BsFillFileEarmarkMusicFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64v1.75l-2 .5v3.61c0 .495-.301.883-.662 1.123C7.974 13.866 7.499 14 7 14c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 11.134 6.501 11 7 11c.356 0 .7.068 1 .196V6.89a1 1 0 0 1 .757-.97l1-.25A1 1 0 0 1 11 6.64z"}}]})(props);}function BsFillFileEarmarkPdfFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}}]})(props);}function BsFillFileEarmarkPlayFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 6.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V6.884z"}}]})(props);}function BsFillFileEarmarkPptFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5z"}},{"tag":"path","attr":{"d":"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5H7z"}}]})(props);}function BsFillFileEarmarkZipFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M5.5 9.438V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243z"}},{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-4-.5V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3h1zm0 4.5h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V8.5a1 1 0 0 1 1-1z"}}]})(props);}function BsFillGridFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"}}]})(props);}function BsFillMarkdownFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5zM3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06V7.01z"}}]})(props);}function BsApple(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"}},{"tag":"path","attr":{"d":"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"}}]})(props);}function BsCardList(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}},{"tag":"path","attr":{"d":"M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"}}]})(props);}function BsCaretDownFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"}}]})(props);}function BsCaretRightFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}}]})(props);}function BsFileEarmarkWordFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"}}]})(props);}function BsGearFill(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"}}]})(props);}function BsWindows(props){return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"}}]})(props);}// THIS FILE IS AUTO GENERATED
function FiArrowUp(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"5"}},{"tag":"polyline","attr":{"points":"5 12 12 5 19 12"}}]})(props);}function FiCopy(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"9","y":"9","width":"13","height":"13","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(props);}function FiMenu(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"3","y1":"12","x2":"21","y2":"12"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"21","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"18","x2":"21","y2":"18"}}]})(props);}var ToTop=function ToTop(){var scrollToTop=function scrollToTop(){return window.scroll({top:0,behavior:"smooth"});};var getVisible=function getVisible(){return document.body.scrollTop>20||document.documentElement.scrollTop>20;};var _react$1$exports$useS9=react$1.exports.useState(false),_react$1$exports$useS10=_slicedToArray(_react$1$exports$useS9,2),isVisible=_react$1$exports$useS10[0],setIsVisible=_react$1$exports$useS10[1];react$1.exports.useEffect(function(){setIsVisible(function(){return getVisible();});var onScroll=function onScroll(){return setIsVisible(function(){return getVisible();});};window.addEventListener("scroll",onScroll);return function(){return window.removeEventListener("scroll",onScroll);};},[]);return/* @__PURE__ */React.createElement(IconButton,{"aria-label":"Back to top",title:"Back to top",icon:/* @__PURE__ */React.createElement(FiArrowUp,null),rounded:"full",pos:"fixed",bottom:"25",right:"4",colorScheme:"gray",onClick:scrollToTop,visibility:isVisible?"visible":"hidden"});};// THIS FILE IS AUTO GENERATED
function MdCached(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 01-2.8-.7l-1.46 1.46A7.93 7.93 0 0012 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0012 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}}]})(props);}function MdDeleteForever(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}}]})(props);}function MdHome(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}}]})(props);}function MdLanguage(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}}]})(props);}function MdDeleteSweep(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"}}]})(props);}function MdStorage(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"}}]})(props);}function MdDriveFileMove(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 12v-3h-4v-4h4V8l5 5-5 5z"}}]})(props);}function MdKeyboardArrowRight(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(props);}var HomeLink=function HomeLink(){var _useTranslation2=useTranslation(),t=_useTranslation2.t;return/* @__PURE__ */React.createElement(Tooltip,{shouldWrapChildren:true,hasArrow:true,label:t("Go to page",{page:t("home")}),placement:"left-start"},/* @__PURE__ */React.createElement(Link,{as:Link$1,to:"/"},/* @__PURE__ */React.createElement(IconButton,{size:"md","aria-label":t("Go to page",{page:t("home")}),variant:"ghost",colorScheme:"brand",icon:/* @__PURE__ */React.createElement(Icon,{as:MdHome,boxSize:6})})));};var ThemeToggle=function ThemeToggle(){var SwitchIcon=useColorModeValue(FaMoon,FaSun);var text=useColorModeValue("dark","light");var _useColorMode=useColorMode(),toggleMode=_useColorMode.toggleColorMode;var _useTranslation3=useTranslation(),t=_useTranslation3.t;return/* @__PURE__ */React.createElement(Tooltip,{shouldWrapChildren:true,hasArrow:true,label:t("Switch to color mode",{color:t(text)}),placement:"left-start"},/* @__PURE__ */React.createElement(IconButton,{size:"md","aria-label":t("Switch to color mode",{color:t(text)}),variant:"ghost",colorScheme:"brand",onClick:toggleMode,icon:/* @__PURE__ */React.createElement(Icon,{as:SwitchIcon,boxSize:5})}));};var Language=function Language(){var _useTranslation4=useTranslation(),t=_useTranslation4.t,i18n=_useTranslation4.i18n;var languages={"../../../i18n/locales/en.ts":__glob_4_0,"../../../i18n/locales/jp.ts":__glob_4_1,"../../../i18n/locales/zh.ts":__glob_4_2};var langs=Object.values(languages).map(function(lang){return lang.config;});return/* @__PURE__ */React.createElement(Box,null,/* @__PURE__ */React.createElement(Menu,{autoSelect:false},/* @__PURE__ */React.createElement(Tooltip,{shouldWrapChildren:true,hasArrow:true,label:t("Change language"),placement:"left-start"},/* @__PURE__ */React.createElement(MenuButton,{as:IconButton,size:"md","aria-label":t("Change language"),variant:"ghost",colorScheme:"brand",icon:/* @__PURE__ */React.createElement(Icon,{boxSize:6,as:MdLanguage})})),/* @__PURE__ */React.createElement(MenuList,null,langs.map(function(lang){return/* @__PURE__ */React.createElement(MenuItem,{key:lang.code,onClick:function onClick(){i18n.changeLanguage(lang.code);}},lang.text);}))));};// THIS FILE IS AUTO GENERATED
function AiOutlineFullscreenExit(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]})(props);}function AiOutlineFullscreen(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]})(props);}var Unfold=function Unfold(){var _useTranslation5=useTranslation(),t=_useTranslation5.t;var _react$1$exports$useC=react$1.exports.useContext(IContext),unfold=_react$1$exports$useC.unfold,setUnfold=_react$1$exports$useC.setUnfold,showUnfold=_react$1$exports$useC.showUnfold;if(!showUnfold)return null;return/* @__PURE__ */React.createElement(Tooltip,{shouldWrapChildren:true,hasArrow:true,label:t(unfold?"fold":"unfold"),placement:"left-start"},/* @__PURE__ */React.createElement(IconButton,{size:"md","aria-label":t(unfold?"fold":"unfold"),variant:"ghost",colorScheme:"brand",onClick:function onClick(){setUnfold(!unfold);},icon:/* @__PURE__ */React.createElement(Icon,{boxSize:6,as:unfold?AiOutlineFullscreenExit:AiOutlineFullscreen})}));};function inIframe(){try{return window.self!==window.top;}catch(e){return true;}}function Ss(props){return!inIframe()?/* @__PURE__ */React.createElement(Stack,{direction:"column",pos:"fixed",zIndex:1e3,right:0,bottom:70,w:10,border:"solid transparent",shadow:"lg",roundedLeft:"lg",bg:useColorModeValue("white","gray.700")},props.list&&/* @__PURE__ */React.createElement(Unfold,null),/* @__PURE__ */React.createElement(Language,null),/* @__PURE__ */React.createElement(ThemeToggle,null),/* @__PURE__ */React.createElement(HomeLink,null)):/* @__PURE__ */React.createElement(React.Fragment,null);}var Overlay=function Overlay(props){return/* @__PURE__ */React.createElement(Box,{className:"overlay",zIndex:"100"},/* @__PURE__ */React.createElement(Ss,_objectSpread({},props)),/* @__PURE__ */React.createElement(ToTop,null));};var Overlay$1=exports('O',Overlay);// THIS FILE IS AUTO GENERATED
function DiAndroid(props){return GenIcon({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 32 32"},"child":[{"tag":"path","attr":{"d":"M6.802 20.283c0 1.23-0.857 2.237-1.904 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.904 1.007 1.904 2.237v7.321zM29.007 20.283c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.905 1.007 1.905 2.237v7.321zM20.164 3.649l1.222-2.193c0.1-0.179 0.070-0.388-0.065-0.463s-0.329 0.009-0.428 0.188l-1.25 2.244c-1.115-0.439-2.364-0.684-3.684-0.684-1.33 0-2.588 0.25-3.71 0.695l-1.256-2.254c-0.1-0.179-0.293-0.264-0.428-0.188s-0.165 0.284-0.065 0.463l1.228 2.204c-2.555 1.2-4.276 3.453-4.276 6.035 0 0.262 0.019 0.521 0.053 0.776h16.909c0.035-0.255 0.053-0.513 0.053-0.776 0-2.59-1.732-4.849-4.301-6.046zM12.097 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM19.861 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM7.45 11.211v12.471h0.007c0.087 1.053 1.056 1.89 2.23 1.89h12.541c1.173 0 2.142-0.837 2.23-1.89h0.007v-12.471h-17.014zM14.74 25.51v3.858c0 1.23-0.857 2.237-1.905 2.237s-1.904-1.007-1.904-2.237v-3.855zM21.088 25.508v3.86c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.007-1.905-2.237v-3.86z"}}]})(props);}function DiGithubAlt(props){return GenIcon({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 32 32"},"child":[{"tag":"path","attr":{"d":"M19.906 17.847c0.429 0 0.79 0.21 1.102 0.636 0.31 0.422 0.468 0.944 0.468 1.56 0 0.619-0.156 1.141-0.468 1.563s-0.678 0.634-1.102 0.634c-0.451 0-0.839-0.21-1.151-0.634-0.307-0.422-0.465-0.944-0.465-1.563s0.153-1.139 0.465-1.56c0.312-0.427 0.702-0.636 1.151-0.636zM25.425 12.132c1.202 1.303 1.809 2.884 1.809 4.738 0 1.203-0.142 2.286-0.415 3.249-0.278 0.958-0.629 1.743-1.048 2.343-0.427 0.605-0.943 1.136-1.565 1.585-0.622 0.461-1.195 0.79-1.712 1.002s-1.112 0.376-1.785 0.49c-0.665 0.117-1.168 0.18-1.517 0.198-0.336 0.015-0.702 0.022-1.097 0.022-0.088 0-0.385 0.010-0.879 0.024-0.482 0.020-0.896 0.029-1.218 0.029s-0.736-0.010-1.218-0.029c-0.49-0.015-0.79-0.024-0.879-0.024-0.395 0-0.764-0.005-1.098-0.022-0.35-0.017-0.852-0.080-1.514-0.198-0.676-0.112-1.268-0.273-1.787-0.49-0.517-0.21-1.089-0.541-1.708-1.002-0.624-0.454-1.141-0.983-1.568-1.585-0.419-0.6-0.772-1.385-1.048-2.343-0.272-0.963-0.414-2.046-0.414-3.249 0-1.854 0.605-3.435 1.81-4.738-0.133-0.065-0.14-0.714-0.021-1.952 0.107-1.239 0.37-2.38 0.797-3.421 1.503 0.16 3.352 1.008 5.567 2.539 0.748-0.195 1.772-0.295 3.078-0.295 1.37 0 2.394 0.1 3.079 0.295 1.009-0.681 1.975-1.239 2.896-1.663 0.936-0.419 1.609-0.667 2.033-0.731l0.634-0.145c0.429 1.041 0.692 2.185 0.8 3.421 0.124 1.237 0.117 1.887-0.015 1.952zM16.052 24.683c2.703 0 4.741-0.324 6.125-0.973 1.38-0.651 2.082-1.99 2.082-4.008 0-1.17-0.441-2.15-1.322-2.932-0.454-0.424-0.985-0.681-1.595-0.781-0.595-0.098-1.514-0.098-2.755 0-1.236 0.1-2.082 0.145-2.537 0.145-0.619 0-1.291-0.033-2.125-0.098-0.834-0.062-1.487-0.102-1.954-0.122-0.478-0.015-0.986 0.045-1.538 0.172-0.557 0.133-1.008 0.357-1.373 0.681-0.84 0.75-1.266 1.725-1.266 2.932 0 2.019 0.684 3.357 2.050 4.006 1.365 0.653 3.397 0.975 6.101 0.975zM12.143 17.847c0.424 0 0.789 0.21 1.098 0.636 0.31 0.422 0.467 0.944 0.467 1.56 0 0.619-0.155 1.141-0.467 1.563-0.309 0.422-0.677 0.634-1.098 0.634-0.455 0-0.841-0.21-1.153-0.634-0.309-0.422-0.467-0.944-0.467-1.563s0.155-1.139 0.467-1.56c0.312-0.427 0.699-0.636 1.153-0.636z"}}]})(props);}}};});})();
