# 试卷资源库 (Edu Resources)

一个专门为教师和学生打造的教育试卷资源聚合网站，收集整理各类免费试卷下载网站，支持按年级、科目、格式进行筛选。

## 功能特点

- 🎯 **精准筛选**：支持按具体年级（一年级到高三）、科目、格式进行筛选
- 🔍 **智能搜索**：支持搜索网站名称、描述、科目等关键词
- 📊 **资源丰富**：收集20+优质教育网站，涵盖中小学全科目
- 📱 **响应式设计**：完美适配电脑、平板、手机等各种设备
- 🎨 **精美界面**：现代化UI设计，流畅的动画效果
- 📄 **格式多样**：支持Word、PDF等多种试卷格式

## 收录资源类型

### 按年级分类
- 小学：一年级、二年级、三年级、四年级、五年级、六年级
- 初中：初一、初二、初三
- 高中：高一、高二、高三

### 按科目分类
- 语文、数学、英语
- 物理、化学、生物
- 历史、地理、政治

### 按格式分类
- Word格式（可编辑）
- PDF格式（不可编辑）
- 两者都有

## 使用方法

1. **在线使用**：直接打开 `index.html` 文件即可使用
2. **本地部署**：将整个文件夹放置到Web服务器目录
3. **GitHub Pages部署**：推送到GitHub后启用GitHub Pages

## 部署到GitHub

### 方法一：使用Git命令

```bash
# 1. 在GitHub上创建名为 "edu" 的新仓库（小写）
# 2. 进入项目目录
cd edu-website

# 3. 初始化Git仓库
git init

# 4. 添加所有文件
git add .

# 5. 提交
git commit -m "初始化试卷资源库项目"

# 6. 添加远程仓库（替换为你的GitHub用户名）
git remote add origin https://github.com/你的用户名/edu.git

# 7. 推送到GitHub
git push -u origin main

# 8. 在GitHub仓库设置中启用GitHub Pages
# Settings -> Pages -> Source -> main branch
```

### 方法二：直接上传

1. 在GitHub上创建名为 "edu" 的仓库
2. 将整个 `edu-website` 文件夹内容上传到仓库
3. 在仓库设置中启用GitHub Pages

## 项目结构

```
edu-website/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   ├── data.js        # 资源数据
│   └── script.js      # 交互逻辑
└── README.md          # 项目说明
```

## 收录的主要资源网站

- 学科网 (zxxk.com)
- 百度文库 (wenku.baidu.com)
- 考试吧 (exam8.com)
- 无忧考网 (51test.net)
- 教习网 (51jiaoxi.com)
- 绿色圃中小学教育网 (lspjy.com)
- 高考资源网 (ks5u.com)
- 黄冈试卷网 (hgjyw.com)
- 以及更多...

## 技术栈

- HTML5
- CSS3 (Flexbox + Grid)
- 原生JavaScript (ES6+)
- Font Awesome 图标库

## 特色功能

### 1. 智能筛选系统
- 多维度筛选：年级、科目、格式
- 实时搜索：输入关键词即时显示结果
- 组合筛选：可同时使用多个筛选条件

### 2. 用户体验优化
- 流畅动画：卡片悬停、按钮点击等交互效果
- 返回顶部：方便浏览大量内容
- 响应式布局：自适应各种屏幕尺寸

### 3. 数据统计
- 实时显示资源网站数量
- 统计试卷资源总数
- 标注免费下载标识

## 后续开发计划

- [ ] 添加更多资源网站
- [ ] 实现用户评分和评论功能
- [ ] 添加试卷预览功能
- [ ] 支持按地区筛选（不同版本教材）
- [ ] 添加收藏功能
- [ ] 实现试卷上传分享功能

## 贡献指南

欢迎提交Issue和Pull Request！

### 如何添加新的资源网站？

编辑 `js/data.js` 文件，在 `resources` 数组中添加新的对象：

```javascript
{
    id: 21,  // 递增的ID
    name: "网站名称",
    url: "https://www.example.com",
    description: "网站描述信息",
    grades: ["一年级", "二年级", ...],  // 支持的年级
    subjects: ["语文", "数学", ...],    // 支持的科目
    format: "Word",                   // 格式：Word/PDF/两者都有
    features: ["特色1", "特色2", ...], // 网站特色
    icon: "fa-icon-name"              // Font Awesome图标类名
}
```

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 提交GitHub Issue
- 发送邮件至：[你的邮箱]

---

**声明**：本网站仅提供教育资源导航服务，所有试卷资源均来源于各教育网站，版权归原作者所有。如涉及侵权，请联系我们删除。
