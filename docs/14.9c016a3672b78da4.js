"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[14],{4014:(_,a,e)=>{e.r(a),e.d(a,{DriverInfoComponent:()=>p});var r=e(6814),d=e(3722),t=e(4946),s=e(8736),c=e(4670);function g(i,u){if(1&i&&(t.TgZ(0,"div",11)(1,"div",12)(2,"div",13),t._UZ(3,"img",14),t.qZA(),t.TgZ(4,"div",11)(5,"h5",15),t._uU(6),t.qZA(),t.TgZ(7,"p",16),t._uU(8,"Driver"),t.qZA()()(),t.TgZ(9,"div",17)(10,"h6",18),t._uU(11,"Personal Information"),t.qZA(),t.TgZ(12,"div",19)(13,"div",20)(14,"div",21)(15,"div",1)(16,"div",22)(17,"p",23),t._uU(18,"Driver ID"),t.qZA()(),t.TgZ(19,"div",24)(20,"P",25),t._uU(21),t.qZA()()(),t.TgZ(22,"div",1)(23,"div",22)(24,"p",23),t._uU(25,"Email"),t.qZA()(),t.TgZ(26,"div",24)(27,"P",26),t._uU(28),t.qZA()()(),t.TgZ(29,"div",1)(30,"div",22)(31,"p",23),t._uU(32,"Address"),t.qZA()(),t.TgZ(33,"div",24)(34,"P",26),t._uU(35),t.qZA()()()(),t.TgZ(36,"div",21)(37,"div",1)(38,"div",22)(39,"p",23),t._uU(40,"Salary"),t.qZA()(),t.TgZ(41,"div",24)(42,"P",25),t._uU(43),t.TgZ(44,"span",27),t._uU(45,"EGP"),t.qZA()()()(),t.TgZ(46,"div",1)(47,"div",22)(48,"p",23),t._uU(49,"Phone"),t.qZA()(),t.TgZ(50,"div",24)(51,"P",25),t._uU(52),t.qZA()()(),t.TgZ(53,"div",1)(54,"div",22)(55,"p",23),t._uU(56,"Helth State"),t.qZA()(),t.TgZ(57,"div",24)(58,"P",25),t._uU(59),t.qZA()()()()()(),t.TgZ(60,"h6",28),t._uU(61,"Higher officials"),t.qZA(),t.TgZ(62,"div",19)(63,"div",20)(64,"div",21)(65,"div",1)(66,"div",22)(67,"p",23),t._uU(68,"Manager"),t.qZA()(),t.TgZ(69,"div",24)(70,"P",26),t._uU(71,"MR/mahmoud kamel Amin"),t.qZA()()(),t.TgZ(72,"div",1)(73,"div",22)(74,"p",23),t._uU(75,"Manager ID"),t.qZA()(),t.TgZ(76,"div",24)(77,"P",25),t._uU(78),t.qZA()()(),t.TgZ(79,"div",1)(80,"div",22)(81,"p",23),t._uU(82,"Admin"),t.qZA()(),t.TgZ(83,"div",24)(84,"P",26),t._uU(85,"MR/Ahmed mahmoud kamel"),t.qZA()()(),t.TgZ(86,"div",1)(87,"div",22)(88,"p",23),t._uU(89,"Admin ID"),t.qZA()(),t.TgZ(90,"div",24)(91,"P",25),t._uU(92),t.qZA()()()(),t.TgZ(93,"div",21)(94,"div",1)(95,"div",22)(96,"p",23),t._uU(97,"Assistant"),t.qZA()(),t.TgZ(98,"div",24)(99,"P",26),t._uU(100,"MRS/Nourhan Saied hany"),t.qZA()()(),t.TgZ(101,"div",1)(102,"div",22)(103,"p",23),t._uU(104,"Assistant ID"),t.qZA()(),t.TgZ(105,"div",24)(106,"P",25),t._uU(107),t.qZA()()(),t.TgZ(108,"div",1)(109,"div",22)(110,"p",23),t._uU(111,"Company"),t.qZA()(),t.TgZ(112,"div",24)(113,"P",26),t._uU(114,"ELadl Group"),t.qZA()()(),t.TgZ(115,"div",1)(116,"div",22)(117,"p",23),t._uU(118,"Company ID"),t.qZA()(),t.TgZ(119,"div",24)(120,"P",25),t._uU(121),t.qZA()()()()()(),t.TgZ(122,"h6",28),t._uU(123,"Licence"),t.qZA(),t.TgZ(124,"div",19)(125,"div",20)(126,"div",21)(127,"div",1)(128,"div",22)(129,"p",23),t._uU(130,"Licence ExpDate"),t.qZA()(),t.TgZ(131,"div",24)(132,"P",25),t._uU(133),t.qZA()()()(),t.TgZ(134,"div",21),t._UZ(135,"div",1),t.qZA()()()()()),2&i){const n=u.$implicit;t.xp6(6),t.Oqu(n.name),t.xp6(15),t.Oqu(n.id),t.xp6(7),t.Oqu(n.email),t.xp6(7),t.Oqu(n.address),t.xp6(8),t.Oqu(n.salary),t.xp6(9),t.Oqu(n.phone),t.xp6(7),t.Oqu(n.health_statusd),t.xp6(19),t.Oqu(n.mgrID),t.xp6(14),t.Oqu(n.adminID),t.xp6(15),t.Oqu(n.assID),t.xp6(14),t.Oqu(n.compID),t.xp6(12),t.Oqu(n.licenseExpDate)}}let p=(()=>{class i{constructor(n,o){this._UsersService=n,this._Router=o,this.data=[]}ngOnInit(){"Manager"==localStorage.getItem("uRole")||"Admin"==localStorage.getItem("uRole")||"Assistant"==localStorage.getItem("uRole")?this._UsersService.getdriverById().subscribe({next:n=>{this.data.push(n),console.log(this.data)}}):this._Router.navigate(["/notfound"])}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(s.f),t.Y36(c.F0))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-driver-info"]],standalone:!0,features:[t.jDz],decls:22,vars:1,consts:[[1,"container","pt-5"],[1,"row"],["class","col-md-9",4,"ngFor","ngForOf"],[1,"col-md-3","p-2"],["href","",1,"traffic"],[1,"fw-bold","comment"],[1,"bg-light","px-2","pt-1","rounded"],[1,"my-2"],[1,"number","small","fw-bold","ms-1"],[1,"mt-2"],[1,"py-2"],[1,"col-md-9"],[1,"row","pt-5"],[1,"col-md-3"],["src","../../../assets/WhatsApp Image 2023-12-04 at 01.06.38_8a45f47a.jpg","alt","driver",1,"w-75","d-flex","rounded-circle","img-thumbnail","shadow"],[1,"mt-5","fw-bold"],[1,"small"],[1,"row","mt-4"],[1,"fw-bold"],[1,"col-md-12"],[1,"row","bg-light","rounded"],[1,"col-md-6","pt-3"],[1,"col-5"],[1,"fw-bolder"],[1,"col-6"],[1,"number"],[1,""],[1,"text-opacity-50","text-black"],[1,"fw-bold","mt-3"]],template:function(o,l){1&o&&(t._UZ(0,"app-nav"),t.TgZ(1,"div",0)(2,"div",1),t.YNc(3,g,136,12,"div",2),t.TgZ(4,"div",3)(5,"a",4)(6,"span"),t._uU(7,"Violations"),t.qZA(),t._UZ(8,"i"),t.qZA(),t.TgZ(9,"h6",5),t._uU(10,"Comments"),t.qZA(),t.TgZ(11,"div",6)(12,"p",7),t._uU(13,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus."),t.TgZ(14,"span",8),t._uU(15,"19/2/2020"),t.qZA()(),t.TgZ(16,"p",9),t._uU(17,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus."),t.TgZ(18,"span",8),t._uU(19,"19/2/2020"),t.qZA()(),t.TgZ(20,"p",10),t._uU(21,"..."),t.qZA()()()()()),2&o&&(t.xp6(3),t.Q6J("ngForOf",l.data))},dependencies:[r.ez,r.sg,d.r],styles:['.fw-bold[_ngcontent-%COMP%], .small[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%]{font-family:Righteous,sans-serif!important}.bg[_ngcontent-%COMP%]{background-color:#d0e3ef!important}.comment[_ngcontent-%COMP%]{margin-top:24.1rem!important;font-family:Righteous,sans-serif!important}.number[_ngcontent-%COMP%]{color:#4b99ce!important}p[_ngcontent-%COMP%]{color:#4f4f4f!important}.bg-light[_ngcontent-%COMP%]{background-color:#d0e3ef!important}.traffic[_ngcontent-%COMP%]{font-family:Righteous,sans-serif!important;top:19.5rem;position:relative;background-color:#000;color:#000;text-decoration:none;text-transform:uppercase;font-size:1.2em;letter-spacing:.1em;font-weight:400;padding:50px 75px;transition:.5s}.traffic[_ngcontent-%COMP%]:hover{letter-spacing:.25em;background-color:#4b99ce;box-shadow:0 0 35px #4b99ce;color:#4b99ce}.traffic[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:2px;background-color:#efecec}.traffic[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;z-index:3}.traffic[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;inset:0;display:block}.traffic[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:80%;width:10px;height:4px;background-color:#efecec;transform:translate(-50%) skew(325deg);transition:.5s}.traffic[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]:before{width:20px;left:20%}.traffic[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:20%;width:10px;height:4px;background-color:#efecec;transform:translate(-50%) skew(325deg);transition:.5s}.traffic[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]:after{width:20px;left:80%}']})}return i})()}}]);