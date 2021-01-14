Package.describe({
  name: 'mdg:borealis',
  version: '0.2.9-beta.15',
  summary: 'a style system',
  documentation: null,
});
Npm.depends({
  'lodash.keyby': '4.6.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use(['ecmascript', 'less', 'percolate:icons@0.0.12']);

  api.imply(['percolate:icons'], 'client');
  api.export([
    'LogoLight',
    'HeaderLogo',
    'NavigationBar',
    'LogoDark',
    'Header',
    'HeaderProvider',
    'PlanRibbon',
  ]);

  api.addAssets(
    [
      'icons/fonts/PulpDisplay-Bold.ttf',
      'icons/fonts/PulpDisplay-Light.ttf',
      'icons/fonts/PulpDisplay-Medium.ttf',
      'icons/box-bg.png',
      'icons/forums.svg',
      'icons/dashboard-logo.svg',
      'icons/galaxy-logo.svg',
      'icons/atmosphere-logo.svg',
      'icons/apm-logo.svg',
      'icons/slack.svg',
      'icons/tutorials.svg',
      'icons/lock.svg',
      'icons/lock-ok.svg',
      'icons/lock-ok-empty.svg',
      'icons/svg/arrow-down.svg',
      'icons/svg/arrow-right.svg',
      'icons/svg/check.svg',
      'icons/svg/headerLogo.svg',
      'icons/svg/logoLight.svg',
      'icons/svg/logoDark.svg',
      'icons/countries/ap-southeast-2.svg',
      'icons/countries/eu-west-1.svg',
      'icons/countries/staging.svg',
      'icons/countries/us-east-1.svg',
      'icons/countries/localhost.svg',
    ],
    'client'
  );
  api.addFiles(
    [
      'react-components/NavigationBar.js',
      'react-components/useHeaderInfo.js',
      'react-components/Header.js',
      'react-components/PlanRibbon.js',
      'icons/logo/LogoLight.js',
      'icons/logo/LogoDark.js',
      'icons/logo/HeaderLogo.js',
      'form-components/cardinal.import.less',
      'form-components/ribbon.import.less',
      'form-components/checkbox.import.less',
      'form-components/form-components.import.less',
      'form-components/form.import.less',
      'form-components/index.import.less',
      'form-components/input.import.less',
      'form-components/radio.import.less',
      'form-components/searchbar.import.less',
      'form-components/select.import.less',
      'form-components/textarea.import.less',
      'global/animation.import.less',
      'global/base.import.less',
      'global/button.import.less',
      'global/drawer.import.less',
      'global/formatting.import.less',
      'global/global.import.less',
      'global/header.import.less',
      'global/link.import.less',
      'global/list.import.less',
      'global/mobile.import.less',
      'global/nav.import.less',
      'global/normalize.import.less',
      'global/section.import.less',
      'global/table.import.less',
      'global/transition.import.less',
      'icons/icons.import.less',
      'overlays/overlays.import.less',
      'util/clearfix.import.less',
      'util/color.import.less',
      'util/easing.import.less',
      'util/helper.import.less',
      'util/index.import.less',
      'util/lesshat.import.less',
      'util/link.import.less',
      'util/text.import.less',
      'util/typography.import.less',
      'util/ui.import.less',
      'index.import.less',
    ],
    'client'
  );
});
