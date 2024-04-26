"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[348],{1348:(u,g,e)=>{e.r(g),e.d(g,{ManagersComponent:()=>O});var i=e(6814),d=e(3722),l=e(530),c=e(95),t=e(4946),p=e(8736),m=e(4670);function M(o,h){if(1&o){const n=t.EpF();t.TgZ(0,"tr",31),t.NdJ("click",function(){const _=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.managerInfo(_.id))}),t.TgZ(1,"td"),t._UZ(2,"input",32),t.qZA(),t.TgZ(3,"td",27),t._UZ(4,"img",33),t.qZA(),t.TgZ(5,"td")(6,"p",34),t._uU(7),t.qZA()(),t.TgZ(8,"td",27)(9,"p",35),t._uU(10),t.qZA()(),t.TgZ(11,"td",27)(12,"p",35),t._uU(13),t.qZA()(),t.TgZ(14,"td")(15,"p",35),t._uU(16),t.qZA()()()}if(2&o){const n=h.$implicit;t.xp6(4),t.Q6J("src",n.img,t.LSH),t.xp6(3),t.Oqu(n.name),t.xp6(3),t.Oqu(n.id),t.xp6(3),t.Oqu(n.email),t.xp6(3),t.Oqu(n.phone)}}let O=(()=>{class o{constructor(n,r){this._UsersService=n,this._Router=r,this.managers=[],this.term=""}managerInfo(n){this.managerid=n,localStorage.setItem("managerId",this.managerid),"SuperAdmin"==localStorage.getItem("uRole")&&this._Router.navigate(["/managerInfoSuper"])}ngOnInit(){this._UsersService.getManagers().subscribe({next:n=>{console.log(n),this.managers=n}})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(p.f),t.Y36(m.F0))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-managers"]],standalone:!0,features:[t.jDz],decls:106,vars:5,consts:[[1,"container","pt-5"],[1,"row"],[1,"col-lg-3","col-md-6","p-2"],[1,"bg-light","rounded-5","shadow"],[1,"col-7","mt-5"],[1,"ps-3","mt-4"],[1,"small","ps-3"],[1,"small","fw-lighter","ps-3"],[1,"col-5"],[1,"box"],["cx","70","cy","70","r","50",1,"color1"],[1,"counter"],[1,"coloe1"],[1,"box2"],[1,"box3"],[1,"box4"],[1,"container","mt-5","pt-5"],[1,"col-md-7","d-flex"],["type","search","placeholder","Type to search...",1,"form-control","search","shadow-none","border-0","w-50",3,"ngModel","ngModelChange"],[1,"btn","btn-success","ms-2"],[1,"col-md-5"],[1,"d-flex","justify-content-end"],[1,"btn","add","text-white"],[1,"fa-plus"],[1,"btn","delete","text-white","mx-2"],[1,"fa-solid","fa-trash"],[1,"container","mt-5","pb-4"],[1,""],[1,"table","shadow"],[1,"text-center"],["class","text-center",3,"click",4,"ngFor","ngForOf"],[1,"text-center",3,"click"],["type","checkbox",1,"form-check","mt-2","ms-4"],["width","40","height","40","alt","manager",1,"rounded-circle",3,"src"],[1,"pt-2"],[1,"mt-2"]],template:function(r,a){1&r&&(t._UZ(0,"app-nav"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",1)(6,"div",4)(7,"h4",5),t._uU(8,"230"),t.qZA(),t.TgZ(9,"p",6),t._uU(10,"Active People"),t.qZA(),t.TgZ(11,"p",7),t._uU(12,"Increse since last quarter"),t.qZA()(),t.TgZ(13,"div",8)(14,"div",9),t.O4$(),t.TgZ(15,"svg"),t._UZ(16,"circle",10),t.qZA(),t.kcU(),t.TgZ(17,"div",11)(18,"span",12),t._uU(19,"80%"),t.qZA()()()()()()(),t.TgZ(20,"div",2)(21,"div",3)(22,"div",1)(23,"div",4)(24,"h4",5),t._uU(25,"660"),t.qZA(),t.TgZ(26,"p",6),t._uU(27,"Applied People"),t.qZA(),t.TgZ(28,"p",7),t._uU(29,"Increse since last quarter"),t.qZA()(),t.TgZ(30,"div",8)(31,"div",13),t.O4$(),t.TgZ(32,"svg"),t._UZ(33,"circle",10),t.qZA(),t.kcU(),t.TgZ(34,"div",11)(35,"span",12),t._uU(36,"85%"),t.qZA()()()()()()(),t.TgZ(37,"div",2)(38,"div",3)(39,"div",1)(40,"div",4)(41,"h4",5),t._uU(42,"530"),t.qZA(),t.TgZ(43,"p",6),t._uU(44,"Reviewed People"),t.qZA(),t.TgZ(45,"p",7),t._uU(46,"Increse since last quarter"),t.qZA()(),t.TgZ(47,"div",8)(48,"div",14),t.O4$(),t.TgZ(49,"svg"),t._UZ(50,"circle",10),t.qZA(),t.kcU(),t.TgZ(51,"div",11)(52,"span",12),t._uU(53,"92%"),t.qZA()()()()()()(),t.TgZ(54,"div",2)(55,"div",3)(56,"div",1)(57,"div",4)(58,"h4",5),t._uU(59,"130"),t.qZA(),t.TgZ(60,"p",6),t._uU(61,"Hired People"),t.qZA(),t.TgZ(62,"p",7),t._uU(63,"Increse since last quarter"),t.qZA()(),t.TgZ(64,"div",8)(65,"div",15),t.O4$(),t.TgZ(66,"svg"),t._UZ(67,"circle",10),t.qZA(),t.kcU(),t.TgZ(68,"div",11)(69,"span",12),t._uU(70,"60%"),t.qZA()()()()()()()()(),t.TgZ(71,"div",16)(72,"div",1)(73,"div",17)(74,"input",18),t.NdJ("ngModelChange",function(s){return a.term=s}),t.qZA(),t.TgZ(75,"button",19),t._uU(76,"Search"),t.qZA()(),t.TgZ(77,"div",20)(78,"div",21)(79,"button",22),t._UZ(80,"i",23),t._uU(81," Add New People.."),t.qZA(),t.TgZ(82,"button",24),t._UZ(83,"i",25),t._uU(84," Delete"),t.qZA()()()()(),t.TgZ(85,"div",26)(86,"h3",27),t._uU(87,"Managers"),t.qZA(),t.TgZ(88,"table",28)(89,"thead")(90,"tr",29)(91,"th"),t._uU(92,"#"),t.qZA(),t.TgZ(93,"th"),t._uU(94,"#"),t.qZA(),t.TgZ(95,"th"),t._uU(96,"Name"),t.qZA(),t.TgZ(97,"th"),t._uU(98,"ID"),t.qZA(),t.TgZ(99,"th"),t._uU(100,"Email"),t.qZA(),t.TgZ(101,"th"),t._uU(102,"Contact"),t.qZA()()(),t.TgZ(103,"Tbody"),t.YNc(104,M,17,5,"tr",30),t.ALo(105,"search"),t.qZA()()()),2&r&&(t.xp6(74),t.Q6J("ngModel",a.term),t.xp6(30),t.Q6J("ngForOf",t.xi3(105,2,a.managers,a.term)))},dependencies:[i.ez,i.sg,d.r,l.C,c.u5,c.Fj,c.JJ,c.On],styles:[".small[_ngcontent-%COMP%]{color:#888787}.box[_ngcontent-%COMP%], .box2[_ngcontent-%COMP%], .box3[_ngcontent-%COMP%], .box4[_ngcontent-%COMP%]{position:relative;height:250px;width:100px}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .box2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .box3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .box4[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;height:150px;width:150px;top:50%;left:50%;transform:translate(-50%,-50%)}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:transparent;stroke:#20b983;stroke-width:10;stroke-dasharray:220;stroke-dashoffset:500;stroke-linecap:round;animation:_ngcontent-%COMP%_stroke 5s steps(500) forwards}.box2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:transparent;stroke:#b54268;stroke-width:10;stroke-dasharray:240;stroke-dashoffset:500;stroke-linecap:round;animation:_ngcontent-%COMP%_stroke 5s steps(500) forwards}.box3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:transparent;stroke:#1b6492;stroke-width:10;stroke-dasharray:280;stroke-dashoffset:500;stroke-linecap:round;animation:_ngcontent-%COMP%_stroke 5s steps(500) forwards}.box4[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:transparent;stroke:#e4ca48;stroke-width:10;stroke-dasharray:180;stroke-dashoffset:500;stroke-linecap:round;animation:_ngcontent-%COMP%_stroke 5s steps(500) forwards}.box[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%], .box2[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%], .box3[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%], .box4[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{position:absolute;top:65%;left:50%;transform:translate(-50%,-50%);width:100%;height:50%;text-align:center}.box[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .box2[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .box3[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .box4[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:22px;line-height:50px;color:#000;font-weight:700}@keyframes _ngcontent-%COMP%_stroke{to{stroke-dashoffset:0}}.add[_ngcontent-%COMP%], .delete[_ngcontent-%COMP%], .edit[_ngcontent-%COMP%]{background-color:#3f51b5}.progress-bar[_ngcontent-%COMP%]{background-color:#495cc7;font-weight:700}.progress[_ngcontent-%COMP%]{height:8px!important}@media all and (max-width: 575px){.search[_ngcontent-%COMP%]{width:80%!important}.col-md-5[_ngcontent-%COMP%]{margin-top:10px!important}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:small}}@media only screen and (max-width: 1024px){.col-lg-3[_ngcontent-%COMP%]{width:50%!important}.col-md-5[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:11px!important}}@media only screen and (max-width: 320px){.col-lg-3[_ngcontent-%COMP%]{width:100%!important}}@media only screen and (max-width: 375px){.col-lg-3[_ngcontent-%COMP%]{width:100%!important}}@media only screen and (max-width: 425px){.col-lg-3[_ngcontent-%COMP%]{width:100%!important}}@media only screen and (max-width: 767px){.col-lg-3[_ngcontent-%COMP%]{width:100%!important}}"]})}return o})()}}]);