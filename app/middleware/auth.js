'use strict';

const connect = require('@znode/connect');
const doreamon = require('@zodash/doreamon');

/**
 * 登录验证
 * @author huangwei9527
 * @return {null} null
 */
module.exports = () => {
	return async function(ctx, next) {
		if (!!ctx.headers['x-connect-token']) {
			const connectUser = connect.getUserBySecretKeyAndToken(process.env.SECRET_KEY, ctx.headers['x-connect-token']);
			console.log('connect user: ', connectUser);
			const email = connectUser.email;
			let user = await ctx.service.user.getUserByUsername(email);
			console.log(`get user by email(${email}) ?`, user);
			if (!user) {
				user = await ctx.service.user.createUser(
					email,
					doreamon.default.random.password(),
					email,
					connectUser.nickname,
					connectUser.avatar,
				);
			}

			// ctx.request.user = user;
			// ctx.request.user = user.toObject();
			ctx.request.user = JSON.parse(JSON.stringify(user));

			console.log(`ctx.request.user:`, ctx.request.user, ctx.request.user._id === '64e4e469d384122dc48e1dc2');
			await next();
			return;
		}

		let token = '';
		if (
			ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer'
		) {
			token = ctx.headers.authorization.split(' ')[1];
		} else if (ctx.query.accesstoken) {
			token = ctx.query.accesstoken;
		} else if (ctx.request.body.accesstoken) {
			token = ctx.request.body.accesstoken;
		} else if (ctx.session.accesstoken) {
			token = ctx.session.accesstoken;
		}
		let user;
		try{
			user = await ctx.checkToken(token);
		}catch (e) {
			ctx.returnBody(false,{}, 'Token 无效，请重新登录', 401);
		}
		if (!user) {
			ctx.returnBody(false,{}, 'Token 无效，请重新登录', 401);
			return;
		}
		ctx.request.user = user;
		await next();
	};
};
