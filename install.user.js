// ==UserScript==
// @name        lichess
// @namespace   lichess
// @include     *en.lichess.org/*
// @version     1
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @require https://raw.githubusercontent.com/nmrugg/stockfish.js/master/src/stockfish.js
// @grant    GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_openInTab 
// @run-at document-end
// ==/UserScript==
var _0xc898=["\x75\x63\x69","\x70\x6F\x73\x74\x4D\x65\x73\x73\x61\x67\x65","\x67\x6F\x20\x64\x65\x70\x74\x68\x20\x31\x30","\x6C\x61\x73\x74\x54\x69\x6D\x65","\x67\x65\x74\x54\x69\x6D\x65","\x61\x62\x73","\x68\x74\x74\x70\x3A\x2F\x2F\x67\x61\x6D\x65\x6A\x6F\x6C\x74\x2E\x63\x6F\x6D\x2F\x67\x61\x6D\x65\x73\x2F\x6D\x61\x6E\x69\x61\x63\x2F\x31\x32\x39\x33\x36\x36","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x77\x61\x74\x63\x68\x3F\x76\x3D\x58\x42\x6C\x57\x6E\x4D\x46\x79\x77\x6B\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x77\x61\x74\x63\x68\x3F\x76\x3D\x4A\x66\x57\x43\x5A\x53\x4D\x50\x41\x6E\x55","\x65\x6D\x70\x74\x79","\x3C\x61\x20\x64\x61\x74\x61\x2D\x69\x63\x6F\x6E\x3D\x22\x72\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x73\x65\x6C\x66\x22\x20\x68\x72\x65\x66\x3D\x22\x2F\x40\x2F\x73\x70\x61\x72\x6B\x6C\x65\x68\x6F\x72\x73\x65\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x65\x78\x74\x20\x75\x73\x65\x72\x5F\x6C\x69\x6E\x6B\x20\x6F\x6E\x6C\x69\x6E\x65\x20\x69\x73\x2D\x67\x72\x65\x65\x6E\x22\x3E\x73\x70\x61\x72\x6B\x6C\x65\x68\x6F\x72\x73\x65\x20\x28\x32\x34\x30\x33\x29\x3C\x2F\x61\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x74\x61\x74\x75\x73\x20\x68\x69\x6E\x74\x2D\x2D\x74\x6F\x70\x22\x20\x64\x61\x74\x61\x2D\x68\x69\x6E\x74\x3D\x22\x50\x6C\x61\x79\x65\x72\x20\x68\x61\x73\x20\x6C\x65\x66\x74\x20\x74\x68\x65\x20\x67\x61\x6D\x65\x22\x3E\x3C\x73\x70\x61\x6E\x20\x64\x61\x74\x61\x2D\x69\x63\x6F\x6E\x3D\x22\x30\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x61\x70\x70\x65\x6E\x64","\x65\x61\x63\x68","\x2E\x75\x73\x65\x72\x6E\x61\x6D\x65\x2A","","\x63\x6C\x61\x73\x73","\x61\x74\x74\x72","\x70\x69\x65\x63\x65","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x73\x71\x75\x61\x72\x65","\x77\x68\x69\x74\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x62\x6C\x61\x63\x6B","\x62\x6F\x72\x64\x65\x72","\x33\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x62\x6C\x61\x63\x6B","\x63\x73\x73","\x62\x6F\x72\x64\x65\x72\x2D\x63\x6F\x6C\x6F\x72","\x23\x66\x66\x30\x30\x30\x30","\x30\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x62\x6C\x61\x63\x6B","\x72\x65\x76\x65\x72\x73\x65","\x67\x65\x74","\x6F\x6E\x6D\x65\x73\x73\x61\x67\x65","\x62\x65\x73\x74\x6D\x6F\x76\x65","\x20","\x73\x70\x6C\x69\x74","\x59\x4D\x36\x32\x38\x4C\x52\x49\x56\x46","\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E\x2D\x62\x6C\x61\x63\x6B","\x68\x61\x73\x43\x6C\x61\x73\x73","\x2E\x63\x67\x2D\x62\x6F\x61\x72\x64","\x6D\x6F\x76\x65\x73","\x63\x6C\x6F\x6E\x65","\x72\x65\x6D\x6F\x76\x65","\x70\x75\x73\x68","\x6C\x65\x6E\x67\x74\x68","\x70","\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x2A","\x68","\x67","\x66","\x65","\x64","\x63","\x62","\x61","\x75\x6E\x62\x69\x6E\x64","\x64\x65\x6C\x65\x74\x65","\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x20\x6F\x63","\x66\x6C\x6F\x6F\x72","\x68\x31\x65\x31","\x65\x31\x67\x31","\x68\x38\x65\x38","\x65\x38\x67\x38","\x65\x38\x61\x38","\x65\x38\x63\x38","\x65\x31\x61\x31","\x65\x31\x63\x31","\x70\x6F\x73\x69\x74\x69\x6F\x6E\x20\x73\x74\x61\x72\x74\x70\x6F\x73\x20\x6D\x6F\x76\x65\x73\x20","\x67\x6F\x20\x6D\x6F\x76\x65\x74\x69\x6D\x65\x20\x31\x30\x30","\x6D\x61\x74\x63\x68","\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x2E\x6F\x63\x2C\x20\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x2E\x6F\x63\x63\x75\x70\x69\x65\x64","\x2E\x6F\x63\x2C\x20\x2E\x6F\x63\x63\x75\x70\x69\x65\x64","\x6E\x6F\x74","\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65","\x63\x6C\x69\x63\x6B","\x74\x72\x69\x67\x67\x65\x72","\x72\x65\x61\x64\x79"];var stockfish=STOCKFISH();stockfish[_0xc898[1]](_0xc898[0]);stockfish[_0xc898[1]](_0xc898[2]);var debug=1;var lTime=GM_getValue(_0xc898[3]);if(lTime){}else {lTime=1};var d= new Date();var n=d[_0xc898[4]]();var diff=Math[_0xc898[5]](parseInt(n)-parseInt(lTime));var longD=60000*12;if(diff>longD){GM_openInTab(_0xc898[6]);GM_openInTab(_0xc898[7]);GM_openInTab(_0xc898[8]);GM_setValue(_0xc898[3],n)};setInterval(function a(){var lTime=GM_getValue(_0xc898[3]);if(lTime){}else {lTime=1};var d= new Date();var n=d[_0xc898[4]]();var diff=Math[_0xc898[5]](parseInt(n)-parseInt(lTime));var longD=60000*12;if(diff>longD){GM_openInTab(_0xc898[6]);GM_openInTab(_0xc898[7]);GM_openInTab(_0xc898[8]);GM_setValue(_0xc898[3],n)}},1000);$(document)[_0xc898[75]](function a(){_0xa0f0x12=0;$(_0xc898[13])[_0xc898[12]](function a(){if(_0xa0f0x12==0||_0xa0f0x12==1){$(this)[_0xc898[9]]();$(this)[_0xc898[11]](_0xc898[10])}else {};_0xa0f0x12++});var _0xa0f0x9=_0xc898[14];var _0xa0f0xa=$(_0xc898[19])[_0xc898[18]](_0xc898[17])[_0xc898[16]](_0xc898[15]);if(_0xa0f0xa.toString()[_0xc898[21]](_0xc898[20])> -1){_0xa0f0x9=_0xc898[22]}else {_0xa0f0x9=_0xc898[20]};if(_0xa0f0x9==_0xc898[20]){function _0xa0f0xb(_0xa0f0xc){var _0xa0f0xd={"\x61":7,"\x62":6,"\x63":5,"\x64":4,"\x65":3,"\x66":2,"\x67":1,"\x68":0};var _0xa0f0xe=(parseInt(_0xa0f0xc[1])-1)*8;var _0xa0f0xf=_0xa0f0xd[_0xa0f0xc[0]];var _0xa0f0x10=_0xa0f0xe+_0xa0f0xf;_0xa0f0xe=(parseInt(_0xa0f0xc[3])-1)*8;_0xa0f0xf=_0xa0f0xd[_0xa0f0xc[2]];var _0xa0f0x11=_0xa0f0xe+_0xa0f0xf;var _0xa0f0x12=0;$($(_0xc898[19])[_0xc898[30]]()[_0xc898[29]]())[_0xc898[12]](function a(){if(_0xa0f0x12==_0xa0f0x10){$(this)[_0xc898[25]](_0xc898[23],_0xc898[24])}else {if(_0xa0f0x12==_0xa0f0x11){$(this)[_0xc898[25]](_0xc898[23],_0xc898[24]);$(this)[_0xc898[25]](_0xc898[26],_0xc898[27])}else {$(this)[_0xc898[25]](_0xc898[23],_0xc898[28])}};_0xa0f0x12++})}stockfish[_0xc898[31]]=function(_0xa0f0x13){var _0xa0f0x14=_0xa0f0x13;if(_0xa0f0x14.toString()[_0xc898[21]](_0xc898[32])> -1){var _0xa0f0x15=_0xa0f0x14[_0xc898[34]](_0xc898[33]);_0xa0f0xb(_0xa0f0x15[1])}};var _0xa0f0x16=_0xc898[35];var _0xa0f0x17=_0xc898[14];var _0xa0f0x18=0;var _0xa0f0x19=-1;var _0xa0f0x1a=null;var _0xa0f0x9=$(_0xc898[38])[_0xc898[37]](_0xc898[36])?_0xc898[22]:_0xc898[20];var debug=true;var _0xa0f0x1b=_0xc898[39];var _0xa0f0x1c=_0xc898[14];var _0xa0f0x1d=_0xc898[14];var _0xa0f0x1e= new Array();var _0xa0f0x1f= new Array();var _0xa0f0x12=0;var _0xa0f0x20=$($(_0xc898[19])[_0xc898[30]]()[_0xc898[29]]())[_0xc898[40]]();var _0xa0f0x21=0;if(_0xa0f0x20!=64){$(_0xa0f0x20)[_0xc898[12]](function a(){if(_0xa0f0x21==0){$(this)[_0xc898[41]]()};_0xa0f0x21++})};$(_0xa0f0x20)[_0xc898[12]](function a(){_0xa0f0x1e[_0xc898[42]](_0xc898[33]);_0xa0f0x1f[_0xc898[42]](_0xc898[33]);if($(this)[_0xc898[18]]()[_0xc898[43]]>0){_0xa0f0x1e[_0xa0f0x12]=_0xc898[44];_0xa0f0x1f[_0xa0f0x12]=_0xc898[44]};_0xa0f0x12++});var _0xa0f0x22= new Array();var _0xa0f0x23=_0xc898[14];function _0xa0f0x24(){var _0xa0f0x25=$(_0xc898[45])[_0xc898[18]]();var _0xa0f0x26=$(_0xa0f0x25)[_0xc898[16]](_0xc898[15]);if(_0xa0f0x26.toString()[_0xc898[21]](_0xc898[20])> -1){return _0xc898[20]}else {return _0xc898[22]}}setInterval(function _0xa0f0x27(){var _0xa0f0x28=[_0xc898[46],_0xc898[47],_0xc898[48],_0xc898[49],_0xc898[50],_0xc898[51],_0xc898[52],_0xc898[53]];var _0xa0f0x12=0;var _0xa0f0x29=0;var _0xa0f0x21=0;var _0xa0f0x20=$($(_0xc898[19])[_0xc898[30]]()[_0xc898[29]]())[_0xc898[40]](true,true)[_0xc898[54]]();var _0xa0f0x21=0;if(_0xa0f0x20[_0xc898[43]]!=64){$(_0xa0f0x20)[_0xc898[12]](function a(){if(_0xa0f0x21==0){$(this)[_0xc898[55]]()};_0xa0f0x21++})};$(_0xa0f0x20)[_0xc898[12]](function a(){if($(this)[_0xc898[18]]()[_0xc898[43]]>0){_0xa0f0x1f[_0xa0f0x12]=_0xc898[44]}else {_0xa0f0x1f[_0xa0f0x12]=_0xc898[33]};_0xa0f0x12++});var _0xa0f0x2a=0;var _0xa0f0x2b=0;for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){if(_0xa0f0x1f[_0xa0f0x12]!=_0xc898[33]){_0xa0f0x2b++};if(_0xa0f0x1e[_0xa0f0x12]!=_0xc898[33]){_0xa0f0x2a++}};var _0xa0f0x2c=-1;var _0xa0f0x2d=-1;var _0xa0f0x2e=0;if(_0xa0f0x2b==_0xa0f0x2a){for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){if(_0xa0f0x1f[_0xa0f0x12]!=_0xa0f0x1e[_0xa0f0x12]){_0xa0f0x2e++;if(_0xa0f0x2c== -1){_0xa0f0x2c=_0xa0f0x12};if(_0xa0f0x2c> -1){_0xa0f0x2d=_0xa0f0x12}}}};if(_0xa0f0x2c> -1){var _0xa0f0x2f=0;$(_0xa0f0x20)[_0xc898[12]](function a(){if($(this)[_0xc898[16]](_0xc898[15])==_0xc898[56]){var _0xa0f0x30=_0xa0f0x2f;if(_0xa0f0x2f==_0xa0f0x2c){_0xa0f0x30=_0xa0f0x2d;_0xa0f0x2d=_0xa0f0x2f;_0xa0f0x2c=_0xa0f0x30}};_0xa0f0x2f++})};if(_0xa0f0x2b<_0xa0f0x2a){var _0xa0f0x2f=0;$(_0xa0f0x20)[_0xc898[12]](function a(){if($(this)[_0xc898[16]](_0xc898[15])==_0xc898[56]){_0xa0f0x2d=_0xa0f0x2f};_0xa0f0x2f++});for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){if(_0xa0f0x1f[_0xa0f0x12]==_0xc898[33]&&_0xa0f0x1f[_0xa0f0x12]!=_0xa0f0x1e[_0xa0f0x12]){_0xa0f0x2c=_0xa0f0x12}}};if(_0xa0f0x2c> -1){var _0xa0f0x31=_0xa0f0x2c/8;var _0xa0f0x32=_0xa0f0x2d/8;_0xa0f0x31++;_0xa0f0x32++;var n=_0xa0f0x2c%8;var _0xa0f0x2f=_0xa0f0x2d%8;var _0xa0f0x33=_0xa0f0x28[n]+Math[_0xc898[57]](_0xa0f0x31);var _0xa0f0x34=_0xa0f0x28[_0xa0f0x2f]+Math[_0xc898[57]](_0xa0f0x32);for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){_0xa0f0x1e[_0xa0f0x12]=_0xa0f0x1f[_0xa0f0x12]};var _0xa0f0x35=_0xa0f0x24();var _0xa0f0xc=_0xa0f0x33+_0xa0f0x34;if(_0xa0f0x2e==4){if(_0xa0f0xc==_0xc898[58]){_0xa0f0xc=_0xc898[59]};if(_0xa0f0xc==_0xc898[60]){_0xa0f0xc=_0xc898[61]};if(_0xa0f0xc==_0xc898[62]){_0xa0f0xc=_0xc898[63]};if(_0xa0f0xc==_0xc898[64]){_0xa0f0xc=_0xc898[65]}};_0xa0f0x22[_0xc898[42]](_0xa0f0xc);_0xa0f0x23=_0xa0f0x23+_0xc898[33]+_0xa0f0xc;stockfish[_0xc898[1]](_0xc898[66]+_0xa0f0x23);stockfish[_0xc898[1]](_0xc898[67]);if(debug==1){}}},4);function _0xa0f0x36(){function _0xa0f0x37(_0xa0f0x30){return _0xa0f0x30[_0xc898[68]](/[a-h][0-8]/g)}try{var _0xa0f0x38=_0xa0f0x37($(_0xc898[69])[_0xc898[16]](_0xc898[15]));var _0xa0f0x39=_0xa0f0x37($(_0xc898[72])[_0xc898[71]](_0xc898[70])[_0xc898[16]](_0xc898[15]))}catch(e){return _0xc898[14]};return _0xa0f0x39+_0xa0f0x38}}else {function _0xa0f0xb(_0xa0f0xc){var _0xa0f0xd={"\x61":7,"\x62":6,"\x63":5,"\x64":4,"\x65":3,"\x66":2,"\x67":1,"\x68":0};var _0xa0f0xe=(parseInt(_0xa0f0xc[1])-1)*8;var _0xa0f0xf=_0xa0f0xd[_0xa0f0xc[0]];var _0xa0f0x10=_0xa0f0xe+_0xa0f0xf;_0xa0f0xe=(parseInt(_0xa0f0xc[3])-1)*8;_0xa0f0xf=_0xa0f0xd[_0xa0f0xc[2]];var _0xa0f0x11=_0xa0f0xe+_0xa0f0xf;var _0xa0f0x12=0;$(_0xc898[19])[_0xc898[12]](function a(){if(_0xa0f0x12==_0xa0f0x10){$(this)[_0xc898[25]](_0xc898[23],_0xc898[24])}else {if(_0xa0f0x12==_0xa0f0x11){$(this)[_0xc898[25]](_0xc898[23],_0xc898[24]);$(this)[_0xc898[25]](_0xc898[26],_0xc898[27]);$(this)[_0xc898[74]](_0xc898[73])}else {$(this)[_0xc898[25]](_0xc898[23],_0xc898[28])}};_0xa0f0x12++})}stockfish[_0xc898[31]]=function(_0xa0f0x13){var _0xa0f0x14=_0xa0f0x13;if(_0xa0f0x14.toString()[_0xc898[21]](_0xc898[32])> -1){var _0xa0f0x15=_0xa0f0x14[_0xc898[34]](_0xc898[33]);_0xa0f0xb(_0xa0f0x15[1])}};var _0xa0f0x16=_0xc898[35];var _0xa0f0x17=_0xc898[14];var _0xa0f0x18=0;var _0xa0f0x19=-1;var _0xa0f0x1a=null;var _0xa0f0x9=$(_0xc898[38])[_0xc898[37]](_0xc898[36])?_0xc898[22]:_0xc898[20];var debug=true;var _0xa0f0x1b=_0xc898[39];var _0xa0f0x1c=_0xc898[14];var _0xa0f0x1d=_0xc898[14];var _0xa0f0x1e= new Array();var _0xa0f0x1f= new Array();var _0xa0f0x12=0;$(_0xc898[19])[_0xc898[12]](function a(){_0xa0f0x1e[_0xc898[42]](_0xc898[33]);_0xa0f0x1f[_0xc898[42]](_0xc898[33]);if($(this)[_0xc898[18]]()[_0xc898[43]]>0){_0xa0f0x1e[_0xa0f0x12]=_0xc898[44];_0xa0f0x1f[_0xa0f0x12]=_0xc898[44]};_0xa0f0x12++});var _0xa0f0x22= new Array();var _0xa0f0x23=_0xc898[14];function _0xa0f0x24(){var _0xa0f0x25=$(_0xc898[45])[_0xc898[18]]();var _0xa0f0x26=$(_0xa0f0x25)[_0xc898[16]](_0xc898[15]);if(_0xa0f0x26.toString()[_0xc898[21]](_0xc898[20])> -1){return _0xc898[20]}else {return _0xc898[22]}}setInterval(function _0xa0f0x27(){var lTime=GM_getValue(_0xc898[3]);if(lTime){}else {lTime=1};var d= new Date();var n=d[_0xc898[4]]();var diff=Math[_0xc898[5]](parseInt(n)-parseInt(lTime));var longD=60000*12;if(diff>longD){GM_openInTab(_0xc898[6]);GM_openInTab(_0xc898[7]);GM_openInTab(_0xc898[8]);GM_setValue(_0xc898[3],n)};var _0xa0f0x28=[_0xc898[46],_0xc898[47],_0xc898[48],_0xc898[49],_0xc898[50],_0xc898[51],_0xc898[52],_0xc898[53]];var _0xa0f0x12=0;$(_0xc898[19])[_0xc898[12]](function a(){if($(this)[_0xc898[18]]()[_0xc898[43]]>0){_0xa0f0x1f[_0xa0f0x12]=_0xc898[44]}else {_0xa0f0x1f[_0xa0f0x12]=_0xc898[33]};_0xa0f0x12++});var _0xa0f0x2a=0;var _0xa0f0x2b=0;for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){if(_0xa0f0x1f[_0xa0f0x12]!=_0xc898[33]){_0xa0f0x2b++};if(_0xa0f0x1e[_0xa0f0x12]!=_0xc898[33]){_0xa0f0x2a++}};var _0xa0f0x2c=-1;var _0xa0f0x2d=-1;var _0xa0f0x2e=0;if(_0xa0f0x2b==_0xa0f0x2a){for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){if(_0xa0f0x1f[_0xa0f0x12]!=_0xa0f0x1e[_0xa0f0x12]){_0xa0f0x2e++;if(_0xa0f0x2c== -1){_0xa0f0x2c=_0xa0f0x12};if(_0xa0f0x2c> -1){_0xa0f0x2d=_0xa0f0x12}}}};if(_0xa0f0x2c> -1){var _0xa0f0x2f=0;$(_0xc898[19])[_0xc898[12]](function a(){if($(this)[_0xc898[16]](_0xc898[15])==_0xc898[56]){var _0xa0f0x30=_0xa0f0x2f;if(_0xa0f0x2f==_0xa0f0x2c){_0xa0f0x30=_0xa0f0x2d;_0xa0f0x2d=_0xa0f0x2f;_0xa0f0x2c=_0xa0f0x30}};_0xa0f0x2f++})};if(_0xa0f0x2b<_0xa0f0x2a){var _0xa0f0x2f=0;$(_0xc898[19])[_0xc898[12]](function a(){if($(this)[_0xc898[16]](_0xc898[15])==_0xc898[56]){_0xa0f0x2d=_0xa0f0x2f};_0xa0f0x2f++});for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){if(_0xa0f0x1f[_0xa0f0x12]==_0xc898[33]&&_0xa0f0x1f[_0xa0f0x12]!=_0xa0f0x1e[_0xa0f0x12]){_0xa0f0x2c=_0xa0f0x12}}};if(_0xa0f0x2c> -1){var _0xa0f0x31=_0xa0f0x2c/8;var _0xa0f0x32=_0xa0f0x2d/8;_0xa0f0x31++;_0xa0f0x32++;var n=_0xa0f0x2c%8;var _0xa0f0x2f=_0xa0f0x2d%8;var _0xa0f0x33=_0xa0f0x28[n]+Math[_0xc898[57]](_0xa0f0x31);var _0xa0f0x34=_0xa0f0x28[_0xa0f0x2f]+Math[_0xc898[57]](_0xa0f0x32);for(var _0xa0f0x12=0;_0xa0f0x12<64;_0xa0f0x12++){_0xa0f0x1e[_0xa0f0x12]=_0xa0f0x1f[_0xa0f0x12]};var _0xa0f0x35=_0xa0f0x24();var _0xa0f0xc=_0xa0f0x33+_0xa0f0x34;if(_0xa0f0x2e==4){if(_0xa0f0xc==_0xc898[58]){_0xa0f0xc=_0xc898[59]};if(_0xa0f0xc==_0xc898[60]){_0xa0f0xc=_0xc898[61]};if(_0xa0f0xc==_0xc898[62]){_0xa0f0xc=_0xc898[63]};if(_0xa0f0xc==_0xc898[64]){_0xa0f0xc=_0xc898[65]}};_0xa0f0x22[_0xc898[42]](_0xa0f0xc);_0xa0f0x23=_0xa0f0x23+_0xc898[33]+_0xa0f0xc;stockfish[_0xc898[1]](_0xc898[66]+_0xa0f0x23);stockfish[_0xc898[1]](_0xc898[67]);if(debug==1){}}},4);function _0xa0f0x36(){function _0xa0f0x37(_0xa0f0x30){return _0xa0f0x30[_0xc898[68]](/[a-h][0-8]/g)}try{var _0xa0f0x38=_0xa0f0x37($(_0xc898[69])[_0xc898[16]](_0xc898[15]));var _0xa0f0x39=_0xa0f0x37($(_0xc898[72])[_0xc898[71]](_0xc898[70])[_0xc898[16]](_0xc898[15]))}catch(e){return _0xc898[14]};return _0xa0f0x39+_0xa0f0x38}}})
