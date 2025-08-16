# 部署指南

## 快速部署选项

### 1. GitHub Pages（推荐）

**步骤：**
1. 创建GitHub账号并登录
2. 创建新仓库，命名如 `mbti-test`
3. 上传项目文件到仓库
4. 进入仓库设置 → Pages
5. 选择源：Deploy from a branch
6. 分支选择：main，文件夹选择：/ (root)
7. 保存后等待部署完成

**访问地址：** `https://你的用户名.github.io/mbti-test`

### 2. Netlify（最简单）

**方法一：拖拽部署**
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账号
3. 直接拖拽 `public` 文件夹到部署区域
4. 自动获得访问链接

**方法二：GitHub连接**
1. 将代码推送到GitHub
2. 在Netlify中连接GitHub仓库
3. 构建设置：
   - Build command: 留空
   - Publish directory: `public`
4. 部署完成

### 3. Vercel

**步骤：**
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. Import项目或拖拽文件夹
4. 框架预设选择：Other
5. 根目录设置为 `public`
6. 部署完成

### 4. Firebase Hosting

**步骤：**
1. 安装Firebase CLI：`npm install -g firebase-tools`
2. 登录：`firebase login`
3. 在项目目录运行：`firebase init hosting`
4. 设置public目录为 `public`
5. 部署：`firebase deploy`

### 5. Surge.sh

**步骤：**
1. 安装Surge：`npm install -g surge`
2. 在public目录运行：`surge`
3. 首次使用需要注册
4. 选择域名或使用默认

## Git命令快速上手

```bash
# 初始化Git仓库
cd /Users/bytedance/MBTI_test
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: MBTI personality test website"

# 连接远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/mbti-test.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

## 自定义域名

### GitHub Pages
1. 在仓库设置的Pages部分
2. 添加Custom domain
3. 配置DNS记录指向GitHub

### Netlify
1. 在站点设置中选择Domain management
2. 添加自定义域名
3. 配置DNS记录

### Vercel
1. 在项目设置中选择Domains
2. 添加域名
3. 配置DNS记录

## 常见问题

**Q: 为什么访问404？**
A: 确认文件路径正确，index.html在正确位置

**Q: CSS/JS没有加载？**
A: 检查文件路径是否使用相对路径

**Q: 如何更新网站？**
A: 修改文件后重新部署或推送到Git仓库

## 性能优化建议

1. **压缩文件**：使用工具压缩CSS和JS
2. **图片优化**：压缩图片大小
3. **CDN加速**：使用CDN服务加速访问
4. **缓存设置**：配置适当的缓存策略

## 安全建议

1. 启用HTTPS（大部分平台默认支持）
2. 设置安全头部（已在配置文件中包含）
3. 定期更新依赖（如果有的话）