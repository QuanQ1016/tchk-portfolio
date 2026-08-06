const projects = [
  {
    id: "huiqingjia",
    title: "惠青家公租房数字化运营平台",
    category: "业务系统",
    year: "2025 — NOW",
    color: "#d9ff3f",
    textColor: "#101c27",
    summary: "面向公租房运营场景的多端业务平台，覆盖房源、合同、缴费、退租与违约等核心流程，当前持续迭代中。",
    stack: ["Vue 3", "React", "Spring Boot", "MySQL", "Redis"],
    features: ["Web 管理后台、租户 H5 与物业移动端多端协同", "房源、合同、缴费、退租与违约业务模块", "银行支付、电子合同、电子发票等第三方对接", "Excel 导入导出与 Word / PDF 文档生成"],
    role: "产品经理 / 项目经理 / AI 辅助全栈开发",
    aiMode: "AI 协作交付",
    source: ""
  },
  {
    id: "oa-im",
    title: "OA 政务 IM 系统",
    category: "业务系统",
    year: "2026",
    color: "#ff7043",
    textColor: "#101c27",
    summary: "基于开源 LumenIM 的政务办公场景二次开发，完成 OA 单点登录、组织架构与私有化部署能力扩展。",
    stack: ["Go", "Gin", "Vue 3", "WebSocket", "Redis"],
    features: ["OA SSO 单点登录、签名校验与用户自动注册", "未读消息汇总和 OA / IM 前端桥接", "部门、岗位、成员等组织架构管理", "银河麒麟 ARM64 私有化部署方案"],
    role: "产品经理 / 项目经理 / AI 辅助全栈开发",
    aiMode: "AI 协作交付",
    source: ""
  },
  {
    id: "meeting",
    title: "团队会议管理系统",
    category: "业务系统",
    year: "2026",
    color: "#7dd3fc",
    textColor: "#101c27",
    summary: "从会议室预约到审批归档的一体化会议管理系统，关注冲突校验、资源管理与附件安全。",
    stack: ["Vue 3", "TypeScript", "Spring Boot", "MySQL", "Nginx"],
    features: ["会议室周视图预约、会议创建与审批", "时间重叠和参会人数超容量检测", "用户、部门、会议室后台管理", "附件上传、预览、下载、ZIP 打包与密码保护"],
    role: "产品经理 / 项目经理 / AI 辅助全栈开发",
    aiMode: "AI 协作交付",
    source: ""
  },
  {
    id: "ethnic-ai",
    title: "民族文化文字图案识别系统",
    category: "人工智能",
    year: "2025",
    color: "#e8d6ff",
    textColor: "#101c27",
    summary: "面向民族文化文字与图案识别需求的 AI/OCR 系统，可识别图像内容、匹配文化图案并翻译藏文，已取得软件著作权登记。",
    stack: ["Python", "FastAPI", "ResNet50", "OCR", "SQLite"],
    features: ["图片上传与 SSE 流式识别反馈", "豆包视觉模型图像预审、文字识别与文化解读", "ResNet50 特征提取与余弦相似度图案匹配", "用户修正、AI 仲裁、管理员审核入库的数据闭环"],
    role: "产品经理 / 项目经理 / AI 应用全栈开发",
    aiMode: "AI 应用研发",
    source: ""
  },
  {
    id: "lingyun",
    title: "凌云家教服务平台",
    category: "代码归档",
    year: "SOURCE",
    color: "#f4ce70",
    textColor: "#101c27",
    summary: "面向学生、家长与家教老师的 C2C 服务平台，覆盖教师资质审核、日程管理与虚拟钱包担保支付。",
    stack: ["Vue", "微信小程序", "React", "JavaScript"],
    features: ["学生/家长、教师与平台管理多角色协作", "教师资质审核与可视化日程管理", "虚拟钱包担保支付"],
    role: "项目归档",
    source: "https://gitee.com/computer-graduation-project_1/lingyun.git"
  },
  {
    id: "campus-venue",
    title: "校园场地资源管理系统",
    category: "代码归档",
    year: "LOCAL",
    color: "#bfdbfe",
    textColor: "#101c27",
    summary: "覆盖师生场地查询与预约、审批流转及管理端资源配置的校园场地资源管理系统。",
    stack: ["Vue 3", "微信小程序", "Element Plus", "ECharts"],
    features: ["场地预约、我的预约、场地搜索与公告通知", "管理端场地管理、预约审核、用户管理与数据统计", "小程序与管理后台双端协作"],
    role: "项目归档",
    source: ""
  },
  {
    id: "huizhu-home",
    title: "惠筑资产维修小程序",
    category: "代码归档",
    year: "SOURCE",
    color: "#a7f3d0",
    textColor: "#101c27",
    summary: "面向住户与运维人员的资产维修服务小程序，提供房屋绑定、在线报修、工单流转、支付与服务评价能力。",
    stack: ["微信小程序", "JavaScript"],
    features: ["住户在线报修、工单查询、消息通知与服务评价", "住户与运维人员双端工单流转", "房屋绑定、维修支付与适老化改造申报"],
    role: "项目归档",
    source: "https://gitee.com/hui-zhu-jia/huizhu-home-mini-program.git"
  },
  {
    id: "ai-editor",
    title: "AI Editor",
    category: "代码归档",
    year: "SOURCE",
    color: "#fda4af",
    textColor: "#101c27",
    summary: "集成生成式 AI 的桌面代码编辑器，支持行内编辑、Diff 审查、上下文引用与内置终端。",
    stack: ["React", "TypeScript", "Electron", "Tailwind CSS"],
    features: ["Cmd+K 行内 AI 编辑与文件上下文引用", "Diff 智能审查、集成终端与虚拟文件系统", "图像工作室与 Google 搜索增强"],
    role: "项目归档",
    source: "https://gitee.com/ai-hub-connector/aieditor-gem25.git"
  },
  {
    id: "yunnan-market",
    title: "云南特色产品销售平台",
    category: "代码归档",
    year: "SOURCE",
    color: "#fdba74",
    textColor: "#101c27",
    summary: "融合商品展示、文化解读与溯源信息的云南土特产销售平台，提供商品检索、购物车与订单管理。",
    stack: ["Vue", "SCSS", "Spring Boot", "MySQL"],
    features: ["商品历史、文化与溯源的多维价值展示", "商品浏览、搜索、购物车与订单闭环", "用户与运营管理支撑"],
    role: "项目归档",
    source: "https://gitee.com/SUISUI1016/Design-and-Implementation-of-a-Yunnan-Specialty-Sales-Platform.git"
  },
  {
    id: "carpooling",
    title: "汽车拼团购车平台",
    category: "代码归档",
    year: "SOURCE",
    color: "#bfdbfe",
    textColor: "#101c27",
    summary: "支持用户、经销商与平台多角色协作的汽车拼团购车平台，覆盖选车、拼团、订单、财务与收益提现。",
    stack: ["Vue", "微信小程序", "Spring Boot", "MySQL"],
    features: ["用户/经销商注册登录与车型浏览", "拼团购车、购物车、订单与支付流程", "财务对账、收益管理与提现"],
    role: "项目归档",
    source: "https://gitee.com/SUISUI1016/carpooling-system.git"
  },
  {
    id: "cyber-defense",
    title: "网络仿真攻击渗透测试工具",
    category: "网络安全",
    year: "LOCAL",
    color: "#c4b5fd",
    textColor: "#101c27",
    summary: "面向 eNSP / VMware 仿真环境的桌面端网络攻防实训工具，集成认证、攻击实验、远程控制与侦察扫描能力。",
    stack: ["Python", "PyQt5", "Scapy", "PostgreSQL", "Paramiko"],
    features: ["PostgreSQL 用户登录、注册与改密", "DHCP、ICMP、ARP、MAC 仿冒攻击仿真", "SSH 正向控制与反向 Shell 监听", "ICMP 主机存活检测与 TCP 端口扫描"],
    role: "开发 / 安全技术实践",
    source: ""
  },
  {
    id: "training-platform",
    title: "OpenGauss 与 HarmonyOS 网络安全实训平台",
    category: "网络安全",
    year: "LOCAL",
    color: "#bef264",
    textColor: "#101c27",
    summary: "面向学生、教师与管理员的 Web 端网络安全实训与管理平台，整合渗透实训、资源管理、学情分析与流式 AI 安全问答。",
    stack: ["Vue 2", "Vuex", "Element UI", "ECharts", "Axios", "SSE"],
    features: ["学生 / 教师 / 管理员多角色登录与注册", "DHCP、ICMP、ARP、MAC、SSH 等 8 个渗透实训子模块", "安全资料检索与工具资源管理", "ECharts 学情可视化与 SSE 流式 AI 助手"],
    role: "全栈开发 / 运维工程师",
    source: ""
  },
  {
    id: "flower-shop",
    title: "在线花店商城",
    category: "定制交付",
    year: "ARCHIVE",
    color: "#f9a8d4",
    textColor: "#101c27",
    summary: "传统 Java Web 电商项目，具备商品、订单、评论与后台管理等完整业务闭环。",
    stack: ["Java Servlet", "JSP", "MySQL", "JSTL", "FastJSON"],
    features: ["用户注册与登录", "鲜花及分类 CRUD", "订单创建、完成与管理", "全局 AuthorizationFilter 权限控制"],
    role: "Java Web 系统交付",
    source: ""
  },
  {
    id: "hotel-booking",
    title: "酒店预订与旅游门户",
    category: "定制交付",
    year: "ARCHIVE",
    color: "#fde68a",
    textColor: "#101c27",
    summary: "包含酒店搜索、房型预订、会员注册与图片上传的 Java Web 酒店预订项目。",
    stack: ["Java Servlet", "JSP", "MySQL", "HTML/CSS", "Tomcat"],
    features: ["酒店搜索、详情与后台管理", "房型与预订模型", "酒店 / 普通会员注册", "图片上传、Session / Application 监听与登录过滤"],
    role: "Java Web 系统交付",
    source: ""
  },
  {
    id: "movie-ticket",
    title: "在线电影票务系统",
    category: "定制交付",
    year: "ARCHIVE",
    color: "#93c5fd",
    textColor: "#101c27",
    summary: "围绕电影、场次、选座购票与用户管理设计的在线票务 Java Web 项目。",
    stack: ["Java Servlet", "JSP", "MySQL", "JSTL"],
    features: ["电影与场次 CRUD", "电影详情与选场次下单", "用户注册与登录", "字符编码过滤器与数据库脚本"],
    role: "Java Web 系统交付",
    source: ""
  },
  {
    id: "medicine-info",
    title: "中医药材信息管理系统",
    category: "定制交付",
    year: "ARCHIVE",
    color: "#bbf7d0",
    textColor: "#101c27",
    summary: "提供药材分类、信息查询、收藏与用户管理能力的传统信息管理系统。",
    stack: ["Java Servlet", "JSP", "MySQL", "JSTL"],
    features: ["药材及分类 CRUD", "药材详情浏览", "用户管理与收藏管理", "注册登录与字符编码处理"],
    role: "Java Web 系统交付",
    source: ""
  },
  {
    id: "cake-shop",
    title: "蛋糕预定商城",
    category: "定制交付",
    year: "ARCHIVE",
    color: "#fecdd3",
    textColor: "#101c27",
    summary: "以商品浏览、下单与订单管理为核心的 Java Web 电商系统。",
    stack: ["Java Servlet", "JSP", "MySQL"],
    features: ["商品 CRUD", "订单确认与详情", "我的订单", "用户注册与登录"],
    role: "Java Web 系统交付",
    source: ""
  }
];

