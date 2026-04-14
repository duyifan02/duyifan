const i18n = {
  en: {
    kicker: 'Research-oriented Robotics Engineer',
    name: 'Yifan Du (杜艺帆)',
    subtitle:
      "Master's student at Sun Yat-sen University, focused on Embodied AI, World Models, and Navigation Intelligence.",
    about_title: 'About Me',
    about_body:
      'I build end-to-end robotics pipelines from perception and multimodal understanding to planning and real-world deployment.',
    focus_title: 'Research Focus',
    focus_1: 'Embodied AI system design',
    focus_2: 'Vision-Language Navigation and Visual Navigation',
    focus_3: 'World-model-driven planning',
    focus_4: 'Robot deployment and evaluation',
    projects_title: 'Selected Projects',
    project_tpl: '[One-sentence summary and your contribution]',
    edu_title: 'Education',
    edu_body:
      'M.S. in Electronic Science and Technology, School of Integrated Circuits, Sun Yat-sen University (Expected 2027).',
    contact_title: 'Contact',
    scholar_label: 'Google Scholar: [To be added]'
  },
  zh: {
    kicker: '研究导向的机器人工程实践者',
    name: '杜艺帆 · Yifan Du',
    subtitle: '中山大学集成电路学院硕士（预计 2027 年毕业），研究方向聚焦具身智能、世界模型与导航智能。',
    about_title: '关于我',
    about_body: '我关注从感知、多模态理解到规划与真实机器人部署的端到端系统构建。',
    focus_title: '研究兴趣',
    focus_1: '具身智能系统设计',
    focus_2: '视觉-语言导航与视觉导航',
    focus_3: '基于世界模型的决策规划',
    focus_4: '机器人部署与评测',
    projects_title: '代表项目',
    project_tpl: '[一句话概述项目与个人贡献]',
    edu_title: '教育背景',
    edu_body: '中山大学集成电路学院，电子科学与技术硕士（预计 2027 年毕业）。',
    contact_title: '联系方式',
    scholar_label: 'Google Scholar：[待补充]'
  }
};

let currentLang = 'en';

function render(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (i18n[lang][key]) node.textContent = i18n[lang][key];
  });
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  render(currentLang);
});

render(currentLang);
