"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[870],{3870:(_,e,n)=>{n.r(e),n.d(e,{ManagerInfoComponent:()=>r});var a=n(6814),v=n(3722),i=n(4946),Z=n(8736),g=n(4670);let r=(()=>{class d{constructor(t,o){this._UsersService=t,this._Router=o}ngOnInit(){"SuperAdmin"==localStorage.getItem("uRole")?this._UsersService.getManagerByid().subscribe({next:t=>{console.log(t)}}):this._Router.navigate(["/notfound"])}static#i=this.\u0275fac=function(o){return new(o||d)(i.Y36(Z.f),i.Y36(g.F0))};static#n=this.\u0275cmp=i.Xpm({type:d,selectors:[["app-manager-info"]],standalone:!0,features:[i.jDz],decls:140,vars:0,consts:[[1,"container","pt-5"],[1,"row","ms-5","ps-5"],[1,"col-md-9"],[1,"row","pt-5"],[1,"col-md-3"],["src","../../../assets/WhatsApp Image 2023-12-04 at 01.06.38_8a45f47a.jpg","alt","",1,"w-75","d-flex","rounded-circle","img-thumbnail","shadow"],[1,"mt-5","fw-bold"],[1,"small"],[1,"row","mt-4"],[1,"fw-bold"],[1,"col-md-12"],[1,"row","bg-light","rounded"],[1,"col-md-6","pt-3"],[1,"row"],[1,"col-5"],[1,"fw-bolder"],[1,"col-6"],[1,"number"],[1,""],[1,"text-opacity-50","text-black"],[1,"fw-bold","mt-3"],[1,"col-md-3","p-2"]],template:function(o,s){1&o&&(i._UZ(0,"app-nav"),i.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),i._UZ(6,"img",5),i.qZA(),i.TgZ(7,"div",2)(8,"h5",6),i._uU(9,"Hosny Khaled Mohamed"),i.qZA(),i.TgZ(10,"p",7),i._uU(11,"Driver"),i.qZA()()(),i.TgZ(12,"div",8)(13,"h6",9),i._uU(14,"Personal Information"),i.qZA(),i.TgZ(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"p",15),i._uU(21,"Driver ID"),i.qZA()(),i.TgZ(22,"div",16)(23,"P",17),i._uU(24,"767"),i.qZA()()(),i.TgZ(25,"div",13)(26,"div",14)(27,"p",15),i._uU(28,"Email"),i.qZA()(),i.TgZ(29,"div",16)(30,"P",18),i._uU(31,"anas22Gmail.com"),i.qZA()()(),i.TgZ(32,"div",13)(33,"div",14)(34,"p",15),i._uU(35,"Address"),i.qZA()(),i.TgZ(36,"div",16)(37,"P",18),i._uU(38,"Cairo , Nasr City"),i.qZA()()()(),i.TgZ(39,"div",12)(40,"div",13)(41,"div",14)(42,"p",15),i._uU(43,"Salary"),i.qZA()(),i.TgZ(44,"div",16)(45,"P",17),i._uU(46,"9738"),i.TgZ(47,"span",19),i._uU(48,"EGP"),i.qZA()()()(),i.TgZ(49,"div",13)(50,"div",14)(51,"p",15),i._uU(52,"Phone"),i.qZA()(),i.TgZ(53,"div",16)(54,"P",17),i._uU(55,"+20 1083686221"),i.qZA()()(),i.TgZ(56,"div",13)(57,"div",14)(58,"p",15),i._uU(59,"Helth State"),i.qZA()(),i.TgZ(60,"div",16)(61,"P",17),i._uU(62,"7"),i.qZA()()()()()(),i.TgZ(63,"h6",20),i._uU(64,"Higher officials"),i.qZA(),i.TgZ(65,"div",10)(66,"div",11)(67,"div",12)(68,"div",13)(69,"div",14)(70,"p",15),i._uU(71,"Manager"),i.qZA()(),i.TgZ(72,"div",16)(73,"P",18),i._uU(74,"MR/mahmoud kamel Amin"),i.qZA()()(),i.TgZ(75,"div",13)(76,"div",14)(77,"p",15),i._uU(78,"Manager ID"),i.qZA()(),i.TgZ(79,"div",16)(80,"P",17),i._uU(81,"10"),i.qZA()()(),i.TgZ(82,"div",13)(83,"div",14)(84,"p",15),i._uU(85,"Admin"),i.qZA()(),i.TgZ(86,"div",16)(87,"P",18),i._uU(88,"MR/Ahmed mahmoud kamel"),i.qZA()()(),i.TgZ(89,"div",13)(90,"div",14)(91,"p",15),i._uU(92,"Admin ID"),i.qZA()(),i.TgZ(93,"div",16)(94,"P",17),i._uU(95,"23"),i.qZA()()()(),i.TgZ(96,"div",12)(97,"div",13)(98,"div",14)(99,"p",15),i._uU(100,"Assistant"),i.qZA()(),i.TgZ(101,"div",16)(102,"P",18),i._uU(103,"MRS/Nourhan Saied hany"),i.qZA()()(),i.TgZ(104,"div",13)(105,"div",14)(106,"p",15),i._uU(107,"Assistant ID"),i.qZA()(),i.TgZ(108,"div",16)(109,"P",17),i._uU(110,"98"),i.qZA()()(),i.TgZ(111,"div",13)(112,"div",14)(113,"p",15),i._uU(114,"Company"),i.qZA()(),i.TgZ(115,"div",16)(116,"P",18),i._uU(117,"ELadl Group"),i.qZA()()(),i.TgZ(118,"div",13)(119,"div",14)(120,"p",15),i._uU(121,"Company ID"),i.qZA()(),i.TgZ(122,"div",16)(123,"P",17),i._uU(124,"10"),i.qZA()()()()()(),i.TgZ(125,"h6",20),i._uU(126,"Licence"),i.qZA(),i.TgZ(127,"div",10)(128,"div",11)(129,"div",12)(130,"div",13)(131,"div",14)(132,"p",15),i._uU(133,"Licence ExpDate"),i.qZA()(),i.TgZ(134,"div",16)(135,"P",17),i._uU(136,"2023-12-31T02:19:48.925"),i.qZA()()()(),i.TgZ(137,"div",12),i._UZ(138,"div",13),i.qZA()()()()(),i._UZ(139,"div",21),i.qZA()())},dependencies:[a.ez,v.r],styles:[".fw-bold[_ngcontent-%COMP%], .small[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%]{font-family:Righteous,sans-serif!important}.bg[_ngcontent-%COMP%]{background-color:#d0e3ef!important}.comment[_ngcontent-%COMP%]{margin-top:24.1rem!important;font-family:Righteous,sans-serif!important}.number[_ngcontent-%COMP%]{color:#4b99ce!important}p[_ngcontent-%COMP%]{color:#4f4f4f!important}.bg-light[_ngcontent-%COMP%]{background-color:#d0e3ef!important}"]})}return d})()}}]);