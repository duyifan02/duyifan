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
    projects_title: 'Selected Projects',
    projects_note: 'Real repositories with ongoing updates',
    project_svd_desc:
      'A navigation-focused project repository for embodied AI and visual navigation exploration.',
    project_svd_point_1: 'Focus on practical navigation pipeline design and experimentation.',
    project_svd_point_2: 'Supports future extension to VLN and planning modules.',
    project_3dgs_desc:
      'A lightweight 3D Gaussian Splatting project for efficient 3D scene representation and rendering.',
    project_3dgs_point_1: 'Emphasizes practical performance and lightweight implementation.',
    project_3dgs_point_2: 'Useful for robotics perception and simulation-related tasks.',
    project_view_repo: 'View Repository',
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
    projects_title: '代表项目',
    projects_note: '真实仓库，持续更新中',
    project_svd_desc: '面向具身智能与视觉导航探索的导航项目仓库。',
    project_svd_point_1: '聚焦导航系统与实验流程的工程化落地。',
    project_svd_point_2: '可持续扩展到 VLN 与规划相关模块。',
    project_3dgs_desc: '轻量化 3D Gaussian Splatting 项目，用于高效三维场景表达与渲染。',
    project_3dgs_point_1: '强调效率与轻量化实现，兼顾可复现性。',
    project_3dgs_point_2: '可用于机器人感知与仿真相关任务。',
    project_view_repo: '查看仓库',
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