const state = { category: "全部", keyword: "" };
const colors = ["#d9ff3f", "#ff7043", "#7dd3fc", "#e8d6ff", "#f4ce70", "#a7f3d0", "#fda4af", "#fdba74", "#bfdbfe", "#c4b5fd", "#bef264"];
const filters = ["全部", ...new Set(projects.map((project) => project.category))];

/* 刷新/后退/带 hash 访问后始终回到页面最顶部；保留用户主动点击锚点的行为 */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
document.documentElement.style.scrollBehavior = "auto";
window.scrollTo({ top: 0, left: 0, behavior: "auto" });
if (location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
function forceTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.style.scrollBehavior = "";
  });
}
window.addEventListener("load", forceTop);
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    document.documentElement.style.scrollBehavior = "auto";
    forceTop();
  }
});
const filterList = document.querySelector("#filter-list");
const projectGrid = document.querySelector("#project-grid");
const emptyState = document.querySelector("#empty-state");
const projectCount = document.querySelector("#project-count");
const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const resumeDialog = document.querySelector("#resume-dialog");

function renderMockUI(project) {
  const mockType = {
    huiqingjia: "rent",
    "oa-im": "chat",
    meeting: "calendar",
    "ethnic-ai": "ocr",
    lingyun: "tutor",
    "campus-venue": "venue",
    "huizhu-home": "property",
    "ai-editor": "editor",
    "yunnan-market": "specialty",
    carpooling: "carpool",
    "cyber-defense": "desktop-security",
    "training-platform": "cyber-lab",
    "flower-shop": "commerce",
    "cake-shop": "commerce",
    "hotel-booking": "hotel",
    "movie-ticket": "movie",
    "medicine-info": "medicine"
  }[project.id] || "archive";

  const views = {
    rent: `
      <div class="mock-app mock-dual mock-rent">
        <div class="dual-pane dual-web">
          <aside>
            <div class="admin-logo">惠青家运营平台</div>
            <nav>
              <a class="active">工作台</a>
              <a>房源管理</a>
              <a>合同管理</a>
              <a>缴费管理</a>
              <a>退租管理</a>
              <a>系统管理</a>
            </nav>
          </aside>
          <div class="admin-main">
            <header class="rent-header"><span>运营工作台</span><span>主题切换　全屏　管理员</span></header>
            <main>
              <div class="admin-cards">
                <article><div class="card-icon" style="background:#215cb4">套</div><div><b>1,280</b><span>公租房总套数</span></div></article>
                <article><div class="card-icon" style="background:#67c23a">租</div><div><b>956</b><span>已配租套数</span></div></article>
                <article><div class="card-icon" style="background:#e6a23c">待</div><div><b>214</b><span>待配租套数</span></div></article>
                <article><div class="card-icon" style="background:#f56c6c">锁</div><div><b>110</b><span>已锁定套数</span></div></article>
              </div>
              <div class="admin-charts">
                <div class="chart-box"><b>房屋出租和退租情况</b><div class="mini-line"><i style="height:34%"></i><i style="height:52%"></i><i style="height:45%"></i><i style="height:68%"></i><i style="height:55%"></i><i style="height:82%"></i><i style="height:74%"></i></div></div>
                <div class="chart-box"><b>租金缴费情况</b><div class="mini-pie"><i style="--p:60%;background:#215cb4"></i><i style="--p:40%;background:#e6e7e8"></i></div><p>已缴 60%　待缴 40%</p></div>
                <div class="chart-box"><b>年龄分布数据</b><div class="mini-pie"><i style="--p:35%;background:#36a3f7"></i><i style="--p:25%;background:#40c9c6"></i><i style="--p:20%;background:#f8a536"></i><i style="--p:20%;background:#f4516c"></i></div><p>25-30岁 35%　30-35岁 25%</p></div>
                <div class="chart-box"><b>消息中心</b><div class="notice-list"><p>2026-08-05　租金缴费提醒</p><p>2026-08-04　合同签署通知</p><p>2026-08-03　退租申请通知</p></div></div>
              </div>
            </main>
          </div>
        </div>
        <div class="dual-pane dual-mini">
          <div class="mini-navbar"><span>惠青家</span><div class="mini-search">搜索房源、项目...</div></div>
          <section>
            <div class="h5-user">
              <div class="h5-avatar">张</div>
              <div><b>张先生</b><span>138****8888</span></div>
            </div>
            <div class="h5-banner">惠青家 · 公租房服务平台</div>
            <div class="h5-notice"><span>公告</span><small>2026年第一批公租房配租通知已发布</small></div>
            <div class="h5-filter"><span>综合</span><span>区域</span><span>类型</span><span>租金</span></div>
            <div class="h5-house-list">
              <article>
                <div><b>泽惠园 · 一室一厅</b><em>1,200元/月起</em></div>
                <p>可选房源：28套 · 距您 2.3km</p>
                <div class="h5-tags"><span>近地铁</span><span>带厨卫</span></div>
              </article>
              <article>
                <div><b>盛惠园 · 两室一厅</b><em>1,500元/月起</em></div>
                <p>可选房源：16套 · 距您 4.1km</p>
                <div class="h5-tags"><span>保障房</span><span>南北通透</span></div>
              </article>
            </div>
          </section>
          <footer class="mini-tabbar"><span>首页</span><span>选房</span><span>消息</span><span>我的</span></footer>
        </div>
      </div>`,
    chat: `
      <div class="mock-app mock-lumenim">
        <aside class="lumen-menu">
          <div class="lumen-avatar">黄</div>
          <span class="lumen-status online">在线</span>
          <nav>
            <b class="active">💬<i>消息</i></b>
            <b>👥<i>通讯录</i></b>
            <b>⚙<i>设置</i></b>
          </nav>
          <button class="lumen-logout">退出</button>
        </aside>
        <section class="lumen-session">
          <header class="lumen-session-header">
            <div class="lumen-search">⌕ 搜索会话 / 好友 / 群聊</div>
            <span>＋</span>
          </header>
          <div class="lumen-session-tabs"><span class="active">全部</span><span>好友</span><span>群聊</span><span>未读</span></div>
          <article class="active">
            <div class="lumen-item-avatar">张</div>
            <div class="lumen-item-meta">
              <div><b>张三</b><em>10:24</em></div>
              <span>合同已签，请及时确认。</span>
            </div>
            <div class="lumen-unread">2</div>
          </article>
          <article>
            <div class="lumen-item-avatar group">政</div>
            <div class="lumen-item-meta">
              <div><b>政务办公室 <i class="badge group">群</i></b><em>昨天</em></div>
              <span>请及时确认会议通知</span>
            </div>
          </article>
          <article>
            <div class="lumen-item-avatar">信</div>
            <div class="lumen-item-meta">
              <div><b>信息技术科</b><em>周一</em></div>
              <span>部署文档已更新</span>
            </div>
          </article>
        </section>
        <section class="lumen-chat">
          <header>
            <span class="lumen-fold">☰</span>
            <div class="lumen-chat-title">
              <b>张三</b>
              <span><i class="online-dot"></i>在线 · 对方正在输入…</span>
            </div>
            <small>📥 👤 ➕ ⋮</small>
          </header>
          <div class="lumen-messages">
            <p class="system">今日 10:12</p>
            <div class="msg incoming"><div class="msg-avatar">张</div><i>合同已签，请及时确认。</i></div>
            <div class="msg outgoing"><i>收到，我已同步至合同管理。</i></div>
            <div class="msg incoming"><div class="msg-avatar">张</div><i>附件已上传至共享空间。</i></div>
            <div class="msg outgoing"><i>好的，我稍后下载查看。</i></div>
          </div>
          <footer><span>输入消息…</span><button>发送</button></footer>
        </section>
      </div>`,
    calendar: `
      <div class="mock-app mock-rsteams">
        <header class="rsteams-nav">
          <b>会议室预约系统</b>
          <nav><span class="active">首页</span><span>预约</span><span>管理</span></nav>
          <small>TCHK　退出</small>
        </header>
        <div class="rsteams-wrapper">
          <div class="rsteams-top">
            <h1>会议室使用登记表</h1>
            <div class="rsteams-actions">
              <button>← 上一周</button>
              <button>下一周 →</button>
              <button>筛选会议室</button>
              <button class="primary">导出 Excel</button>
            </div>
          </div>
          <div class="rsteams-subheader"><span>8月4日 - 8月8日</span><small>如有变动，以通知为准</small></div>
          <table class="rsteams-table">
            <thead>
              <tr>
                <th rowspan="2" class="col-fixed">日期</th>
                <th rowspan="2" class="col-fixed">时间</th>
                <th>507 会议室</th>
                <th>509 会议室</th>
                <th>601 会议室</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2" class="cell-date"><div>8月4日</div><small>周一</small></td>
                <td class="cell-time">上午 9:00</td>
                <td class="cell-meeting"><div class="meeting-card"><b>项目评审</b><small>09:00-10:30</small></div></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="cell-time">下午 2:00</td>
                <td></td>
                <td class="cell-meeting"><div class="meeting-card"><b>部门例会</b><small>14:00-15:00</small></div></td>
                <td></td>
              </tr>
              <tr>
                <td rowspan="2" class="cell-date"><div>8月5日</div><small>周二</small></td>
                <td class="cell-time">上午 9:00</td>
                <td></td>
                <td></td>
                <td class="cell-meeting"><div class="meeting-card"><b>客户沟通会</b><small>09:00-10:00</small></div></td>
              </tr>
              <tr>
                <td class="cell-time">下午 2:00</td>
                <td class="cell-meeting conflict"><div class="meeting-card"><b>周会 #1</b><small>14:00-15:00</small></div><div class="meeting-card"><b>周会 #2</b><small>14:00-15:30</small></div></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`,
    ocr: `
      <div class="mock-app mock-ethnic ethnic-workflow" data-ai-step="precheck">
        <div class="ethnic-patternbar"></div>
        <header><h1>民族文化 AI 识别系统</h1><nav><a>识别工作流</a><a>管理员审核</a></nav></header>
        <main>
          <div class="ethnic-workflow-head">
            <small>AI WORKFLOW / 可点击切换步骤</small>
            <div class="ethnic-stepper" role="tablist" aria-label="AI 识别工作流">
              <button type="button" class="is-active" data-ai-step="precheck">01 图像预审</button>
              <button type="button" data-ai-step="ocr">02 OCR 解读</button>
              <button type="button" data-ai-step="match">03 特征匹配</button>
              <button type="button" data-ai-step="review">04 人工审核</button>
            </div>
          </div>
          <div class="ethnic-uploadcard">
            <div class="ethnic-upload">
              <span>📜</span>
              <button class="accent" type="button">已上传图像</button>
              <p class="upload-hint">彝族服饰纹样 · JPG</p>
            </div>
            <div class="ethnic-preview"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120'%3E%3Crect fill='%23e8e0d0' width='180' height='120'/%3E%3Cpath d='M45 60c15-20 30-20 45 0s30 20 45 0' stroke='%231A5F7A' fill='none' stroke-width='2'/%3E%3Ccircle cx='90' cy='50' r='12' fill='%23C8553D'/%3E%3C/svg%3E" alt="图案预览"></div>
            <div class="ethnic-actions"><span class="workflow-state">图像质量检测通过</span><button class="primary" type="button">处理完成</button></div>
          </div>
          <div class="ethnic-ai-console">
            <div class="workflow-node node-precheck"><b>视觉模型预审</b><span>图像有效 · 文字区域已定位</span></div>
            <div class="workflow-node node-ocr"><b>OCR / 文化解读</b><span>ꆈꌠꁱꂷ → 吉祥如意</span></div>
            <div class="workflow-node node-match"><b>ResNet50 特征匹配</b><span>彝族服饰纹样 · 相似度 87.35%</span></div>
            <div class="workflow-node node-review"><b>人工修正 / 审核入库</b><span>保留修正记录，进入文化知识库</span></div>
          </div>
          <div class="ethnic-result">
            <h2>当前输出 <span class="confidence-badge">87.35%</span></h2>
            <div class="result-content">
              <div class="result-image"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='260'%3E%3Crect fill='%23f5f1e8' width='200' height='260'/%3E%3Cpath d='M60 80c20-25 60-25 80 0s60 25 80 0M60 120c20-25 60-25 80 0s60 25 80 0M60 160c20-25 60-25 80 0s60 25 80 0' stroke='%231A5F7A' fill='none' stroke-width='2'/%3E%3Ccircle cx='100' cy='200' r='20' fill='%23C8553D'/%3E%3C/svg%3E" alt="识别结果"></div>
              <div class="result-text"><h3>彝族服饰纹样</h3><p class="introduction">云纹、火焰纹等特征与知识库条目匹配；识别、修正与审核结果可持续沉淀。</p><div class="translated-text">彝文原文 / 中文翻译：吉祥如意</div></div>
            </div>
          </div>
        </main>
        <footer><p>MODEL → MATCH → HUMAN REVIEW → KNOWLEDGE BASE</p></footer>
      </div>`,
    tutor: `
      <div class="mock-app mock-dual mock-tutor">
        <div class="dual-pane dual-web">
          <aside>
            <div class="admin-logo">凌云家教后台</div>
            <nav>
              <a class="active">数据看板</a>
              <a>审核管理</a>
              <a>财务管理</a>
              <a>系统管理</a>
              <a>业务管理</a>
            </nav>
          </aside>
          <div class="admin-main">
            <header><span>面包屑导航 / Welcome</span><span>欢迎您, admin</span></header>
            <main>
              <div class="admin-cards">
                <article><div class="card-icon" style="background:#40c9c6">👤</div><div><b>28</b><span>今日新增用户</span></div></article>
                <article><div class="card-icon" style="background:#36a3f7">👥</div><div><b>1,248</b><span>平台总用户</span></div></article>
                <article><div class="card-icon" style="background:#f4516c">✓</div><div><b>16</b><span>今日完成订单</span></div></article>
                <article><div class="card-icon" style="background:#f8a536">¥</div><div><b>¥ 16,280.00</b><span>平台总交易额</span></div></article>
              </div>
              <div class="admin-charts">
                <div class="chart-box"><b>近7日订单量趋势</b><div class="mini-line"><i style="height:34%"></i><i style="height:52%"></i><i style="height:45%"></i><i style="height:68%"></i><i style="height:55%"></i><i style="height:82%"></i><i style="height:74%"></i></div></div>
                <div class="chart-box"><b>热门科目分布</b><div class="mini-pie"><i style="--p:35%;background:#36a3f7"></i><i style="--p:25%;background:#40c9c6"></i><i style="--p:20%;background:#f8a536"></i><i style="--p:20%;background:#f4516c"></i></div><p>数学 35%　英语 25%　物理 20%　其他 20%</p></div>
              </div>
            </main>
          </div>
        </div>
        <div class="dual-pane dual-mini">
          <div class="mini-navbar"><span>📍 昆明市</span><div class="mini-search">⌕ 搜索老师、科目...</div></div>
          <section>
            <div class="mini-banner">专业家教 · 成就更好的你</div>
            <div class="mini-quick">
              <div><i style="background:#4b9fff">荐</i><span>智能推荐</span></div>
              <div><i style="background:#52c41a">科</i><span>按科目</span></div>
              <div><i style="background:#faad14">年</i><span>按年级</span></div>
              <div><i style="background:#ff7a45">近</i><span>附近老师</span></div>
            </div>
            <div class="mini-section">
              <div class="section-hd"><b>推荐老师</b><span>查看更多 ›</span></div>
              <div class="teacher-scroll">
                <article>
                  <div class="t-avatar">林</div>
                  <div><b>林雨萱 <i class="cert">已认证</i></b><span>高中数学 · ★★★★★ 4.9</span><small>¥200/课时</small></div>
                </article>
                <article>
                  <div class="t-avatar">王</div>
                  <div><b>王芳 <i class="cert">已认证</i></b><span>高中英语 · ★★★★★ 4.8</span><small>¥180/课时</small></div>
                </article>
              </div>
            </div>
            <div class="mini-section">
              <div class="section-hd"><b>热门科目</b></div>
              <div class="subject-grid">
                <div><i>数</i><span>数学</span><small>86位老师</small></div>
                <div><i>英</i><span>英语</span><small>72位老师</small></div>
                <div><i>物</i><span>物理</span><small>45位老师</small></div>
                <div><i>化</i><span>化学</span><small>38位老师</small></div>
              </div>
            </div>
          </section>
          <footer class="mini-tabbar"><span>首页</span><span>消息</span><span>订单</span><span>我的</span></footer>
        </div>
      </div>`,
    venue: `
      <div class="mock-app mock-dual mock-venue">
        <div class="dual-pane dual-web">
          <aside>
            <div class="admin-logo">场地管理系统</div>
            <nav>
              <a class="active">工作台</a>
              <a>资产管理</a>
              <a>系统管理</a>
              <a>数据统计</a>
            </nav>
          </aside>
          <div class="admin-main">
            <header><span>首页 / 工作台</span><span>admin</span></header>
            <main>
              <div class="admin-cards">
                <article><div class="card-icon" style="background:#409eff">场</div><div><b>42</b><span>场地总数</span></div></article>
                <article><div class="card-icon" style="background:#67c23a">今</div><div><b>18</b><span>今日预约</span></div></article>
                <article><div class="card-icon" style="background:#e6a23c">人</div><div><b>1,248</b><span>用户总数</span></div></article>
                <article><div class="card-icon" style="background:#f56c6c">审</div><div><b>6</b><span>待审核</span></div></article>
              </div>
              <div class="admin-charts">
                <div class="chart-box wide"><b>最新预约</b>
                  <div class="reservation-table"><div><span>预约编号</span><span>预约人</span><span>场地</span><span>状态</span></div>
                    <div><span>R20260805001</span><span>张三</span><span>大学生活动中心 101</span><span class="badge pending">待审核</span></div>
                    <div><span>R20260805002</span><span>李四</span><span>图书馆报告厅</span><span class="badge done">已通过</span></div>
                    <div><span>R20260805003</span><span>王五</span><span>体育馆篮球场</span><span class="badge done">已通过</span></div>
                  </div>
                </div>
                <div class="chart-box"><b>快捷操作</b>
                  <div class="quick-btns"><button>新增场地</button><button>查看预约</button><button>用户管理</button><button>数据统计</button></div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="dual-pane dual-mini">
          <swiper class="mini-swiper" indicator-dots="true">
            <swiper-item><div class="mini-banner venue-banner"><span>校园场地预约</span><h4>便捷预约，让校园空间更高效</h4></div></swiper-item>
            <swiper-item><div class="mini-banner venue-banner" style="background:linear-gradient(120deg,#67c23a,#85d47e)"><span>新学期</span><h4>场地预约现已开放</h4></div></swiper-item>
          </swiper>
          <section>
            <div class="mini-quick five">
              <div><i style="background:#409eff">约</i><span>场地预约</span></div>
              <div><i style="background:#67c23a">单</i><span>我的预约</span></div>
              <div><i style="background:#e6a23c">搜</i><span>搜索场地</span></div>
              <div><i style="background:#ff7a45">AI</i><span>智能助手</span></div>
              <div><i style="background:#909399">我</i><span>个人中心</span></div>
            </div>
            <div class="mini-section">
              <div class="section-hd"><b>推荐场地</b><span>查看更多 ›</span></div>
              <div class="venue-scroll">
                <article>
                  <div class="v-thumb">场地</div>
                  <div class="v-info">
                    <b>大学生活动中心 101 <i class="available">可预约</i></b>
                    <span>教学楼A · 呈贡校区 · 容纳80人</span>
                    <small>投影仪 / 音响</small>
                  </div>
                </article>
                <article>
                  <div class="v-thumb">场地</div>
                  <div class="v-info">
                    <b>图书馆报告厅 <i class="available">可预约</i></b>
                    <span>图书馆 · 呈贡校区 · 容纳200人</span>
                    <small>LED屏 / 音响</small>
                  </div>
                </article>
              </div>
            </div>
            <div class="mini-section">
              <div class="section-hd"><b>最新公告</b></div>
              <div class="notice-list"><p>体育馆维护通知 08-04</p><p>新学期场地预约开放时间 08-03</p></div>
            </div>
          </section>
          <footer class="mini-tabbar"><span>首页</span><span>场地</span><span>我的预约</span><span>我的</span></footer>
        </div>
      </div>`,
    property: `
      <div class="mock-app mock-property">
        <div class="property-nav"><span>首页</span></div>
        <section>
          <div class="property-user">
            <div class="property-user-left">
              <div class="property-avatar">张</div>
              <div><b>张先生</b><span>138****8888</span></div>
            </div>
            <div class="property-user-right">
              <div><i>🏠</i><span>绑定房屋</span></div>
              <div><i>⚙</i><span>设置</span></div>
              <div><i>🚪</i><span>退出</span></div>
            </div>
          </div>
          <div class="property-grid">
            <div><div class="property-icon repair">🔧</div><span>在线报修</span><i class="corner hot"></i></div>
            <div><div class="property-icon order">📋</div><span>工单查询</span></div>
            <div><div class="property-icon msg">🔔</div><span>消息通知</span><i class="corner"></i></div>
            <div><div class="property-icon eval">⭐</div><span>服务评价</span></div>
          </div>
          <div class="property-card">
            <div class="property-card-head"><b>🏡 我的房屋</b><span>查看全部 ›</span></div>
            <div class="property-house-row"><div><span>泽惠园 1 栋 2 单元 301 室</span><i class="tag">保障性住房</i></div><em>正常</em></div>
            <div class="property-house-row"><div><span>盛惠园 3 栋 1 单元 502 室</span><i class="tag">公租房</i></div><em>正常</em></div>
          </div>
          <div class="property-card">
            <div class="property-card-head"><b>📢 最新公告</b></div>
            <div class="property-notice-row"><i></i><div><span>关于开展 2026 年适老化改造工作的通知</span><small>2026-03-01</small></div></div>
            <div class="property-notice-row"><i></i><div><span>泽惠园小区电梯维修通知</span><small>2026-02-28</small></div></div>
          </div>
        </section>
      </div>`,
    editor: `
      <div class="mock-app mock-editor">
        <header><strong>AI Code Studio</strong><span>File　Edit　View　Run　Terminal　Help</span><small>○ ●</small></header>
        <section>
          <aside>
            <b>EXPLORER</b>
            <a class="active">▼ src</a>
            <a>　JV Main.java</a>
            <a>　JS Button.tsx</a>
            <a>　# styles.css</a>
            <a>▶ public</a>
          </aside>
          <main>
            <div class="editor-tabs"><span class="active">JV Main.java ×</span><span>JS Button.tsx ×</span></div>
            <pre><span>1</span>  <span class="token-kw">public class</span> Main {
<span>2</span>    <span class="token-kw">public static void</span> main(String[] args) {
<span>3</span>      System.out.println(<span class="token-str">"Hello, AI Code Studio!"</span>);
<span>4</span>    }
<span>5</span>  }
<span>6</span></pre>
          </main>
          <article>
            <b>AI 助手 <small>Gemini 3 Pro</small></b>
            <div>@Main.java 添加一个按钮组件</div>
            <p>我将为您添加可复用的 Button 组件，并同步更新样式文件。</p>
            <small>输入消息…</small>
          </article>
        </section>
      </div>`,
    specialty: `
      <div class="mock-app mock-specialty"><header><strong>云南特产·多维价值</strong><span>首页　特色产品　农户故事　我的订单</span><b>🛒</b></header><section><div class="specialty-banner"><small>多维度价值探索</small><h4>发现云南特色产品的独特价值</h4><button>探索更多</button></div><div class="value-grid"><b>有机认证</b><b>地理标志</b><b>传统工艺</b><b>农户故事</b></div><article><div>石<br>榴</div><main><small>热门推荐　月销 238</small><h4>云南蒙自石榴</h4><p>原生态种植，来自云南高原的自然馈赠。</p><b>¥ 29.90</b><button>查看价值</button></main></article></section></div>`,
    carpool: `
      <div class="mock-app mock-dual mock-carpool">
        <div class="dual-pane dual-web">
          <aside>
            <div class="admin-logo">🚗 拼团管理后台</div>
            <nav>
              <a class="active">首页仪表盘</a>
              <a>用户与权限</a>
              <a>车辆中心</a>
              <a>交易订单</a>
            </nav>
          </aside>
          <div class="admin-main">
            <header><span>欢迎回来，admin (超级管理员)</span><span>退出登录</span></header>
            <main>
              <div class="admin-cards">
                <article><div class="card-icon" style="background:#409eff">¥</div><div><b>¥128,000</b><span>总销售额</span></div></article>
                <article><div class="card-icon" style="background:#67c23a">单</div><div><b>356 单</b><span>拼团订单数</span></div></article>
                <article><div class="card-icon" style="background:#e6a23c">人</div><div><b>1,024 人</b><span>注册用户</span></div></article>
                <article><div class="card-icon" style="background:#909399">商</div><div><b>28 家</b><span>入驻商户</span></div></article>
              </div>
              <div class="admin-charts">
                <div class="chart-box wide"><b>近七日拼团趋势</b><div class="trend-placeholder">(此处后期可集成 ECharts 图表展示数据可视化)</div></div>
              </div>
            </main>
          </div>
        </div>
        <div class="dual-pane dual-mini">
          <div class="mini-search-box"><input value="搜索车型..." readonly></div>
          <section>
            <div class="mini-banner car-banner">限时优惠 · 汽车拼团</div>
            <div class="car-list-mini">
              <article>
                <div class="car-thumb">🚗</div>
                <div class="car-info-mini">
                  <b>特斯拉 Model 3</b>
                  <span class="tag">官方认证</span>
                  <div><em>¥259,900</em><small>已售 34</small></div>
                </div>
              </article>
              <article>
                <div class="car-thumb">🚙</div>
                <div class="car-info-mini">
                  <b>比亚迪 汉EV</b>
                  <span class="tag">官方认证</span>
                  <div><em>¥209,800</em><small>已售 56</small></div>
                </div>
              </article>
            </div>
          </section>
          <footer class="mini-tabbar"><span>首页</span><span>我的</span></footer>
        </div>
      </div>`,
    "desktop-security": `
      <div class="mock-app mock-desktop">
        <header><b>◈ 网络仿真攻击渗透测试</b><span>—　□　×</span></header><aside><a class="active">DHCP</a><a>ICMP</a><a>ARP</a><a>SSH远程控制</a><a>MAC</a><a>主机与端口扫描</a><a>个人信息</a></aside>
        <section><h4>DHCP 测试</h4><p>DHCP测试准备就绪</p><div class="terminal"><span>MAC地址: aa:bb:cc:dd:ee:ff</span><span>测试完成!</span><span>DHCP服务器地址: 192.168.1.1</span><span>分配的IP地址: 192.168.1.100</span></div><button>开始检测</button></section>
      </div>`,
    "cyber-lab": `
      <div class="mock-app mock-cyber-lab">
        <header><strong>网络安全实训平台</strong><nav>主页　安全资料　<span>渗透攻防实训</span>　安全实训任务　安全AI助手</nav><small>用户 zhangsan　退出</small></header>
        <section><p>基于华为的 OpenGauss 与 HarmonyOS 的网络安全实训平台</p><h4>渗透攻防实训</h4><div class="lab-tabs"><b>DHCP</b><span>ICMP</span><span>ARP</span><span>MAC</span><span>SSH</span><span>反向Shell</span><span>主机扫描</span><span>端口扫描</span></div><div class="lab-columns"><article><small>理论知识</small><h5>DHCP 协议工作原理</h5><p>了解动态主机配置协议在局域网地址分配中的运行机制。</p></article><article><small>模拟操作</small><label>目标主机 IP <input value="192.168.47.10" readonly></label><button>开始模拟</button><pre>DHCP: MAC 3c:52:82:ab:cd:ef
分配 IP 192.168.1.100</pre></article></div></section>
      </div>`,
    commerce: `
      <div class="mock-app mock-commerce">
        <header><strong>${project.id === "cake-shop" ? "甜点时光" : "花语商城"}</strong><span>首页　商品分类　新品推荐　我的订单</span><input value="搜索商品" readonly><b>🛒 2</b></header>
        <section><aside><b>商品分类</b><a class="active">全部商品</a><a>${project.id === "cake-shop" ? "生日蛋糕" : "鲜花花束"}</a><a>${project.id === "cake-shop" ? "下午茶点" : "永生花"}</a><a>热销推荐</a></aside><main><div class="shop-banner"><small>NEW ARRIVAL</small><h4>${project.id === "cake-shop" ? "把甜蜜送给重要的人" : "让每一份心意，如花绽放"}</h4><button>立即选购</button></div><div class="product-row">${project.id === "cake-shop" ? `<article>🎂<b>草莓奶油蛋糕</b><span>¥ 128</span></article><article>🧁<b>纸杯蛋糕组合</b><span>¥ 68</span></article><article>🍰<b>提拉米苏</b><span>¥ 88</span></article>` : `<article>🌷<b>春日花束</b><span>¥ 128</span></article><article>🌹<b>红玫瑰礼盒</b><span>¥ 199</span></article><article>🌼<b>向日葵花篮</b><span>¥ 168</span></article>`}</div></main></section>
      </div>`,
    hotel: `
      <div class="mock-app mock-hotel"><header><strong>有风旅行</strong><span>首页　酒店预订　旅游攻略　个人中心</span><button>登录 / 注册</button></header><section><p>去有风的地方，住进美好时光</p><h4>发现你的理想酒店</h4><div class="hotel-search"><label>目的地<b>大理</b></label><label>入住日期<b>2026-08-12</b></label><label>离店日期<b>2026-08-14</b></label><button>搜索酒店</button></div><div class="hotel-card"><div>苍山洱海景观酒店</div><p>大理古城 · 4.8 分 · 含早餐</p><b>¥ 468 <small>/晚</small></b></div></section></div>`,
    movie: `
      <div class="mock-app mock-movie"><header><strong>MOVIE TICKET</strong><span>首页　电影　影院　我的订单</span><button>登录</button></header><section><div class="movie-poster">FILM<br>2026</div><div><small>正在热映</small><h4>星际回响</h4><p>科幻 / 冒险 / 128 分钟</p><div class="movie-times"><b>今天 08-05</b><button>10:20</button><button>13:40</button><button>16:30</button><button>20:10</button></div><button class="buy">选座购票</button></div></section></div>`,
    medicine: `
      <div class="mock-app mock-medicine"><header><strong>本草药材库</strong><span>首页　药材分类　养生知识　我的收藏</span><input value="搜索药材名称" readonly></header><section><aside><b>药材分类</b><a class="active">全部药材</a><a>补气药</a><a>清热药</a><a>活血化瘀药</a></aside><main><p>药材详情 / 中药材知识库</p><h4>黄芪</h4><div class="herb-detail"><div>黄<br>芪</div><p><b>功效：</b>补气固表、利尿托毒、排脓、敛疮生肌。<br><br><b>性味归经：</b>甘，微温。归肺、脾经。<br><br><button>＋ 收藏药材</button></p></div></main></section></div>`,
    archive: `
      <div class="mock-app mock-archive"><div><small>PROJECT SOURCE ARCHIVE</small><h4>${project.title}</h4><p>该项目的页面源码需在可访问的私有仓库中提取后，才能按真实 UI 制作模拟界面。</p><span>当前不展示仓库链接，也不虚构页面结构。</span></div></div>`
  };
  return `<section class="project-demo"><div class="demo-bar"><span>UI 演示</span></div>${views[mockType]}</section>`;
}

