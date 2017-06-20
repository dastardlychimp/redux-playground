// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest', 'react']}
};

exports.modules = {
  autoRequire: {
    // outputFileName : [ entryModule ]
    'javascripts/app.js': ['initialize']
  }
}

exports.hot = true;
