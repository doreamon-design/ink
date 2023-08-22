/*
	用户分组相关api
**/

import $axios from "@/service/httpServer";

// 新增分组
export const createUserGroup = p => $axios.post('/api/userGroup/create', p);
// 删除分组
export const delUserGroup = p => $axios.get('/api/userGroup/del', p);
// 获取分组列表
export const getUserGroupList = () => $axios.get('/api/userGroup/list');
// 新增用户到分组
export const addUserToGroup = p => $axios.post('/api/userGroup/addUsers', p);
// 删除用户从分组
export const delUserFromGroup = p => $axios.post('/api/userGroup/delUser', p);
// 获取用户列表从分组
export const getUserListFromGroup = p => $axios.get('/api/userGroup/userList', p);