function projectCard(project, index) {
  const tagCells = project.stack.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const tagTrack = Array(6).fill(tagCells).join("");
  const flowDuration = Math.max(10, project.stack.length * 2.2);
  const aiBadge = project.aiMode ? `<span class="card-ai-badge">${project.aiMode}</span>` : "";
  const categoryClass = `cat-${project.category.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, "-")}`;
  const coverType = {
    huiqingjia: "dashboard",
    "oa-im": "chat",
    meeting: "calendar",
    "ethnic-ai": "scanner",
    lingyun: "dual",
    "campus-venue": "dual",
    "huizhu-home": "mobile",
    "ai-editor": "editor",
    "yunnan-market": "store",
    carpooling: "dual",
    "cyber-defense": "terminal",
    "training-platform": "security",
    "flower-shop": "store",
    "hotel-booking": "travel",
    "movie-ticket": "movie",
    "medicine-info": "medicine",
    "cake-shop": "store"
  }[project.id] || "dashboard";
  const baseColor = project.color || colors[index % colors.length];
  return `
    <button class="project-card reveal ${categoryClass}" type="button" data-project-id="${project.id}"
      style="--card-base:${baseColor}; color:${project.textColor || "#101c27"}; --tag-duration:${flowDuration}s">
      <div class="card-layer" aria-hidden="true"></div>
      <div class="card-ui-hint" aria-hidden="true"></div>
      <div class="card-cover cover-${coverType}" aria-hidden="true">
        <div class="cover-topbar"><i></i><i></i><i></i></div>
        <div class="cover-sidebar"></div>
        <div class="cover-content"><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="project-card-top"><span class="card-category">${project.category.toUpperCase()}</span><span class="card-year">${project.year}</span></div>
      <div class="project-card-body">
        ${aiBadge}
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="project-card-footer"><div class="tag-list tag-flow"><div class="tag-track" aria-hidden="true">${tagTrack}</div></div><span class="card-arrow" aria-hidden="true">↗</span></div>
    </button>
  `;
}

