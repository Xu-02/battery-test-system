(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{5709:function(e,n,s){Promise.resolve().then(s.bind(s,1463))},1463:function(e,n,s){"use strict";s.r(n);var t=s(3827),i=s(4090),l=s(1583),a=s(1587),r=s(588),d=s(6785),c=s(7171),o=s(1485),m=s(5749),u=s(7337),x=s(4325),h=s(4913);n.default=()=>{let[e,n]=(0,i.useState)([{id:"1",name:"研发部",description:"负责电池研发和测试",manager:"张三",memberCount:15},{id:"2",name:"测试部",description:"负责电池性能测试",manager:"李四",memberCount:10},{id:"3",name:"质量部",description:"负责质量控制",manager:"王五",memberCount:8}]),[s,j]=(0,i.useState)(!1),[Z]=l.Z.useForm(),[y,g]=(0,i.useState)(null),p=e=>{g(e.id),Z.setFieldsValue(e),j(!0)},k=s=>{n(e.filter(e=>e.id!==s)),r.ZP.success("删除成功")};return(0,t.jsxs)(h.Z,{children:[(0,t.jsxs)("div",{style:{padding:"24px"},children:[(0,t.jsx)(a.ZP,{type:"primary",icon:(0,t.jsx)(x.Z,{}),onClick:()=>{g(null),Z.resetFields(),j(!0)},style:{marginBottom:16},children:"添加部门"}),(0,t.jsx)(d.Z,{columns:[{title:"部门名称",dataIndex:"name",key:"name"},{title:"描述",dataIndex:"description",key:"description"},{title:"负责人",dataIndex:"manager",key:"manager"},{title:"成员数量",dataIndex:"memberCount",key:"memberCount"},{title:"操作",key:"action",render:(e,n)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ZP,{type:"link",icon:(0,t.jsx)(m.Z,{}),onClick:()=>p(n),children:"编辑"}),(0,t.jsx)(a.ZP,{type:"link",danger:!0,icon:(0,t.jsx)(u.Z,{}),onClick:()=>k(n.id),children:"删除"})]})}],dataSource:e,rowKey:"id"})]}),(0,t.jsx)(c.Z,{title:y?"编辑部门":"添加部门",open:s,onOk:()=>{Z.validateFields().then(s=>{if(y)n(e.map(e=>e.id===y?{...s,id:y}:e)),r.ZP.success("更新成功");else{let t=String(e.length+1);n([...e,{...s,id:t}]),r.ZP.success("添加成功")}j(!1)})},onCancel:()=>j(!1),children:(0,t.jsxs)(l.Z,{form:Z,layout:"vertical",children:[(0,t.jsx)(l.Z.Item,{name:"name",label:"部门名称",rules:[{required:!0,message:"请输入部门名称"}],children:(0,t.jsx)(o.Z,{})}),(0,t.jsx)(l.Z.Item,{name:"description",label:"描述",rules:[{required:!0,message:"请输入部门描述"}],children:(0,t.jsx)(o.Z.TextArea,{})}),(0,t.jsx)(l.Z.Item,{name:"manager",label:"负责人",rules:[{required:!0,message:"请输入负责人姓名"}],children:(0,t.jsx)(o.Z,{})}),(0,t.jsx)(l.Z.Item,{name:"memberCount",label:"成员数量",rules:[{required:!0,message:"请输入成员数量"}],children:(0,t.jsx)(o.Z,{type:"number"})})]})})]})}},4913:function(e,n,s){"use strict";var t=s(3827),i=s(4090),l=s(4440),a=s(311),r=s(1587),d=s(747),c=s(8099),o=s(9980),m=s(7511),u=s(5334),x=s(516),h=s(7907),j=s(4030),Z=s.n(j);let{Header:y,Sider:g,Content:p}=l.default;n.Z=e=>{let{children:n}=e,[s,j]=(0,i.useState)(!1),k=(0,h.useRouter)(),b=(0,h.usePathname)(),_=[{key:"/dashboard",icon:(0,t.jsx)(d.Z,{}),label:"仪表盘"},{key:"/departments",icon:(0,t.jsx)(c.Z,{}),label:"部门管理"},{key:"/testing",icon:(0,t.jsx)(o.Z,{}),label:"测试管理"},{key:"/analysis",icon:(0,t.jsx)(m.Z,{}),label:"数据分析"}];return(0,t.jsxs)(l.default,{style:{minHeight:"100vh"},children:[(0,t.jsxs)(g,{trigger:null,collapsible:!0,collapsed:s,children:[(0,t.jsx)("div",{className:Z().logo,children:!s&&(0,t.jsx)("span",{children:"电池测试系统"})}),(0,t.jsx)(a.Z,{theme:"dark",mode:"inline",selectedKeys:[b],items:_,onClick:e=>{k.push(e.key)}})]}),(0,t.jsxs)(l.default,{children:[(0,t.jsxs)(y,{className:Z().header,children:[(0,t.jsx)(r.ZP,{type:"text",icon:(0,t.jsx)(u.Z,{}),onClick:()=>j(!s),style:{fontSize:"16px",width:64,height:64}}),(0,t.jsx)("div",{className:Z().headerRight,children:(0,t.jsx)(r.ZP,{type:"text",icon:(0,t.jsx)(x.Z,{}),onClick:()=>{localStorage.removeItem("token"),k.push("/login")},children:"退出登录"})})]}),(0,t.jsx)(p,{className:Z().content,children:n})]})]})}},4030:function(e){e.exports={logo:"Layout_logo__jEC1A",header:"Layout_header__3MyD7",headerRight:"Layout_headerRight__I_VRb",content:"Layout_content__EbiXf"}}},function(e){e.O(0,[861,216,292,146,970,785,335,132,971,69,744],function(){return e(e.s=5709)}),_N_E=e.O()}]);