const i18n = {
  en: {
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    kicker: 'Research-oriented Robotics Engineer',
    name: 'Yifan Du (杜艺帆)',
    subtitle:
      "Master's student at Sun Yat-sen University, focused on Embodied AI, World Models, and Navigation Intelligence.",
    about_title: 'About Me',
    about_body:
      'I build end-to-end robotics pipelines from perception and multimodal understanding to planning and real-world deployment.',
    skills_title: 'Technical Skills',
    skills_1: 'Programming: Python, C++, Linux scripting',
    skills_2: 'AI/ML: PyTorch, multimodal learning workflows',
    skills_3: 'Robotics: ROS/ROS2, navigation stack integration',
    skills_4: 'Deployment: data collection, evaluation, iteration',
    projects_title: 'Project Experience (STAR)',
    projects_note: 'Structured for recruiter/research review',
    star_s: 'Situation',
    star_t: 'Task',
    star_a: 'Action',
    star_r: 'Result',
    p1_title: 'Multimodal Hierarchical Visual Navigation in Dynamic Worlds',
    p1_summary:
      'Designed a novel hierarchical navigation framework for dynamic environments and led full algorithm implementation under PyTorch + ROS2.',
    p1_s: 'Dynamic environments make classic navigation pipelines brittle under scene changes.',
    p1_t: 'Build a robust hierarchical system integrating reasoning, policy, and deployment.',
    p1_a:
      'Proposed mLLM + Diffusion Policy hierarchy, built CARLA/Habitat pipeline, completed Jetson + stereo + LiDAR platform validation.',
    p1_r: '[Add quantitative gains, success rate, robustness metrics, and deployment logs here]',
    p2_title: 'Standalone Reconfigurable Ferroelectric Transistor for Neuromorphic Driving (Collab)',
    p2_summary:
      'Led end-to-end experimental design and built a complete evaluation pipeline for neuromorphic feasibility analysis in autonomous-driving scenarios.',
    p2_s: 'Need practical evidence for device-level neuromorphic computing in realistic workloads.',
    p2_t:
      'Design full experiments and define metrics from basic characteristics to core functional behavior.',
    p2_a:
      'Independently designed plans, executed key experiments, and established end-to-end performance evaluation process.',
    p2_r: '[Add power/latency/accuracy improvements and comparison with baseline devices]',
    p3_title: 'Autonomous Lawn Exploration & Mapping via Diffusion Policy + BEV',
    p3_summary:
      'Implemented a BEV perception-mapping framework and integrated it with diffusion-based exploration for end-to-end outdoor autonomy.',
    p3_s: 'Outdoor unstructured environments require stable map representation and exploration policy.',
    p3_t: 'Convert front-view perception into unified top-down maps for planning and autonomous exploration.',
    p3_a:
      'Built BEV projection and grid mapping stack, integrated with diffusion exploration policy, and deployed on robot platform.',
    p3_r: '[Add coverage rate, map quality, runtime stability, and field test statistics]',
    project_view_repo: 'View Repository',
    project_link_tba: 'Paper/Repo To Be Added',
    focus_title: 'Research Focus',
    focus_1: 'Embodied AI system design',
    focus_2: 'Vision-Language Navigation and Visual Navigation',
    focus_3: 'World-model-driven planning',
    focus_4: 'Robot deployment and evaluation',
    edu_title: 'Education',
    edu_body:
      'M.S. in Electronic Science and Technology, School of Integrated Circuits, Sun Yat-sen University (Expected 2027).',
    edu_hint: 'You can add advisor, lab, and coursework here.',
    contact_title: 'Contact',
    scholar_label: '[To be added]'
  },
  zh: {
    nav_projects: '项目',
    nav_skills: '技能',
    nav_experience: '经历',
    nav_contact: '联系',
    kicker: '研究导向的机器人工程实践者',
    name: '杜艺帆 · Yifan Du',
    subtitle: '中山大学集成电路学院硕士（预计 2027 年毕业），研究方向聚焦具身智能、世界模型与导航智能。',
    about_title: '关于我',
    about_body: '我关注从感知、多模态理解到规划与真实机器人部署的端到端系统构建。',
    skills_title: '技术技能',
    skills_1: '编程：Python、C++、Linux 脚本',
    skills_2: 'AI/ML：PyTorch、多模态学习流程',
    skills_3: '机器人：ROS/ROS2、导航栈集成',
    skills_4: '部署：数据采集、评测与迭代优化',
    projects_title: '项目经历（STAR）',
    projects_note: '按招聘/研究评审结构化呈现',
    star_s: '情境',
    star_t: '任务',
    star_a: '行动',
    star_r: '结果',
    p1_title: '面向动态世界的多模态分层式视觉导航框架研究',
    p1_summary: '设计全新的 mLLM + 扩散策略分层导航框架，并独立完成 PyTorch + ROS2 算法实现与验证。',
    p1_s: '传统方法在动态变化环境中对复杂导航任务的鲁棒性不足。',
    p1_t: '构建兼具推理能力、策略能力和部署能力的分层视觉导航系统。',
    p1_a: '提出分层式架构；搭建 CARLA/Habitat 全流程仿真；完成 Jetson + 双目 + LiDAR + 自建运动平台部署验证。',
    p1_r: '[可补充：成功率提升、路径效率、动态障碍鲁棒性、实机连续运行时长等量化结果]',
    p2_title: '基于独立式可重构铁电晶体管及其用于自动驾驶的神经形态计算研究（合作）',
    p2_summary: '独立主导实验方案与评估体系，完成关键实验并验证低功耗神经形态计算可行性。',
    p2_s: '需要验证器件在真实任务场景中的神经形态计算价值。',
    p2_t: '设计完整实验流程并建立从基础指标到核心功能的评估闭环。',
    p2_a: '独立设计并执行关键实验，搭建全套性能评估流程并完成数据分析。',
    p2_r: '[可补充：功耗/响应速度/稳定性对比数据，与基线器件对比提升幅度]',
    p3_title: '基于扩散策略与 BEV 投影的自主草坪探索与建图',
    p3_summary: '实现 BEV 感知建图框架并与扩散探索算法集成，形成端到端户外自主探索方案。',
    p3_s: '户外非结构化环境下探索与建图对环境表征一致性要求高。',
    p3_t: '将前视图像实时转化为统一 BEV 栅格地图，支撑路径规划与探索。',
    p3_a: '完成 BEV 投影与建图模块设计，实现与扩散探索策略融合并完成机器人实地部署测试。',
    p3_r: '[可补充：覆盖率、建图精度、探索效率、系统稳定性等实测结果]',
    project_view_repo: '查看仓库',
    project_link_tba: '论文/仓库待补充',
    focus_title: '研究兴趣',
    focus_1: '具身智能系统设计',
    focus_2: '视觉-语言导航与视觉导航',
    focus_3: '基于世界模型的决策规划',
    focus_4: '机器人部署与评测',
    edu_title: '教育背景',
    edu_body: '中山大学集成电路学院，电子科学与技术硕士（预计 2027 年毕业）。',
    edu_hint: '可以在这里补充导师、实验室和课程信息。',
    contact_title: '联系方式',
    scholar_label: '[待补充]'
  }
};

let currentLang = 'en';

function render(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      node.textContent = i18n[lang][key];
    }
  });
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  render(currentLang);
});

render(currentLang);
