#!/usr/bin/env bash
cnpm config get registry # 检查仓库镜像库
cnpm config set registry=https://registry.npmjs.org
echo '请进行 npm 登录操作：'
cnpm login # 登陆
echo "-------publishing-------"
cnpm publish # 发布
cnpm config set registry=https://registry.npmmirror.com # 设置为淘宝镜像
echo "发布完成"
exit