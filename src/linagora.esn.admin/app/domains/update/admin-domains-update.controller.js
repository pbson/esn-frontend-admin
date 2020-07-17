'use strict';

require('../admin-domains.service.js');

angular.module('linagora.esn.admin')
  .controller('adminDomainUpdateController', adminDomainUpdateController);

function adminDomainUpdateController($scope, adminDomainsService, domain) {
  var self = this;

  self.domain = domain;

  self.update = update;

  function update() {
    adminDomainsService.update(self.domain);
  }
}