function renderFilters() {
  filterList.innerHTML = filters.map((filter) => `
    <button class="filter-button ${filter === state.category ? "is-active" : ""}" type="button"
      role="tab" aria-selected="${filter === state.category}" data-filter="${filter}">${filter}</button>
  `).join("");
}

function renderProjects() {
  const keyword = state.keyword.trim().toLowerCase();
  const filtered = projects.filter((project) => {
    const inCategory = state.category === "全部" || project.category === state.category;
    const searchable = [project.title, project.category, project.summary, ...project.stack, ...project.features].join(" ").toLowerCase();
    return inCategory && (!keyword || searchable.includes(keyword));
  });
  projectGrid.innerHTML = filtered.map(projectCard).join("");
  emptyState.hidden = filtered.length > 0;
  projectCount.textContent = String(projects.length).padStart(2, "0");
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;
  const categoryClass = `stage-${project.category.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, "-")}`;
  dialogContent.innerHTML = `
    <article class="dialog-project ${categoryClass}" style="--project-accent:${project.color}; --project-ink:${project.textColor}">
      <div class="dialog-atmosphere" aria-hidden="true"></div>
      <header class="detail-head">
        <div>
          <div class="dialog-kicker"><span>${project.category.toUpperCase()}</span><span>${project.year}</span></div>
          <h2 id="dialog-title">${project.title}</h2>
        </div>
        <div class="detail-meta">
          <p class="dialog-summary">${project.summary}</p>
          <div class="tag-list">${project.stack.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
      </header>
      <div class="project-stage">
        <div class="stage-label"><span>PROJECT INTERFACE</span><span>UI SHOWCASE</span></div>
        ${renderMockUI(project)}
      </div>
      <div class="dialog-columns">
        <div><h3>承担角色</h3><p>${project.role}</p></div>
        <div><h3>核心范围</h3><ul>${project.features.map((feature) => `<li>${feature}</li>`).join("")}</ul></div>
      </div>
    </article>
  `;
  projectDialog.showModal();
}

