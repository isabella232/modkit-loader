__NUXT_JSONP__("/in-depth/advanced-usage", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{article:{title:"Modkit Loader - In Depth - Advanced Usage",toc:[{id:ac,depth:U,text:ad},{id:ae,depth:af,text:ag},{id:ah,depth:af,text:ai},{id:aj,depth:U,text:ak},{id:al,depth:U,text:am}],body:{type:V,children:[{type:b,tag:"h1",props:{id:an},children:[{type:b,tag:I,props:{ariaHidden:J,href:"#advanced-usage",tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ao}]},{type:a,value:g},{type:b,tag:D,props:{},children:[{type:a,value:"There is plenty other things you can do with "},{type:b,tag:q,props:{},children:[{type:a,value:"Modkit Loader"}]},{type:a,value:", check this out!"}]},{type:a,value:g},{type:b,tag:W,props:{id:ac},children:[{type:b,tag:I,props:{ariaHidden:J,href:"#manifest-parsing",tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ad}]},{type:a,value:g},{type:b,tag:D,props:{},children:[{type:a,value:"If you want to parse the manifest, in order to modify values, or even reject the loading of a module, you can pass an "},{type:b,tag:q,props:{},children:[{type:a,value:ap}]},{type:a,value:" function to Modkit.\nIt should either resolve with the manifest, or resolve empty (it we keep original manifest)."}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"function-variable",s]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,at,h]},children:[{type:a,value:au}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:"return"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:av}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"Promise"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" reject"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,at,h]},children:[{type:a,value:au}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"version"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"!=="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'1.0.0'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F Rewrite manifest properties"}]},{type:a,value:"\n      manifest"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"name"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"+="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'-rewritten'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F Do not load the module"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"reject"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:av}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"Error"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'The module version is invalid.'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:D,props:{},children:[{type:a,value:"You have two options:"}]},{type:a,value:g},{type:b,tag:ay,props:{id:ae},children:[{type:b,tag:I,props:{ariaHidden:J,href:"#globally",tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ag}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"options"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:X}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:ay,props:{id:ah},children:[{type:b,tag:I,props:{ariaHidden:J,href:"#on-load",tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ai}]},{type:a,value:g},{type:b,tag:D,props:{},children:[{type:a,value:"You can also pass the parse function as the second parameter of the "},{type:b,tag:q,props:{},children:[{type:a,value:w}]},{type:a,value:" function:"}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,H,s,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:W,props:{id:aj},children:[{type:b,tag:I,props:{ariaHidden:J,href:"#loading",tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ak}]},{type:a,value:g},{type:b,tag:D,props:{},children:[{type:a,value:"You can load a module easily with the "},{type:b,tag:q,props:{},children:[{type:a,value:w}]},{type:a,value:" function.\nThe function accepts four different params:"}]},{type:a,value:g},{type:b,tag:R,props:{},children:[{type:a,value:g},{type:b,tag:S,props:{},children:[{type:a,value:"A URL to a JSON manifest."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,H,s,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:R,props:{},children:[{type:a,value:g},{type:b,tag:S,props:{},children:[{type:a,value:"A list of URLS to JSON manifests."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,H,s,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aB}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'http:\u002F\u002Fmy-server\u002Fmy-first-module\u002Fmanifest.json'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'http:\u002F\u002Fmy-server\u002Fmy-second-module\u002Fmanifest.json'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:R,props:{},children:[{type:a,value:g},{type:b,tag:S,props:{},children:[{type:a,value:"A manifest."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,H,s,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aI}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aK}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:R,props:{},children:[{type:a,value:g},{type:b,tag:S,props:{},children:[{type:a,value:"A list of manifests."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,H,s,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aB}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"my-first-module\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"MyFirstModule\""}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aK}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"my-second-module\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"iife\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"MySecondModule\""}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"1.2.4\""}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:W,props:{id:al},children:[{type:b,tag:I,props:{ariaHidden:J,href:"#handling-static-assets",tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:am}]},{type:a,value:g},{type:b,tag:D,props:{},children:[{type:a,value:"You can find the root path of your module under the "},{type:b,tag:q,props:{},children:[{type:a,value:"rootPath"}]},{type:a,value:" attribute inside your module manifest."}]},{type:a,value:g},{type:b,tag:D,props:{},children:[{type:a,value:"When initializing your module, you should pass this variable, and use inside your views."}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F Application Side"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" mod"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,x]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,H,s,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"http:\u002F\u002Fmy-server\u002Fmy-module\u002Futils\u002Fentry.js\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aI}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"0.8.5\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F Here we call an exported \"load\" function of the module, giving the rootPath context"}]},{type:a,value:"\nres"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"mod"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,H,s,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F Module Side"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,"module"]},children:[{type:a,value:"export"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F In this example, with that manifest"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F rootPath = 'http:\u002F\u002Fmy-server\u002Fmy-module\u002Futils'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g}]}]}]}]},dir:"\u002Fin-depth",path:aQ,extension:aa,slug:an,createdAt:O,updatedAt:O,navbar:{links:[{title:"Home",path:ab}],github:{link:"https:\u002F\u002Fgithub.com\u002Fgenesys\u002Fmodkit-loader"},toc:[],body:{type:V,children:[]},dir:ab,path:"\u002F_navbar",extension:aa,slug:"_navbar",createdAt:O,updatedAt:O},sidebar:{links:[{group:"A Quick Overview",links:[{title:"Introduction",path:"\u002Foverview\u002Fintroduction"},{title:"Getting Started",path:"\u002Foverview\u002Fgetting-started"}]},{group:"In depth",links:[{title:ao,path:aQ},{title:"Modules",path:"\u002Fin-depth\u002Fmodules"}]},{group:"Playgrounds",links:[{title:"Iife",path:"\u002Fplayground\u002Fiife"},{title:"Amd",path:"\u002Fplayground\u002Famd"},{title:"Umd",path:"\u002Fplayground\u002Fumd"},{title:"Esm",path:"\u002Fplayground\u002Fesm"},{title:"System",path:"\u002Fplayground\u002Fsystem"}]}],toc:[],body:{type:V,children:[]},dir:ab,path:"\u002F_sidebar",extension:aa,slug:"_sidebar",createdAt:O,updatedAt:O}}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation"," ","\n","operator","string",":",",","keyword","{","}","(",")","code",";","function","\n  ",".","property-access","load","control-flow","div","nuxt-content-highlight","pre","language-javascript","line-numbers","p","comment","maybe-class-name","Modkit","method","a","true",-1,"icon","icon-link","await","2021-03-05T14:09:07.294Z","\n    ","\n      ","ul","li","\n    name",2,"root","h2","=","parameter","\".\u002Fdist\u002Fentryfile.js\"","\"umd\""," rootPath ",".md","\u002F","manifest-parsing","Manifest Parsing","globally",3,"Globally","on-load","On load","loading","Loading","handling-static-assets","Handling static assets","advanced-usage","Advanced Usage","async","const","parseManifest","manifest","arrow","=\u003E","new","class-name","resolve","h3"," parseManifest","'http:\u002F\u002Fmy-server\u002Fmy-module\u002Fmanifest.json'","[","]","\n  name","\"my-module\"","\n  endpoint","\n  format","\n    type","\"MyModule\"","\n  version","\"0.0.8\"","\n    endpoint","\n    format","\n      type","\n      name","\n    version","\u002Fin-depth\u002Fadvanced-usage")));