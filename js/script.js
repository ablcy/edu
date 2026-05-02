// 试卷资源网站筛选和展示功能

// 获取DOM元素
const gradeFilter = document.getElementById('gradeFilter');
const subjectFilter = document.getElementById('subjectFilter');
const formatFilter = document.getElementById('formatFilter');
const searchInput = document.getElementById('searchInput');
const resourcesGrid = document.getElementById('resourcesGrid');
const totalSitesEl = document.getElementById('totalSites');
const totalPapersEl = document.getElementById('totalPapers');
const backToTopBtn = document.getElementById('backToTop');

// 当前筛选状态
let currentGrade = 'all';
let currentSubject = 'all';
let currentFormat = 'all';
let currentSearch = '';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderResources();
    updateStats();
    initializeBackToTop();
});

// 初始化筛选按钮事件
function initializeFilters() {
    // 年级筛选
    gradeFilter.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            setActiveButton(gradeFilter, e.target);
            currentGrade = e.target.dataset.grade;
            renderResources();
        }
    });
    
    // 科目筛选
    subjectFilter.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            setActiveButton(subjectFilter, e.target);
            currentSubject = e.target.dataset.subject;
            renderResources();
        }
    });
    
    // 格式筛选
    formatFilter.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            setActiveButton(formatFilter, e.target);
            currentFormat = e.target.dataset.format;
            renderResources();
        }
    });
    
    // 搜索功能
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value.toLowerCase().trim();
        renderResources();
    });
}

// 设置活跃按钮
function setActiveButton(container, activeBtn) {
    const buttons = container.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// 渲染资源卡片
function renderResources() {
    const filteredResources = filterResources();
    
    if (filteredResources.length === 0) {
        resourcesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>没有找到匹配的资源</h3>
                <p>请尝试其他筛选条件或搜索关键词</p>
            </div>
        `;
        return;
    }
    
    resourcesGrid.innerHTML = filteredResources.map(resource => createResourceCard(resource)).join('');
}

// 筛选资源
function filterResources() {
    return window.resources.filter(resource => {
        // 年级筛选
        if (currentGrade !== 'all') {
            if (!resource.grades.includes(currentGrade)) {
                return false;
            }
        }
        
        // 科目筛选
        if (currentSubject !== 'all') {
            if (!resource.subjects.includes(currentSubject)) {
                return false;
            }
        }
        
        // 格式筛选
        if (currentFormat !== 'all') {
            if (resource.format !== currentFormat && !(currentFormat === '两者都有' && resource.format === '两者都有')) {
                return false;
            }
        }
        
        // 搜索筛选
        if (currentSearch !== '') {
            const searchLower = currentSearch.toLowerCase();
            const nameMatch = resource.name.toLowerCase().includes(searchLower);
            const descMatch = resource.description.toLowerCase().includes(searchLower);
            const subjectMatch = resource.subjects.some(subject => subject.toLowerCase().includes(searchLower));
            const gradeMatch = resource.grades.some(grade => grade.toLowerCase().includes(searchLower));
            
            if (!nameMatch && !descMatch && !subjectMatch && !gradeMatch) {
                return false;
            }
        }
        
        return true;
    });
}

// 创建资源卡片HTML
function createResourceCard(resource) {
    const gradesHTML = resource.grades.map(grade => 
        `<span class="tag tag-grade">${grade}</span>`
    ).join('');
    
    const subjectsHTML = resource.subjects.map(subject => 
        `<span class="tag tag-subject">${subject}</span>`
    ).join('');
    
    const featuresHTML = resource.features.map(feature => 
        `<span class="feature"><i class="fas fa-check"></i> ${feature}</span>`
    ).join('');
    
    return `
        <div class="resource-card">
            <div class="card-header">
                <div class="card-icon">
                    <i class="fas ${resource.icon}"></i>
                </div>
                <div class="card-title">
                    <h3>${resource.name}</h3>
                    <span class="website-url">${resource.url}</span>
                </div>
            </div>
            <div class="card-description">
                ${resource.description}
            </div>
            <div class="card-tags">
                ${gradesHTML}
                ${subjectsHTML}
                <span class="tag tag-format">${resource.format}格式</span>
            </div>
            <div class="card-footer">
                <div class="card-features">
                    ${featuresHTML}
                </div>
                <a href="${resource.url}" target="_blank" class="visit-btn">
                    <i class="fas fa-external-link-alt"></i> 访问网站
                </a>
            </div>
        </div>
    `;
}

// 更新统计信息
function updateStats() {
    const totalSites = window.resources.length;
    const totalPapers = window.resources.reduce((sum, resource) => sum + resource.grades.length * resource.subjects.length, 0);
    
    animateNumber(totalSitesEl, totalSites);
    animateNumber(totalPapersEl, totalPapers);
}

// 数字动画效果
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// 初始化返回顶部按钮
function initializeBackToTop() {
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 添加卡片动画效果
function addCardAnimation() {
    const cards = document.querySelectorAll('.resource-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// 监听DOM变化，添加新的卡片动画
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            addCardAnimation();
        }
    });
});

// 开始观察资源网格的变化
observer.observe(resourcesGrid, { childList: true });
