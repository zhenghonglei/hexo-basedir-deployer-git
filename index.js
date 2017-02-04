/* global hexo */
'use strict';

hexo.extend.deployer.register('basedir-git', require('./lib/deployer'));
