const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navExperience: "Work Experience",
        navProjects: "Projects",
        navContact: "Contact",

        // Hero Section
        heroGreeting: "Hi, I'm Peiyao Tao.",
        heroTagline: "I build systems that leverage computer vision and machine learning to solve real-world problems.",
        heroButtonWork: "View My Work",
        heroButtonResume: "Download Resume",
        resumeUrl: "resume/Resume_EN.pdf",

        // About Me Section
        aboutTitle: "About Me",
        aboutParagraphPart1: "I am a second-year MSCS student at Northeastern University with a strong foundation in ",
        aboutKeywordDS: "Data Structures",
        aboutKeywordAlgorithms: "Algorithms",
        aboutKeywordSWDev: "Software Development",
        aboutParagraphPart2: ". I have hands-on experience in ",
        aboutKeywordPython: "Python",
        aboutKeywordCPP: "C++",
        aboutKeywordJava: "Java",
        aboutParagraphPart3: ", and I am proficient in using libraries such as ",
        aboutKeywordOpenCV: "OpenCV",
        aboutKeywordTensorFlow: "TensorFlow",
        aboutParagraphPart4: ". I enjoy solving complex problems and learning new technologies. My interests lie in ",
        aboutKeywordML: "Machine Learning",
        aboutKeywordCV: "Computer Vision",
        aboutKeywordGameDev: "Game Development",
        aboutParagraphPart5: ".",

        // Work Experience Section
        experienceTitle: "My Work Experience",
        experienceJobTitle1: "AI Developer Intern",
        experienceCompany1: "Fenghua Railway Informatization Co., Ltd. - 05/2024 ~ 08/2024",
        experienceDesc1_1: "Built and labeled a dataset of 3000+ images and trained a YOLOv5 object detection model that achieved 95.8% test accuracy and ran in real-time on video streams.",
        experienceDesc1_2: "Partnered with cross-functional engineers and safety teams to ensure the model aligned with field deployment requirements.",

        // Projects Section
        projectsTitle: "My Projects",
        project1Title: "Comparative Analysis of Deblurring Models (Python)",
        project1Desc: "Main developer | Advisor: Dr. Bruce Maxwell, Professor of Computer Vision - 09/2025 ~ 09/2025",
        project1Feat1: "Developed and compared a CNN-based U-Net against a Transformer-based Swin-Unet for high-fidelity image deblurring.",
        project1Feat2: "Engineered a hybrid Swin-Unet with multi-scale skip connections and enhanced the U-Net decoder with Efficient Channel Attention (ECA) principles to achieving state-of-the-art, artifact-free results.",
        project1Feat3: "Implemented an advanced training pipeline using perceptual loss (VGG), a learning rate scheduler, and early stopping to maximize performance.",
        projectButtonLiveDemo: "Live Demo", // Reused for all live demos
        projectButtonGitHub: "GitHub",   // Reused for all GitHub links

        project2Title: "Calligraphy Style Recognition (Python)",
        project2Desc: "Main developer | Advisor: Dr. Bruce Maxwell, Professor of Computer Vision - 09/2024 ~ 12/2024",
        project2Feat1: "Developed a machine learning model based on EfficientNet50 for classifying Chinese calligraphy styles.",
        project2Feat2: "Applied stratified sampling techniques and attention mechanisms to improve model performance and reduce overfitting.",
        project2Feat3: "Collected and preprocessed a dataset of 8,000+ images, achieving 97.9% average accuracy in style classification.",

        project3Title: "Discord Study Group Bot (Java)",
        project3Desc: "Lead developer of team of four | Advisor: Prof. Alexander Lash, Professor of Software Engineering - 09/2024 ~ 12/2024",
        project3Feat1: "Led the design process of a discord bot from scratch to make it easier for students to organize study groups.",
        project3Feat2: "Used MongoDB to store user data and study group information.",
        project3Feat3: "Developed the feature that sends reminder notifications through discord direct messages to users before scheduled meeting times and allow users to customize their own reminder lead time.",

        project4Title: "Augmented Reality Chessboard (C++)",
        project4Desc: "Main developer | Advisor: Dr. Bruce Maxwell, Professor of Computer Vision - 09/2024 ~ 12/2024",
        project4Feat1: "Developed an augmented reality chessboard application using OpenCV and OpenGL, displaying virtual chess pieces on a physical board.",
        project4Feat2: "Implemented real-time piece recognition and tracking using computer vision techniques, achieving 85% accuracy in piece projection.",

        project5Title: "Chatroom Application (Java)",
        project5Desc: "Main developer | Advisor: Dr. Brian Cross, Professor of Programming Design Paradigm - 09/2023 ~ 12/2023",
        project5Feat1: "Designed a chatroom application using Java and WebSocket for real-time communication.",
        project5Feat2: "Used threadpool for handling up to 10 clients at a time.",
        project5Feat3: "Implemented a simple random compliment grammar generator for clients to greet others.",

        project6Title: "Fitex Farmers Market (C#)",
        project6Desc: "Developed with a team of four | Advisor: Dr. Donald Scott McCrickard, Professor of Human-Computer Interaction Capstone - 02/2023 ~ 05/2023",
        project6Feat1: "Designed a game using Unity that collects player's daily step and uses step counts data to grow virtual crops on their farm.",
        project6Feat2: "Implemented a quest and group challenge generator, which generates daily and weekly challenges for users with adaptive difficulty based on player level and unlocked crop types.",

        project7Title: "Bullet Hell Game (C#)",
        project7Desc: "Main developer - 02/2022 ~ 05/2022",
        project7Feat1: "Developed a bullet hell game using Unity where players control a spaceship and must dodge incoming bullets.",
        project7Feat2: "Implemented a power-up system that allows players to enhance their abilities by collecting power-ups and wing ships to protect themselves from enemies.",

        // Contact Section
        contactTitle: "Get In Touch",
        contactParagraph: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
        contactButton: "Send me an email",
        contactLinkedIn: "LinkedIn",
        contactGitHub: "GitHub",

        // Footer
        footerCopyright: "&copy; 2025 Peiyao Tao. All rights reserved."

    },
    zh: {
        // Navigation
        navHome: "首页",
        navAbout: "关于我",
        navExperience: "工作经历",
        navProjects: "项目",
        navContact: "联系我",

        // Hero Section
        heroGreeting: "你好，我是陶沛尧。",
        heroTagline: "我致力于构建能够通过计算机视觉和机器学习来观察并理解世界的智能系统。",
        heroButtonWork: "查看我的项目经历",
        heroButtonResume: "下载简历",
        resumeUrl: "resume/Resume_ZH.pdf",

        // About Me Section
        aboutTitle: "个人简介",
        aboutParagraphPart1: "我是一名就读于美国东北大学计算机科学硕士二年级学生，在",
        aboutKeywordDS: "数据结构",
        aboutKeywordAlgorithms: "算法",
        aboutKeywordSWDev: "软件开发",
        aboutParagraphPart2: "方面具备扎实的基础。我拥有",
        aboutKeywordPython: "Python",
        aboutKeywordCPP: "C++",
        aboutKeywordJava: "Java",
        aboutParagraphPart3: "的实践经验，并且精通使用",
        aboutKeywordOpenCV: "OpenCV",
        aboutKeywordTensorFlow: "TensorFlow",
        aboutParagraphPart4: "等库。我热衷于解决复杂问题和学习新技术。我的兴趣方向在于",
        aboutKeywordML: "机器学习",
        aboutKeywordCV: "计算机视觉",
        aboutKeywordGameDev: "游戏开发",
        aboutKeywordAnd: "和",
        aboutKeywordComma: "，",
        aboutKeywordPeriod: "。",

        // Work Experience Section
        experienceTitle: "工作经历",
        experienceJobTitle1: "人工智能开发实习",
        experienceCompany1: "郑州峰华铁路信息化有限公司 - 2024年5月 ~ 2024年8月",
        experienceDesc1_1: "基于业务提供的视频样本，构建含3000+张标注图像的专属数据集，并使用预训练的YOLOv5网络对数据集进行模型微调训练，最终模型在测试集上的准确率达到95.8%，且可在实时视频流中高效运行。",
        experienceDesc1_2: "协助开发目标检测模型，用于识别铁路周边核心目标（人员、灌木丛、新铺设轨道）",

        // Projects Section
        projectsTitle: "我的项目",
        project1Title: "图像去模糊模型对比分析 (Python)",
        project1Desc: "主要开发者 | 导师：Bruce Maxwell 博士，计算机视觉教授 - 2025年9月 ~ 2025年9月",
        project1Feat1: "开发并对比两种核心模型 —— 基于 CNN 的 U-Net 与基于 Transformer 的 Swin-Unet，用于高保真图像去模糊任务。",
        project1Feat2: "创新设计融合多尺度跳跃连接的混合Swin-Unet模型，并基于高效通道注意力（ECA）原理优化 U-Net 解码器，最终实现无伪影的效果。",
        project1Feat3: "搭建进阶训练流程，引入 VGG 感知损失、学习率调度器与早停机制，最大化模型性能。",
        projectButtonLiveDemo: "视频演示",
        projectButtonGitHub: "GitHub",

        project2Title: "书法风格识别系统 (Python)",
        project2Desc: "主要开发者 | 导师：Bruce Maxwell 博士，计算机视觉教授 - 2024年9月 ~ 2024年12月",
        project2Feat1: "基于 EfficientNet50 网络开发机器学习模型，实现 20 种中国书法风格的精准分类。",
        project2Feat2: "应用分层采样技术和注意力机制，提高模型性能并减少过拟合。",
        project2Feat3: "收集并预处理了8,000多张图像数据集，在风格分类中达到平均97.9%的准确率。",

        project3Title: "Discord学习小组机器人 (Java)",
        project3Desc: "四人团队负责人 | 导师：Alexander Lash 教授，软件工程教授 - 2024年9月 ~ 2024年12月",
        project3Feat1: "从零开始领导设计了一个Discord机器人，使学生更容易组织学习小组。",
        project3Feat2: "使用MongoDB存储用户数据和学习小组信息。",
        project3Feat3: "开发了在预定会议时间前通过Discord私信向用户发送提醒通知的功能，并允许用户自定义提醒提前时间。",

        project4Title: "增强现实国际象棋 (C++)",
        project4Desc: "主要开发者 | 导师：Bruce Maxwell 博士，计算机视觉教授 - 2024年9月 ~ 2024年12月",
        project4Feat1: "使用OpenCV和OpenGL开发了一个增强现实国际象棋应用程序，在物理棋盘上显示虚拟棋子。",
        project4Feat2: "使用计算机视觉技术实现实时棋子识别和跟踪，棋子投影准确率达到85%。",

        project5Title: "聊天室应用程序 (Java)",
        project5Desc: "主要开发者 | 导师：Brian Cross 博士，编程设计范式教授 - 2023年9月 ~ 2023年12月",
        project5Feat1: "使用Java和WebSocket设计了一个聊天室应用程序，用于实时通信。",
        project5Feat2: "使用线程池同时处理多达10个客户端。",
        project5Feat3: "实现了一个简单的随机赞美语法生成器，供客户端向他人问好。",

        project6Title: "Fitex农贸市场 (C#)",
        project6Desc: "与四人团队共同开发 | 导师：Donald Scott McCrickard 博士，人机交互毕业设计教授 - 2023年2月 ~ 2023年5月",
        project6Feat1: "使用Unity设计了一款游戏，收集玩家的每日步数，并利用步数数据在他们的农场中种植虚拟作物。",
        project6Feat2: "实现了一个任务和团队挑战生成器，根据玩家等级和解锁的作物类型，生成每日和每周的自适应难度挑战。",

        project7Title: "弹幕射击游戏 (C#)",
        project7Desc: "主要开发者 - 2022年2月 ~ 2022年5月",
        project7Feat1: "使用Unity开发了一款弹幕射击游戏，玩家控制一艘飞船，必须躲避迎面而来的子弹。",
        project7Feat2: "实现了一个道具系统，允许玩家通过收集道具和僚机来增强能力，保护自己免受敌人攻击。",

        // Contact Section
        contactTitle: "联系方式",
        contactParagraph: "我始终对新的机会和合作持开放态度。欢迎随时与我联系！",
        contactButton: "发送邮件",
        contactLinkedIn: "领英",
        contactGitHub: "GitHub",

        // Footer
        footerCopyright: "&copy; 2025 陶沛尧. 版权所有。"
    }
};