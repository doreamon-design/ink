/**文档相关接口*/

import $axios from "@/service/httpServer";

// 获取文档列表
export const getDocsList = p => $axios.get('/api/dos/list', p);

// 获取文档详情
export const getDocumentDetail = p => $axios.get('/api/dos/detail', p);

// 创建文件夹
export const newFolder = p => $axios.post('/api/docs/newFolder', p);

// 新增文档
export const createDocument = p => $axios.post('/api/docs/add', p);

// 删除文档
export const delDocument = p => $axios.post('/api/docs/del', p);

// 文档重命名
export const documentRename = p => $axios.post('/api/docs/rename', p);

// 获取文档路径
export const getDocumentPathById = p => $axios.get('/api/docs/path', p)

// 点赞
export const starDocument = p => $axios.get('/api/docs/star', p)

// 收藏
export const collectDocument = p => $axios.get('/api/docs/collect', p)

/**
 * 我的文档
 * */
// 我的文档列表
export const getMyDocumentList = () => $axios.get('/api/docs/myDocument')

/**
 * 我的收藏
 * */
// 我的文档列表
export const getMyCollectDocumentList = () => $axios.get('/api/docs/myCollectDocument')

/**
 * 我的协作
 * */
// 我的文档列表
export const getMyCooperationDocumentList = () => $axios.get('/api/docs/myCooperationDocument')
// 按小组添加协作人
export const addCooperationUser = p => $axios.post('/api/docs/addCooperation/userIds', p)
// 按userIds添加协作人
export const addCooperationUserByGroup = p => $axios.post('/api/docs/addCooperation/groupId', p)
// 获取协作人列表
export const getCooperationUserListByDocumentId = p => $axios.get('/api/docs/getCooperation/userList', p)
// 删除协作人
export const removeCooperationUser = p => $axios.post('/api/delCooperation/user', p)

/**
 * 我的浏览历史
 * */
// 我的文档列表
export const getMyVisitHistoryDocumentList = () => $axios.get('/api/docs/myVisitHistoryDocument')

/**
 * 我的回收站
 * */
// 我的文档列表
export const getMyRecycleBinDocumentList = () => $axios.get('/api/docs/myRecycleBin')
// 恢复文档
export const recoveryDocument = p => $axios.post('/api/docs/recovery', p)
// 彻底删除文档
export const destroyDocument = p => $axios.post('/api/docs/distory', p)

/**
 * 上传axure压缩包
 */
export const docsUplaodAxure = p => $axios.post('/api/docs/axure/upload', p)

/**
 * 设置访问方式
 */
export const getMembersByDocumentId = p => $axios.get('/api/docs/getDocMembers', p)
export const setDocumentVisitTeam = p => $axios.post('/api/docs/visit/setAsTeam', p)
export const setDocumentOpen = p => $axios.post('/api/docs/visit/setAsOpen', p)
export const setDocumentPrivate = p => $axios.post('/api/docs/visit/setAsPrivate', p)
export const documentCheckPass = p => $axios.post('/api/docs/checkPass', p)

/**
 * 我的模板
 */
export const getMyTemplate = p => $axios.get('/api/docs/myTemplate', p);
