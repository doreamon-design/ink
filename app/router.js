'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware} = app;
  const auth = middleware.auth()
	// 重定向到index页面
	// app.router.redirect('/', '/index.html', 302);

  // 认证
	router.post('/auth/login', controller.auth.login);
  router.post('/auth/register', controller.auth.register);
	router.get('/auth/logout', controller.auth.logout);
	router.get('/auth/user', controller.auth.user);
  // 用户
  router.get('/user/info', auth, controller.user.getUserInfo);
	router.get('/user/getInfoById', controller.user.getUserInfoById);
	router.get('/user/getInfoByIds', controller.user.getUserByIds);
	router.post('/user/update/name', auth, controller.user.updateUserName);
	router.post('/user/update/pass', auth, controller.user.updateUserPass);
	router.post('/user/update/avatar', auth, controller.user.updateUserAvatar);
	router.get('/user/getUserList', controller.user.getUserList);
	// 文档
	router.post('/docs/add', auth, controller.document.createDocument);
	router.post('/docs/del', auth, controller.document.delDocument);
	router.get('/dos/list', auth, controller.document.getDocumentList);
	router.get('/dos/detail', auth, controller.document.getDocumentDetail);
	router.post('/docs/newFolder', auth, controller.document.createFolder);
	router.post('/docs/rename', auth, controller.document.renameFolder);
	router.get('/docs/path', auth, controller.document.getDocumentPathById);
	router.post('/docs/checkPass', controller.document.checkDocumentPassword);
	// 上传axure
	router.post('/docs/axure/upload', auth, controller.document.uploadAxureZip);
	// 点赞收藏
	router.get('/docs/star', auth, controller.document.starDocument);
	router.get('/docs/collect', auth, controller.document.collectDocument);
	// 我的文档
	router.get('/docs/myDocument', auth, controller.document.getCurrentUserDocumentList);
	// 我的收藏列表
	router.get('/docs/myCollectDocument', auth, controller.document.getMyCollectDocumentList);
	// 我的协作列表
	router.get('/docs/myCooperationDocument', auth, controller.document.getMyCooperationDocumentList);
	router.post('/docs/addCooperation/userIds', auth, controller.cooperation.addCooperationUser);
	router.post('/docs/addCooperation/groupId', auth, controller.cooperation.addCooperationUserByGroup);
	router.get('/docs/getCooperation/userList', auth, controller.cooperation.getCooperationUserListByDocumentId);
	router.post('/delCooperation/user', auth, controller.cooperation.removeCooperationUser);

	// 我的浏览历史列表
	router.get('/docs/myVisitHistoryDocument', auth, controller.document.getMyVisitHistoryDocumentList);
	// 我的回收站
	router.get('/docs/myRecycleBin', auth, controller.document.getMyRecycleBinDocumentList);
	router.post('/docs/distory', auth, controller.document.distoryDocument);
	router.post('/docs/recovery', auth, controller.document.recoveryDocument);

	// 分组管理团队管理
	router.post('/userGroup/create', auth, controller.userGroup.createUserGroup);
	router.get('/userGroup/list', auth, controller.userGroup.getUserGroupList);
	router.post('/userGroup/addUsers', auth, controller.userGroup.addUsersToUserGroup);
	router.post('/userGroup/delUser', auth, controller.userGroup.delUsersFromUserGroup);
	router.get('/userGroup/userList', auth, controller.userGroup.getUsersByGroupId);
	router.get('/userGroup/del', auth, controller.userGroup.delUserGroup);

	// 访问设置
	router.get('/docs/visit/getDocMembers', auth, controller.document.getMembersByDocumentId);
	router.get('/docs/getDocMembers', auth, controller.document.getMembersByDocumentId);
	router.post('/docs/visit/setAsTeam', auth, controller.document.setDocumentVisitTeam);
	router.post('/docs/visit/setAsOpen', auth, controller.document.setDocumentOpen);
	router.post('/docs/visit/setAsPrivate', auth, controller.document.setDocumentPrivate);

	// 我的模板
	router.get('/docs/myTemplate', auth, controller.document.getMyTemplateDocument);

	router.get('/', controller.home.index);
};