filterList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.category = button.dataset.filter;
  renderFilters();
  renderProjects();
});

document.querySelector("#project-search").addEventListener("input", (event) => {
  state.keyword = event.target.value;
  renderProjects();
});

projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (card) openProject(card.dataset.projectId);
});

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  const aiStep = event.target.closest("[data-ai-step]");
  if (aiStep) {
    const workflow = aiStep.closest(".ethnic-workflow");
    if (workflow) {
      workflow.dataset.aiStep = aiStep.dataset.aiStep;
      workflow.querySelectorAll("[data-ai-step]").forEach((button) => {
        button.classList.toggle("is-active", button === aiStep);
      });
    }
  }
  if (action === "open-resume") resumeDialog.showModal();
  if (action === "close-dialog") projectDialog.close();
  if (action === "close-resume") resumeDialog.close();
});

for (const dialog of [projectDialog, resumeDialog]) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

const menuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mainNav.classList.toggle("is-open", !open);
});
mainNav.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  mainNav.classList.remove("is-open");
});

/* ---------- 打字机标题 ---------- */
function initTypewriter() {
  const el = document.querySelector("#hero-title.typewriter");
  if (!el) return;
  const rawText = el.dataset.type || "把需求\\n做成可运行的\\n产品。";
  const accent = el.dataset.accent || "可运行的";
  const lines = rawText.split("\\n");
  el.innerHTML = "";

  let charIndex = 0;
  const chars = [];

  lines.forEach((line) => {
    const lineWrap = document.createElement("span");
    lineWrap.className = "tw-line";

    let remaining = line;
    while (remaining.length) {
      if (accent && remaining.startsWith(accent)) {
        const accentWrap = document.createElement("span");
        accentWrap.style.color = "var(--acid)";
        for (const ch of accent) {
          const span = document.createElement("span");
          span.className = "tw-char";
          span.textContent = ch === " " ? "\u00A0" : ch;
          if (ch === " ") span.classList.add("is-space");
          span.style.animationDelay = `${charIndex * 55}ms`;
          accentWrap.appendChild(span);
          chars.push(span);
          charIndex++;
        }
        lineWrap.appendChild(accentWrap);
        remaining = remaining.slice(accent.length);
      } else {
        const ch = remaining[0];
        const span = document.createElement("span");
        span.className = "tw-char";
        span.textContent = ch === " " ? "\u00A0" : ch;
        if (ch === " ") span.classList.add("is-space");
        span.style.animationDelay = `${charIndex * 55}ms`;
        lineWrap.appendChild(span);
        chars.push(span);
        charIndex++;
        remaining = remaining.slice(1);
      }
    }
    el.appendChild(lineWrap);
  });

  const cursor = document.createElement("span");
  cursor.className = "tw-cursor";
  cursor.setAttribute("aria-hidden", "true");
  el.appendChild(cursor);

  // 所有字符显示完毕后 2.5 秒淡出光标
  const totalMs = charIndex * 55 + 800;
  setTimeout(() => { cursor.style.transition = "opacity .6s ease"; cursor.style.opacity = "0"; }, totalMs + 2500);
}

/* ---------- 内容直接呈现 ---------- */
function initReveal() {
  const reveals = document.querySelectorAll(".reveal, .project-card, .capability-grid article, .about-facts span, .contact-links a, .footer a");
  reveals.forEach((el) => el.classList.add("is-visible"));
}

/* ---------- 项目数字递增 ---------- */
function initCountUp() {
  const el = document.querySelector("#project-count");
  if (!el) return;
  const target = Number(el.textContent) || projects.length;
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const tick = () => {
    current += step;
    if (current >= target) {
      el.textContent = String(target).padStart(2, "0");
      return;
    }
    el.textContent = String(current).padStart(2, "0");
    requestAnimationFrame(tick);
  };
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      tick();
      obs.disconnect();
    }
  }, { threshold: 0.5 });
  obs.observe(el);
}

renderFilters();
renderProjects();
initTypewriter();
initReveal();
initCountUp();
