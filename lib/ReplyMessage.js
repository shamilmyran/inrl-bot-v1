/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/
function _0x3a9b(){const _0x460cb0=['mime','invite','BAE5','pushName','exif','exports','getFile','config','caption','sender','toLowerCase','filter','sendReact','moment-timezone','concat','matchAll','includes','console','buttonsResponseMessage','client','downloadAndSaveMediaMessage','split','byteLength','10vteesM','chalk','stanzaId','participant','fromBuffer','mtype','isBot','./Sticker','creation','selectedButtonId','string','selectedDisplayText','msg','81411ljJhTi','conn','content','./Function','categories','writeFileSync','length','isBuffer','ext','../media/','audio','../events','isCreator','quotedMessage','command','sendFile','title','startsWith','download','sendText','contentText','packname','sendMessage','s_o','existsSync','itsMe','isMedia','_message','join','groupQueryInvite','messagesD','@s.whatsapp.net','mentionedJid','shift','author','displayId','user','text','document','botNumber','2070qIGgaY','message','remoteJid','WebMessageInfo','selectedId','_client','fakeObj','_key','sendErrorMessage','reply','slice','attrs','args','owner','s_t','displayText','48616PQNRyv','get','promises','toString','tls','3649520AMGyHy','isGroup','contextInfo','asSticker','map','tag','writeFile','key','application/octet-stream','```','body','match','file','@g.us','quoted','inrl','prefix','log','4cuQuby','test','serialize','mimetype','delete','conversation','singleSelectReply','fromMe','from','fromObject','mentions','file-type','455190KaaKnU','33YdQQGW','type','downloadMediaMessage','19096WHyspj','video','endsWith','trim','base64','selectedRowId','4361861aYdMsU','subject','image/webp','alloc','7290963fKXyYb','isCmd','replace'];_0x3a9b=function(){return _0x460cb0;};return _0x3a9b();}const _0x5dd088=_0x2bcf;(function(_0x3f7c15,_0x67fe0b){const _0x39d322=_0x2bcf,_0x197f74=_0x3f7c15();while(!![]){try{const _0x30abad=parseInt(_0x39d322(0x1dd))/0x1*(parseInt(_0x39d322(0x1f4))/0x2)+parseInt(_0x39d322(0x201))/0x3*(-parseInt(_0x39d322(0x204))/0x4)+parseInt(_0x39d322(0x198))/0x5*(-parseInt(_0x39d322(0x200))/0x6)+-parseInt(_0x39d322(0x20a))/0x7+parseInt(_0x39d322(0x1e2))/0x8+-parseInt(_0x39d322(0x20e))/0x9+-parseInt(_0x39d322(0x1cd))/0xa*(-parseInt(_0x39d322(0x1a5))/0xb);if(_0x30abad===_0x67fe0b)break;else _0x197f74['push'](_0x197f74['shift']());}catch(_0x2511da){_0x197f74['push'](_0x197f74['shift']());}}}(_0x3a9b,0x6d5d3));const {extensionForMediaMessage,extractMessageContent,jidNormalizedUser,getContentType,normalizeMessageContent,proto,delay,downloadContentFromMessage,getBinaryNodeChild}=require(_0x5dd088(0x1f1)),baileys=require(_0x5dd088(0x1f1)),fs=require('fs'),chalk=require(_0x5dd088(0x199)),FileType=require(_0x5dd088(0x1ff)),moment=require(_0x5dd088(0x18e)),path=require('path'),{getRandom,fetchBuffer}=require(_0x5dd088(0x1a8)),{timeStamp}=require(_0x5dd088(0x192)),ezio=require(_0x5dd088(0x1b0)),{connect}=require(_0x5dd088(0x1e1)),prefa=['','!','.','🐦','🐤','🗿'];let M=proto[_0x5dd088(0x1d0)];class WAConnection{constructor(_0x193a47){for(let _0x23ad55 in _0x193a47)this[_0x23ad55]=_0x193a47[_0x23ad55];}async['serializeM'](_0x334d6a){const _0x495d4c=_0x5dd088;return exports[_0x495d4c(0x1f6)](this,_0x334d6a);}['parseMention'](_0x32ccd3){const _0x20c9cb=_0x5dd088;return[..._0x32ccd3[_0x20c9cb(0x190)](/@([0-9]{5,16}|0)/g)][_0x20c9cb(0x1e6)](_0x194850=>_0x194850[0x1]+_0x20c9cb(0x1c4));}async[_0x5dd088(0x1b8)](_0x2480ce,_0xa14fa9,_0xf6e3e={},_0x1340d6={}){const _0x388f1f=_0x5dd088;this[_0x388f1f(0x1bb)](_0x2480ce,{'text':_0xa14fa9,..._0x1340d6},{'quoted':_0xf6e3e,..._0x1340d6});}async[_0x5dd088(0x203)](_0x30afa0,_0x401365){const _0x569249=_0x5dd088;_0x30afa0=_0x30afa0?.['msg']?_0x30afa0?.[_0x569249(0x1a4)]:_0x30afa0;let _0x5ade7a=(_0x30afa0[_0x569249(0x1a4)]||_0x30afa0)['mimetype']||'',_0x5bc98d=_0x30afa0[_0x569249(0x202)]?_0x30afa0['type']['replace'](/Message/gi,''):_0x5ade7a[_0x569249(0x196)]('/')[0x0];const _0x448de5=await downloadContentFromMessage(_0x30afa0,_0x5bc98d);let _0x193a8f=Buffer[_0x569249(0x1fc)]([]);for await(const _0x4683eb of _0x448de5){_0x193a8f=Buffer[_0x569249(0x18f)]([_0x193a8f,_0x4683eb]);}if(_0x401365){let _0x1174c8=await FileType[_0x569249(0x19c)](_0x193a8f),_0x5c6e7a=_0x401365?_0x401365+'.'+_0x1174c8[_0x569249(0x1ad)]||_0x5ade7a[_0x569249(0x196)]('/')[0x1]:getRandom(_0x1174c8[_0x569249(0x1ad)]||_0x5ade7a[_0x569249(0x196)]('/')[0x1]);return fs[_0x569249(0x1aa)](_0x5c6e7a,_0x193a8f);}else return _0x193a8f;}async[_0x5dd088(0x195)](_0x11009e,_0x34afdc,_0x23438e=!![]){const _0x451263=_0x5dd088;let _0x214de1=_0x11009e['msg']?_0x11009e[_0x451263(0x1a4)]:_0x11009e,_0x24c817=(_0x11009e[_0x451263(0x1a4)]||_0x11009e)[_0x451263(0x1f7)]||'',_0x10a665=_0x11009e['mtype']?_0x11009e[_0x451263(0x19d)][_0x451263(0x210)](/Message/gi,''):_0x24c817[_0x451263(0x196)]('/')[0x0];const _0x188fd5=await downloadContentFromMessage(_0x214de1,_0x10a665);let _0x2ab585=Buffer[_0x451263(0x1fc)]([]);for await(const _0xdbabc8 of _0x188fd5){_0x2ab585=Buffer[_0x451263(0x18f)]([_0x2ab585,_0xdbabc8]);}let _0x52bb21=await FileType[_0x451263(0x19c)](_0x2ab585),_0x27ac54=_0x23438e?_0x34afdc+'.'+_0x52bb21[_0x451263(0x1ad)]:_0x34afdc;return await fs[_0x451263(0x1aa)](_0x27ac54,_0x2ab585),_0x27ac54;}async['getFile'](_0x3f5098,_0xb25faf){const _0x1f852e=_0x5dd088;let _0x5142c0,_0x5c9150=Buffer[_0x1f852e(0x1ac)](_0x3f5098)?_0x3f5098:/^data:.*?\/.*?;base64,/i[_0x1f852e(0x1f5)](_0x3f5098)?Buffer[_0x1f852e(0x1fc)](_0x3f5098[_0x1f852e(0x196)]`,`[0x1],_0x1f852e(0x208)):/^https?:\/\//[_0x1f852e(0x1f5)](_0x3f5098)?await fetchBuffer(_0x3f5098):fs[_0x1f852e(0x1bd)](_0x3f5098)?(_0x5142c0=_0x3f5098,fs['readFileSync'](_0x3f5098)):typeof _0x3f5098===_0x1f852e(0x1a2)?_0x3f5098:Buffer[_0x1f852e(0x20d)](0x0),_0x542adf=await FileType[_0x1f852e(0x19c)](_0x5c9150)||{'mime':_0x1f852e(0x1ea),'ext':'.bin'};_0x5142c0=path[_0x1f852e(0x1c1)](__dirname,_0x1f852e(0x1ae)+new Date()*0x1+'.'+_0x542adf[_0x1f852e(0x1ad)]);if(_0x5c9150&&_0xb25faf)fs[_0x1f852e(0x1df)][_0x1f852e(0x1e8)](_0x5142c0,_0x5c9150);return{'filename':_0x5142c0,'size':await Buffer[_0x1f852e(0x197)](_0x5c9150),..._0x542adf,'data':_0x5c9150};}async[_0x5dd088(0x1b4)](_0x44ed8d,_0x492720,_0x191a36,_0x35a88c={},_0x44f1c7={}){const _0x5cfa8f=_0x5dd088;let _0x5baaa2=await this[_0x5cfa8f(0x217)](_0x492720,!![]),{filename:_0x56dc93,size:_0x3c43cb,ext:_0x398cec,mime:_0x4aeeae,data:_0x5e5892}=_0x5baaa2,_0x275edc='',_0x4ffe7a=_0x4aeeae,_0x451151=_0x56dc93;if(_0x44f1c7['asDocument'])_0x275edc=_0x5cfa8f(0x1cb);if(_0x44f1c7[_0x5cfa8f(0x1e5)]||/webp/['test'](_0x4aeeae)){let {writeExif:_0x1c3f8b}=require(_0x5cfa8f(0x19f)),_0x39765f={'mimetype':_0x4aeeae,'data':_0x5e5892};_0x451151=await _0x1c3f8b(_0x39765f,{'packname':_0x44f1c7[_0x5cfa8f(0x1ba)]?_0x44f1c7[_0x5cfa8f(0x1ba)]:ezio[_0x5cfa8f(0x218)][_0x5cfa8f(0x215)][_0x5cfa8f(0x1ba)],'author':_0x44f1c7['author']?_0x44f1c7[_0x5cfa8f(0x1c7)]:ezio[_0x5cfa8f(0x218)][_0x5cfa8f(0x215)][_0x5cfa8f(0x1c7)],'categories':_0x44f1c7[_0x5cfa8f(0x1a9)]?_0x44f1c7[_0x5cfa8f(0x1a9)]:[]}),await fs[_0x5cfa8f(0x1df)]['unlink'](_0x56dc93),_0x275edc='sticker',_0x4ffe7a=_0x5cfa8f(0x20c);}else{if(/image/[_0x5cfa8f(0x1f5)](_0x4aeeae))_0x275edc='image';else{if(/video/[_0x5cfa8f(0x1f5)](_0x4aeeae))_0x275edc=_0x5cfa8f(0x205);else{if(/audio/['test'](_0x4aeeae))_0x275edc=_0x5cfa8f(0x1af);else _0x275edc=_0x5cfa8f(0x1cb);}}}return await this[_0x5cfa8f(0x1bb)](_0x44ed8d,{[_0x275edc]:{'url':_0x451151},'mimetype':_0x4ffe7a,'fileName':_0x191a36,..._0x44f1c7},{'quoted':_0x35a88c,..._0x44f1c7}),fs[_0x5cfa8f(0x1df)]['unlink'](_0x451151);}async[_0x5dd088(0x1c2)](_0x323ece){const _0x174f5a=_0x5dd088;let _0x512fdb=await this['query']({'tag':'iq','attrs':{'type':_0x174f5a(0x1de),'xmlns':'w:g2','to':_0x174f5a(0x1ef)},'content':[{'tag':_0x174f5a(0x212),'attrs':{'code':_0x323ece}}]}),_0x12b572=getBinaryNodeChild(_0x512fdb,'group'),_0x172859=getBinaryNodeChild(_0x12b572,'description'),_0x56b156,_0x52d42b,_0x2cb48d,_0x5bdae9;_0x172859&&(_0x56b156=getBinaryNodeChild(_0x172859,_0x174f5a(0x1ec))?.[_0x174f5a(0x1a7)]?.[_0x174f5a(0x1e0)](),_0x52d42b=_0x172859?.[_0x174f5a(0x1d8)]?.['id'],_0x2cb48d=_0x172859?.[_0x174f5a(0x1d8)]?.['participant'],_0x5bdae9=_0x172859?.[_0x174f5a(0x1d8)]?.['t']);const _0x3750e1={'id':_0x12b572?.[_0x174f5a(0x1d8)]?.['id']['includes']('@')?_0x12b572?.[_0x174f5a(0x1d8)]?.['id']:_0x12b572?.[_0x174f5a(0x1d8)]?.['id']+_0x174f5a(0x1ef),'owner':_0x12b572?.[_0x174f5a(0x1d8)]?.['creator'],'subject':_0x12b572?.['attrs']?.[_0x174f5a(0x20b)],'subjectOwner':_0x12b572?.[_0x174f5a(0x1d8)]?.[_0x174f5a(0x1bc)],'subjectTime':_0x12b572?.[_0x174f5a(0x1d8)]?.[_0x174f5a(0x1db)],'size':_0x12b572?.[_0x174f5a(0x1d8)]?.['size'],'creation':_0x12b572?.[_0x174f5a(0x1d8)]?.[_0x174f5a(0x1a0)],'participants':_0x12b572?.[_0x174f5a(0x1a7)]?.[_0x174f5a(0x21c)](_0x353232=>_0x353232[_0x174f5a(0x1e7)]==_0x174f5a(0x19b))[_0x174f5a(0x1e6)](_0x7f5d41=>_0x7f5d41[_0x174f5a(0x1d8)]),'desc':_0x56b156,'descId':_0x52d42b,'descOwner':_0x2cb48d,'descTime':_0x5bdae9};return _0x3750e1;}async[_0x5dd088(0x21d)](_0x581bbd,_0x390b61='',_0x2d1389){const _0x2a4742=_0x5dd088;await this[_0x2a4742(0x1bb)](_0x581bbd,{'react':{'text':_0x390b61,'key':_0x2d1389}});}async[_0x5dd088(0x1d5)](_0x5ca731,_0x329da7,_0x4a359a,_0x7823e7,_0x12a499=[],_0x13972d=!![]){const _0x5f0ec7=_0x5dd088;console[_0x5f0ec7(0x1f3)]('err');}}class serialize{constructor(_0x889043,_0x383e86,_0x56ace4={}){const _0x3b13e4=_0x5dd088;if(!_0x383e86)return _0x383e86;_0x383e86=M['fromObject'](_0x383e86);for(let _0x1fcbea in _0x383e86)this[_0x1fcbea]=_0x383e86[_0x1fcbea];this[_0x3b13e4(0x1d4)](_0x889043),this[_0x3b13e4(0x1c0)](_0x889043),this['conn']=_0x889043,this[_0x3b13e4(0x1ec)]=this['text']=this['message']?.[_0x3b13e4(0x1f9)]||this[_0x3b13e4(0x1ce)]?.[this[_0x3b13e4(0x202)]]?.[_0x3b13e4(0x1ca)]||this['message']?.[this[_0x3b13e4(0x202)]]?.['caption']||this[_0x3b13e4(0x1ce)]?.[this[_0x3b13e4(0x202)]]?.[_0x3b13e4(0x1b9)]||this[_0x3b13e4(0x1ce)]?.[this['type']]?.[_0x3b13e4(0x1a3)]||this[_0x3b13e4(0x1ce)]?.[this[_0x3b13e4(0x202)]]?.[_0x3b13e4(0x1b5)]||'',this[_0x3b13e4(0x1d2)](_0x889043);}['_key'](_0x1dc0e6){const _0x3a2ac3=_0x5dd088;this[_0x3a2ac3(0x1e9)]&&(this['from']=jidNormalizedUser(this[_0x3a2ac3(0x1e9)]['remoteJid']||this[_0x3a2ac3(0x1e9)][_0x3a2ac3(0x19b)]),this[_0x3a2ac3(0x1fb)]=this['key'][_0x3a2ac3(0x1fb)],this['id']=this[_0x3a2ac3(0x1e9)]['id'],this[_0x3a2ac3(0x19e)]=this['id']['startsWith'](_0x3a2ac3(0x213))&&this['id']['length']==0x10,this[_0x3a2ac3(0x1e3)]=this[_0x3a2ac3(0x1fc)]['endsWith'](_0x3a2ac3(0x1ef)),this[_0x3a2ac3(0x21a)]=jidNormalizedUser(this['fromMe']&&_0x1dc0e6[_0x3a2ac3(0x1c9)]?.['id']||this[_0x3a2ac3(0x1e9)][_0x3a2ac3(0x19b)]||this[_0x3a2ac3(0x1fc)]||''));}[_0x5dd088(0x1c0)](_0x247e4e){const _0x37b949=_0x5dd088;if(this[_0x37b949(0x1ce)]){this[_0x37b949(0x202)]=getContentType(this[_0x37b949(0x1ce)]),this[_0x37b949(0x1ce)]=extractMessageContent(this[_0x37b949(0x1ce)]),this[_0x37b949(0x1a4)]=this['message'][this['type']],this[_0x37b949(0x1fe)]=this[_0x37b949(0x1a4)]?.[_0x37b949(0x1e4)]?this[_0x37b949(0x1a4)]?.[_0x37b949(0x1e4)][_0x37b949(0x1c5)]:[],this['quoted']=this[_0x37b949(0x1a4)]?.[_0x37b949(0x1e4)]?this[_0x37b949(0x1a4)]?.['contextInfo'][_0x37b949(0x1b2)]:null;if(this[_0x37b949(0x1f0)]){this[_0x37b949(0x1f0)][_0x37b949(0x202)]=getContentType(this['quoted']),this[_0x37b949(0x1f0)][_0x37b949(0x1a4)]=this['quoted'][this[_0x37b949(0x1f0)][_0x37b949(0x202)]],this['quoted'][_0x37b949(0x1fe)]=this['msg'][_0x37b949(0x1e4)][_0x37b949(0x1c5)],this[_0x37b949(0x1f0)]['id']=this[_0x37b949(0x1a4)][_0x37b949(0x1e4)]['stanzaId'],this[_0x37b949(0x1f0)][_0x37b949(0x21a)]=jidNormalizedUser(this[_0x37b949(0x1a4)][_0x37b949(0x1e4)][_0x37b949(0x19b)]||this[_0x37b949(0x21a)]),this[_0x37b949(0x1f0)][_0x37b949(0x1fc)]=this['from'],this[_0x37b949(0x1f0)]['isGroup']=this[_0x37b949(0x1f0)]['from'][_0x37b949(0x206)](_0x37b949(0x1ef)),this[_0x37b949(0x1f0)][_0x37b949(0x19e)]=this[_0x37b949(0x1f0)]['id']['startsWith'](_0x37b949(0x213))&&this[_0x37b949(0x1f0)]['id']==0x10,this['quoted'][_0x37b949(0x1fb)]=this[_0x37b949(0x1f0)][_0x37b949(0x21a)]==jidNormalizedUser(_0x247e4e[_0x37b949(0x1c9)]&&_0x247e4e[_0x37b949(0x1c9)]?.['id']),this[_0x37b949(0x1f0)]['text']=this[_0x37b949(0x1f0)][_0x37b949(0x1a4)]?.[_0x37b949(0x1ca)]||this[_0x37b949(0x1f0)][_0x37b949(0x1a4)]?.[_0x37b949(0x219)]||this[_0x37b949(0x1f0)][_0x37b949(0x1a4)]?.['conversation']||this['quoted'][_0x37b949(0x1a4)]?.[_0x37b949(0x1b9)]||this[_0x37b949(0x1f0)]['msg']?.['selectedDisplayText']||this['quoted'][_0x37b949(0x1a4)]?.[_0x37b949(0x1b5)]||'';let _0x2ec48c=this['quoted'][_0x37b949(0x1d3)]=M[_0x37b949(0x1fd)]({'key':{'remoteJid':this[_0x37b949(0x1f0)]['from'],'fromMe':this[_0x37b949(0x1f0)][_0x37b949(0x1fb)],'id':this[_0x37b949(0x1f0)]['id']},'message':this[_0x37b949(0x1f0)],...this[_0x37b949(0x1f0)][_0x37b949(0x1e3)]?{'participant':this[_0x37b949(0x1f0)][_0x37b949(0x21a)]}:{}});this[_0x37b949(0x1f0)][_0x37b949(0x1f8)]=()=>_0x247e4e[_0x37b949(0x1bb)](this[_0x37b949(0x1f0)]['from'],{'delete':_0x2ec48c['key']}),this[_0x37b949(0x1f0)][_0x37b949(0x1b7)]=_0x4f93ea=>_0x247e4e[_0x37b949(0x203)](this[_0x37b949(0x1f0)]['msg'],_0x4f93ea);}}}['_client'](_0x1802d3){const _0x233f32=_0x5dd088;this['client']=new Object(),this[_0x233f32(0x194)][_0x233f32(0x1dc)]=this[_0x233f32(0x1ce)]?.[_0x233f32(0x1f9)]||this[_0x233f32(0x1ce)]?.[this['type']]?.[_0x233f32(0x1ca)]||this[_0x233f32(0x1ce)]?.[this[_0x233f32(0x202)]]?.[_0x233f32(0x219)]||this[_0x233f32(0x1ce)]?.[this[_0x233f32(0x202)]]?.[_0x233f32(0x1b9)]||this[_0x233f32(0x1ce)]?.[this['type']]?.[_0x233f32(0x1a3)]||this['message']?.[this[_0x233f32(0x202)]]?.[_0x233f32(0x1b5)]||'',this['client'][_0x233f32(0x1c8)]=this[_0x233f32(0x194)]['body']=this[_0x233f32(0x1ce)]?.[_0x233f32(0x1f9)]||this['message']?.[this[_0x233f32(0x202)]]?.[_0x233f32(0x1ca)]||this[_0x233f32(0x1ce)]?.[this[_0x233f32(0x202)]]?.[_0x233f32(0x219)]||this[_0x233f32(0x1ce)]?.[this[_0x233f32(0x202)]]?.[_0x233f32(0x1a1)]||this['message']?.[this[_0x233f32(0x202)]]?.[_0x233f32(0x1fa)]?.[_0x233f32(0x209)]||this['message']?.[this['type']]?.[_0x233f32(0x1d1)]||this[_0x233f32(0x202)]==='messageContextInfo'?this[_0x233f32(0x1ce)][_0x233f32(0x193)]?.[_0x233f32(0x1a1)]||this[_0x233f32(0x1ce)]['listResponseMessage']?.[_0x233f32(0x1fa)]?.[_0x233f32(0x209)]||this[_0x233f32(0x1ca)]:'',this[_0x233f32(0x194)]['budy']=typeof this[_0x233f32(0x1ca)]=='string'?this[_0x233f32(0x1ca)]:'',this['client'][_0x233f32(0x1f2)]=prefa?/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi['test'](this[_0x233f32(0x194)][_0x233f32(0x1ec)])?this[_0x233f32(0x194)]['body'][_0x233f32(0x1ed)](/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0]:'':prefa??global[_0x233f32(0x1f2)],this[_0x233f32(0x194)][_0x233f32(0x20f)]=this[_0x233f32(0x194)]['body'][_0x233f32(0x1b6)](this['client']['prefix']),this['client'][_0x233f32(0x1b3)]=this[_0x233f32(0x194)][_0x233f32(0x1ec)]['replace'](this[_0x233f32(0x194)]['prefix'],'')[_0x233f32(0x207)]()[_0x233f32(0x196)](/ +/)[_0x233f32(0x1c6)]()[_0x233f32(0x21b)](),this[_0x233f32(0x194)][_0x233f32(0x1d9)]=this[_0x233f32(0x194)][_0x233f32(0x1ec)]['trim']()[_0x233f32(0x196)](/ +/)['slice'](0x1),this[_0x233f32(0x194)][_0x233f32(0x214)]=this[_0x233f32(0x214)]||'No\x20Name',this[_0x233f32(0x194)]['botNumber']=jidNormalizedUser(_0x1802d3[_0x233f32(0x1c9)]['id']),this[_0x233f32(0x194)][_0x233f32(0x1b1)]=[this[_0x233f32(0x194)][_0x233f32(0x1cc)],...global[_0x233f32(0x1da)]][_0x233f32(0x1e6)](_0x1aada3=>_0x1aada3[_0x233f32(0x210)](/[^0-9]/g,'')+_0x233f32(0x1c4))[_0x233f32(0x191)](this['sender']),this[_0x233f32(0x194)][_0x233f32(0x1be)]=this[_0x233f32(0x21a)]==this['client'][_0x233f32(0x1cc)]?!![]:![],this[_0x233f32(0x194)]['text']=this[_0x233f32(0x194)][_0x233f32(0x1d9)][_0x233f32(0x1c1)]('\x20'),this[_0x233f32(0x194)][_0x233f32(0x1f0)]=this[_0x233f32(0x1f0)]?this[_0x233f32(0x1f0)]:this,this['client'][_0x233f32(0x211)]=(this['client'][_0x233f32(0x1f0)][_0x233f32(0x1a4)]||this[_0x233f32(0x194)]['quoted'])['mimetype']||'',this['client'][_0x233f32(0x1bf)]=/image|video|sticker|audio/[_0x233f32(0x1f5)](this[_0x233f32(0x194)][_0x233f32(0x211)]),this[_0x233f32(0x194)][_0x233f32(0x1fc)]=this[_0x233f32(0x1e9)][_0x233f32(0x1cf)],this[_0x233f32(0x194)][_0x233f32(0x1c3)]=this[_0x233f32(0x194)][_0x233f32(0x1ec)][_0x233f32(0x1d7)](0x0)[_0x233f32(0x207)]()['split'](/ +/)[_0x233f32(0x1c6)]()[_0x233f32(0x21b)]();}async[_0x5dd088(0x1b7)](_0x3f4cd9){const _0x2aa297=_0x5dd088;await this[_0x2aa297(0x1a6)][_0x2aa297(0x203)](this[_0x2aa297(0x1a4)],_0x3f4cd9);}async[_0x5dd088(0x1d6)](_0x4ce75f,_0x4dc083=this[_0x5dd088(0x1fc)],_0x21e6a6={}){const _0x5c7b0c=_0x5dd088;await this['conn'][_0x5c7b0c(0x1bb)](_0x4dc083,{'text':_0x5c7b0c(0x1eb)+_0x4ce75f+_0x5c7b0c(0x1eb)},{'quoted':this});}}const smsg=(_0x3dd098,_0x567980,_0x3e4abe={})=>{const _0x1e2d59=_0x5dd088;if(!_0x567980)return _0x567980;let _0x36be85=proto[_0x1e2d59(0x1d0)];_0x567980=_0x36be85['fromObject'](_0x567980);_0x567980[_0x1e2d59(0x1e9)]&&(_0x567980[_0x1e2d59(0x1fc)]=jidNormalizedUser(_0x567980[_0x1e2d59(0x1e9)]['remoteJid']||_0x567980['key'][_0x1e2d59(0x19b)]),_0x567980[_0x1e2d59(0x1fb)]=_0x567980[_0x1e2d59(0x1e9)][_0x1e2d59(0x1fb)],_0x567980['id']=_0x567980[_0x1e2d59(0x1e9)]['id'],_0x567980[_0x1e2d59(0x19e)]=_0x567980['id'][_0x1e2d59(0x1b6)]('BAE5')&&_0x567980['id'][_0x1e2d59(0x1ab)]==0x10,_0x567980[_0x1e2d59(0x1e3)]=_0x567980['from'][_0x1e2d59(0x206)](_0x1e2d59(0x1ef)),_0x567980[_0x1e2d59(0x21a)]=jidNormalizedUser(_0x567980[_0x1e2d59(0x1fb)]&&_0x3dd098[_0x1e2d59(0x1c9)]?.['id']||_0x567980['key']['participant']||_0x567980[_0x1e2d59(0x1fc)]||''));if(_0x567980[_0x1e2d59(0x1ce)]){_0x567980[_0x1e2d59(0x202)]=getContentType(_0x567980[_0x1e2d59(0x1ce)]),_0x567980[_0x1e2d59(0x1ce)]=extractMessageContent(_0x567980[_0x1e2d59(0x1ce)]),_0x567980[_0x1e2d59(0x1a4)]=_0x567980['message'][_0x567980[_0x1e2d59(0x202)]],_0x567980[_0x1e2d59(0x1fe)]=_0x567980[_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1e4)]?_0x567980[_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1e4)][_0x1e2d59(0x1c5)]:[],_0x567980['quoted']=_0x567980[_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1e4)]?_0x567980['msg']?.[_0x1e2d59(0x1e4)][_0x1e2d59(0x1b2)]:null;if(_0x567980[_0x1e2d59(0x1f0)]){_0x567980['quoted'][_0x1e2d59(0x202)]=getContentType(_0x567980[_0x1e2d59(0x1f0)]),_0x567980[_0x1e2d59(0x1f0)]['msg']=_0x567980[_0x1e2d59(0x1f0)][_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x202)]],_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1fe)]=_0x567980[_0x1e2d59(0x1a4)][_0x1e2d59(0x1e4)]['mentionedJid'],_0x567980['quoted']['id']=_0x567980[_0x1e2d59(0x1a4)][_0x1e2d59(0x1e4)][_0x1e2d59(0x19a)],_0x567980['quoted'][_0x1e2d59(0x21a)]=jidNormalizedUser(_0x567980['msg'][_0x1e2d59(0x1e4)][_0x1e2d59(0x19b)]||_0x567980[_0x1e2d59(0x21a)]),_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1fc)]=_0x567980[_0x1e2d59(0x1fc)],_0x567980['quoted'][_0x1e2d59(0x1e3)]=_0x567980[_0x1e2d59(0x1f0)]['from'][_0x1e2d59(0x206)](_0x1e2d59(0x1ef)),_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x19e)]=_0x567980[_0x1e2d59(0x1f0)]['id'][_0x1e2d59(0x1b6)]('BAE5')&&_0x567980[_0x1e2d59(0x1f0)]['id']==0x10,_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1fb)]=_0x567980['quoted'][_0x1e2d59(0x21a)]==jidNormalizedUser(_0x3dd098['user']&&_0x3dd098[_0x1e2d59(0x1c9)]?.['id']),_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1ca)]=_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1ca)]||_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x219)]||_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1f9)]||_0x567980['quoted'][_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1b9)]||_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1a3)]||_0x567980['quoted'][_0x1e2d59(0x1a4)]?.[_0x1e2d59(0x1b5)]||'';let _0x24109f=_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1d3)]=_0x36be85[_0x1e2d59(0x1fd)]({'key':{'remoteJid':_0x567980['quoted'][_0x1e2d59(0x1fc)],'fromMe':_0x567980['quoted']['fromMe'],'id':_0x567980[_0x1e2d59(0x1f0)]['id']},'message':_0x567980[_0x1e2d59(0x1f0)],..._0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1e3)]?{'participant':_0x567980['quoted'][_0x1e2d59(0x21a)]}:{}});_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1f8)]=()=>_0x3dd098[_0x1e2d59(0x1bb)](_0x567980['quoted'][_0x1e2d59(0x1fc)],{'delete':_0x24109f[_0x1e2d59(0x1e9)]}),_0x567980[_0x1e2d59(0x1f0)][_0x1e2d59(0x1b7)]=_0x10a065=>_0x3dd098[_0x1e2d59(0x203)](_0x567980[_0x1e2d59(0x1f0)]['msg'],_0x10a065);}}return _0x567980['download']=_0x1ab971=>_0x3dd098['downloadMediaMessage'](_0x567980[_0x1e2d59(0x1a4)],_0x1ab971),_0x567980['body']=_0x567980[_0x1e2d59(0x1ca)]=_0x567980[_0x1e2d59(0x1ce)]?.['conversation']||_0x567980[_0x1e2d59(0x1ce)]?.[_0x567980[_0x1e2d59(0x202)]]?.[_0x1e2d59(0x1ca)]||_0x567980[_0x1e2d59(0x1ce)]?.[_0x567980[_0x1e2d59(0x202)]]?.[_0x1e2d59(0x219)]||_0x567980[_0x1e2d59(0x1ce)]?.[_0x567980[_0x1e2d59(0x202)]]?.[_0x1e2d59(0x1b9)]||_0x567980['message']?.[_0x567980[_0x1e2d59(0x202)]]?.[_0x1e2d59(0x1a3)]||_0x567980[_0x1e2d59(0x1ce)]?.[_0x567980[_0x1e2d59(0x202)]]?.[_0x1e2d59(0x1b5)]||'',_0x567980[_0x1e2d59(0x1d6)]=(_0x3e5992,_0x17e218=_0x567980[_0x1e2d59(0x1fc)],_0x4078d0={})=>Buffer[_0x1e2d59(0x1ac)](_0x3e5992)?_0x3dd098[_0x1e2d59(0x1b4)](_0x17e218,_0x3e5992,_0x1e2d59(0x1ee),'',_0x567980,{..._0x4078d0}):_0x3dd098[_0x1e2d59(0x1b8)](_0x17e218,_0x3e5992,_0x567980,{..._0x4078d0}),_0x567980;};function _0x2bcf(_0x256648,_0x498293){const _0x3a9bcd=_0x3a9b();return _0x2bcf=function(_0x2bcf30,_0x350d97){_0x2bcf30=_0x2bcf30-0x18e;let _0x9a2ef7=_0x3a9bcd[_0x2bcf30];return _0x9a2ef7;},_0x2bcf(_0x256648,_0x498293);}module[_0x5dd088(0x216)]={'smsg':smsg,'serialize':serialize,'WAConnection':WAConnection};