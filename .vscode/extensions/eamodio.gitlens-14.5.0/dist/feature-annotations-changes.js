exports.id=817,exports.ids=[817],exports.modules={34:(t,e,r)=>{r.d(e,{GutterChangesAnnotationProvider:()=>GutterChangesAnnotationProvider});var o=r(9496),n=r(1062),i=r(5148),s=r(4241),a=r(6004),c=r(7469),u=r(6398),l=r(2022),h=r(623),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,f=(t,e)=>{if(e=Symbol[t])return e;throw Error("Symbol."+t+" is not defined")};const g=2**30;class GutterChangesAnnotationProvider extends l.H{constructor(t,e,r){super("changes",t,e),this.container=r}state;hoverProviderDisposable;mustReopen(t){return this.annotationContext?.sha!==t?.sha||this.annotationContext?.only!==t?.only}clear(){this.state=void 0,null!=this.hoverProviderDisposable&&(this.hoverProviderDisposable.dispose(),this.hoverProviderDisposable=void 0),super.clear()}selection(t){return Promise.resolve()}validate(){return Promise.resolve(!0)}async onProvideAnnotation(t){var e,r,n,i,s,l,d=[];try{const e=(0,a.UH)();this.mustReopen(t)&&this.clear(),this.annotationContext=t;let r,n=this.trackedDocument.uri.sha,i=null!=t?.sha&&t.sha!==n?`${t.sha}^`:void 0,s=null==n&&null==i;if(s){let t=await this.container.git.getOldestUnpushedRefForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri);if(null!=t)t=`${t}^`,r=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri,{ref:t}),null!=r?null!=i?i=t:(n=t,i=""):s=!1;else{const t=await this.container.git.getStatusForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri),e=t?.getPseudoCommits(this.container,await this.container.git.getCurrentUser(this.trackedDocument.uri.repoPath));e?.length?(r=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri),n="HEAD"):this.trackedDocument.dirty?n="HEAD":s=!1}}if(!s){if(r=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri,{ref:i??n}),null==r)return!1;null!=i||(n=`${r.ref}^`),i=r.ref}const l=(await Promise.allSettled(null==i&&this.editor.document.isDirty?[this.container.git.getDiffForFileContents(this.trackedDocument.uri,n,this.editor.document.getText()),this.container.git.getDiffForFile(this.trackedDocument.uri,n,i)]:[this.container.git.getDiffForFile(this.trackedDocument.uri,n,i)])).map((t=>(0,c.Sb)(t))).filter((t=>Boolean(t)));if(!l?.length)return!1;const p=((t,e,r)=>{if(null!=e){if("object"!=typeof e&&"function"!=typeof e)throw TypeError("Object expected");var o;if(r&&(o=e[f("asyncDispose")]),void 0===o&&(o=e[f("dispose")]),"function"!=typeof o)throw TypeError("Object not disposable");t.push([r,o,e])}else r&&t.push([r]);return e})(d,(0,u.k)(e)),v=new Map,m=null!=t?.sha&&t?.only?await this.container.git.getBlame(this.trackedDocument.uri,this.editor?.document):void 0;let D;for(const e of l)for(const r of e.hunks){if(null!=m){let e=!0;const o=t.sha;for(let t=r.current.position.start-1;t<r.current.position.end;t++)m.lines[t]?.sha===o&&(e=!1);if(e)continue}for(const[t,e]of r.lines){if("unchanged"===e.state)continue;const r=this.editor.document.validateRange(new o.Range(new o.Position(t-1,0),new o.Position(t-1,g)));null==D&&(D=new o.Selection(r.start,r.end));let n=v.get(e.state);null==n?(n={decorationType:"added"===e.state?h.I.changesLineAddedAnnotation:"removed"===e.state?h.I.changesLineDeletedAnnotation:h.I.changesLineChangedAnnotation,rangesOrOptions:[{range:r}]},v.set(e.state,n)):n.rangesOrOptions.push({range:r})}}return p?.restart({suffix:" to compute recent changes annotations"}),v.size&&(this.setDecorations([...v.values()]),p?.stop({suffix:" to apply all recent changes annotations"}),null!=D&&!1!==t?.selection&&(this.editor.selection=D,this.editor.revealRange(D,o.TextEditorRevealType.InCenterIfOutsideViewport))),this.state={commit:r,diffs:l},this.registerHoverProvider(),!0}catch(t){var p=t,v=!0}finally{e=d,r=p,n=v,i="function"==typeof SuppressedError?SuppressedError:function(t,e,r,o){return(o=Error(r)).name="SuppressedError",o.error=t,o.suppressed=e,o},s=t=>r=n?new i(t,r,"An error was suppressed during disposal"):(n=!0,t),(l=t=>{for(;t=e.pop();)try{var o=t[1]&&t[1].call(t[2]);if(t[0])return Promise.resolve(o).then(l,(t=>(s(t),l())))}catch(t){s(t)}if(n)throw r})()}}registerHoverProvider(){const t=i.D.get("hovers");t.enabled&&t.annotations.enabled&&(this.hoverProviderDisposable=o.languages.registerHoverProvider({pattern:this.document.uri.fsPath},{provideHover:(t,e,r)=>this.provideHover(t,e,r)}))}async provideHover(t,e,r){if(null==this.state)return;if("line"!==i.D.get("hovers.annotations.over")&&0!==e.character)return;const{commit:s,diffs:a}=this.state;for(const r of a)for(const i of r.hunks){const r=i.previous.count>i.current.count;if(e.line>=i.current.position.start-1&&e.line<=i.current.position.end-(r?0:1)){const a=await(0,n.yq)(s,this.trackedDocument.uri,e.line,i);if(null==a)return;return new o.Hover(a,t.validateRange(new o.Range(i.current.position.start-1,0,i.current.position.end-(r?0:1),g)))}}}}((t,e,r,o)=>{for(var n,i=o>1?void 0:o?p(e,r):e,s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);o&&i&&d(e,r,i)})([(0,s.cM)()],GutterChangesAnnotationProvider.prototype,"onProvideAnnotation",1)}};