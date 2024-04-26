"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[560],{6560:(N,d,l)=>{l.r(d),l.d(d,{RegisterComponent:()=>y});var u=l(6814),m=l(4670),i=l(95),e=l(4946),f=l(304);function x(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"NAME IS Required"),e.qZA())}function h(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"NAME min length 3"),e.qZA())}function Z(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"NAME max length 10"),e.qZA())}function C(t,a){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,x,2,0,"p",17),e.YNc(2,h,2,0,"p",17),e.YNc(3,Z,2,0,"p",17),e.qZA()),2&t){const r=e.oxw();let o,n,g;e.xp6(1),e.Q6J("ngIf",null==(o=r.registerForm.get("name"))?null:o.getError("Required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.registerForm.get("name"))?null:n.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(g=r.registerForm.get("name"))?null:g.getError("maxlength"))}}function v(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"email IS Required"),e.qZA())}function P(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"email inValid"),e.qZA())}function M(t,a){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,v,2,0,"p",17),e.YNc(2,P,2,0,"p",17),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.registerForm.get("email"))?null:o.getError("Required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.registerForm.get("email"))?null:n.getError("email"))}}function T(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"password IS Required"),e.qZA())}function O(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"invalid pattern"),e.qZA())}function w(t,a){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,T,2,0,"p",17),e.YNc(2,O,2,0,"p",17),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.registerForm.get("password"))?null:o.getError("Required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.registerForm.get("password"))?null:n.getError("pattern"))}}function A(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"rePassword IS Required"),e.qZA())}function q(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"misMatch"),e.qZA())}function I(t,a){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,A,2,0,"p",17),e.YNc(2,q,2,0,"p",17),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.registerForm.get("rePassword"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.registerForm.get("rePassword"))?null:n.getError("mismatch"))}}function b(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"phone IS Required"),e.qZA())}function U(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"invalid pattern"),e.qZA())}function R(t,a){if(1&t&&(e.TgZ(0,"div",36),e.YNc(1,b,2,0,"p",17),e.YNc(2,U,2,0,"p",17),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.registerForm.get("phone"))?null:o.getError("Required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.registerForm.get("phone"))?null:n.getError("pattern"))}}function E(t,a){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",37),e.qZA())}function F(t,a){if(1&t&&(e.TgZ(0,"p",38),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Oqu(r.errMsg)}}let y=(()=>{class t{constructor(r,o,n){this._Router=r,this._AuthService=o,this._FormBuilder=n,this.errMsg="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(10)]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]],rePassword:["",[i.kI.required]],phone:["",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)]]},{validators:[this.confirmPassword]})}confirmPassword(r){const o=r.get("password"),n=r.get("rePassword");""==n?.value?n?.setErrors({required:!0}):o?.value!=n?.value&&n?.setErrors({mismatch:!0})}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(m.F0),e.Y36(f.e),e.Y36(i.qu))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:64,vars:9,consts:[[1,"main"],["id","container",1,"container"],[1,"form-container","sign-up"],[3,"formGroup"],[1,"create"],["for","name"],["formControlName","name","id","name","type","text","placeholder","Your Name .."],["class","alert alert-danger",4,"ngIf"],["for","email"],["formControlName","email","id","email","type","mail","placeholder","Your Email .."],["for","password"],["id","password","formControlName","password","type","password","placeholder","Password .."],["for","RePassword"],["formControlName","rePassword","type","password","placeholder","RePassword .."],["for","phone"],["id","phone","formControlName","phone","type","phone","placeholder","Your Phone .."],[3,"disabled"],[4,"ngIf"],["class","alert alert-danger mx-auto p-1",4,"ngIf"],[1,"form-container","sign-up","d-none"],["action",""],[1,"signword"],[1,"p-2"],["type","mail","placeholder","Your Email .."],["type","password","placeholder","Password .."],["href","#"],["id","signIn"],[1,"toggle-container"],[1,"toggle"],[1,"toggle-panel","toggle-right"],["src","../../../assets/WhatsApp Image 2023-12-03 at 8.29.01 AM.jpeg","width","80px","height","60px","alt","",1,"rounded-3"],["id","login","routerLink","/login",1,"hidden"],[1,"toggle-panel","toggle-left","text-white","d-none"],[1,""],[1,"fw-bold"],["id","login",1,""],[1,"alert","alert-danger"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","mx-auto","p-1"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"h1",4),e._uU(5,"Create Account"),e.qZA(),e.TgZ(6,"span"),e._uU(7,"use your email for registeration"),e.qZA(),e.TgZ(8,"div"),e._UZ(9,"label",5)(10,"input",6),e.TgZ(11,"div"),e.YNc(12,C,4,3,"div",7),e.qZA()(),e.TgZ(13,"div"),e._UZ(14,"label",8)(15,"input",9),e.TgZ(16,"div"),e.YNc(17,M,3,2,"div",7),e.qZA()(),e.TgZ(18,"div"),e._UZ(19,"label",10)(20,"input",11),e.YNc(21,w,3,2,"div",7),e.qZA(),e.TgZ(22,"div"),e._UZ(23,"label",12)(24,"input",13),e.YNc(25,I,3,2,"div",7),e.qZA(),e.TgZ(26,"div"),e._UZ(27,"label",14)(28,"input",15),e.YNc(29,R,3,2,"div",7),e.qZA(),e.TgZ(30,"button",16),e._uU(31," sign up "),e.YNc(32,E,2,0,"span",17),e.qZA(),e.YNc(33,F,2,1,"p",18),e.qZA()(),e.TgZ(34,"div",19)(35,"form",20)(36,"h1",21),e._uU(37,"sign in"),e.qZA(),e.TgZ(38,"span",22),e._uU(39,"or use your email password"),e.qZA(),e._UZ(40,"input",23)(41,"input",24),e.TgZ(42,"a",25),e._uU(43,"Forget your password"),e.qZA(),e.TgZ(44,"button",26),e._uU(45,"sign in"),e.qZA()()(),e.TgZ(46,"div",27)(47,"div",28)(48,"div",29),e._UZ(49,"img",30),e.TgZ(50,"h1"),e._uU(51,"Welcome Back!"),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Enter your personal details to use all of site features"),e.qZA(),e.TgZ(54,"button",31),e._uU(55,"Sign In"),e.qZA()()(),e.TgZ(56,"div",32),e._UZ(57,"img",30),e.TgZ(58,"h1",33),e._uU(59,"Hello,friend!"),e.qZA(),e.TgZ(60,"p",34),e._uU(61,"Register with your personal details to use all of site features"),e.qZA(),e.TgZ(62,"button",35),e._uU(63,"Sign up"),e.qZA()()()()()),2&o){let g,s,p,c,_;e.xp6(3),e.Q6J("formGroup",n.registerForm),e.xp6(9),e.Q6J("ngIf",(null==(g=n.registerForm.get("name"))?null:g.errors)&&(null==(g=n.registerForm.get("name"))?null:g.touched)),e.xp6(5),e.Q6J("ngIf",(null==(s=n.registerForm.get("email"))?null:s.errors)&&(null==(s=n.registerForm.get("email"))?null:s.touched)),e.xp6(4),e.Q6J("ngIf",(null==(p=n.registerForm.get("password"))?null:p.errors)&&(null==(p=n.registerForm.get("password"))?null:p.touched)),e.xp6(4),e.Q6J("ngIf",(null==(c=n.registerForm.get("rePassword"))?null:c.errors)&&(null==(c=n.registerForm.get("rePassword"))?null:c.touched)),e.xp6(4),e.Q6J("ngIf",(null==(_=n.registerForm.get("phone"))?null:_.errors)&&(null==(_=n.registerForm.get("phone"))?null:_.touched)),e.xp6(1),e.Q6J("disabled",n.registerForm.invalid),e.xp6(2),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",n.errMsg)}},dependencies:[u.ez,u.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH],styles:[".container[_ngcontent-%COMP%]{background-color:#fff;border-radius:30px;box-shadow:0 5px 15px #00000059;position:relative;overflow:hidden;width:770px;max-width:100%;min-height:480px}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;line-height:20px;letter-spacing:.3px;margin:20px 0}.container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;font-size:13px;text-decoration:none;margin:15px 0 10px}.create[_ngcontent-%COMP%]{color:#4289ba}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#5ea2d3;color:#fff;font-size:12px;padding:10px 46px;border:1px solid transparent;border-radius:8px;font-weight:600px;letter-spacing:.5px;text-transform:uppercase;cursor:pointer;margin-top:10px}.container[_ngcontent-%COMP%]   button.hidden[_ngcontent-%COMP%]{background-color:transparent;border-color:#fff}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#fff;padding:0 40px;height:100%}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#eee;border:none;margin:8px 0;padding:10px 15px;font-size:13px;border-radius:8px;width:100%;outline:none}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Montserrat,sans-serif}.main[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;background-repeat:no-repeat;background-size:cover}.signword[_ngcontent-%COMP%]{color:#4289ba}.form-container[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;transition:all .6s ease-in-out}.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#4289ba}.sign-in[_ngcontent-%COMP%]{left:0;width:50%;z-index:2}.container.active[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]{transform:translate(-100%)}.sign-up[_ngcontent-%COMP%]{left:400px;width:50%;opacity:1;z-index:1}.container.active[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]{transform:translate(100%);opacity:1;z-index:5;animation:_ngcontent-%COMP%_move .6}@keyframes _ngcontent-%COMP%_move{0%,49.99%{opacity:0;z-index:1}50%,to{opacity:1;z-index:5}}.toggle-container[_ngcontent-%COMP%]{position:absolute;top:0;width:50%;height:100%;overflow:hidden;transition:all .6s ease-in-out;border-radius:0 150px 100px 0;z-index:1000}.container.active[_ngcontent-%COMP%]   .toggle-container[_ngcontent-%COMP%]{transform:translate(-100%);border-radius:0 150px 100px 0}#login[_ngcontent-%COMP%], #signIn[_ngcontent-%COMP%]{background-color:#5ea2d3}.toggle[_ngcontent-%COMP%]{background-color:#4289ba;background:linear-gradient(to rigith,#5c6bc0,#512da8);color:#fff;position:relative;left:-100px;height:100%;width:200%;transform:translate(0);transition:all .6 ease-in-out}.container.active[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{transform:translate(50%);display:none}.toggle-panel[_ngcontent-%COMP%]{position:absolute;width:50%;height:100%;display:flex;left:93px;align-items:center;justify-content:center;flex-direction:column;padding:0 30px;text-align:center;top:0;transform:translate(0);transition:all .6 ease-in-out}.toggle-left[_ngcontent-%COMP%]{transform:translate(-200%)}.container.active[_ngcontent-%COMP%]   .toggle-left[_ngcontent-%COMP%]{transform:translate(0)}.toggle-right[_ngcontent-%COMP%]{right:60px;transform:translate(0)}.container.active[_ngcontent-%COMP%]   .toggle-right[_ngcontent-%COMP%]{transform:translate(200%)}"]})}return t})()}}]);