'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const apiPrefix = process.env.NODE_ENV === 'production' ? '/api' : '/';

  const { router, controller, middleware} = app;
  const auth = middleware.auth()
	// 重定向到index页面
	// app.router.redirect(apiPrefix + '/', '/index.html', 302);

  // 认证
	router.post(apiPrefix + '/auth/login', controller.auth.login);
  router.post(apiPrefix + '/auth/register', controller.auth.register);
	router.get(apiPrefix + '/auth/logout', controller.auth.logout);
	router.get(apiPrefix + '/auth/user', controller.auth.user);
  // 用户
  router.get(apiPrefix + '/user/info', auth, controller.user.getUserInfo);
	router.get(apiPrefix + '/user/getInfoById', controller.user.getUserInfoById);
	router.get(apiPrefix + '/user/getInfoByIds', controller.user.getUserByIds);
	router.post(apiPrefix + '/user/update/name', auth, controller.user.updateUserName);
	router.post(apiPrefix + '/user/update/pass', auth, controller.user.updateUserPass);
	router.post(apiPrefix + '/user/update/avatar', auth, controller.user.updateUserAvatar);
	router.get(apiPrefix + '/user/getUserList', controller.user.getUserList);
	// 文档
	router.post(apiPrefix + '/docs/add', auth, controller.document.createDocument);
	router.post(apiPrefix + '/docs/del', auth, controller.document.delDocument);
	router.get(apiPrefix + '/dos/list', auth, controller.document.getDocumentList);
	router.get(apiPrefix + '/dos/detail', auth, controller.document.getDocumentDetail);
	router.post(apiPrefix + '/docs/newFolder', auth, controller.document.createFolder);
	router.post(apiPrefix + '/docs/rename', auth, controller.document.renameFolder);
	router.get(apiPrefix + '/docs/path', auth, controller.document.getDocumentPathById);
	router.post(apiPrefix + '/docs/checkPass', controller.document.checkDocumentPassword);
	// 上传axure
	router.post(apiPrefix + '/docs/axure/upload', auth, controller.document.uploadAxureZip);
	// 点赞收藏
	router.get(apiPrefix + '/docs/star', auth, controller.document.starDocument);
	router.get(apiPrefix + '/docs/collect', auth, controller.document.collectDocument);
	// 我的文档
	router.get(apiPrefix + '/docs/myDocument', auth, controller.document.getCurrentUserDocumentList);
	// 我的收藏列表
	router.get(apiPrefix + '/docs/myCollectDocument', auth, controller.document.getMyCollectDocumentList);
	// 我的协作列表
	router.get(apiPrefix + '/docs/myCooperationDocument', auth, controller.document.getMyCooperationDocumentList);
	router.post(apiPrefix + '/docs/addCooperation/userIds', auth, controller.cooperation.addCooperationUser);
	router.post(apiPrefix + '/docs/addCooperation/groupId', auth, controller.cooperation.addCooperationUserByGroup);
	router.get(apiPrefix + '/docs/getCooperation/userList', auth, controller.cooperation.getCooperationUserListByDocumentId);
	router.post(apiPrefix + '/delCooperation/user', auth, controller.cooperation.removeCooperationUser);

	// 我的浏览历史列表
	router.get(apiPrefix + '/docs/myVisitHistoryDocument', auth, controller.document.getMyVisitHistoryDocumentList);
	// 我的回收站
	router.get(apiPrefix + '/docs/myRecycleBin', auth, controller.document.getMyRecycleBinDocumentList);
	router.post(apiPrefix + '/docs/distory', auth, controller.document.distoryDocument);
	router.post(apiPrefix + '/docs/recovery', auth, controller.document.recoveryDocument);

	// 分组管理团队管理
	router.post(apiPrefix + '/userGroup/create', auth, controller.userGroup.createUserGroup);
	router.get(apiPrefix + '/userGroup/list', auth, controller.userGroup.getUserGroupList);
	router.post(apiPrefix + '/userGroup/addUsers', auth, controller.userGroup.addUsersToUserGroup);
	router.post(apiPrefix + '/userGroup/delUser', auth, controller.userGroup.delUsersFromUserGroup);
	router.get(apiPrefix + '/userGroup/userList', auth, controller.userGroup.getUsersByGroupId);
	router.get(apiPrefix + '/userGroup/del', auth, controller.userGroup.delUserGroup);

	// 访问设置
	router.get(apiPrefix + '/docs/visit/getDocMembers', auth, controller.document.getMembersByDocumentId);
	router.get(apiPrefix + '/docs/getDocMembers', auth, controller.document.getMembersByDocumentId);
	router.post(apiPrefix + '/docs/visit/setAsTeam', auth, controller.document.setDocumentVisitTeam);
	router.post(apiPrefix + '/docs/visit/setAsOpen', auth, controller.document.setDocumentOpen);
	router.post(apiPrefix + '/docs/visit/setAsPrivate', auth, controller.document.setDocumentPrivate);

	// 我的模板
	router.get(apiPrefix + '/docs/myTemplate', auth, controller.document.getMyTemplateDocument);

	router.get('/', controller.home.index);
};
