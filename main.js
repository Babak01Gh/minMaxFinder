const _0x21794e=_0x1db6;(function(_0x136a1b,_0x37a2e8){const _0x42810c=_0x1db6,_0x4c1293=_0x136a1b();while(!![]){try{const _0x462f58=parseInt(_0x42810c(0xcb))/0x1+parseInt(_0x42810c(0xc7))/0x2*(-parseInt(_0x42810c(0xcc))/0x3)+parseInt(_0x42810c(0xde))/0x4*(-parseInt(_0x42810c(0xc4))/0x5)+parseInt(_0x42810c(0xdc))/0x6*(-parseInt(_0x42810c(0xdd))/0x7)+-parseInt(_0x42810c(0xe4))/0x8*(-parseInt(_0x42810c(0xc0))/0x9)+-parseInt(_0x42810c(0xcf))/0xa*(-parseInt(_0x42810c(0xd8))/0xb)+parseInt(_0x42810c(0xdf))/0xc*(-parseInt(_0x42810c(0xc6))/0xd);if(_0x462f58===_0x37a2e8)break;else _0x4c1293['push'](_0x4c1293['shift']());}catch(_0xf63d19){_0x4c1293['push'](_0x4c1293['shift']());}}}(_0x5a0b,0x4a505));let Rmin=null,Rmax=null,Cmin=null,Cmax=null,numbers=[];const main=document[_0x21794e(0xc8)](_0x21794e(0xcd)),inpuetEl=document[_0x21794e(0xc8)]('#numInput'),pusher=document[_0x21794e(0xc8)](_0x21794e(0xd7)),precells=document[_0x21794e(0xc8)]('#cells'),calc=document[_0x21794e(0xc8)](_0x21794e(0xc5));function _0x5a0b(){const _0x18efe0=['42BIpGHv','.main','push','1201040MyqTLP','opacity','cells','value','innerHTML','min','filter','length','#push','55yHkYPu','Enter','Max\x20:\x20','blur(1px)','6LbuqtE','3778369MesJSU','158840ORBxMO','1069164vvIoGy','innerText','row','style','sort','4251128ovDIuB','max','appendChild','add','createElement','addEventListener','classList','9hmAHeu','click','key','cell','45oWLHHd','#calc','26cSzJha','34358cRHMTE','querySelector','div','slice','488335ZFKZvz'];_0x5a0b=function(){return _0x18efe0;};return _0x5a0b();}pusher[_0x21794e(0xbe)](_0x21794e(0xc1),forpush),document[_0x21794e(0xbe)]('keydown',_0x3f2c44=>{const _0xab50ae=_0x21794e;_0x3f2c44[_0xab50ae(0xc2)]===_0xab50ae(0xd9)&&forpush();}),calc[_0x21794e(0xbe)](_0x21794e(0xc1),()=>{const _0x59cc3b=_0x21794e;precells[_0x59cc3b(0xd3)]='',test(numbers),numbers=[];});function test(_0x28dd9a){const _0x2aef7d=_0x21794e;if(_0x28dd9a[_0x2aef7d(0xd6)]===0x0)return[Rmax,Rmin];let _0x101f0e=_0x28dd9a['slice'](0x0,0x2)[_0x2aef7d(0xe3)]((_0x139390,_0x2aee18)=>{return _0x139390-_0x2aee18;});if(_0x101f0e[_0x2aef7d(0xd6)]===0x2)Cmin=_0x101f0e[0x0],Cmax=_0x101f0e[0x1];else _0x101f0e['length']===0x1&&(Cmin=Cmax=_0x101f0e[0x0]);return Rmin=Rmin!==null?Math[_0x2aef7d(0xd4)](Rmin,Cmin):Cmin,Rmax=Rmax!==null?Math[_0x2aef7d(0xe5)](Rmax,Cmax):Cmax,addRow(_0x28dd9a,Rmax,Rmin),_0x28dd9a=_0x28dd9a[_0x2aef7d(0xca)](0x2),test(_0x28dd9a);}function _0x1db6(_0x2a550e,_0x223498){const _0x5a0bf2=_0x5a0b();return _0x1db6=function(_0x1db646,_0x20fc2b){_0x1db646=_0x1db646-0xbc;let _0x18956b=_0x5a0bf2[_0x1db646];return _0x18956b;},_0x1db6(_0x2a550e,_0x223498);}function addRow(_0x1ce024,_0x2a4a3a,_0x519771){const _0x3ec618=_0x21794e,_0x371cb3=document[_0x3ec618(0xbd)](_0x3ec618(0xc9)),_0x1bc975=document[_0x3ec618(0xbd)](_0x3ec618(0xc9));_0x1bc975[_0x3ec618(0xbf)][_0x3ec618(0xbc)](_0x3ec618(0xd1)),_0x371cb3[_0x3ec618(0xbf)][_0x3ec618(0xbc)](_0x3ec618(0xe1));for(let _0x14399a=0x0;_0x14399a<_0x1ce024[_0x3ec618(0xd6)];_0x14399a++){const _0x2f4573=document['createElement'](_0x3ec618(0xc9));_0x2f4573[_0x3ec618(0xbf)][_0x3ec618(0xbc)](_0x3ec618(0xc3)),_0x2f4573['innerText']=_0x1ce024[_0x14399a],(_0x14399a===0x0||_0x14399a===0x1)&&_0x1ce024[_0x3ec618(0xd6)]>0x2&&(_0x2f4573['style'][_0x3ec618(0xd5)]=_0x3ec618(0xdb)),_0x1bc975['appendChild'](_0x2f4573);}const _0x576d16=document[_0x3ec618(0xbd)](_0x3ec618(0xc9));_0x576d16[_0x3ec618(0xe2)][_0x3ec618(0xd0)]=_0x1ce024[_0x3ec618(0xd6)]>0x2?0.2:0x1,_0x576d16[_0x3ec618(0xe2)]['color']=_0x1ce024[_0x3ec618(0xd6)]>0x2?'':'red',_0x576d16[_0x3ec618(0xe0)]=_0x3ec618(0xda)+_0x2a4a3a+'\x20,\x20Min\x20:\x20'+_0x519771,_0x371cb3['appendChild'](_0x1bc975),_0x371cb3['appendChild'](_0x576d16),main[_0x3ec618(0xe6)](_0x371cb3);}function forpush(){const _0x10b592=_0x21794e;main[_0x10b592(0xd3)]='';const _0x580f8e=document[_0x10b592(0xbd)]('div');_0x580f8e[_0x10b592(0xbf)][_0x10b592(0xbc)](_0x10b592(0xc3)),_0x580f8e[_0x10b592(0xe0)]=inpuetEl[_0x10b592(0xd2)],numbers[_0x10b592(0xce)](Number(inpuetEl[_0x10b592(0xd2)])),precells['appendChild'](_0x580f8e),inpuetEl[_0x10b592(0xd2)]='';}