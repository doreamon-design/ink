/*
	用户相关api
**/

import $axios from "@/service/httpServer";
// 登录
export const login = p => $axios.post('/api/auth/login', p);

// 注册
export const register = p => $axios.post('/api/auth/register', p);

// 获取用户信息
export const getUserInfo = () => $axios.get('/api/user/info');
// 获取用户信息 by userId
export const getUserInfoById = p => $axios.get('/api/user/getInfoById', p);
// 获取用户信息 by userId
export const getUserInfoByIds = p => $axios.get('/api/user/getInfoByIds', p);

// 修改用户昵称
export const updateNickName = p => $axios.post('/api/user/update/name', p);

// 修改密码
export const updateUserPass = p => $axios.post('/api/user/update/pass', p);

// 修改头像
export const updateUserAvatar = p => $axios.post('/api/user/update/avatar', p);

// 关键字搜索用户列表
export const getUserListByKeywords = p => $axios.get('/api/user/getUserList', p);


/**
 * 文章作者相关
 */
export const getAuthorInfo = p => $axios.post('/api/author/info', p);

