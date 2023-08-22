'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
	
	_indexHTML = '';

	get indexHTML() {
		if (!this._indexHTML) {
			this._indexHTML = fs.readFileSync(path.join(__dirname, '../../dist/index.html'));
		}

		return this._indexHTML;
	}

	/**
	 * 首页
	 * @returns {Promise<void>}
	 */
	async index() {
		const { ctx } = this;
		ctx.type = 'text/html';
		ctx.body = this.indexHTML;
	}
}

module.exports = HomeController;
