Package.describe({
  name: 'mdg:loading-spinner',
  version: '0.2.7',
  summary: 'Basic in-place spinner',
  git: 'https://github.com/meteor/chromatic',
  documentation: null,
})

Package.onUse(function (api) {
  api.versionsFrom('1.3')
  api.use(['ecmascript', 'less@3.0.1', 'mdg:borealis@0.2.5'])
  api.addFiles(['LoadingSpinner.jsx', 'LoadingSpinner.less'], 'client')
  api.export('LoadingSpinner', 'client')
})
